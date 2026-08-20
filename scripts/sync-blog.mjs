/**
 * Pull newly published posts from the DreamLaunch archive into this blog.
 *
 * WHY THIS EXISTS: the DreamLaunch listing is the same company's earlier brand,
 * and posts are still being published there. Re-importing the whole archive on
 * every change would rewrite 87 files to add one, so this syncs incrementally:
 * it reads what is live, subtracts what this repo already has, and only fetches
 * the difference.
 *
 * WHAT IT DOES TO THE COPY, and nothing beyond it:
 *   - swaps the brand, including the domain and two slugs that carried the old
 *     name;
 *   - removes em and en dashes, resolving each by clause rather than by
 *     find-and-replace, because a comma in the wrong place makes a splice;
 *   - reads the structure Apple and the CMS already published (headings, lists,
 *     tables, FAQ blocks) into this repo's `BlogPost` shape.
 *
 * WHAT IT WILL NOT DO: invent a field. `seoTitle`, `excerpt` and `keyTakeaway`
 * have no equivalent in the source, so they are derived from the post's own
 * sentences. They are drafts. A post that matters commercially deserves a human
 * pass over those three, and `keyTakeaway` most of all: it is the passage an
 * answer engine quotes.
 *
 * SAFETY: it only ever writes files whose slug does not already exist, and it
 * regenerates `src/data/blog/index.ts` from the directory listing. It never
 * edits a post that is already here, so a local edit cannot be clobbered by a
 * later sync.
 *
 * Usage:
 *   node scripts/sync-blog.mjs            # fetch and write
 *   node scripts/sync-blog.mjs --dry-run  # report what it would add
 *
 * Then run `npm run check` before committing. The script deliberately does not
 * build, commit or push: publishing is a decision, not a side effect.
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

import { parse } from "node-html-parser";

const ORIGIN = "https://www.dreamlaunch.studio";
const POSTS_DIR = "src/data/blog/posts";
const INDEX_FILE = "src/data/blog/index.ts";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36";

const DRY = process.argv.includes("--dry-run");

/**
 * Slugs renamed on import because they carried the old brand. Listed so the
 * diff does not see them as missing and re-import them under the old name.
 */
const RENAMED = {
  "ai-product-development-for-startups-apexstack":
    "ai-product-development-for-startups-dreamlaunch",
  "apexstack-4-6-week-mvp-process-what-happens":
    "dreamlaunch-4-6-week-mvp-process-what-happens",
};

/* ------------------------------------------------------------------ brand */

function rebrand(s) {
  if (!s) return s;
  return s
    .replace(/dreamlaunch\.studio/gi, "apexstack.dev")
    .replace(/DreamLaunch Studio/g, "ApexStack")
    .replace(/Dreamlaunch Studio/g, "ApexStack")
    .replace(/DreamLaunch/g, "ApexStack")
    .replace(/Dreamlaunch/g, "ApexStack")
    .replace(/DREAMLAUNCH/g, "APEXSTACK")
    .replace(/dreamlaunch/g, "apexstack")
    .replace(/dream launch/gi, "ApexStack");
}

/* ------------------------------------------------------------------ dashes */

const CLAUSE_STARTERS = new Set(
  ("i you he she it we they that this there these those his her their your our my its " +
    "and but so because which who what when where why how no not never nobody nothing " +
    "everyone everything most many some if then now here one two three a an the")
    .split(" "),
);
const PRONOUN_SUBJ = new Set(
  "i you he she it we they that this there nobody everyone".split(" "),
);
const VERBISH =
  /^(is|are|was|were|will|would|can|could|should|do|does|did|has|have|had|isn't|aren't|wasn't|don't|doesn't|didn't|won't|can't|means|makes|gets|goes|comes|takes|needs|wants|looks|feels|costs|ships|builds|works|happens|becomes|turns|keeps|stays|starts|ends)\b/i;

