# 09 — Testes e qualidade

O XLearn não possui suíte de testes versionada nem dependências de teste no repositório. A validação combina verificações estáticas, testes unitários de módulos puros e testes de integração com DOM e IndexedDB simulados, executados em ambiente temporário de desenvolvimento.

## 1. Comandos de validação

### 1.1 Obrigatórios

```bash
# Sintaxe de arquivos JavaScript
node --check js/app.js
node --check service-worker.js

# Sintaxe de todos os módulos e scripts
for file in js/*.js scripts/*.mjs service-worker.js; do
  node --check "$file" || exit 1
done

# Manifesto: 10 materiais, 1.250 questões, 0 erros
npm run check

# Espaços em branco e conflitos de diff
git diff --check
```

### 1.2 Geração

```bash
npm run build:manifest   # regenera questoes/manifest.json
npm run build:icons      # regenera os ícones PNG
```

`npm run check` não grava o manifesto. Ele deve terminar com código 0 e relatar:

```text
Materiais encontrados: 10
Questões carregadas:  1250
Materiais inválidos:  0
Avisos: 0 | Erros: 0
```

### 1.3 Servidor local

```bash
python3 -m http.server 8080
```

Abrir `http://localhost:8080/`. O service worker exige `localhost` ou HTTPS.

## 2. Infraestrutura de testes

Os testes de desenvolvimento usam:

| Recurso | Uso |
|---|---|
| **Node.js** | Execução dos módulos ES puros |
| **happy-dom** | DOM simulado, eventos, foco, `matchMedia`, `location.hash` |
| **fake-indexeddb** | IndexedDB em memória |
| **Cache API simulada** | Testes do service worker |

Local atual: `/tmp/opencode/xlearn-test/`, **fora do repositório e não versionado**. Contém `harness.mjs`, `package.json` e suítes `test-045.mjs` a `test-050b.mjs`.

Características:

- não há `node_modules` nem dependências de teste no projeto publicado;
- os testes não fazem parte do app shell;
- o harness importa os módulos reais de `js/`;
- o DOM é reiniciado entre cenários;
- o IndexedDB é recriado por teste;
- o relógio e o `fetch` podem ser injetados.

## 3. Estratégia por camada

| Camada | Abordagem | Exemplos |
|---|---|---|
| Módulos puros | Testes unitários em Node | `parser.js`, `srs.js`, `gamification.js`, `coins.js`, `season.js`, `timer.js`, `simulado.js`, `ranking.js`, `backup.js`, `storage.js` |
| Cliente remoto | `fetch` simulado, relógio controlado | `cloud.js` |
| Persistência | `fake-indexeddb` | `db.js` |
| Interface | `happy-dom` + IndexedDB em memória | `app.js` |
| Service worker | Cache API e rede simuladas | `service-worker.js` |
| PWA e HTML | Validação estrutural e HTTP | `index.html`, `manifest.webmanifest`, ícones |
| Acessibilidade | Inspeção de atributos, foco e contraste | Diálogos, alternativas, navegação |

## 4. Matriz de testes

### 4.1 Conteúdo e parser

| ID | Cenário | Tipo |
|---|---|---|
| CT-001 | Manifesto com 10 materiais válidos e 1.250 questões | Unitário |
| CT-002 | Correção por `id` nas 1.250 questões | Unitário |
| CT-003 | Alternativas únicas e gabarito presente em todas as questões | Unitário |
| CT-004 | Frontmatter ausente gera aviso e deriva metadados | Unitário |
| CT-005 | JSON inválido isola a questão e mantém as demais | Unitário |
| CT-006 | ID de questão duplicado é rejeitado | Unitário |
| CT-007 | Questão sem gabarito é rejeitada | Unitário |
| CT-008 | `answer_key` prevalece sobre `is_correct` | Unitário |
| CT-009 | `answer_key` inválido é rejeitado | Unitário |
| CT-010 | Material inválido não impede os válidos | Unitário/DOM |
| CT-011 | Campos legados não aparecem no feedback | Unitário/DOM |
| CT-012 | Embaralhamento determinístico preserva IDs e gabarito | Unitário |

### 4.2 SRS

