import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import test from "node:test";

const ORIGIN = "https://www.dreamlaunch.studio";
const scriptUrl = new URL("./sync-blog.mjs", import.meta.url).href;
const knownSlug = "already-represented";
const sourceBody = "SYNTHETIC SOURCE BODY: DreamLaunch must never become public ApexStack copy.";
const article = `<script type="application/ld+json">{"@type":"Article","datePublished":"2026-10-09T09:00:00Z"}</script>
  <article><h1>DreamLaunch fixture</h1><h2 id="details">Details</h2><p>${sourceBody}</p></article>`;

function runCli({ index = `<a href="/blog/${knownSlug}">Known</a>`, sitemap = "<urlset></urlset>", pages = {}, flags = [], failures = {} } = {}) {
  const directory = mkdtempSync(join(tmpdir(), "apexstack-blog-sync-"));
  const postsDirectory = join(directory, "src/data/blog/posts");
  const indexFile = join(directory, "src/data/blog/index.ts");
  mkdirSync(postsDirectory, { recursive: true });
  writeFileSync(join(postsDirectory, `${knownSlug}.ts`), "existing post fixture\n");
  writeFileSync(indexFile, "existing registry fixture\n");
  const fixtures = {
    [`${ORIGIN}/blog`]: { body: index },
    [`${ORIGIN}/sitemap.xml`]: { body: sitemap, contentType: "application/xml" },
    ...Object.fromEntries(Object.entries(pages).map(([slug, body]) => [`${ORIGIN}/blog/${slug}`, { body }])),
    ...failures,
  };
  // Only the external boundary is replaced. The actual CLI, parser, filesystem
  // reads, reporting and exit behaviour execute in a fresh Node process.
  const bootstrap = `
    const fixtures = ${JSON.stringify(fixtures)};
    const requests = [];
    const realTimeout = AbortSignal.timeout.bind(AbortSignal);
    AbortSignal.timeout = (milliseconds) => realTimeout(Math.min(milliseconds, 25));
    process.argv.push(...${JSON.stringify(flags)});
    globalThis.fetch = async (url, options = {}) => {
      requests.push(String(url));
      const fixture = fixtures[String(url)];
      if (!fixture) throw new Error("Unexpected fixture URL; real network is disabled");
      if (fixture.error) throw new Error(fixture.error);
      if (fixture.timeout) {
        if (!options.signal) throw new Error("Request has no abort signal");
        return new Promise((resolve, reject) => {
          const guard = setTimeout(() => reject(new Error("Abort signal did not fire")), 1000);
          options.signal.addEventListener("abort", () => {
            clearTimeout(guard);
            reject(options.signal.reason);
          }, { once: true });
        });
      }
      if (fixture.status === 302 && options.redirect !== "manual") {
        requests.push(fixture.headers.location);
        throw new Error("Automatic redirect followed");
      }
      return new Response(fixture.body ?? "", {
        status: fixture.status ?? 200,
        headers: { "content-type": fixture.contentType ?? "text/html", ...(fixture.headers ?? {}) },
      });
    };
    process.on("exit", () => console.error("__REQUESTS__" + JSON.stringify(requests)));
    await import(${JSON.stringify(scriptUrl)});
  `;
  try {
    const result = spawnSync(process.execPath, ["--input-type=module", "--eval", bootstrap], {
      cwd: directory,
      encoding: "utf8",
      timeout: 5000,
    });
    assert.ifError(result.error);
    const requestLine = result.stderr.match(/__REQUESTS__(\[[^\n]+\])/);
    assert.ok(requestLine, result.stderr);
    return {
      status: result.status,
      stdout: result.stdout,
      stderr: result.stderr.replace(/__REQUESTS__[^\n]+\n?/, ""),
      requests: JSON.parse(requestLine[1]),
      postFiles: readdirSync(postsDirectory),
      existingPost: readFileSync(join(postsDirectory, `${knownSlug}.ts`), "utf8"),
      registry: readFileSync(indexFile, "utf8"),
    };
  } finally {
    const resolvedDirectory = resolve(directory);
    assert.equal(dirname(resolvedDirectory), resolve(tmpdir()));
    assert.ok(basename(resolvedDirectory).startsWith("apexstack-blog-sync-"));
    assert.ok(basename(resolvedDirectory).length > "apexstack-blog-sync-".length);
    rmSync(resolvedDirectory, { recursive: true, force: true });
  }
}

