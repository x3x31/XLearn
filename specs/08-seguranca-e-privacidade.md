# 08 — Segurança e privacidade

O XLearn é uma aplicação estática sem backend próprio. A superfície remota limita-se ao Supabase Auth (GoTrue) e ao PostgREST para ranking. Todo o progresso de estudo permanece no navegador. Este documento descreve o modelo de ameaças, os controles existentes e as limitações residuais.

## 1. Princípios

1. **Minimização de dados:** o ranking expõe apenas apelido, estágio, moedas, dias ativos e posição.
2. **Local-first:** e-mail, tokens, sessões, respostas e histórico ficam no dispositivo; não há sincronização de progresso.
3. **Sem segredos no cliente:** a chave publishable do Supabase é pública por definição; a autorização depende de RLS.
4. **Sem HTML de terceiros:** textos de materiais e dados remotos são renderizados como texto.
5. **Idempotência local:** recompensas e respostas não podem ser duplicadas por cliques repetidos.
6. **Falha segura:** indisponibilidade de rede ou Supabase não impede o estudo local nem apaga dados.

## 2. Classificação de dados

| Dado | Onde fica | Sensibilidade | Backup |
|---|---|---|---|
| Respostas, sessões, tentativas | IndexedDB local | Pessoal | Sim |
| Progresso, SRS, estatísticas | IndexedDB local | Pessoal | Sim |
| XP, conquistas, carteira, temporada | IndexedDB local | Pessoal | Sim |
| Configurações | IndexedDB `meta/settings` | Baixa | Sim |
| Apelido | `meta/cloudProfile`, `cloudAuth` e ranking | Pública | Excluído junto com `cloudAuth` |
| E-mail | `meta/cloudAuth` | Pessoal | **Não** |
| Access token / refresh token | `meta/cloudAuth` | **Secreta** | **Não** |
| Senha | Apenas em memória durante a requisição | **Secreta** | **Não** |
| UUID da conta | Sessão, ranking, tabela | Identificador público | Não |

## 3. Modelo de ameaças

| Ameaça | Cenário | Controle | Risco residual |
|---|---|---|---|
| XSS por conteúdo | Material ou apelido tenta injetar HTML/script | Texto sempre via `textContent`/nós; `innerHTML` apenas com ícones constantes; JSON nunca executado | Baixo |
| Exposição de token | Script malicioso de mesma origem lê IndexedDB | Ausência de HTML dinâmico, sem dependências externas, CSP não configurada | Médio se houver XSS |
| Escrita de placar em nome alheio | Usuário tenta `POST` com outro `user_id` | RLS `auth.uid() = user_id` no insert/update | Baixo |
| Placar inflado | Usuário adultera o próprio cliente e envia moedas falsas | RLS impede outra conta, mas não valida valores | **Aceito/limitação** |
| Leitura indevida do ranking | `anon` consulta tabela | Ranking é público por projeto; e-mail não está na tabela/view | Baixo |
| Vazamento de e-mail | Consulta direta à view ou tabela | `season_scores` não tem e-mail; `auth.users` não é exposto | Baixo |
| Força bruta de senha | Tentativas repetidas de login | Validação de senha e limites do Supabase Auth | Depende do projeto Supabase |
| Sequestro de sessão | Token roubado | HTTPS, tokens de curta duração, refresh, logout revoga | Médio (padrão de token bearer) |
| Repúdio/duplicação de recompensa | Clique repetido ou recarregamento | Chaves idempotentes e transações IndexedDB | Baixo |
| Corrupção por backup | JSON inválido ou malicioso | Validação de formato, versão, listas, chaves e tipos antes da escrita | Baixo |
| Exposição no backup | Usuário compartilha o JSON | `cloudAuth` removido; sem e-mail/tokens/senha | Baixo |
| Aparelho compartilhado | Outra pessoa abre o navegador | Dados locais acessíveis à sessão do navegador; logout local não apaga progresso | Médio |
| Dependência comprometida | Pacote npm malicioso | Nenhuma dependência de execução; scripts locais apenas em build | Baixo |
| Cache envenenado | Resposta adulterada em rede | HTTPS e mesma origem; service worker não intercepta terceiros | Baixo |
| Serviço remoto indisponível | Supabase fora do ar | Estudo local continua; sincronização pendente | Baixo |

## 4. Autenticação

### 4.1 Protocolo

- Supabase Auth via REST (`/auth/v1/...`), sem SDK.
- `fetch` com `AbortController` e timeout padrão de **15 s**.
- Cabeçalhos:
  - `apikey: <publishable_key>`;
  - `Authorization: Bearer <access_token | publishable_key>`;
  - `Content-Type: application/json` quando há corpo;
  - `Prefer` nas operações PostgREST.
