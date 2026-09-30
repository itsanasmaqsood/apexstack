import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const components = [
  "src/components/ContactForm.tsx",
  "src/components/Footer.tsx",
];

let selectCount = 0;
for (const path of components) {
  const source = readFileSync(path, "utf8");
  assert.match(source, /import darkNativeSelect from "\.\/DarkNativeSelect\.module\.css"/);
  const selects = [...source.matchAll(/<select\b[\s\S]*?^\s*>/gm)];
  assert.ok(selects.length > 0, `${path} should contain a select`);
  for (const [openingTag] of selects) {
    assert.match(openingTag, /darkNativeSelect\.select/, `${path}: dark select class is missing`);
    selectCount += 1;
  }
}

const css = readFileSync("src/components/DarkNativeSelect.module.css", "utf8");
assert.match(css, /\.select\s*\{[^}]*color-scheme:\s*dark/s);
assert.match(css, /\.select\s+(?:option|optgroup)/);
assert.match(css, /\.select\s+(?:option|optgroup)[\s\S]*?background-color:\s*#[0-9a-f]{3,8}/i);
assert.match(css, /\.select\s+(?:option|optgroup)[\s\S]*?color:\s*#[0-9a-f]{3,8}/i);

console.log(`${selectCount} native selects have explicit dark-menu contrast styling.`);
