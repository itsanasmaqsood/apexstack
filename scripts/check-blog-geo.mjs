import fs from "node:fs";
import path from "node:path";

import { parse } from "node-html-parser";

const outputDirectory = path.join(process.cwd(), ".next", "server", "app", "blog");

if (!fs.existsSync(outputDirectory)) {
  throw new Error("Missing built blog output. Run `npm run build` before this check.");
}

const files = fs
  .readdirSync(outputDirectory, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
  .map((entry) => path.join(outputDirectory, entry.name));

if (files.length === 0) {
  throw new Error("No prerendered blog articles were found in the Next.js build output.");
}

const errors = [];
const canonicals = new Map();

function record(file, message) {
  errors.push(`${path.basename(file)}: ${message}`);
}

for (const file of files) {
  const root = parse(fs.readFileSync(file, "utf8"));
  const canonical = root.querySelector('link[rel="canonical"]')?.getAttribute("href");
  const description = root.querySelector('meta[name="description"]')?.getAttribute("content")?.trim();
  const robots = root.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "";
  const title = root.querySelector("title")?.text.trim();
  const article = root.querySelector("article");

  if (!title) record(file, "missing document title");
  if (!description) record(file, "missing meta description");
  if (!canonical) {
    record(file, "missing canonical URL");
  } else if (canonicals.has(canonical)) {
    record(file, `duplicates canonical used by ${canonicals.get(canonical)}`);
  } else {
    canonicals.set(canonical, path.basename(file));
  }
  if (/noindex/i.test(robots)) record(file, "contains an accidental noindex directive");
  if (!article) record(file, "missing article element");
  if (!article?.querySelector("time[datetime]")) record(file, "missing visible publication date");
  if (!article?.text.includes("The short answer")) record(file, "missing answer-first summary");

  const headings = article?.querySelectorAll("h2, h3") ?? [];
  let hasSeenH2 = false;
  for (const heading of headings) {
    if (!heading.text.trim()) record(file, "contains an empty section heading");
    if (heading.tagName === "H2") hasSeenH2 = true;
    if (heading.tagName === "H3" && !hasSeenH2) {
      record(file, "contains an h3 before the first h2");
      break;
    }
  }

  const nodes = [];
  for (const script of root.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      const value = JSON.parse(script.text);
      if (Array.isArray(value?.["@graph"])) nodes.push(...value["@graph"]);
      else nodes.push(value);
    } catch {
      record(file, "contains invalid JSON-LD");
    }
  }

  const postings = nodes.filter((node) => node?.["@type"] === "BlogPosting");
  if (postings.length !== 1) record(file, `expected one BlogPosting node, found ${postings.length}`);
  const posting = postings[0];
  for (const property of ["headline", "datePublished", "dateModified", "author", "image"]) {
    if (!posting?.[property]) record(file, `BlogPosting is missing ${property}`);
  }

  const visibleFaqCount = article?.querySelectorAll("section#faq dt").length ?? 0;
  const faqNodes = nodes.filter((node) => node?.["@type"] === "FAQPage");
  if (visibleFaqCount === 0 && faqNodes.length > 0) {
    record(file, "emits FAQPage schema without visible FAQs");
  }
  if (visibleFaqCount > 0) {
    if (faqNodes.length !== 1) record(file, `expected one FAQPage node, found ${faqNodes.length}`);
    const schemaFaqCount = Array.isArray(faqNodes[0]?.mainEntity)
      ? faqNodes[0].mainEntity.length
      : 0;
    if (schemaFaqCount !== visibleFaqCount) {
      record(file, `FAQ schema has ${schemaFaqCount} questions but the page shows ${visibleFaqCount}`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Blog GEO verification failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Blog GEO verification passed for ${files.length} prerendered articles.`);
}
