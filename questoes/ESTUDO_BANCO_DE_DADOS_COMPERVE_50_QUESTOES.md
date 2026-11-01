---
schema_version: "1.0"
material_id: "MAT-BD-COMPERVE-001"
bank: "COMPERVE"
subject: "Banco de Dados"
topic: "Conceitos, modelos, projeto conceitual, lógico e físico, linguagens de consulta, bancos distribuídos, SGBDs e SQL"
requested_questions: 50
original_questions: 0
generated_questions: 50
total_questions: 50
created_at: "2026-11-01"
language: "pt-BR"
---

# Banco de Dados — 50 questões inéditas no estilo COMPERVE

> Material de estudo estruturado para aplicativo de revisão. Todas as questões deste arquivo são inéditas e foram classificadas como `generated`; não são transcrições de provas anteriores. Cada questão possui quatro alternativas (A–D), uma única resposta correta e explicações individualizadas.

## Questões

## Questão 0001

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0001",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Conceitos fundamentais",
  "subtopic": "Dados, informação e conhecimento",
  "difficulty": "easy",
  "cognitive_skill": "comprehension",
  "question_text": "Em um sistema acadêmico, o valor 8,5 armazenado no campo nota é associado ao aluno e à disciplina, permitindo identificar seu desempenho. Nessa situação, a associação contextual que atribui significado ao valor caracteriza:",
  "alternatives": [
    {
      "id": "A",
      "text": "um dado isolado, sem qualquer interpretação.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Dados são representações de fatos; informação resulta de dados organizados e contextualizados; conhecimento envolve interpretação e uso da informação. O valor numérico sozinho não informa a que se refere. A identificação do aluno, da disciplina e da escala fornece contexto e permite interpretar o resultado. Por isso, trata-se de informação, e não de dado isolado ou metadado. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "uma informação, pois o dado foi contextualizado e adquiriu significado.",
      "is_correct": true,
      "explanation": "Correta. Dados são representações de fatos; informação resulta de dados organizados e contextualizados; conhecimento envolve interpretação e uso da informação. Aplicando ao enunciado: O valor numérico sozinho não informa a que se refere. A identificação do aluno, da disciplina e da escala fornece contexto e permite interpretar o resultado. Por isso, trata-se de informação, e não de dado isolado ou metadado."
    },
    {
      "id": "C",
      "text": "um metadado, pois descreve exclusivamente a estrutura da tabela.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Dados são representações de fatos; informação resulta de dados organizados e contextualizados; conhecimento envolve interpretação e uso da informação. O valor numérico sozinho não informa a que se refere. A identificação do aluno, da disciplina e da escala fornece contexto e permite interpretar o resultado. Por isso, trata-se de informação, e não de dado isolado ou metadado. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "um algoritmo, pois transforma automaticamente valores numéricos.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Dados são representações de fatos; informação resulta de dados organizados e contextualizados; conhecimento envolve interpretação e uso da informação. O valor numérico sozinho não informa a que se refere. A identificação do aluno, da disciplina e da escala fornece contexto e permite interpretar o resultado. Por isso, trata-se de informação, e não de dado isolado ou metadado. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O valor numérico sozinho não informa a que se refere. A identificação do aluno, da disciplina e da escala fornece contexto e permite interpretar o resultado. Por isso, trata-se de informação, e não de dado isolado ou metadado. A alternativa correta é B.",
    "theoretical_content": "Dado é um registro bruto, como 8,5. Quando relacionado a aluno, disciplina, escala e período, passa a informar algo sobre o desempenho. Metadados descrevem dados e estruturas, como tipo, tamanho e significado de uma coluna. Algoritmos são sequências de instruções para resolver problemas. A transformação de dados em informação depende de contexto, organização e interpretação.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Ao diferenciar dado e informação, verifique se o enunciado apresenta apenas um valor ou se já informa seu significado no contexto.",
    "review_summary": "Conceitos fundamentais — Dados, informação e conhecimento. Dados são representações de fatos; informação resulta de dados organizados e contextualizados; conhecimento envolve interpretação e uso da informação. Gabarito: B."
  }
}
```

## Questão 0002

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0002",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Conceitos fundamentais",
  "subtopic": "SGBD e suas funções",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em uma aplicação de gestão de estoque, o software responsável por definir estruturas, executar comandos SQL, controlar transações, gerenciar acessos concorrentes e recuperar dados após falhas é denominado:",
  "alternatives": [
    {
      "id": "A",
      "text": "sistema gerenciador de banco de dados.",
      "is_correct": true,
      "explanation": "Correta. O SGBD é o software que gerencia a definição, manipulação, segurança, concorrência, integridade e recuperação do banco. Aplicando ao enunciado: O enunciado reúne funções típicas do software que administra o banco, e não de um modelo ou de uma linguagem específica. Portanto, a resposta é SGBD."
    },
    {
      "id": "B",
      "text": "sistema operacional, exclusivamente.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O SGBD é o software que gerencia a definição, manipulação, segurança, concorrência, integridade e recuperação do banco. O enunciado reúne funções típicas do software que administra o banco, e não de um modelo ou de uma linguagem específica. Portanto, a resposta é SGBD. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "modelo entidade-relacionamento.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O SGBD é o software que gerencia a definição, manipulação, segurança, concorrência, integridade e recuperação do banco. O enunciado reúne funções típicas do software que administra o banco, e não de um modelo ou de uma linguagem específica. Portanto, a resposta é SGBD. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "linguagem de definição de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O SGBD é o software que gerencia a definição, manipulação, segurança, concorrência, integridade e recuperação do banco. O enunciado reúne funções típicas do software que administra o banco, e não de um modelo ou de uma linguagem específica. Portanto, a resposta é SGBD. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado reúne funções típicas do software que administra o banco, e não de um modelo ou de uma linguagem específica. Portanto, a resposta é SGBD. A alternativa correta é A.",
    "theoretical_content": "Um SGBD oferece uma interface entre aplicações/usuários e os dados persistidos. Entre suas funções estão definição de esquemas, execução de consultas, atualização, autorização, controle de concorrência, gerenciamento de transações, integridade, backup e recuperação. O sistema operacional fornece serviços de baixo nível, mas não substitui essas funções especializadas. Modelo ER é uma técnica de modelagem; DDL é uma categoria de linguagem.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Quando a questão listar várias responsabilidades de gerenciamento, pense no SGBD como o componente que coordena essas funções.",
    "review_summary": "Conceitos fundamentais — SGBD e suas funções. O SGBD é o software que gerencia a definição, manipulação, segurança, concorrência, integridade e recuperação do banco. Gabarito: A."
  }
}
```

## Questão 0003

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0003",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Conceitos fundamentais",
  "subtopic": "Catálogo e metadados",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Ao consultar o catálogo de um SGBD, um administrador obtém informações sobre tabelas, colunas, tipos de dados, índices e restrições existentes. Essas informações são classificadas como:",
  "alternatives": [
    {
      "id": "A",
      "text": "dados transacionais, necessariamente pertencentes às linhas das tabelas de negócio.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Metadados são dados sobre os dados: descrevem estruturas, tipos, restrições, privilégios e outros objetos do banco. A questão destaca descrições de estruturas e propriedades. Isso caracteriza metadados mantidos no catálogo do SGBD. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "metadados, pois descrevem a estrutura e as propriedades dos objetos do banco.",
      "is_correct": true,
      "explanation": "Correta. Metadados são dados sobre os dados: descrevem estruturas, tipos, restrições, privilégios e outros objetos do banco. Aplicando ao enunciado: A questão destaca descrições de estruturas e propriedades. Isso caracteriza metadados mantidos no catálogo do SGBD."
    },
    {
      "id": "C",
      "text": "dados redundantes, que devem ser eliminados para normalizar o esquema.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Metadados são dados sobre os dados: descrevem estruturas, tipos, restrições, privilégios e outros objetos do banco. A questão destaca descrições de estruturas e propriedades. Isso caracteriza metadados mantidos no catálogo do SGBD. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "registros de log, pois representam apenas operações já executadas.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Metadados são dados sobre os dados: descrevem estruturas, tipos, restrições, privilégios e outros objetos do banco. A questão destaca descrições de estruturas e propriedades. Isso caracteriza metadados mantidos no catálogo do SGBD. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A questão destaca descrições de estruturas e propriedades. Isso caracteriza metadados mantidos no catálogo do SGBD. A alternativa correta é B.",
    "theoretical_content": "O catálogo ou dicionário de dados mantém descrições do próprio banco: esquemas, tabelas, colunas, tipos, índices, visões, usuários e restrições. Esses elementos permitem ao SGBD interpretar e administrar os objetos. Não devem ser confundidos com os dados operacionais armazenados nas linhas nem com logs de transação, que registram eventos e operações.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Diferencie o conteúdo das tabelas (dados de negócio) da descrição das tabelas (metadados).",
    "review_summary": "Conceitos fundamentais — Catálogo e metadados. Metadados são dados sobre os dados: descrevem estruturas, tipos, restrições, privilégios e outros objetos do banco. Gabarito: B."
  }
}
```

## Questão 0004

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0004",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Arquitetura e independência",
  "subtopic": "Independência física",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma equipe altera a organização dos arquivos de dados e cria um novo índice para melhorar o desempenho. As aplicações continuam executando as mesmas consultas, sem necessidade de alteração. Essa situação exemplifica:",
  "alternatives": [
    {
      "id": "A",
      "text": "independência lógica de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Independência física é a capacidade de modificar o esquema interno sem modificar o esquema conceitual ou as aplicações que dele dependem. A alteração foi restrita aos arquivos e índices, isto é, ao nível interno. Como as aplicações permaneceram inalteradas, o caso é de independência física. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "independência física de dados.",
      "is_correct": true,
      "explanation": "Correta. Independência física é a capacidade de modificar o esquema interno sem modificar o esquema conceitual ou as aplicações que dele dependem. Aplicando ao enunciado: A alteração foi restrita aos arquivos e índices, isto é, ao nível interno. Como as aplicações permaneceram inalteradas, o caso é de independência física."
    },
    {
      "id": "C",
      "text": "dependência entre programas e arquivos físicos.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Independência física é a capacidade de modificar o esquema interno sem modificar o esquema conceitual ou as aplicações que dele dependem. A alteração foi restrita aos arquivos e índices, isto é, ao nível interno. Como as aplicações permaneceram inalteradas, o caso é de independência física. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "desnormalização obrigatória do esquema conceitual.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Independência física é a capacidade de modificar o esquema interno sem modificar o esquema conceitual ou as aplicações que dele dependem. A alteração foi restrita aos arquivos e índices, isto é, ao nível interno. Como as aplicações permaneceram inalteradas, o caso é de independência física. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A alteração foi restrita aos arquivos e índices, isto é, ao nível interno. Como as aplicações permaneceram inalteradas, o caso é de independência física. A alternativa correta é B.",
    "theoretical_content": "A independência física permite trocar estruturas de armazenamento, métodos de acesso, índices, particionamento ou localização física sem alterar a visão lógica dos dados. Já a independência lógica permite modificar o esquema conceitual sem exigir mudanças nas visões externas ou aplicações, dentro dos limites de compatibilidade. As duas formas reduzem o acoplamento entre aplicações e detalhes do banco.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Observe qual nível foi modificado: armazenamento aponta para independência física; estrutura lógica global aponta para independência lógica.",
    "review_summary": "Arquitetura e independência — Independência física. Independência física é a capacidade de modificar o esquema interno sem modificar o esquema conceitual ou as aplicações que dele dependem. Gabarito: B."
  }
}
```

## Questão 0005

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0005",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelos de dados",
  "subtopic": "Modelo hierárquico",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um modelo de dados hierárquico tradicional, os registros são organizados principalmente:",
  "alternatives": [
    {
      "id": "A",
      "text": "em uma estrutura de árvore, com relações do tipo pai-filho.",
      "is_correct": true,
      "explanation": "Correta. O modelo hierárquico organiza registros em uma árvore, com relações pai-filho e caminhos de acesso hierárquicos. Aplicando ao enunciado: A estrutura de árvore e a relação pai-filho são os elementos definidores do modelo hierárquico."
    },
    {
      "id": "B",
      "text": "em tabelas relacionadas por chaves estrangeiras, exclusivamente.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O modelo hierárquico organiza registros em uma árvore, com relações pai-filho e caminhos de acesso hierárquicos. A estrutura de árvore e a relação pai-filho são os elementos definidores do modelo hierárquico. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "em grafos sem qualquer restrição de navegação.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O modelo hierárquico organiza registros em uma árvore, com relações pai-filho e caminhos de acesso hierárquicos. A estrutura de árvore e a relação pai-filho são os elementos definidores do modelo hierárquico. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "em documentos JSON sem estrutura previamente definida.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O modelo hierárquico organiza registros em uma árvore, com relações pai-filho e caminhos de acesso hierárquicos. A estrutura de árvore e a relação pai-filho são os elementos definidores do modelo hierárquico. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A estrutura de árvore e a relação pai-filho são os elementos definidores do modelo hierárquico. A alternativa correta é A.",
    "theoretical_content": "No modelo hierárquico clássico, cada registro filho possui normalmente um único pai, formando uma estrutura semelhante a uma árvore. Essa organização favorece relações naturalmente hierárquicas, mas pode dificultar relações muitos-para-muitos e navegação flexível. O modelo relacional usa tabelas e chaves; o modelo em rede admite estruturas de ligações mais gerais; bancos documentais armazenam documentos.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Compare os modelos pela estrutura básica: árvore no hierárquico, tabelas no relacional e grafo/rede nas abordagens em rede.",
    "review_summary": "Modelos de dados — Modelo hierárquico. O modelo hierárquico organiza registros em uma árvore, com relações pai-filho e caminhos de acesso hierárquicos. Gabarito: A."
  }
}
```

## Questão 0006

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0006",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelos de dados",
  "subtopic": "Modelo em rede",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em comparação com o modelo hierárquico, o modelo em rede tradicional caracteriza-se por:",
  "alternatives": [
    {
      "id": "A",
      "text": "permitir que um registro participe de múltiplas associações pai-filho, representando estruturas mais gerais.",
      "is_correct": true,
      "explanation": "Correta. O modelo em rede amplia a flexibilidade do hierárquico ao permitir múltiplas ligações entre registros. Aplicando ao enunciado: A alternativa A descreve a principal diferença histórica: múltiplas ligações possíveis, em contraste com a hierarquia estrita."
    },
    {
      "id": "B",
      "text": "restringir cada registro filho a um único pai, sem exceções.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O modelo em rede amplia a flexibilidade do hierárquico ao permitir múltiplas ligações entre registros. A alternativa A descreve a principal diferença histórica: múltiplas ligações possíveis, em contraste com a hierarquia estrita. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "eliminar ligações explícitas entre registros.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O modelo em rede amplia a flexibilidade do hierárquico ao permitir múltiplas ligações entre registros. A alternativa A descreve a principal diferença histórica: múltiplas ligações possíveis, em contraste com a hierarquia estrita. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "representar todos os dados exclusivamente por relações matemáticas normalizadas.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O modelo em rede amplia a flexibilidade do hierárquico ao permitir múltiplas ligações entre registros. A alternativa A descreve a principal diferença histórica: múltiplas ligações possíveis, em contraste com a hierarquia estrita. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A alternativa A descreve a principal diferença histórica: múltiplas ligações possíveis, em contraste com a hierarquia estrita. A alternativa correta é A.",
    "theoretical_content": "O modelo em rede representa registros e conjuntos de associações, permitindo que um registro participe de mais de um relacionamento proprietário-membro. Isso possibilita estruturas mais flexíveis, inclusive relações muitos-para-muitos, embora frequentemente exija navegação por caminhos definidos. Não é o mesmo que o modelo relacional, no qual relações são representadas por tabelas e manipuladas declarativamente.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Em questões comparativas, procure a restrição de um único pai no modelo hierárquico e a maior flexibilidade de ligações no modelo em rede.",
    "review_summary": "Modelos de dados — Modelo em rede. O modelo em rede amplia a flexibilidade do hierárquico ao permitir múltiplas ligações entre registros. Gabarito: A."
  }
}
```

