import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { after, test } from "node:test";
import { fileURLToPath } from "node:url";

const verifier = fileURLToPath(new URL("./check-blog-geo.mjs", import.meta.url));
const temporaryRoot = fs.realpathSync(os.tmpdir());
const fixture = fs.mkdtempSync(path.join(temporaryRoot, "apexstack-claim-test-"));
const output = path.join(fixture, ".next", "server", "app", "blog");
const ledgerDirectory = path.join(fixture, "src", "data", "blog");
const mvpSlug = "mvp-development-for-startups";
const otherSlug = "another-completed-article";
const completed = [mvpSlug, otherSlug, ...Array.from({ length: 85 }, (_, i) => `completed-${i}`)];
const originalised = ["original-one", "original-two", "original-three"];

function articleHtml(slug, {
  visible = "Scope a first release before agreeing its quote.",
  title = "Scope a first release",
  description = "A buyer decision guide.",
  ogTitle = "Scope a first release",
  twitterDescription = "A buyer decision guide.",
  headline = "Scope a first release",
} = {}) {
  const posting = {
    "@type": "BlogPosting",
    headline,
    datePublished: "2026-08-12",
    dateModified: "2026-08-12",
    author: { "@type": "Organization", name: "ApexStack" },
    image: "https://apexstack.dev/images/guide.png",
  };
  return `<!doctype html><html><head>
    <title>${title}</title><meta name="description" content="${description}">
    <meta property="og:title" content="${ogTitle}">
    <meta name="twitter:description" content="${twitterDescription}">
    <link rel="canonical" href="https://apexstack.dev/blog/${slug}">
    <script type="application/ld+json">${JSON.stringify(posting)}</script>
    </head><body><article><h1>Scope a first release</h1>
    <time datetime="2026-08-12">12 August 2026</time>
    <h2>The short answer</h2><p>${visible}</p></article></body></html>`;
}

fs.mkdirSync(output, { recursive: true });
fs.mkdirSync(ledgerDirectory, { recursive: true });
fs.writeFileSync(path.join(ledgerDirectory, "migration.ts"), [
  "export const PENDING_MIRROR_REWRITES = [] as const;",
  `export const COMPLETED_MIRROR_REWRITES = ${JSON.stringify(completed)} as const;`,
  `export const ALREADY_ORIGINALISED_DREAMLAUNCH_POSTS = ${JSON.stringify(originalised)} as const;`,
].join("\n"));
for (const slug of [...completed, ...originalised]) {
  fs.writeFileSync(path.join(output, `${slug}.html`), articleHtml(slug));
}

after(() => {
  // Only remove the unique test directory created above, never a supplied path.
  assert.equal(path.dirname(fs.realpathSync(fixture)), temporaryRoot);
  assert.ok(path.basename(fixture).startsWith("apexstack-claim-test-"));
  fs.rmSync(fixture, { recursive: true, force: true });
});

function verify(overrides = {}, slug = mvpSlug) {
  for (const resetSlug of [mvpSlug, otherSlug]) {
    fs.writeFileSync(path.join(output, `${resetSlug}.html`), articleHtml(resetSlug));
  }
  fs.writeFileSync(path.join(output, `${slug}.html`), articleHtml(slug, overrides));
  const result = spawnSync(process.execPath, [verifier], { cwd: fixture, encoding: "utf8" });
  assert.equal(result.error, undefined);
  return result;
}

test("accepts an otherwise valid completed-migration fixture", () => {
  const result = verify();
  assert.equal(result.status, 0, result.stderr);
});

// These fail if the obsolete offer can bypass the gate through a new spelling.
for (const price of ["$6,500", "US$6,500", "$6500", "US$6.5k", "us $ 6.5 K", "$6 500", "$6,500.00"]) {
  test(`rejects obsolete completed-article offer ${price}`, () => {
    const result = verify({ visible: `MVP development starts at ${price}.` });
    assert.equal(result.status, 1, `${price} escaped the claim gate.\n${result.stdout}`);
    assert.match(result.stderr, /claim-risk pattern/);
  });
}

// A clean body must not let unsupported search/social/schema claims pass.
for (const field of ["title", "description", "ogTitle", "twitterDescription", "headline"]) {
  test(`rejects obsolete price when it occurs only in ${field}`, () => {
    const result = verify({ [field]: "MVP development from US$6.5k" });
    assert.equal(result.status, 1, `${field} escaped the claim gate.\n${result.stdout}`);
    assert.match(result.stderr, /claim-risk pattern/);
  });
}

for (const title of ["MVP Development: Ship in 4-6 Weeks", "MVP Development: Ship in 4–6 Weeks", "MVP Development: Ship in 4 to 6 Weeks"]) {
  test(`rejects the unsupported MVP timeline: ${title}`, () => {
    const result = verify({ title });
    assert.equal(result.status, 1, `The MVP timeline escaped the claim gate.\n${result.stdout}`);
    assert.match(result.stderr, /unsupported MVP delivery timeline/);
  });
}

for (const field of ["visible", "headline"]) {
  test(`rejects the unsupported MVP timeline when it occurs only in ${field}`, () => {
    const result = verify({ [field]: "Ship in 4–6 weeks" });
    assert.equal(result.status, 1, `${field} escaped the timeline gate.\n${result.stdout}`);
    assert.match(result.stderr, /unsupported MVP delivery timeline/);
  });
}

test("permits authorised offers, unrelated amounts and non-promissory week references", () => {
  const result = verify({ visible: "Product Blueprint starts from US$1,000; Launch Sprint starts from US$2,500. Example inputs: $65,000, $6,500,000, $65001 and $6.5m. Review dependencies before discussing weeks." });
  assert.equal(result.status, 0, result.stderr);
});

test("keeps the specific MVP timeline guard scoped to the corrected page", () => {
  const result = verify({ visible: "A buyer may ask whether to ship in 4–6 weeks; first review the scope and evidence." }, otherSlug);
  assert.equal(result.status, 0, result.stderr);
});
