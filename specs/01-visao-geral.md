# 01 — Visão geral

## 1. Problema

Estudantes que se preparam para concursos precisam responder muitas questões, revisar erros e manter constância. Ferramentas típicas exigem conta obrigatória, conexão permanente, assinatura ou instalação de aplicativos nativos. O XLearn propõe uma experiência oposta:

- abrir no navegador e começar a estudar;
- guardar o progresso no próprio dispositivo;
- continuar funcionando sem internet;
- oferecer repetição espaçada, simulados e acompanhamento de constância sem depender de servidor;
- usar conta apenas para recursos sociais e áreas restritas, quando o estudante quiser.

## 2. Objetivos

| Objetivo | Resultado esperado |
|---|---|
| Estudar por questões reais | Ler materiais Markdown padronizados, corrigir por identificador e exibir explicações |
| Manter continuidade | Persistir sessão, progresso, tentativas e preferências em IndexedDB |
| Revisar com método | Agendar revisões com intervalos configuráveis e oferecer fila de vencidas/futuras |
| Sustentar constância | Temporada, meta diária, sequência, conquistas, moedas e evolução de personagem |
| Praticar por assunto | Montar simulados isolados do histórico normal |
| Funcionar offline | App shell e materiais já acessados disponíveis sem rede |
| Participar opcionalmente | Conta Supabase para ranking global da temporada, sem bloquear o estudo offline |
| Ser acessível e leve | JavaScript puro, sem dependências de execução, com navegação por teclado e leitores de tela |

## 3. Escopo

### 3.1 Dentro do escopo

- SPA estática com rotas em hash.
- Catálogo gerado a partir de `questoes/*.md`.
- Sessões de estudo, correção, feedback em modal e resumo.
- Repetição espaçada (SRS) automática e manual.
- Simulados por assunto, com histórico separado.
- Temporada 1, estágio do personagem, moedas, conquistas, meta e sequência.
- Estatísticas, progresso e ranking local por prova/disciplina.
- Configurações de estudo, aparência, som e dados.
- Backup/restauração em JSON e exclusão seletiva.
- PWA instalável, service worker e cache offline.
- Conta Supabase Auth, sincronização de placar e ranking global da temporada.
- Modo visitante com acesso limitado.

### 3.2 Fora do escopo

- Backend próprio, API de conteúdo ou painel administrativo.
- Conteúdo gerado dinamicamente pelo app.
- Questões discursivas, upload de imagens ou avaliação por IA.
- Loja de itens, compra/venda de moedas ou pagamentos.
- Ranking validado de forma autoritativa no servidor (o cliente envia o próprio placar).
- Sincronização de progresso entre dispositivos.
- Multiusuário no mesmo dispositivo ou perfis locais separados.
- Notificações push.
- Internacionalização além de `pt-BR`.

## 4. Personas e papéis

### 4.1 Visitante

Pessoa sem conta que abre o app para conhecer as provas.

- Vê **Seu painel de estudos** e **Ranking da temporada** na home.
- Acessa **Provas** e responde somente à primeira questão de cada material.
- Não acessa **Configurações**, **Progresso**, **Simulado** ou **Revisões**.
- Feedback, avanço para a segunda questão e resumo completo solicitam conta.
- Pode criar conta ou entrar a qualquer momento.

### 4.2 Estudante com conta

Pessoa autenticada no Supabase Auth.

- Acessa todas as rotas.
- Vê, na home, os cards na ordem definida: **Seu painel de estudos**, **Recompensas pendentes**, **Visão rápida** e **Ranking da temporada**.
- Participa do ranking global da Temporada 1.
- Pode sincronizar o placar, sair da conta e continuar estudando offline.

### 4.3 Mantenedor

Pessoa que adiciona materiais, regenera o manifesto, publica no GitHub Pages, aplica schema/migrations no Supabase e valida a entrega.

## 5. Princípios de produto e engenharia

1. **Local-first:** estudo, progresso, moedas, XP e simulados pertencem ao dispositivo. A conta não é pré-requisito para estudar.
2. **Offline-first:** a primeira visita precisa de rede; depois, o app shell e os materiais já acessados funcionam offline.
3. **Sem dependências de execução:** HTML, CSS e ES Modules puros. Não há framework, CDN, fonte externa ou biblioteca de runtime.
4. **Segurança por construção:** texto dinâmico sempre via `textContent`/nós de texto; JSON de materiais nunca é executado; backup é validado antes de qualquer escrita.
5. **Gabarito independente da posição:** a correção usa `id` da alternativa; a ordem visual é embaralhada e persistida.
6. **Idempotência:** resposta, sessão, meta diária, coleta de conquista e envio de placar não podem duplicar recompensas ou registros.
7. **Acessibilidade:** foco visível, link de pular, rótulos ARIA, diálogos com foco preso, contraste, alvos de toque e respeito a movimento reduzido.
8. **Português brasileiro:** toda a interface, mensagens de erro e documentação de uso.
9. **Compatibilidade estática:** caminhos relativos compatíveis com GitHub Pages na raiz ou em subdiretório.
10. **Rastreabilidade:** cada requisito entregue em commit funcional, com push e registro em `PROJECT_STATUS.md`.

## 6. Restrições e premissas