| ID | Cenário |
|---|---|
| SRS-001 | Acerto sobe nível e agenda 1/3/7/14/30 dias |
| SRS-002 | Erro reduz nível e agenda 10 minutos |
| SRS-003 | SRS desativado não cria vencimento |
| SRS-004 | Intervalo manual substitui o automático |
| SRS-005 | Retorno ao automático limpa a marcação manual |
| SRS-006 | Fila separa vencidas/futuras e prioriza atrasadas |

### 4.3 Gamificação, moedas e temporada

| ID | Cenário |
|---|---|
| GAM-001 | XP de participação no erro |
| GAM-002 | Bônus por dificuldade 2/4/6 |
| GAM-003 | Bônus de sessão 25/38/75 |
| GAM-004 | Faixas de nível |
| GAM-005 | Conquistas desbloqueiam uma única vez |
| GAM-006 | Meta diária e sequência com datas controladas |
| COIN-001 | 2 moedas por acerto |
| COIN-002 | 10 + 5 por sessão perfeita |
| COIN-003 | 15 moedas de meta uma vez por dia |
| COIN-004 | Coleta de conquista idempotente |
| COIN-005 | Dados corrompidos normalizados |
| SEA-001 | Estágios nos limites 0/299/300/599/600/999/1000/1499/1500 |
| SEA-002 | Dias ativos 0/3/6/9/12 |
| SEA-003 | Temporada congelada após `endsAt` |
| SEA-004 | Nova temporada reinicia o ledger |

### 4.4 Cronômetro, simulados e ranking

| ID | Cenário |
|---|---|
| TIM-001 | Desligado por padrão; 5–120 min; padrão 30 |
| TIM-002 | Pausa ao ocultar a aba e durante o feedback |
| TIM-003 | Retomada com novo `deadlineAt` |
| TIM-004 | Expiração encerra a sessão e marca não respondidas |
| TIM-005 | Apenas `mode: "material"` usa cronômetro |
| SIM-001 | Chave composta `materialId::questionId` |
| SIM-002 | Histórico idempotente e ordenado |
| SIM-003 | Simulado não altera progresso, tentativas, SRS, XP, moedas, conquistas ou ranking |
| SIM-004 | Resumo por assunto |
| RANK-001 | Wilson com zero, poucos e muitos acertos |
| RANK-002 | Itens sem respostas excluídos |
| RANK-003 | Ordenação por prova e agregação por disciplina |

### 4.5 Persistência, backup e cache

| ID | Cenário |
|---|---|
| DB-001 | Transação única grava sessão, progresso, tentativa e meta |
| DB-002 | Dupla resposta não duplica registro |
| DB-003 | Retomada restaura a questão e a ordem |
| DB-004 | Pagamentos idempotentes por sessão/dia/conquista |
| DB-005 | Escopos `guest`, `u:A` e `u:B` não compartilham progresso, sessões, tentativas, estatísticas, temporada, gamificação, carteira nem simulados |
| DB-006 | Voltar a uma conta restaura exatamente as recompensas coletadas e pendentes |
| DB-007 | Migração única dos dados legados para o primeiro escopo ativado |
| DB-008 | Sessões e tentativas recebem IDs/chaves com prefixo de escopo |
| BKP-001 | Envelope, versão e resumo |
| BKP-002 | Rejeita formato, versão e chave inválidos |
| BKP-003 | Exportação exclui `cloudAuth`, `cloudProfile`, `cloudRank` e `storageScopedOnce` |
| BKP-004 | Exportação contém apenas o escopo ativo e chaves canônicas |
| BKP-005 | Importação substitui somente o escopo ativo e preserva outras contas |
| BKP-006 | Importação não restaura sessão |
| BKP-007 | “Apagar progresso” preserva configurações e demais contas |
| STO-001 | Remove apenas caches `xlearn`, `xlearn-*`, `xlearn:*` |
| STO-002 | Sem Cache API retorna `supported: false` |
| STO-003 | Limpar cache não apaga IndexedDB |

### 4.6 Conta e nuvem

