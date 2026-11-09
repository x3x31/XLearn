# 04 — Modelo de dados

O XLearn tem dois domínios de dados independentes:

1. **Local** — IndexedDB `xlearn`, fonte de verdade do estudo, gamificação, simulados e preferências.
2. **Remoto** — Supabase, usado apenas para conta e ranking público da temporada.

Não há sincronização do progresso local entre dispositivos.

## 1. IndexedDB local

### 1.1 Identificação

| Item | Valor |
|---|---|
| Banco | `xlearn` |
| Versão | `1` |
| Stores | `meta`, `progress`, `sessions`, `attempts` |
| Abertura | `openDatabase()` em `js/db.js` |
| Transações | Toda escrita relevante usa `readwrite`; respostas usam uma única transação para os quatro stores e `meta` |

### 1.2 Store `meta`

Registro genérico `{ key, value, updatedAt }`, com `keyPath: "key"`.

| Chave | Formato | Conteúdo |
|---|---|---|
| `settings` | Objeto | Preferências normalizadas de estudo, aparência e som |
| `stats` | Objeto | `answered`, `correct`, `daily`, `byMaterial`, `updatedAt` |
| `gamification` | Objeto | XP interno, contadores, conquistas, sessões premiadas, recorde de sequência |
| `wallet` | Objeto | Saldo, total ganho, gasto, sessões pagas, dias de meta, conquistas coletadas |
| `season` | Objeto | Temporada atual, período e `coinsEarned` do ledger sazonal |
| `simuladoSession` | Objeto \| `null` | Simulado ativo, se houver |
| `simulados` | Objeto | Histórico compacto de simulados por assunto |
| `cloudAuth` | Objeto \| `null` | Sessão Supabase (access/refresh token, validade, `userId`, e-mail, apelido) |
| `cloudProfile` | Objeto \| `null` | Perfil local da conta e estado de sincronização |
| `cloudRank` | Objeto | Cache do ranking consultado (temporada, top, posição própria, data) |

`cloudAuth`, `cloudProfile` e `cloudRank` são gravados por `app.js` via `getMeta`/`setMeta`, não por regras de domínio.

#### `meta/settings`

```js
{
  sessionSize: 10,              // 1–100
  questionOrder: "shuffle",     // "shuffle" | "sequential"
  shuffleAlternatives: true,    // sempre true; não é opção desativável
  timerEnabled: false,
  timerMinutes: 30,             // 5–120
  srsEnabled: true,
  srsIntervals: [1, 3, 7, 14, 30],
  dailyGoal: 20,                // 1–500
  theme: "system",              // "system" | "dark" | "light"
  fontSize: 16,                 // 14–22 px
  animations: true,
  gamification: true,
  showExplanations: true,
  soundEnabled: true,
  soundVolume: 0.6              // 0–1
}
```

#### `meta/stats`

```js
{
  answered: 0,
  correct: 0,
  daily: {
    "2026-11-09": { answered: 12, correct: 9 }
  },
  byMaterial: {
    "questoes/MATERIAL.md": { answered: 12, correct: 9 }
  },
  updatedAt: "2026-11-09T12:00:00.000Z"
}
```

- `daily` mantém no máximo os últimos **365 dias**.
- `byMaterial` é indexado pelo caminho do manifesto (com fallback para `materialId`).

#### `meta/gamification`

```js
{
  xp: 0,
  answered: 0,
  correct: 0,
  sessionsCompleted: 0,
  perfectSessions: 0,
  bestStreak: 0,
  achievements: {
    "primeira-resposta": "2026-11-09T12:00:00.000Z"
  },
  awardedSessions: {
    "session-id": "2026-11-09T12:00:00.000Z"
  },
  updatedAt: "2026-11-09T12:00:00.000Z"
}
```

`achievements` e `awardedSessions` são mapas idempotentes. `bestStreak` é o recorde; a sequência atual é derivada de `meta/stats.daily` por `computeStreak`.

#### `meta/wallet`

