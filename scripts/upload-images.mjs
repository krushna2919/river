import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, extname, basename } from "path";
import { client } from "./sanity-client.mjs";

const ASSETS_DIR = "src/assets";
const MAP_FILE = "scripts/.image-map.json";
const SKIP = new Set([
  // SVG logos used as React/img components — keep local
  "hoopoe-bird.svg",
  "innerpage-logo.svg",
]);

const ALLOWED_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const existingMap = existsSync(MAP_FILE) ? JSON.parse(readFileSync(MAP_FILE, "utf8")) : {};

const files = readdirSync(ASSETS_DIR)
  .filter((f) => ALLOWED_EXT.has(extname(f).toLowerCase()))
  .filter((f) => !SKIP.has(f))
  .filter((f) => statSync(join(ASSETS_DIR, f)).isFile());

console.log(`Found ${files.length} candidate images. ${Object.keys(existingMap).length} already uploaded.`);

let uploaded = 0;
let skipped = 0;

for (const file of files) {
  if (existingMap[file]) {
    skipped++;
    continue;
  }
  const path = join(ASSETS_DIR, file);
  const buffer = readFileSync(path);
  try {
    const asset = await client.assets.upload("image", buffer, {
      filename: file,
    });
    existingMap[file] = asset._id;
    uploaded++;
    console.log(`  uploaded ${file} -> ${asset._id}`);
    // Persist after each upload so partial runs are recoverable
    writeFileSync(MAP_FILE, JSON.stringify(existingMap, null, 2));
  } catch (err) {
    console.error(`  FAILED ${file}: ${err.message}`);
  }
}

console.log(`Done. Uploaded ${uploaded}, skipped (cached) ${skipped}, total mapped ${Object.keys(existingMap).length}.`);
