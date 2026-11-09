# 07 — Offline e PWA

O XLearn é uma PWA estática, instalável e offline-first. O service worker mantém o app shell em cache e complementa o cache com materiais acessados. O estudo e a persistência local continuam funcionando sem rede.

## 1. Manifesto PWA

`manifest.webmanifest`:

| Campo | Valor |
|---|---|
| `id` | `./` |
| `name` | `XLearn — aprenda praticando` |
| `short_name` | `XLearn` |
| `description` | Estudo com questões, repetição espaçada, metas e conquistas |
| `lang` | `pt-BR` |
| `dir` | `ltr` |
| `start_url` | `./` |
| `scope` | `./` |
| `display` | `standalone` |
| `display_override` | `window-controls-overlay`, `standalone` |
| `orientation` | `any` |
| `background_color` | `#070b18` |
| `theme_color` | `#070b18` |
| `categories` | `education`, `productivity` |

### 1.1 Ícones

| Arquivo | Tamanho | Uso |
|---|---|---|
| `icons/icon-192.png` | 192×192 | Instalação |
| `icons/icon-512.png` | 512×512 | Instalação e splash |
| `icons/icon-maskable-512.png` | 512×512 | Ícone maskable |
| `icons/apple-touch-icon.png` | 180×180 | Atalho no iOS |

### 1.2 Metadados no HTML

`index.html` inclui:

- `theme-color` e `viewport` com `viewport-fit=cover`;
- `mobile-web-app-capable` e `apple-mobile-web-app-capable`;
- `apple-mobile-web-app-status-bar-style` e `apple-mobile-web-app-title`;
- link para o manifesto e para o ícone da Apple;
- favicon SVG embutido em `data:`.

## 2. Service worker

Arquivo: `service-worker.js` (autocontido, sem imports da aplicação).

### 2.1 Versão e caches

```js
const VERSION = "v26";
const SHELL_CACHE = `xlearn-shell-${VERSION}`;
const RUNTIME_CACHE = `xlearn-runtime-${VERSION}`;
```

- Os nomes começam com `xlearn-` para que a limpeza de cache do app os encontre.
- Trocar `VERSION` cria novas caches e invalida as anteriores na ativação.
- **Toda alteração em arquivo do app shell exige incremento de `VERSION`.**

### 2.2 App shell pré-cacheado

O service worker pré-cacheia **31 caminhos** na instalação:

| Grupo | Caminhos |
|---|---|
| Raiz e documento | `./`, `index.html` |
| Estilos | `css/styles.css` |
| Manifesto PWA | `manifest.webmanifest` |
| Módulos JS (17) | `app.js`, `cloud.js`, `cloud-config.js`, `db.js`, `parser.js`, `questions.js`, `settings.js`, `srs.js`, `gamification.js`, `coins.js`, `season.js`, `timer.js`, `simulado.js`, `ranking.js`, `backup.js`, `storage.js`, `sound.js` |
| Personagens (5) | `curioso.svg`, `estudante.svg`, `focado.svg`, `veterano.svg`, `mestre.svg` |
| Ícones (4) | `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` |
| Catálogo | `questoes/manifest.json` |

As URLs são resolvidas com `new URL(path, self.location.href)`, o que preserva o funcionamento na raiz ou em subdiretório (GitHub Pages).

### 2.3 Estratégias de fetch

O service worker só trata requisições:

- `GET`;
- da mesma origem;
- que não sejam o próprio `service-worker.js`.

| Tipo de requisição | Estratégia | Fallback |
|---|---|---|
| Navegação (`request.mode === "navigate"`) | Rede primeiro | `index.html` em cache; se ausente, página 503 “XLearn offline” |
| Manifesto e materiais (`/questoes/*.md` e `manifest.json`) | Rede primeiro, atualizando a runtime cache | Cache da requisição; se ausente, JSON 503 |
| Demais estáticos | Cache primeiro | Rede, gravando na runtime cache; se falhar, página 503 |

Requisições de outra origem não são interceptadas.

### 2.4 Instalação

1. Abre `SHELL_CACHE`.
2. Executa `cache.addAll(SHELL_URLS)`.
3. Chama `self.skipWaiting()`.

Se qualquer caminho do shell falhar, a instalação falha e o service worker anterior permanece. Por isso, todo novo arquivo do shell precisa ser adicionado a `SHELL_PATHS` **e** existir no repositório.

### 2.5 Ativação

1. Lista `caches.keys()`.
2. Apaga caches que começam com `xlearn-` e não são as caches atuais.
3. Chama `self.clients.claim()`.

Caches de outros aplicativos no mesmo domínio não são tocados.

### 2.6 Atualização

- O app registra `service-worker.js` com escopo `./` após o evento `load`.
- Em `updatefound`, quando o novo worker chega a `installed` e já existe um controller, o app mostra o toast: “Nova versão do XLearn disponível. Atualize a página para aplicar.”
- O app **não recarrega à força**.
- O worker aceita a mensagem `SKIP_WAITING`.
- Como a ativação já chama `skipWaiting` e a instalação pré-cacheia o shell novo, a próxima recarga tende a usar a versão atualizada.

### 2.7 Escopo

- Registro: `navigator.serviceWorker.register(SW_URL, { scope: "./" })`.
- `SW_URL` é resolvido a partir de `document.baseURI`.
- O escopo acompanha o diretório de publicação, sem caminho absoluto.

## 3. Funcionamento offline

### 3.1 O que funciona sem rede