## Questão 0007

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0007",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelos de dados",
  "subtopic": "Modelo orientado a objetos",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um sistema precisa persistir objetos complexos, mantendo atributos e operações associados a tipos de objetos, com suporte a identidade e mecanismos de herança. A abordagem de modelagem mais diretamente associada a esses requisitos é:",
  "alternatives": [
    {
      "id": "A",
      "text": "modelo hierárquico.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O modelo orientado a objetos representa dados como objetos com identidade, estado e, conforme o modelo, comportamento e hierarquia de tipos. A necessidade explícita de objetos, identidade, operações e herança aponta para a abordagem orientada a objetos. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "modelo relacional puro.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O modelo orientado a objetos representa dados como objetos com identidade, estado e, conforme o modelo, comportamento e hierarquia de tipos. A necessidade explícita de objetos, identidade, operações e herança aponta para a abordagem orientada a objetos. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "modelo orientado a objetos.",
      "is_correct": true,
      "explanation": "Correta. O modelo orientado a objetos representa dados como objetos com identidade, estado e, conforme o modelo, comportamento e hierarquia de tipos. Aplicando ao enunciado: A necessidade explícita de objetos, identidade, operações e herança aponta para a abordagem orientada a objetos."
    },
    {
      "id": "D",
      "text": "modelo em rede clássico.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O modelo orientado a objetos representa dados como objetos com identidade, estado e, conforme o modelo, comportamento e hierarquia de tipos. A necessidade explícita de objetos, identidade, operações e herança aponta para a abordagem orientada a objetos. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A necessidade explícita de objetos, identidade, operações e herança aponta para a abordagem orientada a objetos. A alternativa correta é C.",
    "theoretical_content": "Modelos orientados a objetos procuram aproximar a persistência do paradigma de programação orientada a objetos. Podem contemplar identidade de objeto, classes ou tipos, encapsulamento, herança e objetos complexos. O modelo relacional tradicional representa dados por relações e não incorpora diretamente métodos ou herança como elementos fundamentais. Sistemas objeto-relacionais combinam recursos relacionais com extensões para tipos complexos.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Se o enunciado destacar identidade de objeto, classes, herança e comportamento persistente, considere o modelo orientado a objetos.",
    "review_summary": "Modelos de dados — Modelo orientado a objetos. O modelo orientado a objetos representa dados como objetos com identidade, estado e, conforme o modelo, comportamento e hierarquia de tipos. Gabarito: C."
  }
}
```

## Questão 0008

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0008",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelagem e projeto",
  "subtopic": "Projeto conceitual e modelo ER",
  "difficulty": "easy",
  "cognitive_skill": "comprehension",
  "question_text": "Durante o levantamento de requisitos de um sistema de biblioteca, o analista identifica as entidades Livro, Usuário e Empréstimo, seus atributos e os relacionamentos entre elas, sem definir tipos SQL ou índices. Essa atividade corresponde ao projeto:",
  "alternatives": [
    {
      "id": "A",
      "text": "físico.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O projeto conceitual descreve os dados e regras do domínio em alto nível, sem depender de detalhes de um SGBD. A atividade identifica entidades, atributos e relações sem decisões tecnológicas ou físicas. Isso caracteriza o projeto conceitual. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "lógico relacional já implementado.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O projeto conceitual descreve os dados e regras do domínio em alto nível, sem depender de detalhes de um SGBD. A atividade identifica entidades, atributos e relações sem decisões tecnológicas ou físicas. Isso caracteriza o projeto conceitual. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "conceitual.",
      "is_correct": true,
      "explanation": "Correta. O projeto conceitual descreve os dados e regras do domínio em alto nível, sem depender de detalhes de um SGBD. Aplicando ao enunciado: A atividade identifica entidades, atributos e relações sem decisões tecnológicas ou físicas. Isso caracteriza o projeto conceitual."
    },
    {
      "id": "D",
      "text": "de otimização de consultas.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O projeto conceitual descreve os dados e regras do domínio em alto nível, sem depender de detalhes de um SGBD. A atividade identifica entidades, atributos e relações sem decisões tecnológicas ou físicas. Isso caracteriza o projeto conceitual. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A atividade identifica entidades, atributos e relações sem decisões tecnológicas ou físicas. Isso caracteriza o projeto conceitual. A alternativa correta é C.",
    "theoretical_content": "O projeto conceitual busca representar o minimundo por meio de conceitos como entidades, atributos, relacionamentos, cardinalidades e restrições. O modelo entidade-relacionamento é amplamente utilizado nessa etapa. Não se escolhem ainda tipos específicos de um SGBD, índices ou organização de arquivos. O objetivo é compreender o domínio e validar a estrutura com usuários e especialistas.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Projeto conceitual responde 'quais dados e regras existem no domínio?', não 'como serão armazenados no SGBD?'.",
    "review_summary": "Modelagem e projeto — Projeto conceitual e modelo ER. O projeto conceitual descreve os dados e regras do domínio em alto nível, sem depender de detalhes de um SGBD. Gabarito: C."
  }
}
```

## Questão 0009

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0009",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelagem e projeto",
  "subtopic": "Entidade e atributo",
  "difficulty": "easy",
  "cognitive_skill": "comprehension",
  "question_text": "No modelo entidade-relacionamento, em um sistema de recursos humanos, Empregado representa um conjunto de objetos do domínio, enquanto data_de_admissao descreve uma propriedade de cada empregado. Esses elementos são, respectivamente:",
  "alternatives": [
    {
      "id": "A",
      "text": "atributo e entidade.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Entidade representa um tipo de objeto distinguível do domínio; atributo descreve uma propriedade da entidade ou relacionamento. Empregado é o objeto conceitual; data_de_admissao é uma característica desse objeto. Logo, entidade e atributo. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "entidade e atributo.",
      "is_correct": true,
      "explanation": "Correta. Entidade representa um tipo de objeto distinguível do domínio; atributo descreve uma propriedade da entidade ou relacionamento. Aplicando ao enunciado: Empregado é o objeto conceitual; data_de_admissao é uma característica desse objeto. Logo, entidade e atributo."
    },
    {
      "id": "C",
      "text": "relacionamento e chave estrangeira.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Entidade representa um tipo de objeto distinguível do domínio; atributo descreve uma propriedade da entidade ou relacionamento. Empregado é o objeto conceitual; data_de_admissao é uma característica desse objeto. Logo, entidade e atributo. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "tupla e domínio.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Entidade representa um tipo de objeto distinguível do domínio; atributo descreve uma propriedade da entidade ou relacionamento. Empregado é o objeto conceitual; data_de_admissao é uma característica desse objeto. Logo, entidade e atributo. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "Empregado é o objeto conceitual; data_de_admissao é uma característica desse objeto. Logo, entidade e atributo. A alternativa correta é B.",
    "theoretical_content": "Uma entidade representa um conjunto de ocorrências com identidade própria, como empregados, departamentos ou projetos. Atributos descrevem propriedades, como nome, matrícula e data de admissão. Um atributo pode ser simples ou composto, monovalorado ou multivalorado, armazenado ou derivado. Relacionamentos representam associações entre entidades.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Em diagramas ER, pergunte se o elemento é algo sobre o qual se deseja manter registros ou uma propriedade desse elemento.",
    "review_summary": "Modelagem e projeto — Entidade e atributo. Entidade representa um tipo de objeto distinguível do domínio; atributo descreve uma propriedade da entidade ou relacionamento. Gabarito: B."
  }
}
```

## Questão 0010

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0010",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelagem e projeto",
  "subtopic": "Cardinalidade mínima e participação",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Considere o relacionamento entre Departamento e Empregado, no qual todo empregado deve pertencer a exatamente um departamento, mas um departamento pode existir sem empregados. A participação mínima é:",
  "alternatives": [
    {
      "id": "A",
      "text": "obrigatória para Departamento e opcional para Empregado.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. A cardinalidade mínima indica se a participação é obrigatória (mínimo 1) ou opcional (mínimo 0). O departamento pode ter zero empregados, logo sua participação é opcional. O empregado não pode existir sem departamento, logo sua participação é obrigatória. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "opcional para Departamento e obrigatória para Empregado.",
      "is_correct": true,
      "explanation": "Correta. A cardinalidade mínima indica se a participação é obrigatória (mínimo 1) ou opcional (mínimo 0). Aplicando ao enunciado: O departamento pode ter zero empregados, logo sua participação é opcional. O empregado não pode existir sem departamento, logo sua participação é obrigatória."
    },
    {
      "id": "C",
      "text": "obrigatória para ambos.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. A cardinalidade mínima indica se a participação é obrigatória (mínimo 1) ou opcional (mínimo 0). O departamento pode ter zero empregados, logo sua participação é opcional. O empregado não pode existir sem departamento, logo sua participação é obrigatória. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "opcional para ambos.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. A cardinalidade mínima indica se a participação é obrigatória (mínimo 1) ou opcional (mínimo 0). O departamento pode ter zero empregados, logo sua participação é opcional. O empregado não pode existir sem departamento, logo sua participação é obrigatória. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O departamento pode ter zero empregados, logo sua participação é opcional. O empregado não pode existir sem departamento, logo sua participação é obrigatória. A alternativa correta é B.",
    "theoretical_content": "A regra 'todo empregado deve pertencer a exatamente um departamento' estabelece participação obrigatória do lado Empregado, com mínimo 1 e máximo 1. A possibilidade de departamento sem empregados estabelece mínimo 0 no lado Departamento. A cardinalidade mínima não deve ser confundida com a máxima: mínimo define obrigatoriedade, máximo define limite de associações.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Traduza expressões do enunciado: 'pode não ter nenhum' indica mínimo zero; 'deve pertencer' indica mínimo um.",
    "review_summary": "Modelagem e projeto — Cardinalidade mínima e participação. A cardinalidade mínima indica se a participação é obrigatória (mínimo 1) ou opcional (mínimo 0). Gabarito: B."
  }
}
```

## Questão 0011

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0011",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelagem e projeto",
  "subtopic": "Atributo derivado",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um cadastro de pessoas, a idade é calculada a partir da data de nascimento e da data corrente. No modelo ER, idade é um exemplo de atributo:",
  "alternatives": [
    {
      "id": "A",
      "text": "multivalorado.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Atributo derivado é obtido por cálculo a partir de outros atributos ou dados disponíveis. A idade é calculada com base na data de nascimento e na data atual, logo é derivada. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "composto.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Atributo derivado é obtido por cálculo a partir de outros atributos ou dados disponíveis. A idade é calculada com base na data de nascimento e na data atual, logo é derivada. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "derivado.",
      "is_correct": true,
      "explanation": "Correta. Atributo derivado é obtido por cálculo a partir de outros atributos ou dados disponíveis. Aplicando ao enunciado: A idade é calculada com base na data de nascimento e na data atual, logo é derivada."
    },
    {
      "id": "D",
      "text": "identificador parcial.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Atributo derivado é obtido por cálculo a partir de outros atributos ou dados disponíveis. A idade é calculada com base na data de nascimento e na data atual, logo é derivada. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A idade é calculada com base na data de nascimento e na data atual, logo é derivada. A alternativa correta é C.",
    "theoretical_content": "Atributos derivados não precisam necessariamente ser armazenados, pois podem ser calculados a partir de atributos-base. Idade é derivada de data de nascimento e data de referência. Atributos compostos podem ser decompostos em partes, como endereço em logradouro, número e cidade. Multivalorados admitem vários valores para uma ocorrência, como telefones. A decisão de armazenar um derivado pode envolver desempenho e consistência.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Diferencie atributo derivado (calculado), composto (decomponível) e multivalorado (vários valores).",
    "review_summary": "Modelagem e projeto — Atributo derivado. Atributo derivado é obtido por cálculo a partir de outros atributos ou dados disponíveis. Gabarito: C."
  }
}
```

## Questão 0012

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0012",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelagem e projeto",
  "subtopic": "Generalização e especialização",
  "difficulty": "hard",
  "cognitive_skill": "comprehension",
  "question_text": "Em um modelo ER estendido, a entidade Pessoa é especializada em Aluno e Servidor, que herdam atributos comuns como nome e data de nascimento. Esse mecanismo representa:",
  "alternatives": [
    {
      "id": "A",
      "text": "normalização de uma tabela em várias formas normais.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Especialização cria subtipos a partir de um supertipo; os subtipos herdam atributos e relacionamentos comuns. Pessoa é o supertipo e Aluno/Servidor são subtipos que herdam os atributos comuns. Isso caracteriza especialização. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "generalização/especialização com herança de atributos do supertipo.",
      "is_correct": true,
      "explanation": "Correta. Especialização cria subtipos a partir de um supertipo; os subtipos herdam atributos e relacionamentos comuns. Aplicando ao enunciado: Pessoa é o supertipo e Aluno/Servidor são subtipos que herdam os atributos comuns. Isso caracteriza especialização."
    },
    {
      "id": "C",
      "text": "fragmentação horizontal de uma relação.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Especialização cria subtipos a partir de um supertipo; os subtipos herdam atributos e relacionamentos comuns. Pessoa é o supertipo e Aluno/Servidor são subtipos que herdam os atributos comuns. Isso caracteriza especialização. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "replicação de dados entre nós distribuídos.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Especialização cria subtipos a partir de um supertipo; os subtipos herdam atributos e relacionamentos comuns. Pessoa é o supertipo e Aluno/Servidor são subtipos que herdam os atributos comuns. Isso caracteriza especialização. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "Pessoa é o supertipo e Aluno/Servidor são subtipos que herdam os atributos comuns. Isso caracteriza especialização. A alternativa correta é B.",
    "theoretical_content": "No modelo ER estendido, generalização abstrai características comuns de vários tipos em um supertipo; especialização divide um tipo em subtipos com propriedades específicas. A herança evita repetir atributos comuns e permite restrições de disjunção/sobreposição e totalidade/parcialidade. Isso é um recurso conceitual, diferente de normalização relacional ou fragmentação distribuída.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Identifique supertipo, subtipos e atributos herdados; não confunda herança conceitual com herança de classes de uma linguagem específica.",
    "review_summary": "Modelagem e projeto — Generalização e especialização. Especialização cria subtipos a partir de um supertipo; os subtipos herdam atributos e relacionamentos comuns. Gabarito: B."
  }
}
```

