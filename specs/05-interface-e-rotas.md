# 05 — Interface e rotas

Este documento descreve a navegação, as telas, os estados de interface, as restrições do visitante, os diálogos e os requisitos de acessibilidade do XLearn. O comportamento vale para o estado atual do código (`js/app.js`, `css/styles.css` e `index.html`).

## 1. Modelo de navegação

O XLearn é uma SPA com rotas em hash. A URL não é reescrita pelo servidor, o que permite publicar em GitHub Pages na raiz ou em subdiretório.

| Rota | Tela | Conta | Renderizador |
|---|---|---|---|
| `#/inicio` | Início | Livre | `renderHome()` |
| `#/estudar` | Provas disponíveis | Livre | `renderStudy()` |
| `#/sessao` | Questão atual | Livre¹ | `renderQuiz()` |
| `#/resumo` | Resumo da sessão | Livre¹ | `renderSummary()` |
| `#/simulado` | Simulado por assunto | **Exige conta** | `renderSimulado()` |
| `#/revisoes` | Revisões vencidas e futuras | **Exige conta** | `renderReviews()` |
| `#/progresso` | Estatísticas e progresso | **Exige conta** | `renderProgress()` |
| `#/config` | Configurações | **Exige conta** | `renderSettings()` |

¹ A rota é acessível ao visitante apenas no fluxo de uma questão por prova. O aprofundamento exige conta (ver seção 4).

### 1.1 Normalização

- `currentRoute()` remove `#/` ou `#`, apara espaços e valida contra `ROUTES`.
- Hash vazio, desconhecido ou inválido resolve para `inicio`.
- `navigate(rota)` atualiza `location.hash`; se a rota já for a atual, re-renderiza com foco.
- `hashchange` fecha a modal de feedback, re-renderiza com foco e atualiza o ranking quando a rota é `inicio`.
- Rotas não são protegidas no servidor: a restrição é aplicada na renderização e nos manipuladores.

### 1.2 Conjunto de rotas restritas

```js
const ROUTES = new Set([
  "inicio", "estudar", "simulado", "sessao",
  "resumo", "revisoes", "progresso", "config"
]);

const ACCOUNT_ROUTES = new Set(["config", "progresso", "simulado", "revisoes"]);
```

## 2. Estrutura visual

### 2.1 Shell

```text
┌──────────────────────────────────────────────────────────┐
│ topbar fixa                                              │
│ marca XLearn · status · som · sair · configurações        │
├──────────────────────────────────────────────────────────┤
│ faixa offline (quando aplicável)                         │
├──────────────────────────────────────────────────────────┤
│ <main id="main" class="view" tabindex="-1">              │
│   conteúdo da rota                                       │
├──────────────────────────────────────────────────────────┤
│ navegação inferior fixa (mobile)                         │
└──────────────────────────────────────────────────────────┘
```

- `index.html` contém o link **Pular para o conteúdo**, o contêiner `#app`, o estado de boot e o `noscript`.
- `js/app.js` reconstrói o shell no boot e substitui o conteúdo de `#main` a cada renderização.
- A topbar tem altura controlada por `--topbar-height: 64px` e permanece visível.
- A navegação inferior é fixa; em telas maiores é centralizada com largura máxima.

### 2.2 Topbar

| Elemento | Comportamento |
|---|---|
| Marca | Leva a `#/inicio`; subtítulo “aprender praticando” é ocultado abaixo de 380 px |
| Status de conexão | `Visitante`, `Online` ou `Offline`, com `role="status"`, `aria-live="polite"` e rótulo ARIA próprio |
| Som | Alterna efeitos sonoros, com `aria-label` “Ativar sons” / “Desativar sons” |
| Sair | Visível apenas com conta; aciona `signOutCloud` |
| Configurações | Atalho para `#/config`; visitante é levado ao gate de conta |

