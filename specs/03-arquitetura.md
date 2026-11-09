# 03 — Arquitetura

## 1. Estilo arquitetural

O XLearn é uma **SPA estática, offline-first, local-first e modular**, executada inteiramente no navegador e publicada em hospedagem estática. Não há servidor de aplicação, banco remoto de conteúdo, framework de UI ou dependência de execução.

```
┌──────────────────────────────────────────────────────────────────┐
│ Navegador                                                        │
│                                                                  │
│  index.html ──► js/app.js (UI, rotas, estado, eventos)            │
│                     │                                            │
│                     ├── js/questions.js ──► fetch(manifesto/.md)  │
│                     │        └── js/parser.js (puro)              │
│                     ├── js/db.js ──► IndexedDB (xlearn)           │
│                     │        ├── gamification.js / coins.js       │
│                     │        ├── season.js / srs.js               │
│                     │        └── simulado.js / settings.js        │
│                     ├── js/cloud.js ──► Supabase Auth/PostgREST   │
│                     ├── js/timer.js / sound.js / ranking.js        │
│                     ├── js/backup.js / storage.js                  │
│                     └── js/settings.js                              │
│                                                                  │
│  service-worker.js ──► Cache API (app shell + runtime)            │
└──────────────────────────────────────────────────────────────────┘
```

## 2. Camadas e responsabilidades

| Camada | Arquivos | Responsabilidade | Regra |
|---|---|---|---|
| Shell | `index.html`, `css/styles.css`, `manifest.webmanifest` | Estrutura, estilos, tema, PWA | Não contém regra de negócio |
| Interface | `js/app.js` | Rotas, renderização, eventos, estado de UI, modais, foco | Não acessa IndexedDB diretamente nem SDK Supabase |
| Orquestração de dados | `js/db.js` | Transações, stores, agregações, backup/importação/exclusão | Toda persistência local passa por aqui |
| Conteúdo | `js/questions.js`, `js/parser.js` | Manifesto, `fetch`, parsing e normalização | `parser.js` é puro, sem DOM/browser APIs |
| Domínio | `js/srs.js`, `js/gamification.js`, `js/coins.js`, `js/season.js`, `js/timer.js`, `js/simulado.js`, `js/ranking.js`, `js/backup.js`, `js/storage.js` | Regras puras, cálculos e validações | Sem DOM, sem IndexedDB, testáveis no Node |
| Nuvem | `js/cloud.js`, `js/cloud-config.js` | Protocolo REST, sessão, erros, ranking | Sem DOM; `fetch` injetável |
| Offline | `service-worker.js` | App shell, caches, estratégias e atualização | Só GET, mesma origem |

### 2.1 Regras de dependência

1. `app.js` PODE importar qualquer módulo, mas NÃO DEVE abrir transações IndexedDB nem chamar endpoints Supabase diretamente.
2. `db.js` PODE importar módulos puros de domínio; NÃO DEVE importar `app.js` nem tocar no DOM.
3. Módulos puros NÃO DEVEM importar `app.js`, `db.js`, `questions.js` ou `cloud.js`.
4. `cloud.js` NÃO DEVE importar `app.js` nem `db.js`; recebe sessão e `fetch` por parâmetro.
5. `service-worker.js` NÃO DEVE importar módulos da aplicação; é autocontido.
6. Nenhum módulo de execução pode depender de pacote npm, CDN, fonte externa ou script de terceiros.

## 3. Estrutura do repositório

```
XLearn/
├── index.html
├── manifest.webmanifest
├── service-worker.js
├── package.json                 # scripts; sem dependências de execução
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── backup.js
│   ├── cloud-config.js
│   ├── cloud.js
│   ├── coins.js
│   ├── db.js
│   ├── gamification.js
│   ├── parser.js
│   ├── questions.js
│   ├── ranking.js
│   ├── season.js
│   ├── settings.js
│   ├── simulado.js
│   ├── sound.js
│   ├── srs.js
│   ├── storage.js
│   └── timer.js
├── scripts/
│   ├── build-icons.mjs
│   └── build-manifest.mjs
├── questoes/
│   ├── manifest.json
│   └── *.md
├── assets/characters/*.svg
├── icons/*.png
├── supabase/
│   ├── schema.sql
│   └── migrations/
├── specs/
├── outros/                      # referências, não usadas em runtime
├── README.md
└── PROJECT_STATUS.md
```

## 4. Estado da aplicação

