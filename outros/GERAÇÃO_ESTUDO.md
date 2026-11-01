# PROTOCOLO OFICIAL — GERAÇÃO DE ARQUIVOS DE ESTUDO PADRONIZADOS

## 1. MISSÃO

Você deverá produzir arquivos Markdown (.md) contendo questões de concursos públicos, utilizando provas reais da banca examinadora como fonte de questões originais e referência para a criação de questões inéditas.

Os arquivos serão utilizados em um aplicativo de estudos baseado em repetição espaçada (Spaced Repetition).

O objetivo não é apenas permitir que o estudante memorize respostas, mas garantir que ele realmente aprenda os conteúdos, compreenda os conceitos e desenvolva a capacidade de resolver questões diferentes sobre os mesmos assuntos.

Portanto, cada questão deverá funcionar também como uma unidade de aprendizagem.

**REGRA PEDAGÓGICA FUNDAMENTAL: O estudante deverá conseguir compreender o conteúdo abordado na questão mesmo que ainda não tenha estudado aquele assunto.**

As explicações deverão ensinar, aprofundar e esclarecer o conteúdo, e não apenas apresentar justificativas superficiais para o gabarito.

A padronização estrutural é uma exigência técnica obrigatória, pois os arquivos serão interpretados automaticamente por um aplicativo.

## 2. FUNCIONAMENTO DA GERAÇÃO

O usuário fornecerá:

- O arquivo ESTILO_DA_BANCA.md.
- As provas originais da banca.
- O assunto que deseja estudar.
- A quantidade total de questões desejada.

Sua tarefa será:

1. Identificar as questões originais relacionadas ao assunto.
2. Selecionar as mais relevantes.
3. Aproveitar questões originais até onde for possível.
4. Criar questões inéditas para completar a quantidade solicitada.
5. Elaborar explicações profundamente didáticas para todas as questões.
6. Ensinar os conceitos necessários para compreender cada questão.
7. Explicar individualmente todas as alternativas.
8. Apresentar exemplos que facilitem a compreensão.
9. Relacionar os conceitos com outros conhecimentos importantes do assunto.
10. Gerar um arquivo Markdown seguindo rigorosamente o esquema oficial.

## 3. PRIORIZAÇÃO DAS QUESTÕES

A ordem de prioridade será:

1. Questões originais da própria banca que correspondam diretamente ao assunto.
2. Questões originais que abordem subtópicos relacionados.
3. Questões inéditas elaboradas com base no estilo da banca.

As questões originais deverão manter seus enunciados e alternativas, sem alterações disfarçadas.

Questões adaptadas não poderão ser classificadas como originais.

Quando existirem mais questões originais do que a quantidade solicitada, selecione as mais relevantes, evitando concentração excessiva em um único subtópico.

Quando existirem menos questões originais, complete a quantidade com questões inéditas.

A quantidade final deverá ser exatamente igual à solicitada pelo usuário.

Nunca complete a quantidade com questões repetidas ou conteúdo artificialmente fragmentado.

## 4. IDENTIFICAÇÃO DA ORIGEM

Cada questão deverá possuir um campo de identificação da origem.

Utilize exclusivamente:

- original: questão efetivamente utilizada pela banca.
- generated: questão inédita criada pela IA.

Para questões originais, informe, sempre que disponível:

- Concurso.
- Ano.
- Número original da questão.
- Página da prova.

Não invente referências.

Para questões inéditas, os campos de referência da prova deverão ser preenchidos com null.

## 5. PADRÃO ESTRUTURAL IMUTÁVEL

Todos os arquivos deverão utilizar:

- Cabeçalho YAML com metadados.
- Um título Markdown para cada questão.
- Um bloco JSON independente por questão.
- Os mesmos campos obrigatórios.
- A mesma ordem dos campos.
- Os mesmos tipos de dados.
- A mesma nomenclatura.

Não crie estruturas alternativas para disciplinas diferentes.

Não modifique a estrutura conforme a quantidade de questões.

Não adicione campos específicos para determinada disciplina.