test("CLI discovers and deduplicates valid same-origin links but rejects external links", () => {
  const result = runCli({
    index: `<a href="${ORIGIN}/blog/absolute">A</a>
      <a href='/blog/single-quote'>B</a><a href="/blog/trailing/">C</a>
      <a href="/blog/query?from=index#part">D</a><a href="/blog/query">Duplicate</a>
      <a href="https://example.invalid/blog/external">External</a>`,
    pages: { absolute: article, "single-quote": article, "trailing/": article, "query?from=index": article },
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /inspiration candidates 4/);
  for (const slug of ["absolute", "single-quote", "trailing", "query"]) {
    assert.match(result.stdout, new RegExp(`${ORIGIN}/blog/${slug}`));
  }
  assert.equal(result.requests.filter((url) => url === `${ORIGIN}/blog/query?from=index`).length, 1);
  assert.ok(!result.requests.includes(`${ORIGIN}/blog/query`));
  assert.ok(result.requests.every((url) => url.startsWith(`${ORIGIN}/`)));
});

test("CLI preserves the first index URL's required slash and query while removing its fragment", () => {
  const articleUrl = `${ORIGIN}/blog/slash-required/?from=index`;
  const result = runCli({
    index: '<a href="/blog/slash-required/?from=index#details">Topic</a><a href="/blog/slash-required">Duplicate</a>',
    sitemap: `<urlset><url><loc>${ORIGIN}/blog/slash-required/?from=sitemap</loc></url></urlset>`,
    pages: { "slash-required/?from=index": article },
    failures: { [`${ORIGIN}/blog/slash-required`]: { status: 302, headers: { location: articleUrl } } },
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /inspiration candidates 1/);
  assert.ok(result.stdout.includes(articleUrl));
  assert.deepEqual(result.requests, [`${ORIGIN}/blog`, `${ORIGIN}/sitemap.xml`, articleUrl]);
});

for (const [name, body] of [
  ["headings without ids", `<h2>First</h2><p>${sourceBody}</p><h2>Second</h2><p>More body</p>`],
  ["headings and blocks in separate wrappers", `<section><div><h2>First</h2></div><div><p>${sourceBody}</p></div></section><section><h2>Second</h2><div><p>More body</p></div></section>`],
]) {
  test(`CLI recognises ${name} with BlogPosting dates`, () => {
    const result = runCli({
      index: '<a href="/blog/new-topic">Topic</a>',
      pages: { "new-topic": `<script type="application/ld+json">{"@graph":[{"@type":["BlogPosting","CreativeWork"],"datePublished":"2026-10-10T08:30:00Z"}]}</script><article><h1>Topic</h1>${body}</article>` },
    });
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /inspiration candidates 1/);
    assert.match(result.stdout, /2 sections/);
    assert.match(result.stdout, /2026-10-10/);
    assert.doesNotMatch(result.stdout, /SYNTHETIC SOURCE BODY|More body/);
  });
}

test("empty index discovery fails instead of claiming there are no new posts", () => {
  const result = runCli({ index: "<html><h1>Unrecognised page</h1></html>" });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /index.*https:\/\/www\.dreamlaunch\.studio\/blog.*zero|zero.*index/is);
  assert.doesNotMatch(result.stdout, /nothing new|no new candidates/i);
});

test("unavailable sitemap marks discovery incomplete even when the index is already represented", () => {
  const result = runCli({ failures: { [`${ORIGIN}/sitemap.xml`]: { status: 503 } } });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /sitemap.*503.*https:\/\/www\.dreamlaunch\.studio\/sitemap\.xml|sitemap.*https:\/\/www\.dreamlaunch\.studio\/sitemap\.xml.*503/is);
  assert.match(`${result.stdout}${result.stderr}`, /incomplete/i);
  assert.doesNotMatch(result.stdout, /nothing new|no new candidates/i);
});

test("successful discovery reports no new candidates only after checking both sources", () => {
  const result = runCli();
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /no new candidates/i);
  assert.deepEqual(result.requests, [`${ORIGIN}/blog`, `${ORIGIN}/sitemap.xml`]);
});

test("successful report identifies the checked index and its UTC fetch time", () => {
  const result = runCli();
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Index fetched at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z.*https:\/\/www\.dreamlaunch\.studio\/blog.*HTTP 200/);
});

