import fs from "node:fs";
import path from "node:path";

import { parse } from "node-html-parser";

const appOutput = path.join(process.cwd(), ".next", "server", "app");
const pricingFile = path.join(appOutput, "pricing.html");
const contactFile = path.join(appOutput, "contact.html");
const sitemapFile = path.join(appOutput, "sitemap.xml.body");

for (const file of [pricingFile, contactFile, sitemapFile]) {
  if (!fs.existsSync(file)) throw new Error(`Missing built output: ${file}`);
}

const pricing = parse(fs.readFileSync(pricingFile, "utf8"));
const contact = parse(fs.readFileSync(contactFile, "utf8"));
const sitemap = fs.readFileSync(sitemapFile, "utf8");
const errors = [];

function requireValue(condition, message) {
  if (!condition) errors.push(message);
}

requireValue(
  pricing.querySelector('link[rel="canonical"]')?.getAttribute("href") ===
    "https://apexstack.dev/pricing",
  "pricing page has an incorrect canonical",
);
requireValue(!/noindex/i.test(pricing.toString()), "pricing page contains noindex");
requireValue(pricing.text.includes("Product Blueprint"), "Product Blueprint is not visible");
requireValue(pricing.text.includes("US$1,000"), "US$1,000 starting price is not visible");
requireValue(pricing.text.includes("Launch Sprint"), "Launch Sprint is not visible");
requireValue(pricing.text.includes("US$2,500"), "US$2,500 starting price is not visible");
requireValue(
  pricing.querySelector('a[href="/contact"]'),
  "pricing page has no contact conversion path",
);
requireValue(
  contact.querySelector('a[href="/pricing"]'),
  "contact form does not link to canonical pricing",
);
requireValue(sitemap.includes("https://apexstack.dev/pricing"), "pricing is absent from sitemap");

const offers = [];
for (const script of pricing.querySelectorAll('script[type="application/ld+json"]')) {
  try {
    const value = JSON.parse(script.text);
    const nodes = Array.isArray(value?.["@graph"]) ? value["@graph"] : [value];
    offers.push(...nodes.filter((node) => node?.["@type"] === "Offer"));
  } catch {
    errors.push("pricing page contains invalid JSON-LD");
  }
}

requireValue(offers.length === 2, `expected two Offer nodes, found ${offers.length}`);
const minimums = offers
  .map((offer) => offer?.priceSpecification?.minPrice)
  .sort((a, b) => a - b);
requireValue(
  minimums[0] === 1000 && minimums[1] === 2500,
  `Offer minimum prices are incorrect: ${minimums.join(", ")}`,
);

if (errors.length) {
  console.error(`Pricing verification failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log("Pricing verification passed for Product Blueprint and Launch Sprint.");
}