- `cache: "no-store"` nas chamadas remotas.

### 4.2 Cadastro

```http
POST /auth/v1/signup
{
  "email": "...",
  "password": "...",
  "data": { "nickname": "..." }
}
```

- Apelido validado e normalizado antes do envio.
- No projeto remoto atual, `mailer_autoconfirm: true`: o cadastro devolve sessão imediatamente.
- Se a confirmação de e-mail estiver ativa, `needsConfirmation` é verdadeiro e o app orienta a confirmar.
- E-mail já registrado gera erro tratado, sem criar duplicata.
- **Cadastro nunca é automático a partir do login.**

### 4.3 Login

```http
POST /auth/v1/token?grant_type=password
{ "email": "...", "password": "..." }
```

- Credenciais inválidas não criam conta.
- A senha existe apenas na memória durante a chamada.
- Nenhum campo de senha é gravado em IndexedDB, backup, log ou URL.

### 4.4 Sessão

`sessionFromAuthPayload` normaliza:

```js
{
  accessToken,
  refreshToken,
  tokenType: "bearer",
  expiresAt,
  userId,
  email,
  nickname,
  seasonId,
  createdAt
}
```

- `expiresAt` aceita segundos ou milissegundos.
- Sem `expires_at`, usa `expires_in` (padrão 3600 s).
- `sessionNeedsRefresh` renova com margem de **60 s** (`SESSION_EXPIRY_SKEW_MS`).
- A sessão é persistida em `meta/cloudAuth` por `app.js`.
- O refresh usa `refresh_token`; falha de credenciais limpa a sessão local.
- Falha de rede mantém a sessão e o estado offline.

### 4.5 Logout

- `signOut` chama `POST /auth/v1/logout` quando há rede.
- O logout local ocorre mesmo se o servidor falhar por rede.
- `cloudAuth`, perfil e cache de ranking são apagados.
- O progresso local **não** é apagado.
- O usuário volta ao estado de visitante.

### 4.6 Validação de entrada

| Campo | Regra |
|---|---|
| Apelido | Remove caracteres de controle e `<>`, colapsa espaços, 2–24 caracteres |
| E-mail | Minúsculas, 5–254 caracteres, formato `x@y.zz` |
| Senha | 6–72 caracteres, não pode ser só espaços |
| Temporada | String não vazia |
| Placar | Números normalizados para inteiros não negativos; nível 1–99 |

## 5. Autorização remota (RLS)

### 5.1 Tabela `public.season_scores`

- RLS habilitada.
- `select`: `using (true)` para `anon` e `authenticated`.
- `insert`: `with check (auth.uid() = user_id)` para `authenticated`.
- `update`: `using` e `with check` com `auth.uid() = user_id`.
- `delete`: `using (auth.uid() = user_id)`, para o próprio usuário apagar a pontuação ao limpar o progresso.
- `anon` recebe apenas `select`.
- `authenticated` recebe `select`, `insert`, `update` e `delete`.
- A chave estrangeira `user_id → auth.users(id)` usa `on delete cascade`.

### 5.2 View `public.season_leaderboard`

- `security_invoker = true`, garantindo que a RLS da tabela-base valha para quem consulta.
- Expõe `position`, `user_id`, `season_id`, `nickname`, `level_number`, `level_name`, `coins`, `active_days`, `updated_at`.
- **Não expõe e-mail.**
- Filtra contas sem atividade (`coins > 0 or active_days > 0`).
- Ordena por moedas, dias ativos, atualização mais antiga e apelido.

### 5.3 Grants

```sql
revoke all on public.season_scores from anon;
revoke all on public.season_scores from authenticated;
grant select on public.season_scores to anon, authenticated;
grant insert, update, delete on public.season_scores to authenticated;

revoke all on public.season_leaderboard from anon;
revoke all on public.season_leaderboard from authenticated;
grant select on public.season_leaderboard to anon, authenticated;

revoke all on function public.nickname_available(text) from public;
grant execute on function public.nickname_available(text) to anon, authenticated;
```

### 5.4 Verificação de apelido

`public.nickname_available(candidate text)` é `stable`, `security definer` e usa `set search_path = ''`. A função:

- valida o comprimento de 2–24 caracteres após `btrim`;
- compara `lower(btrim(auth.users.raw_user_meta_data->>'nickname'))` com o candidato;
- devolve apenas `true` ou `false`;
- não expõe e-mails, UUIDs ou a lista de apelidos.

A execução é liberada para `anon` e `authenticated`, pois o cadastro acontece antes de existir sessão. A ausência da função não bloqueia o cadastro: o cliente mostra o aviso e segue.

