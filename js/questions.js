/**
 * questions.js — carregamento do manifesto e dos materiais.
 *
 * O manifesto (questoes/manifest.json) é gerado por scripts/build-manifest.mjs.
 * O app nunca mantém um catálogo fixo de provas.
 */

import { parseMaterial } from "./parser.js";

const MANIFEST_URL = new URL("../questoes/manifest.json", import.meta.url);
const materialCache = new Map();
let manifestCache = null;

function assertManifest(data) {
  if (!data || typeof data !== "object" || !Array.isArray(data.files)) {
    throw new Error("Manifesto inválido: campo 'files' ausente.");
  }
  const seen = new Set();
  for (const file of data.files) {
    if (!file || typeof file.path !== "string" || !file.path.toLowerCase().endsWith(".md")) {
      throw new Error("Manifesto inválido: entrada sem caminho Markdown.");
    }
    if (seen.has(file.path)) {
      throw new Error(`Manifesto inválido: caminho duplicado '${file.path}'.`);
    }
    seen.add(file.path);
  }
  return data;
}

export async function loadManifest({ force = false } = {}) {
  if (manifestCache && !force) return manifestCache;
  let response;
  try {
    response = await fetch(MANIFEST_URL, { cache: force ? "reload" : "no-cache" });
  } catch (error) {
    throw new Error(
      "Não foi possível carregar o manifesto de questões. Verifique a conexão ou execute o gerador de manifesto."
    );
  }
  if (!response.ok) {
    throw new Error(
      `Manifesto não encontrado (HTTP ${response.status}). Execute "npm run build:manifest" e publique a pasta questoes/.`
    );
  }
  const data = assertManifest(await response.json());
  manifestCache = data;
  return data;
}

export function materialUrl(entry) {
  // Os caminhos do manifesto são relativos à raiz do repositório.
  return new URL(`../${entry.path}`, import.meta.url);
}

export async function loadMaterial(entry, { force = false } = {}) {
  const key = entry.path;
  if (!force && materialCache.has(key)) return materialCache.get(key);

  const response = await fetch(materialUrl(entry), { cache: force ? "reload" : "default" });
  if (!response.ok) {
    throw new Error(`Falha ao carregar ${entry.path} (HTTP ${response.status}).`);
  }
  const text = await response.text();
  const parsed = parseMaterial(text, { path: entry.path });
  const result = {
    ...parsed,
    entry,
    loadedAt: new Date().toISOString(),
  };
  materialCache.set(key, result);
  return result;
}

/**
 * Carrega os materiais válidos do manifesto.
 * Materiais inválidos são reportados e ignorados, sem interromper os demais.
 */
export async function loadMaterials(entries, { onProgress } = {}) {
  const results = [];
  const failures = [];
  let done = 0;
  for (const entry of entries) {
    try {
      const material = await loadMaterial(entry);
      results.push(material);
      if (!material.valid) {
        failures.push({
          entry,
          error: material.warnings
            .filter((warning) => warning.level === "error")
            .map((warning) => warning.message)
            .join(" "),
        });
      }
    } catch (error) {
      failures.push({ entry, error: error.message });
    }
    done += 1;
    onProgress?.(done, entries.length, entry);
  }
  return { materials: results, failures };
}

export function clearMaterialCache() {
  materialCache.clear();
}
