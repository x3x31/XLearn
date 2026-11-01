# ESTILO_DA_BANCA.md
# Engenharia reversa do estilo da COMPERVE em concursos de TI

**Versão:** 1.0  
**Data da análise:** 1º de novembro de 2026  
**Idioma:** pt-BR  
**Escopo:** provas de concursos técnico-administrativos e cargos de Tecnologia da Informação organizadas pela COMPERVE, predominantemente para UFRN e UFERSA, entre 2018 e 2025.

---

## 1. Identificação e escopo

Este documento registra a engenharia reversa de um conjunto de provas atribuídas à COMPERVE. O corpus recebido é composto por provas de concursos públicos para cargos de Tecnologia da Informação e áreas técnicas correlatas, com provas da UFRN e uma prova da UFERSA.

**Importante:** as conclusões deste documento descrevem o corpus efetivamente analisado. Não devem ser tratadas automaticamente como descrição universal de todas as provas, concursos, níveis de escolaridade ou disciplinas organizados pela COMPERVE. O recorte é especialmente representativo de concursos técnico-administrativos e de TI.

O objetivo é permitir que outra IA elabore questões inéditas compatíveis com os padrões observados, sem copiar questões originais e sem transformar ocorrências isoladas em regras obrigatórias.

## 2. Corpus analisado

### 2.1 Arquivos recebidos

Foram recebidos 17 arquivos PDF. A comparação dos arquivos identificou que `204_11-2021 - Técnico.pdf` e `205_11-2021 - Técnico.pdf` são cópias binariamente idênticas. Portanto, foram tratados como **um único caderno** para evitar duplicação de evidências.

| Arquivo | Concurso/cargo identificado no documento | Ano |
|---|---|---:|
| `101_16-2018.pdf` | UFRN — Analista de Tecnologia da Informação, cargo 101 | 2018 |
| `102_16-2018.pdf` | UFRN — Analista de Tecnologia da Informação, cargo 102 | 2018 |
| `103_16-2018.pdf` | UFRN — Analista de Tecnologia da Informação, cargo 103 | 2018 |
| `104_16-2018.pdf` | UFRN — Analista de Tecnologia da Informação, cargo 104 | 2018 |
| `101_16-2018 - Engenheiro.pdf` | UFRN — Engenheiro/Engenharia da Computação | 2018 |
| `202_12-2019 - Técnico.pdf` | UFRN — Desenhista Técnico/Webdesigner | 2019 |
| `203_12-2019 - Técnico.pdf` | UFRN — Técnico de Tecnologia da Informação | 2019 |
| `204_11-2021 - Técnico.pdf` | UFRN — Técnico em Tecnologia da Informação | 2021 |
| `101_87-2022.pdf` | UFRN — Analista de TI (Desenvolvimento) | 2022 |
| `102_87-2022.pdf` | UFRN — Analista de TI (Segurança da Informação) | 2022 |
| `203_87-2022 - Técnico.pdf` | UFRN — Técnico em Tecnologia da Informação | 2022 |
| `201_130-2023 - Técnico.pdf` | UFRN — Técnico em TI (Suporte e Redes) | 2023 |
| `202_130-2023 - Técnico.pdf` | UFRN — Técnico em TI (Sistemas) | 2023 |
| `202_16-2024.pdf` | UFERSA — Analista de Tecnologia da Informação | 2024 |
| `205_22-2025.pdf` | UFRN — Analista de TI (Ciência de Dados) | 2025 |
| `206_22-2025.pdf` | UFRN — Analista de TI (Desenvolvimento) | 2025 |

**Total considerado:** 16 cadernos distintos, após a deduplicação.  
**Questões objetivas:** 810 questões de múltipla escolha, considerando 14 cadernos com 50 questões e dois cadernos de 2025 com 55 questões cada.  
**Duplicidade:** o segundo arquivo de 2021 não foi contado novamente.

### 2.2 Limites do corpus

- O conjunto é concentrado em TI e cargos técnico-administrativos. Não representa necessariamente o comportamento da banca em áreas como saúde, educação básica, engenharia não relacionada à computação ou provas de outros níveis.
- Há vários cadernos do mesmo edital e ano. Eles ampliam a observação das questões específicas, mas não equivalem a 16 concursos independentes.
- Parte das provas compartilha seções gerais — especialmente Língua Portuguesa e Legislação. Essas seções não devem ser contadas como observações totalmente independentes quando o mesmo texto ou conjunto de questões é reaproveitado.
- Os arquivos não trouxeram gabaritos oficiais junto aos cadernos analisados. Assim, não foi possível medir a distribuição real das letras corretas.
- A análise foi feita a partir do conteúdo textual extraído dos PDFs. Em trechos com diagramação complexa, tabelas, símbolos ou códigos, a extração textual pode perder alinhamento. As conclusões sobre a estrutura geral são mais confiáveis do que estatísticas finas de comprimento de alternativas.
- Não foi feita validação externa de cada conteúdo técnico ou jurídico das questões. O objeto principal desta análise é o estilo de elaboração, não a revisão de mérito de cada resposta.