### 5.5 Envio de placar

```http
POST /rest/v1/season_scores?on_conflict=user_id,season_id
Prefer: resolution=merge-duplicates,return=representation
Authorization: Bearer <access_token>
apikey: <publishable_key>
```

- `normalizeScore(score, session)` define `user_id` a partir da sessão.
- O cliente verifica `row.user_id === session.userId`; divergência gera `identity_mismatch`.
- RLS é a barreira final contra escrita em nome de outra conta.
- UPSERT por `(user_id, season_id)` evita duplicatas.
- Trigger atualiza `updated_at`.

### 5.5 Limitação aceita

O placar é **calculado no cliente**. Um usuário pode alterar o próprio JavaScript e enviar moedas ou dias ativos falsos. As políticas impedem apenas gravar em nome de outra conta. Não há validação autoritativa de progresso no servidor.

Mitigações possíveis fora do escopo atual:

- função RPC que recalcule o placar a partir de dados assinados;
- validação de plausibilidade por tempo/temporada;
- revisão manual e remoção de entradas anômalas;
- limites de taxa no Supabase.

## 6. Segurança de renderização

1. `h()` cria elementos e define texto com `textContent`.
2. `innerHTML` é usado apenas com strings SVG constantes de `ICONS`.
3. Enunciados, alternativas, explicações, apelidos, mensagens de erro e dados do ranking são texto.
4. O parser de Markdown lê somente frontmatter e blocos JSON; não renderiza HTML do corpo.
5. `JSON.parse` é usado em blocos de material; nunca `eval` ou `Function`.
6. URLs de navegação são rotas internas em hash; não há redirecionamento para URLs fornecidas pelo usuário.
7. O app não usa `document.write`.
8. Não há scripts de terceiros, CDNs, fontes externas ou pixels de rastreamento.

### 6.1 Ausência de CSP

O projeto não define Content Security Policy. Como não há HTML dinâmico nem recursos externos, o risco é reduzido, mas uma CSP restritiva seria uma defesa em profundidade recomendada para publicação futura.

## 7. Segurança local

### 7.1 IndexedDB

- O banco `xlearn` fica no armazenamento do navegador, acessível a qualquer script de mesma origem.
- Não há criptografia em repouso.
- A proteção depende do isolamento de origem e da ausência de XSS.
- Dados podem ser lidos por alguém com acesso ao perfil do navegador no dispositivo.
- Limpar dados do site apaga o banco.
- Os dados de estudo são separados por escopo (`guest` ou `u:<userId>`). Chaves de `meta`, progresso, sessões e tentativas recebem o prefixo do escopo, e as consultas filtram o escopo ativo, impedindo que uma conta veja progresso, recompensas ou histórico de outra no mesmo dispositivo.
- Configurações, `cloudAuth`, `cloudProfile`, `cloudRank` e o marcador de migração permanecem globais; a sessão não é copiada entre contas.

### 7.2 `meta/cloudAuth`

Contém tokens e e-mail. Regras:

- nunca entra no backup;
- é removido na exportação;
- é ignorado na importação;
- é apagado no logout;
- não é enviado ao ranking;
- não é exibido na interface além do necessário.

### 7.3 Backup

- Envelope identificado por `app: "XLearn"` e `format: "xlearn-backup"`.
- Exporta apenas o escopo ativo, com chaves de progresso e IDs de sessão/tentativa canônicos (sem prefixo e sem campo `scope`).
- Importação valida `schemaVersion: 1`, listas dos quatro stores, objeto de cada registro e presença da chave.
- A importação ignora `cloudAuth`, `cloudProfile`, `cloudRank` e `storageScopedOnce` mesmo se um arquivo adulterado os contiver.
- A importação substitui somente o estudo e as configurações globais do escopo ativo, preservando a sessão, o cache do ranking e as demais contas.
- A escrita ocorre em uma única transação; erro desfaz tudo.
- O arquivo pode conter respostas e histórico pessoais; o usuário deve guardá-lo com cuidado.

### 7.4 Exclusão de dados

- “Apagar progresso” remove respostas, sessões, tentativas, estatísticas, temporada, gamificação, carteira, simulados e meta/sequência apenas do escopo ativo.
- Preserva `meta/settings`, a sessão da conta, o cache do ranking, o marcador de migração e os dados das demais contas.
- Preserva a sessão da conta, salvo logout explícito.
- Não há exclusão remota da conta pelo app; isso deve ser feito no Supabase.

## 8. Privacidade do ranking

### 8.1 Dados públicos

