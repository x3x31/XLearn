/* eslint-env serviceworker */
/**
 * service-worker.js — app shell e funcionamento offline do XLearn.
 *
 * Estratégias:
 *   - instalação: pré-cacheia o app shell e o manifesto em uma cache versionada;
 *   - navegação: rede primeiro, com o index.html em cache como contingência;
 *   - manifesto e materiais: rede primeiro, atualizando a cache de runtime;
 *   - demais estáticos: cache primeiro, com preenchimento da cache de runtime.
 *
 * Os nomes começam com "xlearn-" para que a limpeza de cache do app os encontre.
 * Ao alterar arquivos do shell, incremente VERSION para invalidar as caches.
 */

const VERSION = "v26";
const SHELL_CACHE = `xlearn-shell-${VERSION}`;
const RUNTIME_CACHE = `xlearn-runtime-${VERSION}`;

const SHELL_PATHS = [
  "./",
  "index.html",
  "css/styles.css",
  "manifest.webmanifest",
  "js/app.js",
  "js/cloud.js",
  "js/cloud-config.js",
  "js/db.js",
  "js/parser.js",
  "js/questions.js",
  "js/settings.js",
  "js/srs.js",
  "js/gamification.js",
  "js/coins.js",
  "js/season.js",
  "js/timer.js",
  "js/simulado.js",
  "js/ranking.js",
  "js/backup.js",
  "js/storage.js",
  "js/sound.js",
  "assets/characters/curioso.svg",
  "assets/characters/estudante.svg",
  "assets/characters/focado.svg",
  "assets/characters/veterano.svg",
  "assets/characters/mestre.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "questoes/manifest.json",
];

const SHELL_URLS = SHELL_PATHS.map((path) => new URL(path, self.location.href).href);
const INDEX_URL = new URL("index.html", self.location.href).href;

function isDataRequest(url) {
  return url.pathname.includes("/questoes/") && (url.pathname.endsWith(".md") || url.pathname.endsWith("manifest.json"));
}

function offlineResponse(message) {
  return new Response(
    `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>XLearn offline</title><body><h1>XLearn offline</h1><p>${message}</p></body></html>`,
    { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

async function cachePut(cacheName, request, response) {
  if (!response || !response.ok) return;
  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
  return response;
}

async function handleNavigation(request) {
  try {
    return await fetch(request);
  } catch {
    const cached = (await caches.match(INDEX_URL)) || (await caches.match(request));
    return cached || offlineResponse("Conecte-se à internet para abrir o XLearn pela primeira vez.");
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) return cachePut(RUNTIME_CACHE, request, response);
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    return new Response(JSON.stringify({ error: "Conteúdo indisponível offline." }), {
      status: 503,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    return response.ok ? cachePut(RUNTIME_CACHE, request, response) : response;
  } catch {
    return offlineResponse("Este recurso ainda não foi salvo para uso offline.");
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      await cache.addAll(SHELL_URLS);
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter((name) => name.startsWith("xlearn-") && name !== SHELL_CACHE && name !== RUNTIME_CACHE)
          .map((name) => caches.delete(name))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith("/service-worker.js")) return;

  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(request));
    return;
  }

  event.respondWith(isDataRequest(url) ? networkFirst(request) : cacheFirst(request));
});
