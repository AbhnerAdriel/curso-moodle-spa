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
                type: 'scenario',
                paragraphs: [
                  'Uma licenciatura ofertada pela UAB/UFPE atende estudantes de diferentes municípios. Alguns residem longe do polo, conciliam os estudos com o trabalho e dependem do ambiente virtual para acompanhar as atividades.',
                  'Nos últimos meses, a equipe identificou estudantes que acessam os materiais, mas participam pouco das atividades; dificuldades para acompanhar estudantes com baixa frequência; dúvidas sobre o papel do polo nas atividades presenciais; necessidade de melhorar a comunicação entre estudantes e equipe do curso; e incertezas sobre as mudanças trazidas pelo novo marco regulatório.',
                  'Durante uma reunião, um integrante da equipe afirma: "O Decreto nº 9.057/2017 ainda é a principal norma da EaD. Podemos continuar organizando o curso exatamente como fazíamos antes." Outro integrante responde: "Esse decreto foi revogado. Precisamos compreender as mudanças introduzidas pelo Decreto nº 12.456/2025 e analisar como elas afetam a organização dos cursos."'
                ]
              },
              {
                type: 'stickyStack',
                heading: 'Para refletir',
                items: [
                  {
                    id: 'afirmacoes',
                    text: 'Qual das duas afirmações está correta?'
                  },
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
                type: 'ebookReading',
                heading: 'Conteúdo do e-book a utilizar:',
                introduction: 'Consulte os trechos indicados dos e-books para aprofundar os conteúdos abordados nesta etapa. Clique em cada volume para visualizar as páginas e os temas correspondentes.',
                volumes: [
                  {
                    id: 'volume-1',
                    title: 'Volume 1',
                    entries: [
                      {
                        pages: '4',
                        content: 'Apresentação e contextualização histórica da EaD.'
                      },
                      {
                        pages: '5–6',
                        content: 'Conceituação da EaD e elementos que caracterizam a modalidade.'
                      },
                      {
                        pages: '7–8',
                        content: 'Contribuições de Moore e Chaves: diálogo, estrutura, autonomia e mediação.'
                      }
                    ]
                  }
                ]
              },
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
                type: 'video',
                layout: 'section',
                title: 'Educação a Distância: conceitos e características',
                description: 'Aprofundamento em vídeo',
                provider: 'Eduplay',
                embedUrl: 'https://eduplay.rnp.br/app/video/embed/464645'
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
                type: 'ebookReading',
                heading: 'Conteúdo do e-book a utilizar',
                introduction: 'Consulte os trechos indicados dos e-books para aprofundar os conteúdos abordados nesta etapa.',
                volumes: [
                  {
                    id: 'volume-1',
                    title: 'Volume 1',
                    entries: [
                      {
                        pages: '9',
                        content: 'Primeiras experiências brasileiras de ensino por correspondência.'
                      },
                      {
                        pages: '10-11',
                        content: 'Rádio, televisão educativa, MEB e teleducação.'
                      },
                      {
                        pages: '12-13',
                        content: 'LDB e reconhecimento jurídico da EaD.'
                      },
                      {
                        pages: '14-15',
                        content: 'Sistema UAB, rede de cooperação e polos de apoio presencial.'
                      },
                      {
                        pages: '16',
                        content: 'Democratização do acesso, interiorização e equidade territorial.'
                      }
                    ]
                  }
                ]
              },
              {
                type: 'splitNarrative',
                accessibleHeading: 'Contextualização histórica da Educação a Distância no Brasil',
                lead: 'As primeiras experiências brasileiras de Educação a Distância remontam ao início do século XX e estavam ligadas, sobretudo, à formação profissional por correspondência. Em um país marcado por desigualdades educacionais e limitações de infraestrutura, os materiais enviados pelo correio permitiram levar oportunidades de formação a pessoas que não tinham acesso à escola formal.',
                paragraphs: [
                  'Com a expansão dos meios de comunicação, o rádio e a televisão passaram a ser utilizados em iniciativas educativas. O Movimento de Educação de Base, os telecursos e os programas de educação supletiva mostram que a trajetória da EaD está relacionada tanto à evolução tecnológica quanto à democratização do acesso à educação.',
                  'Em 1996, o art. 80 da Lei de Diretrizes e Bases reconheceu juridicamente a Educação a Distância e atribuiu ao poder público a responsabilidade de regulamentar a oferta, o credenciamento, a avaliação e a emissão de diplomas.',
                  'Em 2006, foi instituído o Sistema Universidade Aberta do Brasil. A UAB não é uma universidade autônoma, mas uma rede de cooperação que reúne a União, a CAPES, estados, municípios e instituições públicas de ensino superior. As instituições ofertam os cursos e certificam os estudantes; a CAPES coordena a política e financia bolsas; estados e municípios colaboram com a manutenção dos polos.',
                  'Os polos funcionam como pontos de conexão entre as universidades públicas e os territórios. Neles ocorrem avaliações presenciais, atividades práticas, orientações acadêmicas e suporte administrativo e tecnológico. Essa organização contribui para interiorizar a educação superior e reduzir barreiras geográficas.'
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
                type: 'ebookReading',
                heading: 'Conteúdo do e-book a utilizar',
                introduction: 'Consulte os trechos indicados dos e-books para aprofundar os conteúdos abordados nesta etapa. Clique em cada volume para visualizar as páginas e os temas correspondentes.',
                volumes: [
                  {
                    id: 'volume-1',
                    title: 'Volume 1',
                    entries: [
                      {
                        pages: '17–19',
                        content: 'Expansão das matrículas, dados do Censo e tensão entre expansão e qualidade.'
                      },
                      {
                        pages: '20',
                        content: 'Síntese da trajetória histórica e transição para a regulação.'
                      }
                    ]
                  },
                  {
                    id: 'volume-2',
                    title: 'Volume 2',
                    entries: [
                      {
                        pages: '4–11',
                        content: 'Trajetória normativa: LDB, decretos anteriores, qualidade e polos.'
                      },
                      {
                        pages: '12',
                        content: 'Introdução ao Decreto nº 12.456/2025 e novos conceitos operacionais.'
                      }
                    ]
                  }
                ]
              },
              {
                type: 'regulationContext',
                heading: 'Expansão, qualidade e regulação',
                paragraphs: [
                  'A Educação a Distância passou por um forte processo de expansão na educação superior brasileira. Esse crescimento ampliou oportunidades, reduziu barreiras geográficas e permitiu que mais estudantes chegassem à graduação. Ao mesmo tempo, tornou mais visíveis questões relacionadas à qualidade dos cursos, à infraestrutura, à avaliação e ao acompanhamento pedagógico.',
                  'A regulação da EaD não foi criada de uma só vez. Ela foi sendo construída à medida que novas tecnologias, novos modelos pedagógicos e novos desafios surgiam. O art. 80 da LDB reconheceu a modalidade; os decretos posteriores modificaram as formas de compreender a autoaprendizagem, a mediação, as condições institucionais e a presencialidade.',
                  'O Decreto nº 9.057/2017 representou uma etapa importante dessa trajetória, com destaque para a qualificação das equipes, as políticas de acesso, o acompanhamento estudantil, a avaliação e a organização institucional. Contudo, essa norma foi revogada pelo Decreto nº 12.456/2025.',
                  'O novo decreto passou a organizar os cursos de graduação nos formatos presencial, semipresencial e a distância, além de estabelecer novos conceitos, percentuais de presencialidade, requisitos de mediação, avaliação e infraestrutura. Esses conteúdos são aprofundados nos eixos e módulos seguintes.'
                ]
              },
              {
                type: 'video',
                layout: 'section',
                title: 'Como a EaD dominou o ensino superior',
                description: 'Expansão da Educação a Distância na educação superior brasileira',
                provider: 'Eduplay',
                embedUrl: 'https://eduplay.rnp.br/app/video/embed/464647'
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
                type: 'ebookReading',
                heading: 'Conteúdo do e-book a utilizar',
                introduction: 'Consulte os trechos indicados dos e-books para aprofundar os conteúdos abordados nesta etapa. Clique em cada volume para visualizar as páginas e os temas correspondentes.',
                volumes: [
                  {
                    id: 'volume-2',
                    title: 'Volume 2',
                    entries: [
                      {
                        pages: '12–14',
                        content: 'Cap. 8 — o novo marco regulatório: definições do art. 3º relativas à atividade presencial, síncrona e assíncrona.'
                      }
                    ]
                  }
                ]
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
                type: 'ebookReading',
                heading: 'Conteúdo do e-book a utilizar',
                introduction: 'Consulte os trechos indicados dos e-books para aprofundar os conteúdos abordados nesta etapa. Clique em cada volume para visualizar as páginas e os temas correspondentes.',
                volumes: [
                  {
                    id: 'volume-2',
                    title: 'Volume 2',
                    entries: [
                      {
                        pages: '12–14',
                        content: 'Cap. 8 — a atividade síncrona mediada (art. 3º, IV): grupo de até 70 estudantes por docente ou mediador, com controle de frequência.'
                      }
                    ]
                  },
                  {
                    id: 'guia-orientador-spread-uab-ufpe',
                    title: 'Guia Orientador SPREAD/UAB-UFPE',
                    entries: [
                      {
                        pages: '—',
                        content: 'Definição complementar, meios de registro de frequência e exemplos práticos de aplicação.'
                      }
                    ]
                  }
                ]
              },
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
                paragraphs: [
                  'O limite de até 70 estudantes por docente ou mediador existe para assegurar que a interação em tempo real tenha condições reais de acompanhamento pedagógico. Uma sessão ao vivo com centenas de participantes, sem controle individualizado de frequência, é uma atividade síncrona, mas não pode ser classificada como atividade síncrona mediada.',
                  'O controle de frequência deve ser realizado por meio de tecnologias digitais de rastreabilidade, identificação do estudante, plataformas de ambiente virtual de aprendizagem integradas ou interação síncrona monitorada.'
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
                practiceConclusion: 'Segundo o Guia, esse tipo de atividade é conduzido pelo professor regente ou pelo mediador pedagógico.'
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
                type: 'ebookReading',
                heading: 'Conteúdo do e-book a utilizar',
                introduction: 'Consulte os trechos indicados dos e-books para aprofundar os conteúdos abordados nesta etapa. Clique em cada volume para visualizar as páginas e os temas correspondentes.',
                volumes: [
                  {
                    id: 'volume-2',
                    title: 'Volume 2',
                    entries: [
                      {
                        pages: '12–14',
                        content: 'Cap. 8 — corpo docente e mediação pedagógica (arts. 17 a 22): coordenador de curso, professor regente, professor conteudista, mediador pedagógico e tutor; definição de Polo EaD (art. 3º, VI).'
                      },
                      {
                        pages: '20–21',
                        content: 'Cap. 11 — desafios e perspectivas para a tutoria em EaD sob o novo marco regulatório.'
                      }
                    ]
                  }
                ]
              },
              {
                type: 'professionalRoles',
                eyebrow: 'Organização da equipe',
                heading: 'Papéis distintos, trabalho articulado',
                introduction: 'O Capítulo III, Seção I, do Decreto nº 12.456/2025 (arts. 17 a 22) organiza o corpo docente e a mediação pedagógica dos cursos de graduação. O corpo docente é composto pelo coordenador de curso, pelo professor regente e pelo professor conteudista (art. 18). Ao lado do corpo docente, o Decreto prevê a figura do mediador pedagógico, que auxilia essa equipe e deve possuir formação acadêmica compatível com a função exercida (art. 19).',
                paragraphs: [
                  'O tutor é tratado pelo art. 21: ele pode auxiliar a equipe com atribuições administrativas, expressamente distintas das funções de mediação pedagógica. O Guia Orientador da UFPE caracteriza o tutor, institucionalmente, como o profissional que atua com atribuições pedagógicas e administrativas, sempre sob supervisão docente. Essa leitura situa sua atuação como apoio à equipe, dentro de um trabalho supervisionado, e não como condução autônoma da mediação pedagógica.',
                  'É o professor regente ou o mediador pedagógico, e não o tutor isoladamente, quem conduz a mediação didático-pedagógica das unidades curriculares, incluindo as atividades síncronas mediadas. Tanto tutores quanto mediadores pedagógicos devem constar no Censo da Educação Superior (art. 22).'
                ],
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
                poloText: 'O Polo de Educação a Distância é definido pelo art. 3º, inciso VI, como uma unidade descentralizada da instituição de educação superior. É nele que, com frequência, tutores e mediadores atuam junto aos estudantes, e para ele convergem muitas das atividades presenciais e síncronas mediadas realizadas fora da sede.'
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
                embedUrl: '',
                poster: 'assets/mulher-negra-olhando-para-com.webp',
                posterAlt: 'Participante acompanhando uma formação on-line em um notebook'
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
                image: 'assets/imagem-pagina02-mod02.webp',
                imageWidth: 1448,
                imageHeight: 1086,
                imageAlt: 'Equipe reunida para discutir os formatos presencial, semipresencial e a distância de um curso de graduação.',
                caption: 'A revisão do Projeto Pedagógico de Curso exige conciliar formato de oferta, presencialidade e infraestrutura.',
                paragraphs: [
                  'A coordenação de curso da UAB/UFPE está revisando o Projeto Pedagógico de Curso (PPC) de uma licenciatura ofertada no formato semipresencial. Durante o levantamento de melhorias, a equipe recebe a sugestão de ampliar a carga horária de atividades a distância, como forma de reduzir os custos de deslocamento dos estudantes até o polo.',
                  'Na mesma reunião, surgem dúvidas sobre até que ponto a carga horária presencial pode ser reduzida, se o curso poderia migrar para o formato integralmente a distância e quais estruturas o Polo EaD precisa oferecer para sustentar as atividades presenciais já previstas na matriz curricular.',
                  'Um integrante da equipe afirma: “Se ampliarmos a carga a distância, conseguimos reduzir custos. Talvez até possamos oferecer o curso totalmente a distância, já que isso é só uma questão de organização interna do PPC.” Outro integrante responde: “Isso não é possível. As licenciaturas estão entre os cursos vedados à oferta a distância pelo Decreto nº 12.456/2025. Precisamos verificar os percentuais mínimos de presencialidade do formato semipresencial e os requisitos de infraestrutura do polo antes de propor qualquer mudança.”'
                ]
              },
              {
                type: 'stickyStack',
                heading: 'Para refletir',
                items: [
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
                type: 'ebookReading',
                heading: 'Conteúdo do e-book a utilizar:',
                introduction: 'Consulte os trechos indicados dos e-books para aprofundar os conteúdos abordados nesta etapa.',
                volumes: [
                  {
                    id: 'volume-2',
                    title: 'Volume 2',
                    entries: [
                      {
                        pages: '12',
                        content: 'O novo marco regulatório do Decreto nº 12.456/2025: formatos de oferta dos cursos de graduação e percentuais mínimos de presencialidade.'
                      }
                    ]
                  }
                ]
              },
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
                type: 'video',
                layout: 'section',
                title: 'Os três formatos de oferta e seus percentuais de presencialidade',
                description: 'Aprofundamento em vídeo',
                provider: 'Eduplay',
                embedUrl: 'https://eduplay.rnp.br/app/video/embed/464649'
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
                type: 'ebookReading',
                heading: 'Conteúdo do e-book a utilizar:',
                introduction: 'Consulte os trechos indicados dos e-books para aprofundar os conteúdos abordados nesta etapa.',
                volumes: [
                  {
                    id: 'volume-2',
                    title: 'Volume 2',
                    entries: [
                      {
                        pages: '13',
                        content: 'Vedações à oferta a distância por área do conhecimento e cursos de oferta exclusivamente presencial (arts. 8º e 9º).'
                      }
                    ]
                  },
                  {
                    id: 'guia-orientador-spread-uab-ufpe',
                    title: 'Guia Orientador SPREAD/UAB-UFPE',
                    entries: [
                      {
                        pages: '—',
                        content: 'Lista de áreas com restrições específicas de presencialidade.'
                      }
                    ]
                  }
                ]
              },
              {
                type: 'narrative',
                heading: 'Nem todo curso pode escolher qualquer formato',
                paragraphs: [
                  'Nem todos os cursos podem ser ofertados livremente nos três formatos. O Decreto nº 12.456/2025 estabelece vedações específicas por área do conhecimento, reconhecendo que a natureza formativa de certas profissões exige presença física, prática supervisionada e acompanhamento direto em graus distintos.',
                  'O art. 8º determina que os cursos de Direito, Medicina, Enfermagem, Odontologia e Psicologia sejam ofertados exclusivamente no formato presencial, vedada a oferta desses cursos nos formatos semipresencial ou a distância.',
                  'O Guia Orientador detalha que Medicina deve ser ofertada com 100% de atividades presenciais, enquanto Direito, Enfermagem, Odontologia e Psicologia devem observar o percentual mínimo de 70% presencial.',
                  'O art. 9º veda a oferta de curso de graduação a distância para a área de saúde em geral, exceto os cursos já tratados no art. 8º; as licenciaturas; e outros cursos que venham a ser definidos em ato do Ministro da Educação.',
                  'O Guia Orientador detalha essa vedação listando as áreas em que a oferta a distância é totalmente vedada: Ciências Naturais, Matemática, Estatística, Saúde, Engenharia, Produção, Construção, Agricultura, Silvicultura, Pesca e Veterinária, além das licenciaturas.',
                  'Desde maio de 2025 fica vedada a oferta de licenciaturas 100% a distância: não são permitidas novas matrículas nesse formato, os estudantes já matriculados mantêm o direito de concluir o curso no formato de ingresso, e as instituições devem reorganizar esses cursos para o formato semipresencial, observando o mínimo de 30% de presencialidade.'
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
                    description: 'Áreas e cursos que não podem ser organizados como graduação a distância.',
                    items: [
                      'Área de saúde em geral, exceto os cursos já tratados no art. 8º.',
                      'Licenciaturas.',
                      'Ciências Naturais, Matemática e Estatística.',
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
                type: 'video',
                layout: 'section',
                title: 'Vedações por área do conhecimento',
                description: 'Aprofundamento em vídeo',
                provider: 'Eduplay',
                embedUrl: 'https://eduplay.rnp.br/app/video/embed/464648'
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