- Abertura do app shell após a primeira visita.
- Navegação entre rotas já carregadas.
- Catálogo a partir do manifesto em cache.
- Estudo de materiais já acessados ao menos uma vez.
- Respostas, sessões, progresso, tentativas, SRS, moedas, XP, conquistas e temporada — todos em IndexedDB.
- Simulados e revisões já disponíveis localmente.
- Exportação de backup.
- Consulta ao último ranking em cache (`meta/cloudRank`).
- Criação de sessão de visitante e estudo local.

### 3.2 O que não funciona sem rede

- Primeira visita antes da instalação do service worker.
- Abrir material nunca acessado no dispositivo.
- Cadastro, login, renovação de sessão e sincronização do placar.
- Atualização do ranking global.
- Instalação da PWA a partir do navegador, quando o manifesto ainda não foi baixado.

### 3.3 Comportamento de rede e conta

- `isOnline()` usa `navigator.onLine`.
- Offline, a topbar mostra `Offline` e uma faixa no topo explica que respostas continuam funcionando.
- Iniciar uma prova sem conta offline prossegue com aviso; a conta pode ser criada depois.
- Respostas e sessões são gravadas localmente mesmo com a conta ausente.
- Ao reconectar:
  - a faixa desaparece;
  - um toast informa “Conexão restaurada”;
  - o placar pendente é reenviado;
  - se a rota for `inicio`, o ranking é atualizado.
- Falhas do Supabase não bloqueiam o estudo.

### 3.4 Sessão expirada

- A sessão do Supabase é renovada antes de expirar.
- Se a renovação falhar por credenciais, a sessão local é limpa.
- Se falhar por rede, o estado fica offline e o estudo continua; a sincronização é reenviada quando possível.

## 4. Instalação no dispositivo

### 4.1 Android/Chrome

1. Abrir o app publicado com internet.
2. Aguardar o carregamento completo (service worker instalado).
3. Usar “Instalar aplicativo” ou “Adicionar à tela inicial”.
4. Abrir pelo ícone; o app roda em `standalone`.

### 4.2 iOS/Safari

1. Abrir o app com internet.
2. Compartilhar → “Adicionar à Tela de Início”.
3. O ícone usa `apple-touch-icon` e a abertura respeita `apple-mobile-web-app-*`.

### 4.3 Desktop

Navegadores compatíveis oferecem instalação pela barra de endereço ou menu. O `display_override` permite `window-controls-overlay` quando suportado.

## 5. Cache de runtime

- Materiais Markdown e o manifesto são buscados com rede primeiro e gravados na `xlearn-runtime-v26`.
- Outros estáticos não pré-cacheados (por exemplo, um SVG futuro) usam cache primeiro e preenchem a runtime cache.
- O manifesto também é pré-cacheado no shell; a estratégia de rede primeiro mantém a versão mais recente quando há conexão.
- A runtime cache não tem limite explícito no código: cresce conforme os materiais acessados e é descartada em uma mudança de versão.

## 6. Limpeza de cache

`js/storage.js` expõe `clearAppCaches()`:

```js
export const APP_CACHE_PREFIX = "xlearn";
```

Remove caches cujo nome seja exatamente `xlearn` ou comece com `xlearn-` ou `xlearn:`.

- Ação disponível em **Configurações → Armazenamento local → Limpar cache do app**.
- Retorna `{ supported, deleted }`.
- Em navegador sem Cache API, retorna `{ supported: false, deleted: [] }` sem lançar erro.
- **Não** toca no IndexedDB: progresso, moedas, sessões, tentativas e configurações permanecem.
- É independente de “Apagar progresso”, que limpa dados do IndexedDB e preserva `meta/settings`.

## 7. Persistência e limites do navegador

- IndexedDB pode ser apagado pelo usuário ao limpar dados do site, pelo modo privado ou por pressão de armazenamento.
- O app não solicita `navigator.storage.persist()`.
- Não há sincronização entre dispositivos: o backup JSON é o mecanismo de portabilidade.
- A Cache API pode ser despejada pelo navegador sob pressão; o app shell é re-baixado na próxima visita online.
- Em modo privado, o service worker pode não registrar e o IndexedDB pode ser volátil.
- O aplicativo não usa `Background Sync`, `Push API` ou notificações.

## 8. Manutenção do offline

Checklist ao alterar o app:

1. Adicionou um arquivo necessário ao boot? Inclua em `SHELL_PATHS`.
2. Alterou qualquer arquivo do shell? Incremente `VERSION` em `service-worker.js`.
3. Removeu um arquivo? Retire de `SHELL_PATHS` e incremente `VERSION`.
4. Alterou a estratégia de cache? Atualize este documento e [03 — Arquitetura](03-arquitetura.md).
5. Teste em janela anônima:
   - primeira visita online;
   - recarregar offline;
   - abrir um material previamente acessado offline;
   - abrir um material nunca acessado offline e confirmar a mensagem de indisponibilidade;
   - responder e recarregar para confirmar persistência;
   - publicar nova versão e confirmar o aviso de atualização.

## 9. Critérios de aceitação

1. O app shell abre offline após a primeira visita.
2. Materiais já acessados abrem offline.
3. Materiais nunca acessados exibem erro claro, sem quebrar o app.
4. O estudo e a persistência continuam offline.
5. O indicador de conexão reflete o estado real.
6. O placar pendente é reenviado ao reconectar.
7. Uma nova versão não recarrega a página à força.
8. Caches antigos do XLearn são removidos na ativação.
9. Limpar cache não apaga progresso.
10. O app funciona na raiz e em subdiretório do GitHub Pages.
11. `VERSION` é incrementada a cada mudança de shell.
12. Nenhum recurso externo é necessário para o funcionamento offline.