O status combina conectividade e conta: com sessão e rede, mostra `Online`; com sessão e sem rede, `Offline`; sem sessão, `Visitante`. O estado online/offline é derivado de `navigator.onLine`.

### 2.3 Navegação inferior

Itens base:

1. Início
2. Provas
3. Revisões (com selo de vencidas)
4. Simulado
5. Progresso
6. Sessão (somente se houver sessão ativa não concluída)

Os itens de **Revisões**, **Simulado** e **Progresso** são filtrados para visitantes, assim como **Configurações** não aparece como item. O item ativo recebe `aria-current="page"`. O selo de revisões vencidas ajusta o `aria-label` para, por exemplo, “Revisões (3 vencidas)”.

## 3. Home (`#/inicio`)

### 3.1 Usuário com conta

A ordem dos blocos é fixa e verificada por teste:

| Ordem | Bloco | Função |
|---|---|---|
| 1 | **Seu painel de estudos** | Hero com chamada para escolher prova, criar simulado e continuar sessão ativa |
| 2 | **Recompensas pendentes** | Conquistas desbloqueadas e ainda não coletadas, com botão de coleta |
| 3 | **Visão rápida** | Estágio, moedas, meta/sequência e conquistas |
| 4 | **Ranking da temporada** | Top 5, posição própria, cache e estados de erro |

Depois dos quatro cards, a home pode exibir, conforme o estado:

- banner de sessão normal em andamento;
- banner de simulado em andamento;
- banner de revisões vencidas;
- aviso de materiais inválidos no manifesto.

### 3.2 Visitante

O visitante vê somente:

1. **Seu painel de estudos** (sem o botão “Criar simulado”);
2. **Ranking da temporada**;
3. banners de sessão ativa, se houver;
4. aviso de manifesto inválido, se aplicável.

**Recompensas pendentes** e **Visão rápida** são omitidos por `hasAccount()`. O hero mantém as ações “Escolher prova” e, se houver sessão ativa, “Continuar sessão”.

O visitante usa um escopo de estudo próprio (`guest`). Ao entrar em uma conta, o app troca para `u:<userId>` e recarrega os dados daquele usuário; ao sair, volta ao escopo `guest`. Progresso, sessões, tentativas, estatísticas, temporada, gamificação, carteira, simulados, recompensas pendentes e coletas de uma conta nunca são exibidos em outra conta nem no modo visitante.

### 3.3 Seu painel de estudos

- `section.hero`, título `h1` “Aprenda praticando, no seu ritmo.”
- Texto de apoio sobre questões reais, alternativas embaralhadas e dados locais.
- “Escolher prova” sempre presente.
- “Criar simulado” apenas com conta.
- “Continuar sessão” quando existe sessão não concluída.
- A seção usa `aria-labelledby="hero-title"`.

### 3.4 Recompensas pendentes

- Renderizada por `renderHomeAchievements()`.
- Lista conquistas com desbloqueio e sem coleta em `wallet.claimedAchievements`.
- Cada cartão é um botão acessível com rótulo que informa a recompensa e o nome da conquista.
- A coleta é manual, idempotente e atualiza a carteira.
- A seção desaparece quando não há recompensa pendente.
- A cascata de moedas usa uma única camada `.coin-cascade`, reaproveitada por coletas consecutivas, com até 140 moedas espalhadas pela largura da tela, tamanhos, durações, atrasos e desvios variados. A camada fica fixa no topo, atrás da barra superior (`z-index: 35`), e cada moeda cai de `-32px` até `33vh`, começando opaca e desaparecendo em uma altura aleatória da queda (`--fall`), com o fade terminando antes do fim do percurso. O som da chuva de moedas dura todo o intervalo visível calculado e é repetido a cada nova coleta.
- A coleta atualiza os cards afetados no próprio lugar, sem recriar a página: `[data-role="home-achievements"]` é substituído ou removido, `[data-role="quick-panel"]` é substituído com o saldo/temporada recalculados e `[data-role="cloud-rank"]` é substituído quando o ranking muda. A posição de rolagem, o foco e a cascata de moedas são preservados, e a atualização não espera o término da animação.