## 3. Metodologia

Foram examinados os 17 PDFs, identificados os arquivos idênticos, lidas as instruções de capa, seções, enunciados, alternativas e estruturas recorrentes. Foram comparados cadernos de diferentes anos, cargos e áreas de TI.

A análise separou:

1. **Padrões estruturais:** instruções, quantidade de questões, alternativas e distribuição por disciplina.
2. **Padrões textuais:** vocabulário, comandos, extensão e organização dos enunciados.
3. **Padrões de raciocínio:** memorização, compreensão, interpretação, aplicação e análise.
4. **Padrões de construção de alternativas:** proximidade conceitual, troca de termos, condições e procedimentos.
5. **Padrões por disciplina:** Língua Portuguesa, Legislação e Conhecimentos Específicos.
6. **Variações históricas:** diferenças entre os cadernos de 2018–2024 e os dois cadernos de 2025.

As classificações abaixo são qualitativas quando não há contagem suficientemente confiável. Não foram inventadas porcentagens para padrões que exigiriam classificação manual questão a questão.

## 4. Perfil geral observado

O padrão mais sólido do corpus é o de uma prova objetiva formal, com quatro alternativas e apenas uma resposta correta, organizada por blocos de disciplinas. Os enunciados combinam questões conceituais diretas com questões contextualizadas, situações profissionais, textos-base e conjuntos de afirmativas.

A banca não utiliza um único molde narrativo. Há questões curtas e diretas, questões longas com cenário, questões apoiadas em texto e questões com afirmativas numeradas. A reprodução fiel exige alternância compatível com o conteúdo, e não a aplicação obrigatória de um mesmo formato.

### 4.1 Classificação consolidada

| Característica | Evidência no corpus | Classificação para geração |
|---|---|---|
| Quatro alternativas A–D | Instruções expressas nos cadernos; padrão observado nos 16 cadernos distintos | **Regra obrigatória** para este recorte |
| Apenas uma alternativa correta | Instruções expressas nos cadernos | **Regra obrigatória** |
| Prova organizada em blocos de disciplinas | Estrutura explícita das capas | **Regra obrigatória** ao simular o caderno completo; não necessariamente para uma questão isolada |
| Questões diretas e conceituais | Encontradas em diferentes anos e disciplinas | **Padrão recorrente** |
| Situações contextualizadas | Encontradas em várias provas, sobretudo em TI e Legislação | **Padrão recorrente**, não obrigatório em toda questão |
| Afirmativas I, II, III e IV | Encontradas repetidamente em diferentes cadernos | **Padrão recorrente**, de uso alternado |
| Texto-base compartilhado por várias questões | Encontrado em diferentes provas, inclusive Português e Conhecimentos Específicos | **Padrão recorrente**, condicionado ao assunto |
| Personagens com nomes próprios | Ex.: questão 21 do caderno 101/2022 usa “Matias” | **Recurso ocasional**, não regra |
| Código-fonte, comandos e estruturas técnicas | Frequentes em conteúdos de TI, mas dependentes do tópico | **Orientação condicional por assunto** |
| Uma distribuição uniforme das letras do gabarito | Não há gabaritos oficiais no conjunto | **Não comprovado; não impor** |

## 5. Estrutura das provas

### 5.1 Distribuição predominante entre 2018 e 2024

Nos cadernos analisados de 2018, 2019, 2021, 2022, 2023 e 2024, a estrutura indicada nas instruções é:

| Bloco | Numeração | Quantidade |
|---|---:|---:|
| Língua Portuguesa | 01 a 10 | 10 |
| Legislação | 11 a 20 | 10 |
| Conhecimentos Específicos | 21 a 50 | 30 |
| **Total** | **01 a 50** | **50** |

### 5.2 Alteração observada em 2025

Nos dois cadernos de 2025, a distribuição passou a:

| Bloco | Numeração | Quantidade |
|---|---:|---:|
| Língua Portuguesa | 01 a 10 | 10 |
| Legislação | 11 a 25 | 15 |
| Conhecimentos Específicos | 26 a 55 | 30 |
| **Total** | **01 a 55** | **55** |

Além das questões objetivas, os dois cadernos de 2025 informam a existência de uma **Prova Teórico-Prática**. Portanto, o modelo de 2025 não deve ser confundido com o formato de 50 questões dos cadernos anteriores.

### 5.3 Prova discursiva

Diversos cadernos anteriores a 2025 apresentam proposta de redação. Nos cadernos de 2025 analisados, a instrução menciona Prova Teórico-Prática. A IA não deve acrescentar automaticamente uma redação ou prova discursiva ao gerar apenas questões objetivas; isso só deve ocorrer quando o usuário solicitar a simulação integral de um caderno e o edital/modelo pertinente justificar essa etapa.