| ID | Cenário |
|---|---|
| CLOUD-001 | Cadastro valida apelido, e-mail e senha |
| CLOUD-002 | Login não cria conta automaticamente |
| CLOUD-003 | E-mail existente orienta usar “Entrar” |
| CLOUD-004 | Credenciais inválidas não geram sessão |
| CLOUD-005 | Sessão normaliza tokens, validade e usuário |
| CLOUD-006 | Refresh ocorre com margem de 60 s |
| CLOUD-007 | Falha de rede mantém sessão e estado offline |
| CLOUD-008 | Falha de credenciais limpa sessão |
| CLOUD-009 | Placar usa `user_id` da sessão |
| CLOUD-010 | Divergência de identidade gera `identity_mismatch` |
| CLOUD-011 | Ranking limita a 5 e normaliza posição |
| CLOUD-012 | Erros remotos são traduzidos para `pt-BR` |
| CLOUD-013 | Logout revoga token e limpa `cloudAuth` |

### 4.7 Interface e acessibilidade

| ID | Cenário |
|---|---|
| UI-001 | Rotas válidas; hash inválido resolve para início |
| UI-002 | Ordem dos cards para logado |
| UI-003 | Visitante vê apenas painel de estudos e ranking |
| UI-004 | Gate em `config`, `progresso`, `simulado`, `revisoes` |
| UI-005 | Visitante recebe 1 questão e “1 / 1” |
| UI-006 | Feedback/avanço de visitante abrem cadastro |
| UI-007 | Resumo de visitante não revela gabarito |
| UI-008 | Modal de conta com abas acessíveis |
| UI-009 | Feedback com foco preso e retorno de foco |
| UI-010 | Cronômetro pausa ao abrir o feedback |
| UI-011 | “Apagar progresso” preserva `scrollY` e foca o título |
| UI-012 | Navegação por teclado e `Escape` |
| UI-013 | Link “Pular para o conteúdo” foca `#main` |
| UI-014 | Alternativas anunciam estado correto/incorreto |
| UI-015 | Contraste ≥ 4,5:1 nos temas escuro e claro |
| UI-016 | Alvos de toque ≥ 44 px |
| UI-017 | Layout sem rolagem horizontal a partir de 320 px |
| UI-018 | `prefers-reduced-motion` desativa animações |

### 4.8 PWA e offline

| ID | Cenário |
|---|---|
| PWA-001 | Manifesto com nome, idioma, escopo e cores |
| PWA-002 | Ícones 192/512 e maskable existentes |
| PWA-003 | Shell pré-cacheia 31 caminhos existentes |
| PWA-004 | Instalação não inclui materiais `.md` |
| PWA-005 | Navegação offline devolve `index.html` |
| PWA-006 | Material acessado abre offline |
| PWA-007 | Material nunca acessado responde 503 |
| PWA-008 | POST e outra origem são ignorados |
| PWA-009 | Ativação remove caches antigos e preserva outros apps |
| PWA-010 | Nova versão mostra toast sem recarregar |
| PWA-011 | Registro com URL e escopo relativos |

## 5. Regressões recentes

| Suíte | Foco | Resultado |
|---|---|---|
| `test-045` | Login/cadastro em abas, sem criação automática | 21/21 |
| `test-046` | Rolagem e foco ao apagar progresso | 6/6 |
| `test-047` | Restrições do visitante | 21/21 |
| `test-047b` | Liberação após conta e sessão antiga | 10/10 |
| `test-048` | Remoção do card Visão rápida | 7/7 |
| `test-049a` | Visão rápida oculta para visitante | 3/3 |
| `test-049b` | Ordem dos quatro cards para logado | 5/5 |
| `test-050a` | Recompensas ocultas para visitante | 4/4 |
| `test-050b` | Quatro cards com conta e recompensa pendente | 4/4 |
| `test-051a` | Isolamento por escopo, backup canônico, importação e limpeza | 1 suíte |
| `test-051b` | Migração única e IDs escopados | 1 suíte |
| `test-051c` | Login/logout real com recompensas de duas contas | 1 suíte |
| `test-052` | Coleta atualiza a home no lugar, sem recriar `#main` | 1 suíte |
| `test-053` | Cascata ampliada, queda do topo e som sincronizado | 1 suíte |
| `test-054` | Exclusão local e remota, fila offline e retry sem recriar placar | 4 suítes |
| `test-055` | Cascata contínua, fade aleatório e som repetido | 1 suíte |
| `test-056` | Apelido disponível/em uso no blur, bloqueio e tolerância a erro | 1 suíte |