### 3.5 Visão rápida

Quatro itens: estágio da temporada, moedas, meta diária/sequência e conquistas. Cada item tem valor e rótulo; o conjunto abre `#/progresso`. Para conta, exibe o atalho “Ver progresso”.

### 3.6 Ranking da temporada

- Título associado ao card; top 5 em lista com posição, apelido, estágio e moedas.
- Posição própria aparece separadamente quando fora do top 5.
- Estados: carregando, offline, erro, não configurado, visitante e conta sem placar.
- O rodapé informa que apelido, nível e moedas são públicos e que o e-mail nunca aparece.
- O botão de atualização tem rótulo “Atualizar ranking” e fica desabilitado durante a consulta.
- O cache fica em `meta/cloudRank` e permite exibir o último resultado offline.

## 4. Restrições do visitante

O visitante é identificado por `!hasAccount()`, isto é, ausência de sessão em `state.cloud.session`.

| Recurso | Visitante | Conta |
|---|---|---|
| Home | Painel de estudos + ranking | Quatro cards na ordem definida |
| Provas | Sim | Sim |
| Iniciar prova | Sim, com 1 questão | Sim, com tamanho configurado |
| Responder 1ª questão | Sim | Sim |
| Ver feedback/gabarito | **Não** — abre cadastro | Sim |
| Avançar para a 2ª questão | **Não** — abre cadastro | Sim |
| Resumo | Parcial, sem gabarito/explicação | Completo |
| Simulado | **Não** — gate | Sim |
| Revisões | **Não** — gate | Sim |
| Progresso | **Não** — gate | Sim |
| Configurações | **Não** — gate | Sim |
| Ranking | Consulta pública | Consulta + posição própria |

### 4.1 Entrada na sessão

- `startSession` abre a modal de conta quando o usuário não tem sessão, está online e o modo não é simulado.
- A modal oferece **Entrar**, **Criar conta** e **Continuar offline**.
- “Continuar offline” inicia a sessão de visitante; o estudo é salvo localmente.
- Offline, a sessão começa diretamente com aviso de que a conta pode ser criada depois.

### 4.2 Sessão de visitante

- O pool é reduzido à primeira questão do material.
- `questionIds` tem exatamente um item.
- O feedback e o avanço chamam `requestAccountFor(...)` com motivo contextual.
- O resumo mostra o aviso “Modo visitante”, sem revelar gabarito nem explicações.

### 4.3 Gate de conta

`renderAccountGate(rota)` produz um card com:

- `data-role="account-gate"`;
- título “Crie uma conta para acessar …”;
- explicação do acesso limitado;
- botões **Criar conta**, **Entrar** e **Voltar ao início**.

O gate cobre `config`, `progresso`, `simulado` e `revisoes` inclusive quando a rota é acessada diretamente pela URL.

### 4.4 Troca de escopo

- No boot, o app carrega a sessão Supabase e ativa `u:<userId>` quando existe conta ou `guest` quando não existe.
- No login, a sessão é persistida e `switchStudyScope(session.userId)` ativa o escopo da conta antes de recarregar sessão ativa, progresso, temporada, gamificação, carteira, simulados e home.
- No logout, o placar é sincronizado, o token é revogado quando possível, `cloudAuth` é apagado e o escopo volta para `guest`.
- Se as credenciais expirarem, o app limpa a sessão e volta ao escopo `guest`.
- A troca não apaga os dados da conta anterior; eles permanecem no IndexedDB e voltam quando a mesma conta entra novamente.
- A sincronização de placar não envia zero em uma conta recém-conectada sem atividade, para não apagar a pontuação remota.

## 5. Provas (`#/estudar`)