### 5.4 Alternativas

A estrutura de quatro opções — A, B, C e D — e apenas uma correta é explicitada nas instruções dos cadernos e constitui o padrão estrutural mais seguro deste conjunto.

**Regra operacional:** toda questão objetiva gerada para reproduzir este corpus deve ter exatamente quatro alternativas, identificadas por A, B, C e D, com somente uma correta.

Não criar alternativa E. Não criar questão de múltipla seleção com mais de uma resposta correta, salvo se o usuário pedir expressamente outro formato, deixando claro que não corresponde ao padrão objetivo observado.

## 6. Construção dos enunciados

### 6.1 Linguagem

A linguagem é formal, impessoal e predominantemente técnica, com vocabulário compatível com concursos públicos. O enunciado costuma apresentar o contexto ou a premissa e terminar com um comando que delimita a tarefa do candidato.

São recorrentes construções como:

- “Com base [...]”
- “De acordo com [...]”
- “Considerando [...]”
- “Uma característica [...] é”
- “São exemplos [...]”
- “Nessa situação [...]”
- “Das afirmativas, estão corretas”
- “A partir [...] tem-se que”
- “Para responder às questões [...], considere [...]”

Essas expressões são referências de linguagem, não fórmulas que devam aparecer mecanicamente em todas as questões.

### 6.2 Formatos identificados

**A. Questão conceitual direta**

Apresenta uma definição, descrição ou situação curta e solicita a identificação do conceito, propriedade, componente ou procedimento correspondente.

Exemplo de evidência: caderno `101_16-2018.pdf`, questão 21, sobre característica de uma SAN; caderno `203_12-2019 - Técnico.pdf`, questão 21, sobre memória CMOS.

**B. Situação contextualizada**

Apresenta um cenário profissional ou institucional, identifica uma necessidade e pergunta qual conceito, tecnologia, procedimento ou solução se aplica.

Exemplo de evidência: `101_87-2022.pdf`, questão 21, em que Matias conversa com um colega sobre um problema de orientação a objetos e deve identificar o padrão Facade.

**C. Questão com afirmativas**

Apresenta proposições numeradas em algarismos romanos e solicita a combinação correta.

Exemplo de evidência: `202_16-2024.pdf`, questão 21, sobre complexidade Big O, com quatro afirmativas e alternativas que combinam I, II, III e IV.

**D. Questão baseada em texto ou contexto compartilhado**

Um texto, cenário ou conjunto de informações é apresentado antes de várias questões. O candidato precisa recuperar e interpretar a mesma base para responder a mais de um item.

Exemplo de evidência: `204_11-2021 - Técnico.pdf`, em que um contexto sobre Ubuntu e a montagem de uma sala de desenvolvimento introduz um bloco de questões.

**E. Questão de interpretação técnica**

Apresenta código, especificações, arquitetura, protocolo, configuração, tabela ou descrição de funcionamento e solicita a consequência, a propriedade ou a interpretação correta.

Exemplos: `201_130-2023 - Técnico.pdf`, questão 21, sobre USB4 2.0; e questões de desenvolvimento, redes, sistemas e segurança nos demais cadernos.

### 6.3 Contextualização

A contextualização é recorrente, especialmente nas questões específicas de TI. Os cenários incluem universidade, setor público, equipes de desenvolvimento, técnicos responsáveis por instalações, aquisição ou configuração de equipamentos e profissionais que precisam resolver problemas.

A contextualização não é obrigatória em todos os itens. Questões conceituais diretas também aparecem. Não inventar personagens apenas para dar aparência de estudo de caso.

**Orientação de reprodução:** quando o tópico permitir aplicação prática, criar um contexto curto, plausível e funcional. O cenário deve contribuir para avaliar o conteúdo, e não ser uma narrativa decorativa.

### 6.4 Personagens

Há uso de nomes próprios em situações hipotéticas, como “Matias” em `101_87-2022.pdf`, questão 21. Também aparecem referências genéricas a analistas, técnicos, servidores, coordenadores e profissionais.

Isso é um recurso, não uma regra. Alternar personagens nomeados, funções profissionais e enunciados impessoais, conforme a natureza do assunto.

## 7. Construção das alternativas e dos distratores

### 7.1 Características observadas

As alternativas geralmente pertencem à mesma categoria conceitual da resposta correta. Em questões técnicas, os distratores podem apresentar:

- Tecnologia ou protocolo semelhante, mas inadequado.
- Definição correta atribuída ao conceito errado.
- Troca de componente, camada, finalidade ou responsabilidade.
- Parâmetro técnico incorreto.
- Condição de funcionamento alterada.
- Procedimento plausível, mas inadequado ao cenário.
- Generalização de uma propriedade que só vale em determinadas condições.
- Mistura de partes verdadeiras com uma conclusão incorreta.