```js
{
  balance: 130,
  earned: 130,
  spent: 0,
  awardedSessions: { "session-id": "..." },
  goalDays: { "2026-11-09": "..." },
  claimedAchievements: { "primeira-resposta": "..." },
  updatedAt: "..."
}
```

- `balance` é o saldo disponível.
- `earned` é o total histórico ganho.
- `spent` é reservado para gastos futuros; hoje permanece 0.
- `awardedSessions`, `goalDays` e `claimedAchievements` garantem pagamento único.
- Históricos são podados em **200 entradas**.

#### `meta/season`

```js
{
  id: "2026-1",
  name: "Temporada 1",
  startsAt: "2026-11-05",
  endsAt: "2026-12-04",
  coinsEarned: 0,
  createdAt: "2026-11-05T00:00:00.000Z",
  updatedAt: "2026-11-05T00:00:00.000Z"
}
```

- `coinsEarned` é o ledger da temporada, separado de `wallet.earned`.
- Quando a temporada termina, o registro é preservado e `applySeasonCoins` deixa de somar.
- Uma nova temporada configurada reinicia o ledger no primeiro pagamento.

#### `meta/simulados`

```js
{
  version: 1,
  sessions: [
    {
      id: "simulado-id",
      startedAt: "...",
      finishedAt: "...",
      durationMs: 180000,
      total: 10,
      answered: 10,
      correct: 7,
      wrong: 3,
      unanswered: 0,
      subjects: [
        { subject: "Banco de Dados", total: 5, answered: 5, correct: 4 }
      ]
    }
  ]
}
```

O histórico é idempotente por `id` e ordenado do mais recente para o mais antigo.

### 1.3 Store `progress`

`keyPath: "key"`, com chave `${materialId}::${questionId}`.

Índices: `materialId`, `materialPath`, `dueAt`.

```js
{
  key: "MAT-001::MAT-001-Q0001",
  materialId: "MAT-001",
  materialPath: "questoes/MATERIAL.md",
  materialTitle: "Material",
  subject: "Banco de Dados",
  topic: "Modelo relacional",
  questionId: "MAT-001-Q0001",
  seen: 1,
  correctCount: 1,
  wrongCount: 0,
  streak: 1,
  lastResult: true,
  lastSelectedId: "B",
  lastAnsweredAt: "2026-11-09T12:00:00.000Z",
  srsLevel: 1,
  dueAt: "2026-11-10T12:00:00.000Z",
  lastIntervalMinutes: 1440,
  manualSchedule: false,
  srsUpdatedAt: "2026-11-09T12:00:00.000Z",
  history: [
    { at: "...", correct: true, selectedId: "B", sessionId: "...", srsLevel: 1, dueAt: "..." }
  ]
}
```

- `history` mantém as **30** entradas mais recentes.
- `dueAt` alimenta a fila de revisões.
- `manualSchedule` indica que o estudante substituiu o intervalo automático.

### 1.4 Store `sessions`

`keyPath: "id"`. Índices: `status`, `updatedAt`.

```js
{
  id: "s-...",
  materialId: "MAT-001",
  materialPath: "questoes/MATERIAL.md",
  materialTitle: "Material",
  subject: "Banco de Dados",
  mode: "material",             // material | correcao | revisao | simulado
  createdAt: "...",
  updatedAt: "...",
  startedAt: 1762689600000,
  questionIds: ["MAT-001-Q0001"],
  index: 0,
  answers: {
    "MAT-001-Q0001": {
      selectedId: "B",
      correctId: "B",
      correct: true,
      answeredAt: "...",
      order: ["C", "A", "B", "D"],
      schedule: { level: 1, dueAt: "...", intervalMinutes: 1440, automatic: true },
      autoSchedule: { ... }
    }
  },
  orders: {
    "MAT-001-Q0001": ["C", "A", "B", "D"]
  },
  pending: null,
  timer: {
    enabled: false,
    durationSeconds: 0,
    remainingSeconds: 0,
    deadlineAt: null,
    paused: true,
    updatedAt: "..."
  },
  finishedAt: null,
  status: "active" // active | completed (derivado ao gravar)
}
```