Essas suítes também confirmaram:

- `node --check js/app.js`;
- `node --check js/sound.js`;
- `node --check js/db.js`;
- `node --check service-worker.js`;
- `npm run check` com 10 materiais e 1.250 questões;
- `git diff --check`;
- service worker `v31`.

A suíte do REQ-051 cobriu `guest`, `u:A` e `u:B` com `fake-indexeddb`: recompensas, progresso, sessões, tentativas, estatísticas, temporada e simulados ficaram isolados; a migração legada ocorreu uma única vez e só no primeiro escopo; o backup do escopo ativo saiu com chaves e IDs canônicos, sem dados privados; a importação e a exclusão não tocaram nas outras contas. O teste DOM com `happy-dom` percorreu o login real de Alice, a coleta de “Primeiro passo”, o logout, o login de Bruno (sem saldo, coleta ou pendências da Alice) e o retorno à Alice com o saldo preservado e apenas “Primeiro acerto” pendente.

A suíte do REQ-052 reutilizou o fluxo DOM de login/logout e verificou que a coleta mantém a mesma instância de `#main` e do hero, atualiza a visão rápida com o novo saldo, remove o card quando não há mais pendências e preserva o saldo e as coletas ao trocar de conta.

A suíte do REQ-053 confirmou que a cascata gera pelo menos 28 moedas com posição, tamanho e duração próprios, espalhadas pela largura da tela. A inspeção do CSS confirmou a camada fixa no topo com `z-index: 35` (abaixo da barra superior), a queda até `33vh` e a opacidade de `1` no início para `0` no fim. O som da chuva é agendado pelo mesmo intervalo visível calculado, e a coleta mantém o som curto quando a animação está desativada.

A suíte do REQ-054 cobriu IndexedDB com `fake-indexeddb` e DOM com `happy-dom`: `clearProgressData` apagou progresso, sessões, tentativas, estatísticas, temporada, gamificação, carteira, simulados e simulado ativo do escopo ativo, preservou `meta/settings` e as demais contas, atualizou a tela e voltou para `#/inicio`; com conta conectada, o `DELETE` em `season_scores` foi chamado para o `user_id` e a temporada corretos. Sem rede, a intenção ficou em `meta/cloudPendingDelete` e foi repetida no evento `online`, sem que a sincronização automática recriasse o placar. A migration `20261110000000_score_delete.sql` adiciona a política e o `GRANT DELETE` necessários para bancos existentes.

A suíte do REQ-055 confirmou que coletas consecutivas reutilizam a mesma camada `.coin-cascade`, acrescentam moedas sem criar uma segunda camada, limitam o total a 140 e sorteiam `--fall`, `--fade`, `--distance`, `--delay`, `--drift`, `--size` e `--x` por moeda. A inspeção do CSS confirmou o fade em altura aleatória antes do fim da queda, e o som foi reagendado a cada onda.

A suíte do REQ-056 abriu o cadastro com `happy-dom`, digitou um apelido e confirmou que a RPC `nickname_available` foi chamada com `{ candidate }` após o `blur`. A resposta `true` exibiu o status “está disponível” sem bloquear o envio; a resposta `false` exibiu “já está em uso”, marcou `aria-invalid="true"` e desabilitou o botão, e o envio do formulário não chamou `/auth/v1/signup`. Uma falha de rede exibiu o aviso e manteve o cadastro permitido. Campo vazio não chamou a RPC, e a troca de aba limpou o status.

## 6. Campanha final registrada (REQ-027)

A campanha final executou 12 suítes temporárias, todas aprovadas:

1. **Unitária de conteúdo:** manifesto, parser, correção por ID, alternativas estáveis, material vazio, JSON inválido, ID duplicado, questão sem gabarito e manifesto inválido.
2. **SRS e gamificação:** acerto/erro, desativação, intervalo manual, fila; XP, níveis, meta, sequência, conquistas e bônus sem duplicação.
3. **Economia e ranking:** moedas, meta, coleta, estágios, Wilson e agregação.
4. **Cronômetro:** criação, pausa, retomada, expiração e acessibilidade.
5. **Simulados:** resumo por assunto, histórico idempotente e agregação.
6. **Backup:** envelope, versão, rejeição de chaves duplicadas.
7. **Configurações:** normalização de faixas, intervalos e volume.
8. **Cache:** limpeza seletiva sem afetar outros apps.
9. **DOM/IndexedDB — estudo:** persistência, tema, fonte, animações, som, SRS, cronômetro, meta, ordem, feedback, revisão manual, estatísticas, XP e fila.
10. **DOM/IndexedDB — expiração:** encerramento automático, `expiredAt`, resumo e ausência de respostas inventadas.
11. **DOM/IndexedDB — backup e exclusão:** exportação, importação, cancelamento, confirmação e preservação de configurações.
12. **Estática/PWA e regressões:** HTML, manifesto, ícones, CSS responsivo, contraste, alvos de toque, shell, simulados, sessão normal, conquistas e service worker.

### 6.1 Defeito corrigido na campanha

`renderStudy` usava `...renderMaterialGrid()`, mas a função devolve um único elemento. A rota `#/estudar` não renderizava. A chamada passou a inserir o elemento diretamente e a rota foi reverificada.

## 7. Testes manuais recomendados

### 7.1 Fluxo principal

1. Abrir o app publicado em uma janela anônima.
2. Confirmar home de visitante com dois cards.
3. Abrir Provas, iniciar um material, responder à primeira questão.
4. Confirmar que o feedback abre o cadastro.
5. Criar uma conta de teste; no cadastro, sair do campo Apelido e conferir o aviso de disponibilidade. Tentar um apelido já usado e confirmar que o envio fica bloqueado; com a rede desligada, confirmar que o aviso aparece e o cadastro continua permitido.
6. Responder uma questão, ver o feedback e avançar.
7. Concluir uma sessão e conferir o resumo.
8. Voltar à home e conferir a ordem dos quatro cards.
9. Coletar uma conquista pendente e confirmar que os cards de recompensas, visão rápida e ranking são atualizados sem recarregar a página, preservando a rolagem e o foco; conferir a cascata de moedas vinda do topo, atrás da barra superior, com o som acompanhando o tempo visível, o desaparecimento em alturas aleatórias e a continuidade ao coletar outra recompensa em seguida.
10. Em Configurações, confirmar “Apagar progresso” e verificar que os dados do escopo ativo somem, a tela volta ao início e a pontuação da conta desaparece do ranking; repetir sem rede e conferir a exclusão após reconectar.
11. Abrir Progresso, Revisões, Simulado e Configurações.
12. Sair da conta e confirmar o retorno ao modo visitante.

### 7.2 Offline

1. Com internet, abrir o app e dois materiais.
2. Desligar a rede.
3. Recarregar; o shell deve abrir.
4. Abrir um material já visitado e responder.
5. Tentar abrir um material nunca visitado; deve haver erro claro.
6. Reconectar e confirmar o toast e o reenvio do placar.

### 7.3 Atualização

1. Publicar uma alteração com `VERSION` incrementada.
2. Abrir o app e aguardar o toast de nova versão.
3. Recarregar e confirmar que a versão nova está ativa.
4. Confirmar que caches antigos foram removidos.

### 7.4 Acessibilidade

1. Navegar apenas com `Tab`/`Shift+Tab`.
2. Acionar o link “Pular para o conteúdo”.
3. Abrir a modal de conta e percorrer as abas com setas.
4. Abrir o feedback e confirmar o ciclo de foco.
5. Fechar com `Escape` e confirmar o retorno do foco.
6. Ativar `prefers-reduced-motion` no sistema e confirmar a ausência de animações.
7. Testar com leitor de tela: título, alternativas, status e cronômetro.

### 7.5 Conta e ranking

1. Criar conta com apelido, e-mail e senha.
2. Conferir apelido na topbar e botão de sair.
3. Responder questões e confirmar UPSERT em `season_scores`.
4. Conferir top 5 e posição própria.
5. Sair e confirmar que o ranking continua visível para visitante.
6. Confirmar que e-mail e tokens não aparecem no ranking nem no backup.

## 8. Definition of Done

Um requisito só é considerado concluído quando:

1. O comportamento foi implementado no código de produção.
2. `PROJECT_STATUS.md` foi atualizado **antes do commit**, com requisito, decisão, histórico e evidência de teste.
3. As specs temáticas afetadas foram atualizadas no mesmo commit.
4. Se houve mudança no app shell, `VERSION` em `service-worker.js` foi incrementada.
5. `node --check` passou em todos os arquivos alterados.
6. `npm run check` passou com 10 materiais e 1.250 questões.
7. As regressões relacionadas foram executadas sem falha.
8. A acessibilidade e a responsividade foram verificadas quando a interface mudou.
9. O comportamento offline foi considerado quando o shell ou o carregamento mudou.
10. A documentação de uso (`README.md`) foi atualizada quando o comportamento visível mudou.
11. O commit foi feito com mensagem descritiva e enviado ao remoto.
12. O hash do commit foi registrado em `PROJECT_STATUS.md`.

## 9. Convenções de commit

| Prefixo | Uso |
|---|---|
| `feat(...)` | Novo requisito ou funcionalidade |
| `fix(...)` | Correção de defeito |
| `docs(project)` | Registro de hash e atualização do histórico |
| `docs(specs)` | Documentação normativa em `specs/` |
| `chore(...)` | Manutenção sem mudança funcional |

Exemplos recentes:

```text
feat(ui): restringe as recompensas pendentes à conta (REQ-050)
docs(project): registra hash do REQ-050 no histórico
```

## 10. Qualidade de código

| Regra | Verificação |
|---|---|
| JavaScript puro (ES Modules) | Nenhum framework ou dependência de runtime |
| Módulos puros sem DOM/DB | Revisão de imports e testes em Node |
| `app.js` não abre IndexedDB diretamente | Revisão de imports e chamadas |
| Texto dinâmico sem HTML | Busca por `innerHTML` restrita a `ICONS` |
| Sem segredos administrativos | Busca por `service_role`, chaves privadas e tokens |
| Caminhos relativos | Teste em raiz e subdiretório |
| `pt-BR` | Revisão de textos e `Intl` |
| Acessibilidade | Checklist da seção 7.4 |
| Offline | Checklist da seção 7.2 |
| Integridade | Testes de idempotência e transação |

### 10.1 Comandos de auditoria rápida

```bash
# Usos de innerHTML
grep -R "innerHTML" js/ index.html

# Dependências externas em runtime
grep -R "https\?://" js/ index.html | grep -v "cloud-config.js"

# Segredos administrativos
grep -R "service_role\|SUPABASE_SERVICE" . --exclude-dir=.git

# Tamanho e estrutura
wc -l js/*.js css/styles.css
```

## 11. Limitações da estratégia atual

1. Não há suíte de testes versionada nem execução automática em CI.
2. Os testes de desenvolvimento vivem em `/tmp` e podem ser perdidos.
3. Não há testes end-to-end em navegador real.
4. Não há testes de regressão visual.
5. Não há cobertura de código medida.
6. O service worker é testado com Cache API simulada, não em dispositivo real.
7. O ranking remoto depende de validação manual no Supabase.
8. A verificação de acessibilidade é estrutural; não substitui auditoria com leitores de tela reais.

### 11.1 Próximos passos sugeridos

- versionar o harness e as suítes em `tests/`, sem incluí-las no app shell;
- adicionar `npm test` com Node e dependências de desenvolvimento;
- criar smoke test de produção com Playwright ou equivalente;
- executar auditoria Lighthouse de PWA e acessibilidade;
- adicionar verificação automática de links e do manifesto no CI;
- manter um checklist de release para a Temporada 2.

## 12. Critérios de aceitação de qualidade

1. `npm run check` valida 10 materiais e 1.250 questões sem erro.
2. `node --check` passa em todos os arquivos JavaScript.
3. Nenhuma dependência de runtime é adicionada.
4. Nenhum texto de material é interpretado como HTML.
5. Nenhuma resposta ou recompensa é duplicada.
6. Visitante e conta veem exatamente os cards e rotas previstos.
7. O app funciona offline para shell e materiais já acessados.
8. O ranking não expõe e-mail nem tokens.
9. A interface é navegável por teclado e legível a partir de 320 px.
10. `PROJECT_STATUS.md` e as specs afetadas são atualizados antes do commit.
11. O service worker é versionado a cada mudança de shell.
12. O commit é enviado ao remoto e o hash é registrado.