Exemplo: em `101_16-2018.pdf`, questão 21, as alternativas tratam de características de SAN e apresentam funcionalidades relacionadas a armazenamento, sistemas de arquivos, criptografia e transferência de dados. O candidato precisa distinguir a função específica da SAN.

Exemplo: em `203_12-2019 - Técnico.pdf`, questão 22, as alternativas comparam especificações de unidades de armazenamento, variando tipo de dispositivo, interface, rotação e características de desempenho.

### 7.2 Como construir bons distratores

Ao criar uma questão inédita:

1. Defina primeiro a resposta correta e o conceito exato que ela avalia.
2. Crie três alternativas incorretas que pertençam ao mesmo universo temático.
3. Faça cada distrator representar um erro identificável: confusão entre conceitos, troca de propriedade, condição alterada, aplicação indevida ou interpretação equivocada.
4. Evite opções absurdas, engraçadas ou fora do assunto.
5. Evite que a alternativa correta seja a única longa, detalhada ou tecnicamente precisa.
6. Mantenha paralelismo gramatical sempre que isso for natural, sem sacrificar a autenticidade.
7. Não use erros de digitação como mecanismo de dificuldade.
8. Não faça a resposta depender de uma ambiguidade não resolvida no enunciado.
9. Garanta que apenas uma alternativa seja defensável como correta.

### 7.3 Simetria das alternativas

Há alternativas com extensão e nível de detalhamento variados. A simetria perfeita não deve ser imposta como regra. O objetivo é evitar pistas involuntárias: diferenças de gramática, precisão, extensão ou vocabulário que revelem a resposta sem domínio do conteúdo.

**Classificação:** orientação preferencial, não regra absoluta.

## 8. Formatos de cobrança e raciocínio

### 8.1 Memorização e conhecimento factual

Aparecem questões que solicitam reconhecimento de definições, características, componentes, conceitos, classificações e normas.

### 8.2 Compreensão conceitual

O candidato precisa compreender uma descrição e associá-la ao conceito correspondente, distinguindo-o de conceitos próximos.

### 8.3 Aplicação

O enunciado apresenta um problema ou contexto e exige escolher a tecnologia, procedimento, configuração ou regra apropriada.

### 8.4 Análise de afirmativas

O candidato julga proposições individualmente e combina as verdadeiras. Esse formato aparece em diferentes anos e áreas, mas não deve dominar artificialmente todo o conjunto.

### 8.5 Interpretação e inferência

O candidato extrai uma consequência de texto, cenário, especificação ou regra. Em Português, isso ocorre a partir de textos-base; em TI, a partir de requisitos, arquiteturas e comportamentos técnicos; em Legislação, a partir de dispositivos normativos.

### 8.6 Nível de dificuldade

O corpus apresenta variação de dificuldade. Há itens de reconhecimento direto e itens que exigem análise de detalhes, comparação de alternativas próximas ou aplicação em contexto.

A dificuldade não decorre necessariamente de enunciados longos. Um item curto pode exigir distinção técnica precisa; um item contextualizado pode ser resolvido pela aplicação de uma regra conhecida.

**Orientação operacional:** variar os níveis de exigência de acordo com o conteúdo e com o padrão da disciplina. Não rotular toda questão contextualizada como difícil nem toda questão de definição como fácil.

## 9. Padrões por disciplina

### 9.1 Língua Portuguesa

Nos cadernos analisados, Língua Portuguesa ocupa normalmente as questões 01 a 10. Os itens são frequentemente organizados a partir de um ou mais textos-base, e várias questões podem compartilhar o mesmo texto.

Características a reproduzir:

- Texto autêntico ou texto-base extenso, quando disponível e adequado.
- Questões de compreensão global e interpretação de informações explícitas e implícitas.
- Análise de relações de sentido, escolha lexical e efeitos de sentido.
- Questões de gramática e funcionamento da língua contextualizadas no texto.
- Atenção à coesão, coerência, referenciação e organização textual.
- Comandos que exigem avaliar uma afirmação sobre o texto ou sobre um trecho.
- Alternativas que diferenciam interpretações plausíveis, mas não equivalentes.

Não reduzir Português a uma lista de regras gramaticais isoladas. A prova observada usa textos como base relevante para a avaliação.

### 9.2 Legislação

Nos cadernos até 2024, Legislação aparece normalmente nas questões 11 a 20; nos dois cadernos de 2025, ocupa as questões 11 a 25.

Características observadas:

- Cobrança de dispositivos legais e normas institucionais.
- Atenção a competências, atribuições, prazos, condições, direitos, deveres, proibições e procedimentos.
- Questões que exigem leitura cuidadosa da norma.
- Uso de situações funcionais ou institucionais para aplicar a regra.
- Alternativas que trocam autoridade competente, condição, prazo, consequência ou exceção.
- Formulações como “com base nos dispositivos”, “a partir da leitura” e “tem-se que”.

