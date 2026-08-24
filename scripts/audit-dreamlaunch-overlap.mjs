import { readFileSync } from "node:fs";
import { join } from "node:path";

import { parse } from "node-html-parser";

const POSTS_DIR = join("src", "data", "blog", "posts");
const MIGRATION_FILE = join("src", "data", "blog", "migration.ts");
const SOURCE_OVERRIDES = {
  "ai-product-development-for-startups-apexstack":
    "ai-product-development-for-startups-dreamlaunch",
  "apexstack-4-6-week-mvp-process-what-happens":
    "dreamlaunch-4-6-week-mvp-process-what-happens",
};
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36";

function ledgerValues(source, name) {
  const match = source.match(new RegExp(`export const ${name} = \\[([\\s\\S]*?)\\] as const;`));
  if (!match) throw new Error(`Missing ${name} in migration ledger`);
  return [...match[1].matchAll(/"([^"]+)"/g)].map((entry) => entry[1]);
}

function normalise(value) {
  return value
    .replace(/&(?:amp|quot|apos|#39|#x27);/gi, " ")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .toLowerCase();
}

function localProse(source) {
  const values = [];
  for (const match of source.matchAll(/(?:description|excerpt|keyTakeaway|text|answer): ("(?:\\.|[^"\\])*")/g)) {
    values.push(JSON.parse(match[1]));
  }
  return normalise(values.join(" "));
}

function overlap(local, remote, width = 16) {
  const words = local.split(" ");
  for (let index = 0; index <= words.length - width; index += 1) {
    const phrase = words.slice(index, index + width).join(" ");
    if (remote.includes(phrase)) return phrase;
  }
  return undefined;
}

async function inspect(slug) {
  const sourceSlug = SOURCE_OVERRIDES[slug] ?? slug;
  const response = await fetch(`https://www.dreamlaunch.studio/blog/${sourceSlug}`, {
    headers: { "user-agent": UA },
  });
  if (!response.ok) return { slug, skipped: `source returned HTTP ${response.status}` };
  const remote = normalise(parse(await response.text()).text);
  const local = localProse(readFileSync(join(POSTS_DIR, `${slug}.ts`), "utf8"));
  return { slug, phrase: overlap(local, remote) };
}

const ledger = readFileSync(MIGRATION_FILE, "utf8");
const slugs = ledgerValues(ledger, "COMPLETED_MIRROR_REWRITES");
const results = [];
for (let index = 0; index < slugs.length; index += 8) {
  results.push(...(await Promise.all(slugs.slice(index, index + 8).map(inspect))));
}

const overlaps = results.filter((result) => result.phrase);
const skipped = results.filter((result) => result.skipped);
if (overlaps.length) {
  console.error(`Found ${overlaps.length} source overlaps of 16 or more consecutive words:`);
  for (const result of overlaps) console.error(`- ${result.slug}: ${result.phrase}`);
  process.exitCode = 1;
} else {
  console.log(`No 16-word source-copy overlap found across ${results.length - skipped.length} checked posts.`);
}
if (skipped.length) {
  console.log(`${skipped.length} source pages could not be checked:`);
  for (const result of skipped) console.log(`- ${result.slug}: ${result.skipped}`);
}
