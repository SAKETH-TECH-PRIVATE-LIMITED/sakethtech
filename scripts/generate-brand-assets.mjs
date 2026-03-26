import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const ROOT = process.cwd();
const IN_PATH = path.join(ROOT, "public/brand/logo-original.png");
const OUT_DIR = path.join(ROOT, "public/brand");
const APP_DIR = path.join(ROOT, "src/app");

function clamp01(n) {
  return Math.max(0, Math.min(1, n));
}

/**
 * Convert near-white pixels to transparent.
 * This keeps edges crisp while dropping the flat white background.
 */
async function makeTransparentPng(inputBuffer, { fuzz = 0.06 } = {}) {
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.from(data);
  const tol = Math.round(255 * clamp01(fuzz));

  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];

    const dr = 255 - r;
    const dg = 255 - g;
    const db = 255 - b;

    if (dr <= tol && dg <= tol && db <= tol) {
      // fully transparent background
      out[i + 3] = 0;
    }
  }

  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } }).png();
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(APP_DIR, { recursive: true });

  const input = await fs.readFile(IN_PATH);
  const meta = await sharp(input).metadata();
  const w = meta.width ?? 1024;
  const h = meta.height ?? 1024;

  // 1) Full logo (mark + text) with transparent background
  const transparentBuffer = await (await makeTransparentPng(input, { fuzz: 0.07 })).toBuffer();
  const transparent = sharp(transparentBuffer);
  const tMeta = await transparent.metadata();
  const tw = tMeta.width ?? w;
  const th = tMeta.height ?? h;
  await transparent.clone().png().toFile(path.join(OUT_DIR, "logo-transparent.png"));

  // 2) Mark-only (top symbol), transparent.
  // Use a fixed square crop around the mark to avoid trim edge-cases.
  const cropSize = Math.round(Math.min(tw, th) * 0.72);
  const cropLeft = Math.max(0, Math.round((tw - cropSize) / 2));
  const cropTop = Math.max(0, Math.round(th * 0.06));
  const cropHeight = Math.min(cropSize, th - cropTop);
  const cropWidth = Math.min(cropSize, tw - cropLeft);

  const mark = transparent
    .clone()
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } });
  await mark.toFile(path.join(OUT_DIR, "mark.png"));

  // 3) Next.js app icons
  await sharp(path.join(OUT_DIR, "mark.png"))
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(APP_DIR, "icon.png"));

  await sharp(path.join(OUT_DIR, "mark.png"))
    .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(APP_DIR, "apple-icon.png"));

  // 4) Classic favicon.ico for older browsers
  const favicon16 = await sharp(path.join(OUT_DIR, "mark.png"))
    .resize(16, 16, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const favicon32 = await sharp(path.join(OUT_DIR, "mark.png"))
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const favicon48 = await sharp(path.join(OUT_DIR, "mark.png"))
    .resize(48, 48, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await fs.writeFile(path.join(ROOT, "public", "favicon-16.png"), favicon16);
  await fs.writeFile(path.join(ROOT, "public", "favicon-32.png"), favicon32);
  await fs.writeFile(path.join(ROOT, "public", "favicon-48.png"), favicon48);

  const ico = await toIco([favicon16, favicon32, favicon48]);
  await fs.writeFile(path.join(ROOT, "public", "favicon.ico"), ico);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