/** A comma before an independent clause is a splice, so those become full stops. */
function isIndependent(after) {
  const w = after.trim().split(/\s+/);
  if (w.length < 3) return false;
  const first = w[0].toLowerCase().replace(/[^a-z']/g, "");
  if (PRONOUN_SUBJ.has(first)) return true;
  if (/^(i|you|he|she|it|we|they|that|there)'(s|re|ll|ve|d|m)$/.test(first)) return true;
  if (!CLAUSE_STARTERS.has(first)) return false;
  const rest = w.slice(1).join(" ");
  return (
    VERBISH.test(rest) ||
    /\b(is|are|was|were|will|would|can|could|should|do|does|did|has|have|had)\b/i.test(
      w.slice(1, 4).join(" "),
    )
  );
}

/** A dash introducing an enumeration or a gloss reads as a colon. */
function introducesList(after) {
  const seg = (after.split(/(?<=[.!?])\s/)[0] || after).trim();
  if (/^(what|which|who|how|why|where|when)\b/i.test(seg)) return true;
  const commas = (seg.match(/,/g) || []).length;
  return commas >= 1 && /\b(and|or)\b/.test(seg) && seg.length < 200;
}

function dedash(input) {
  if (!input) return input;
  let s = input;
  // Numeric and currency ranges keep a hyphen: "4-6 weeks", "$6.5k-$20k".
  s = s.replace(/(\d[\d.,]*[a-zA-Z%]{0,3})\s*[–—]\s*(\$?\d)/g, "$1-$2");
  s = s.replace(/(\$\d[\d.,]*[a-zA-Z]{0,3})\s*[–—]\s*(\$?\d)/g, "$1-$2");
  s = s.replace(/\s+[–—]\s+/g, (m, off, str) => {
    const after = str.slice(off + m.length);
    if (/[,;:.!?]$/.test(str.slice(0, off))) return " ";
    if (introducesList(after)) return ": ";
    if (isIndependent(after)) return ". __CAP__";
    return ", ";
  });
  s = s.replace(/([a-zA-Z)\]"'])[–—]([a-zA-Z("'])/g, "$1, $2");
  s = s.replace(/\s*[–—]\s*/g, ", ");
  s = s.replace(/__CAP__(\S)/g, (m, c) => c.toUpperCase());
  return s
    .replace(/,\s*,/g, ",")
    .replace(/\s+,/g, ",")
    .replace(/,\s*\./g, ".")
    .replace(/\.\s*\./g, ".")
    .replace(/\s{2,}/g, " ")
    .trim();
}

const fix = (s) => dedash(rebrand(s));

/* ---------------------------------------------------------------- classify */

const CAT_RULES = [
  ["Design & Brand", [
    [/\b(logo|rebrand|branding|brand identity)\b/i, 6],
    [/\b(ui ?\/? ?ux|ui ux|user interface|web design|landing page)\b/i, 6],
    [/\bdesign agency\b/i, 5],
    [/\bdesign\b/i, 2],
  ]],
  ["Choosing a Partner", [
    [/\b(agency|agencies|freelancer|upwork|studio|studios|companies|company)\b/i, 4],
    [/\b(hire|hiring|choose|choosing|questions to ask|red flags|before signing|vs\.? )\b/i, 3],
    [/\b(quote|brief|retainer|fixed[- ]price|cto as a service|founding engineer)\b/i, 2],
    [/\bbest\b/i, 2],
  ]],
  ["AI Engineering", [
    [/\b(llm|rag|fine[- ]tun|prompt|chatbot|ai agent|vector|hallucinat)\b/i, 6],
    [/\bvibe cod/i, 5],
    [/\bai\b/i, 3],
  ]],
  ["Automation & Internal Tools", [
    [/\b(internal tool|automation|workflow|crm|erp|dashboard|back ?office)\b/i, 6],
    [/\bno[- ]code\b/i, 3],
  ]],
  ["Legacy Modernisation", [
    [/\b(legacy|rewrite|migrat|monolith|microservice|refactor|modernis|moderniz|technical debt|tech debt)\b/i, 6],
  ]],
  ["MVP & Startups", [
    [/\bmvp\b/i, 5],
    [/\b(startup|founder|prototype|validate|validation|scope|scoping|launch|ship|seed|pre[- ]seed)\b/i, 3],
    [/\b(saas|marketplace|fintech|mobile app)\b/i, 2],
  ]],
];

function categorise(text) {
  const scored = CAT_RULES.map(([cat, rules]) => {
    let s = 0;
    for (const [re, w] of rules) {
      const m = text.match(new RegExp(re.source, "gi"));
      if (m) s += w * Math.min(m.length, 3);
    }
    return [cat, s];
  }).sort((a, b) => b[1] - a[1]);
  return scored[0][1] > 0 ? scored[0][0] : "MVP & Startups";
}

const SERVICE_RULES = [
  [/\b(logo|rebrand|branding|brand identity)\b/i, "branding"],
  [/\b(ui ?\/? ?ux|ui ux|user interface|landing page|design agency)\b/i, "ui-ux-design"],
  [/\bweb design\b/i, "web-development"],
  [/\b(mobile app|ios|android)\b/i, "mobile-app-development"],
  [/\b(internal tool|automation|workflow|crm|erp)\b/i, "automation"],
  [/\b(legacy|rewrite|migrat|monolith|modernis)\b/i, "digital-transformation"],
  [/\b(llm|rag|chatbot|ai agent|ai product|ai mvp|ai development|ai saas)\b/i, "ai-development"],
  [/\bsaas\b/i, "saas-development"],
  [/\bmvp|prototype|validate\b/i, "mvp-development"],
  [/\b(cto|due diligence|consult|audit|quote|brief)\b/i, "technical-consulting"],
  [/\bai\b/i, "ai-development"],
];

const serviceFor = (t) =>
  SERVICE_RULES.find(([re]) => re.test(t))?.[1] ?? "product-engineering";

const STOP = new Set(
  "a an the to for of in on with your you and or is are how what why when best guide 2024 2025 2026 real actually".split(" "),
);
const cleanKw = (t) =>
  t.toLowerCase().replace(/[‘’']/g, "").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();

/** FAQ questions are already phrased the way people search, so they are the source. */
function secondariesFrom(post, primary) {
  const out = new Set();
  for (const f of post.faqs) {
    const q = cleanKw(f.question);
    const n = q.split(" ").filter(Boolean).length;
    if (n >= 4 && n <= 12) out.add(q);
    if (out.size >= 4) break;
  }
  if (out.size < 4) {
    for (const s of post.sections) {
      if (s.heading === "__INTRO__") continue;
      const words = cleanKw(s.heading).split(" ").filter((w) => w.length > 1 && !STOP.has(w));
      if (words.length >= 3 && words.length <= 6) out.add(words.join(" "));
      if (out.size >= 5) break;
    }
  }
  out.delete(primary);
  return [...out].slice(0, 5);
}

/* ----------------------------------------------------------------- extract */

const clean = (t) => (t ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const norm = (t) => clean(t).toLowerCase().replace(/[^a-z0-9]/g, "");

function pushBlock(blocks, el) {
  const tag = el.rawTagName?.toLowerCase();
  if (tag === "h3") return void blocks.push({ type: "h3", text: clean(el.text) });
  if (tag === "p") {
    const t = clean(el.text);
    if (t) blocks.push({ type: "p", text: t });
    return;
  }
  if (tag === "ul" || tag === "ol") {
    const items = el.querySelectorAll("li").map((li) => clean(li.text)).filter(Boolean);
    if (items.length) blocks.push({ type: "list", ordered: tag === "ol", items });
    return;
  }
  if (tag === "table") {
    const head = el.querySelectorAll("thead th").map((th) => clean(th.text));
    const rows = el
      .querySelectorAll("tbody tr")
      .map((tr) => tr.querySelectorAll("td").map((td) => clean(td.text)));
    if (rows.length) blocks.push({ type: "table", head, rows });
    return;
  }
  if (tag === "blockquote") {
    const t = clean(el.text);
    if (t) blocks.push({ type: "callout", text: t });
    return;
  }
  if (tag === "pre") return void blocks.push({ type: "code", lang: "text", code: el.text });
  if (tag === "div" || tag === "section") {
    for (const c of el.childNodes.filter((n) => n.nodeType === 1)) pushBlock(blocks, c);
  }
}

function extract(html, slug) {
  const root = parse(html);
  const ld = {};
  for (const s of root.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      const j = JSON.parse(s.rawText);
      for (const n of j["@graph"] ?? [j]) ld[n["@type"]] = n;
    } catch {
      /* a malformed block is not worth failing a sync over */
    }
  }
  const art = ld.Article ?? {};
  const faqs = (ld.FAQPage?.mainEntity ?? []).map((q) => ({
    question: clean(q.name),
    answer: clean((q.acceptedAnswer?.text ?? "").replace(/<[^>]+>/g, "")),
  }));
  const faqKeys = new Set(faqs.map((f) => norm(f.question)));

  const h1 = root.querySelector("h1");
  const h2s = root.querySelectorAll("h2[id]");
  const sections = [];
  if (h2s.length) {
    let cur = { heading: "__INTRO__", blocks: [] };
    for (const el of h2s[0].parentNode.childNodes.filter((n) => n.nodeType === 1)) {
      const tag = el.rawTagName?.toLowerCase();
      if (tag === "h2") {
        // The FAQ block is already captured from schema; stop before it so the
        // questions are not rendered twice.
        if (/^(faq|faqs|frequentlyaskedquestions)/.test(norm(el.text))) break;
        if (cur.blocks.length || cur.heading !== "__INTRO__") sections.push(cur);
        cur = { heading: clean(el.text), blocks: [] };
        continue;
      }
      if (tag === "h3" && faqKeys.has(norm(el.text))) break;
      pushBlock(cur.blocks, el);
    }
    if (cur.blocks.length) sections.push(cur);
  }

  return {
    slug,
    h1: clean(h1?.text ?? ""),
    description: clean(art.description ?? ""),
    published: (art.datePublished ?? "").slice(0, 10),
    modified: (art.dateModified ?? "").slice(0, 10),
    sections,
    faqs,
  };
}

/* ------------------------------------------------------------ derived copy */

const sentences = (t) => t.match(/[^.!?]+[.!?]+(\s|$)/g)?.map((s) => s.trim()) ?? [t];

function take(text, maxChars, maxSentences) {
  const out = [];
  let len = 0;
  for (const s of sentences(text).slice(0, maxSentences)) {
    if (len && len + s.length > maxChars) break;
    out.push(s);
    len += s.length + 1;
  }
  return out.join(" ").trim() || text.slice(0, maxChars).trim();
}

const ANECDOTE = /^(i |we got|last (week|month)|it was|'|"|he |she |they came)/i;

function keyTakeawayFor(p) {
  const named = p.sections.filter((s) => s.heading !== "__INTRO__");
  const pool = [];
  for (const s of [...named.slice(0, 3), ...p.sections]) {
    for (const b of s.blocks) {
      if (b.type !== "p" || !b.text) continue;
      if (b.text.length < 160 || b.text.length > 900) continue;
      if (ANECDOTE.test(b.text)) continue;
      pool.push(b.text);
    }
  }
  let out = take(pool[0] ?? p.description ?? p.h1, 460, 3);
  if (out.length < 120 && p.description) out = `${p.description} ${out}`.trim();
  return out;
}

function seoTitleFor(p) {
  const h = p.h1;
  if (h.length <= 60) return h;
  const head = h.split(/[:|]/)[0].trim();
  if (head.length >= 25 && head.length <= 60) return head;
  let s = "";
  for (const w of h.split(" ")) {
    if ((s + " " + w).trim().length > 60) break;
    s = (s + " " + w).trim();
  }
  return s.replace(/[,:;-]$/, "");
}

function excerptFor(p) {
  const intro = p.sections.find((s) => s.heading === "__INTRO__");
  const paras = (intro?.blocks ?? []).filter((b) => b.type === "p" && b.text).map((b) => b.text);
  // The closing intro paragraph is where these posts state their thesis; the
  // earlier ones are the anecdote that sets it up.
  const thesis = [...paras].reverse().find((t) => t.length >= 90 && t.length <= 500);
  return take(thesis ?? p.description ?? paras[0] ?? p.h1, 240, 2);
}

const descFor = (p) =>
  p.description && p.description.length <= 158 ? p.description : take(p.description || p.h1, 155, 2);

/* -------------------------------------------------------------- emit files */

function tsBlocks(blocks, indent) {
  const i = " ".repeat(indent);
  const J = JSON.stringify;
  return blocks
    .map((b) => {
      if (b.type === "p") return `${i}{\n${i}  type: "p",\n${i}  text: ${J(b.text)},\n${i}}`;
      if (b.type === "h3") return `${i}{\n${i}  type: "h3",\n${i}  text: ${J(b.text)},\n${i}}`;
      if (b.type === "callout") return `${i}{\n${i}  type: "callout",\n${i}  text: ${J(b.text)},\n${i}}`;
      if (b.type === "code")
        return `${i}{\n${i}  type: "code",\n${i}  lang: ${J(b.lang || "text")},\n${i}  code: ${J(b.code)},\n${i}}`;
      if (b.type === "list")
        return `${i}{\n${i}  type: "list",\n${b.ordered ? `${i}  ordered: true,\n` : ""}${i}  items: [\n${b.items.map((x) => `${i}    ${J(x)},`).join("\n")}\n${i}  ],\n${i}}`;
      if (b.type === "table")
        return `${i}{\n${i}  type: "table",\n${i}  head: ${J(b.head)},\n${i}  rows: [\n${b.rows.map((r) => `${i}    ${J(r)},`).join("\n")}\n${i}  ],\n${i}}`;
      return "";
    })
    .filter(Boolean)
    .map((x) => x + ",")
    .join("\n");
}

function toFile(p) {
  const J = JSON.stringify;
  const basis = `${p.h1} ${p.slug.replace(/-/g, " ")} ${p.description}`;
  const named = p.sections.filter((s) => s.heading !== "__INTRO__");
  const intro = p.sections.find((s) => s.heading === "__INTRO__");
  const sections =
    intro && intro.blocks.length
      ? [{ heading: named.length ? "The short version" : "Overview", blocks: intro.blocks }, ...named]
      : named;

  const body = sections
    .map((s) => `    {\n      heading: ${J(s.heading)},\n      blocks: [\n${tsBlocks(s.blocks, 8)}\n      ],\n    },`)
    .join("\n");
  const faqs = p.faqs
    .map((f) => `    {\n      question: ${J(f.question)},\n      answer: ${J(f.answer)},\n    },`)
    .join("\n");
  const primaryKeyword = p.slug.replace(/-/g, " ");

  return `import type { BlogPost } from "@/data/blog/types";

export const post: BlogPost = {
  slug: ${J(p.slug)},
  title: ${J(p.h1)},
  seoTitle: ${J(seoTitleFor(p))},
  description: ${J(descFor(p))},
  excerpt: ${J(excerptFor(p))},
  category: ${J(categorise(basis))},
  primaryKeyword: ${J(primaryKeyword)},
  secondaryKeywords: [
${secondariesFrom(p, primaryKeyword).map((k) => `    ${J(k)},`).join("\n")}
  ],
  published: ${J(p.published)},${p.modified && p.modified !== p.published ? `\n  updated: ${J(p.modified)},` : ""}
  authorId: "leadership-01",
  serviceSlug: ${J(serviceFor(basis))},
  keyTakeaway: ${J(keyTakeawayFor(p))},
  sections: [
${body}
  ],
  faqs: [
${faqs}
  ],
};
`;
}

/* ------------------------------------------------------------------ index */

function rebuildIndex() {
  const slugs = readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => f.replace(/\.ts$/, ""))
    .sort();

  const ident = (slug) => {
    let id = slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/[^a-zA-Z0-9]/g, "");
    if (/^\d/.test(id)) id = "post" + id[0].toUpperCase() + id.slice(1);
    return id;
  };
  const ids = slugs.map(ident);
  const dupes = ids.filter((v, i) => ids.indexOf(v) !== i);
  if (dupes.length) throw new Error("duplicate import identifiers: " + dupes.join(", "));

  let s = readFileSync(INDEX_FILE, "utf8");
  const EOL = s.includes("\r\n") ? "\r\n" : "\n";
  const imports = slugs
    .map((slug, i) => `import { post as ${ids[i]} } from "@/data/blog/posts/${slug}";`)
    .join(EOL);
  const entries = ids.map((id) => `  ${id},`).join(EOL);

  const first = s.indexOf("import { post as ");
  const lastEnd = s.indexOf(EOL, s.lastIndexOf("import { post as "));
  s = s.slice(0, first) + imports + s.slice(lastEnd);

  // Anchored on "= [" so the "[]" in the type annotation is not mistaken for
  // the array literal.
  const decl = "export const POSTS: readonly BlogPost[] = [";
  const start = s.indexOf(decl);
  const close = s.indexOf("].sort(", start);
  if (start === -1 || close === -1) throw new Error("POSTS array not found in " + INDEX_FILE);
  s = s.slice(0, start + decl.length) + EOL + entries + EOL + s.slice(close);

  writeFileSync(INDEX_FILE, s);
  return slugs.length;
}

/* ------------------------------------------------------------------- main */

const get = async (url) => {
  const res = await fetch(url, { headers: { "user-agent": UA } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
};

async function main() {
  if (!existsSync(POSTS_DIR)) throw new Error(`run this from the repo root; ${POSTS_DIR} not found`);

  const [index, sitemap] = await Promise.all([
    get(`${ORIGIN}/blog`),
    get(`${ORIGIN}/sitemap.xml`).catch(() => ""),
  ]);

  // The sitemap has lagged behind the index before, so both are read and merged.
  const live = new Set([
    ...[...index.matchAll(/href="\/blog\/([a-z0-9-]+)"/g)].map((m) => m[1]),
    ...[...sitemap.matchAll(/\/blog\/([a-z0-9-]+)</g)].map((m) => m[1]),
  ]);

  const have = new Set(
    readdirSync(POSTS_DIR)
      .filter((f) => f.endsWith(".ts"))
      .map((f) => RENAMED[f.replace(/\.ts$/, "")] ?? f.replace(/\.ts$/, "")),
  );

  const candidates = [...live].filter((s) => !have.has(s)).sort();
  console.log(`live ${live.size} · here ${have.size} · candidates ${candidates.length}`);
  if (!candidates.length) return console.log("nothing new.");

  const added = [];
  const skipped = [];
  for (const slug of candidates) {
    let html;
    try {
      html = await get(`${ORIGIN}/blog/${slug}`);
    } catch (err) {
      skipped.push(`${slug} (${err.message})`);
      continue;
    }
    const p = extract(html, slug);
    // Roughly a third of the listing's URLs are alias stubs carrying only an
    // h1. They are not posts and importing them would create thin duplicates.
    if (!p.sections.length || !p.h1) {
      skipped.push(`${slug} (no body: alias stub)`);
      continue;
    }

    p.h1 = fix(p.h1);
    p.description = fix(p.description);
    for (const s of p.sections) {
      s.heading = fix(s.heading);
      for (const b of s.blocks) {
        if (b.text) b.text = fix(b.text);
        if (b.items) b.items = b.items.map(fix);
        if (b.head) b.head = b.head.map(fix);
        if (b.rows) b.rows = b.rows.map((r) => r.map(fix));
      }
    }
    p.faqs = p.faqs.map((f) => ({ question: fix(f.question), answer: fix(f.answer) }));

    if (DRY) {
      added.push(`${slug} (${p.sections.length} sections, ${p.faqs.length} faqs, ${p.published})`);
      continue;
    }
    writeFileSync(join(POSTS_DIR, `${slug}.ts`), toFile(p));
    added.push(`${slug} (${p.sections.length} sections, ${p.faqs.length} faqs, ${p.published})`);
  }

  console.log(`\n${DRY ? "would add" : "added"} ${added.length}:`);
  for (const a of added) console.log("  + " + a);
  if (skipped.length) {
    console.log(`\nskipped ${skipped.length}:`);
    for (const s of skipped) console.log("  - " + s);
  }

  if (!DRY && added.length) {
    console.log(`\nindex.ts rebuilt with ${rebuildIndex()} posts`);
    console.log("\nNow run: npm run check");
    console.log("Then review the derived seoTitle, excerpt and keyTakeaway on each new post.");
  }
}

main().catch((err) => {
  console.error("sync failed:", err.message);
  process.exit(1);
});
