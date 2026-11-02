/**
 * storage.js — limpeza de caches do app sem tocar no progresso local.
 *
 * O IndexedDB (`meta`, `progress`, `sessions`, `attempts`) é gerenciado por
 * `db.js`. Aqui só atuamos na Cache API, usada pelo service worker, e apenas
 * nos caches cujo nome começa com o prefixo do XLearn.
 */

export const APP_CACHE_PREFIX = "xlearn";

function belongsToApp(name, prefix) {
  return name === prefix || name.startsWith(`${prefix}-`) || name.startsWith(`${prefix}:`);
}

/**
 * Remove os caches do XLearn. Retorna `{ supported, deleted }`; em navegadores
 * sem Cache API, `supported` é falso e nenhum erro é lançado.
 */
export async function clearAppCaches(cacheStorage = globalThis.caches, { prefix = APP_CACHE_PREFIX } = {}) {
  if (!cacheStorage || typeof cacheStorage.keys !== "function" || typeof cacheStorage.delete !== "function") {
    return { supported: false, deleted: [] };
  }

  const names = await cacheStorage.keys();
  const targets = names.filter((name) => typeof name === "string" && belongsToApp(name, prefix));
  const deleted = [];
  for (const name of targets) {
    const removed = await cacheStorage.delete(name);
    if (removed) deleted.push(name);
  }
  return { supported: true, deleted };
}