- `orders` preserva a ordem embaralhada por questão.
- `answers` impede dupla resposta e permite reconstruir o quiz.
- `timer` guarda o estado do cronômetro; ao pausar, `deadlineAt` é removido e `remainingSeconds` congela.
- Simulados usam a mesma forma, com `mode: "simulado"` e `durationMs` na conclusão.

### 1.5 Store `attempts`

`keyPath: "key"`, com chave `${sessionId}::${questionId}`.

Índices: `answeredAt`, `materialPath`, `sessionId`.

```js
{
  key: "s-...::MAT-001-Q0001",
  sessionId: "s-...",
  materialId: "MAT-001",
  materialPath: "questoes/MATERIAL.md",
  materialTitle: "Material",
  questionId: "MAT-001-Q0001",
  subject: "Banco de Dados",
  topic: "Modelo relacional",
  difficulty: "medium",
  selectedId: "B",
  correctId: "B",
  correct: true,
  answeredAt: "2026-11-09T12:00:00.000Z",
  order: ["C", "A", "B", "D"],
  mode: "material"
}
```

- Cada tentativa é única por sessão/questão.
- É o histórico completo usado em estatísticas, progresso e resumo.
- Simulados NÃO gravam tentativas.

## 2. Invariantes locais

1. `progress.key` e `attempts.key` são compostas e determinísticas.
2. Toda resposta é gravada em uma única transação com `sessions`, `progress`, `attempts` e `meta`.
3. Uma resposta já existente em `session.answers[questionId]` não é registrada novamente.
4. Pagamentos usam chaves idempotentes: `sessionId`, `dayKey` e `achievementId`.
5. `meta/settings` nunca é apagado por “Apagar progresso”.
6. `cloudAuth` nunca entra no backup.
7. Dados normalizados sempre tratam valores ausentes, negativos ou corrompidos como zero/estado padrão.
8. Estatísticas e históricos têm limites de retenção para não crescerem indefinidamente.

## 3. Backup local

### 3.1 Envelope

```json
{
  "app": "XLearn",
  "format": "xlearn-backup",
  "schemaVersion": 1,
  "exportedAt": "2026-11-09T12:00:00.000Z",
  "summary": {
    "progress": 10,
    "sessions": 1,
    "attempts": 10,
    "simulados": 2,
    "hasSettings": true,
    "hasGamification": true,
    "hasWallet": true,
    "hasSimuladoHistory": true,
    "hasActiveSimulado": false
  },
  "data": {
    "meta": [],
    "progress": [],
    "sessions": [],
    "attempts": []
  }
}
```

### 3.2 Regras

- Formato identificável: `app: "XLearn"` + `format: "xlearn-backup"`.
- Versão suportada: `schemaVersion: 1`.
- Exportação lê os quatro stores em uma única transação `readonly`.
- `cloudAuth` é removido de `data.meta` antes de gravar o arquivo.
- Importação valida formato, versão, listas, objeto de cada registro e unicidade de chaves antes de escrever.
- Importação substitui os quatro stores em uma única transação `readwrite`.
- Importar backup antigo não restaura sessão Supabase.
- A sessão atual pode ser regravada depois da importação, sem voltar ao backup.

## 4. Supabase

### 4.1 Tabela `public.season_scores`

| Coluna | Tipo | Regra |
|---|---|---|
| `user_id` | `uuid` | PK composta; referência `auth.users(id)` com `on delete cascade` |
| `season_id` | `text` | PK composta; ex.: `2026-1` |
| `nickname` | `text` | 2–24 caracteres após `btrim` |
| `level_number` | `integer` | 1–99; padrão 1 |
| `level_name` | `text` | 1–40 caracteres após `btrim` |
| `coins` | `integer` | ≥ 0; padrão 0 |
| `active_days` | `integer` | ≥ 0; padrão 0 |
| `created_at` | `timestamptz` | padrão `now()` |
| `updated_at` | `timestamptz` | padrão `now()`; atualizado por trigger |