**Orientação de precisão:** ao gerar questões de legislação, utilizar a redação vigente na data indicada pelo usuário ou no contexto do material. Conferir alterações normativas. Não inventar artigo, inciso, prazo ou exceção. Distinguir texto legal de interpretação doutrinária ou jurisprudencial.

### 9.3 Conhecimentos Específicos — Tecnologia da Informação

Nos cadernos analisados, o bloco específico contém 30 questões. É o segmento mais relevante para a reprodução do estilo de TI.

Características observadas:

- Conteúdo técnico específico e terminologia própria.
- Questões diretas sobre conceitos e propriedades.
- Aplicação a problemas de suporte, redes, desenvolvimento, segurança, infraestrutura, sistemas e dados.
- Comparação entre tecnologias, padrões, protocolos, arquiteturas e ferramentas.
- Enunciados que apresentam necessidades de uma instituição ou equipe.
- Especificações técnicas e parâmetros como elementos decisivos.
- Questões com afirmativas e combinações de proposições.
- Situações em que o candidato precisa selecionar a solução mais adequada.

A área específica varia conforme o cargo: suporte e redes, sistemas, desenvolvimento, segurança da informação, ciência de dados, webdesign e engenharia da computação não devem ser tratados como se tivessem o mesmo conteúdo.

### 9.4 Particularidades de TI por subárea

**Suporte e hardware:** componentes, interfaces, memória, armazenamento, periféricos, desempenho, compatibilidade, diagnóstico e manutenção. Exemplo: `203_12-2019 - Técnico.pdf`, questões 21 e 22.

**Redes e infraestrutura:** arquiteturas, protocolos, meios de comunicação, armazenamento em rede, serviços e configurações. Exemplo: `101_16-2018.pdf`, questões 21 e 22, sobre SAN e protocolos de armazenamento.

**Sistemas operacionais e administração:** instalação, configuração, permissões, serviços, comandos, administração remota e ambientes Linux/Windows. Exemplo: `204_11-2021 - Técnico.pdf`, contexto de Ubuntu e estações de trabalho.

**Desenvolvimento e engenharia de software:** orientação a objetos, padrões de projeto, algoritmos, estruturas, linguagens, arquitetura, qualidade e processo de desenvolvimento. Exemplo: `101_87-2022.pdf`, questão 21, sobre padrão Facade; `202_16-2024.pdf`, questão 21, sobre Big O.

**Segurança da informação:** conceitos, controles, riscos, políticas, proteção de dados, normas e mecanismos de segurança. Adequar a cobrança ao programa do cargo, sem presumir que toda questão de segurança seja uma questão de legislação.

**Dados e ciência de dados:** modelagem, banco de dados, análise, processamento, estatística, aprendizado de máquina e ferramentas, conforme o conteúdo programático. O caderno de 2025 específico de Ciência de Dados é uma fonte para essa subárea, mas não autoriza generalizar suas particularidades para todos os cargos de TI.

**Webdesign:** fundamentos de web, tecnologias de interface, conteúdo, design e ferramentas relacionadas, conforme o cargo. Não transportar automaticamente o estilo de questões de infraestrutura para essa área.

## 10. Textos-base e conjuntos de questões

O uso de um texto, cenário ou conjunto de informações para várias questões é um recurso recorrente no corpus.

O enunciado pode indicar explicitamente: “Para responder às questões de X a Y, considere o texto abaixo” ou formulação equivalente.

Instruções para reprodução:

- Use um texto-base quando ele realmente permitir avaliar vários aspectos de um mesmo contexto.
- Faça cada questão avaliar uma habilidade ou aspecto diferente.
- Não torne a resposta de uma questão dependente de ter acertado a anterior.
- Não repita a mesma pergunta com pequenas alterações.
- Preserve a coerência do cenário entre as questões relacionadas.
- Não crie um texto-base longo para uma única pergunta simples, salvo quando a interpretação do texto for o próprio objeto da avaliação.

## 11. Gabarito e distribuição das respostas

Os arquivos fornecidos contêm os cadernos de questões, mas não os gabaritos oficiais correspondentes. Portanto:

- Não foi possível determinar a frequência real das letras A, B, C e D como respostas corretas.
- Não há evidência suficiente para afirmar que a COMPERVE distribui as respostas igualmente.
- Não há base para reproduzir sequências, ciclos ou padrões de letras.
- Não se deve escolher a letra correta para completar uma sequência artificial.

**Instrução para geração:** definir a resposta correta pelo conteúdo. Depois, revisar a posição das respostas para evitar padrões óbvios criados pelo próprio conjunto gerado, sem comprometer a correção técnica. A posição da resposta não deve ser usada como substituto de evidência sobre o estilo histórico.

## 12. Evolução histórica observada

### 12.1 Continuidade

Entre 2018 e 2024, há continuidade no modelo de 50 questões, quatro alternativas e divisão 10/10/30 entre Português, Legislação e Conhecimentos Específicos. As questões específicas mantêm combinação de itens diretos, técnicos e contextualizados.

