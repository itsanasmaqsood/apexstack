/**
 * Report DreamLaunch URLs as candidates for independent buyer-intent research.
 * This command is permanently report-only, regardless of command-line flags.
 * It never writes posts, copies source prose or changes the blog registry.
 * Run from the repository root: node scripts/sync-blog.mjs --dry-run
 */

import { existsSync, readdirSync } from "node:fs";
import { parse } from "node-html-parser";

const ORIGIN = "https://www.dreamlaunch.studio";
const POSTS_DIR = "src/data/blog/posts";
const REQUEST_TIMEOUT_MS = 15_000;
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36";

// These two source slugs were also renamed on disk during the former migration.
const RENAMED = {
  "ai-product-development-for-startups-apexstack":
    "ai-product-development-for-startups-dreamlaunch",
  "apexstack-4-6-week-mvp-process-what-happens":
    "dreamlaunch-4-6-week-mvp-process-what-happens",
};

const clean = (text) => (text ?? "").replace(/\s+/g, " ").trim();
const denied = (error) => error.status === 401 || error.status === 403;

function sourceError(source, message) {
  return Object.assign(
    new Error(`[${source.attemptedAt}] ${source.stage} ${source.url} (HTTP ${source.status}): ${message}`),
    { status: source.status },
  );
}

async function get(url, stage) {
  const source = { url, stage, attemptedAt: new Date().toISOString(), status: "unavailable" };
  try {
    const response = await fetch(url, {
      headers: { "user-agent": UA },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      // Redirects are surfaced for review, including redirects to another host.
      redirect: "manual",
    });
    source.status = response.status;
    if (!response.ok) throw new Error("request failed; no retry or fallback attempted");
    return { ...source, html: await response.text() };
  } catch (error) {
    const message = error.name === "TimeoutError"
      ? `request timed out after ${REQUEST_TIMEOUT_MS} ms`
      : error.message;
    throw sourceError(source, message);
  }
}

function sourceLink(value) {
  try {
    const url = new URL(value, `${ORIGIN}/blog`);
    if (url.origin !== ORIGIN || url.username || url.password) return undefined;
    const slug = url.pathname.match(/^\/blog\/([a-z0-9-]+)\/?$/)?.[1];
    if (!slug) return undefined;
    url.hash = "";
    return { slug, url: url.href };
  } catch {
    return undefined;
  }
}

function discover(source, sitemap = false) {
  const root = parse(source.html);
  if (sitemap && !root.querySelector("urlset")) {
    throw sourceError(source, "unrecognised sitemap format; discovery is incomplete");
  }
  const values = sitemap
    ? root.querySelectorAll("url > loc").map((element) => clean(element.text))
    : root.querySelectorAll("a[href]").map((element) => element.getAttribute("href"));
  const links = new Map();
  for (const value of values) {
    const link = sourceLink(value);
    if (link && !links.has(link.slug)) links.set(link.slug, link.url);
  }
  return links;
}

function schemaNodes(value) {
  if (Array.isArray(value)) return value.flatMap(schemaNodes);
  if (!value || typeof value !== "object") return [];
  return [value, ...schemaNodes(value["@graph"])];
}

function extractSummary(html) {
  const root = parse(html);
  const schema = [];
  for (const element of root.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      schema.push(...schemaNodes(JSON.parse(element.rawText)));
    } catch {
      // Body recognition remains useful when an unrelated schema block is invalid.
    }
  }
  const hasType = (node, type) => [node["@type"]].flat().includes(type);
  const article = schema.find((node) => hasType(node, "Article") || hasType(node, "BlogPosting"));
  const faq = schema.find((node) => hasType(node, "FAQPage"));
  const body = root.querySelector("article") ?? root.querySelector("main") ?? root;
  let sections = 0;
  let hasBody = false;
  let stopped = false;

  // Walk in document order so headings and prose may use separate wrappers.
  // Only retain structural counts; no source prose is returned or rewritten.
  function visit(element) {
    if (stopped) return;
    const tag = element.rawTagName?.toLowerCase();
    if (["script", "style", "nav", "header", "footer", "aside"].includes(tag)) return;
    if (tag === "h2") {
      if (hasBody) sections += 1;
      hasBody = false;
      const heading = clean(element.text).toLowerCase().replace(/[^a-z0-9]/g, "");
      if (/^(faq|frequentlyaskedquestions)/.test(heading)) stopped = true;
      return;
    }
    if (["p", "ul", "ol", "table", "blockquote", "pre"].includes(tag)) {
      if (clean(element.text)) hasBody = true;
      return;
    }
    for (const child of element.childNodes ?? []) {
      if (child.nodeType === 1) visit(child);
    }
  }
  visit(body);
  if (hasBody) sections += 1;
  return {
    hasTitle: Boolean(clean(root.querySelector("h1")?.text)),
    sections,
    faqs: Array.isArray(faq?.mainEntity) ? faq.mainEntity.length : 0,
    published: typeof article?.datePublished === "string" ? article.datePublished.slice(0, 10) : "unknown date",
  };
}

async function main() {
  if (!existsSync(POSTS_DIR)) throw new Error(`run this from the repo root; ${POSTS_DIR} not found`);
  console.log("report-only mode: source copy is never imported into ApexStack");

  // Read sequentially: a denial must stop before any further source request.
  const index = await get(`${ORIGIN}/blog`, "index");
  console.log(`Index fetched at ${index.attemptedAt}; ${index.url}; HTTP ${index.status}`);
  const live = discover(index);
  if (!live.size) throw sourceError(index, "zero identifiable blog URLs; discovery is incomplete");

  let incomplete = false;
  try {
    const sitemap = await get(`${ORIGIN}/sitemap.xml`, "sitemap");
    for (const [slug, url] of discover(sitemap, true)) {
      if (!live.has(slug)) live.set(slug, url);
    }
  } catch (error) {
    if (denied(error)) throw error;
    console.error(error.message);
    incomplete = true;
  }

  const have = new Set(
    readdirSync(POSTS_DIR)
      .filter((file) => file.endsWith(".ts"))
      .map((file) => RENAMED[file.slice(0, -3)] ?? file.slice(0, -3)),
  );
  const candidates = [...live.keys()].filter((slug) => !have.has(slug)).sort();
  console.log(`discovered ${live.size} · represented locally ${have.size} · candidate URLs ${candidates.length}`);
  if (!candidates.length && !incomplete) {
    console.log("No new candidates in the checked index and sitemap.");
    return;
  }

  const summaries = [];
  for (const slug of candidates) {
    try {
      const source = await get(live.get(slug), "article");
      const summary = extractSummary(source.html);
      if (!summary.hasTitle || !summary.sections) {
        throw sourceError(source, "article structure unrecognised: missing title or section body");
      }
      summaries.push(`${source.url} (${summary.sections} sections, ${summary.faqs} faqs, ${summary.published})`);
    } catch (error) {
      if (denied(error)) throw error;
      console.error(error.message);
      incomplete = true;
    }
  }

  console.log(`\ninspiration candidates ${summaries.length}:`);
  for (const summary of summaries) console.log(`  + ${summary}`);
  if (incomplete) {
    console.error("Report incomplete: one or more sources could not be checked; no conclusion about all new posts is possible.");
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("Report incomplete:", error.message);
  process.exitCode = 1;
});