- Cabeçalho “Provas disponíveis” com contagem de materiais e questões.
- Botão “Recarregar manifesto” com rótulo acessível; força `loadCatalog({ force: true })`.
- Grade de cartões com disciplina, banca, assunto, quantidade de questões e ação de estudo.
- Em telas ≥ 720 px a grade tem duas colunas.
- Estados de carregamento usam esqueletos; erro global leva à home; catálogo vazio mostra estado vazio com orientação.

## 6. Sessão (`#/sessao`)

### 6.1 Cabeçalho fixo da prova

- Permanece sob a topbar (`top: var(--topbar-height)`), com `scroll-margin-top` equivalente.
- Mostra título do material, contador de questões e cronômetro quando habilitado.
- O progresso é exibido em barra e em texto acessível.
- O botão de voltar retorna ao início ou aos simulados, com rótulo ARIA correspondente.

### 6.2 Questão

- `section.question-card` com `aria-labelledby="question-text"`.
- Enunciado em `#question-text`; ao navegar, recebe foco com `preventScroll`.
- Metadados: disciplina, assunto, dificuldade e origem quando existirem.
- Alternativas em `div.alternatives` com `role="group"` e `aria-label="Alternativas"`.
- A ordem visual vem de `session.orders[questionId]`; a correção usa `selectedId === question.correctId`.
- Durante a resposta, a ordem é estável. Após responder, a alternativa correta e a marcada recebem classes e texto de status para leitores de tela.
- O botão de confirmação impede dupla resposta; depois de responder, a interface oferece “Ver feedback”.
- Em sessão de visitante, o botão de feedback abre o cadastro em vez da modal de feedback.

### 6.3 Cronômetro

- Só aparece em `mode: "material"` com `settings.timerEnabled`.
- Faixa configurável de 5 a 120 minutos; padrão 30.
- Exibe tempo restante e rótulo ARIA atualizado.
- Pausa quando a aba fica oculta e durante a modal de feedback.
- Ao zerar, encerra a sessão e leva ao resumo com “Tempo esgotado”.
- Não é usado em revisão, correção ou simulado.

## 7. Feedback em modal

- Aberta por “Ver feedback” após uma resposta; exige conta.
- `role="dialog"`, `aria-modal="true"`, `tabindex="-1"`, título e descrição associados.
- Foco inicial no diálogo; ciclo de foco por `Tab`/`Shift+Tab`; fechamento por `Escape`, botão “Fechar feedback” e clique no fundo.
- Ao fechar, o foco retorna ao botão de origem.
- `#main`, topbar e navegação inferior ficam `inert`; o corpo bloqueia rolagem.
- O conteúdo mantém a classe `feedback--correct` ou `feedback--wrong` e as ações de repetição espaçada.
- Ao abrir, o cronômetro é pausado; ao fechar, é retomado apenas se estava correndo, a aba está visível e a sessão não terminou.
- Toasts permanecem acima da modal; em telas pequenas o diálogo ocupa a tela.

## 8. Resumo (`#/resumo`)

- Sem sessão: estado vazio com link para escolher prova.
- Com sessão: anel de aproveitamento, título, material, acertos, total e duração.
- Aviso de tempo esgotado quando o cronômetro zerou.
- Aviso de modo visitante sem gabarito.
- Estatísticas de acertos, erros, não respondidas e total.
- Revisão de erros e ações de nova sessão/retorno.
- Simulados usam `renderSimuladoSummary()`, com desempenho por assunto e histórico separado.

## 9. Revisões (`#/revisoes`)

- Exige conta.
- Cabeçalho com contagens de vencidas e futuras e botão “Atualizar fila de revisões”.
- Lista agrupada por material, com data de vencimento e atraso.
- Ação “Estudar agora” inicia sessão com as questões vencidas, limitada por `sessionSize`.
- Estado vazio orienta a responder questões para gerar revisões.

## 10. Simulado (`#/simulado`)

