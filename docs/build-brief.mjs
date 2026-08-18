/**
 * Renders docs/IMAGE_BRIEF.md into a standalone, offline HTML page.
 *
 * Deliberately not a Next.js route: this is an internal working document, and
 * anything under public/ or src/app/ would deploy to apexstack.dev. It opens
 * from the filesystem with a double-click and needs no server.
 *
 * Only the handful of Markdown constructs the brief actually uses are handled.
 */
import fs from "node:fs";

const md = fs
  .readFileSync("docs/IMAGE_BRIEF.md", "utf8")
  .replace(/^<title>.*<\/title>\s*/m, "");

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Inline spans run after escaping so the source markers survive it.
const inline = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>");

const out = [];
let quote = null;
let list = false;

const closeQuote = () => {
  if (quote === null) return;
  // The button copies textContent, so the prompt must stay one clean string.
  out.push(
    `<blockquote><button class="copy" type="button">Copy prompt</button><p>${inline(quote)}</p></blockquote>`,
  );
  quote = null;
};
const closeList = () => {
  if (list) out.push("</ul>");
  list = false;
};

for (const raw of md.split(/\r?\n/)) {
  const line = raw.trimEnd();

  if (line.startsWith("> ")) {
    const text = line.slice(2);
    quote = quote === null ? text : `${quote} ${text}`;
    continue;
  }
  closeQuote();

  if (line.startsWith("- ")) {
    if (!list) {
      out.push("<ul>");
      list = true;
    }
    out.push(`<li>${inline(line.slice(2))}</li>`);
    continue;
  }
  closeList();

  if (line.startsWith("### ")) out.push(`<h3>${inline(line.slice(4))}</h3>`);
  else if (line.startsWith("## ")) out.push(`<h2>${inline(line.slice(3))}</h2>`);
  else if (line.startsWith("# ")) out.push(`<h1>${inline(line.slice(2))}</h1>`);
  else if (line.startsWith("---")) out.push("<hr>");
  else if (line.trim() !== "") out.push(`<p>${inline(line)}</p>`);
}
closeQuote();
closeList();

const CSS = `
:root { color-scheme: dark; }
* { box-sizing: border-box; }
body {
  background: #08090A; color: #E3E3E3; margin: 0 auto; max-width: 880px;
  padding: 56px 24px 140px;
  font: 16px/1.65 "Fira Sans", ui-sans-serif, system-ui, sans-serif;
}
h1 { font-size: clamp(30px, 5vw, 40px); line-height: 1.12; color: #fff; margin: 0 0 10px; letter-spacing: -0.5px; }
h2 { font-size: clamp(22px, 3.4vw, 27px); color: #fff; margin: 60px 0 14px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.14); letter-spacing: -0.3px; }
h3 { font-size: 18px; color: #B4CC04; margin: 36px 0 8px; }
p { margin: 12px 0; }
ul { margin: 12px 0; padding-left: 20px; }
li { margin: 7px 0; }
strong { color: #fff; font-weight: 600; }
code { background: rgba(255,255,255,0.09); color: #D4F005; padding: 2px 6px; border-radius: 3px; font-size: 0.88em; }
hr { border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 44px 0; }
blockquote {
  position: relative; margin: 16px 0; padding: 20px 20px 20px 22px;
  background: #101112; border-left: 3px solid #B4CC04; border-radius: 0 4px 4px 0;
}
blockquote p { margin: 0; padding-right: 96px; color: #C9C9C9; font-size: 15px; }
.copy {
  position: absolute; top: 12px; right: 12px; cursor: pointer;
  background: #B4CC04; color: #000; border: 0; border-radius: 3px;
  padding: 6px 12px; font: 500 12px/1 inherit;
  transition: background 0.15s ease;
}
.copy:hover { background: #D4F005; }
.copy:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
.copy[data-done="1"] { background: #fff; }
@media (max-width: 640px) {
  blockquote p { padding-right: 0; padding-top: 30px; }
}
`;

const JS = `
document.querySelectorAll(".copy").forEach(function (button) {
  button.addEventListener("click", function () {
    var text = button.nextElementSibling.textContent;
    navigator.clipboard.writeText(text).then(function () {
      button.textContent = "Copied";
      button.dataset.done = "1";
      setTimeout(function () {
        button.textContent = "Copy prompt";
        delete button.dataset.done;
      }, 1500);
    });
  });
});
`;

const page = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ApexStack Image Brief</title>
<style>${CSS}</style>
</head><body>
${out.join("\n")}
<script>${JS}</script>
</body></html>
`;

fs.writeFileSync("docs/IMAGE_BRIEF.html", page);
const prompts = (page.match(/class="copy"/g) || []).length;
console.log(`wrote docs/IMAGE_BRIEF.html — ${prompts} copyable prompts`);