`app.js` mantém um objeto `state` em memória com:

| Campo | Conteúdo |
|---|---|
| `route` | Rota atual normalizada |
| `entries` / `materials` | Manifesto e materiais carregados |
| `loading`, `error` | Estado de carregamento e erro global |
| `settings` | Preferências normalizadas |
| `session` | Sessão normal ativa |
| `simuladoSession` | Simulado ativo |
| `simuladoHistory` | Histórico agregado de simulados |
| `reviewQueue` | Fila de revisões |
| `progress`, `stats`, `gamification`, `wallet`, `season` | Dados locais consolidados |
| `cloud.session`, `cloud.profile`, `cloud.rank` | Sessão, perfil e cache do ranking |
| `cloud.syncStatus`, `pendingSync`, `lastSyncAt` | Estado da sincronização |
| `authModal`, `feedbackModalOpen` | Estado de modais |
| `online` | Conectividade |

O estado persistente vive em IndexedDB ([04 — Modelo de dados](04-modelo-de-dados.md)). O estado em memória é reconstruído no boot e após operações relevantes.

## 5. Fluxos principais

### 5.1 Boot

1. `index.html` carrega `js/app.js` como módulo.
2. `app.js` aplica preferências visuais, registra listeners, abre o IndexedDB e carrega dados locais.
3. Carrega o manifesto via `questions.js`.
4. Restaura sessão normal, simulado e conta (`meta/cloudAuth`).
5. Consulta ranking em cache e tenta sincronizar/atualizar conforme conectividade.
6. Renderiza a rota atual (padrão `#/inicio`).

### 5.2 Carregamento de materiais

1. `loadManifest()` busca `questoes/manifest.json` com `no-cache`.
2. Valida `files`, caminhos `.md` e duplicatas.
3. `loadMaterial(entry)` busca o Markdown e chama `parseMaterial`.
4. O parser normaliza questões e retorna `warnings` e `valid`.
5. Materiais válidos são exibidos; inválidos são reportados sem interromper os demais.
6. O cache em memória evita `fetch` repetido na mesma sessão de página.

### 5.3 Início de sessão normal

1. `startSession(entry, options)` verifica se a conta é exigida.
2. Sem conta e online: abre a modal de login/cadastro; “Continuar offline” prossegue.
3. Carrega o material.
4. Define o pool: questões filtradas, ordem configurada e tamanho.
5. Visitante: pool = primeira questão do material e tamanho = 1.
6. Cria `state.session` com `id`, `questionIds`, `index`, `answers`, `orders`, `pending` e `timer`.
7. Persiste em `sessions` e navega para `#/sessao`.

### 5.4 Resposta e transação local

1. O usuário seleciona uma alternativa e confirma.
2. `app.js` calcula `correct` comparando `selectedId` com `correctId`.
3. `db.recordAnswer` abre uma transação `readwrite` em `sessions`, `progress`, `attempts` e `meta`.
4. Grava a sessão atualizada, a tentativa, o progresso da questão e as estatísticas.
5. Aplica gamificação (XP interno + conquistas), carteira (moedas + meta) e ledger da temporada na mesma transação.
6. Retorna ganhos, novas conquistas e eventual evolução de estágio.
7. `app.js` toca sons, anuncia conquistas e atualiza a interface.
8. A sincronização do placar é agendada com debounce.

### 5.5 Conclusão de sessão

1. Ao responder a última questão, `finishSession` marca `finishedAt` e paga o bônus de sessão uma única vez.
2. Persiste o resumo e atualiza progresso/estatísticas.
3. Navega para `#/resumo`.
4. Visitante vê resumo sem gabarito e com convite para conta.
5. Usuário com conta vê acertos, erros, não respondidas, duração e revisão de erros.

### 5.6 Revisões

1. `buildReviewQueue` agrupa registros de `progress` por material.
2. Separa vencidas e futuras, ordena por atraso e próxima data.
3. A interface mostra contagens e selo na navegação.
4. “Estudar agora” inicia sessão com as questões vencidas, limitada ao tamanho configurado.
5. A sessão de revisão não usa cronômetro.

### 5.7 Simulado

1. `renderSimulado` agrupa materiais válidos por `subject`.
2. O usuário define quantidade por assunto.
3. A sessão usa IDs compostos `materialId::questionId` e `mode: "simulado"`.
4. O simulado ativo vive em `meta/simuladoSession` e não usa cronômetro.
5. A conclusão grava apenas resumo compacto em `meta/simulados` via `appendSimuladoResult`.
6. Nenhum caminho de gravação normal é chamado.