## Questão 0013

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0013",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelagem e projeto",
  "subtopic": "Projeto físico",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para uma tabela de milhões de registros consultada frequentemente por data de criação, a equipe decide criar um índice B-tree nessa coluna e particionar a tabela por intervalo de datas. Essas decisões pertencem principalmente ao projeto:",
  "alternatives": [
    {
      "id": "A",
      "text": "conceitual.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O projeto físico define estruturas concretas de armazenamento e acesso para um SGBD e uma carga de trabalho. Índice B-tree e particionamento por intervalo são estruturas de acesso/armazenamento. Portanto, são decisões físicas. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "lógico independente de SGBD.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O projeto físico define estruturas concretas de armazenamento e acesso para um SGBD e uma carga de trabalho. Índice B-tree e particionamento por intervalo são estruturas de acesso/armazenamento. Portanto, são decisões físicas. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "físico.",
      "is_correct": true,
      "explanation": "Correta. O projeto físico define estruturas concretas de armazenamento e acesso para um SGBD e uma carga de trabalho. Aplicando ao enunciado: Índice B-tree e particionamento por intervalo são estruturas de acesso/armazenamento. Portanto, são decisões físicas."
    },
    {
      "id": "D",
      "text": "de requisitos funcionais.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O projeto físico define estruturas concretas de armazenamento e acesso para um SGBD e uma carga de trabalho. Índice B-tree e particionamento por intervalo são estruturas de acesso/armazenamento. Portanto, são decisões físicas. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "Índice B-tree e particionamento por intervalo são estruturas de acesso/armazenamento. Portanto, são decisões físicas. A alternativa correta é C.",
    "theoretical_content": "O projeto físico envolve escolha de índices, organização de arquivos, particionamento, tablespaces, compressão, distribuição e parâmetros de armazenamento. Essas decisões procuram atender requisitos de desempenho, disponibilidade e custo. A modelagem conceitual não deve depender dessas escolhas; a lógica define tabelas e restrições, mas não necessariamente o índice físico específico.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Se a decisão menciona índice, particionamento, tablespace ou organização de arquivos, classifique-a como física.",
    "review_summary": "Modelagem e projeto — Projeto físico. O projeto físico define estruturas concretas de armazenamento e acesso para um SGBD e uma carga de trabalho. Gabarito: C."
  }
}
```

## Questão 0014

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0014",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelagem e projeto",
  "subtopic": "Chaves candidatas e primárias",
  "difficulty": "medium",
  "cognitive_skill": "analysis",
  "question_text": "Uma relação FUNCIONARIO possui os atributos matricula, CPF, nome e departamento. Tanto matricula quanto CPF são únicos e não nulos, e nenhum deles contém atributo desnecessário para identificar uma tupla. Nesse caso, matricula e CPF são:",
  "alternatives": [
    {
      "id": "A",
      "text": "duas chaves estrangeiras.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Chave candidata é uma superchave mínima; uma delas é escolhida como chave primária. Matricula e CPF são únicos, não nulos e mínimos; portanto, ambas são candidatas. Uma delas será selecionada como PK. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "duas superchaves que não são candidatas.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Chave candidata é uma superchave mínima; uma delas é escolhida como chave primária. Matricula e CPF são únicos, não nulos e mínimos; portanto, ambas são candidatas. Uma delas será selecionada como PK. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "duas chaves candidatas, das quais uma pode ser escolhida como chave primária.",
      "is_correct": true,
      "explanation": "Correta. Chave candidata é uma superchave mínima; uma delas é escolhida como chave primária. Aplicando ao enunciado: Matricula e CPF são únicos, não nulos e mínimos; portanto, ambas são candidatas. Uma delas será selecionada como PK."
    },
    {
      "id": "D",
      "text": "atributos derivados sem função de identificação.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Chave candidata é uma superchave mínima; uma delas é escolhida como chave primária. Matricula e CPF são únicos, não nulos e mínimos; portanto, ambas são candidatas. Uma delas será selecionada como PK. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "Matricula e CPF são únicos, não nulos e mínimos; portanto, ambas são candidatas. Uma delas será selecionada como PK. A alternativa correta é C.",
    "theoretical_content": "Uma superchave identifica unicamente tuplas, mas pode conter atributos excedentes. Uma chave candidata é uma superchave mínima. Se há mais de uma chave candidata, uma é escolhida como primária e as demais são chaves alternativas. A chave estrangeira estabelece referência entre relações. A escolha da chave primária considera estabilidade, simplicidade e regras do domínio.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Diferencie superchave (pode ter atributos excedentes) de chave candidata (mínima).",
    "review_summary": "Modelagem e projeto — Chaves candidatas e primárias. Chave candidata é uma superchave mínima; uma delas é escolhida como chave primária. Gabarito: C."
  }
}
```

## Questão 0015

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0015",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelagem e projeto",
  "subtopic": "Integridade referencial",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em um banco relacional, a restrição que impede a inclusão de um valor em uma chave estrangeira quando não existe valor correspondente na chave referenciada, ressalvadas as regras aplicáveis a valores nulos, é denominada:",
  "alternatives": [
    {
      "id": "A",
      "text": "integridade de entidade.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Integridade referencial exige que valores de chaves estrangeiras correspondam a chaves candidatas existentes na relação referenciada, conforme as regras de nulidade. A regra descrita controla referências entre tabelas e evita registros órfãos. Logo, é integridade referencial. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "integridade referencial.",
      "is_correct": true,
      "explanation": "Correta. Integridade referencial exige que valores de chaves estrangeiras correspondam a chaves candidatas existentes na relação referenciada, conforme as regras de nulidade. Aplicando ao enunciado: A regra descrita controla referências entre tabelas e evita registros órfãos. Logo, é integridade referencial."
    },
    {
      "id": "C",
      "text": "dependência funcional trivial.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Integridade referencial exige que valores de chaves estrangeiras correspondam a chaves candidatas existentes na relação referenciada, conforme as regras de nulidade. A regra descrita controla referências entre tabelas e evita registros órfãos. Logo, é integridade referencial. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "restrição de domínio.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Integridade referencial exige que valores de chaves estrangeiras correspondam a chaves candidatas existentes na relação referenciada, conforme as regras de nulidade. A regra descrita controla referências entre tabelas e evita registros órfãos. Logo, é integridade referencial. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A regra descrita controla referências entre tabelas e evita registros órfãos. Logo, é integridade referencial. A alternativa correta é B.",
    "theoretical_content": "A integridade de entidade determina que a chave primária não seja nula. A integridade referencial mantém a coerência entre relações: uma FK deve referenciar uma chave válida na tabela-pai, ou ser nula quando permitido. Restrições de domínio limitam valores admissíveis de um atributo, como tipo, faixa ou conjunto de valores. Dependências funcionais são conceitos de projeto e normalização.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "PK nula remete à integridade de entidade; FK sem correspondência remete à integridade referencial.",
    "review_summary": "Modelagem e projeto — Integridade referencial. Integridade referencial exige que valores de chaves estrangeiras correspondam a chaves candidatas existentes na relação referenciada, conforme as regras de nulidade. Gabarito: B."
  }
}
```

## Questão 0016

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0016",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelagem e projeto",
  "subtopic": "Primeira Forma Normal",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma relação possui a coluna telefones, na qual cada linha armazena valores como '84-1111; 84-2222'. Para atender à Primeira Forma Normal no modelo relacional clássico, a estrutura deve:",
  "alternatives": [
    {
      "id": "A",
      "text": "manter a lista textual, desde que a coluna seja VARCHAR.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. A 1FN exige valores atômicos em cada posição da relação, segundo o domínio adotado, e ausência de grupos repetitivos não tratados. A lista de números representa múltiplos valores em uma célula. Separá-los em ocorrências relacionadas atende melhor à 1FN. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "substituir o campo por valores atômicos, por exemplo, em linhas de uma relação associada.",
      "is_correct": true,
      "explanation": "Correta. A 1FN exige valores atômicos em cada posição da relação, segundo o domínio adotado, e ausência de grupos repetitivos não tratados. Aplicando ao enunciado: A lista de números representa múltiplos valores em uma célula. Separá-los em ocorrências relacionadas atende melhor à 1FN."
    },
    {
      "id": "C",
      "text": "eliminar a chave primária.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. A 1FN exige valores atômicos em cada posição da relação, segundo o domínio adotado, e ausência de grupos repetitivos não tratados. A lista de números representa múltiplos valores em uma célula. Separá-los em ocorrências relacionadas atende melhor à 1FN. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "criar obrigatoriamente um índice para cada telefone.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. A 1FN exige valores atômicos em cada posição da relação, segundo o domínio adotado, e ausência de grupos repetitivos não tratados. A lista de números representa múltiplos valores em uma célula. Separá-los em ocorrências relacionadas atende melhor à 1FN. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A lista de números representa múltiplos valores em uma célula. Separá-los em ocorrências relacionadas atende melhor à 1FN. A alternativa correta é B.",
    "theoretical_content": "A primeira forma normal exige que cada atributo contenha valores atômicos no contexto do domínio relacional adotado. Uma lista de telefones em uma única célula dificulta validação, busca e manutenção. Uma solução comum é criar uma relação TELEFONE com uma linha por número e uma FK para a pessoa. A atomicidade é semântica, não depende apenas do tipo VARCHAR nem da existência de índice.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "A 1FN não significa apenas escolher um tipo SQL simples; avalie se há múltiplos valores dentro de um atributo.",
    "review_summary": "Modelagem e projeto — Primeira Forma Normal. A 1FN exige valores atômicos em cada posição da relação, segundo o domínio adotado, e ausência de grupos repetitivos não tratados. Gabarito: B."
  }
}
```

## Questão 0017

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0017",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelagem e projeto",
  "subtopic": "Terceira Forma Normal",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Considere a relação FUNCIONARIO(matricula, id_departamento, nome_departamento), na qual matricula determina id_departamento e id_departamento determina nome_departamento. Admitindo que a relação esteja na 2FN, a dependência apresentada caracteriza problema tratado pela:",
  "alternatives": [
    {
      "id": "A",
      "text": "Primeira Forma Normal, por conter atributos textuais.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. A 3FN elimina dependências transitivas inadequadas de atributos não-chave em relação às chaves candidatas, conforme a definição formal. O nome do departamento não depende diretamente apenas da matrícula como fato próprio do funcionário; depende do identificador do departamento. Isso caracteriza dependência transitiva. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "Segunda Forma Normal, por existir qualquer dependência funcional.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. A 3FN elimina dependências transitivas inadequadas de atributos não-chave em relação às chaves candidatas, conforme a definição formal. O nome do departamento não depende diretamente apenas da matrícula como fato próprio do funcionário; depende do identificador do departamento. Isso caracteriza dependência transitiva. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "Terceira Forma Normal, por haver dependência transitiva de atributo não-chave em relação à chave.",
      "is_correct": true,
      "explanation": "Correta. A 3FN elimina dependências transitivas inadequadas de atributos não-chave em relação às chaves candidatas, conforme a definição formal. Aplicando ao enunciado: O nome do departamento não depende diretamente apenas da matrícula como fato próprio do funcionário; depende do identificador do departamento. Isso caracteriza dependência transitiva."
    },
    {
      "id": "D",
      "text": "ausência de normalização, pois relações não podem ter chaves estrangeiras.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. A 3FN elimina dependências transitivas inadequadas de atributos não-chave em relação às chaves candidatas, conforme a definição formal. O nome do departamento não depende diretamente apenas da matrícula como fato próprio do funcionário; depende do identificador do departamento. Isso caracteriza dependência transitiva. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O nome do departamento não depende diretamente apenas da matrícula como fato próprio do funcionário; depende do identificador do departamento. Isso caracteriza dependência transitiva. A alternativa correta é C.",
    "theoretical_content": "A matrícula determina o departamento e o identificador do departamento determina seu nome. Assim, o nome do departamento depende transitivamente da matrícula. A decomposição usual separa FUNCIONARIO(matricula, id_departamento) e DEPARTAMENTO(id_departamento, nome_departamento). A 3FN evita que um fato sobre departamento seja repetido em cada funcionário. A definição formal admite que, para toda dependência funcional não trivial X→A, X seja superchave ou A seja atributo primo.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Em questões de 3FN, trace a cadeia de dependências: chave → atributo não-chave → outro atributo não-chave.",
    "review_summary": "Modelagem e projeto — Terceira Forma Normal. A 3FN elimina dependências transitivas inadequadas de atributos não-chave em relação às chaves candidatas, conforme a definição formal. Gabarito: C."
  }
}
```

## Questão 0018

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0018",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelagem e projeto",
  "subtopic": "Desnormalização",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de análise de dados, uma equipe decide manter uma coluna agregada previamente calculada para reduzir o custo de consultas frequentes, aceitando maior complexidade de atualização. Essa decisão é exemplo de:",
  "alternatives": [
    {
      "id": "A",
      "text": "normalização obrigatória até a 1FN.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Desnormalização introduz redundância controlada ou estruturas derivadas para melhorar desempenho, exigindo mecanismos para manter consistência. A equipe aceita maior custo de atualização para acelerar consultas. Isso descreve uma desnormalização intencional. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "desnormalização deliberada para favorecer desempenho.",
      "is_correct": true,
      "explanation": "Correta. Desnormalização introduz redundância controlada ou estruturas derivadas para melhorar desempenho, exigindo mecanismos para manter consistência. Aplicando ao enunciado: A equipe aceita maior custo de atualização para acelerar consultas. Isso descreve uma desnormalização intencional."
    },
    {
      "id": "C",
      "text": "violação da integridade referencial por definição.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Desnormalização introduz redundância controlada ou estruturas derivadas para melhorar desempenho, exigindo mecanismos para manter consistência. A equipe aceita maior custo de atualização para acelerar consultas. Isso descreve uma desnormalização intencional. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "independência lógica de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Desnormalização introduz redundância controlada ou estruturas derivadas para melhorar desempenho, exigindo mecanismos para manter consistência. A equipe aceita maior custo de atualização para acelerar consultas. Isso descreve uma desnormalização intencional. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A equipe aceita maior custo de atualização para acelerar consultas. Isso descreve uma desnormalização intencional. A alternativa correta é B.",
    "theoretical_content": "A normalização reduz redundância e anomalias, mas pode exigir junções. Em determinadas cargas de trabalho, uma redundância controlada, como coluna derivada, tabela agregada ou materialização, pode melhorar consultas. Essa decisão aumenta o custo e a complexidade das atualizações e deve prever sincronização e validação. Desnormalização não é sinônimo de erro; é uma decisão física/lógica orientada por requisitos e mensuração.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Desnormalizar é uma troca: consultas potencialmente mais rápidas em troca de redundância e manutenção de consistência.",
    "review_summary": "Modelagem e projeto — Desnormalização. Desnormalização introduz redundância controlada ou estruturas derivadas para melhorar desempenho, exigindo mecanismos para manter consistência. Gabarito: B."
  }
}
```