- Exige conta.
- Construtor com quantidade por assunto, limites por disponibilidade, atalhos de preenchimento e total em `aria-live="polite"`.
- Botão de início desabilitado quando o total é zero.
- Banner de simulado em andamento com ação de continuar.
- Histórico recente com total, acertos, erros e duração; lista rotulada.
- Não usa cronômetro e não altera dados de estudo normal.

## 11. Progresso (`#/progresso`)

- Exige conta.
- Totais de estudo, precisão, sequência, meta e temporada.
- Personagem no estágio atual, com moedas e dias ativos.
- Ranking local por prova/disciplina, explicitamente identificado como local.
- Lista de conquistas com estado bloqueado/desbloqueado/coletado.
- Tentativas recentes.
- Botão “Atualizar estatísticas” com rótulo acessível.

## 12. Configurações (`#/config`)

- Exige conta.
- Seções: sessão de estudo, cronômetro, repetição espaçada, aparência, som, dados e armazenamento.
- Campos principais: questões por sessão (1–100), ordem (`shuffle`/`sequential`), meta diária (1–500), cronômetro e minutos (5–120), intervalos SRS, tema, tamanho da fonte (14–22 px), animações, explicações, som e volume.
- Conta: apelido, e-mail mascarado/identificação, estado de sincronização e saída.
- Dados: exportar backup, importar backup com confirmação, apagar progresso com confirmação.
- Armazenamento: limpar caches do app sem apagar o IndexedDB.
- “Apagar progresso” preserva a rolagem e foca `#reset-confirm-title` com `preventScroll` (REQ-046). Ao confirmar, apaga os dados do escopo ativo, atualiza a tela e exclui a pontuação da temporada no Supabase; sem rede, a exclusão fica pendente em `meta/cloudPendingDelete` e é repetida ao reconectar (REQ-054).

## 13. Modal de conta

- Abas acessíveis **Entrar** e **Criar conta**, com `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls` e `tabindex` móvel.
- Navegação por setas, `Home` e `End`; o painel é `role="tabpanel"` e é rotulado pela aba ativa.
- Campos: apelido (somente cadastro, 2–24 caracteres), e-mail e senha (6–72 caracteres).
- No cadastro, ao sair do campo Apelido, o app consulta `nickname_available` e exibe o resultado em `#login-nickname-status` (`role="status"`, `aria-live="polite"`): disponível, em uso, verificando ou erro. Apelido em uso marca `aria-invalid="true"` e desabilita o envio; erro de rede ou RPC ausente apenas avisa, sem bloquear o cadastro (REQ-056).
- **Login nunca cria conta automaticamente**; credenciais inválidas exibem erro e mantêm a modal.
- **Cadastro** exige apelido e usa `signUp`.
- A modal mostra o motivo quando aberta por uma ação restrita (`data-role="login-reason"`).
- Offline, exibe aviso e a ação **Continuar offline**.
- Fechamento por `Escape` e botão com rótulo “Fechar login”; foco preso e restaurado.
- O texto de privacidade informa que e-mail não aparece no ranking.
- O login troca o escopo de estudo para a conta; o cadastro faz o mesmo ao receber sessão. A modal não mistura dados de estudo entre contas.
- Se o cliente Supabase não estiver configurado, a modal não abre: o app avisa e segue para o estudo quando aplicável.

## 14. Estados globais

| Estado | Apresentação |
|---|---|
| Boot | Overlay `.boot` com spinner e texto “Carregando o XLearn…” |
| Carregamento de rota | Esqueletos em Provas; overlay para operações longas |
| Erro de catálogo | Card de erro com orientação para regenerar o manifesto |
| Offline | Faixa no topo e status `Offline` na topbar |
| Reconexão | Toast “Conexão restaurada…” e tentativa de sincronização |
| Nova versão | Toast informando que há atualização; não recarrega à força |
| Sem material válido | Estado vazio orientando a publicar materiais |
| Manifesto com inválidos | Aviso `role="status"` na home |