### 5.8 Conta, sincronização e ranking

1. `cloudClient.signIn` ou `signUp` valida credenciais e retorna sessão.
2. A sessão é persistida em `meta/cloudAuth` (sem senha).
3. `summarizeSeason` fornece estágio, moedas e dias ativos.
4. `saveScore` envia UPSERT para `season_scores` com `user_id` da sessão.
5. `fetchLeaderboard` consulta a view `season_leaderboard` (top 5).
6. `fetchOwnRank` consulta a posição do usuário fora do top 5.
7. O resultado é cacheado em `meta/cloudRank`.
8. Falhas de rede não bloqueiam o estudo e são reenviadas ao reconectar.

### 5.9 Atualização do PWA

1. O service worker instala o shell versionado e chama `skipWaiting`.
2. A ativação remove caches `xlearn-*` antigos e assume clientes.
3. O app avisa que há nova versão; não recarrega à força.
4. O usuário pode aplicar a atualização; `SKIP_WAITING` é suportado.

## 6. Tratamento de erros

| Situação | Comportamento |
|---|---|
| Sem IndexedDB | Erro explícito; app não tenta simular persistência |
| Banco bloqueado por outra aba | Mensagem orienta fechar outras abas |
| Manifesto ausente/inválido | Erro claro com orientação para regenerar e publicar |
| Material malformado | Avisos; material inválido é ignorado, demais continuam |
| Falha de rede ao carregar material | Erro na interface; material já cacheado pode funcionar offline |
| Sem conexão com Supabase | Estudo continua; sincronização fica pendente e é reenviada |
| Token expirado | Renovação por refresh token; se falhar, sessão local é limpa |
| Backup inválido | Validação antes de escrever; dados existentes permanecem |
| Cache API indisponível | `clearAppCaches` retorna `supported: false` sem lançar erro |
| Web Audio indisponível | Efeitos sonoros são ignorados |

## 7. Decisões arquiteturais

| ID | Decisão | Justificativa | Consequência |
|---|---|---|---|
| ADR-001 | SPA com rotas em hash | GitHub Pages não reescreve URLs | Links `#/rota`; estado de rota no cliente |
| ADR-002 | Sem framework | Requisito de JavaScript puro e leveza | `app.js` maior; helpers próprios de DOM |
| ADR-003 | IndexedDB como fonte local | Capacidade, índices e transações | Necessário tratar bloqueio/versão e backup |
| ADR-004 | Módulos de domínio puros | Testabilidade e separação | Regras não podem tocar DOM/DB |
| ADR-005 | Manifesto gerado | GitHub Pages não lista diretórios | Deve ser regenerado ao adicionar provas |
| ADR-006 | Correção por ID | Gabarito independente da posição | Alternativas podem ser embaralhadas com segurança |
| ADR-007 | Supabase REST sem SDK | Sem dependência de runtime | Protocolo e erros implementados em `cloud.js` |
| ADR-008 | RLS como autorização | Chave publishable é pública | Escrita limitada ao próprio `user_id`; validade do placar é do cliente |
| ADR-009 | Service worker versionado | Evitar shell misto | `VERSION` deve subir a cada mudança de shell |
| ADR-010 | Backup versionado e validado | Evitar corrupção por arquivo inválido | Importação substitui stores em transação atômica |
| ADR-011 | Sem sincronização de progresso | Escopo e privacidade | Dados locais por dispositivo |
| ADR-012 | Temporada com congelamento | Progressão sazonal justa | Nova temporada exige configuração explícita |

## 8. Manutenção

- Mudou arquivo do app shell? Incremente `VERSION` em `service-worker.js` e atualize [07 — Offline e PWA](07-offline-e-pwa.md).
- Mudou store, chave de `meta` ou backup? Atualize [04 — Modelo de dados](04-modelo-de-dados.md) e os testes.
- Mudou schema remoto? Atualize `supabase/schema.sql`, a migration e [08 — Segurança e privacidade](08-seguranca-e-privacidade.md).
- Mudou regra de jogo/economia? Atualize o módulo puro correspondente, [02 — Requisitos](02-requisitos.md) e os testes unitários.
- Mudou rota, texto de interface ou fluxo de visitante? Atualize [05 — Interface e rotas](05-interface-e-rotas.md).