### 12.2 Mudança em 2025

Nos dois cadernos de 2025, o total passa a 55 questões, com ampliação do bloco de Legislação de 10 para 15 questões, mantendo 10 de Português e 30 de Conhecimentos Específicos. Também aparece Prova Teórico-Prática.

Essa mudança deve ser registrada como característica do edital/cadernos de 2025 analisados, e não presumida para todo concurso futuro.

### 12.3 Limite da inferência histórica

O conjunto não permite afirmar que a mudança de 2025 será permanente. Para novos concursos, o formato deverá ser conferido no edital e no caderno de prova correspondente.

## 13. Catálogo de evidências representativas

| Evidência | O que demonstra |
|---|---|
| Instruções de capa dos cadernos de 2018–2025 | Quatro alternativas e uma única resposta correta |
| Cadernos de 2018–2024 | Distribuição usual 10 Português + 10 Legislação + 30 Específicas |
| `205_22-2025.pdf` e `206_22-2025.pdf` | Distribuição 10 + 15 + 30 e Prova Teórico-Prática |
| `101_16-2018.pdf`, questão 21 | Questão conceitual direta em TI, com alternativas tecnicamente próximas |
| `203_12-2019 - Técnico.pdf`, questões 21–22 | Conceito de hardware e comparação de especificações |
| `204_11-2021 - Técnico.pdf`, bloco iniciado após a questão 21 | Cenário contextual compartilhado sobre Ubuntu, equipe e configuração remota |
| `101_87-2022.pdf`, questão 21 | Situação com personagem e aplicação de padrão de projeto |
| `202_16-2024.pdf`, questão 21 | Afirmativas I–IV sobre complexidade de algoritmos |
| `201_130-2023 - Técnico.pdf`, questão 21 | Questão técnica sobre padrão USB e características de especificação |
| Cadernos de 2025, questões de Legislação | Aplicação de regras institucionais e legais em contexto |

As referências acima são exemplos representativos e não significam que o padrão esteja limitado à questão citada.

## 14. Manual operacional de reprodução

Ao elaborar questões no estilo identificado:

1. **Comece pelo conteúdo programático.** Identifique o conceito, regra, tecnologia ou habilidade que a questão deve avaliar.
2. **Escolha o formato adequado.** Use questão direta, situação contextualizada, afirmativas ou interpretação técnica conforme o assunto e os formatos observados na disciplina.
3. **Escreva um enunciado objetivo.** Use linguagem formal, técnica e clara. Inclua contexto apenas quando ele contribuir para a avaliação.
4. **Faça a pergunta ter um foco definido.** O candidato deve saber qual propriedade, consequência, conceito ou decisão precisa identificar.
5. **Crie quatro alternativas.** Todas devem ser plausíveis e relacionadas ao mesmo universo conceitual.
6. **Construa distratores com erros específicos.** Prefira confusões entre conceitos próximos, propriedades, condições, responsabilidades, parâmetros ou procedimentos.
7. **Evite pistas involuntárias.** Não deixe a correta se destacar por gramática, tamanho, precisão ou vocabulário.
8. **Verifique a unicidade da resposta.** Apenas uma alternativa pode estar correta segundo o contexto e as condições informadas.
9. **Varie a forma de cobrança.** Não produza uma sequência inteira de questões com o mesmo molde, salvo quando a amostra ou a solicitação justificar.
10. **Respeite a disciplina.** Não use código em questão de legislação ou Português apenas para imitar uma prova de TI.
11. **Use exemplos técnicos atuais.** Quando o tópico depender de versão, norma ou tecnologia, confira a referência temporal e técnica.
12. **Não copie questões.** Reproduza a lógica de elaboração, não o texto, o cenário específico ou as alternativas de uma questão original.
13. **Explique profundamente.** O comentário deve ensinar o conteúdo, e não apenas indicar a letra correta.
14. **Faça revisão técnica e pedagógica.** Corrija ambiguidades, erros factuais, desatualizações e distratores que possam ser defendidos como corretos.

## 15. Regras, preferências e recursos ocasionais

### 15.1 Regras obrigatórias neste recorte

- Quatro alternativas: A, B, C e D.
- Uma única alternativa correta.
- Linguagem formal, clara e compatível com concurso público.
- Correção técnica e conceitual.
- Enunciado com comando identificável.
- Distratores relacionados ao conteúdo e plausíveis.
- Não copiar questões originais.

### 15.2 Orientações preferenciais

- Alternar questões diretas e contextualizadas.
- Usar cenários institucionais ou profissionais quando pertinentes.
- Explorar distinções entre conceitos próximos.
- Utilizar afirmativas I–IV em parte do conjunto, sem repetição mecânica.
- Utilizar textos-base para grupos de questões quando isso for natural.
- Manter paralelismo e equilíbrio entre alternativas.
- Exigir compreensão e aplicação, além de memorização.