## Questão 0019

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0019",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "SELECT e projeção",
  "difficulty": "easy",
  "cognitive_skill": "application",
  "question_text": "Em álgebra relacional, a operação que seleciona determinadas colunas de uma relação, produzindo uma relação com um subconjunto de atributos, corresponde à operação que em SQL é expressa principalmente pela cláusula:",
  "alternatives": [
    {
      "id": "A",
      "text": "WHERE.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Projeção seleciona atributos/colunas; seleção restringe tuplas/linhas. A questão trata de escolher colunas. Isso é projeção e corresponde à lista de seleção do comando SELECT. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "ORDER BY.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Projeção seleciona atributos/colunas; seleção restringe tuplas/linhas. A questão trata de escolher colunas. Isso é projeção e corresponde à lista de seleção do comando SELECT. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "SELECT.",
      "is_correct": true,
      "explanation": "Correta. Projeção seleciona atributos/colunas; seleção restringe tuplas/linhas. Aplicando ao enunciado: A questão trata de escolher colunas. Isso é projeção e corresponde à lista de seleção do comando SELECT."
    },
    {
      "id": "D",
      "text": "GROUP BY.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Projeção seleciona atributos/colunas; seleção restringe tuplas/linhas. A questão trata de escolher colunas. Isso é projeção e corresponde à lista de seleção do comando SELECT. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A questão trata de escolher colunas. Isso é projeção e corresponde à lista de seleção do comando SELECT. A alternativa correta é C.",
    "theoretical_content": "Na álgebra relacional, projeção (π) escolhe atributos, enquanto seleção (σ) filtra tuplas por predicado. Em SQL, a lista de expressões após SELECT define as colunas do resultado, e WHERE restringe as linhas. ORDER BY ordena o resultado e GROUP BY forma grupos para agregação. Uma distinção frequente em provas é coluna versus linha.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Projeção = colunas; seleção = linhas. Relacione SELECT à escolha de expressões e WHERE ao filtro de tuplas.",
    "review_summary": "Linguagens e SQL — SELECT e projeção. Projeção seleciona atributos/colunas; seleção restringe tuplas/linhas. Gabarito: C."
  }
}
```

## Questão 0020

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0020",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "DISTINCT",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma consulta retorna a coluna departamento_id e o requisito é apresentar cada identificador apenas uma vez, mesmo que vários servidores pertençam ao mesmo departamento. Qual recurso SQL atende diretamente ao requisito?",
  "alternatives": [
    {
      "id": "A",
      "text": "DISTINCT na lista de seleção.",
      "is_correct": true,
      "explanation": "Correta. DISTINCT elimina linhas duplicadas do conjunto de resultados considerando as expressões selecionadas. Aplicando ao enunciado: O requisito é a unicidade dos valores exibidos, não a ordenação ou filtragem de nulos. DISTINCT atende diretamente."
    },
    {
      "id": "B",
      "text": "ORDER BY departamento_id.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. DISTINCT elimina linhas duplicadas do conjunto de resultados considerando as expressões selecionadas. O requisito é a unicidade dos valores exibidos, não a ordenação ou filtragem de nulos. DISTINCT atende diretamente. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "WHERE departamento_id IS NOT NULL.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. DISTINCT elimina linhas duplicadas do conjunto de resultados considerando as expressões selecionadas. O requisito é a unicidade dos valores exibidos, não a ordenação ou filtragem de nulos. DISTINCT atende diretamente. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "HAVING COUNT(*) > 1, sem agrupamento.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. DISTINCT elimina linhas duplicadas do conjunto de resultados considerando as expressões selecionadas. O requisito é a unicidade dos valores exibidos, não a ordenação ou filtragem de nulos. DISTINCT atende diretamente. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O requisito é a unicidade dos valores exibidos, não a ordenação ou filtragem de nulos. DISTINCT atende diretamente. A alternativa correta é A.",
    "theoretical_content": "SELECT DISTINCT departamento_id FROM servidor retorna valores distintos da expressão selecionada. ORDER BY apenas ordena e não elimina duplicatas. IS NOT NULL remove nulos, mas não elimina repetições. GROUP BY também pode produzir um resultado por valor de agrupamento, mas é desnecessário quando a única necessidade é remover duplicatas.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "DISTINCT considera a combinação de todas as expressões listadas no SELECT, não apenas uma coluna arbitrária.",
    "review_summary": "Linguagens e SQL — DISTINCT. DISTINCT elimina linhas duplicadas do conjunto de resultados considerando as expressões selecionadas. Gabarito: A."
  }
}
```

## Questão 0021

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0021",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "ORDER BY",
  "difficulty": "easy",
  "cognitive_skill": "application",
  "question_text": "Para exibir servidores do maior para o menor salário, a cláusula apropriada ao final de uma consulta é:",
  "alternatives": [
    {
      "id": "A",
      "text": "GROUP BY salario DESC.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. ORDER BY define a ordenação do conjunto de resultados; DESC indica ordem decrescente. Para ordenar do maior para o menor, utiliza-se ORDER BY com DESC. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "ORDER BY salario DESC.",
      "is_correct": true,
      "explanation": "Correta. ORDER BY define a ordenação do conjunto de resultados; DESC indica ordem decrescente. Aplicando ao enunciado: Para ordenar do maior para o menor, utiliza-se ORDER BY com DESC."
    },
    {
      "id": "C",
      "text": "WHERE salario DESC.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. ORDER BY define a ordenação do conjunto de resultados; DESC indica ordem decrescente. Para ordenar do maior para o menor, utiliza-se ORDER BY com DESC. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "HAVING salario DESC.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. ORDER BY define a ordenação do conjunto de resultados; DESC indica ordem decrescente. Para ordenar do maior para o menor, utiliza-se ORDER BY com DESC. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "Para ordenar do maior para o menor, utiliza-se ORDER BY com DESC. A alternativa correta é B.",
    "theoretical_content": "ORDER BY aceita uma ou mais expressões e permite indicar ASC (crescente, padrão em SQL) ou DESC (decrescente). A ordenação do resultado não é garantida sem ORDER BY. GROUP BY agrupa linhas para agregações; WHERE filtra linhas; HAVING filtra grupos. Uma ordenação não altera os dados armazenados.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Sem ORDER BY, não presuma ordem de retorno, mesmo que consultas anteriores pareçam retornar os registros sempre na mesma sequência.",
    "review_summary": "Linguagens e SQL — ORDER BY. ORDER BY define a ordenação do conjunto de resultados; DESC indica ordem decrescente. Gabarito: B."
  }
}
```

## Questão 0022

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0022",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "WHERE versus HAVING",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Considere a necessidade de retornar apenas departamentos que possuam mais de dez servidores ativos. A consulta precisa filtrar inicialmente os servidores ativos e, depois, filtrar os grupos pelo total de servidores. A combinação adequada é:",
  "alternatives": [
    {
      "id": "A",
      "text": "HAVING ativo = 'S' e WHERE COUNT(*) > 10.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. WHERE filtra linhas antes do agrupamento; HAVING filtra grupos após a agregação. Primeiro são selecionadas as linhas ativas por WHERE; depois são agrupadas por departamento; por fim, HAVING mantém grupos com mais de dez registros. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "WHERE ativo = 'S' e HAVING COUNT(*) > 10.",
      "is_correct": true,
      "explanation": "Correta. WHERE filtra linhas antes do agrupamento; HAVING filtra grupos após a agregação. Aplicando ao enunciado: Primeiro são selecionadas as linhas ativas por WHERE; depois são agrupadas por departamento; por fim, HAVING mantém grupos com mais de dez registros."
    },
    {
      "id": "C",
      "text": "GROUP BY ativo = 'S' e ORDER BY COUNT(*) > 10.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. WHERE filtra linhas antes do agrupamento; HAVING filtra grupos após a agregação. Primeiro são selecionadas as linhas ativas por WHERE; depois são agrupadas por departamento; por fim, HAVING mantém grupos com mais de dez registros. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "DISTINCT ativo e WHERE COUNT(*) > 10.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. WHERE filtra linhas antes do agrupamento; HAVING filtra grupos após a agregação. Primeiro são selecionadas as linhas ativas por WHERE; depois são agrupadas por departamento; por fim, HAVING mantém grupos com mais de dez registros. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "Primeiro são selecionadas as linhas ativas por WHERE; depois são agrupadas por departamento; por fim, HAVING mantém grupos com mais de dez registros. A alternativa correta é B.",
    "theoretical_content": "A ordem lógica de processamento conceitual de uma consulta inclui FROM/JOIN, WHERE, GROUP BY, HAVING, SELECT e ORDER BY. Assim, condições sobre colunas individuais, como ativo = 'S', são aplicadas em WHERE. Condições sobre resultados agregados, como COUNT(*) > 10, são aplicadas em HAVING. Alguns SGBDs permitem otimizações, mas a distinção semântica permanece.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Use WHERE para condições por linha e HAVING para condições sobre grupos ou agregações.",
    "review_summary": "Linguagens e SQL — WHERE versus HAVING. WHERE filtra linhas antes do agrupamento; HAVING filtra grupos após a agregação. Gabarito: B."
  }
}
```

## Questão 0023

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0023",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "LEFT JOIN",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma equipe deseja listar todos os departamentos, inclusive aqueles que ainda não possuem servidores cadastrados. A consulta deve preservar todos os departamentos e trazer NULL nos campos do servidor quando não houver correspondência. Deve-se utilizar:",
  "alternatives": [
    {
      "id": "A",
      "text": "INNER JOIN.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. LEFT JOIN preserva todas as linhas da relação à esquerda e complementa com NULL quando não há correspondência à direita. O enunciado exige preservar todos os departamentos. Colocando Departamento à esquerda, usa-se LEFT OUTER JOIN. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "LEFT OUTER JOIN, com Departamento à esquerda.",
      "is_correct": true,
      "explanation": "Correta. LEFT JOIN preserva todas as linhas da relação à esquerda e complementa com NULL quando não há correspondência à direita. Aplicando ao enunciado: O enunciado exige preservar todos os departamentos. Colocando Departamento à esquerda, usa-se LEFT OUTER JOIN."
    },
    {
      "id": "C",
      "text": "CROSS JOIN.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. LEFT JOIN preserva todas as linhas da relação à esquerda e complementa com NULL quando não há correspondência à direita. O enunciado exige preservar todos os departamentos. Colocando Departamento à esquerda, usa-se LEFT OUTER JOIN. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "RIGHT JOIN, com Departamento à direita.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. LEFT JOIN preserva todas as linhas da relação à esquerda e complementa com NULL quando não há correspondência à direita. O enunciado exige preservar todos os departamentos. Colocando Departamento à esquerda, usa-se LEFT OUTER JOIN. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige preservar todos os departamentos. Colocando Departamento à esquerda, usa-se LEFT OUTER JOIN. A alternativa correta é B.",
    "theoretical_content": "A direção da junção importa. Com Departamento à esquerda, LEFT JOIN mantém todos os departamentos; quando não existe servidor correspondente, as colunas de Servidor são preenchidas com NULL. INNER JOIN eliminaria departamentos sem servidores. RIGHT JOIN poderia produzir resultado equivalente se as tabelas fossem invertidas, mas não é a construção indicada quando Departamento está à esquerda.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Em LEFT JOIN, a tabela à esquerda é preservada; verifique a ordem das tabelas no FROM.",
    "review_summary": "Linguagens e SQL — LEFT JOIN. LEFT JOIN preserva todas as linhas da relação à esquerda e complementa com NULL quando não há correspondência à direita. Gabarito: B."
  }
}
```

## Questão 0024

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0024",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "Subconsultas",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Uma consulta deve recuperar os servidores cujo salário seja superior à média salarial de todos os servidores. Uma forma SQL apropriada é comparar salario com:",
  "alternatives": [
    {
      "id": "A",
      "text": "a subconsulta SELECT AVG(salario) FROM servidor.",
      "is_correct": true,
      "explanation": "Correta. Subconsulta é uma consulta aninhada que pode fornecer um valor, conjunto de valores ou relação para a consulta externa. Aplicando ao enunciado: A média salarial é calculada pela função AVG e comparada ao salário de cada servidor por meio de uma subconsulta escalar."
    },
    {
      "id": "B",
      "text": "uma subconsulta SELECT COUNT(*) FROM servidor, sem conversão.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Subconsulta é uma consulta aninhada que pode fornecer um valor, conjunto de valores ou relação para a consulta externa. A média salarial é calculada pela função AVG e comparada ao salário de cada servidor por meio de uma subconsulta escalar. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "a lista completa de nomes da tabela servidor.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Subconsulta é uma consulta aninhada que pode fornecer um valor, conjunto de valores ou relação para a consulta externa. A média salarial é calculada pela função AVG e comparada ao salário de cada servidor por meio de uma subconsulta escalar. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "o resultado de ORDER BY salario DESC, sem agregação.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Subconsulta é uma consulta aninhada que pode fornecer um valor, conjunto de valores ou relação para a consulta externa. A média salarial é calculada pela função AVG e comparada ao salário de cada servidor por meio de uma subconsulta escalar. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A média salarial é calculada pela função AVG e comparada ao salário de cada servidor por meio de uma subconsulta escalar. A alternativa correta é A.",
    "theoretical_content": "Uma subconsulta escalar que retorna AVG(salario) pode ser utilizada em uma comparação: WHERE salario > (SELECT AVG(salario) FROM servidor). Como AVG retorna um único valor agregado sem GROUP BY, a subconsulta é escalar (considerando tabela não vazia; em tabela vazia AVG retorna NULL). COUNT retorna quantidade, não média; ORDER BY apenas ordena. Subconsultas também podem ser usadas com IN, EXISTS, ANY e ALL.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Identifique se a subconsulta precisa retornar um valor único, uma lista para IN ou testar existência com EXISTS.",
    "review_summary": "Linguagens e SQL — Subconsultas. Subconsulta é uma consulta aninhada que pode fornecer um valor, conjunto de valores ou relação para a consulta externa. Gabarito: A."
  }
}
```

## Questão 0025

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0025",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "NULL e IS NULL",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Em SQL, a expressão salario = NULL não é apropriada para testar se a coluna salario não possui valor. A forma correta é:",
  "alternatives": [
    {
      "id": "A",
      "text": "salario = NULL.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. NULL representa ausência ou desconhecimento de valor; comparações comuns com NULL resultam em UNKNOWN, por isso são usados IS NULL e IS NOT NULL. O teste correto de ausência de valor usa IS NULL. O operador de igualdade não é adequado para comparar com NULL. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "salario <> NULL.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. NULL representa ausência ou desconhecimento de valor; comparações comuns com NULL resultam em UNKNOWN, por isso são usados IS NULL e IS NOT NULL. O teste correto de ausência de valor usa IS NULL. O operador de igualdade não é adequado para comparar com NULL. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "salario IS NULL.",
      "is_correct": true,
      "explanation": "Correta. NULL representa ausência ou desconhecimento de valor; comparações comuns com NULL resultam em UNKNOWN, por isso são usados IS NULL e IS NOT NULL. Aplicando ao enunciado: O teste correto de ausência de valor usa IS NULL. O operador de igualdade não é adequado para comparar com NULL."
    },
    {
      "id": "D",
      "text": "salario LIKE NULL.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. NULL representa ausência ou desconhecimento de valor; comparações comuns com NULL resultam em UNKNOWN, por isso são usados IS NULL e IS NOT NULL. O teste correto de ausência de valor usa IS NULL. O operador de igualdade não é adequado para comparar com NULL. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O teste correto de ausência de valor usa IS NULL. O operador de igualdade não é adequado para comparar com NULL. A alternativa correta é C.",
    "theoretical_content": "SQL adota lógica de três valores: TRUE, FALSE e UNKNOWN. Uma comparação como salario = NULL não resulta em TRUE mesmo quando salario é NULL; o teste deve ser escrito IS NULL. WHERE mantém apenas linhas em que o predicado é TRUE. NULL não é zero, cadeia vazia nem um valor comum. Funções e operadores podem tratar NULL de maneiras específicas, como COALESCE para fornecer substituto.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Memorize IS NULL e IS NOT NULL; não substitua NULL por zero ou string vazia sem regra de negócio.",
    "review_summary": "Linguagens e SQL — NULL e IS NULL. NULL representa ausência ou desconhecimento de valor; comparações comuns com NULL resultam em UNKNOWN, por isso são usados IS NULL e IS NOT NULL. Gabarito: C."
  }
}
```

## Questão 0026

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0026",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "INSERT, UPDATE e DELETE",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em SQL, para alterar o salário de um servidor específico identificado por matricula = 100, preservando os demais registros, o comando apropriado é:",
  "alternatives": [
    {
      "id": "A",
      "text": "INSERT INTO servidor SET salario = 6000 WHERE matricula = 100.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. UPDATE modifica valores de linhas existentes; WHERE delimita as linhas afetadas. O requisito é modificar um atributo de um registro existente. UPDATE com WHERE matricula = 100 atende ao objetivo. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "UPDATE servidor SET salario = 6000 WHERE matricula = 100.",
      "is_correct": true,
      "explanation": "Correta. UPDATE modifica valores de linhas existentes; WHERE delimita as linhas afetadas. Aplicando ao enunciado: O requisito é modificar um atributo de um registro existente. UPDATE com WHERE matricula = 100 atende ao objetivo."
    },
    {
      "id": "C",
      "text": "DELETE FROM servidor WHERE matricula = 100.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. UPDATE modifica valores de linhas existentes; WHERE delimita as linhas afetadas. O requisito é modificar um atributo de um registro existente. UPDATE com WHERE matricula = 100 atende ao objetivo. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "ALTER TABLE servidor SET salario = 6000.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. UPDATE modifica valores de linhas existentes; WHERE delimita as linhas afetadas. O requisito é modificar um atributo de um registro existente. UPDATE com WHERE matricula = 100 atende ao objetivo. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O requisito é modificar um atributo de um registro existente. UPDATE com WHERE matricula = 100 atende ao objetivo. A alternativa correta é B.",
    "theoretical_content": "UPDATE tabela SET coluna = valor WHERE condição altera as linhas que satisfazem a condição. Sem WHERE, em geral, todas as linhas da tabela são atualizadas. INSERT adiciona linhas; DELETE remove linhas; ALTER TABLE modifica a definição da estrutura. A condição de identificação deve ser cuidadosamente verificada para evitar atualização em massa involuntária.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Antes de executar UPDATE ou DELETE, confira o predicado WHERE e, em operações críticas, valide a seleção com um SELECT equivalente.",
    "review_summary": "Linguagens e SQL — INSERT, UPDATE e DELETE. UPDATE modifica valores de linhas existentes; WHERE delimita as linhas afetadas. Gabarito: B."
  }
}
```

