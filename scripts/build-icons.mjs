/**
 * build-icons.mjs — gera os ícones PNG do XLearn sem dependências externas.
 *
 * O desenho é rasterizado em 4x e reduzido por média de caixa para suavizar as
 * bordas. A mesma arte é usada no ícone normal, no maskable (com margem de
 * segurança) e no Apple Touch Icon.
 */

import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = resolve(ROOT, "icons");
const SS = 4;

/* Pontos do "X" no viewBox 64x64 usado também no favicon. */
const X_POINTS = [
  [18, 20],
  [28, 20],
  [32, 28],
  [36, 20],
  [46, 20],
  [36, 36],
  [46, 52],
  [36, 52],
  [32, 44],
  [28, 52],
  [18, 52],
  [28, 36],
];

const TOP = [126, 157, 255];
const BOTTOM = [62, 89, 201];
const WHITE = [255, 255, 255];

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([length, body, crc]);
}

function encodePng(width, height, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y += 1) {
    raw[y * (stride + 1)] = 0;
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pngChunk("IHDR", ihdr),
    pngChunk("IDAT", deflateSync(raw, { level: 9 })),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
}

function inPolygon(x, y, points) {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i, i += 1) {
    const [xi, yi] = points[i];
    const [xj, yj] = points[j];
    const intersects = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersects) inside = !inside;
  }
  return inside;
}

function inRoundedSquare(x, y, size, radius) {
  if (x < 0 || y < 0 || x > size || y > size) return false;
  const nearX = x < radius ? radius - x : x > size - radius ? x - (size - radius) : 0;
  const nearY = y < radius ? radius - y : y > size - radius ? y - (size - radius) : 0;
  return nearX * nearX + nearY * nearY <= radius * radius;
}

function render(size, { maskable = false, fullBleed = false } = {}) {
  const width = size * SS;
  const rgba = Buffer.alloc(width * width * 4);
  const radius = maskable || fullBleed ? 0 : width * 0.22;
  const unit = (maskable ? 0.54 : 0.74) * (64 / width);
  const center = width / 2;

  for (let y = 0; y < width; y += 1) {
    const t = y / (width - 1);
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * 4;
      if (!maskable && !fullBleed && !inRoundedSquare(x + 0.5, y + 0.5, width, radius)) continue;

      const shade = (x / width) * 0.12 + (1 - t) * 0.08;
      const bg = TOP.map((channel, i) => Math.min(255, Math.round(channel + (BOTTOM[i] - channel) * t + shade * 255)));
      const px = (x + 0.5 - center) * unit + 32;
      const py = (y + 0.5 - center) * unit + 32;
      const color = inPolygon(px, py, X_POINTS) ? WHITE : bg;

      rgba[index] = color[0];
      rgba[index + 1] = color[1];
      rgba[index + 2] = color[2];
      rgba[index + 3] = 255;
    }
  }

  /* Redução por média de caixa: cada pixel final é a média de SS² amostras. */
  const final = Buffer.alloc(size * size * 4);
  const samples = SS * SS;
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const sums = [0, 0, 0, 0];
      for (let dy = 0; dy < SS; dy += 1) {
        for (let dx = 0; dx < SS; dx += 1) {
          const source = ((y * SS + dy) * width + (x * SS + dx)) * 4;
          for (let channel = 0; channel < 4; channel += 1) sums[channel] += rgba[source + channel];
        }
      }
      const target = (y * size + x) * 4;
      for (let channel = 0; channel < 4; channel += 1) {
        final[target + channel] = Math.round(sums[channel] / samples);
      }
    }
  }
  return encodePng(size, size, final);
}

mkdirSync(OUT_DIR, { recursive: true });
const outputs = [
  ["icon-192.png", 192, {}],
  ["icon-512.png", 512, {}],
  ["icon-maskable-512.png", 512, { maskable: true }],
  ["apple-touch-icon.png", 180, { fullBleed: true }],
];

for (const [name, size, options] of outputs) {
  const file = resolve(OUT_DIR, name);
  writeFileSync(file, render(size, options));
  console.log(`[ok] icons/${name} — ${size}x${size}`);
}
