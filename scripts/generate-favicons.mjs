/**
 * Generates all favicon and PWA icon assets from public/icon.svg.
 * Run with: node scripts/generate-favicons.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');
const appDir = path.join(root, 'app');
const svgPath = path.join(publicDir, 'icon.svg');
const svg = fs.readFileSync(svgPath);

async function gen(size, outPath) {
  await sharp(svg).resize(size, size).png().toFile(outPath);
  console.log(`  ✓ ${path.basename(outPath)} (${size}×${size})`);
}

function createIco(buffers) {
  const count = buffers.length;
  const headerSize = 6 + count * 16;
  const sizes = buffers.map(b => b.length);

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  let offset = headerSize;
  buffers.forEach((buf, i) => {
    const e = Buffer.alloc(16);
    const dim = [16, 32, 48][i];
    e.writeUInt8(dim === 256 ? 0 : dim, 0);
    e.writeUInt8(dim === 256 ? 0 : dim, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(buf.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += buf.length;
    entries.push(e);
  });

  return Buffer.concat([header, ...entries, ...buffers]);
}

console.log('Generating favicon assets from public/icon.svg...\n');

const png16 = await sharp(svg).resize(16, 16).png().toBuffer();
const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
const png48 = await sharp(svg).resize(48, 48).png().toBuffer();

// Static PNG files (referenced by webmanifest + meta tags)
await gen(16, path.join(publicDir, 'favicon-16x16.png'));
await gen(32, path.join(publicDir, 'favicon-32x32.png'));
await gen(96, path.join(publicDir, 'favicon-96x96.png'));
await gen(180, path.join(publicDir, 'favicon-180x180.png'));
await gen(192, path.join(publicDir, 'favicon-192x192.png'));
await gen(512, path.join(publicDir, 'favicon-512x512.png'));

// Apple touch icons
fs.copyFileSync(
  path.join(publicDir, 'favicon-180x180.png'),
  path.join(publicDir, 'apple-touch-icon.png'),
);
console.log('  ✓ apple-touch-icon.png (180×180)');

fs.copyFileSync(
  path.join(publicDir, 'apple-touch-icon.png'),
  path.join(publicDir, 'apple-touch-icon-precomposed.png'),
);
console.log('  ✓ apple-touch-icon-precomposed.png (180×180)');

// Multi-size favicon.ico (16 + 32 + 48)
const ico = createIco([png16, png32, png48]);
fs.writeFileSync(path.join(appDir, 'favicon.ico'), ico);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);
console.log('  ✓ favicon.ico (16×16 + 32×32 + 48×48 multi-size)');

console.log('\nDone. All assets written to public/ and app/.\n');