## Questão 0027

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0027",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "Chaves em SQL",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Na criação de uma tabela ITEM, a coluna pedido_id deve referenciar a chave primária da tabela PEDIDO. A restrição que declara essa referência é:",
  "alternatives": [
    {
      "id": "A",
      "text": "PRIMARY KEY (pedido_id).",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. FOREIGN KEY declara uma chave estrangeira e REFERENCES identifica a relação e a chave referenciadas. A coluna ITEM.pedido_id aponta para PEDIDO.id. Isso deve ser declarado como FOREIGN KEY com REFERENCES. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "FOREIGN KEY (pedido_id) REFERENCES PEDIDO(id).",
      "is_correct": true,
      "explanation": "Correta. FOREIGN KEY declara uma chave estrangeira e REFERENCES identifica a relação e a chave referenciadas. Aplicando ao enunciado: A coluna ITEM.pedido_id aponta para PEDIDO.id. Isso deve ser declarado como FOREIGN KEY com REFERENCES."
    },
    {
      "id": "C",
      "text": "UNIQUE (pedido_id) sem referência.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. FOREIGN KEY declara uma chave estrangeira e REFERENCES identifica a relação e a chave referenciadas. A coluna ITEM.pedido_id aponta para PEDIDO.id. Isso deve ser declarado como FOREIGN KEY com REFERENCES. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "CHECK (pedido_id = PEDIDO.id).",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. FOREIGN KEY declara uma chave estrangeira e REFERENCES identifica a relação e a chave referenciadas. A coluna ITEM.pedido_id aponta para PEDIDO.id. Isso deve ser declarado como FOREIGN KEY com REFERENCES. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A coluna ITEM.pedido_id aponta para PEDIDO.id. Isso deve ser declarado como FOREIGN KEY com REFERENCES. A alternativa correta é B.",
    "theoretical_content": "A chave primária identifica cada linha na própria tabela. A chave estrangeira estabelece uma referência a uma chave candidata de outra tabela (ou, em certas implementações, da mesma tabela). A sintaxe típica é FOREIGN KEY (pedido_id) REFERENCES PEDIDO(id). UNIQUE apenas restringe duplicidade e CHECK avalia uma condição sobre a linha; nenhum deles cria, por si só, integridade referencial entre tabelas.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Uma FK não é apenas uma coluna com nome semelhante: a restrição deve declarar a referência e o alvo.",
    "review_summary": "Linguagens e SQL — Chaves em SQL. FOREIGN KEY declara uma chave estrangeira e REFERENCES identifica a relação e a chave referenciadas. Gabarito: B."
  }
}
```

## Questão 0028

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0028",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "VIEW",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Uma visão (VIEW) em um SGBD relacional é, em sua forma tradicional:",
  "alternatives": [
    {
      "id": "A",
      "text": "uma tabela virtual definida por uma consulta, cuja definição é armazenada no catálogo.",
      "is_correct": true,
      "explanation": "Correta. VIEW é uma relação virtual derivada de uma consulta; uma materialized view armazena fisicamente resultados conforme a implementação. Aplicando ao enunciado: A questão descreve a view convencional, definida por consulta, e não uma cópia materializada."
    },
    {
      "id": "B",
      "text": "necessariamente uma cópia física e independente de todos os dados da tabela original.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. VIEW é uma relação virtual derivada de uma consulta; uma materialized view armazena fisicamente resultados conforme a implementação. A questão descreve a view convencional, definida por consulta, e não uma cópia materializada. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "um índice que ordena fisicamente todas as linhas.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. VIEW é uma relação virtual derivada de uma consulta; uma materialized view armazena fisicamente resultados conforme a implementação. A questão descreve a view convencional, definida por consulta, e não uma cópia materializada. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "um backup completo do banco de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. VIEW é uma relação virtual derivada de uma consulta; uma materialized view armazena fisicamente resultados conforme a implementação. A questão descreve a view convencional, definida por consulta, e não uma cópia materializada. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A questão descreve a view convencional, definida por consulta, e não uma cópia materializada. A alternativa correta é A.",
    "theoretical_content": "Uma view tradicional armazena a definição da consulta e apresenta seus resultados como uma tabela lógica. Ela pode simplificar consultas, abstrair estruturas e apoiar segurança, limitando colunas ou linhas expostas. Não implica necessariamente armazenamento separado dos resultados. Uma visão materializada, quando suportada, persiste o resultado e exige estratégia de atualização. Índices e backups são objetos/recursos distintos.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Não confunda VIEW com MATERIALIZED VIEW: a primeira é normalmente virtual; a segunda armazena o resultado.",
    "review_summary": "Linguagens e SQL — VIEW. VIEW é uma relação virtual derivada de uma consulta; uma materialized view armazena fisicamente resultados conforme a implementação. Gabarito: A."
  }
}
```

## Questão 0029

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0029",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "Transações e ACID",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em uma transferência bancária, o débito na conta de origem e o crédito na conta de destino devem ocorrer integralmente ou não produzir efeito algum. A propriedade ACID relacionada a esse requisito é:",
  "alternatives": [
    {
      "id": "A",
      "text": "consistência.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Atomicidade garante que a transação seja tratada como unidade indivisível: todas as operações são confirmadas ou nenhuma é efetivada. A operação deve ser indivisível: não pode ocorrer apenas o débito ou apenas o crédito. Isso é atomicidade. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "isolamento.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Atomicidade garante que a transação seja tratada como unidade indivisível: todas as operações são confirmadas ou nenhuma é efetivada. A operação deve ser indivisível: não pode ocorrer apenas o débito ou apenas o crédito. Isso é atomicidade. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "atomicidade.",
      "is_correct": true,
      "explanation": "Correta. Atomicidade garante que a transação seja tratada como unidade indivisível: todas as operações são confirmadas ou nenhuma é efetivada. Aplicando ao enunciado: A operação deve ser indivisível: não pode ocorrer apenas o débito ou apenas o crédito. Isso é atomicidade."
    },
    {
      "id": "D",
      "text": "durabilidade.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Atomicidade garante que a transação seja tratada como unidade indivisível: todas as operações são confirmadas ou nenhuma é efetivada. A operação deve ser indivisível: não pode ocorrer apenas o débito ou apenas o crédito. Isso é atomicidade. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A operação deve ser indivisível: não pode ocorrer apenas o débito ou apenas o crédito. Isso é atomicidade. A alternativa correta é C.",
    "theoretical_content": "ACID reúne atomicidade, consistência, isolamento e durabilidade. Atomicidade trata do tudo-ou-nada. Consistência exige que uma transação válida preserve as restrições do banco. Isolamento trata da interferência entre transações concorrentes. Durabilidade garante que alterações confirmadas persistam diante de falhas previstas pelo modelo do SGBD. A transferência exige atomicidade entre débito e crédito.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Associe ACID: A = tudo ou nada; C = preservação das regras; I = concorrência isolada; D = persistência após COMMIT.",
    "review_summary": "Linguagens e SQL — Transações e ACID. Atomicidade garante que a transação seja tratada como unidade indivisível: todas as operações são confirmadas ou nenhuma é efetivada. Gabarito: C."
  }
}
```

## Questão 0030

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0030",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "Níveis de isolamento",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Em um cenário concorrente, uma transação lê duas vezes a mesma linha e obtém valores diferentes porque outra transação confirmou uma atualização entre as leituras. Esse fenômeno é conhecido como:",
  "alternatives": [
    {
      "id": "A",
      "text": "leitura suja (dirty read).",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Leitura não repetível ocorre quando a mesma linha lida novamente apresenta valores diferentes devido a uma transação concorrente confirmada. A mesma linha foi lida duas vezes e teve seus valores alterados por outra transação já confirmada. Isso é non-repeatable read. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "leitura não repetível (non-repeatable read).",
      "is_correct": true,
      "explanation": "Correta. Leitura não repetível ocorre quando a mesma linha lida novamente apresenta valores diferentes devido a uma transação concorrente confirmada. Aplicando ao enunciado: A mesma linha foi lida duas vezes e teve seus valores alterados por outra transação já confirmada. Isso é non-repeatable read."
    },
    {
      "id": "C",
      "text": "leitura fantasma (phantom read), necessariamente.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Leitura não repetível ocorre quando a mesma linha lida novamente apresenta valores diferentes devido a uma transação concorrente confirmada. A mesma linha foi lida duas vezes e teve seus valores alterados por outra transação já confirmada. Isso é non-repeatable read. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "perda de atualização, exclusivamente.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Leitura não repetível ocorre quando a mesma linha lida novamente apresenta valores diferentes devido a uma transação concorrente confirmada. A mesma linha foi lida duas vezes e teve seus valores alterados por outra transação já confirmada. Isso é non-repeatable read. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A mesma linha foi lida duas vezes e teve seus valores alterados por outra transação já confirmada. Isso é non-repeatable read. A alternativa correta é B.",
    "theoretical_content": "Leitura suja é a leitura de dados escritos por uma transação ainda não confirmada. Leitura não repetível ocorre quando uma linha é lida duas vezes e seus valores mudam após commit concorrente. Leitura fantasma ocorre quando uma consulta por predicado retorna conjunto de linhas diferente em uma repetição, por inserção ou remoção concorrente que altera a condição. Perda de atualização é outro problema de concorrência.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Distinga: dirty = dado não confirmado; non-repeatable = mesma linha muda; phantom = conjunto de linhas muda.",
    "review_summary": "Linguagens e SQL — Níveis de isolamento. Leitura não repetível ocorre quando a mesma linha lida novamente apresenta valores diferentes devido a uma transação concorrente confirmada. Gabarito: B."
  }
}
```

## Questão 0031

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0031",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Linguagens e SQL",
  "subtopic": "Procedimentos, funções e gatilhos",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um SGBD, um gatilho (trigger) é um mecanismo que:",
  "alternatives": [
    {
      "id": "A",
      "text": "executa automaticamente uma ação em resposta a um evento definido sobre um objeto, como INSERT, UPDATE ou DELETE.",
      "is_correct": true,
      "explanation": "Correta. Trigger é uma rotina associada a eventos que é disparada automaticamente conforme condições e momento definidos. Aplicando ao enunciado: A característica central é o disparo automático em resposta a um evento configurado."
    },
    {
      "id": "B",
      "text": "substitui obrigatoriamente todas as consultas SQL por código externo.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Trigger é uma rotina associada a eventos que é disparada automaticamente conforme condições e momento definidos. A característica central é o disparo automático em resposta a um evento configurado. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "é sempre executado apenas quando o administrador inicia manualmente o banco.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Trigger é uma rotina associada a eventos que é disparada automaticamente conforme condições e momento definidos. A característica central é o disparo automático em resposta a um evento configurado. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "representa uma chave candidata da tabela.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Trigger é uma rotina associada a eventos que é disparada automaticamente conforme condições e momento definidos. A característica central é o disparo automático em resposta a um evento configurado. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A característica central é o disparo automático em resposta a um evento configurado. A alternativa correta é A.",
    "theoretical_content": "Gatilhos podem ser associados a eventos de manipulação de dados ou, em alguns SGBDs, eventos de esquema e sistema. Podem executar antes ou depois do evento, por linha ou por instrução, conforme a implementação. São usados para auditoria, validações e manutenção de regras, mas seu uso excessivo pode ocultar efeitos colaterais e dificultar depuração. Não são sinônimos de procedimentos armazenados, embora possam invocá-los.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Em questões sobre triggers, procure evento, momento de execução e escopo por linha ou instrução.",
    "review_summary": "Linguagens e SQL — Procedimentos, funções e gatilhos. Trigger é uma rotina associada a eventos que é disparada automaticamente conforme condições e momento definidos. Gabarito: A."
  }
}
```

## Questão 0032

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0032",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "SGBDs",
  "subtopic": "Bloqueios",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Em um protocolo de bloqueio compartilhado/exclusivo, uma transação que pretende ler um dado normalmente solicita bloqueio compartilhado, enquanto uma transação que pretende modificá-lo solicita bloqueio exclusivo. Em termos gerais:",
  "alternatives": [
    {
      "id": "A",
      "text": "bloqueios compartilhados são compatíveis com outros compartilhados, mas não com exclusivos sobre o mesmo item.",
      "is_correct": true,
      "explanation": "Correta. Bloqueio compartilhado permite leitura concorrente; bloqueio exclusivo concede acesso de escrita incompatível com outros bloqueios conflitantes. Aplicando ao enunciado: A alternativa A expressa a compatibilidade típica: S com S é permitido; S com X e X com outros bloqueios conflitantes não."
    },
    {
      "id": "B",
      "text": "bloqueios exclusivos são sempre compatíveis com qualquer outro bloqueio.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Bloqueio compartilhado permite leitura concorrente; bloqueio exclusivo concede acesso de escrita incompatível com outros bloqueios conflitantes. A alternativa A expressa a compatibilidade típica: S com S é permitido; S com X e X com outros bloqueios conflitantes não. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "bloqueios compartilhados permitem escrita concorrente irrestrita.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Bloqueio compartilhado permite leitura concorrente; bloqueio exclusivo concede acesso de escrita incompatível com outros bloqueios conflitantes. A alternativa A expressa a compatibilidade típica: S com S é permitido; S com X e X com outros bloqueios conflitantes não. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "o bloqueio exclusivo impede inclusive a leitura pela própria transação que o adquiriu.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Bloqueio compartilhado permite leitura concorrente; bloqueio exclusivo concede acesso de escrita incompatível com outros bloqueios conflitantes. A alternativa A expressa a compatibilidade típica: S com S é permitido; S com X e X com outros bloqueios conflitantes não. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A alternativa A expressa a compatibilidade típica: S com S é permitido; S com X e X com outros bloqueios conflitantes não. A alternativa correta é A.",
    "theoretical_content": "Em protocolos clássicos, várias transações podem manter bloqueios compartilhados simultaneamente para ler o mesmo item. Um bloqueio exclusivo é necessário para escrita e conflita com bloqueios compartilhados e exclusivos de outras transações. A matriz de compatibilidade pode variar em detalhes por SGBD e protocolo, mas o princípio básico é impedir leituras/escritas incompatíveis. A própria transação proprietária pode acessar o item conforme as regras do protocolo.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Lembre-se: S = shared/leitura; X = exclusive/escrita. X é incompatível com bloqueios concorrentes no mesmo item.",
    "review_summary": "SGBDs — Bloqueios. Bloqueio compartilhado permite leitura concorrente; bloqueio exclusivo concede acesso de escrita incompatível com outros bloqueios conflitantes. Gabarito: A."
  }
}
```