Chave primária: `(user_id, season_id)`.

Índice: `(season_id, coins desc, active_days desc, updated_at asc)`.

Trigger: `touch_season_scores_updated_at` antes de `insert or update`.

### 4.2 View `public.season_leaderboard`

- `security_invoker = true` para respeitar RLS da tabela-base.
- Colunas: `position`, `user_id`, `season_id`, `nickname`, `level_number`, `level_name`, `coins`, `active_days`, `updated_at`.
- `position` usa `row_number()` por temporada, ordenando por `coins desc`, `active_days desc`, `updated_at asc`, `nickname asc`.
- Filtra `coins > 0 OR active_days > 0`, para que conta recém-criada sem estudo não ocupe posição.
- `grant select` para `anon` e `authenticated`.

### 4.3 RLS e grants

| Política | Operação | Regra |
|---|---|---|
| `season_scores_public_read` | `select` | `using (true)` para `anon` e `authenticated` |
| `season_scores_insert_own` | `insert` | `with check (auth.uid() = user_id)` |
| `season_scores_update_own` | `update` | `using (auth.uid() = user_id)` e `with check (auth.uid() = user_id)` |

- `anon` e `authenticated` recebem apenas `select` na tabela.
- `authenticated` recebe `insert` e `update`.
- Nenhum e-mail é armazenado em `season_scores`; o vínculo é apenas o UUID do Auth.

### 4.4 Payload de placar

```json
{
  "user_id": "uuid-da-sessao",
  "season_id": "2026-1",
  "nickname": "Ana",
  "level_number": 2,
  "level_name": "Estudante",
  "coins": 320,
  "active_days": 4
}
```

O envio usa:

```http
POST /rest/v1/season_scores?on_conflict=user_id,season_id
Prefer: resolution=merge-duplicates,return=representation
Authorization: Bearer <access_token>
apikey: <publishable_key>
```

`user_id` é sempre o da sessão; o cliente valida `row.user_id === session.userId` antes de enviar.

### 4.5 Consultas de ranking

```http
GET /rest/v1/season_leaderboard?season_id=eq.2026-1&select=position,user_id,...&order=position.asc&limit=5
GET /rest/v1/season_leaderboard?season_id=eq.2026-1&user_id=eq.<uuid>&select=...&limit=1
```

O top é limitado a **5** na home; a posição própria é consultada separadamente quando o usuário não aparece no top.

## 5. Ciclo de vida dos dados

| Operação | Efeito |
|---|---|
| Responder | Grava sessão, tentativa, progresso, estatísticas, gamificação, carteira e temporada |
| Concluir sessão | Marca `finishedAt`, paga bônus uma única vez e atualiza resumo |
| Coletar conquista | Grava `claimedAchievements` e soma moedas uma única vez |
| Exportar | Lê os quatro stores e remove `cloudAuth` do envelope |
| Importar | Valida e substitui os quatro stores; não restaura `cloudAuth` |
| Limpar cache | Remove apenas caches `xlearn*`; não toca no IndexedDB |
| Apagar progresso | Limpa `progress`, `sessions`, `attempts` e chaves de jogo/estatísticas em `meta`; preserva `settings` |
| Sair da conta | Revoga token quando há rede e apaga `cloudAuth` |
| Temporada encerrada | Mantém `meta/season` congelado; novos ganhos ficam só na carteira |
| Nova temporada configurada | `normalizeSeason` reinicia o ledger no primeiro pagamento |

## 6. Privacidade dos dados

- Dados de estudo permanecem no dispositivo.
- A conta envia apenas apelido, nível, moedas, dias ativos e identificador público.
- E-mail e tokens ficam em `meta/cloudAuth` local e nunca são enviados ao ranking.
- O backup não contém tokens, e-mail ou senha.
- A senha nunca é armazenada; existe apenas no momento do envio ao Supabase Auth.