- Apelido (2–24 caracteres).
- Número e nome do estágio.
- Moedas da temporada.
- Dias ativos.
- Posição.
- UUID da conta (identificador técnico presente na view).

### 8.2 Dados não públicos

- E-mail.
- Tokens.
- Senha.
- Respostas, materiais estudados, erros e histórico.
- Configurações e backup.

### 8.3 Escolha do apelido

O apelido é público. O app orienta o usuário a não usar dados pessoais e informa isso na modal e no rodapé do ranking. Desde REQ-056, ao sair do campo no cadastro o app consulta a RPC `nickname_available`, que compara apelidos sem diferenciar maiúsculas/minúsculas e sem espaços nas extremidades e devolve apenas `true`/`false`. A verificação é uma proteção de experiência: não há índice único em `auth.users`, então duas contas criadas simultaneamente ainda podem escolher o mesmo apelido; a consulta também não expõe e-mails, UUIDs ou a lista de apelidos.

### 8.4 Cache do ranking

- `meta/cloudRank` guarda top 5, posição própria e data.
- Não guarda e-mail nem token.
- É exibido offline com indicação de cache/estado.

## 9. Segurança da cadeia de suprimentos

- `package.json` não possui `dependencies` nem `devDependencies`.
- Não há build de runtime, bundler, transpilador ou CDN.
- Scripts `build:icons`, `build:manifest` e `check` usam apenas módulos nativos do Node.
- Atualizações de código são revisadas no repositório e publicadas pelo GitHub Pages.
- A chave publishable é versionada em `js/cloud-config.js`; isso é esperado e seguro desde que a RLS esteja correta.

## 10. Configuração do Supabase

Checklist operacional:

1. Aplicar `supabase/schema.sql` (ou a migration correspondente) em projeto com acesso administrativo.
2. Confirmar RLS habilitada em `season_scores`.
3. Confirmar grants e policies conforme a seção 5.
4. Confirmar `security_invoker = true` na view.
5. Confirmar `mailer_autoconfirm` de acordo com a experiência desejada.
6. Confirmar que a publishable key em `js/cloud-config.js` pertence ao projeto correto.
7. Não usar `service_role` no cliente.
8. Revisar periodicamente entradas anômalas do ranking.
9. Executar `notify pgrst, 'reload schema'` após mudanças de schema.
10. Manter backups administrativos do projeto Supabase.

## 11. Resposta a incidentes

| Evento | Ação |
|---|---|
| XSS ou injeção | Corrigir a renderização, revisar usos de `innerHTML`, invalidar sessões e publicar nova versão |
| Token exposto | Revogar sessões no Supabase, orientar troca de senha, limpar `cloudAuth` |
| Placar adulterado | Identificar entradas anômalas, remover ou Zerar no banco, considerar RPC de validação |
| Schema aplicado incorretamente | Reaplicar policies/grants, validar `security_invoker`, recarregar schema |
| Backup vazado | Orientar o usuário; não há tokens no arquivo; avaliar exposição de dados de estudo |
| Dependência comprometida | Improvável no runtime; revisar scripts e histórico do repositório |

## 12. Limitações e riscos residuais

1. Placar não é autoritativo; a integridade competitiva depende da boa-fé.
2. Tokens ficam em IndexedDB sem criptografia.
3. Não há CSP.
4. Não há verificação de e-mail obrigatória no projeto atual.
5. Não há limite de tentativas implementado no cliente.
6. Não há exclusão de conta pelo app.
7. Dados locais podem ser perdidos por limpeza do navegador.
8. Aparelho compartilhado expõe o progresso local.
9. Cache e IndexedDB dependem das políticas do navegador.
10. O ranking é público por definição; apelidos podem ser reutilizados.

## 13. Critérios de aceitação

1. Nenhum texto de material é interpretado como HTML.
2. Nenhuma senha é armazenada.
3. O backup não contém `cloudAuth`, e-mail, tokens ou senha.
4. Importar backup não restaura sessão.
5. Um usuário autenticado só grava o próprio `user_id`.
6. `anon` não escreve na tabela de placar.
7. A view não expõe e-mail.
8. Logout apaga a sessão local e revoga o token quando possível.
9. Falha de rede não apaga progresso nem impede o estudo.
10. O cliente valida apelido, e-mail, senha, temporada e placar antes de enviar.
11. Nenhum segredo administrativo (`service_role`) está no repositório.
12. O app informa que apelido, nível e moedas são públicos e que o e-mail não aparece.
13. Nenhum dado de estudo ou recompensa de uma conta é exibido para outra conta ou para o visitante.
14. Exportação, importação e exclusão de progresso afetam apenas o escopo ativo e preservam as demais contas.