## Questão 0033

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0033",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "SGBDs",
  "subtopic": "Backup e recuperação",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Após uma falha de energia, o SGBD utiliza registros de log para refazer alterações de transações confirmadas e desfazer efeitos de transações não confirmadas, conforme o protocolo de recuperação. Esse processo está relacionado a:",
  "alternatives": [
    {
      "id": "A",
      "text": "recuperação de banco de dados.",
      "is_correct": true,
      "explanation": "Correta. Recuperação usa logs, checkpoints e backups para restaurar o banco a um estado consistente após falhas. Aplicando ao enunciado: A reconstrução do estado consistente após falha, com redo/undo baseado em log, é recuperação de banco de dados."
    },
    {
      "id": "B",
      "text": "normalização de relações.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Recuperação usa logs, checkpoints e backups para restaurar o banco a um estado consistente após falhas. A reconstrução do estado consistente após falha, com redo/undo baseado em log, é recuperação de banco de dados. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "projeto conceitual.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Recuperação usa logs, checkpoints e backups para restaurar o banco a um estado consistente após falhas. A reconstrução do estado consistente após falha, com redo/undo baseado em log, é recuperação de banco de dados. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "controle de acesso discricionário.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Recuperação usa logs, checkpoints e backups para restaurar o banco a um estado consistente após falhas. A reconstrução do estado consistente após falha, com redo/undo baseado em log, é recuperação de banco de dados. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A reconstrução do estado consistente após falha, com redo/undo baseado em log, é recuperação de banco de dados. A alternativa correta é A.",
    "theoretical_content": "O log de transações registra informações necessárias para recuperação, como operações e estados de commit. Dependendo do protocolo, o SGBD pode executar REDO de operações confirmadas e UNDO de operações não confirmadas. Checkpoints reduzem o trabalho de recuperação; backups permitem restaurar dados após perda ou corrupção. A recuperação é distinta de controle de acesso e de normalização.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Associe log + REDO/UNDO + checkpoint à recuperação; backup é uma cópia que apoia restauração.",
    "review_summary": "SGBDs — Backup e recuperação. Recuperação usa logs, checkpoints e backups para restaurar o banco a um estado consistente após falhas. Gabarito: A."
  }
}
```

## Questão 0034

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0034",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "SGBDs",
  "subtopic": "Controle de acesso",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em SQL, o administrador deseja conceder a um usuário permissão para consultar a tabela CLIENTE, sem conceder permissão para alterar seus registros. O comando conceitualmente adequado é:",
  "alternatives": [
    {
      "id": "A",
      "text": "GRANT SELECT ON CLIENTE TO usuario.",
      "is_correct": true,
      "explanation": "Correta. GRANT concede privilégios; REVOKE retira privilégios. Aplicando ao enunciado: O usuário precisa apenas consultar. GRANT SELECT concede esse privilégio sem autorizar alterações."
    },
    {
      "id": "B",
      "text": "GRANT UPDATE, DELETE ON CLIENTE TO usuario.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. GRANT concede privilégios; REVOKE retira privilégios. O usuário precisa apenas consultar. GRANT SELECT concede esse privilégio sem autorizar alterações. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "REVOKE SELECT ON CLIENTE FROM usuario.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. GRANT concede privilégios; REVOKE retira privilégios. O usuário precisa apenas consultar. GRANT SELECT concede esse privilégio sem autorizar alterações. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "ALTER TABLE CLIENTE ADD usuario.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. GRANT concede privilégios; REVOKE retira privilégios. O usuário precisa apenas consultar. GRANT SELECT concede esse privilégio sem autorizar alterações. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O usuário precisa apenas consultar. GRANT SELECT concede esse privilégio sem autorizar alterações. A alternativa correta é A.",
    "theoretical_content": "O controle de acesso determina quais usuários ou papéis podem executar operações sobre objetos. GRANT SELECT ON CLIENTE TO usuario concede consulta sem, por si só, conceder UPDATE ou DELETE. Privilégios podem ser concedidos a usuários ou roles e, conforme o SGBD, podem incluir opção de repasse. REVOKE remove privilégios. O princípio do menor privilégio recomenda conceder apenas o necessário.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Leia o verbo do privilégio: SELECT consulta; INSERT inclui; UPDATE altera; DELETE remove; GRANT concede; REVOKE retira.",
    "review_summary": "SGBDs — Controle de acesso. GRANT concede privilégios; REVOKE retira privilégios. Gabarito: A."
  }
}
```

## Questão 0035

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0035",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Bancos distribuídos",
  "subtopic": "Fragmentação horizontal",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma tabela CLIENTE é dividida entre dois nós: o primeiro armazena clientes da região Norte e o segundo armazena clientes da região Sul, mantendo em cada nó todas as colunas dos clientes alocados. A técnica empregada é:",
  "alternatives": [
    {
      "id": "A",
      "text": "fragmentação vertical.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Fragmentação horizontal divide uma relação em subconjuntos de tuplas; cada fragmento mantém os atributos da relação original. A divisão foi feita por região, isto é, por conjuntos de linhas, e todas as colunas permanecem em cada fragmento. Portanto, é horizontal. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "fragmentação horizontal.",
      "is_correct": true,
      "explanation": "Correta. Fragmentação horizontal divide uma relação em subconjuntos de tuplas; cada fragmento mantém os atributos da relação original. Aplicando ao enunciado: A divisão foi feita por região, isto é, por conjuntos de linhas, e todas as colunas permanecem em cada fragmento. Portanto, é horizontal."
    },
    {
      "id": "C",
      "text": "replicação integral.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Fragmentação horizontal divide uma relação em subconjuntos de tuplas; cada fragmento mantém os atributos da relação original. A divisão foi feita por região, isto é, por conjuntos de linhas, e todas as colunas permanecem em cada fragmento. Portanto, é horizontal. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "normalização em terceira forma normal.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Fragmentação horizontal divide uma relação em subconjuntos de tuplas; cada fragmento mantém os atributos da relação original. A divisão foi feita por região, isto é, por conjuntos de linhas, e todas as colunas permanecem em cada fragmento. Portanto, é horizontal. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A divisão foi feita por região, isto é, por conjuntos de linhas, e todas as colunas permanecem em cada fragmento. Portanto, é horizontal. A alternativa correta é B.",
    "theoretical_content": "Na fragmentação horizontal, as linhas são distribuídas segundo predicados, como região, faixa de código ou unidade organizacional. Cada fragmento mantém o conjunto de atributos, mas contém apenas parte das tuplas. Na fragmentação vertical, dividem-se atributos/colunas, normalmente mantendo a chave para recomposição. Replicação mantém cópias dos dados em mais de um nó.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Horizontal divide linhas; vertical divide colunas; replicação mantém cópias.",
    "review_summary": "Bancos distribuídos — Fragmentação horizontal. Fragmentação horizontal divide uma relação em subconjuntos de tuplas; cada fragmento mantém os atributos da relação original. Gabarito: B."
  }
}
```

## Questão 0036

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0036",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Bancos distribuídos",
  "subtopic": "Replicação",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em uma arquitetura distribuída, uma mesma tabela é mantida em cópias sincronizadas em dois ou mais nós, visando disponibilidade e proximidade de leitura. Esse mecanismo é denominado:",
  "alternatives": [
    {
      "id": "A",
      "text": "fragmentação horizontal.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Replicação mantém cópias de dados em múltiplos nós, exigindo mecanismos de propagação e resolução de atualizações. A tabela é mantida em cópias em vários nós. Isso é replicação. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "replicação.",
      "is_correct": true,
      "explanation": "Correta. Replicação mantém cópias de dados em múltiplos nós, exigindo mecanismos de propagação e resolução de atualizações. Aplicando ao enunciado: A tabela é mantida em cópias em vários nós. Isso é replicação."
    },
    {
      "id": "C",
      "text": "projeção relacional.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Replicação mantém cópias de dados em múltiplos nós, exigindo mecanismos de propagação e resolução de atualizações. A tabela é mantida em cópias em vários nós. Isso é replicação. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "desnormalização de chave.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Replicação mantém cópias de dados em múltiplos nós, exigindo mecanismos de propagação e resolução de atualizações. A tabela é mantida em cópias em vários nós. Isso é replicação. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A tabela é mantida em cópias em vários nós. Isso é replicação. A alternativa correta é B.",
    "theoretical_content": "A replicação pode ser síncrona ou assíncrona, total ou parcial, conforme o sistema. Pode melhorar disponibilidade e desempenho de leitura, mas exige lidar com atraso de propagação, conflitos de escrita, consistência e recuperação de falhas. Fragmentação divide dados em partes; replicação duplica dados. Uma arquitetura pode combinar fragmentação e replicação.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Replicação = cópias; fragmentação = partes. Avalie também se a sincronização é síncrona ou assíncrona.",
    "review_summary": "Bancos distribuídos — Replicação. Replicação mantém cópias de dados em múltiplos nós, exigindo mecanismos de propagação e resolução de atualizações. Gabarito: B."
  }
}
```

## Questão 0037

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0037",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Bancos distribuídos",
  "subtopic": "Transparência de localização",
  "difficulty": "hard",
  "cognitive_skill": "comprehension",
  "question_text": "Uma aplicação consulta uma relação sem precisar conhecer em qual servidor físico seus fragmentos estão armazenados. A propriedade de um SGBD distribuído que oculta essa informação é a transparência de:",
  "alternatives": [
    {
      "id": "A",
      "text": "fragmentação.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Transparência de localização permite acessar dados sem conhecer o local físico em que estão armazenados. A aplicação não precisa conhecer o servidor ou local físico dos fragmentos. Isso é transparência de localização. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "localização.",
      "is_correct": true,
      "explanation": "Correta. Transparência de localização permite acessar dados sem conhecer o local físico em que estão armazenados. Aplicando ao enunciado: A aplicação não precisa conhecer o servidor ou local físico dos fragmentos. Isso é transparência de localização."
    },
    {
      "id": "C",
      "text": "replicação de escrita, necessariamente.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Transparência de localização permite acessar dados sem conhecer o local físico em que estão armazenados. A aplicação não precisa conhecer o servidor ou local físico dos fragmentos. Isso é transparência de localização. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "falha total do sistema.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Transparência de localização permite acessar dados sem conhecer o local físico em que estão armazenados. A aplicação não precisa conhecer o servidor ou local físico dos fragmentos. Isso é transparência de localização. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A aplicação não precisa conhecer o servidor ou local físico dos fragmentos. Isso é transparência de localização. A alternativa correta é B.",
    "theoretical_content": "A transparência em bancos distribuídos busca ocultar aspectos da distribuição. Transparência de localização esconde onde os dados residem; transparência de fragmentação oculta como as relações foram divididas; transparência de replicação oculta a existência de cópias; transparência de falhas procura mascarar falhas, dentro dos limites possíveis. Esses níveis são distintos e nem todo sistema oferece todos integralmente.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Localização = onde; fragmentação = como foi dividido; replicação = quantas cópias.",
    "review_summary": "Bancos distribuídos — Transparência de localização. Transparência de localização permite acessar dados sem conhecer o local físico em que estão armazenados. Gabarito: B."
  }
}
```

## Questão 0038

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0038",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Bancos distribuídos",
  "subtopic": "Transações distribuídas e 2PC",
  "difficulty": "hard",
  "cognitive_skill": "comprehension",
  "question_text": "Uma transação distribuída precisa confirmar alterações em dois participantes. No protocolo clássico de confirmação em duas fases (two-phase commit), a primeira fase é usada para:",
  "alternatives": [
    {
      "id": "A",
      "text": "cada participante executar imediatamente COMMIT definitivo, sem coordenação.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Two-phase commit coordena a decisão de commit: fase de preparação/votação seguida de fase de decisão. A primeira fase é a fase de preparação e votação, não o commit definitivo. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "o coordenador solicitar que os participantes preparem a transação e informem se podem confirmar.",
      "is_correct": true,
      "explanation": "Correta. Two-phase commit coordena a decisão de commit: fase de preparação/votação seguida de fase de decisão. Aplicando ao enunciado: A primeira fase é a fase de preparação e votação, não o commit definitivo."
    },
    {
      "id": "C",
      "text": "eliminar todos os logs de transação.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Two-phase commit coordena a decisão de commit: fase de preparação/votação seguida de fase de decisão. A primeira fase é a fase de preparação e votação, não o commit definitivo. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "replicar os dados sem verificar disponibilidade dos participantes.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Two-phase commit coordena a decisão de commit: fase de preparação/votação seguida de fase de decisão. A primeira fase é a fase de preparação e votação, não o commit definitivo. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A primeira fase é a fase de preparação e votação, não o commit definitivo. A alternativa correta é B.",
    "theoretical_content": "No 2PC, o coordenador solicita aos participantes que preparem a transação. Cada participante registra informações necessárias em log e responde READY/VOTE-COMMIT ou ABORT. Se todos estiverem preparados, o coordenador decide COMMIT; caso contrário, ABORT. Na segunda fase, a decisão é comunicada aos participantes. O protocolo pode bloquear em determinadas falhas, especialmente se participantes preparados não conseguirem descobrir a decisão do coordenador.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "2PC: primeira fase = prepare/vote; segunda fase = decisão commit ou abort.",
    "review_summary": "Bancos distribuídos — Transações distribuídas e 2PC. Two-phase commit coordena a decisão de commit: fase de preparação/votação seguida de fase de decisão. Gabarito: B."
  }
}
```

