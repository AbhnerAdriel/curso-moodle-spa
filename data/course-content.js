(() => {
  'use strict';

  const deepFreeze = (value) => {
    if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
    Object.values(value).forEach(deepFreeze);
    return Object.freeze(value);
  };

  window.COURSE_CONTENT = deepFreeze({
    course: {
      title: 'Novo Marco Regulatório da EaD: legislação e aplicação na educação superior',
      shortTitle: 'Novo Marco Regulatório da EaD',
      presentationVideo: {
        type: 'video',
        title: 'Vídeo de apresentação',
        description: 'Novo Marco Regulatório da EaD: legislação e aplicação na educação superior',
        provider: 'Eduplay',
        embedUrl: 'https://eduplay.rnp.br/app/video/embed/465268',
        poster: 'assets/mulher-negra-olhando-para-com.webp',
        posterAlt: 'Mulher participando de uma formação on-line em um notebook'
      }
    },
    modules: [
      {
        id: '01',
        status: 'published',
        cardTitle: 'Fundamentos e evolução histórica da EaD',
        title: 'Fundamentos e Evolução Histórica da Educação a Distância',
        banner: 'assets/banner-modulo-01.webp',
        bannerPosition: 'center 54%',
        pages: [
          {
            id: '01',
            label: 'Introdução',
            unit: 'Unidade 01',
            title: 'Panorama da Educação a Distância e transição para o novo marco regulatório',
            blocks: [
              {
                type: 'video',
                slot: 'lead',
                title: 'Vídeo de abertura',
                description: 'Panorama da Educação a Distância',
                provider: 'Eduplay',
                embedUrl: 'https://eduplay.rnp.br/app/video/embed/465269',
                poster: 'assets/mulher-negra-olhando-para-com.webp',
                posterAlt: 'Mulher estudando em um ambiente virtual de aprendizagem'
              },
              {
                type: 'narrative',
                heading: 'Apresentação',
                paragraphs: [
                  'A Educação a Distância não surgiu com a internet nem se desenvolveu de forma linear. Sua trajetória acompanha as transformações sociais, tecnológicas e educacionais do país, passando pelo ensino por correspondência, pelo rádio, pela televisão educativa, pelos ambientes virtuais de aprendizagem e pelos atuais modelos de interação digital.',
                  'Ao longo desse percurso, a EaD ampliou o acesso à educação superior, alcançou municípios distantes dos grandes centros universitários e se consolidou como uma estratégia de interiorização da educação pública. O Sistema Universidade Aberta do Brasil ocupa lugar de destaque nesse processo, ao articular a União, a CAPES, estados, municípios e instituições públicas de ensino superior para ofertar cursos em diferentes territórios.',
                  'A expansão da modalidade também trouxe questionamentos sobre qualidade acadêmica, acompanhamento dos estudantes, avaliação, infraestrutura, formação das equipes e responsabilidades institucionais. Esses desafios levaram à construção progressiva de normas específicas para a EaD.',
                  'Este eixo apresenta esse percurso e mostra como a expansão da EaD conduziu à atualização de sua regulamentação. O Decreto nº 9.057/2017 é estudado apenas como parte dessa trajetória histórica, pois foi revogado pelo Decreto nº 12.456/2025, que estabelece o marco regulatório vigente.'
                ]
              },
              {
                type: 'regulatoryNotice',
                label: 'Olho na norma',
                icon: 'book',
                statements: [
                  'O Decreto nº 12.456/2025 é o marco regulatório vigente da EaD nos cursos de graduação.',
                  'O Decreto nº 9.057/2017 foi revogado e deve ser tratado apenas como marco histórico.'
                ]
              },
              {
                type: 'accordionGroup',
                label: 'Objetivos da unidade',
                items: [
                  {
                    id: 'objetivo-geral',
                    title: 'Objetivo geral',
                    paragraphs: [
                      'Compreender a trajetória de constituição e expansão da Educação a Distância no Brasil, relacionando a democratização do acesso, à atuação do Sistema UAB e a busca pela qualidade acadêmica ao desenvolvimento da regulação da modalidade.'
                    ]
                  },
                  {
                    id: 'objetivos-aprendizagem',
                    title: 'Objetivos de aprendizagem',
                    paragraphs: [
                      'Ao concluir este eixo, espera-se que o participante consiga:'
                    ],
                    list: [
                      'caracterizar a Educação a Distância como uma forma própria de organização dos processos de ensino e aprendizagem;',
                      'reconhecer os principais momentos da trajetória histórica da EaD no Brasil;',
                      'relacionar a expansão da modalidade aos desafios de qualidade, acompanhamento e avaliação;',
                      'diferenciar os marcos históricos da legislação das normas atualmente vigentes;',
                      'reconhecer que o Decreto nº 9.057/2017 foi revogado e que o Decreto nº 12.456/2025 constitui o atual marco regulatório da EaD na graduação.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: '02',
            label: 'Situação-problema',
            unit: 'Situação-problema',
            title: 'Expandir o acesso e preservar a qualidade',
            blocks: [
              {
                type: 'contentImage',
                src: 'assets/imagem-pagina02-mod01.webp',
                alt: 'Ilustração de estudantes, polo e equipe conectados pelas práticas da Educação a Distância.'
              },
              {
                type: 'scenario',
                paragraphs: [
                  'Uma licenciatura ofertada pela UAB/UFPE atende estudantes de diferentes municípios. Alguns residem longe do polo, conciliam os estudos com o trabalho e dependem do ambiente virtual para acompanhar as atividades.',
                  'Nos últimos meses, a equipe identificou estudantes que acessam os materiais, mas participam pouco das atividades; dificuldades para acompanhar estudantes com baixa frequência; dúvidas sobre o papel do polo nas atividades presenciais; necessidade de melhorar a comunicação entre estudantes e equipe do curso; e incertezas sobre as mudanças trazidas pelo novo marco regulatório.',
                  'Durante uma reunião, um integrante da equipe afirma: "O Decreto nº 9.057/2017 ainda é a principal norma da EaD. Podemos continuar organizando o curso exatamente como fazíamos antes." Outro integrante responde: "Esse decreto foi revogado. Precisamos compreender as mudanças introduzidas pelo Decreto nº 12.456/2025 e analisar como elas afetam a organização dos cursos."'
                ]
              },
              {
                type: 'attentionNotice',
                label: 'Atenção',
                icon: 'attention',
                paragraphs: [
                  '"O Decreto nº 9.057/2017 ainda é a norma vigente" é um equívoco comum. Ele foi revogado pelo Decreto nº 12.456/2025, que é hoje o marco regulatório da EaD na graduação.'
                ]
              },
              {
                type: 'stickyStack',
                heading: 'Para refletir',
                showCount: false,
                items: [
                  {
                    id: 'regulacao',
                    text: 'Por que o crescimento da EaD exigiu novas formas de regulação?'
                  },
                  {
                    id: 'acesso-qualidade',
                    text: 'Como é possível ampliar o acesso sem diminuir a qualidade acadêmica?'
                  },
                  {
                    id: 'uab-polos-equipes',
                    text: 'Que papel a UAB, os polos e as equipes dos cursos exercem nesse processo?'
                  },
                  {
                    id: 'tutor-legislacao',
                    text: 'Por que o tutor precisa conhecer a trajetória e a situação atual da legislação?'
                  }
                ]
              }
            ]
          },
          {
            id: '03',
            label: 'Conceitos e características',
            unit: 'Unidade 01',
            title: 'Educação a Distância: conceitos e características',
            blocks: [
              {
                type: 'conceptIntro',
                heading: 'Educação a Distância',
                paragraphs: [
                  'A Educação a Distância não se resume ao uso da internet nem à ausência de uma sala de aula física. Trata-se de uma forma própria de organizar os processos de ensino e aprendizagem, capaz de promover a aprendizagem quando professores e estudantes estão separados no espaço e, em muitos casos, também no tempo.',
                  'A modalidade combina tecnologias de informação e comunicação, flexibilidade de tempos e espaços, autonomia do estudante, planejamento, acompanhamento e mediação pedagógica. Nenhum desses elementos, isoladamente, define a EaD. O que a caracteriza é a articulação entre eles dentro de uma proposta pedagógica organizada.',
                  'Moore destaca três dimensões: diálogo, estrutura e autonomia. Quanto maior a distância transacional entre estudantes e professores, maior é a necessidade de planejamento, comunicação e acompanhamento. Chaves, por sua vez, chama atenção para a função das tecnologias como meios de comunicação pedagógica, e não como finalidade do processo educativo.'
                ]
              },
              {
                type: 'knowledgeNote',
                variant: 'concept',
                label: 'Conceito-chave',
                icon: 'autonomy',
                paragraphs: [
                  'Diálogo, estrutura e autonomia (Moore) e tecnologia como meio, não como finalidade (Chaves) - conceitos-base para compreender a EaD como forma própria de organizar o ensino e a aprendizagem.'
                ]
              },
              {
                type: 'knowledgeNote',
                variant: 'ebook',
                label: 'Por dentro do e-book',
                icon: 'book',
                paragraphs: [
                  'Segundo Moore, "a educação a distância não é simplesmente uma separação geográfica entre estudantes e professores, mas, sobretudo, um conceito pedagógico" (MOORE, 1993, p. 22, tradução nossa). A tecnologia, sozinha, não produz aprendizagem: ela cria as condições para que os processos educativos aconteçam - o elemento central continua sendo a organização pedagógica e a mediação feita pelas pessoas envolvidas.'
                ],
                source: 'UFPE/SPREAD. Volume 1 - Educação a Distância no Cenário Brasileiro, cap. 2, p. 7.'
              },
              {
                type: 'horizontalAccordion',
                heading: 'O que caracteriza a Educação a Distância?',
                instruction: 'Selecione cada elemento para conhecer seu papel na organização da modalidade.',
                activeItem: 'separacao-espacial',
                items: [
                  {
                    id: 'separacao-espacial',
                    icon: 'spatial',
                    title: 'Separação espacial',
                    description: 'Na EaD, estudantes e professores podem estar em locais diferentes durante grande parte do processo formativo. Essa distância física não significa ausência de interação: a aprendizagem é organizada para promover comunicação, orientação e participação ao longo do percurso.'
                  },
                  {
                    id: 'uso-tecnologias',
                    icon: 'technology',
                    title: 'Uso de tecnologias',
                    description: 'Ambientes virtuais de aprendizagem, videoconferências, fóruns, vídeos, materiais digitais e outras tecnologias apoiam a comunicação, o acesso aos conteúdos e a realização das atividades. A tecnologia funciona como meio para aproximar pessoas, conteúdos e experiências de aprendizagem.'
                  },
                  {
                    id: 'flexibilidade',
                    icon: 'flexibility',
                    title: 'Flexibilidade',
                    description: 'A EaD amplia as possibilidades de organização dos tempos e espaços de estudo. Dependendo da proposta do curso, o estudante pode acessar conteúdos e realizar determinadas atividades em diferentes horários e locais, respeitando os prazos e as atividades previstas.'
                  },
                  {
                    id: 'autonomia-estudante',
                    icon: 'autonomy',
                    title: 'Autonomia do estudante',
                    description: 'O estudante assume papel ativo na organização de sua aprendizagem. Planejar os estudos, acompanhar os prazos, acessar os materiais, participar das atividades e identificar dificuldades fazem parte desse processo. Autonomia, entretanto, não significa estudar sozinho.'
                  },
                  {
                    id: 'mediacao-pedagogica',
                    icon: 'mediation',
                    title: 'Mediação pedagógica',
                    description: 'Professores, tutores e demais profissionais atuam na orientação e na interação com os estudantes. A mediação ajuda a contextualizar conteúdos, esclarecer dúvidas, estimular a participação e estabelecer conexões entre os conhecimentos estudados e as experiências dos participantes.'
                  },
                  {
                    id: 'acompanhamento-aprendizagem',
                    icon: 'tracking',
                    title: 'Acompanhamento da aprendizagem',
                    description: 'A EaD envolve acompanhamento sistemático da participação e do desempenho dos estudantes. Acessos ao ambiente virtual, realização de atividades, participação em fóruns, avaliações e outras evidências podem apoiar a identificação de dificuldades e orientar intervenções pedagógicas.'
                  },
                  {
                    id: 'momentos-presenciais',
                    icon: 'presence',
                    title: 'Momentos presenciais',
                    description: 'A Educação a Distância pode incluir atividades presenciais previstas na organização do curso e na legislação aplicável. Esses momentos podem ocorrer na instituição ou nos polos de apoio e favorecem experiências acadêmicas que exigem interação presencial, infraestrutura específica ou acompanhamento direto.'
                  }
                ]
              },
              {
                type: 'knowledgeNote',
                variant: 'practice',
                label: 'Na prática',
                icon: 'presence',
                paragraphs: [
                  'Os momentos presenciais previstos na organização do curso e na legislação costumam acontecer na instituição ou nos polos de apoio, e exigem interação presencial, infraestrutura específica ou acompanhamento direto.'
                ]
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'A Educação a Distância consiste em transferir para a internet as mesmas práticas utilizadas em uma sala de aula presencial.',
                correctAnswer: false,
                correctAnswerLabel: 'Falso',
                explanation: 'A EaD demanda reorganização da comunicação, da interação, do acompanhamento, da avaliação e das responsabilidades dos profissionais envolvidos.'
              }
            ]
          },
          {
            id: '04',
            label: 'Evolução histórica da EaD',
            unit: 'Unidade 01',
            title: 'Capítulo 2 - Da correspondência à Universidade Aberta do Brasil',
            headingSize: 'compact',
            blocks: [
              {
                type: 'splitNarrative',
                accessibleHeading: 'Contextualização histórica da Educação a Distância no Brasil',
                lead: 'As primeiras experiências brasileiras de Educação a Distância remontam ao início do século XX e estavam ligadas, sobretudo, à formação profissional por correspondência. Em um país marcado por desigualdades educacionais e limitações de infraestrutura, os materiais enviados pelo correio permitiram levar oportunidades de formação a pessoas que não tinham acesso à escola formal.',
                paragraphs: [
                  'Com a expansão dos meios de comunicação, o rádio e a televisão passaram a ser utilizados em iniciativas educativas. O Movimento de Educação de Base, os telecursos e os programas de educação supletiva mostram que a trajetória da EaD está relacionada tanto à evolução tecnológica quanto à democratização do acesso à educação.',
                  'Em 1996, o art. 80 da Lei de Diretrizes e Bases reconheceu juridicamente a Educação a Distância e atribuiu ao poder público a responsabilidade de regulamentar a oferta, o credenciamento, a avaliação e a emissão de diplomas.',
                  'Em 2006, foi instituído o Sistema Universidade Aberta do Brasil. A UAB não é uma universidade autônoma, mas uma rede de cooperação que reúne a União, a CAPES, estados, municípios e instituições públicas de ensino superior. As instituições ofertam os cursos e certificam os estudantes; a CAPES coordena a política e financia bolsas; estados e municípios colaboram com a manutenção dos polos.',
                  'Os polos funcionam como pontos de conexão entre as universidades públicas e os territórios. Neles ocorrem avaliações presenciais, atividades práticas, orientações acadêmicas e suporte administrativo e tecnológico. Essa organização contribui para interiorizar a educação superior e reduzir barreiras geográficas.'
                ],
                inlineNotes: [
                  {
                    afterParagraph: 0,
                    variant: 'ebook',
                    label: 'Por dentro do e-book',
                    icon: 'book',
                    paragraphs: [
                      'Na década de 1930, o rádio passou a ser usado como instrumento educacional, com destaque para a Rádio Sociedade do Rio de Janeiro, depois incorporada ao Ministério da Educação. Nas décadas seguintes, surgiram o Instituto Radiotécnico Monitor e o Instituto Universal Brasileiro (anos 1940) e o Movimento de Educação de Base - MEB (1959), voltado a jovens e adultos de regiões rurais e periferias urbanas. Já na década de 1970, os telecursos e a teleducação levaram à criação do Sistema Nacional de Teleducação, em 1976.'
                    ],
                    source: 'UFPE/SPREAD. Volume 1, cap. 4, p. 10.'
                  },
                  {
                    type: 'regulatoryNotice',
                    afterParagraph: 1,
                    label: 'Olho na norma',
                    icon: 'book',
                    statements: [
                      'Art. 80 da LDB (Lei nº 9.394/1996): reconhecimento jurídico da EaD e atribuição ao poder público da responsabilidade de regulamentar oferta, credenciamento, avaliação e emissão de diplomas.'
                    ]
                  },
                  {
                    afterParagraph: 1,
                    variant: 'ebook',
                    label: 'Por dentro do e-book',
                    icon: 'book',
                    paragraphs: [
                      '"O Poder Público incentivará o desenvolvimento e a veiculação de programas de ensino a distância, em todos os níveis e modalidades de ensino, e de educação continuada" (BRASIL, 1996, art. 80, caput). Os parágrafos do artigo já traziam regras específicas: credenciamento das instituições ofertantes (§1º), regulamentação de exames e diplomas (§2º) e controle pelos respectivos sistemas de ensino (§3º). No mesmo período, em 1995, nasce a Associação Brasileira de Educação a Distância (ABED) - antes mesmo da própria LDB.'
                    ],
                    source: 'UFPE/SPREAD. Volume 1, cap. 5, p. 12.'
                  },
                  {
                    type: 'regulatoryNotice',
                    afterParagraph: 2,
                    label: 'Olho na norma',
                    icon: 'book',
                    statements: [
                      'Decreto nº 5.800/2006: institui o Sistema Universidade Aberta do Brasil (UAB), rede de cooperação entre União, CAPES, estados, municípios e instituições públicas de ensino superior.'
                    ]
                  },
                  {
                    afterParagraph: 2,
                    variant: 'ebook',
                    label: 'Por dentro do e-book',
                    icon: 'book',
                    paragraphs: [
                      'Segundo dados da CAPES (2024), o Sistema UAB reúne, hoje, cerca de 150 Instituições Públicas de Ensino Superior, aproximadamente 1.000 polos de apoio presencial espalhados pelo país, 919 cursos ativos e cerca de 126,6 mil estudantes matriculados - uma das maiores iniciativas de educação superior a distância desenvolvidas por universidades públicas em todo o mundo.'
                    ],
                    source: 'UFPE/SPREAD. Volume 1, cap. 6, p. 14.'
                  },
                  {
                    type: 'comparisonPrompt',
                    afterParagraph: 3,
                    label: 'Compare',
                    icon: 'flexibility',
                    paragraphs: [
                      'Compare as diferentes fases da trajetória da EaD, cada uma marcada por uma tecnologia ou norma predominante: correspondência, rádio, TV educativa, LDB (1996), ambientes virtuais de aprendizagem, UAB (2006) e o novo marco regulatório (Decreto nº 12.456/2025).'
                    ]
                  }
                ]
              },
              {
                type: 'verticalTimeline',
                eyebrow: 'Percurso histórico',
                heading: 'Linha do tempo da EaD',
                items: [
                  {
                    id: 'correspondencia',
                    title: 'Correspondência'
                  },
                  {
                    id: 'radio',
                    title: 'Rádio'
                  },
                  {
                    id: 'televisao-educativa',
                    title: 'Televisão educativa'
                  },
                  {
                    id: 'ldb',
                    title: 'LDB'
                  },
                  {
                    id: 'ambientes-virtuais-aprendizagem',
                    title: 'Ambientes Virtuais de Aprendizagem'
                  },
                  {
                    id: 'uab',
                    title: 'UAB'
                  },
                  {
                    id: 'novo-marco-regulatorio',
                    title: 'Novo marco regulatório'
                  }
                ]
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'A presença de uma norma na linha do tempo legislativa indica sua vigência atual.',
                correctAnswer: false,
                correctAnswerLabel: 'Falso',
                explanation: 'A presença de uma norma na linha do tempo indica sua importância histórica, e não sua vigência atual. Os decretos revogados devem ser identificados visualmente como "revogado".'
              }
            ]
          },
          {
            id: '05',
            label: 'Expansão, qualidade e regulação',
            unit: 'Unidade 01',
            title: 'Capítulo 3 - Expansão, qualidade e necessidade de regulação',
            headingSize: 'compact',
            blocks: [
              {
                type: 'regulationContext',
                heading: 'Expansão, qualidade e regulação',
                showHeading: false,
                paragraphs: [
                  'A Educação a Distância passou por um forte processo de expansão na educação superior brasileira. Esse crescimento ampliou oportunidades, reduziu barreiras geográficas e permitiu que mais estudantes chegassem à graduação. Ao mesmo tempo, tornou mais visíveis questões relacionadas à qualidade dos cursos, à infraestrutura, à avaliação e ao acompanhamento pedagógico.',
                  'A regulação da EaD não foi criada de uma só vez. Ela foi sendo construída à medida que novas tecnologias, novos modelos pedagógicos e novos desafios surgiam. O art. 80 da LDB reconheceu a modalidade; os decretos posteriores modificaram as formas de compreender a autoaprendizagem, a mediação, as condições institucionais e a presencialidade.',
                  'O Decreto nº 9.057/2017 representou uma etapa importante dessa trajetória, com destaque para a qualificação das equipes, as políticas de acesso, o acompanhamento estudantil, a avaliação e a organização institucional. Contudo, essa norma foi revogada pelo Decreto nº 12.456/2025.',
                  'O novo decreto passou a organizar os cursos de graduação nos formatos presencial, semipresencial e a distância, além de estabelecer novos conceitos, percentuais de presencialidade, requisitos de mediação, avaliação e infraestrutura. Esses conteúdos são aprofundados nos eixos e módulos seguintes.'
                ],
                inlineNotes: [
                  {
                    type: 'dataFocus',
                    afterParagraph: 0,
                    label: 'Dados em foco',
                    icon: 'tracking',
                    paragraphs: [
                      'Consulte no Volume 1 (p. 17-19) os dados do Censo da Educação Superior sobre a expansão das matrículas em EaD e a tensão entre expansão e qualidade acadêmica.'
                    ]
                  },
                  {
                    afterParagraph: 0,
                    variant: 'ebook',
                    label: 'Por dentro do e-book',
                    icon: 'book',
                    paragraphs: [
                      'Entre 2014 e 2024, as matrículas de graduação em EaD saltaram de 1,27 milhão para 4,91 milhões — um crescimento acumulado de 286,7% em uma década. Em 2024, pela primeira vez na história do país, a EaD superou a presencial, respondendo por 50,7% de todas as matrículas da educação superior brasileira. Desse total, 95,9% das matrículas em EaD estavam vinculadas à rede privada.'
                    ],
                    source: 'UFPE/SPREAD. Volume 1, cap. 8, p. 17-18 (dados do Censo da Educação Superior 2024).'
                  },
                  {
                    type: 'regulatoryNotice',
                    afterParagraph: 2,
                    label: 'Olho na norma',
                    icon: 'book',
                    statements: [
                      'Decretos nº 2.494/1998, 5.622/2005 e 9.057/2017 — todos revogados. Decreto nº 12.456/2025 — marco regulatório vigente para a EaD nos cursos de graduação.'
                    ]
                  },
                  {
                    type: 'comparisonPrompt',
                    afterParagraph: 3,
                    label: 'Compare',
                    icon: 'flexibility',
                    paragraphs: [
                      'Compare, no infográfico a seguir, os decretos revogados (2.494/1998, 5.622/2005, 9.057/2017) com o Decreto nº 12.456/2025, atualmente vigente.'
                    ]
                  }
                ]
              },
              {
                type: 'regulationComparison',
                eyebrow: 'Infográfico comparativo',
                heading: 'Da trajetória histórica ao marco vigente',
                items: [
                  {
                    id: 'decreto-2494-1998',
                    year: '1998',
                    title: 'Decreto nº 2.494/1998',
                    status: 'Revogado',
                    current: false,
                    contribution: 'Ênfase na autoaprendizagem.'
                  },
                  {
                    id: 'decreto-5622-2005',
                    year: '2005',
                    title: 'Decreto nº 5.622/2005',
                    status: 'Revogado',
                    current: false,
                    contribution: 'Ênfase na mediação didático-pedagógica.'
                  },
                  {
                    id: 'decreto-9057-2017',
                    year: '2017',
                    title: 'Decreto nº 9.057/2017',
                    status: 'Revogado',
                    current: false,
                    contribution: 'Ênfase nas condições institucionais e no acompanhamento.'
                  },
                  {
                    id: 'decreto-12456-2025',
                    year: '2025',
                    title: 'Decreto nº 12.456/2025',
                    status: 'Vigente',
                    current: true,
                    contribution: 'Novos formatos de oferta, presencialidade e mediação pedagógica qualificada.'
                  }
                ]
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'O Decreto nº 9.057/2017 permanece vigente e deve ser aplicado em conjunto com o Decreto nº 12.456/2025.',
                correctAnswer: false,
                correctAnswerLabel: 'Falso',
                explanation: 'O Decreto nº 9.057/2017 foi expressamente revogado pelo Decreto nº 12.456/2025 e não deve ser utilizado como base normativa vigente para organizar a oferta atual dos cursos de graduação.'
              },
              {
                type: 'multipleChoice',
                eyebrow: 'Aplique o que você estudou',
                heading: 'Retomada da situação-problema',
                question: 'Na reunião da equipe, qual afirmação está adequada à legislação vigente?',
                correctAnswer: 'c',
                correctAnswerLabel: 'C',
                options: [
                  {
                    id: 'a',
                    label: 'A',
                    text: 'O Decreto nº 9.057/2017 permanece como norma principal da EaD.'
                  },
                  {
                    id: 'b',
                    label: 'B',
                    text: 'O Decreto nº 9.057/2017 foi parcialmente alterado, mas continua vigente.'
                  },
                  {
                    id: 'c',
                    label: 'C',
                    text: 'O Decreto nº 9.057/2017 foi revogado pelo Decreto nº 12.456/2025 e deve ser abordado apenas como marco histórico.'
                  },
                  {
                    id: 'd',
                    label: 'D',
                    text: 'Os dois decretos devem ser aplicados simultaneamente.'
                  }
                ],
                correctFeedback: 'Correto. O Decreto nº 12.456/2025 revogou expressamente o Decreto nº 9.057/2017. O decreto de 2017 permanece relevante para compreender a evolução da regulação, mas não constitui legislação vigente.',
                incorrectFeedback: 'Revise a Unidade 3 deste eixo. O Decreto nº 9.057/2017 não permanece em vigor e não deve ser utilizado em conjunto com o Decreto nº 12.456/2025 como base normativa atual.'
              },
              {
                type: 'summary',
                summaryNote: {
                  label: 'Em resumo',
                  icon: 'layers',
                  paragraphs: [
                    'A Unidade 1 mostrou que a EaD tem uma trajetória histórica anterior à internet, que o Sistema UAB é central para a democratização do acesso, e que o Decreto nº 9.057/2017 foi revogado pelo Decreto nº 12.456/2025 - hoje o marco regulatório vigente.'
                  ]
                },
                eyebrow: 'Fechamento do capítulo',
                heading: 'Em síntese',
                items: [
                  'a EaD possui uma trajetória anterior à internet;',
                  'diferentes tecnologias foram utilizadas para aproximar estudantes e instituições;',
                  'a modalidade demanda organização pedagógica, comunicação, acompanhamento e avaliação próprios;',
                  'o Sistema UAB contribui para a interiorização e a democratização da educação superior pública;',
                  'a expansão da EaD tornou mais visíveis os desafios relacionados à qualidade;',
                  'a regulação foi sendo modificada conforme a modalidade se transformava;',
                  'o Decreto nº 9.057/2017 possui relevância histórica, mas foi revogado;',
                  'o Decreto nº 12.456/2025 é o marco regulatório vigente para a EaD nos cursos de graduação.'
                ]
              }
            ]
          },
          {
            id: '06',
            label: 'Conceitos fundamentais da nova legislação',
            unit: 'Unidade 02',
            title: 'Conceitos Fundamentais da Nova Legislação da Educação a Distância',
            headingSize: 'compact',
            blocks: [
              {
                type: 'video',
                slot: 'lead',
                title: 'Vídeo de abertura',
                description: 'Conceitos fundamentais da nova legislação da Educação a Distância',
                provider: 'Eduplay',
                embedUrl: '',
                poster: 'assets/mulher-negra-olhando-para-com.webp',
                posterAlt: 'Participante acompanhando uma formação on-line em um notebook'
              },
              {
                type: 'narrative',
                heading: 'Apresentação',
                paragraphs: [
                  'Depois de conhecer a trajetória histórica da Educação a Distância no Brasil e de compreender por que o Decreto nº 9.057/2017 foi revogado e substituído pelo Decreto nº 12.456/2025 como marco regulatório vigente, este eixo desloca o olhar da história para a norma que está em vigor hoje e que organiza, no dia a dia, o trabalho de tutores, mediadores pedagógicos e professores nos cursos da UAB/UFPE.',
                  'O art. 3º do Decreto nº 12.456/2025 reúne um conjunto de definições que funcionam como o vocabulário comum de todo o novo marco regulatório. Sem compreender o que caracteriza uma atividade presencial, uma atividade síncrona, uma atividade síncrona mediada e uma atividade assíncrona, torna-se difícil interpretar corretamente os percentuais de presencialidade, os projetos pedagógicos dos cursos e as próprias atribuições da equipe. O mesmo vale para os papéis profissionais: o Decreto distingue com clareza as atribuições do tutor das atribuições do mediador pedagógico, e essa distinção tem consequências diretas sobre o que cada integrante da equipe pode e deve fazer.',
                  'Este eixo também apresenta o conceito de Polo de Educação a Distância (Polo EaD), a unidade descentralizada por meio da qual a instituição de educação superior aproxima sua oferta dos territórios. Compreender o que é o Polo EaD, mesmo antes de aprofundar sua infraestrutura e seus percentuais de uso, ajuda o tutor a situar seu próprio trabalho dentro da estrutura da UAB/UFPE.',
                  'Ao final deste eixo, o participante será capaz de reconhecer, em situações concretas de tutoria, qual tipo de atividade está em curso e qual profissional é responsável por conduzi-la — competência que serve de base para os eixos e módulos seguintes.'
                ],
                inlineNotes: [
                  {
                    afterParagraph: 1,
                    variant: 'concept',
                    label: 'Conceito-chave',
                    icon: 'book',
                    paragraphs: [
                      'Art. 3º do Decreto nº 12.456/2025: vocabulário comum do novo marco — atividade presencial, síncrona, síncrona mediada e assíncrona, além das atribuições de tutor e mediador pedagógico.'
                    ]
                  },
                  {
                    afterParagraph: 2,
                    variant: 'tutoring',
                    label: 'Conexão com a tutoria',
                    icon: 'mediation',
                    paragraphs: [
                      'Compreender o Polo EaD ajuda o tutor a situar seu próprio trabalho dentro da estrutura da UAB/UFPE.'
                    ]
                  }
                ]
              },
              {
                type: 'accordionGroup',
                label: 'Objetivos da unidade',
                items: [
                  {
                    id: 'objetivo-geral-unidade-02',
                    title: 'Objetivo geral',
                    paragraphs: [
                      'Compreender as definições estabelecidas pelo art. 3º do Decreto nº 12.456/2025 relativas aos tipos de atividade pedagógica (presencial, síncrona, síncrona mediada e assíncrona) e aos papéis profissionais de tutor e mediador pedagógico, bem como o conceito de Polo EaD, de modo a reconhecê-los na prática cotidiana da tutoria na UAB/UFPE.'
                    ]
                  },
                  {
                    id: 'objetivos-aprendizagem-unidade-02',
                    title: 'Objetivos de aprendizagem',
                    paragraphs: [
                      'Ao concluir este eixo, espera-se que o participante consiga:'
                    ],
                    list: [
                      'distinguir atividade presencial, atividade síncrona, atividade síncrona mediada e atividade assíncrona conforme o art. 3º do Decreto nº 12.456/2025;',
                      'reconhecer o limite de até 70 estudantes por docente ou mediador e a exigência de controle de frequência que caracterizam a atividade síncrona mediada;',
                      'diferenciar as atribuições administrativas do tutor das atribuições de mediação pedagógica exercidas pelo mediador pedagógico;',
                      'caracterizar o Polo EaD como unidade descentralizada da instituição de educação superior;',
                      'identificar, em situações práticas de tutoria, qual tipo de atividade e qual papel profissional está envolvido;',
                      'relacionar essas definições à organização institucional e à qualidade da oferta de EaD na UAB/UFPE.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: '07',
            label: 'Situação-problema e formatos de atividade',
            unit: 'Unidade 02',
            title: 'Situação-problema',
            blocks: [
              {
                type: 'caseStudy',
                heading: 'Quem faz o quê? Reconhecendo atividades e papéis no dia a dia da tutoria',
                image: 'assets/infografico-pagina07.png',
                imageWidth: 1672,
                imageHeight: 941,
                imageAlt: 'Infográfico que compara uma organização inadequada de 150 estudantes em um único ambiente com uma organização adequada em três grupos menores e apresenta os papéis do tutor, do mediador pedagógico e do Polo EaD.',
                caption: 'Organização pedagógica de 150 estudantes: comparação entre um modelo sobrecarregado e uma distribuição em grupos menores.',
                accessibleDetails: [
                  'Na organização inadequada, 150 estudantes participam de um único ambiente, com baixa interação e acompanhamento limitado.',
                  'Na organização adequada, os estudantes são distribuídos em três grupos menores, favorecendo participação e monitoramento.',
                  'O tutor acompanha a turma, orienta estudantes e monitora indicadores.',
                  'O mediador pedagógico apoia o processo de aprendizagem e fortalece o engajamento.',
                  'O Polo EaD oferece suporte, infraestrutura e articulação local.'
                ],
                paragraphs: [
                  'Uma licenciatura ofertada pela UAB/UFPE organiza, toda semana, um encontro ao vivo por videoconferência reunindo cerca de 150 estudantes de várias turmas ao mesmo tempo. A coordenação do curso pediu à equipe que classificasse esse encontro no plano pedagógico e definisse quem seria responsável por registrar a frequência e conduzir as discussões.',
                  'Durante uma reunião de equipe, um integrante afirma: “Como fazemos esse encontro ao vivo, ele já conta como atividade síncrona mediada. E qualquer pessoa da equipe, inclusive os tutores, pode registrar a frequência e conduzir a mediação pedagógica, afinal tutor e mediador pedagógico exercem funções equivalentes.” Outro integrante responde: “Isso não está correto. A atividade síncrona mediada reúne grupos de até 70 estudantes por docente ou mediador, com controle de frequência. Um encontro com 150 estudantes ao mesmo tempo é uma atividade síncrona, mas não se enquadra como síncrona mediada nesse formato. Além disso, o Decreto distingue as atribuições administrativas do tutor da mediação pedagógica, que cabe ao professor regente ou ao mediador pedagógico com formação compatível.”'
                ]
              },
              {
                type: 'questionPrompts',
                heading: 'Perguntas disparadoras',
                introduction: 'Use as questões a seguir para analisar o caso antes de avançar para os conceitos do novo marco regulatório.',
                items: [
                  'Qual é a diferença entre atividade síncrona e atividade síncrona mediada?',
                  'Por que o limite de até 70 estudantes por docente ou mediador é relevante para a organização da atividade?',
                  'Quais atribuições cabem ao tutor e quais cabem ao mediador pedagógico?',
                  'Que papel o Polo EaD poderia exercer nesse cenário?',
                  'Que riscos surgem, para a qualidade do curso, quando essas definições não são respeitadas na prática?'
                ]
              },
              {
                type: 'chapterDivider',
                eyebrow: 'Capítulo 1',
                number: '01',
                heading: 'Os formatos de atividade pedagógica no novo marco regulatório'
              },
              {
                type: 'narrative',
                surface: 'white',
                heading: 'Definições que estruturam a oferta',
                paragraphs: [
                  'O art. 3º do Decreto nº 12.456/2025 define, em seus incisos, os principais conceitos que estruturam a oferta de Educação a Distância nos cursos de graduação. Antes de tratar de percentuais e de formatos de curso, é preciso compreender o que caracteriza cada tipo de atividade pedagógica, pois é essa distinção que sustenta toda a organização curricular e a atuação da equipe.',
                  'A atividade presencial (inciso II) é aquela realizada no mesmo espaço e ao mesmo tempo: professores e estudantes compartilham fisicamente o mesmo ambiente, seja na sede da instituição, em campus fora de sede ou no Polo EaD.',
                  'A atividade síncrona (inciso III) ocorre por áudio e/ou vídeo, com professores e estudantes em lugares diversos, mas em tempo coincidente. Já a atividade assíncrona (inciso V) ocorre em lugares e tempos diversos, permitindo que o estudante acesse fóruns, videoaulas gravadas e materiais do ambiente virtual de acordo com sua própria disponibilidade.',
                  'Entre a atividade síncrona simples e a atividade assíncrona existe ainda uma categoria intermediária e especialmente relevante para a tutoria: a atividade síncrona mediada, prevista no inciso IV do art. 3º.'
                ],
                inlineNotes: [
                  {
                    type: 'regulatoryNotice',
                    afterParagraph: 0,
                    label: 'Olho na norma',
                    icon: 'book',
                    statements: [
                      'Art. 3º, incisos II, III e V do Decreto nº 12.456/2025: definem, respectivamente, atividade presencial, síncrona e assíncrona.'
                    ]
                  },
                  {
                    afterParagraph: 3,
                    variant: 'tutoring',
                    label: 'Conexão com a tutoria',
                    icon: 'mediation',
                    paragraphs: [
                      'Distinguir corretamente cada tipo de atividade é o que permite ao tutor situar sua atuação dentro dos limites definidos pelo Decreto nº 12.456/2025.'
                    ]
                  }
                ]
              },
              {
                type: 'activityComparison',
                eyebrow: 'Infográfico comparativo',
                heading: 'Espaço, tempo e experiência de aprendizagem',
                introduction: 'Compare as condições que caracterizam cada tipo de atividade e observe como elas aparecem na prática.',
                items: [
                  {
                    id: 'atividade-presencial',
                    title: 'Presencial',
                    legalBasis: 'Art. 3º, inciso II',
                    space: 'Mesmo espaço',
                    time: 'Mesmo tempo',
                    example: 'Aula na sede, em campus fora de sede ou no Polo EaD.'
                  },
                  {
                    id: 'atividade-sincrona',
                    title: 'Síncrona',
                    legalBasis: 'Art. 3º, inciso III',
                    space: 'Lugares diversos',
                    time: 'Tempo coincidente',
                    example: 'Videoconferência ao vivo, sem limite de estudantes definido.'
                  },
                  {
                    id: 'atividade-assincrona',
                    title: 'Assíncrona',
                    legalBasis: 'Art. 3º, inciso V',
                    space: 'Lugares diversos',
                    time: 'Tempos diversos',
                    example: 'Fórum, videoaula gravada ou material do ambiente virtual.'
                  }
                ]
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'Uma videoaula gravada, disponibilizada no Moodle para acesso em qualquer horário, é um exemplo de atividade síncrona.',
                correctAnswer: false,
                correctAnswerLabel: 'Falso',
                explanation: 'A videoaula gravada, acessada em lugares e tempos diversos pelo estudante, caracteriza uma atividade assíncrona (art. 3º, V). A atividade síncrona exige tempo coincidente entre professores e estudantes (art. 3º, III).'
              }
            ]
          },
          {
            id: '08',
            label: 'Atividade síncrona mediada',
            unit: 'Unidade 02',
            title: 'Capítulo 2 - A atividade síncrona mediada: limite de estudantes e controle de frequência',
            headingSize: 'compact',
            blocks: [
              {
                type: 'mediatedActivityFocus',
                eyebrow: 'Conceito em foco',
                heading: 'Três condições simultâneas',
                definition: 'A atividade síncrona mediada é definida pelo inciso IV do art. 3º do Decreto nº 12.456/2025 como uma atividade realizada em tempo real, com um grupo de até 70 estudantes por docente ou mediador e com controle de frequência obrigatório.',
                criteria: [
                  {
                    title: 'Tempo real',
                    description: 'Docente ou mediador e estudantes participam em tempo coincidente.'
                  },
                  {
                    title: 'Até 70 estudantes',
                    description: 'Cada grupo respeita o limite por docente ou mediador responsável.'
                  },
                  {
                    title: 'Frequência controlada',
                    description: 'A participação de cada estudante precisa ser registrada.'
                  }
                ],
                conceptNote: {
                  variant: 'concept',
                  label: 'Conceito-chave',
                  icon: 'activity',
                  paragraphs: [
                    'Atividade síncrona mediada (art. 3º, IV): tempo real + grupo de até 70 estudantes por docente ou mediador + controle de frequência obrigatório — os três elementos precisam estar presentes simultaneamente.'
                  ]
                },
                paragraphs: [
                  'O limite de até 70 estudantes por docente ou mediador existe para assegurar que a interação em tempo real tenha condições reais de acompanhamento pedagógico. Uma sessão ao vivo com centenas de participantes, sem controle individualizado de frequência, é uma atividade síncrona, mas não pode ser classificada como atividade síncrona mediada.',
                  'O controle de frequência deve ser realizado por meio de tecnologias digitais de rastreabilidade, identificação do estudante, plataformas de ambiente virtual de aprendizagem integradas ou interação síncrona monitorada.'
                ],
                inlineNotes: [
                  {
                    type: 'dataFocus',
                    afterParagraph: 0,
                    label: 'Dados em foco',
                    icon: 'tracking',
                    paragraphs: [
                      'Limite: até 70 estudantes por docente ou mediador — elemento obrigatório, junto ao tempo real e ao controle de frequência, para caracterizar a atividade síncrona mediada (art. 3º, IV).'
                    ]
                  }
                ],
                practiceHeading: 'Possibilidades de aplicação',
                practiceIntroduction: 'O Guia Orientador da UFPE apresenta exemplos práticos:',
                examples: [
                  'discussões críticas e seminários colaborativos;',
                  'resolução de problemas em grupo;',
                  'mentorias em tempo real;',
                  'debates sobre práticas em laboratórios virtuais;',
                  'aplicação de pré-testes e pós-testes.'
                ],
                practiceConclusion: 'Segundo o Guia, esse tipo de atividade é conduzido pelo professor regente ou pelo mediador pedagógico.',
                practiceNote: {
                  variant: 'practice',
                  label: 'Na prática',
                  icon: 'presence',
                  paragraphs: [
                    'O Guia Orientador da UFPE (BARBOSA, 2025) traz exemplos práticos de atividade síncrona mediada: discussões críticas, seminários colaborativos, resolução de problemas em grupo, mentorias em tempo real, debates em laboratórios virtuais e pré/pós-testes.'
                  ]
                }
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'Uma sessão ao vivo com 120 estudantes, conduzida por um único mediador e sem controle individual de frequência, pode ser classificada como atividade síncrona mediada.',
                correctAnswer: false,
                correctAnswerLabel: 'Falso',
                explanation: 'O art. 3º, IV, limita a atividade síncrona mediada a grupos de até 70 estudantes por docente ou mediador e exige controle de frequência. Ultrapassar o limite ou não registrar a frequência descaracteriza a atividade como síncrona mediada.'
              }
            ]
          },
          {
            id: '09',
            label: 'Tutor, mediador pedagógico e Polo EaD',
            unit: 'Unidade 02',
            title: 'Capítulo 3 - Tutor, mediador pedagógico e Polo EaD',
            headingSize: 'compact',
            blocks: [
              {
                type: 'professionalRoles',
                eyebrow: 'Organização da equipe',
                heading: 'Papéis distintos, trabalho articulado',
                conceptNote: {
                  variant: 'concept',
                  label: 'Conceito-chave',
                  icon: 'mediation',
                  paragraphs: [
                    'Este capítulo esclarece qual profissional é responsável por cada atividade — coordenador, professor regente, professor conteudista, mediador pedagógico e tutor — segundo os arts. 17 a 22 do Decreto nº 12.456/2025.'
                  ]
                },
                introduction: 'O Capítulo III, Seção I, do Decreto nº 12.456/2025 (arts. 17 a 22) organiza o corpo docente e a mediação pedagógica dos cursos de graduação. O corpo docente é composto pelo coordenador de curso, pelo professor regente e pelo professor conteudista (art. 18). Ao lado do corpo docente, o Decreto prevê a figura do mediador pedagógico, que auxilia essa equipe e deve possuir formação acadêmica compatível com a função exercida (art. 19).',
                regulatoryNotice: {
                  label: 'Olho na norma',
                  icon: 'book',
                  statements: [
                    'Art. 18: corpo docente (coordenador de curso, professor regente e professor conteudista).',
                    'Art. 19: mediador pedagógico, com formação acadêmica compatível com a função.'
                  ]
                },
                paragraphs: [
                  'O tutor é tratado pelo art. 21: ele pode auxiliar a equipe com atribuições administrativas, expressamente distintas das funções de mediação pedagógica. O Guia Orientador da UFPE caracteriza o tutor, institucionalmente, como o profissional que atua com atribuições pedagógicas e administrativas, sempre sob supervisão docente. Essa leitura situa sua atuação como apoio à equipe, dentro de um trabalho supervisionado, e não como condução autônoma da mediação pedagógica.',
                  'É o professor regente ou o mediador pedagógico, e não o tutor isoladamente, quem conduz a mediação didático-pedagógica das unidades curriculares, incluindo as atividades síncronas mediadas. Tanto tutores quanto mediadores pedagógicos devem constar no Censo da Educação Superior (art. 22).'
                ],
                inlineNotes: [
                  {
                    type: 'regulatoryNotice',
                    afterParagraph: 0,
                    label: 'Olho na norma',
                    icon: 'book',
                    statements: [
                      'Art. 21: o tutor pode auxiliar a equipe com atribuições administrativas. O Guia Orientador da UFPE caracteriza o tutor como o profissional que atua com atribuições pedagógicas e administrativas, sempre sob supervisão docente — em conformidade com o Decreto.'
                    ]
                  },
                  {
                    afterParagraph: 0,
                    variant: 'tutoring',
                    label: 'Conexão com a tutoria',
                    icon: 'mediation',
                    paragraphs: [
                      'É justamente a distinção entre atribuições administrativas (tutor) e mediação pedagógica (professor regente/mediador pedagógico) que define, na prática, até onde vai a atuação do tutor em cada atividade do curso.'
                    ]
                  }
                ],
                comparisonPrompt: {
                  label: 'Compare',
                  icon: 'flexibility',
                  paragraphs: [
                    'O quadro a seguir compara diretamente as atribuições de tutor e mediador pedagógico quanto à natureza das atribuições, formação exigida, mediação didático-pedagógica e registro institucional.'
                  ]
                },
                comparisonHeading: 'Tutor × mediador pedagógico',
                comparisonIntroduction: 'Compare a natureza das atribuições, a formação exigida e os limites de atuação de cada função.',
                roles: [
                  {
                    id: 'tutor',
                    title: 'Tutor'
                  },
                  {
                    id: 'mediador-pedagogico',
                    title: 'Mediador pedagógico'
                  }
                ],
                criteria: [
                  {
                    label: 'Natureza das atribuições',
                    values: [
                      'Administrativas (art. 21).',
                      'Auxilia o corpo docente na mediação pedagógica (art. 19).'
                    ]
                  },
                  {
                    label: 'Formação exigida',
                    values: [
                      'Não detalhada no art. 21.',
                      'Formação acadêmica compatível com a função (art. 19).'
                    ]
                  },
                  {
                    label: 'Mediação didático-pedagógica',
                    values: [
                      'Função distinta; atuação sob supervisão docente.',
                      'Pode conduzir atividade síncrona mediada junto ao professor regente.'
                    ]
                  },
                  {
                    label: 'Registro institucional',
                    values: [
                      'Deve constar no Censo da Educação Superior (art. 22).',
                      'Deve constar no Censo da Educação Superior (art. 22).'
                    ]
                  }
                ],
                poloHeading: 'Polo EaD',
                poloText: 'O Polo de Educação a Distância é definido pelo art. 3º, inciso VI, como uma unidade descentralizada da instituição de educação superior. É nele que, com frequência, tutores e mediadores atuam junto aos estudantes, e para ele convergem muitas das atividades presenciais e síncronas mediadas realizadas fora da sede.',
                poloNote: {
                  variant: 'concept',
                  label: 'Conceito-chave',
                  icon: 'spatial',
                  paragraphs: [
                    'Polo EaD (art. 3º, VI): unidade descentralizada da instituição de educação superior, onde convergem atividades presenciais e síncronas mediadas realizadas fora da sede.'
                  ]
                }
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'O tutor, segundo o Decreto nº 12.456/2025, pode assumir as mesmas atribuições do mediador pedagógico, incluindo a condução autônoma da mediação didático-pedagógica das unidades curriculares.',
                correctAnswer: false,
                correctAnswerLabel: 'Falso',
                explanation: 'O art. 21 estabelece que o tutor pode auxiliar a equipe com atribuições administrativas, distintas das funções de mediação pedagógica, que cabem ao professor regente e ao mediador pedagógico (art. 19).'
              },
              {
                type: 'multipleChoice',
                eyebrow: 'Aplique o que você estudou',
                heading: 'Retomada da situação-problema',
                question: 'Na situação apresentada, qual conduta está de acordo com o Decreto nº 12.456/2025?',
                correctAnswer: 'c',
                correctAnswerLabel: 'C',
                options: [
                  {
                    id: 'a',
                    label: 'A',
                    text: 'Classificar qualquer encontro ao vivo, independentemente do número de estudantes, como atividade síncrona mediada.'
                  },
                  {
                    id: 'b',
                    label: 'B',
                    text: 'Atribuir ao tutor a condução autônoma da mediação pedagógica, já que tutor e mediador pedagógico exercem funções equivalentes.'
                  },
                  {
                    id: 'c',
                    label: 'C',
                    text: 'Reservar a classificação de atividade síncrona mediada a grupos de até 70 estudantes por docente ou mediador, com controle de frequência, e manter a mediação pedagógica sob responsabilidade do professor regente ou do mediador pedagógico, distinta das atribuições administrativas do tutor.'
                  },
                  {
                    id: 'd',
                    label: 'D',
                    text: 'Dispensar o controle de frequência sempre que a atividade ocorrer por videoconferência.'
                  }
                ],
                correctFeedback: 'Correto. O art. 3º, IV, do Decreto nº 12.456/2025 limita a atividade síncrona mediada a até 70 estudantes por docente ou mediador, com controle de frequência obrigatório. O art. 21 distingue as atribuições administrativas do tutor das funções de mediação pedagógica.',
                incorrectFeedback: 'Revise as Unidades 1, 2 e 3 deste eixo. Nem toda atividade ao vivo é uma atividade síncrona mediada, e o tutor não assume, sozinho, a mediação pedagógica das unidades curriculares.'
              },
              {
                type: 'summary',
                summaryNote: {
                  label: 'Em resumo',
                  icon: 'layers',
                  paragraphs: [
                    'A Unidade 2 esclareceu o vocabulário do art. 3º do Decreto nº 12.456/2025 (atividade presencial, síncrona, síncrona mediada e assíncrona) e distinguiu as atribuições do tutor das do mediador pedagógico, além de apresentar o conceito de Polo EaD.'
                  ]
                },
                eyebrow: 'Fechamento do capítulo',
                heading: 'Em síntese',
                items: [
                  'o art. 3º do Decreto nº 12.456/2025 define os tipos de atividade pedagógica que estruturam a oferta de EaD;',
                  'a atividade presencial ocorre no mesmo espaço e no mesmo tempo (art. 3º, II);',
                  'a atividade síncrona ocorre em tempo coincidente, por áudio e/ou vídeo, com professores e estudantes em lugares diversos (art. 3º, III);',
                  'a atividade síncrona mediada é uma atividade em tempo real, limitada a até 70 estudantes por docente ou mediador, com controle de frequência obrigatório (art. 3º, IV);',
                  'a atividade assíncrona ocorre em lugares e tempos diversos (art. 3º, V);',
                  'o tutor pode auxiliar a equipe com atribuições administrativas, distintas das funções de mediação pedagógica (art. 21);',
                  'o mediador pedagógico auxilia o corpo docente e deve possuir formação acadêmica compatível (art. 19);',
                  'o Polo EaD é a unidade descentralizada da instituição de educação superior (art. 3º, VI).'
                ]
              }
            ]
          },
          {
            id: '10',
            label: 'Referências',
            unit: 'Encerramento',
            title: 'Referências',
            blocks: [
              {
                type: 'references',
                showCount: false,
                eyebrow: 'Base documental',
                heading: 'Fontes que sustentam este módulo',
                introduction: 'Reunimos aqui as normas, os materiais institucionais e o guia orientador utilizados na construção dos conteúdos deste módulo.',
                groups: [
                  {
                    id: 'legislacao',
                    label: 'Legislação',
                    items: [
                      {
                        type: 'Lei',
                        text: 'BRASIL. Lei nº 9.394, de 20 de dezembro de 1996. Estabelece as diretrizes e bases da educação nacional.'
                      },
                      {
                        type: 'Decreto',
                        text: 'BRASIL. Decreto nº 5.800, de 8 de junho de 2006. Dispõe sobre o Sistema Universidade Aberta do Brasil — UAB.'
                      },
                      {
                        type: 'Decreto revogado',
                        text: 'BRASIL. Decreto nº 9.057, de 25 de maio de 2017. Regulamentou o art. 80 da Lei nº 9.394/1996. Norma revogada pelo Decreto nº 12.456/2025.'
                      },
                      {
                        type: 'Decreto vigente',
                        text: 'BRASIL. Decreto nº 12.456, de 19 de maio de 2025. Dispõe sobre a oferta de educação a distância por instituições de educação superior em cursos de graduação.'
                      }
                    ]
                  },
                  {
                    id: 'materiais-institucionais',
                    label: 'Materiais institucionais',
                    items: [
                      {
                        type: 'Volume 1',
                        text: 'UNIVERSIDADE FEDERAL DE PERNAMBUCO. Secretaria de Programas de Educação Aberta e Digital. Educação a Distância no Brasil: conceituação, trajetória histórica e consolidação da modalidade. Volume 1. Recife: UFPE/SPREAD, 2026.'
                      },
                      {
                        type: 'Volume 2',
                        text: 'UNIVERSIDADE FEDERAL DE PERNAMBUCO. Secretaria de Programas de Educação Aberta e Digital. Regulação da Educação a Distância no Brasil: trajetória normativa, qualidade e o novo marco regulatório. Volume 2. Recife: UFPE/SPREAD, 2026.'
                      },
                      {
                        type: 'Guia orientador',
                        text: 'BARBOSA, Dayse Patrícia Pereira. Guia Orientador para Adequação dos Cursos de Licenciatura ao Novo Marco Legal da EaD. Recife: UFPE/SPREAD/UAB, 2025.'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: '02',
        status: 'published',
        cardTitle: 'Regulação da EaD e o Novo Marco Regulatório',
        title: 'Regulação da EaD e o Novo Marco Regulatório',
        banner: 'assets/banner-modulo-02.webp',
        bannerPosition: 'center',
        pages: [
          {
            id: '01',
            label: 'Introdução',
            unit: 'Unidade 01',
            title: 'Apresentação',
            blocks: [
              {
                type: 'video',
                slot: 'lead',
                title: 'Vídeo de abertura do Módulo 2',
                description: 'Regulação da EaD e o Novo Marco Regulatório',
                provider: 'Eduplay',
                embedUrl: 'https://eduplay.rnp.br/app/video/embed/465299'
              },
              {
                type: 'narrative',
                heading: 'Do conceito à organização da oferta',
                paragraphs: [
                  'No eixo anterior (Módulo 1 deste curso), você conheceu os conceitos fundamentais que estruturam o Decreto nº 12.456/2025 — atividade presencial, atividade síncrona, atividade síncrona mediada e atividade assíncrona — além das noções de tutor, mediador pedagógico e Polo de Educação a Distância. Neste eixo, esses conceitos passam a ser aplicados à organização concreta dos cursos de graduação, a partir dos formatos de oferta previstos na nova legislação.',
                  'O art. 4º do Decreto nº 12.456/2025 estabelece que os cursos de graduação podem ser ofertados em três formatos: presencial, semipresencial e a distância. Cada formato corresponde a uma combinação específica de atividades presenciais, síncronas, síncronas mediadas e assíncronas, com percentuais mínimos de presencialidade definidos nos arts. 10, 11 e 12.',
                  'A legislação também reconhece que nem toda área do conhecimento comporta os três formatos da mesma maneira. Cursos como Direito, Medicina, Enfermagem, Odontologia e Psicologia têm exigência de oferta exclusivamente presencial (art. 8º), e é vedada a oferta a distância para a área de saúde em geral, para as licenciaturas e para diversas outras áreas (art. 9º). Essas escolhas normativas se apoiam na especificidade formativa de cada profissão, que demanda prática, supervisão e presença física em graus distintos.',
                  'Por fim, o eixo aborda a infraestrutura mínima exigida na sede da instituição e no Polo EaD (arts. 27 e 29), condição necessária para que as atividades presenciais e as avaliações previstas em cada formato de oferta possam efetivamente ocorrer.'
                ]
              },
              {
                type: 'regulatoryNotice',
                label: 'Olho na norma',
                statements: [
                  'Art. 4º do Decreto nº 12.456/2025: cursos de graduação podem ser ofertados em três formatos — presencial, semipresencial e a distância —, com percentuais mínimos de presencialidade definidos nos arts. 10, 11 e 12.'
                ]
              },
              {
                type: 'regulatoryNotice',
                label: 'Olho na norma',
                statements: [
                  'Art. 8º: Direito, Medicina, Enfermagem, Odontologia e Psicologia têm oferta exclusivamente presencial. Art. 9º: é vedada a oferta a distância para a área de saúde em geral, para as licenciaturas e para diversas outras áreas.'
                ]
              },
              {
                type: 'knowledgeNote',
                variant: 'practice',
                label: 'Na prática',
                icon: 'presence',
                paragraphs: [
                  'A presencialidade exigida em cada formato só se sustenta se a sede da instituição e o Polo EaD tiverem a infraestrutura mínima prevista nos arts. 27 e 29 do Decreto.'
                ]
              },
              {
                type: 'resourceLinks',
                eyebrow: 'Saiba mais',
                heading: 'Documentos para consulta',
                description: 'Acesse as normas e o FAQ citados nesta apresentação.',
                links: [
                  { label: 'Decreto nº 12.456/2025', href: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12456.htm' },
                  { label: 'Formatos de oferta — FAQ MEC', href: 'https://www.gov.br/mec/pt-br/acesso-a-informacao/perguntas-frequentes/educacao-a-distancia/quais-os-formatos-de-oferta' },
                  { label: 'Portaria MEC nº 378/2025', href: 'https://www.in.gov.br/web/dou/-/portaria-mec-n-378-de-19-de-maio-de-2025-630395302' },
                  { label: 'Portaria MEC nº 506/2025', href: 'https://www.in.gov.br/en/web/dou/-/portaria-mec-n-506-de-10-de-julho-de-2025-641610361' }
                ]
              },
              {
                type: 'accordionGroup',
                label: 'Objetivos da unidade',
                items: [
                  {
                    id: 'objetivo-geral-modulo-02-unidade-01',
                    title: 'Objetivo geral',
                    paragraphs: [
                      'Compreender os três formatos de oferta de cursos de graduação previstos no Decreto nº 12.456/2025, os percentuais mínimos de presencialidade exigidos em cada formato, as vedações estabelecidas por área do conhecimento e os requisitos mínimos de infraestrutura da sede e do Polo EaD.'
                    ]
                  },
                  {
                    id: 'objetivos-aprendizagem-modulo-02-unidade-01',
                    title: 'Objetivos de aprendizagem',
                    paragraphs: [
                      'Ao concluir este eixo, espera-se que o participante consiga:'
                    ],
                    list: [
                      'distinguir os três formatos de oferta previstos no art. 4º do Decreto nº 12.456/2025: presencial, semipresencial e a distância;',
                      'reconhecer os percentuais mínimos de presencialidade exigidos para cada formato, conforme os arts. 10, 11 e 12;',
                      'identificar os cursos que devem ser ofertados exclusivamente de forma presencial e aqueles cuja oferta a distância é vedada, conforme os arts. 8º e 9º;',
                      'relacionar as vedações por área do conhecimento à especificidade formativa de cada curso;',
                      'reconhecer os requisitos mínimos de infraestrutura da sede e do Polo EaD, conforme os arts. 27 e 29.'
                    ]
                  }
                ]
              },
              {
                type: 'contentImage',
                src: 'assets/infografico-pagina01mod02.webp',
                alt: 'Infográfico de apoio da Unidade 01 do Módulo 02.',
                captionTitle: 'Infográfico de apoio',
                caption: 'Organização da oferta, garantia de qualidade e diferentes contextos de aprendizagem na Educação a Distância.'
              }
            ]
          },
          {
            id: '02',
            label: 'Situação-problema',
            unit: 'Unidade 01',
            title: 'Situação-problema',
            blocks: [
              {
                type: 'caseStudy',
                heading: 'Qual é o formato certo para este curso?',
                image: '',
                paragraphs: [
                  'A coordenação de curso da UAB/UFPE está revisando o Projeto Pedagógico de Curso (PPC) de uma licenciatura ofertada no formato semipresencial. Durante o levantamento de melhorias, a equipe recebe a sugestão de ampliar a carga horária de atividades a distância, como forma de reduzir os custos de deslocamento dos estudantes até o polo.',
                  'Na mesma reunião, surgem dúvidas sobre até que ponto a carga horária presencial pode ser reduzida, se o curso poderia migrar para o formato integralmente a distância e quais estruturas o Polo EaD precisa oferecer para sustentar as atividades presenciais já previstas na matriz curricular.',
                  'Um integrante da equipe afirma: “Se ampliarmos a carga a distância, conseguimos reduzir custos. Talvez até possamos oferecer o curso totalmente a distância, já que isso é só uma questão de organização interna do PPC.” Outro integrante responde: “Isso não é possível. As licenciaturas estão entre os cursos vedados à oferta a distância pelo Decreto nº 12.456/2025. Precisamos verificar os percentuais mínimos de presencialidade do formato semipresencial e os requisitos de infraestrutura do polo antes de propor qualquer mudança.”'
                ]
              },
              {
                type: 'attentionNotice',
                label: 'Atenção',
                paragraphs: [
                  '“É só uma questão de organização interna do PPC” é um equívoco: as licenciaturas estão entre os cursos vedados à oferta a distância pelo Decreto nº 12.456/2025 — não é possível migrar livremente para esse formato.'
                ]
              },
              {
                type: 'stickyStack',
                heading: 'Para refletir',
                showCount: false,
                items: [
                  {
                    id: 'fala-correta',
                    text: 'Qual das duas falas está correta?'
                  },
                  {
                    id: 'formatos-oferta',
                    text: 'Quais são os três formatos de oferta previstos no Decreto nº 12.456/2025?'
                  },
                  {
                    id: 'restricoes-por-area',
                    text: 'Por que algumas áreas do conhecimento têm restrições específicas quanto à oferta a distância?'
                  },
                  {
                    id: 'percentuais-presencialidade',
                    text: 'Que percentual mínimo de presencialidade cada formato de oferta exige?'
                  },
                  {
                    id: 'infraestrutura-minima',
                    text: 'Que estrutura mínima a sede e o Polo EaD devem oferecer para sustentar as atividades presenciais previstas em cada formato?'
                  }
                ]
              }
            ]
          },
          {
            id: '03',
            label: 'Formatos de oferta',
            unit: 'Unidade 01',
            title: 'Capítulo 1 - Os três formatos de oferta e seus percentuais de presencialidade',
            headingSize: 'compact',
            blocks: [
              {
                type: 'narrative',
                heading: 'Oferta não é apenas rótulo',
                paragraphs: [
                  'O art. 4º do decreto estabelece três formatos de oferta para os cursos de graduação: presencial, semipresencial e a distância. Cada formato representa uma combinação diferente de atividades presenciais e a distância, e não apenas um rótulo administrativo atribuído ao curso.',
                  'No formato presencial, o art. 10 exige o mínimo de 70% da carga horária total em atividades presenciais; até 30% da carga horária pode ser cumprida em atividades a distância, síncronas ou assíncronas.',
                  'No formato semipresencial, o art. 11 exige o mínimo de 30% da carga horária total em atividades presenciais, somado a um mínimo adicional de 20% em atividades presenciais ou síncronas mediadas.',
                  'No formato a distância, o art. 12 exige o mínimo de 10% da carga horária total em atividades presenciais, somado a um mínimo adicional de 10% em atividades presenciais ou síncronas mediadas. Mesmo no formato a distância, a legislação preserva um núcleo mínimo de presencialidade e de mediação em tempo real.'
                ]
              },
              {
                type: 'knowledgeNote',
                label: 'Conceito-chave',
                icon: 'book',
                paragraphs: [
                  'Os três formatos de oferta (art. 4º) não são apenas etiquetas administrativas: cada um define uma combinação específica de atividades presenciais, síncronas, síncronas mediadas e assíncronas.'
                ]
              },
              {
                type: 'dataFocus',
                label: 'Dados em foco',
                paragraphs: [
                  'Presencial (art. 10): mínimo 70% presencial. Semipresencial (art. 11): mínimo 30% presencial + 20% presencial/síncrono mediado. A distância (art. 12): mínimo 10% presencial + 10% presencial/síncrono mediado.'
                ]
              },
              {
                type: 'comparisonPrompt',
                label: 'Compare',
                paragraphs: [
                  'O infográfico a seguir compara os três formatos de oferta quanto ao percentual mínimo presencial e ao percentual complementar exigido.'
                ]
              },
              {
                type: 'offerFormats',
                eyebrow: 'Infográfico comparativo',
                heading: 'Presencialidade por formato',
                introduction: 'Compare os percentuais mínimos e os componentes complementares que estruturam cada formato de oferta previsto no Decreto nº 12.456/2025.',
                items: [
                  {
                    id: 'formato-presencial',
                    title: 'Presencial',
                    legalBasis: 'Art. 10',
                    primaryLabel: 'Mínimo presencial',
                    primaryValue: '70%',
                    primaryText: 'da carga horária total em atividades presenciais.',
                    complementLabel: 'Carga flexível',
                    complementValue: 'até 30%',
                    complementText: 'pode ser cumprida a distância, em atividades síncronas ou assíncronas.',
                    note: 'A presencialidade é o eixo dominante do formato.'
                  },
                  {
                    id: 'formato-semipresencial',
                    title: 'Semipresencial',
                    legalBasis: 'Art. 11',
                    primaryLabel: 'Mínimo presencial',
                    primaryValue: '30%',
                    primaryText: 'da carga horária total em atividades presenciais.',
                    complementLabel: 'Exigência adicional',
                    complementValue: '+20%',
                    complementText: 'em atividades presenciais ou síncronas mediadas.',
                    note: 'As duas exigências são mínimas e cumulativas.'
                  },
                  {
                    id: 'formato-a-distancia',
                    title: 'A distância',
                    legalBasis: 'Art. 12',
                    primaryLabel: 'Mínimo presencial',
                    primaryValue: '10%',
                    primaryText: 'da carga horária total em atividades presenciais.',
                    complementLabel: 'Exigência adicional',
                    complementValue: '+10%',
                    complementText: 'em atividades presenciais ou síncronas mediadas.',
                    note: 'Mesmo na EaD, há núcleo mínimo de presencialidade e mediação em tempo real.'
                  }
                ]
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'O formato semipresencial exige, no mínimo, 30% da carga horária total em atividades presenciais, somados a, no mínimo, mais 20% em atividades presenciais ou síncronas mediadas.',
                correctAnswer: true,
                correctAnswerLabel: 'Verdadeiro',
                explanation: 'Correto. O art. 11 do Decreto nº 12.456/2025 estabelece essas duas exigências mínimas e cumulativas para o formato semipresencial.'
              }
            ]
          },
          {
            id: '04',
            label: 'Vedações por área',
            unit: 'Unidade 01',
            title: 'Capítulo 2 - Vedações por área do conhecimento e cursos de oferta exclusivamente presencial',
            headingSize: 'compact',
            blocks: [
              {
                type: 'narrative',
                heading: 'Nem todo curso pode escolher qualquer formato',
                paragraphs: [
                  'Nem todos os cursos podem ser ofertados livremente nos três formatos. O Decreto nº 12.456/2025 estabelece vedações específicas por área do conhecimento, reconhecendo que a natureza formativa de certas profissões exige presença física, prática supervisionada e acompanhamento direto em graus distintos.',
                  'O art. 8º determina que os cursos de Direito, Medicina, Enfermagem, Odontologia e Psicologia sejam ofertados exclusivamente no formato presencial, vedada a oferta desses cursos nos formatos semipresencial ou a distância.',
                  'A Portaria MEC nº 378/2025 detalha essa regra: Medicina deve ser ofertada integralmente por meio de atividades presenciais, enquanto Direito, Enfermagem, Odontologia e Psicologia devem observar o mínimo de 70% da carga horária em atividades presenciais.',
                  'O art. 9º veda a oferta de curso de graduação a distância para a área de saúde em geral, exceto os cursos já tratados no art. 8º; as licenciaturas; e outros cursos que venham a ser definidos em ato do Ministro da Educação.',
                  'A Portaria MEC nº 378/2025 detalha as áreas alcançadas pela vedação ao formato a distância: Educação; Ciências Naturais, Matemática e Estatística; Saúde e Bem-Estar; Engenharia, Produção e Construção; e Agricultura, Silvicultura, Pesca e Veterinária, além das regras específicas para Direito, Enfermagem, Medicina, Odontologia e Psicologia.',
                  'Desde maio de 2025 fica vedada a oferta de licenciaturas 100% a distância: não são permitidas novas matrículas nesse formato, os estudantes já matriculados mantêm o direito de concluir o curso no formato de ingresso, e as instituições devem reorganizar esses cursos para o formato semipresencial, observando o mínimo de 30% de presencialidade.'
                ]
              },
              {
                type: 'regulatoryNotice',
                label: 'Olho na norma',
                statements: [
                  'Art. 9º: vedada a oferta a distância para a área de saúde em geral (exceto os cursos do art. 8º), para as licenciaturas e para outros cursos definidos em ato do Ministro da Educação.'
                ]
              },
              {
                type: 'courseRestrictions',
                eyebrow: 'Mapa normativo',
                heading: 'Restrições de oferta',
                introduction: 'Alguns cursos e áreas têm limites próprios porque a formação exige presença física, prática supervisionada e acompanhamento direto. O mapa abaixo organiza as vedações centrais dos arts. 8º e 9º e a regra de transição para licenciaturas.',
                groups: [
                  {
                    id: 'oferta-exclusivamente-presencial',
                    law: 'Art. 8º',
                    title: 'Oferta exclusivamente presencial',
                    description: 'Cursos que não podem ser ofertados nos formatos semipresencial ou a distância.',
                    items: [
                      'Medicina: 100% de atividades presenciais, conforme detalhamento do Guia Orientador.',
                      'Direito: mínimo de 70% de atividades presenciais.',
                      'Enfermagem: mínimo de 70% de atividades presenciais.',
                      'Odontologia: mínimo de 70% de atividades presenciais.',
                      'Psicologia: mínimo de 70% de atividades presenciais.'
                    ],
                    emphasis: true
                  },
                  {
                    id: 'oferta-a-distancia-vedada',
                    law: 'Art. 9º',
                    title: 'Oferta a distância vedada',
                    description: 'Áreas e cursos que não podem ser organizados como graduação a distância, conforme o art. 9º e o detalhamento da Portaria MEC nº 378/2025.',
                    items: [
                      'Área de saúde em geral, exceto os cursos já tratados no art. 8º.',
                      'Educação, incluindo as licenciaturas.',
                      'Ciências Naturais, Matemática e Estatística.',
                      'Saúde e Bem-Estar.',
                      'Engenharia, Produção e Construção.',
                      'Agricultura, Silvicultura, Pesca e Veterinária.',
                      'Outros cursos definidos em ato do Ministro da Educação.'
                    ]
                  }
                ],
                transition: {
                  mark: '2025',
                  eyebrow: 'Licenciaturas',
                  heading: 'Regra de transição',
                  items: [
                    'Não são permitidas novas matrículas em licenciaturas 100% a distância.',
                    'Estudantes já matriculados mantêm o direito de concluir no formato de ingresso.',
                    'As instituições devem reorganizar esses cursos para o formato semipresencial, com mínimo de 30% de presencialidade.'
                  ]
                }
              },
              {
                type: 'attentionNotice',
                label: 'Atenção',
                paragraphs: [
                  'Desde maio de 2025 é vedada a oferta de licenciaturas 100% a distância: não há novas matrículas nesse formato, quem já estava matriculado mantém o direito de concluir no formato de ingresso, e as instituições devem reorganizar esses cursos para o formato semipresencial, com mínimo de 30% de presencialidade.'
                ]
              },
              {
                type: 'resourceLinks',
                eyebrow: 'Saiba mais',
                heading: 'Regras de oferta e transição',
                links: [
                  { label: 'Portaria MEC nº 378/2025', href: 'https://www.in.gov.br/web/dou/-/portaria-mec-n-378-de-19-de-maio-de-2025-630395302' },
                  { label: 'Regras de transição — Portaria MEC nº 381/2025', href: 'https://mecnormas.mec.gov.br/pesquisa/detalhar/4599' },
                  { label: 'FAQ MEC — aplicação gradual das mudanças', href: 'https://www.gov.br/mec/pt-br/acesso-a-informacao/perguntas-frequentes/educacao-a-distancia/as-mudancas-se-aplicam-imediatamente' }
                ]
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'É permitido oferecer um curso de Enfermagem no formato a distância, desde que a instituição garanta acompanhamento pedagógico adequado.',
                correctAnswer: false,
                correctAnswerLabel: 'Falso',
                explanation: 'O art. 8º do Decreto nº 12.456/2025 determina que o curso de Enfermagem seja ofertado exclusivamente no formato presencial, com o percentual mínimo de 70% de atividades presenciais.'
              }
            ]
          },
          {
            id: '05',
            label: 'Infraestrutura',
            unit: 'Unidade 01',
            title: 'Capítulo 3 - Infraestrutura da sede e do Polo EaD',
            headingSize: 'compact',
            blocks: [
              {
                type: 'narrative',
                heading: 'A estrutura torna a presencialidade possível',
                paragraphs: [
                  'A presencialidade exigida nos formatos apresentados nas unidades anteriores só se concretiza se a sede da instituição e o Polo EaD tiverem infraestrutura adequada para receber estudantes, professores, mediadores pedagógicos e tutores.',
                  'O art. 27 estabelece que a sede da instituição deve dispor de recepção; secretaria acadêmica; salas de professores e coordenadores; espaço para a Comissão Própria de Avaliação (CPA); laboratórios; salas ou ambientes de estudo; e conectividade adequada.',
                  'O art. 29 estabelece que o Polo EaD deve dispor de recepção; sala de coordenação; salas ou ambientes de estudo; laboratórios, quando aplicável; e conectividade. O Polo funciona também como ponto de conexão entre a instituição e os campos de prática e estágio dos estudantes, e como espaço de interação com a comunidade para atividades de extensão.',
                  'O § 5º do art. 29 veda expressamente o compartilhamento de um mesmo Polo EaD entre instituições de educação superior diferentes.'
                ]
              },
              {
                type: 'regulatoryNotice',
                label: 'Olho na norma',
                statements: [
                  'Art. 27: a sede da instituição deve dispor de recepção, secretaria acadêmica, salas de professores e coordenadores, espaço para a CPA, laboratórios, salas de estudo e conectividade adequada.',
                  'Art. 29: o Polo EaD deve dispor de recepção, sala de coordenação, salas de estudo, laboratórios (quando aplicável) e conectividade.'
                ]
              },
              {
                type: 'courseRestrictions',
                eyebrow: 'Mapa de infraestrutura',
                heading: 'Sede e Polo EaD: estrutura mínima',
                introduction: 'Os ambientes têm funções complementares para viabilizar as atividades presenciais, as avaliações e a interação com a comunidade.',
                icon: 'spatial',
                groups: [
                  {
                    id: 'estrutura-sede',
                    law: 'Art. 27',
                    title: 'Sede da instituição',
                    description: 'Estrutura acadêmica e administrativa necessária à oferta do curso.',
                    items: [
                      'Recepção e secretaria acadêmica.',
                      'Salas de professores e coordenadores.',
                      'Espaço para a Comissão Própria de Avaliação (CPA).',
                      'Laboratórios e salas ou ambientes de estudo.',
                      'Conectividade adequada.'
                    ],
                    emphasis: true
                  },
                  {
                    id: 'estrutura-polo',
                    law: 'Art. 29',
                    title: 'Polo EaD',
                    description: 'Ponto de apoio acadêmico, de prática, estágio, extensão e interação com a comunidade.',
                    items: [
                      'Recepção e sala de coordenação.',
                      'Salas ou ambientes de estudo.',
                      'Laboratórios, quando aplicável.',
                      'Conectividade.',
                      'Articulação com campos de prática e estágio.'
                    ]
                  }
                ]
              },
              {
                type: 'attentionNotice',
                label: 'Atenção',
                paragraphs: [
                  'O § 5º do art. 29 veda expressamente o compartilhamento de um mesmo Polo EaD entre instituições de educação superior diferentes — uma prática que poderia parecer uma forma válida de reduzir custos, mas não é permitida.'
                ]
              },
              {
                type: 'resourceLinks',
                eyebrow: 'Saiba mais',
                heading: 'Normas sobre infraestrutura',
                links: [
                  { label: 'Decreto nº 12.456/2025 — arts. 27 a 29', href: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12456.htm' },
                  { label: 'Portaria MEC nº 506/2025', href: 'https://www.in.gov.br/en/web/dou/-/portaria-mec-n-506-de-10-de-julho-de-2025-641610361' }
                ]
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'É permitido que duas instituições de educação superior compartilhem o mesmo Polo EaD para reduzir custos operacionais.',
                correctAnswer: false,
                correctAnswerLabel: 'Falso',
                explanation: 'O § 5º do art. 29 do Decreto nº 12.456/2025 veda expressamente o compartilhamento de Polo EaD entre instituições de educação superior diferentes.'
              },
              {
                type: 'multipleChoice',
                eyebrow: 'Retomada da situação-problema',
                heading: 'Qual afirmação está de acordo com o Decreto?',
                question: 'Na reunião de planejamento do PPC descrita na situação-problema, qual afirmação está de acordo com o Decreto nº 12.456/2025?',
                options: [
                  { id: 'a', label: 'A)', text: 'O curso pode ser ofertado 100% a distância, pois isso reduz os custos de deslocamento dos estudantes até o polo.' },
                  { id: 'b', label: 'B)', text: 'O curso pode ampliar livremente a carga horária a distância, desde que mantenha ao menos 10% de atividades presenciais.' },
                  { id: 'c', label: 'C)', text: 'Por se tratar de licenciatura, a oferta a distância é vedada; o curso deve observar os percentuais mínimos do formato semipresencial ou migrar para o formato presencial.' },
                  { id: 'd', label: 'D)', text: 'A decisão sobre o formato de oferta cabe exclusivamente à equipe do polo, sem relação com a legislação vigente.' }
                ],
                correctAnswer: 'c',
                correctAnswerLabel: 'C',
                correctFeedback: 'Correto. O art. 9º do Decreto nº 12.456/2025 veda a oferta a distância para as licenciaturas. Como o curso já é ofertado no formato semipresencial, a equipe deve observar os percentuais mínimos exigidos pelo art. 11.',
                incorrectFeedback: 'Revise as Unidades 1 e 2 deste eixo. As licenciaturas estão entre os cursos vedados à oferta a distância, e os percentuais mínimos de presencialidade de cada formato são definidos pelos arts. 10, 11 e 12.'
              },
              {
                type: 'summary',
                eyebrow: 'Em resumo',
                heading: 'Síntese da Unidade 01',
                summaryNote: {
                  label: 'Em resumo',
                  icon: 'layers',
                  paragraphs: [
                    'A Unidade 1 apresentou os três formatos de oferta do art. 4º e seus percentuais mínimos de presencialidade (arts. 10 a 12), as vedações por área do conhecimento (arts. 8º e 9º) e os requisitos mínimos de infraestrutura da sede e do Polo EaD (arts. 27 e 29).'
                  ]
                },
                items: [
                  'O Decreto nº 12.456/2025 estabelece três formatos de oferta: presencial, semipresencial e a distância (art. 4º).',
                  'Cada formato exige percentuais mínimos distintos de atividades presenciais: 70% no presencial; 30% + 20% presencial ou síncrona mediada no semipresencial; e 10% + 10% presencial ou síncrona mediada no formato a distância.',
                  'Direito, Medicina, Enfermagem, Odontologia e Psicologia devem ser ofertados exclusivamente no formato presencial (art. 8º).',
                  'É vedada a oferta a distância para a área de saúde em geral, para as licenciaturas e para diversas outras áreas (art. 9º).',
                  'A sede deve dispor de recepção, secretaria acadêmica, salas de professores e coordenadores, espaço para a CPA, laboratórios, salas de estudo e conectividade (art. 27).',
                  'O Polo EaD deve oferecer recepção, sala de coordenação, salas de estudo, laboratórios quando aplicável e conectividade; é vedado o compartilhamento entre instituições diferentes (art. 29).'
                ]
              }
            ]
          },
          {
            id: '06',
            label: 'Apresentação',
            unit: 'Unidade 02',
            title: 'Docência, Mediação Pedagógica, Tutoria e Avaliação da Aprendizagem',
            headingSize: 'compact',
            blocks: [
              {
                type: 'narrative',
                heading: 'Funções distintas, responsabilidades complementares',
                paragraphs: [
                  'Todo curso ofertado pela Universidade Aberta do Brasil conta com uma equipe de profissionais que exercem funções distintas, mas complementares. Coordenador de curso, professor regente, professor conteudista, mediador pedagógico e tutor não são termos intercambiáveis: cada um corresponde a uma atribuição específica, prevista no Decreto nº 12.456/2025, que organiza o corpo docente e a mediação pedagógica no Capítulo III da norma.',
                  'Essa organização não é apenas formal. Ela define quem responde pelo planejamento e pela regência de cada unidade curricular, quem elabora os materiais didáticos, quem realiza a mediação pedagógica do conteúdo junto aos estudantes e quem presta apoio administrativo ao longo do curso.',
                  'O Decreto também estabelece regras específicas para a avaliação da aprendizagem: exige a presencialidade das avaliações em todas as unidades curriculares ofertadas parcial ou integralmente a distância, determina peso majoritário das avaliações presenciais na nota final, exige que elementos voltados ao desenvolvimento de habilidades discursivas de análise e síntese componham, no mínimo, um terço do peso da avaliação e reforça a obrigatoriedade do controle de frequência.',
                  'Neste eixo, você vai conhecer os integrantes do corpo docente previstos na legislação, entender a função da mediação pedagógica, diferenciar com precisão as atribuições do tutor das atribuições do mediador e compreender as exigências normativas para a avaliação da aprendizagem e para o controle de frequência.'
                ]
              },
              {
                type: 'knowledgeNote',
                label: 'Conceito-chave',
                icon: 'book',
                paragraphs: [
                  'Coordenador de curso, professor regente, professor conteudista, mediador pedagógico e tutor não são termos intercambiáveis: cada um corresponde a uma atribuição específica prevista no Decreto nº 12.456/2025.'
                ]
              },
              {
                type: 'regulatoryNotice',
                label: 'Olho na norma',
                statements: [
                  'O Decreto exige presencialidade das avaliações em unidades curriculares ofertadas parcial ou integralmente a distância, peso majoritário das avaliações presenciais na nota final, mínimo de um terço do peso da avaliação destinado a elementos discursivos de análise e síntese e controle de frequência obrigatório.'
                ]
              },
              {
                type: 'accordionGroup',
                label: 'Objetivos da unidade',
                items: [
                  {
                    id: 'objetivo-geral-modulo-02-unidade-02',
                    title: 'Objetivo geral',
                    paragraphs: [
                      'Compreender a organização do corpo docente e da mediação pedagógica prevista no Decreto nº 12.456/2025, bem como as regras de avaliação da aprendizagem e de controle de frequência, distinguindo com precisão as atribuições do tutor das atribuições do mediador pedagógico.'
                    ]
                  },
                  {
                    id: 'objetivos-aprendizagem-modulo-02-unidade-02',
                    title: 'Objetivos de aprendizagem',
                    paragraphs: [
                      'Ao concluir este eixo, espera-se que o participante consiga:'
                    ],
                    list: [
                      'identificar os integrantes do corpo docente: coordenador de curso, professor regente e professor conteudista;',
                      'caracterizar a função do mediador pedagógico, sua formação acadêmica compatível e o limite de 70 estudantes por mediador nas atividades síncronas mediadas;',
                      'diferenciar as atribuições administrativas do tutor das atribuições de mediação pedagógica exercidas pelo mediador e pelo corpo docente;',
                      'reconhecer as regras de avaliação da aprendizagem: presencialidade, peso majoritário na nota final e mínimo de um terço do peso da avaliação destinado a elementos discursivos de análise e síntese;',
                      'reconhecer a obrigatoriedade do controle de frequência nas atividades presenciais e síncronas mediadas.'
                    ]
                  }
                ]
              },
              {
                type: 'contentImage',
                src: 'assets/infografico-pagina06mod02.webp',
                alt: 'Infográfico sobre as funções da equipe de docência e mediação na Educação a Distância: coordenador de curso, professor regente, professor conteudista, mediador pedagógico e tutor.',
                captionTitle: 'Funções distintas, responsabilidades complementares',
                caption: 'Equipe de docência e mediação na EaD: coordenador de curso, professor regente, professor conteudista, mediador pedagógico e tutor.'
              }
            ]
          },
          {
            id: '07',
            label: 'Situação-problema',
            unit: 'Unidade 02',
            title: 'Situação-problema',
            blocks: [
              {
                type: 'caseStudy',
                heading: 'Quem responde pelo quê na equipe do curso?',
                image: '',
                paragraphs: [
                  'Em uma turma de licenciatura ofertada pela UAB/UFPE, uma estudante envia uma mensagem à tutora do curso pedindo que ela corrija novamente uma questão discursiva da avaliação presencial, alegando que a nota não refletiu o conteúdo estudado nas videoaulas.',
                  'No mesmo período, a coordenação do curso percebe que há divergências na equipe sobre quem deve conduzir as atividades síncronas mediadas, quem pode formular e corrigir questões discursivas e se a avaliação de uma unidade curricular ofertada a distância pode ser composta somente por questões objetivas.',
                  'Durante uma reunião de equipe, um integrante afirma: “Como tutor, posso conduzir a mediação pedagógica do conteúdo e corrigir as provas discursivas, já que atuo lado a lado com o professor e conheço bem a turma.” Outro integrante responde: “Não é bem assim. As atribuições do tutor são administrativas, distintas das funções de mediação pedagógica, que cabem ao mediador pedagógico e ao corpo docente. E, quanto à avaliação, a legislação exige presencialidade, peso majoritário na nota final e no mínimo um terço do peso da avaliação destinado a elementos discursivos de análise e síntese: não é possível avaliar uma unidade curricular a distância somente com questões objetivas.”'
                ]
              },
              {
                type: 'attentionNotice',
                label: 'Atenção',
                paragraphs: [
                  '“Como tutor, posso conduzir a mediação pedagógica e corrigir provas discursivas” é um equívoco comum: as atribuições do tutor são administrativas, distintas das funções de mediação pedagógica, que cabem ao mediador pedagógico e ao corpo docente.'
                ]
              },
              {
                type: 'stickyStack',
                heading: 'Para refletir',
                showCount: false,
                items: [
                  { id: 'afirmacao-alinhada', text: 'Qual das duas afirmações está mais alinhada ao Decreto nº 12.456/2025?' },
                  { id: 'corpo-docente', text: 'Quais são as diferenças entre as atribuições do professor regente, do professor conteudista e do coordenador de curso?' },
                  { id: 'mediacao-e-tutoria', text: 'Em que a mediação pedagógica se diferencia da tutoria administrativa?' },
                  { id: 'limite-mediador', text: 'Por que o mediador pedagógico atende, no máximo, 70 estudantes nas atividades síncronas mediadas?' },
                  { id: 'avaliacao-frequencia', text: 'Que exigências a legislação estabelece para a avaliação da aprendizagem e para o controle de frequência?' }
                ]
              }
            ]
          },
          {
            id: '08',
            label: 'Corpo docente',
            unit: 'Unidade 02',
            title: 'Capítulo 1 - O corpo docente no novo marco regulatório',
            headingSize: 'compact',
            blocks: [
              {
                type: 'narrative',
                heading: 'Composição e responsabilidades do corpo docente',
                paragraphs: [
                  'O Decreto nº 12.456/2025 organiza, no Capítulo III, a composição do corpo docente dos cursos ofertados nos formatos presencial, semipresencial e a distância. O art. 18 estabelece que o corpo docente é formado pelo coordenador de curso, pelo professor regente e pelo professor conteudista.',
                  'O coordenador de curso responde pela organização pedagógica e administrativa do curso como um todo, articulando as ações do corpo docente, da mediação pedagógica e da tutoria, de acordo com o Projeto Pedagógico de Curso.',
                  'O professor regente é responsável pela condução da unidade curricular. As atividades síncronas mediadas — realizadas em tempo real com grupos de até 70 estudantes e controle de frequência obrigatório — podem ser conduzidas pelo professor regente ou pelo mediador pedagógico.',
                  'Já o professor conteudista integra o corpo docente como responsável pela dimensão de produção do curso, relacionada à elaboração dos materiais didáticos que sustentam as unidades curriculares. O art. 22 do Decreto determina que todos os integrantes do corpo docente devem constar no Censo da Educação Superior.'
                ]
              },
              {
                type: 'regulatoryNotice',
                label: 'Olho na norma',
                statements: [
                  'Art. 18: o corpo docente é formado pelo coordenador de curso, pelo professor regente e pelo professor conteudista.'
                ]
              },
              {
                type: 'dataFocus',
                label: 'Dados em foco',
                paragraphs: [
                  'As atividades síncronas mediadas são realizadas em tempo real, com grupos de até 70 estudantes e controle de frequência obrigatório, podendo ser conduzidas pelo professor regente ou pelo mediador pedagógico.'
                ]
              },
              {
                type: 'resourceLinks',
                eyebrow: 'Saiba mais',
                heading: 'Composição do corpo docente',
                links: [
                  { label: 'Decreto nº 12.456/2025 — arts. 17 a 22', href: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12456.htm' },
                  { label: 'Portaria MEC nº 506/2025', href: 'https://www.in.gov.br/en/web/dou/-/portaria-mec-n-506-de-10-de-julho-de-2025-641610361' }
                ]
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'O professor conteudista integra o corpo docente previsto no Decreto nº 12.456/2025, ao lado do coordenador de curso e do professor regente.',
                correctAnswer: true,
                correctAnswerLabel: 'Verdadeiro',
                explanation: 'O art. 18 do Decreto nº 12.456/2025 define o corpo docente como o conjunto formado por coordenador de curso, professor regente e professor conteudista, todos com atribuições próprias no curso.'
              }
            ]
          },
          {
            id: '09',
            label: 'Mediação e tutoria',
            unit: 'Unidade 02',
            title: 'Capítulo 2 - Mediação pedagógica e tutoria: funções distintas',
            headingSize: 'compact',
            blocks: [
              {
                type: 'narrative',
                heading: 'Apoiar não é substituir a mediação pedagógica',
                paragraphs: [
                  'O art. 19 do Decreto nº 12.456/2025 prevê que mediadores pedagógicos auxiliam o corpo docente e devem possuir formação acadêmica compatível com a área do curso. Nas atividades síncronas mediadas, cada mediador pedagógico atende, no máximo, 70 estudantes, sempre com controle de frequência.',
                  'O mediador pedagógico atua na mediação do conteúdo: participa de discussões críticas, seminários colaborativos, resolução de problemas em grupo, mentorias em tempo real e debates sobre práticas, sempre em articulação com o corpo docente.',
                  'Já o art. 21 do Decreto estabelece que os tutores podem auxiliar a equipe do curso com atribuições administrativas, distintas das funções de mediação pedagógica. Cabe ao tutor organizar prazos, orientar sobre o funcionamento do curso, dar suporte administrativo, acompanhar a participação dos estudantes e encaminhar demandas à equipe responsável. A mediação pedagógica do conteúdo, quando não realizada pelo próprio professor regente, é atribuição do mediador pedagógico.'
                ]
              },
              {
                type: 'regulatoryNotice',
                label: 'Olho na norma',
                statements: [
                  'Arts. 3º, IV, e 19: os mediadores pedagógicos auxiliam o corpo docente e devem possuir formação acadêmica compatível; nas atividades síncronas mediadas, o grupo é de, no máximo, 70 estudantes por docente ou mediador pedagógico, com controle de frequência.',
                  'Art. 21: os tutores podem auxiliar a equipe do curso com atribuições administrativas, distintas das funções de mediação pedagógica.'
                ]
              },
              {
                type: 'knowledgeNote',
                variant: 'tutoring',
                label: 'Conexão com a tutoria',
                icon: 'tracking',
                paragraphs: [
                  'Cabe ao tutor organizar prazos, orientar sobre o funcionamento do curso, dar suporte administrativo, acompanhar a participação dos estudantes e encaminhar demandas à equipe responsável sem assumir a mediação pedagógica do conteúdo.'
                ]
              },
              {
                type: 'roleComparison',
                eyebrow: 'Compare',
                heading: 'Mediador pedagógico e tutor',
                introduction: 'O quadro organiza as atribuições descritas no material-fonte para evidenciar a diferença entre mediação pedagógica e apoio administrativo.',
                left: { title: 'Mediador pedagógico' },
                right: { title: 'Tutor' },
                rows: [
                  { label: 'Atuação central', left: 'Atua diretamente no processo de aprendizagem, sob supervisão do professor regente.', right: 'Atua no apoio administrativo ao corpo docente e à organização do curso.' },
                  { label: 'Dúvidas e conteúdo', left: 'Esclarece dúvidas acadêmicas sobre PPC, ementa, metodologias e conteúdos das unidades curriculares.', right: 'Apoia rotinas e procedimentos administrativos, conforme a organização definida pela instituição.' },
                  { label: 'Interação com estudantes', left: 'Interage pedagogicamente com os estudantes nas atividades síncronas e síncronas mediadas.', right: 'Apoia a comunicação e a organização das atividades, sem assumir a condução pedagógica.' },
                  { label: 'Planejamento e avaliação', left: 'Contribui com o planejamento e a avaliação da aprendizagem das unidades curriculares.', right: 'Auxilia registros, organização e acompanhamento administrativo relacionados à oferta do curso.' },
                  { label: 'Acompanhamento', left: 'Acompanha atividades presenciais e a distância, inclusive práticas profissionais, pesquisa e extensão, quando aplicável.', right: 'Presta suporte operacional aos estudantes e à equipe, dentro das atribuições estabelecidas pela IES.' },
                  { label: 'Formação e limite', left: 'Deve possuir graduação em área correlata à sua atuação, sendo preferencial a formação em pós-graduação.', right: 'A Portaria caracteriza sua atuação pela natureza administrativa, distinguindo-a das atribuições pedagógicas do mediador.' }
                ]
              },
              {
                type: 'attentionNotice',
                label: 'Atenção',
                paragraphs: [
                  'Apoiar o estudante não significa exercer mediação pedagógica. O mediador pedagógico atua no processo de ensino e aprendizagem, sob supervisão do professor regente. O tutor exerce atribuições administrativas e não deve substituir professor ou mediador na condução pedagógica.'
                ]
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'O tutor pode substituir o mediador pedagógico na mediação do conteúdo, desde que a turma tenha menos de 70 estudantes.',
                correctAnswer: false,
                correctAnswerLabel: 'Falso',
                explanation: 'O limite de 70 estudantes se refere à atuação do mediador pedagógico nas atividades síncronas mediadas e não autoriza o tutor a assumir a mediação pedagógica. Segundo o art. 21 do Decreto nº 12.456/2025, as atribuições do tutor são administrativas e distintas das funções de mediação pedagógica.'
              }
            ]
          },
          {
            id: '10',
            label: 'Avaliação e frequência',
            unit: 'Unidade 02',
            title: 'Capítulo 3 - Avaliação da aprendizagem e controle de frequência',
            headingSize: 'compact',
            blocks: [
              {
                type: 'narrative',
                heading: 'Avaliar exige presença, evidência e acompanhamento',
                paragraphs: [
                  'O art. 23 do Decreto nº 12.456/2025 exige que as avaliações sejam presenciais em todas as unidades curriculares ofertadas parcial ou integralmente a distância, sejam elas realizadas na sede da instituição, em campi fora de sede ou nos Polos EaD.',
                  'Além da presencialidade, a legislação determina que essas avaliações tenham peso majoritário na composição da nota final do estudante, e que elementos que incentivem habilidades discursivas de análise e síntese componham, no mínimo, um terço do peso da avaliação, exceto nas avaliações de atividades práticas. Cabe à instituição garantir a identificação do estudante no momento da avaliação, conforme o art. 24.',
                  'O Guia Orientador SPREAD/UAB-UFPE sintetiza essas exigências em cinco pontos: a avaliação deve ser presencial em todas as unidades curriculares; deve ocorrer regularmente; deve ter peso majoritário presencial na nota final; deve reservar, no mínimo, um terço do peso da avaliação a elementos discursivos de análise e síntese, exceto nas avaliações de atividades práticas; e deve haver registro obrigatório das atividades presenciais e síncronas.',
                  'O controle de frequência é obrigatório tanto nas avaliações presenciais quanto nas atividades síncronas mediadas, e pode ser realizado por meio de tecnologias digitais de rastreabilidade, identificação do estudante, plataformas de ambiente virtual de aprendizagem integradas e interação síncrona monitorada.'
                ]
              },
              {
                type: 'regulatoryNotice',
                label: 'Olho na norma',
                statements: [
                  'Art. 23: as avaliações devem ser presenciais em todas as unidades curriculares ofertadas parcial ou integralmente a distância, realizadas na sede, em campi fora de sede ou nos Polos EaD.',
                  'O controle de frequência é obrigatório tanto nas avaliações presenciais quanto nas atividades síncronas mediadas, podendo ser realizado por tecnologias digitais de rastreabilidade, identificação do estudante ou interação síncrona monitorada.'
                ]
              },
              {
                type: 'dataFocus',
                label: 'Dados em foco',
                paragraphs: [
                  'As avaliações presenciais devem ter peso majoritário na nota final, e elementos discursivos de análise e síntese devem compor, no mínimo, um terço do peso da avaliação — exceto nas avaliações de atividades práticas.'
                ]
              },
              {
                type: 'knowledgeNote',
                variant: 'practice',
                label: 'Na prática',
                icon: 'presence',
                paragraphs: [
                  'O Guia Orientador SPREAD/UAB-UFPE sintetiza a regra em cinco pontos: avaliação presencial em todas as unidades curriculares; ocorrência regular; peso majoritário presencial na nota final; mínimo de um terço do peso da avaliação destinado a elementos discursivos de análise e síntese, exceto em disciplinas práticas; e registro obrigatório das atividades presenciais e síncronas.'
                ]
              },
              {
                type: 'resourceLinks',
                eyebrow: 'Saiba mais',
                heading: 'Avaliação e frequência',
                links: [
                  { label: 'Decreto nº 12.456/2025 — arts. 6º, 23 e 24', href: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12456.htm' },
                  { label: 'Referenciais de Qualidade para cursos com oferta a distância', href: 'https://www.gov.br/mec/pt-br/politica-regulacao-supervisao-educacao-superior/ead/documentos/referenciais_qualidade.pdf' }
                ]
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'Uma unidade curricular ofertada a distância pode ter sua avaliação composta inteiramente por questões objetivas.',
                correctAnswer: false,
                correctAnswerLabel: 'Falso',
                explanation: 'O Decreto nº 12.456/2025 exige que elementos voltados ao desenvolvimento de habilidades discursivas de análise e síntese correspondam a, no mínimo, um terço do peso da avaliação, exceto nas avaliações de atividades práticas, além de exigir presencialidade e peso majoritário da avaliação presencial na nota final.'
              },
              {
                type: 'multipleChoice',
                eyebrow: 'Retomada da situação-problema',
                heading: 'Atribuições e avaliação',
                question: 'Na situação apresentada, qual alternativa está de acordo com o Decreto nº 12.456/2025 e com o Guia Orientador SPREAD/UAB-UFPE?',
                options: [
                  { id: 'a', label: 'A)', text: 'O tutor pode conduzir a mediação pedagógica do conteúdo e corrigir provas discursivas, desde que a turma tenha menos de 70 estudantes.' },
                  { id: 'b', label: 'B)', text: 'A avaliação da aprendizagem em unidades curriculares ofertadas a distância pode ser inteiramente objetiva, dispensando questões discursivas.' },
                  { id: 'c', label: 'C)', text: 'As atribuições do tutor são de natureza administrativa, distintas das funções de mediação pedagógica exercidas pelo mediador e pelo corpo docente; a avaliação deve ser presencial, com peso majoritário na nota final e no mínimo um terço do peso da avaliação destinado a elementos discursivos de análise e síntese.' },
                  { id: 'd', label: 'D)', text: 'O professor conteudista é responsável por todas as avaliações presenciais dos estudantes, independentemente da organização definida no Projeto Pedagógico de Curso.' }
                ],
                correctAnswer: 'c',
                correctAnswerLabel: 'C',
                correctFeedback: 'Correto. O art. 21 do Decreto nº 12.456/2025 estabelece que as atribuições do tutor são administrativas, distintas das funções de mediação pedagógica. Os arts. 23 e 24 exigem que a avaliação seja presencial, tenha peso majoritário na nota final e reserve, no mínimo, um terço do peso da avaliação a elementos discursivos de análise e síntese, exceto em atividades práticas.',
                incorrectFeedback: 'Revise as Unidades 2 e 3 deste eixo. A mediação pedagógica do conteúdo é atribuição do mediador pedagógico e do corpo docente, não do tutor, e a legislação não admite avaliações compostas somente por questões objetivas nas unidades curriculares ofertadas a distância.'
              },
              {
                type: 'summary',
                eyebrow: 'Em resumo',
                heading: 'Síntese da Unidade 02',
                summaryNote: {
                  label: 'Em resumo',
                  icon: 'layers',
                  paragraphs: [
                    'A Unidade 2 apresentou o corpo docente previsto no Decreto (coordenador, professor regente e professor conteudista — art. 18), a mediação pedagógica (art. 19) e a tutoria (art. 21), além das regras de avaliação da aprendizagem e de controle de frequência (arts. 23 e 24).'
                  ]
                },
                items: [
                  'O corpo docente previsto no Decreto nº 12.456/2025 é formado pelo coordenador de curso, pelo professor regente e pelo professor conteudista (art. 18).',
                  'O professor regente pode conduzir atividades síncronas mediadas, assim como o mediador pedagógico.',
                  'Os mediadores pedagógicos auxiliam o corpo docente e devem ter formação acadêmica compatível com a área do curso (art. 19).',
                  'Cada mediador pedagógico atende, no máximo, 70 estudantes nas atividades síncronas mediadas.',
                  'Os tutores podem auxiliar a equipe com atribuições administrativas, distintas das funções de mediação pedagógica (art. 21).',
                  'Todos os integrantes do corpo docente e da mediação pedagógica devem constar no Censo da Educação Superior (art. 22).',
                  'A avaliação da aprendizagem deve ser presencial, com peso majoritário na nota final e no mínimo um terço do peso da avaliação destinado a elementos discursivos de análise e síntese (arts. 23 e 24).',
                  'O controle de frequência é obrigatório nas atividades presenciais e síncronas mediadas.'
                ]
              }
            ]
          },
          {
            id: '11',
            label: 'Referências',
            unit: 'Módulo 02',
            title: 'Referências',
            blocks: [
              {
                type: 'references',
                showCount: false,
                eyebrow: 'Fontes utilizadas no Módulo 02',
                heading: 'Referências e aprofundamentos',
                introduction: 'Normas, materiais de apoio e vídeos indicados no conteúdo do módulo.',
                groups: [
                  {
                    id: 'fontes-principais',
                    label: 'Fontes principais',
                    items: [
                      { type: 'Decreto', text: 'BRASIL. Decreto nº 12.456, de 19 de maio de 2025. Dispõe sobre a oferta de educação a distância por instituições de educação superior em cursos de graduação.', href: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12456.htm', linkLabel: 'Acesso oficial' },
                      { type: 'Volume 2', text: 'UNIVERSIDADE FEDERAL DE PERNAMBUCO. Secretaria de Programas de Educação Aberta e Digital. Regulação da Educação a Distância no Brasil: trajetória normativa, qualidade e o novo marco regulatório. Volume 2. Recife: UFPE/SPREAD, 2026.' },
                      { type: 'Guia orientador', text: 'UNIVERSIDADE FEDERAL DE PERNAMBUCO. Secretaria de Programas de Educação Aberta e Digital. Guia Orientador para Adequação dos Cursos de Licenciatura ao Novo Marco Legal da Educação a Distância. Produção de Dayse Patrícia Pereira Barbosa. Recife: UFPE/SPREAD/UAB, 2025.' },
                      { type: 'Guia orientador', text: 'UNIVERSIDADE FEDERAL DE PERNAMBUCO. Secretaria de Programas de Educação Aberta e Digital. Guia Orientador para Adequação dos Cursos de Licenciatura ao Novo Marco Legal da Educação a Distância. Recife: UFPE/SPREAD, 2025.' }
                    ]
                  },
                  {
                    id: 'normas-complementares',
                    label: 'Normas complementares e documentos oficiais',
                    items: [
                      { type: 'Portaria', text: 'BRASIL. Ministério da Educação. Portaria MEC nº 378, de 19 de maio de 2025. Dispõe sobre os formatos de oferta dos cursos superiores de graduação.', href: 'https://www.in.gov.br/web/dou/-/portaria-mec-n-378-de-19-de-maio-de-2025-630395302', linkLabel: 'Acesso oficial' },
                      { type: 'Portaria', text: 'BRASIL. Ministério da Educação. Portaria MEC nº 381, de 20 de maio de 2025. Dispõe sobre as regras de transição para aplicação do Decreto nº 12.456/2025. Texto vigente com alterações posteriores, inclusive da Portaria MEC nº 795/2025.', href: 'https://mecnormas.mec.gov.br/pesquisa/detalhar/4599', linkLabel: 'Acesso oficial' },
                      { type: 'Portaria', text: 'BRASIL. Ministério da Educação. Portaria MEC nº 506, de 10 de julho de 2025. Regulamenta formação e atribuições do corpo docente, mediadores, tutores e responsáveis pelos Polos EaD, além de atividades presenciais, avaliações, materiais, plataformas e polos.', href: 'https://www.in.gov.br/en/web/dou/-/portaria-mec-n-506-de-10-de-julho-de-2025-641610361', linkLabel: 'Acesso oficial' },
                      { type: 'Portaria', text: 'BRASIL. Ministério da Educação. Portaria MEC nº 794, de 25 de novembro de 2025. Altera a Portaria MEC nº 506/2025.', href: 'https://mecnormas.mec.gov.br/pesquisa/detalhar/7460', linkLabel: 'Acesso oficial' },
                      { type: 'Documento orientador', text: 'BRASIL. Ministério da Educação. Referenciais de Qualidade para Oferta de Cursos de Graduação a Distância. Documento orientador da nova política de EaD.', href: 'https://www.gov.br/mec/pt-br/politica-regulacao-supervisao-educacao-superior/ead/documentos/referenciais_qualidade.pdf', linkLabel: 'Acesso oficial' },
                      { type: 'Resolução', text: 'BRASIL. Conselho Nacional de Educação. Resolução CNE/CP nº 4, de 29 de maio de 2024. Diretrizes Curriculares Nacionais para a formação inicial de profissionais do magistério da Educação Básica.', href: 'https://mecnormas.mec.gov.br/pesquisa/detalhar/5042', linkLabel: 'Acesso oficial' }
                    ]
                  },
                  {
                    id: 'aprofundamentos',
                    label: 'Links e materiais para aprofundamento',
                    items: [
                      { type: 'FAQ MEC', text: 'MEC — Quais os formatos de oferta dos cursos de graduação? FAQ oficial com os percentuais mínimos de atividades presenciais e síncronas mediadas nos formatos presencial, semipresencial e a distância.', href: 'https://www.gov.br/mec/pt-br/acesso-a-informacao/perguntas-frequentes/educacao-a-distancia/quais-os-formatos-de-oferta' },
                      { type: 'Material visual', text: 'MEC — Material visual da Nova Política de EaD. Síntese visual sobre formatos de oferta, atividades síncronas mediadas, mediação pedagógica, tutoria, avaliações e polos.', href: 'https://www.gov.br/mec/pt-br/politica-regulacao-supervisao-educacao-superior/ead/documentos/flyer.pdf' },
                      { type: 'Referenciais', text: 'MEC — Referenciais de Qualidade para cursos de graduação com oferta a distância. Documento de apoio para planejamento pedagógico, avaliação, interação, materiais, plataformas, corpo docente e infraestrutura.', href: 'https://www.gov.br/mec/pt-br/politica-regulacao-supervisao-educacao-superior/ead/documentos/referenciais_qualidade.pdf' },
                      { type: 'CAPES', text: 'CAPES — Normativos do Sistema Universidade Aberta do Brasil. Página que reúne atos normativos relacionados à UAB e permite acompanhar atualizações que afetam a oferta pública de EaD.', href: 'https://www.gov.br/capes/pt-br/acesso-a-informacao/acoes-e-programas/articulacao-e-inovacao-em-educacao-aberta/sistema-universidade-aberta-do-brasil/normativos-uab' },
                      { type: 'Consulta normativa', text: 'MEC Normas — Sistema de consulta à legislação educacional. Base oficial do MEC para consultar versões vigentes, alterações e relações entre atos normativos.', href: 'https://mecnormas.mec.gov.br/' }
                    ]
                  },
                  {
                    id: 'videos',
                    label: 'Vídeos recomendados',
                    items: [
                      { type: 'Vídeo institucional', text: 'MEC — Nova Política de Educação a Distância (EaD). Vídeo institucional publicado em 19 de maio de 2025, útil para introduzir as mudanças do novo marco regulatório.', href: 'https://www.youtube.com/watch?v=5C6vchlQXiA', linkLabel: 'Assistir' },
                      { type: 'Reportagem', text: 'TV Senado — Educação a distância: o que muda com o marco regulatório. Reportagem explicativa de 2025 sobre formatos de oferta, presencialidade e impactos do Decreto nº 12.456/2025.', href: 'https://www.youtube.com/watch?v=4LtbAsI5Jrw', linkLabel: 'Assistir' }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: '03',
        status: 'draft',
        cardTitle: 'Nome do Módulo 3',
        title: 'Módulo 03',
        pages: []
      },
      {
        id: '04',
        status: 'draft',
        cardTitle: 'Nome do Módulo 4',
        title: 'Módulo 04',
        pages: []
      }
    ]
  });
})();