### 15.3 Orientações condicionais

- Inserir código-fonte quando o tópico envolver programação, consulta, script, configuração ou interpretação de código.
- Inserir tabelas, diagramas ou especificações quando o conteúdo exigir leitura desses elementos.
- Usar cenários de administração pública quando a questão tratar de serviço público, gestão, legislação ou infraestrutura institucional.
- Usar afirmativas numeradas quando houver proposições que possam ser julgadas separadamente.
- Criar texto-base compartilhado quando houver contexto suficiente para várias questões independentes.

### 15.4 Recursos ocasionais

- Personagens com nomes próprios.
- Narrativas de estudo de caso extensas.
- Formatos muito específicos de enunciado.
- Contextos corporativos ou universitários muito detalhados.

Esses recursos não devem ser obrigatórios nem aparecer em todas as questões.

## 16. PROMPT MESTRE — GERADOR DE QUESTÕES NO ESTILO DA COMPERVE

O texto a seguir está pronto para ser copiado e utilizado em outra IA. Ele deve ser utilizado em conjunto com o conteúdo programático ou tópico indicado pelo usuário.

---

### INÍCIO DO PROMPT MESTRE

Você é um elaborador de questões de concursos públicos especializado em reproduzir, com fidelidade, os padrões observados nas provas da COMPERVE descritos no documento `ESTILO_DA_BANCA.md`.

Sua tarefa é criar questões inéditas de múltipla escolha sobre o conteúdo solicitado pelo usuário. Você deve consultar e respeitar as características documentadas neste arquivo, sem inventar regras, sem copiar questões originais e sem generalizar particularidades de uma disciplina para outra.

#### A. Parâmetros da solicitação

O usuário poderá informar:

- **Banca:** COMPERVE.
- **Disciplina:** [DISCIPLINA].
- **Assunto/tópico:** [ASSUNTO].
- **Quantidade:** [NÚMERO DE QUESTÕES].
- **Dificuldade:** [FÁCIL, MÉDIA, DIFÍCIL ou VARIADA].
- **Observações adicionais:** [OPCIONAL].

Se algum parâmetro essencial estiver ausente, solicite somente a informação necessária. Não invente o conteúdo programático.

#### B. Fidelidade estrutural

1. Cada questão deverá possuir exatamente quatro alternativas: A, B, C e D.
2. Somente uma alternativa poderá estar correta.
3. Utilize linguagem formal, clara e tecnicamente adequada.
4. Construa enunciados com comando objetivo.
5. Reproduza a combinação observada de questões conceituais, interpretativas, contextualizadas e de aplicação, conforme a disciplina.
6. Não obrigue todas as questões a usar estudo de caso, personagem, afirmativas ou código.
7. Não crie alternativa E.
8. Não utilize múltiplas respostas corretas.

#### C. Estilo dos enunciados

Escolha o formato mais adequado ao assunto, considerando os padrões registrados no documento:

- Questão conceitual direta.
- Situação contextualizada.
- Problema profissional ou institucional.
- Afirmativas numeradas I, II, III e IV.
- Interpretação de texto, tabela, código, diagrama ou especificação.
- Texto-base compartilhado por várias questões, quando apropriado.

Não use um único formato repetidamente por conveniência. Varie a construção de acordo com o conteúdo e sem artificialidade.

Personagens com nomes próprios são opcionais. Não introduza nomes fictícios em toda questão.

#### D. Alternativas e distratores

As alternativas devem pertencer ao mesmo universo conceitual e apresentar plausibilidade.

Construa os distratores com mecanismos como:

- Confusão entre conceitos próximos.
- Troca de propriedades, funções ou responsabilidades.
- Alteração de condições ou parâmetros.
- Aplicação inadequada de uma regra.
- Inversão de relações.
- Generalização indevida.
- Mistura de afirmações verdadeiras e falsas.
- Procedimento tecnicamente plausível, mas inadequado ao cenário.

Evite alternativas absurdas, pistas gramaticais, erros de digitação e opções fora do assunto. Não force simetria perfeita de tamanho, mas evite que a resposta correta se destaque por extensão ou precisão.

#### E. Adequação à disciplina

Adapte a questão ao padrão específico da disciplina:

- Em Língua Portuguesa, priorize interpretação, compreensão, efeitos de sentido e funcionamento linguístico contextualizado em textos, quando pertinente.
- Em Legislação, exija leitura e aplicação precisa de normas, competências, condições, prazos, direitos, deveres e exceções. Confira a vigência normativa. Não invente dispositivos.
- Em TI, utilize conceitos, tecnologias, padrões, protocolos, arquiteturas, configurações, algoritmos, códigos e situações profissionais conforme o tópico.
- Em outras disciplinas, não transporte automaticamente formatos técnicos de TI. Use apenas padrões compatíveis com a área.

#### F. Correção e originalidade

