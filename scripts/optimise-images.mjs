/**
 * Re-encode every raster image under public/ and keep the result only when it
 * is meaningfully smaller. Originals are copied to a backup outside the repo
 * first, so every replacement is reversible.
 *
 * SVG and video are skipped entirely — sharp would rasterise the former and
 * cannot help with the latter.
 */
import { readdirSync, statSync, copyFileSync, mkdirSync, renameSync, existsSync } from "node:fs";
import { dirname, relative } from "node:path";
import sharp from "sharp";

const PUBLIC = "public";
const BACKUP =
  "C:/Users/anaso/AppData/Local/Temp/claude/d--Project-ApexStack/18c30c6e-4b20-45c9-a132-856228e1b9d1/scratchpad/image-originals";
const DRY = process.argv.includes("--dry");
/** Only replace when the new file saves at least this fraction. */
const MIN_SAVING = 0.08;

const files = [];
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = `${dir}/${e.name}`;
    if (e.isDirectory()) walk(p);
    else if (/\.(png|jpe?g|webp)$/i.test(e.name)) files.push(p);
  }
};
walk(PUBLIC);

let before = 0;
let after = 0;
let replaced = 0;
let skipped = 0;
const wins = [];

for (const file of files) {
  const origSize = statSync(file).size;
  before += origSize;

  if (origSize < 8 * 1024) {
    after += origSize;
    skipped += 1;
    continue;
  }

  const ext = file.toLowerCase().split(".").pop();
  const tmp = `${file}.opt`;

  try {
    const img = sharp(file);
    const meta = await img.metadata();

    if (ext === "webp") {
      await img.webp({ quality: 82, effort: 6 }).toFile(tmp);
    } else if (ext === "png") {
      // Keep PNG (references depend on the extension); just squeeze it.
      await img.png({ compressionLevel: 9, effort: 10, palette: meta.channels < 4 }).toFile(tmp);
    } else {
      await img.jpeg({ quality: 84, mozjpeg: true }).toFile(tmp);
    }

    const newSize = statSync(tmp).size;
    const saving = (origSize - newSize) / origSize;

    if (saving >= MIN_SAVING) {
      const rel = relative(PUBLIC, file).replace(/\\/g, "/");
      if (!DRY) {
        const dest = `${BACKUP}/${rel}`;
        mkdirSync(dirname(dest), { recursive: true });
        if (!existsSync(dest)) copyFileSync(file, dest);
        renameSync(tmp, file);
      } else {
        renameSync(tmp, `${tmp}.discard`);
      }
      after += newSize;
      replaced += 1;
      wins.push({ rel, origSize, newSize, saving });
    } else {
      after += origSize;
      skipped += 1;
      renameSync(tmp, `${tmp}.discard`);
    }
  } catch {
    after += origSize;
    skipped += 1;
  }
}

const kb = (n) => `${(n / 1024).toFixed(0)}KB`;
wins.sort((a, b) => b.origSize - b.newSize - (a.origSize - a.newSize));

console.log(`${DRY ? "DRY RUN — " : ""}${files.length} images scanned`);
console.log(`  re-encoded : ${replaced}`);
console.log(`  left as-is : ${skipped}`);
console.log(`  total      : ${kb(before)} -> ${kb(after)}  (saved ${kb(before - after)}, ${(((before - after) / before) * 100).toFixed(1)}%)\n`);
console.log("biggest savings:");
for (const w of wins.slice(0, 12)) {
  console.log(`  ${kb(w.origSize).padStart(7)} -> ${kb(w.newSize).padStart(7)}  ${(w.saving * 100).toFixed(0).padStart(3)}%  ${w.rel}`);
}