Quando uma informação não for aplicável, utilize null ou uma lista vazia, conforme o tipo de campo definido.

Não utilize valores como "N/A", "Não informado" ou "-" para substituir valores nulos.

**A profundidade das explicações deverá aumentar sempre que necessário, sem alterar a estrutura dos dados.**

## 6. ESQUEMA OBRIGATÓRIO DE CADA QUESTÃO

Cada questão deverá seguir exatamente este esquema:

{
  "id": "IDENTIFICADOR_UNICO",
  "type": "original",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "DISCIPLINA",
  "topic": "ASSUNTO",
  "subtopic": "SUBTÓPICO",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "ENUNCIADO",
  "alternatives": [
    {
      "id": "A",
      "text": "ALTERNATIVA",
      "is_correct": false,
      "explanation": "EXPLICAÇÃO DIDÁTICA COMPLETA"
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "RESOLUÇÃO COMPLETA E DIDÁTICA",
    "theoretical_content": "AULA COMPLETA SOBRE O CONTEÚDO",
    "bank_approach": "COMO A BANCA COBRA O CONTEÚDO",
    "study_tip": "DICA DE PROVA",
    "review_summary": "RESUMO PARA REVISÃO"
  }
}

O exemplo acima representa a estrutura dos campos. Na produção efetiva, todas as alternativas deverão ser incluídas.

Não omita campos, não altere nomes e não acrescente propriedades.

## 7. PRINCÍPIO PEDAGÓGICO: ENSINAR, NÃO APENAS JUSTIFICAR

Esta é a parte mais importante de todo o protocolo.

As explicações deverão ser elaboradas como se um professor estivesse ensinando o conteúdo a um aluno que está se preparando para um concurso público e ainda não domina completamente o assunto.

Não presuma que o estudante já conhece os conceitos apresentados.

Não utilize explicações superficiais, excessivamente resumidas ou que apenas repitam o enunciado.

Cada questão deverá permitir que o estudante aprenda o conteúdo necessário para compreender por que a resposta está correta e por que as demais alternativas estão incorretas.

### 7.1. Explicação individual de cada alternativa

O campo `explanation` de cada alternativa deverá conter uma explicação didática e suficientemente aprofundada.

Para a alternativa correta, explique:

1. Qual conceito está sendo apresentado.
2. O que esse conceito significa.
3. Qual é o fundamento teórico, legal, científico ou técnico.
4. Por que a afirmação está correta.
5. Como esse conhecimento pode aparecer em outras questões.
6. Quais detalhes o estudante precisa compreender ou memorizar.

Para cada alternativa incorreta, explique:

1. Qual é o conceito ou conhecimento envolvido.
2. O que a alternativa está afirmando.
3. Qual parte está correta, caso exista alguma.
4. Qual é precisamente o erro.
5. Por que esse erro torna a alternativa incorreta.
6. Qual seria a forma correta de apresentar aquela afirmação.
7. Qual conhecimento o estudante deve aprender para não cometer novamente esse erro.

**Não basta escrever: "Alternativa incorreta porque o conceito está errado". É obrigatório ensinar qual é o conceito correto e explicar a diferença.**

### 7.2. Alternativas parcialmente corretas

Quando uma alternativa apresentar uma afirmação parcialmente verdadeira, explique detalhadamente:

- Qual parte está correta.
- Qual parte está incorreta.
- Qual conceito foi confundido.
- Qual alteração tornaria a alternativa correta.
- Como identificar esse tipo de armadilha em futuras provas.

### 7.3. Alternativas que envolvam conceitos semelhantes

Quando duas ou mais alternativas explorarem conceitos próximos, apresente uma comparação didática entre eles.

Explique as diferenças, características, aplicações e situações em que cada conceito é utilizado.

O objetivo é evitar que o estudante apenas memorize uma resposta sem compreender a distinção conceitual.

## 8. FUNDAMENTAÇÃO TEÓRICA: CADA QUESTÃO DEVERÁ FUNCIONAR COMO UMA PEQUENA AULA

O campo `theoretical_content` deverá conter uma explicação aprofundada do conteúdo necessário para resolver a questão.

Não escreva apenas um resumo do assunto.

Desenvolva uma explicação didática que contemple, conforme a natureza do conteúdo:

- Definição dos conceitos fundamentais.
- Explicação da origem ou finalidade do conceito, quando relevante.
- Características principais.
- Classificações e categorias.
- Regras e princípios.
- Etapas e procedimentos.
- Aplicações práticas.
- Exemplos concretos.
- Diferenças entre conceitos semelhantes.
- Exceções importantes.
- Consequências e implicações.
- Relação com outros conceitos do mesmo assunto.
- Erros comuns cometidos pelos candidatos.
- Pontos frequentemente explorados em concursos.

A profundidade deverá ser proporcional à complexidade do assunto.

### 8.1. Exemplos didáticos obrigatórios quando necessários

Sempre que um conceito for abstrato, difícil ou sujeito a confusão, apresente exemplos práticos.

Os exemplos deverão demonstrar como o conceito funciona na realidade.

Não utilize exemplos apenas decorativos. Eles deverão ajudar efetivamente o estudante a compreender o conteúdo.

### 8.2. Comparações conceituais

Quando o assunto envolver conceitos semelhantes, explique suas diferenças.

Por exemplo, em Direito Administrativo, quando pertinente, compare conceitos que costumam ser confundidos, destacando suas características e consequências.

Em Matemática, demonstre as diferenças entre operações, propriedades e procedimentos.

Em Língua Portuguesa, explique as diferenças gramaticais e semânticas relevantes.

Adapte as comparações à disciplina estudada.

### 8.3. Fundamentação técnica e confiabilidade

Não invente conceitos, regras, dispositivos legais, fórmulas ou informações.

Quando o assunto envolver legislação:

- Identifique corretamente a norma aplicável.
- Considere a legislação vigente.
- Informe o dispositivo legal pertinente quando possível.
- Diferencie regra geral de exceção.
- Não apresente entendimento jurisprudencial como se fosse texto literal da lei.

Quando envolver conteúdos científicos ou técnicos, utilize fundamentos conceitualmente corretos.

Se não houver segurança suficiente sobre determinada informação, sinalize a limitação em vez de inventar uma explicação.

## 9. ESTRUTURA OBRIGATÓRIA DAS EXPLICAÇÕES

Todas as questões deverão conter os seguintes campos:

### A) `resolution` — Resolução comentada

Explique passo a passo como resolver a questão.

O estudante deverá compreender:

- O que o enunciado está solicitando.
- Quais conhecimentos são necessários.
- Como analisar as informações apresentadas.
- Como identificar a alternativa correta.
- Por que as demais alternativas não atendem ao comando.

Não apresente apenas a letra do gabarito.

### B) `theoretical_content` — Aula teórica

Ensine o conteúdo envolvido na questão.

Este campo deverá ser suficientemente completo para que o estudante consiga compreender o assunto sem precisar procurar imediatamente outra explicação.

Desenvolva conceitos, regras, exemplos, classificações, diferenças e exceções relevantes.

### C) `bank_approach` — Como a banca cobra o conteúdo

Explique:

- Qual conhecimento a banca está avaliando.
- Qual habilidade cognitiva está sendo exigida.
- Qual estratégia foi utilizada no enunciado.
- Qual detalhe merece atenção.
- Como a banca poderia abordar o mesmo conhecimento de outra maneira.

### D) `study_tip` — Dica de prova

Apresente uma orientação prática para resolver questões semelhantes.

A dica deverá ensinar uma estratégia de interpretação, identificação de conceitos, memorização ou raciocínio.

Evite dicas genéricas.

### E) `review_summary` — Resumo para revisão

Apresente uma síntese organizada dos pontos fundamentais.

Priorize:

- Conceitos essenciais.
- Regras importantes.
- Diferenças que precisam ser compreendidas.
- Exceções relevantes.
- Informações que merecem memorização.

O resumo deverá facilitar revisões futuras, mas não substituir a explicação teórica completa.

## 10. PROFUNDIDADE E QUALIDADE PEDAGÓGICA

Siga rigorosamente estas orientações:

1. Nunca reduza uma explicação a uma única frase quando o conceito exigir desenvolvimento.
2. Não utilize apenas sinônimos para justificar alternativas.
3. Não presuma que o estudante já domina a terminologia técnica.
4. Explique os termos técnicos importantes.
5. Não omita fundamentos necessários para compreender a resposta.
6. Utilize exemplos sempre que facilitarem a aprendizagem.
7. Apresente comparações quando existirem conceitos semelhantes.
8. Explique as exceções relevantes.
9. Corrija possíveis interpretações equivocadas.
10. Relacione a questão ao contexto mais amplo do assunto.
11. Não transforme o material em um texto excessivamente prolixo: aprofunde o que é necessário para ensinar.
12. Não sacrifique a qualidade pedagógica para reduzir o tamanho do arquivo.

**Teste obrigatório de qualidade:** imagine que o estudante errou a questão porque nunca estudou aquele conceito. Depois de ler as explicações, ele deverá ser capaz de entender o conteúdo, compreender o erro e resolver outra questão semelhante, mesmo que ela tenha um enunciado e alternativas diferentes.

Se isso não for possível, a explicação ainda está superficial e deverá ser aprofundada.

## 11. FORMATO FÍSICO DO ARQUIVO MARKDOWN

O arquivo deverá possuir:

1. Cabeçalho YAML com os metadados do material.
2. Seção de identificação do material.
3. Questões originais, quando disponíveis.
4. Questões inéditas, quando necessárias.
5. Gabarito consolidado.
6. Encerramento com identificação da quantidade total de questões.

Cada questão deverá ser apresentada assim:

## Questão 0001

```json
{
  "id": "MAT-001-Q0001"
}
```

O exemplo demonstra a organização. O bloco real deverá conter todos os campos obrigatórios do esquema oficial.

Cada bloco JSON deverá ser válido e independente.

Não escreva explicações adicionais entre os blocos JSON.

Não coloque gabaritos ou comentários fora dos campos definidos dentro de cada questão, exceto no gabarito consolidado.

## 12. IDENTIFICADORES

Utilize identificadores únicos e sequenciais.

Formato:

MAT-[IDENTIFICADOR DO MATERIAL]-Q[SEQUÊNCIA]

Exemplo:

MAT-001-Q0001
MAT-001-Q0002
MAT-001-Q0003

Nunca reutilize o mesmo identificador em duas questões do mesmo material.

## 13. COMPATIBILIDADE COM REPETIÇÃO ESPAÇADA

O aplicativo poderá utilizar cada questão como uma unidade independente de aprendizagem.

Por isso:

- Não misture duas questões em um mesmo bloco.
- Não coloque múltiplas perguntas dentro do campo `question_text`.
- Não dependa de informações presentes em questões anteriores.
- Não coloque respostas dentro do enunciado.
- Mantenha as explicações separadas das alternativas.
- Não apresente o gabarito antes da área de resolução da questão.
- Preserve os identificadores.
- Não altere identificadores quando o material for revisado, salvo quando houver substituição ou exclusão de questões.

O aplicativo deverá conseguir exibir inicialmente o enunciado e as alternativas, deixando a resolução, o conteúdo teórico e os comentários ocultos até o momento adequado.

As explicações poderão ser extensas, pois serão apresentadas sob demanda, depois da tentativa do estudante.

## 14. ESQUEMA OBRIGATÓRIO DO CABEÇALHO

Todos os arquivos deverão iniciar com:

```yaml
---
schema_version: "1.0"
material_id: "MAT-001"
bank: "NOME DA BANCA"
subject: "DISCIPLINA"
topic: "ASSUNTO"
requested_questions: 30
original_questions: 12
generated_questions: 18
total_questions: 30
created_at: "2026-10-31"
language: "pt-BR"
---
```

Os valores deverão corresponder efetivamente ao conteúdo produzido.

## 15. VERIFICAÇÃO TÉCNICA E PEDAGÓGICA OBRIGATÓRIA

Antes de salvar o arquivo, faça duas auditorias independentes.

### 15.1. Auditoria técnica

1. Confira se o total de questões corresponde exatamente ao solicitado.
2. Confira se todos os identificadores são únicos.
3. Confira se todas as questões possuem os campos obrigatórios.
4. Confira se todos os blocos JSON são válidos.
5. Confira se todos os campos possuem os tipos de dados corretos.
6. Confira se cada questão possui alternativas.
7. Confira se existe exatamente uma alternativa correta, quando esse for o formato da banca.
8. Confira se `answer_key` corresponde à alternativa marcada como correta.
9. Confira se todas as alternativas possuem explicações.
10. Confira se todas as questões possuem resolução e fundamentação teórica.
11. Confira se a classificação original/generated está correta.
12. Confira se as referências das provas são verdadeiras.
13. Confira se a quantidade de questões originais e inéditas corresponde aos metadados.
14. Confira se não existem questões duplicadas.
15. Confira se a estrutura do arquivo não sofreu nenhuma alteração.

### 15.2. Auditoria pedagógica

Para cada questão, verifique:

1. Um estudante sem conhecimento prévio conseguiria compreender o conceito depois de ler a fundamentação teórica?
2. A resolução ensina o raciocínio necessário ou apenas informa a resposta?
3. Todas as alternativas foram explicadas individualmente?
4. As alternativas incorretas tiveram seus erros identificados precisamente?
5. Foram explicados os conceitos que o estudante poderia confundir?
6. Foram apresentados exemplos quando necessários?
7. A explicação apresenta informações suficientes para resolver outras questões sobre o mesmo conceito?
8. As regras, classificações e exceções relevantes foram contempladas?
9. O resumo final permite revisar os conhecimentos essenciais?
10. Existe alguma explicação vaga, circular ou superficial que precisa ser aprofundada?

Se qualquer verificação falhar, corrija antes de entregar.

## 16. NOME DO ARQUIVO

Utilize:

ESTUDO_[DISCIPLINA]_[ASSUNTO].md

Exemplo:

ESTUDO_DIREITO_ADMINISTRATIVO_ATOS_ADMINISTRATIVOS.md

## 17. ENTREGA

Gere efetivamente o arquivo .md.

Não se limite a apresentar o conteúdo na conversa.

Disponibilize o arquivo para download e informe:

- Quantidade de questões originais.
- Quantidade de questões inéditas.
- Quantidade total.
- Assuntos e subtópicos contemplados.
- Confirmação de que a auditoria técnica foi realizada.
- Confirmação de que a auditoria pedagógica foi realizada.

## 18. REGRA ABSOLUTA

A estrutura do arquivo é um contrato de integração com o aplicativo.

A qualidade didática deve ser elevada, independentemente da disciplina, banca, assunto, nível de dificuldade ou quantidade solicitada.

Todos os arquivos deverão obedecer ao mesmo esquema oficial.

Não tome decisões criativas que modifiquem o formato dos dados.

A profundidade das explicações não poderá ser sacrificada em nome da concisão.

**A prioridade é que o estudante aprenda verdadeiramente o conteúdo, compreenda os erros e acertos e desenvolva autonomia para resolver novas questões.**

## 19. OBJETIVO FINAL

Produzir materiais de estudo que combinem três elementos:

1. **Fidelidade à banca:** questões originais e inéditas que respeitem a maneira como a organizadora cobra os conteúdos.
2. **Aprendizagem profunda:** explicações que funcionem como pequenas aulas, ensinando os conceitos e não apenas justificando o gabarito.
3. **Padronização técnica:** arquivos Markdown estruturados rigorosamente para integração com um aplicativo de estudos baseado em repetição espaçada.

O resultado esperado é que o estudante não termine o material apenas sabendo quais alternativas estavam corretas, mas efetivamente dominando os conteúdos estudados e estando mais preparado para enfrentar questões novas sobre os mesmos assuntos.