- As questões devem ser inéditas.
- Não copie enunciados ou alternativas das provas utilizadas como referência.
- Não faça paráfrase superficial de uma questão original.
- Preserve o tipo de raciocínio e a lógica de construção da banca, mas crie outro contexto e outra formulação.
- Confirme que a alternativa indicada como correta é tecnicamente defensável.
- Garanta que nenhuma outra alternativa possa ser considerada correta sob interpretação razoável.
- Se houver incerteza normativa ou técnica, informe-a e não invente uma resposta.

#### G. Gabarito comentado — aprendizagem aprofundada

Depois de cada questão, apresente:

1. **Gabarito:** letra correta.
2. **Resolução:** explique o que o enunciado exige, quais conhecimentos são necessários e como chegar à resposta.
3. **Análise da alternativa correta:** ensine o conceito, fundamento, funcionamento, regra ou princípio que torna a opção correta.
4. **Análise de cada distrator:** explique individualmente o conceito envolvido, o erro exato, por que a afirmação não se sustenta e como poderia ser corrigida.
5. **Aprofundamento teórico:** desenvolva o conteúdo necessário para que o estudante aprenda o assunto, mesmo sem conhecimento prévio.
6. **Exemplos e comparações:** utilize exemplos concretos e compare conceitos semelhantes quando isso facilitar a compreensão.
7. **Dica de prova:** indique o detalhe que o candidato deve observar em questões semelhantes.

Não escreva comentários superficiais como “está incorreta porque o conceito é outro”. Explique qual é o conceito correto, como ele funciona e por que houve confusão.

O objetivo é que o estudante consiga resolver outra questão sobre o mesmo conteúdo, mesmo que o enunciado e as alternativas sejam diferentes.

#### H. Revisão antes de entregar

Antes de apresentar o resultado, verifique:

- Há exatamente quatro alternativas por questão?
- Existe apenas uma resposta correta?
- O enunciado é claro e não contém informação contraditória?
- Os distratores são plausíveis?
- A questão é compatível com a disciplina?
- O estilo foi reproduzido sem impor formatos não comprovados?
- O conteúdo está tecnicamente atualizado?
- A explicação ensina o conceito e analisa todas as alternativas?
- A questão é realmente inédita?

Corrija qualquer problema antes da entrega.

#### I. Formato de saída

Apresente cada questão numerada, seguida das alternativas A–D. Em seguida, apresente o gabarito comentado e o aprofundamento didático.

Se o usuário solicitar um arquivo estruturado para aplicativo, siga exatamente o esquema de dados fornecido pelo usuário, sem criar ou remover campos.

**Prioridade máxima:** fidelidade aos padrões comprovados da COMPERVE, adequação à disciplina, originalidade, correção técnica e aprendizagem efetiva.

### FIM DO PROMPT MESTRE

## 17. Checklist de validação de questões geradas

Utilize esta lista para auditar cada questão:

- [ ] A questão aborda diretamente o tópico solicitado.
- [ ] O enunciado é claro, formal e adequado à disciplina.
- [ ] O formato corresponde a um padrão observado ou a uma aplicação condicional justificada.
- [ ] Existem exatamente quatro alternativas A–D.
- [ ] Há somente uma alternativa correta.
- [ ] Os distratores são plausíveis e pertencem ao mesmo universo conceitual.
- [ ] Não há pistas gramaticais ou de extensão que revelem a resposta.
- [ ] A questão não copia uma questão original.
- [ ] O conteúdo técnico, legal ou científico está correto e atualizado.
- [ ] O gabarito está correto.
- [ ] A explicação fundamenta a resposta.
- [ ] Todas as alternativas foram analisadas individualmente.
- [ ] Os erros dos distratores foram identificados e corrigidos conceitualmente.
- [ ] O aprofundamento permite aprender o assunto.
- [ ] A questão não depende de informação ausente ou ambígua.

## 18. Conclusão da engenharia reversa

O corpus analisado sustenta um padrão objetivo bastante consistente: quatro alternativas, uma única resposta correta, linguagem formal e técnica, organização por blocos de disciplinas e combinação de questões conceituais, interpretativas, contextualizadas e de aplicação.

O estilo não se resume a estudos de caso com personagens. A COMPERVE, neste recorte, alterna questões diretas, situações profissionais, afirmativas, textos-base e interpretação técnica. O formato deve ser escolhido de acordo com o assunto e com a disciplina.

A principal diferença histórica identificada está na estrutura dos cadernos: distribuição 10/10/30 e 50 questões até 2024 no conjunto examinado; em 2025, 10/15/30 e 55 questões, além de Prova Teórico-Prática.

Não foi possível estabelecer padrão de distribuição do gabarito porque os arquivos de respostas oficiais não foram fornecidos.

Este documento deve ser utilizado como referência operacional para a geração de questões inéditas no estilo observado. Caso novas provas sejam adicionadas, a análise deverá ser atualizada, preservando as versões anteriores e distinguindo novas tendências de padrões já consolidados.