| Restrição | Consequência |
|---|---|
| Hospedagem estática (GitHub Pages) | Sem servidor de aplicação; rotas em hash; conteúdo servido como arquivos |
| Navegador moderno | Necessário suporte a ES Modules, IndexedDB, Cache API, Service Worker e `fetch` |
| Primeira visita online | O service worker não pode pré-cachear o app antes de ser instalado |
| IndexedDB por navegador/dispositivo | Limpar dados do site apaga o progresso; não há sincronização entre dispositivos |
| Temporada com datas fixas | Após 04/12/2026, a Temporada 1 congela até uma nova temporada ser definida |
| Chave publishable pública | A proteção do ranking depende de RLS, não do sigilo da chave |
| Placar calculado no cliente | RLS impede gravar em nome de outra conta, mas não valida a veracidade dos valores |
| Sem confirmação de e-mail no projeto remoto | O cadastro devolve sessão imediatamente (`mailer_autoconfirm: true`) |

## 7. Jornadas principais

### 7.1 Primeiro acesso como visitante

1. Abre o app; o shell carrega o manifesto.
2. Vê a home com **Seu painel de estudos** e **Ranking da temporada**.
3. Entra em **Provas**, escolhe um material e responde à primeira questão.
4. Ao tentar abrir o feedback, avança ou vê o resumo completo, recebe convite para criar conta ou entrar.

### 7.2 Estudo completo com conta

1. Entra ou cria conta na modal acessível.
2. Inicia uma prova; pode ativar cronômetro e escolher tamanho/ordem nas configurações.
3. Responde, confirma uma única vez, abre o feedback em modal e agenda revisão.
4. Conclui a sessão; recebe resumo, moedas, XP interno e possíveis conquistas.
5. Volta à home e vê recompensas pendentes, visão rápida e ranking.

### 7.3 Revisão

1. Acessa **Revisões**.
2. Vê fila vencida e futura agrupada por material.
3. Inicia sessão só com questões vencidas, respeitando o tamanho configurado.
4. O agendamento é atualizado conforme acerto/erro e escolha manual.

### 7.4 Simulado

1. Acessa **Simulado** e define quantidade por assunto.
2. Responde com correção normal, sem cronômetro de prova.
3. Conclui e vê resumo por assunto.
4. O simulado não altera progresso, tentativas, sessões normais, SRS, XP, conquistas, ranking, estatísticas nem moedas.

### 7.5 Uso offline

1. Estudante já visitou o app e os materiais desejados.
2. Perde a conexão; o indicador mostra **Offline**.
3. Continua estudando; respostas são gravadas localmente.
4. Ao reconectar, o placar é reenviado e o ranking é atualizado.

## 8. Glossário

| Termo | Definição |
|---|---|
| **Material** | Arquivo Markdown em `questoes/` com frontmatter, questões em blocos JSON e metadados |
| **Manifesto** | `questoes/manifest.json`, gerado por script, com arquivos, hashes, contagens e diagnóstico |
| **Questão normalizada** | Objeto com `id`, `text`, alternativas com `id`, `correctId`, explicação e metadados |
| **Sessão normal** | Sequência de questões de um material, com modo `material`, `correcao` ou `revisao` |
| **Simulado** | Sessão isolada por assunto, com modo `simulado` e histórico próprio |
| **Tentativa** | Registro de uma resposta em `attempts`, com alternativa marcada, gabarito e data |
| **Progresso** | Registro por questão em `progress`, com acertos, erros, sequência e agendamento SRS |
| **SRS** | Repetição espaçada; acerto avança nível e agenda 1/3/7/14/30 dias; erro reduz nível e agenda 10 minutos |
| **Temporada** | Período oficial (`2026-1`, 05/11 a 04/12/2026) que governa moedas e evolução |
| **Estágio** | Nível do personagem, exigindo simultaneamente moedas acumuladas na temporada e dias ativos |
| **Carteira** | Saldo, total ganho, gasto e registros idempotentes de moedas em `meta/wallet` |
| **Ledger da temporada** | Total de moedas ganhas dentro da temporada em `meta/season` |
| **XP** | Pontuação interna calculada e gravada, mas não exibida nem usada para evoluir o personagem |
| **Conquista** | Critério verificável com recompensa em XP interno e moedas; moedas exigem coleta manual |
| **Ranking local** | Classificação de provas/disciplinas do próprio dispositivo pelo limite inferior de Wilson |
| **Ranking global** | Classificação pública da temporada no Supabase, por moedas e dias ativos |
| **`cloudAuth`** | Registro de sessão do Supabase em `meta/cloudAuth`; nunca entra no backup |
| **Visitante** | Usuário sem sessão de conta, com acesso limitado |

## 9. Critérios de sucesso

- Um visitante consegue abrir o app e responder à primeira questão de qualquer prova sem conta.
- Um estudante com conta consegue estudar, revisar, simular, acompanhar progresso e participar do ranking.
- O app continua funcionando offline para o shell e materiais já acessados.
- Nenhum texto de material é interpretado como HTML.
- Nenhuma resposta é contabilizada duas vezes.
- O gabarito permanece correto independentemente da ordem das alternativas.
- As recompensas e o placar são idempotentes e sobrevivem a recarregamentos.
- A Temporada 1 congela corretamente após o término.
- A interface é navegável por teclado e legível em telas pequenas.
- `npm run check` valida 10 materiais e 1.250 questões sem erros.
