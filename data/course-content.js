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
          }
        ]
      },
      {
        id: '02',
        status: 'draft',
        cardTitle: 'Nome do Módulo 2',
        title: 'Módulo 02',
        pages: []
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