## 15. Acessibilidade

Requisitos aplicados:

1. `lang="pt-BR"` no documento.
2. Link “Pular para o conteúdo” visível ao receber foco; move o foco para `#main`.
3. Foco visível global com `:focus-visible` (contorno de 3 px).
4. `#main` tem `tabindex="-1"` e recebe foco na troca de rota.
5. Títulos hierárquicos (`h1` por tela, `h2` nas seções).
6. Regiões rotuladas por `aria-labelledby` ou `aria-label`.
7. Mensagens dinâmicas em `role="status"`/`aria-live` (conexão, ranking, total de simulado, toasts).
8. Diálogos com `aria-modal`, foco preso, `Escape`, retorno de foco e fundo `inert`.
9. Alternativas com estado textual para tecnologia assistiva, não apenas cor.
10. Alvos de toque com pelo menos 44 px e navegação inferior com rótulos.
11. `prefers-reduced-motion: reduce` desativa animações e transições; a preferência de animações também pode ser desligada em Configurações.
12. Contraste dos textos principais compatível com WCAG AA nos dois temas.
13. Textos de materiais renderizados como nós de texto, nunca como HTML.

## 16. Responsividade

| Faixa | Comportamento |
|---|---|
| ≥ 1000 px | Navegação inferior centralizada em até 620 px |
| ≥ 720 px | Grade de provas em duas colunas; mais respiro no conteúdo, quiz, hero e topbar |
| ≤ 600 px | Visão rápida em duas colunas; ajustes de topbar e cards |
| ≤ 480 px | Status de conexão compacto; personagem e cartões menores |
| ≤ 380 px | Subtítulo da marca oculto; navegação inferior compacta |
| 320 px | Menor largura suportada sem rolagem horizontal |

### 16.1 Breakpoints no CSS

- `max-width: 600px`
- `min-width: 720px`
- `min-width: 1000px`
- `max-width: 380px`
- `max-width: 480px`

## 17. Textos e idioma

- Toda a interface, mensagens de erro, estados vazios e rótulos ARIA estão em português brasileiro.
- Datas e números usam `Intl` com locale `pt-BR`.
- Termos fixos da interface: **Início**, **Provas**, **Revisões**, **Simulado**, **Progresso**, **Sessão**, **Configurações**, **Entrar**, **Criar conta**, **Continuar offline**, **Ver feedback**, **Ranking da temporada**.
- Nomes de blocos da home: **Seu painel de estudos**, **Recompensas pendentes**, **Visão rápida**, **Ranking da temporada**.

## 18. Critérios de aceitação de interface

1. Visitante vê apenas os dois cards permitidos na home.
2. Usuário logado vê os quatro cards na ordem definida.
3. Rotas restritas exibem o gate para visitante, mesmo por acesso direto.
4. Visitante responde a exatamente uma questão por prova.
5. Feedback e avanço de visitante abrem a modal de conta com motivo.
6. Login não cria conta; cadastro exige apelido.
7. A modal de feedback pausa e retoma o cronômetro corretamente.
8. Nenhuma ação depende apenas de cor para comunicar estado.
9. A navegação por teclado alcança topbar, conteúdo, alternativas, ações e diálogos.
10. A interface funciona a partir de 320 px sem rolagem horizontal.
11. A troca de rota move o foco para o conteúdo principal.
12. O botão “Apagar progresso” não faz a página saltar para o topo.
13. O clique em “Apagar progresso” remove os dados do escopo ativo, atualiza a tela e exclui a pontuação da temporada no Supabase; falhas de rede ficam pendentes e são repetidas ao reconectar.
14. A cascata de moedas desaparece em alturas aleatórias e coletas consecutivas reaproveitam a mesma camada, sem sobrepor animações.
15. No cadastro, sair do campo Apelido anuncia a disponibilidade; apelido em uso bloqueia o envio e falha de rede não impede o cadastro.