## Questão 0039

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0039",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Bancos distribuídos",
  "subtopic": "Consistência eventual",
  "difficulty": "hard",
  "cognitive_skill": "comprehension",
  "question_text": "Em um sistema distribuído com replicação assíncrona, após uma atualização, diferentes réplicas podem apresentar temporariamente valores distintos, mas tendem a convergir se novas atualizações cessarem e a comunicação for restabelecida. Esse comportamento é conhecido como:",
  "alternatives": [
    {
      "id": "A",
      "text": "consistência eventual.",
      "is_correct": true,
      "explanation": "Correta. Consistência eventual permite divergência temporária entre réplicas, com convergência sob condições apropriadas. Aplicando ao enunciado: O enunciado descreve divergência temporária e convergência posterior, definição de consistência eventual."
    },
    {
      "id": "B",
      "text": "atomicidade local obrigatória em todos os nós.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Consistência eventual permite divergência temporária entre réplicas, com convergência sob condições apropriadas. O enunciado descreve divergência temporária e convergência posterior, definição de consistência eventual. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "isolamento serializável global garantido.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Consistência eventual permite divergência temporária entre réplicas, com convergência sob condições apropriadas. O enunciado descreve divergência temporária e convergência posterior, definição de consistência eventual. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "integridade de entidade.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Consistência eventual permite divergência temporária entre réplicas, com convergência sob condições apropriadas. O enunciado descreve divergência temporária e convergência posterior, definição de consistência eventual. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado descreve divergência temporária e convergência posterior, definição de consistência eventual. A alternativa correta é A.",
    "theoretical_content": "Em replicação assíncrona, a propagação das atualizações pode sofrer atraso. Durante esse período, leituras em nós diferentes podem retornar versões distintas. A consistência eventual é uma garantia de convergência, não de igualdade imediata. Ela pode ser adequada a sistemas que priorizam disponibilidade e escala, mas a aplicação precisa tolerar leituras potencialmente desatualizadas e lidar com conflitos conforme o modelo adotado.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Consistência eventual não significa ausência de consistência; significa que a convergência pode não ser imediata.",
    "review_summary": "Bancos distribuídos — Consistência eventual. Consistência eventual permite divergência temporária entre réplicas, com convergência sob condições apropriadas. Gabarito: A."
  }
}
```

## Questão 0040

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0040",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "SQL",
  "subtopic": "Consulta com GROUP BY e HAVING",
  "difficulty": "hard",
  "cognitive_skill": "application",
  "question_text": "Considere a tabela VENDA(id, vendedor_id, valor). Para obter os vendedores cuja soma de vendas seja superior a 10000, a consulta correta é:",
  "alternatives": [
    {
      "id": "A",
      "text": "SELECT vendedor_id, SUM(valor) FROM VENDA WHERE SUM(valor) > 10000 GROUP BY vendedor_id;",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Condições sobre agregações de grupos são expressas em HAVING, após GROUP BY. A alternativa B executa a sequência correta: agrupar por vendedor, somar valores e filtrar os grupos por HAVING. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "SELECT vendedor_id, SUM(valor) FROM VENDA GROUP BY vendedor_id HAVING SUM(valor) > 10000;",
      "is_correct": true,
      "explanation": "Correta. Condições sobre agregações de grupos são expressas em HAVING, após GROUP BY. Aplicando ao enunciado: A alternativa B executa a sequência correta: agrupar por vendedor, somar valores e filtrar os grupos por HAVING."
    },
    {
      "id": "C",
      "text": "SELECT vendedor_id FROM VENDA ORDER BY SUM(valor) > 10000;",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Condições sobre agregações de grupos são expressas em HAVING, após GROUP BY. A alternativa B executa a sequência correta: agrupar por vendedor, somar valores e filtrar os grupos por HAVING. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "SELECT SUM(valor) FROM VENDA WHERE vendedor_id > 10000 GROUP BY valor;",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Condições sobre agregações de grupos são expressas em HAVING, após GROUP BY. A alternativa B executa a sequência correta: agrupar por vendedor, somar valores e filtrar os grupos por HAVING. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A alternativa B executa a sequência correta: agrupar por vendedor, somar valores e filtrar os grupos por HAVING. A alternativa correta é B.",
    "theoretical_content": "A consulta agrupa linhas por vendedor_id, calcula SUM(valor) para cada grupo e filtra os grupos cuja soma excede 10000 com HAVING. WHERE não pode, em geral, filtrar o resultado de uma agregação de grupo porque é aplicado antes do agrupamento. A lista SELECT inclui a chave do grupo e a expressão agregada. A consulta deve agrupar todas as colunas não agregadas selecionadas, segundo as regras do SGBD.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Quando o filtro depende de SUM, AVG ou COUNT por grupo, utilize HAVING, não WHERE.",
    "review_summary": "SQL — Consulta com GROUP BY e HAVING. Condições sobre agregações de grupos são expressas em HAVING, após GROUP BY. Gabarito: B."
  }
}
```

## Questão 0041

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0041",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "SQL",
  "subtopic": "UNION e UNION ALL",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Duas consultas retornam conjuntos compatíveis de colunas e tipos. Para combinar seus resultados preservando linhas duplicadas, deve-se utilizar:",
  "alternatives": [
    {
      "id": "A",
      "text": "UNION.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. UNION ALL concatena resultados preservando duplicatas; UNION elimina duplicatas. O requisito explícito é preservar duplicatas, portanto utiliza-se UNION ALL. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "UNION ALL.",
      "is_correct": true,
      "explanation": "Correta. UNION ALL concatena resultados preservando duplicatas; UNION elimina duplicatas. Aplicando ao enunciado: O requisito explícito é preservar duplicatas, portanto utiliza-se UNION ALL."
    },
    {
      "id": "C",
      "text": "INTERSECT.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. UNION ALL concatena resultados preservando duplicatas; UNION elimina duplicatas. O requisito explícito é preservar duplicatas, portanto utiliza-se UNION ALL. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "EXCEPT.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. UNION ALL concatena resultados preservando duplicatas; UNION elimina duplicatas. O requisito explícito é preservar duplicatas, portanto utiliza-se UNION ALL. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O requisito explícito é preservar duplicatas, portanto utiliza-se UNION ALL. A alternativa correta é B.",
    "theoretical_content": "Operadores de conjunto combinam resultados de consultas compatíveis em quantidade e tipos de colunas. UNION produz união sem duplicatas no resultado; UNION ALL preserva duplicatas e normalmente evita o custo de eliminá-las. INTERSECT retorna linhas comuns; EXCEPT (ou MINUS em alguns SGBDs) retorna linhas do primeiro resultado que não aparecem no segundo. A ordem final só é garantida com ORDER BY aplicado ao resultado combinado.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "A palavra ALL é decisiva: UNION elimina duplicatas; UNION ALL as mantém.",
    "review_summary": "SQL — UNION e UNION ALL. UNION ALL concatena resultados preservando duplicatas; UNION elimina duplicatas. Gabarito: B."
  }
}
```

## Questão 0042

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0042",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "SQL",
  "subtopic": "Funções de janela",
  "difficulty": "hard",
  "cognitive_skill": "application",
  "question_text": "Uma consulta precisa exibir cada venda e, adicionalmente, a soma acumulada do valor das vendas por vendedor, ordenada pela data, sem reduzir o resultado a uma linha por vendedor. O recurso SQL mais adequado é:",
  "alternatives": [
    {
      "id": "A",
      "text": "GROUP BY, pois mantém obrigatoriamente todas as linhas originais.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Funções de janela calculam valores sobre uma janela de linhas relacionadas sem colapsar as linhas como GROUP BY. A exigência de preservar cada venda e adicionar um agregado por linha é característica de função de janela. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "função de janela com SUM(...) OVER (PARTITION BY vendedor_id ORDER BY data).",
      "is_correct": true,
      "explanation": "Correta. Funções de janela calculam valores sobre uma janela de linhas relacionadas sem colapsar as linhas como GROUP BY. Aplicando ao enunciado: A exigência de preservar cada venda e adicionar um agregado por linha é característica de função de janela."
    },
    {
      "id": "C",
      "text": "DISTINCT, pois calcula acumulados.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Funções de janela calculam valores sobre uma janela de linhas relacionadas sem colapsar as linhas como GROUP BY. A exigência de preservar cada venda e adicionar um agregado por linha é característica de função de janela. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "HAVING, pois cria uma coluna calculada para cada linha.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Funções de janela calculam valores sobre uma janela de linhas relacionadas sem colapsar as linhas como GROUP BY. A exigência de preservar cada venda e adicionar um agregado por linha é característica de função de janela. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A exigência de preservar cada venda e adicionar um agregado por linha é característica de função de janela. A alternativa correta é B.",
    "theoretical_content": "Uma função de janela usa OVER, podendo conter PARTITION BY para dividir partições e ORDER BY para definir sequência. SUM(valor) OVER (PARTITION BY vendedor_id ORDER BY data ...) pode produzir acumulado por vendedor mantendo cada linha de venda. GROUP BY normalmente agrega e reduz o número de linhas por grupo. O enquadramento (ROWS/RANGE) e o tratamento de empates influenciam o resultado acumulado e devem ser definidos quando necessário.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "GROUP BY reduz linhas; funções de janela acrescentam cálculos relacionados às linhas sem necessariamente eliminá-las.",
    "review_summary": "SQL — Funções de janela. Funções de janela calculam valores sobre uma janela de linhas relacionadas sem colapsar as linhas como GROUP BY. Gabarito: B."
  }
}
```

## Questão 0043

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0043",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "SQL",
  "subtopic": "Índice e plano de execução",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Um administrador observa que uma consulta com filtro por uma coluna indexada continua realizando varredura completa da tabela. Essa situação pode ocorrer porque:",
  "alternatives": [
    {
      "id": "A",
      "text": "o SGBD sempre é obrigado a utilizar qualquer índice existente.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O otimizador escolhe planos de execução com base em custos estimados, seletividade, estatísticas e características físicas. O otimizador compara custos estimados e pode preferir full table scan quando isso for mais eficiente. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "o otimizador estima que a varredura sequencial tenha custo menor, por exemplo, quando grande parte das linhas será retornada.",
      "is_correct": true,
      "explanation": "Correta. O otimizador escolhe planos de execução com base em custos estimados, seletividade, estatísticas e características físicas. Aplicando ao enunciado: O otimizador compara custos estimados e pode preferir full table scan quando isso for mais eficiente."
    },
    {
      "id": "C",
      "text": "índices são usados exclusivamente em comandos INSERT.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O otimizador escolhe planos de execução com base em custos estimados, seletividade, estatísticas e características físicas. O otimizador compara custos estimados e pode preferir full table scan quando isso for mais eficiente. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "a existência de índice impede a análise de estatísticas.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O otimizador escolhe planos de execução com base em custos estimados, seletividade, estatísticas e características físicas. O otimizador compara custos estimados e pode preferir full table scan quando isso for mais eficiente. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O otimizador compara custos estimados e pode preferir full table scan quando isso for mais eficiente. A alternativa correta é B.",
    "theoretical_content": "A presença de um índice não obriga o SGBD a utilizá-lo. Se a consulta retorna grande fração da tabela, uma varredura sequencial pode ser mais eficiente que acessar o índice e buscar muitas linhas aleatoriamente. Estatísticas desatualizadas podem levar a estimativas ruins; tipos, funções, conversões e seletividade também afetam o uso do índice. A análise do plano de execução ajuda a identificar a estratégia escolhida.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Não avalie índice apenas pela existência; examine seletividade, estatísticas e plano de execução.",
    "review_summary": "SQL — Índice e plano de execução. O otimizador escolhe planos de execução com base em custos estimados, seletividade, estatísticas e características físicas. Gabarito: B."
  }
}
```

## Questão 0044

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0044",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "SGBDs",
  "subtopic": "Tipos de SGBD e arquitetura cliente-servidor",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em uma arquitetura cliente-servidor de duas camadas, uma aplicação cliente envia comandos ao servidor de banco de dados, que processa as consultas e gerencia o armazenamento. O componente que normalmente centraliza o controle dos dados é:",
  "alternatives": [
    {
      "id": "A",
      "text": "o navegador do usuário, independentemente do servidor.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Na arquitetura cliente-servidor, o SGBD no servidor processa solicitações e administra dados, enquanto o cliente apresenta a interface e a lógica da aplicação. O servidor de banco executa o SGBD, responsável pelo gerenciamento central dos dados e das operações. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "o SGBD executado no servidor.",
      "is_correct": true,
      "explanation": "Correta. Na arquitetura cliente-servidor, o SGBD no servidor processa solicitações e administra dados, enquanto o cliente apresenta a interface e a lógica da aplicação. Aplicando ao enunciado: O servidor de banco executa o SGBD, responsável pelo gerenciamento central dos dados e das operações."
    },
    {
      "id": "C",
      "text": "o modelo conceitual ER.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Na arquitetura cliente-servidor, o SGBD no servidor processa solicitações e administra dados, enquanto o cliente apresenta a interface e a lógica da aplicação. O servidor de banco executa o SGBD, responsável pelo gerenciamento central dos dados e das operações. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "o protocolo DNS.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Na arquitetura cliente-servidor, o SGBD no servidor processa solicitações e administra dados, enquanto o cliente apresenta a interface e a lógica da aplicação. O servidor de banco executa o SGBD, responsável pelo gerenciamento central dos dados e das operações. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O servidor de banco executa o SGBD, responsável pelo gerenciamento central dos dados e das operações. A alternativa correta é B.",
    "theoretical_content": "A arquitetura cliente-servidor separa clientes que solicitam serviços e servidores que os fornecem. Em duas camadas, o cliente se comunica diretamente com o servidor de banco. Em três camadas, uma camada intermediária de aplicação costuma mediar as solicitações. O SGBD controla acesso, consultas, transações e armazenamento; DNS resolve nomes de domínio e não gerencia dados relacionais.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Diferencie a arquitetura em duas camadas (cliente-SGBD) da arquitetura em três camadas (cliente-aplicação-SGBD).",
    "review_summary": "SGBDs — Tipos de SGBD e arquitetura cliente-servidor. Na arquitetura cliente-servidor, o SGBD no servidor processa solicitações e administra dados, enquanto o cliente apresenta a interface e a lógica da aplicação. Gabarito: B."
  }
}
```