test("denied index stops without retry or alternative requests and identifies the stage and UTC attempt", () => {
  const result = runCli({ failures: { [`${ORIGIN}/blog`]: { status: 403 } } });
  assert.equal(result.status, 1);
  assert.deepEqual(result.requests, [`${ORIGIN}/blog`]);
  assert.match(result.stderr, /index.*403.*https:\/\/www\.dreamlaunch\.studio\/blog|index.*https:\/\/www\.dreamlaunch\.studio\/blog.*403/is);
  assert.match(result.stderr, /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
});

test("candidate HTTP failures make the report incomplete rather than succeeding with zero candidates", () => {
  const result = runCli({
    index: '<a href="/blog/new-topic">Topic</a>',
    failures: { [`${ORIGIN}/blog/new-topic`]: { status: 503 } },
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /article.*503.*https:\/\/www\.dreamlaunch\.studio\/blog\/new-topic|article.*https:\/\/www\.dreamlaunch\.studio\/blog\/new-topic.*503/is);
  assert.match(`${result.stdout}${result.stderr}`, /incomplete/i);
});

for (const status of [401, 403]) {
  for (const stage of ["index", "sitemap", "article"]) {
    test(`HTTP ${status} at ${stage} stops all further requests`, () => {
      const deniedUrl = stage === "index" ? `${ORIGIN}/blog` : stage === "sitemap" ? `${ORIGIN}/sitemap.xml` : `${ORIGIN}/blog/first`;
      const result = runCli({
        index: '<a href="/blog/first">First</a><a href="/blog/second">Second</a>',
        pages: { first: article, second: article },
        failures: { [deniedUrl]: { status } },
      });
      assert.equal(result.status, 1);
      assert.equal(result.requests.at(-1), deniedUrl);
      assert.equal(result.requests.filter((url) => url === deniedUrl).length, 1);
      assert.match(result.stderr, new RegExp(`${stage}.*${status}`, "s"));
      assert.doesNotMatch(result.stdout, /nothing new|no new candidates/i);
    });
  }
}

test("sitemap accepts same-origin locations and rejects off-origin locations", () => {
  const result = runCli({
    sitemap: `<urlset><url><loc>${ORIGIN}/blog/sitemap-topic/?from=map</loc></url><url><loc>https://example.invalid/blog/external</loc></url></urlset>`,
    pages: { "sitemap-topic/?from=map": article },
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /inspiration candidates 1/);
  assert.match(result.stdout, /sitemap-topic.*2026-10-09/);
  assert.ok(result.requests.every((url) => url.startsWith(`${ORIGIN}/`)));
});

test("an unrecognised article body is an incomplete report, not a confirmed alias stub", () => {
  const result = runCli({ index: '<a href="/blog/new-topic">Topic</a>', pages: { "new-topic": "<h1>Topic</h1>" } });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /article.*https:\/\/www\.dreamlaunch\.studio\/blog\/new-topic.*200/is);
  assert.match(`${result.stdout}${result.stderr}`, /incomplete/i);
  assert.doesNotMatch(result.stdout, /alias stub/);
});

test("request timeout reports its original stage and does not retry", () => {
  const result = runCli({ failures: { [`${ORIGIN}/blog`]: { timeout: true } } });
  assert.equal(result.status, 1);
  assert.deepEqual(result.requests, [`${ORIGIN}/blog`]);
  assert.match(result.stderr, /index.*https:\/\/www\.dreamlaunch\.studio\/blog.*timed out after/is);
});

test("redirects are reported without following another host", () => {
  const result = runCli({ failures: { [`${ORIGIN}/blog`]: { status: 302, headers: { location: "https://example.invalid/replacement" } } } });
  assert.equal(result.status, 1);
  assert.deepEqual(result.requests, [`${ORIGIN}/blog`]);
  assert.match(result.stderr, /index.*302/is);
});

for (const flags of [[], ["--dry-run"], ["--write"]]) {
  test(`report remains read-only with flags ${JSON.stringify(flags)}`, () => {
    const result = runCli({ index: '<a href="/blog/new-topic">Topic</a>', pages: { "new-topic": article }, flags });
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /inspiration candidates 1/);
    assert.deepEqual(result.postFiles, [`${knownSlug}.ts`]);
    assert.equal(result.existingPost, "existing post fixture\n");
    assert.equal(result.registry, "existing registry fixture\n");
    assert.doesNotMatch(result.stdout, /SYNTHETIC SOURCE BODY/);
  });
}