## Questão 0045

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0045",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Modelagem e projeto",
  "subtopic": "Modelo lógico e SGBD",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Ao elaborar o modelo lógico relacional, o projetista define relações, atributos, chaves e restrições sem se comprometer com um SGBD específico. Essa característica demonstra que o modelo lógico:",
  "alternatives": [
    {
      "id": "A",
      "text": "é necessariamente independente de qualquer modelo de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O modelo lógico depende do paradigma/modelo de dados escolhido, mas abstrai detalhes físicos específicos de armazenamento. O enunciado cita relações e chaves, que pertencem ao modelo relacional lógico, mas exclui decisões de armazenamento físico. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "B",
      "text": "pode ser independente de detalhes físicos de implementação, mas é dependente do modelo de dados adotado, como o relacional.",
      "is_correct": true,
      "explanation": "Correta. O modelo lógico depende do paradigma/modelo de dados escolhido, mas abstrai detalhes físicos específicos de armazenamento. Aplicando ao enunciado: O enunciado cita relações e chaves, que pertencem ao modelo relacional lógico, mas exclui decisões de armazenamento físico."
    },
    {
      "id": "C",
      "text": "já determina a localização física de cada bloco de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O modelo lógico depende do paradigma/modelo de dados escolhido, mas abstrai detalhes físicos específicos de armazenamento. O enunciado cita relações e chaves, que pertencem ao modelo relacional lógico, mas exclui decisões de armazenamento físico. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "é sinônimo de projeto conceitual e não inclui chaves.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O modelo lógico depende do paradigma/modelo de dados escolhido, mas abstrai detalhes físicos específicos de armazenamento. O enunciado cita relações e chaves, que pertencem ao modelo relacional lógico, mas exclui decisões de armazenamento físico. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado cita relações e chaves, que pertencem ao modelo relacional lógico, mas exclui decisões de armazenamento físico. A alternativa correta é B.",
    "theoretical_content": "O projeto conceitual é independente de tecnologia e representa o domínio. O projeto lógico traduz o modelo conceitual para um modelo de dados, como o relacional, incluindo tabelas, chaves e restrições. O projeto físico adapta esse esquema a um SGBD concreto, escolhendo índices, particionamento, tipos e estruturas de armazenamento. Portanto, o lógico não é totalmente independente do modelo de dados, mas pode abstrair detalhes físicos.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "A sequência conceitual → lógico → físico representa níveis crescentes de compromisso com o modelo e a tecnologia.",
    "review_summary": "Modelagem e projeto — Modelo lógico e SGBD. O modelo lógico depende do paradigma/modelo de dados escolhido, mas abstrai detalhes físicos específicos de armazenamento. Gabarito: B."
  }
}
```

## Questão 0046

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0046",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Conceitos fundamentais",
  "subtopic": "Integridade e consistência",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um banco de dados, a garantia de que as operações respeitem regras como saldo não negativo, unicidade de matrícula e referência válida entre tabelas está relacionada principalmente à:",
  "alternatives": [
    {
      "id": "A",
      "text": "integridade dos dados.",
      "is_correct": true,
      "explanation": "Correta. Integridade é o conjunto de restrições que mantém os dados válidos e coerentes segundo as regras do domínio. Aplicando ao enunciado: As três regras citadas são restrições de validade dos dados. Portanto, tratam de integridade."
    },
    {
      "id": "B",
      "text": "ordenação física dos arquivos.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Integridade é o conjunto de restrições que mantém os dados válidos e coerentes segundo as regras do domínio. As três regras citadas são restrições de validade dos dados. Portanto, tratam de integridade. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "compressão de páginas.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Integridade é o conjunto de restrições que mantém os dados válidos e coerentes segundo as regras do domínio. As três regras citadas são restrições de validade dos dados. Portanto, tratam de integridade. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "transparência de localização.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Integridade é o conjunto de restrições que mantém os dados válidos e coerentes segundo as regras do domínio. As três regras citadas são restrições de validade dos dados. Portanto, tratam de integridade. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "As três regras citadas são restrições de validade dos dados. Portanto, tratam de integridade. A alternativa correta é A.",
    "theoretical_content": "Restrições de integridade incluem domínio, chave, entidade e referência, além de regras de negócio implementadas por constraints, triggers ou lógica transacional. Elas limitam estados inválidos. Ordenação, compressão e localização são aspectos físicos ou distribuídos, não substituem regras de validade dos dados. A consistência transacional depende da preservação dessas regras pelas operações confirmadas.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Associe integridade a regras que definem quais estados do banco são válidos.",
    "review_summary": "Conceitos fundamentais — Integridade e consistência. Integridade é o conjunto de restrições que mantém os dados válidos e coerentes segundo as regras do domínio. Gabarito: A."
  }
}
```

## Questão 0047

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0047",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Bancos distribuídos",
  "subtopic": "Disponibilidade e falhas parciais",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Em um sistema distribuído, um nó pode falhar ou ficar inacessível enquanto os demais continuam operando. Essa característica evidencia que sistemas distribuídos precisam tratar especialmente:",
  "alternatives": [
    {
      "id": "A",
      "text": "falhas parciais e coordenação entre componentes independentes.",
      "is_correct": true,
      "explanation": "Correta. Falhas parciais ocorrem quando alguns componentes falham enquanto outros permanecem ativos, exigindo detecção, tolerância e coordenação. Aplicando ao enunciado: O enunciado descreve um nó inacessível com os demais ativos, caracterizando falha parcial."
    },
    {
      "id": "B",
      "text": "apenas falhas totais, pois todos os nós sempre falham juntos.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Falhas parciais ocorrem quando alguns componentes falham enquanto outros permanecem ativos, exigindo detecção, tolerância e coordenação. O enunciado descreve um nó inacessível com os demais ativos, caracterizando falha parcial. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "a inexistência de latência de comunicação.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Falhas parciais ocorrem quando alguns componentes falham enquanto outros permanecem ativos, exigindo detecção, tolerância e coordenação. O enunciado descreve um nó inacessível com os demais ativos, caracterizando falha parcial. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "a garantia de que todas as mensagens chegam exatamente uma vez sem mecanismos adicionais.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. Falhas parciais ocorrem quando alguns componentes falham enquanto outros permanecem ativos, exigindo detecção, tolerância e coordenação. O enunciado descreve um nó inacessível com os demais ativos, caracterizando falha parcial. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado descreve um nó inacessível com os demais ativos, caracterizando falha parcial. A alternativa correta é A.",
    "theoretical_content": "Ao contrário de um sistema centralizado simples, em um sistema distribuído os componentes comunicam-se por rede e podem falhar de forma independente. Mensagens podem atrasar, perder-se ou duplicar-se; um nó pode ficar inacessível sem que os demais saibam imediatamente se ele falhou ou apenas está lento. Sistemas robustos usam timeouts, retries idempotentes, consenso, replicação e mecanismos de recuperação, reconhecendo limites de garantias de entrega.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Em sistemas distribuídos, considere latência, perda de mensagens, falhas parciais e incerteza sobre o estado dos nós.",
    "review_summary": "Bancos distribuídos — Disponibilidade e falhas parciais. Falhas parciais ocorrem quando alguns componentes falham enquanto outros permanecem ativos, exigindo detecção, tolerância e coordenação. Gabarito: A."
  }
}
```

## Questão 0048

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0048",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "SQL",
  "subtopic": "SQL e álgebra relacional",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Na álgebra relacional, a operação de junção natural combina relações com base nos atributos de mesmo nome e compatíveis, eliminando a repetição das colunas de junção no resultado. Em SQL, a construção mais diretamente associada a essa operação é:",
  "alternatives": [
    {
      "id": "A",
      "text": "NATURAL JOIN.",
      "is_correct": true,
      "explanation": "Correta. NATURAL JOIN realiza junção baseada automaticamente em colunas homônimas compatíveis, conforme as regras do SGBD. Aplicando ao enunciado: A junção natural é a construção SQL correspondente à operação descrita, embora a junção explícita com ON seja frequentemente preferível por clareza."
    },
    {
      "id": "B",
      "text": "CROSS JOIN.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. NATURAL JOIN realiza junção baseada automaticamente em colunas homônimas compatíveis, conforme as regras do SGBD. A junção natural é a construção SQL correspondente à operação descrita, embora a junção explícita com ON seja frequentemente preferível por clareza. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "UNION ALL.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. NATURAL JOIN realiza junção baseada automaticamente em colunas homônimas compatíveis, conforme as regras do SGBD. A junção natural é a construção SQL correspondente à operação descrita, embora a junção explícita com ON seja frequentemente preferível por clareza. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "GROUP BY.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. NATURAL JOIN realiza junção baseada automaticamente em colunas homônimas compatíveis, conforme as regras do SGBD. A junção natural é a construção SQL correspondente à operação descrita, embora a junção explícita com ON seja frequentemente preferível por clareza. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A junção natural é a construção SQL correspondente à operação descrita, embora a junção explícita com ON seja frequentemente preferível por clareza. A alternativa correta é A.",
    "theoretical_content": "NATURAL JOIN identifica colunas com nomes correspondentes nas relações e utiliza-as como condição de junção, apresentando uma única ocorrência de cada coluna de junção no resultado. Embora conciso, pode ser frágil: mudanças de esquema ou inclusão de colunas homônimas podem alterar a semântica. Em aplicações, JOIN ... ON com condição explícita costuma ser mais claro. CROSS JOIN produz produto cartesiano; UNION combina conjuntos; GROUP BY agrupa.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "NATURAL JOIN depende de nomes de colunas comuns; JOIN ON explicita a condição e reduz surpresas com mudanças de esquema.",
    "review_summary": "SQL — SQL e álgebra relacional. NATURAL JOIN realiza junção baseada automaticamente em colunas homônimas compatíveis, conforme as regras do SGBD. Gabarito: A."
  }
}
```

## Questão 0049

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0049",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "SGBDs",
  "subtopic": "Tipos de armazenamento e buffer",
  "difficulty": "hard",
  "cognitive_skill": "comprehension",
  "question_text": "Em um SGBD, o gerenciador de buffer é responsável principalmente por:",
  "alternatives": [
    {
      "id": "A",
      "text": "administrar a transferência de páginas entre memória principal e armazenamento secundário, mantendo páginas em cache.",
      "is_correct": true,
      "explanation": "Correta. O buffer manager gerencia páginas em memória e sua movimentação entre memória principal e armazenamento persistente. Aplicando ao enunciado: A função descrita é o gerenciamento de páginas entre memória e disco, típico do buffer manager."
    },
    {
      "id": "B",
      "text": "definir as regras de negócio da aplicação cliente.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O buffer manager gerencia páginas em memória e sua movimentação entre memória principal e armazenamento persistente. A função descrita é o gerenciamento de páginas entre memória e disco, típico do buffer manager. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "substituir o catálogo de metadados.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O buffer manager gerencia páginas em memória e sua movimentação entre memória principal e armazenamento persistente. A função descrita é o gerenciamento de páginas entre memória e disco, típico do buffer manager. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "conceder automaticamente todos os privilégios aos usuários.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. O buffer manager gerencia páginas em memória e sua movimentação entre memória principal e armazenamento persistente. A função descrita é o gerenciamento de páginas entre memória e disco, típico do buffer manager. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A função descrita é o gerenciamento de páginas entre memória e disco, típico do buffer manager. A alternativa correta é A.",
    "theoretical_content": "SGBDs transferem dados em unidades como páginas ou blocos. O gerenciador de buffer mantém páginas frequentemente usadas em memória, decide substituições quando há pressão de memória e coordena leitura/gravação. Políticas como LRU e variantes podem ser utilizadas, com adaptações para cargas de banco. O gerenciador de buffer interage com o subsistema de armazenamento, cache e recuperação, mas não substitui o catálogo nem a lógica da aplicação.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "Associe buffer pool a páginas em memória, cache e operações de I/O do SGBD.",
    "review_summary": "SGBDs — Tipos de armazenamento e buffer. O buffer manager gerencia páginas em memória e sua movimentação entre memória principal e armazenamento persistente. Gabarito: A."
  }
}
```

## Questão 0050

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0050",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "SQL",
  "subtopic": "LIKE e curingas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em SQL, para selecionar nomes que começam com a sequência 'Ana', independentemente dos caracteres que venham depois, utiliza-se a condição:",
  "alternatives": [
    {
      "id": "A",
      "text": "nome LIKE 'Ana%'.",
      "is_correct": true,
      "explanation": "Correta. LIKE realiza comparação por padrão textual; % representa sequência de zero ou mais caracteres e _ representa exatamente um caractere. Aplicando ao enunciado: O curinga % após Ana permite qualquer continuação, mantendo o prefixo exigido."
    },
    {
      "id": "B",
      "text": "nome LIKE '%Ana'.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. LIKE realiza comparação por padrão textual; % representa sequência de zero ou mais caracteres e _ representa exatamente um caractere. O curinga % após Ana permite qualquer continuação, mantendo o prefixo exigido. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "C",
      "text": "nome = '%Ana%'.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. LIKE realiza comparação por padrão textual; % representa sequência de zero ou mais caracteres e _ representa exatamente um caractere. O curinga % após Ana permite qualquer continuação, mantendo o prefixo exigido. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    },
    {
      "id": "D",
      "text": "nome IN ('Ana%').",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa apresenta uma interpretação incompatível com o requisito do enunciado. LIKE realiza comparação por padrão textual; % representa sequência de zero ou mais caracteres e _ representa exatamente um caractere. O curinga % após Ana permite qualquer continuação, mantendo o prefixo exigido. A formulação correta deve preservar a distinção conceitual indicada, em vez de confundir esse conceito com outra operação, nível ou mecanismo."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O curinga % após Ana permite qualquer continuação, mantendo o prefixo exigido. A alternativa correta é A.",
    "theoretical_content": "O padrão 'Ana%' exige que o texto comece com Ana e permite qualquer sequência posterior. '%Ana' identifica textos que terminam com Ana; '%Ana%' procura Ana em qualquer posição. O operador = compara igualdade literal e não interpreta curingas. IN compara com valores discretos, não padrões. Sensibilidade a maiúsculas/minúsculas depende da collation e do SGBD.",
    "bank_approach": "A questão segue características observadas no corpus COMPERVE: comando objetivo, linguagem técnica, quatro alternativas plausíveis e cobrança de compreensão ou aplicação. Os distratores exploram confusões recorrentes entre conceitos próximos, etapas de projeto, operações SQL e mecanismos de gerenciamento. O candidato deve interpretar o requisito, reconhecer a operação ou propriedade adequada e avaliar o efeito das alternativas.",
    "study_tip": "% representa zero ou mais caracteres; _ representa exatamente um caractere. A posição do curinga define prefixo, sufixo ou ocorrência interna.",
    "review_summary": "SQL — LIKE e curingas. LIKE realiza comparação por padrão textual; % representa sequência de zero ou mais caracteres e _ representa exatamente um caractere. Gabarito: A."
  }
}
```

## Gabarito consolidado

| Questão | Resposta | Questão | Resposta | Questão | Resposta | Questão | Resposta | Questão | Resposta |
|---:|:---:|---:|:---:|---:|:---:|---:|:---:|---:|:---:|
| 1 | B | 11 | C | 21 | B | 31 | A | 41 | B |
| 2 | A | 12 | B | 22 | B | 32 | A | 42 | B |
| 3 | B | 13 | C | 23 | B | 33 | A | 43 | B |
| 4 | B | 14 | C | 24 | A | 34 | A | 44 | B |
| 5 | A | 15 | B | 25 | C | 35 | B | 45 | B |
| 6 | A | 16 | B | 26 | B | 36 | B | 46 | A |
| 7 | C | 17 | C | 27 | B | 37 | B | 47 | A |
| 8 | C | 18 | B | 28 | A | 38 | B | 48 | A |
| 9 | B | 19 | C | 29 | C | 39 | A | 49 | A |
| 10 | B | 20 | A | 30 | B | 40 | B | 50 | A |

## Distribuição temática

| Eixo | Questões |
|---|---:|
| Conceitos fundamentais | 4 |
| Arquitetura e independência | 1 |
| Modelos de dados | 3 |
| Modelagem e projeto | 12 |
| Linguagens e SQL | 13 |
| SGBDs | 5 |
| Bancos distribuídos | 6 |
| SQL | 6 |

## Observações de uso

- As questões foram elaboradas a partir do conteúdo programático informado e de conceitos consolidados de Banco de Dados.
- O documento `ESTILO_DA_BANCA.md` foi utilizado como referência de formato e estilo: alternância entre questões conceituais, contextualizadas, analíticas e de aplicação; quatro alternativas; uma resposta correta; distratores plausíveis.
- Não foram fornecidas provas anteriores específicas de Banco de Dados nem bibliografia/versões de SGBD a privilegiar. Assim, as questões evitam depender de sintaxe exclusiva de um fornecedor, salvo quando explicitado.
- Alguns detalhes de SQL, transações, índices e recuperação podem variar entre SGBDs. Em preparação direcionada a um edital, prevalecem o conteúdo programático, a bibliografia indicada e a implementação especificada.
- Recomenda-se revisar os conceitos de lógica de três valores, transações distribuídas, CAP e níveis de isolamento conforme a terminologia adotada no material oficial do curso/edital.
