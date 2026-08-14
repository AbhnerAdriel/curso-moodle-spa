(() => {
  'use strict';

  const courseData = window.COURSE_CONTENT || { course: {}, modules: [] };
  const modules = Array.isArray(courseData.modules) ? courseData.modules : [];
  const courseTitle = courseData.course?.title || 'Novo Marco Regulatório da EaD: legislação e aplicação na educação superior';

  const escapeHTML = (value = '') => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const padId = (value) => String(value).padStart(2, '0');
  const moduleRoute = (moduleId, pageId = '01') => `#/modulo/${padId(moduleId)}/pagina/${padId(pageId)}`;
  const moduleHref = (moduleId, pageId = '01') => `./index.html${moduleRoute(moduleId, pageId)}`;

  const icon = (name) => {
    const icons = {
      clock: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="19"/><path d="M24 12v13h-9"/></svg>`,
      layers: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6 7 16l17 10 17-10L24 6Z"/><path d="m7 24 17 10 17-10"/><path d="m7 32 17 10 17-10"/></svg>`,
      pdf: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M11 5h20l8 8v30H11z"/><path d="M31 5v9h8"/><path d="M16 33c6-10 11-15 17-14-3 5-5 9-3 13-5-2-9-3-14 1Z"/></svg>`,
      calendar: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="7" y="10" width="34" height="31" rx="1"/><path d="M14 5v10M34 5v10M7 19h34M13 25h5m5 0h5m5 0h3M13 31h5m5 0h5m5 0h3M13 37h5m5 0h5"/></svg>`,
      notices: `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M13 45h38l-4.5-6.5V27a14.5 14.5 0 0 0-29 0v11.5L13 45Z"/><path d="M29 12v-1a3 3 0 0 1 6 0v1M26 51a6.5 6.5 0 0 0 12 0"/></svg>`,
      library: `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M11 15h10v38H11zM24 9h10v44H24zM38 13l10-3 9 40-10 3z"/><path d="M14 22h4M27 17h4M42 21l7-2"/></svg>`,
      arrowUpRight: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke-width="1.8"/></svg>`,
      arrowLeft: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7M8 12h11"/></svg>`,
      arrowRight: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7M5 12h11"/></svg>`,
      play: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="m18 12 20 12-20 12Z"/></svg>`,
      home: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4Z"/></svg>`
    };
    return icons[name] || '';
  };

  function homeTemplate() {
    return `
      <main id="conteudo-principal" class="course-shell" tabindex="-1">
        <section class="course-hero" aria-labelledby="course-title">
          <div class="hero-copy" data-reveal>
            <img class="hero-crest" src="assets/brasao-ufpe.png" alt="Brasão da UFPE" width="305" height="381" />
            <p class="eyebrow">Curso</p>
            <h1 class="course-title" id="course-title">${escapeHTML(courseTitle)}</h1>
            <a class="guide-link" href="#/guia">
              <span>Guia do Curso</span>
              ${icon('arrowUpRight')}
            </a>
          </div>

          <div class="hero-wave" aria-hidden="true">
            <svg viewBox="0 0 1440 160" preserveAspectRatio="none" focusable="false">
              <path d="M0 48C155 4 286 105 515 103C756 101 878 30 1087 14C1243 2 1356 22 1440 38V160H0Z" />
            </svg>
          </div>
        </section>

        <section class="course-metrics" aria-label="Informações do curso">
          <div class="metrics-grid" data-reveal>
            <article class="metric">
              <div class="metric-icon">${icon('clock')}</div>
              <p class="metric-value">40</p>
              <p class="metric-label">Horas</p>
            </article>
            <article class="metric">
              <div class="metric-icon">${icon('layers')}</div>
              <p class="metric-value">${modules.length}</p>
              <p class="metric-label">Módulos</p>
            </article>
            <article class="metric">
              <div class="metric-icon">${icon('pdf')}</div>
              <p class="metric-value">2</p>
              <p class="metric-label">Ebooks em PDF</p>
            </article>
            <article class="metric">
              <div class="metric-icon">${icon('calendar')}</div>
              <p class="metric-value">2026.2</p>
              <p class="metric-label">Semestre</p>
            </article>
          </div>
        </section>

        ${renderCourseVideoSection(courseData.course?.presentationVideo)}

        <section class="course-shortcuts" aria-label="Acessos rápidos">
          <div class="shortcuts-grid" data-reveal>
            <a class="shortcut" href="#/avisos">
              <span class="shortcut-icon">${icon('notices')}</span>
              <span class="shortcut-label">Avisos</span>
            </a>
            <a class="shortcut" href="#/biblioteca">
              <span class="shortcut-icon">${icon('library')}</span>
              <span class="shortcut-label">Biblioteca</span>
            </a>
          </div>
        </section>

        <section class="modules-section" aria-labelledby="modules-heading">
          <h2 class="sr-only" id="modules-heading">Módulos do curso</h2>
          <div class="modules-divider" aria-hidden="true"></div>
          <div class="carousel" data-carousel data-reveal>
            <button class="carousel-btn" type="button" data-prev aria-label="Ver módulos anteriores">
              ${icon('arrowLeft')}
            </button>
            <div class="carousel-viewport">
              <div class="carousel-track" data-track>
                ${modules.map((module) => {
                  const firstPageId = module.pages?.[0]?.id || '01';
                  const isDraft = module.status !== 'published';
                  const availability = isDraft ? ' Conteúdo em preparação.' : '';
                  const label = `Módulo ${module.id}: ${module.cardTitle}.${availability} Abre em nova aba.`;
                  return `
                    <a class="module-card${isDraft ? ' is-draft' : ''}" href="${moduleHref(module.id, firstPageId)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(label)}">
                      <span class="module-open" aria-hidden="true">${icon('arrowUpRight')}</span>
                      <p class="module-index">${escapeHTML(module.id)}</p>
                      <p class="module-kicker">Módulo</p>
                      <h3 class="module-title">${escapeHTML(module.cardTitle)}</h3>
                      ${isDraft ? '<p class="module-availability">Em preparação</p>' : ''}
                      <div class="module-line" aria-hidden="true"></div>
                    </a>
                  `;
                }).join('')}
              </div>
            </div>
            <button class="carousel-btn" type="button" data-next aria-label="Ver próximos módulos">
              ${icon('arrowRight')}
            </button>
            <p class="carousel-status" data-status aria-live="polite"></p>
          </div>
          <div class="carousel-dots" data-dots aria-label="Paginação dos módulos"></div>
        </section>
      </main>
    `;
  }

  function renderCourseVideoSection(video) {
    if (!video) return '';
    return `
      <section class="course-presentation" aria-labelledby="course-presentation-title">
        <div class="course-presentation__layout">
          <header class="course-presentation__header" data-reveal>
            <p class="course-presentation__eyebrow">Comece por aqui</p>
            <h2 id="course-presentation-title">Conheça o curso</h2>
            <p>Assista ao vídeo de apresentação antes de iniciar os módulos.</p>
          </header>
          <div class="course-presentation__media">
            ${renderVideoBlock(video)}
          </div>
        </div>
      </section>
    `;
  }

  function auxiliaryTemplate(routeName) {
    const labels = {
      guia: ['Guia do Curso', 'Espaço reservado para o guia do curso.'],
      avisos: ['Avisos', 'Espaço reservado para avisos e comunicados do curso.'],
      biblioteca: ['Biblioteca', 'Espaço reservado para materiais, ebooks e referências.']
    };
    const [title, description] = labels[routeName] || ['Conteúdo não encontrado', 'A rota informada não existe neste curso.'];
    return `
      <main id="conteudo-principal" class="course-shell route-view" tabindex="-1">
        <p class="route-view__eyebrow">${routeName in labels ? 'Curso' : 'Erro 404'}</p>
        <h1>${escapeHTML(title)}</h1>
        <p>${escapeHTML(description)}</p>
        <a class="back-home" href="#/">← Voltar para a Home</a>
      </main>
    `;
  }

  function safeEmbedUrl(value) {
    if (!value) return '';
    try {
      const parsed = new URL(value, window.location.href);
      return parsed.protocol === 'https:' ? parsed.href : '';
    } catch {
      return '';
    }
  }

  function renderVideoBlock(block) {
    const embedUrl = safeEmbedUrl(block.embedUrl);
    const title = escapeHTML(block.title || 'Vídeo');
    const description = escapeHTML(block.description || 'Conteúdo audiovisual');
    if (embedUrl) {
      return `
        <figure class="lesson-media lesson-media--video" data-reveal>
          <div class="lesson-media__frame">
            <iframe
              src="${escapeHTML(embedUrl)}"
              title="${title}: ${description}"
              loading="lazy"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
          </div>
          <figcaption><span>${title}</span>${description}</figcaption>
        </figure>
      `;
    }

    return `
      <figure class="lesson-media lesson-media--video" data-reveal>
        <div class="lesson-media__frame lesson-video-placeholder">
          <img src="${escapeHTML(block.poster)}" alt="${escapeHTML(block.posterAlt)}" width="2172" height="724" />
          <div class="lesson-video-placeholder__shade" aria-hidden="true"></div>
          <div class="lesson-video-placeholder__copy">
            <span class="lesson-video-placeholder__play" aria-hidden="true">${icon('play')}</span>
            <p class="lesson-video-placeholder__provider">${escapeHTML(block.provider || 'Vídeo')}</p>
            <p class="lesson-video-placeholder__title">${title}</p>
            <p class="lesson-video-placeholder__status">Conteúdo audiovisual em preparação</p>
          </div>
        </div>
        <figcaption><span>${title}</span>${description}</figcaption>
      </figure>
    `;
  }

  function renderNarrativeBlock(block, moduleId, pageId, blockIndex) {
    const headingId = `presentation-${moduleId}-${pageId}-${blockIndex}`;
    return `
      <section class="lesson-narrative" aria-labelledby="${headingId}">
        <div class="lesson-container lesson-narrative__grid">
          <header class="lesson-narrative__heading" data-reveal>
            <h3 id="${headingId}">${escapeHTML(block.heading)}</h3>
            <span class="lesson-accent-line" aria-hidden="true"></span>
          </header>
          <div class="lesson-prose" data-reveal>
            ${block.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function renderAccordionGroup(block, moduleId, pageId, blockIndex) {
    const groupId = `objetivos-${moduleId}-${pageId}-${blockIndex}`;
    return `
      <section class="lesson-objectives lesson-container" aria-labelledby="${groupId}" data-reveal>
        <header class="lesson-objectives__heading">
          <p class="lesson-eyebrow">Para orientar seus estudos</p>
          <h3 id="${groupId}">${escapeHTML(block.label)}</h3>
        </header>
        <div class="lesson-accordion">
          ${block.items.map((item, index) => {
            const contentId = `${item.id}-${moduleId}-${pageId}-${blockIndex}-content`;
            return `
              <details class="lesson-accordion__item">
                <summary aria-expanded="false" aria-controls="${contentId}">
                  <span class="lesson-accordion__index">${padId(index + 1)}</span>
                  <span class="lesson-accordion__title">${escapeHTML(item.title)}</span>
                  <span class="lesson-accordion__toggle" aria-hidden="true"></span>
                </summary>
                <div class="lesson-accordion__content" id="${contentId}">
                  ${item.paragraphs?.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join('') || ''}
                  ${item.list?.length ? `
                    <ul class="lesson-list">
                      ${item.list.map((listItem) => `<li>${escapeHTML(listItem)}</li>`).join('')}
                    </ul>
                  ` : ''}
                </div>
              </details>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }

  function renderScenarioBlock(block, moduleId, pageId, blockIndex) {
    const headingId = `scenario-${moduleId}-${pageId}-${blockIndex}`;
    return `
      <section class="lesson-scenario" aria-labelledby="${headingId}">
        <h3 class="sr-only" id="${headingId}">Contexto da situação-problema</h3>
        <div class="lesson-container lesson-scenario__layout">
          <div class="lesson-scenario__marker" aria-hidden="true" data-reveal>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="lesson-scenario__prose" data-reveal>
            ${block.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function renderStickyStackBlock(block, moduleId, pageId, blockIndex) {
    const headingId = `reflection-${moduleId}-${pageId}-${blockIndex}`;
    return `
      <section class="lesson-reflection" aria-labelledby="${headingId}">
        <header class="lesson-container lesson-reflection__heading" data-reveal>
          <p class="lesson-reflection__count" aria-hidden="true">${padId(block.items.length)}</p>
          <div>
            <h3 id="${headingId}">${escapeHTML(block.heading)}</h3>
            <span class="lesson-accent-line" aria-hidden="true"></span>
          </div>
        </header>
        <ol class="lesson-container lesson-reflection__stack" data-sticky-stack aria-label="Questões para reflexão">
          ${block.items.map((item, index) => `
            <li
              class="lesson-reflection__item"
              id="${escapeHTML(item.id)}-${moduleId}-${pageId}-${blockIndex}"
              data-stack-card
              style="--stack-index: ${index}; --stack-offset: ${index * 14}px;">
              <article class="lesson-reflection__card">
                <p class="lesson-reflection__index" aria-hidden="true">${padId(index + 1)}</p>
                <h4>${escapeHTML(item.text)}</h4>
                <span class="lesson-reflection__edge" aria-hidden="true"></span>
              </article>
            </li>
          `).join('')}
        </ol>
      </section>
    `;
  }

  function renderContentBlock(block, moduleId, pageId, blockIndex = 0) {
    if (block.type === 'video') return renderVideoBlock(block);
    if (block.type === 'narrative') return renderNarrativeBlock(block, moduleId, pageId, blockIndex);
    if (block.type === 'accordionGroup') return renderAccordionGroup(block, moduleId, pageId, blockIndex);
    if (block.type === 'scenario') return renderScenarioBlock(block, moduleId, pageId, blockIndex);
    if (block.type === 'stickyStack') return renderStickyStackBlock(block, moduleId, pageId, blockIndex);
    return '';
  }

  function paginationSequence(total, current) {
    if (total <= 7) return Array.from({ length: total }, (_, index) => index);
    const indexes = [...new Set([0, 1, current - 1, current, current + 1, total - 2, total - 1])]
      .filter((index) => index >= 0 && index < total)
      .sort((a, b) => a - b);
    const sequence = [];
    indexes.forEach((index, position) => {
      if (position && index - indexes[position - 1] > 1) sequence.push('ellipsis');
      sequence.push(index);
    });
    return sequence;
  }

  function renderPagination(module, currentIndex) {
    const total = module.pages.length;
    const currentPage = module.pages[currentIndex];
    const previousPage = module.pages[currentIndex - 1];
    const nextPage = module.pages[currentIndex + 1];
    const numberItems = paginationSequence(total, currentIndex).map((item, index) => {
      if (item === 'ellipsis') return `<span class="lesson-pagination__ellipsis" aria-hidden="true" data-key="ellipsis-${index}">…</span>`;
      const page = module.pages[item];
      if (item === currentIndex) {
        return `<span class="lesson-pagination__number is-current" aria-current="page"><span class="sr-only">Página atual: </span>${escapeHTML(page.id)}</span>`;
      }
      return `<a class="lesson-pagination__number" href="${moduleRoute(module.id, page.id)}" aria-label="Ir para a página ${escapeHTML(page.id)}: ${escapeHTML(page.label)}">${escapeHTML(page.id)}</a>`;
    }).join('');

    const previousControl = previousPage
      ? `<a class="lesson-pagination__direction lesson-pagination__direction--previous" href="${moduleRoute(module.id, previousPage.id)}" rel="prev">${icon('arrowLeft')}<span>Anterior</span></a>`
      : `<span class="lesson-pagination__direction lesson-pagination__direction--previous is-disabled" aria-disabled="true">${icon('arrowLeft')}<span>Anterior</span></span>`;
    const nextControl = nextPage
      ? `<a class="lesson-pagination__direction lesson-pagination__direction--next" href="${moduleRoute(module.id, nextPage.id)}" rel="next"><span>Próxima</span>${icon('arrowRight')}</a>`
      : `<span class="lesson-pagination__direction lesson-pagination__direction--next is-disabled" aria-disabled="true"><span>Próxima</span>${icon('arrowRight')}</span>`;

    return `
      <nav class="lesson-pagination" aria-label="Paginação do Módulo ${escapeHTML(module.id)}">
        <div class="lesson-container lesson-pagination__meta">
          <div>
            <p class="lesson-eyebrow">Navegação do módulo</p>
            <p class="lesson-pagination__current">Página ${escapeHTML(currentPage.id)} de ${padId(total)}</p>
          </div>
          <a class="lesson-pagination__home" href="#/">${icon('home')}<span>Home do curso</span></a>
        </div>
        <div class="lesson-container lesson-pagination__controls">
          ${previousControl}
          <div class="lesson-pagination__numbers" role="group" aria-label="Páginas do módulo">${numberItems}</div>
          ${nextControl}
        </div>
      </nav>
    `;
  }

  function modulePageTemplate(module, page, currentIndex) {
    const totalPages = module.pages.length;
    const progress = Math.round(((currentIndex + 1) / totalPages) * 100);
    const indexedBlocks = page.blocks.map((block, index) => ({ block, index }));
    const leadBlocks = indexedBlocks.filter(({ block }) => block.slot === 'lead');
    const contentBlocks = indexedBlocks.filter(({ block }) => block.slot !== 'lead');
    return `
      <div class="module-view">
        <header class="module-hero" data-module-hero data-banner="${escapeHTML(module.banner || '')}" data-banner-position="${escapeHTML(module.bannerPosition || 'center')}">
          <div class="module-hero__content" data-reveal>
            <p class="module-hero__eyebrow">Módulo ${escapeHTML(module.id)}</p>
            <h1>${escapeHTML(module.title)}</h1>
            <span class="module-hero__line" aria-hidden="true"></span>
          </div>
          <svg class="module-hero__curve" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path d="M0 0 Q500 100 1000 0 V100 H0 Z" />
          </svg>
        </header>

        <main id="conteudo-principal" class="module-main" tabindex="-1">
          <div class="lesson-container module-toolbar">
            <nav class="module-breadcrumb" aria-label="Você está em">
              <ol>
                <li><a href="#/">Home</a></li>
                <li><span>Módulo ${escapeHTML(module.id)}</span></li>
                <li aria-current="page"><span>Página ${escapeHTML(page.id)}</span></li>
              </ol>
            </nav>
            <div class="module-progress">
              <div class="module-progress__labels">
                <span>Progresso do módulo</span>
                <strong>${progress}%</strong>
              </div>
              <div class="module-progress__track" role="progressbar" aria-label="Progresso no Módulo ${escapeHTML(module.id)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
                <span style="--lesson-progress: ${progress}%"></span>
              </div>
              <p>Página ${escapeHTML(page.id)} de ${padId(totalPages)}</p>
            </div>
          </div>

          <article class="lesson-article" aria-labelledby="lesson-title">
            ${leadBlocks.length ? `
              <div class="lesson-container lesson-media-wrap">
                ${leadBlocks.map(({ block, index }) => renderContentBlock(block, module.id, page.id, index)).join('')}
              </div>
            ` : ''}

            <header class="lesson-container lesson-heading" data-reveal>
              <div class="lesson-heading__index" aria-hidden="true">${escapeHTML(page.id)}</div>
              <div class="lesson-heading__copy">
                <p class="lesson-unit">${escapeHTML(page.unit)}</p>
                <h2 id="lesson-title">${escapeHTML(page.title)}</h2>
                <span class="lesson-accent-line" aria-hidden="true"></span>
              </div>
            </header>

            ${contentBlocks.map(({ block, index }) => renderContentBlock(block, module.id, page.id, index)).join('')}
          </article>

          ${renderPagination(module, currentIndex)}
        </main>
      </div>
    `;
  }

  function moduleUnavailableTemplate(module) {
    return `
      <div class="module-view module-view--empty">
        <header class="module-empty-hero">
          <p>Módulo ${escapeHTML(module.id)}</p>
          <h1>${escapeHTML(module.title)}</h1>
        </header>
        <main id="conteudo-principal" class="module-empty-state" tabindex="-1">
          <p class="module-empty-state__number" aria-hidden="true">${escapeHTML(module.id)}</p>
          <p class="lesson-eyebrow">Conteúdo em preparação</p>
          <h2>Este módulo será disponibilizado em breve.</h2>
          <p>A estrutura de navegação já está pronta para receber as páginas deste módulo.</p>
          <a class="module-empty-state__action" href="#/">← Voltar para a Home</a>
        </main>
      </div>
    `;
  }

  function moduleMissingPageTemplate(module) {
    const firstPage = module.pages[0];
    return `
      <main id="conteudo-principal" class="course-shell route-view" tabindex="-1">
        <p class="route-view__eyebrow">Módulo ${escapeHTML(module.id)}</p>
        <h1>Página não encontrada</h1>
        <p>Esta página não faz parte do módulo ou ainda não foi publicada.</p>
        <a class="back-home" href="${moduleRoute(module.id, firstPage.id)}">← Ir para a primeira página do módulo</a>
      </main>
    `;
  }

  function parseRoute(hash) {
    const normalized = (hash || '#/').replace(/^#\/?/, '').replace(/\/+$/, '');
    if (!normalized || normalized === 'home') return { name: 'home' };
    if (['guia', 'avisos', 'biblioteca'].includes(normalized)) return { name: 'auxiliary', routeName: normalized };

    const moduleMatch = normalized.match(/^modulo\/(\d{1,3})(?:\/pagina\/(\d{1,3}))?$/);
    if (moduleMatch) {
      return {
        name: 'module',
        moduleId: padId(moduleMatch[1]),
        pageId: padId(moduleMatch[2] || '01')
      };
    }
    return { name: 'notFound' };
  }

  function visibleCards() {
    if (window.innerWidth <= 720) return 1;
    if (window.innerWidth <= 980) return 2;
    return 3;
  }

  let destroyCarousel = () => {};
  let destroyReveal = () => {};
  let destroyAccordions = () => {};
  let destroyStickyStacks = () => {};

  function initCarousel() {
    const carousel = document.querySelector('[data-carousel]');
    if (!carousel) return () => {};

    const track = carousel.querySelector('[data-track]');
    const viewport = carousel.querySelector('.carousel-viewport');
    const cards = [...track.children];
    const prev = carousel.querySelector('[data-prev]');
    const next = carousel.querySelector('[data-next]');
    const status = carousel.querySelector('[data-status]');
    const dotsWrap = carousel.closest('.modules-section').querySelector('[data-dots]');
    const controller = new AbortController();
    const { signal } = controller;
    let index = 0;
    let dragState = null;
    let resizeTimer;
    let snapFrame;
    let suppressClick = false;
    let suppressClickTimer;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const maxIndex = () => Math.max(0, cards.length - visibleCards());
    const cardStep = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      return (cards[0]?.getBoundingClientRect().width || 0) + gap;
    };
    const setTrackPosition = (x) => { track.style.transform = `translate3d(${x}px,0,0)`; };
    const currentTrackPosition = () => {
      const transform = getComputedStyle(track).transform;
      if (!transform || transform === 'none') return 0;
      try {
        return new DOMMatrixReadOnly(transform).m41;
      } catch {
        return -index * cardStep();
      }
    };
    const renderDots = () => {
      const total = maxIndex() + 1;
      const focusedDot = document.activeElement?.closest?.('[data-dot]');
      const focusedDotIndex = focusedDot && dotsWrap.contains(focusedDot)
        ? Number(focusedDot.dataset.dot)
        : null;
      const existingDots = [...dotsWrap.querySelectorAll('[data-dot]')];
      if (existingDots.length === total) return;
      dotsWrap.innerHTML = Array.from({ length: total }, (_, dotIndex) =>
        `<button class="carousel-dot" type="button" aria-label="Ir para posição ${dotIndex + 1}" data-dot="${dotIndex}" aria-current="${dotIndex === index ? 'true' : 'false'}"></button>`
      ).join('');
      if (focusedDotIndex !== null) {
        const safeDotIndex = clamp(focusedDotIndex, 0, total - 1);
        dotsWrap.querySelector(`[data-dot="${safeDotIndex}"]`)?.focus({ preventScroll: true });
      }
    };
    const updateCardAccessibility = () => {
      const visibleCount = visibleCards();
      cards.forEach((card, cardIndex) => {
        const isVisible = cardIndex >= index && cardIndex < index + visibleCount;
        card.tabIndex = isVisible ? 0 : -1;
        card.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
      });
    };
    const update = () => {
      const focusedCardIndex = cards.findIndex((card) => card === document.activeElement || card.contains(document.activeElement));
      const visibleCount = visibleCards();
      if (focusedCardIndex >= 0) {
        if (focusedCardIndex < index) index = focusedCardIndex;
        if (focusedCardIndex >= index + visibleCount) index = focusedCardIndex - visibleCount + 1;
      }
      index = clamp(index, 0, maxIndex());
      setTrackPosition(-index * cardStep());
      prev.setAttribute('aria-disabled', String(index === 0));
      next.setAttribute('aria-disabled', String(index >= maxIndex()));
      status.textContent = `Exibindo módulos ${index + 1} a ${Math.min(cards.length, index + visibleCards())} de ${cards.length}.`;
      dotsWrap.querySelectorAll('[data-dot]').forEach((dot, dotIndex) => dot.setAttribute('aria-current', dotIndex === index ? 'true' : 'false'));
      updateCardAccessibility();
    };
    const clearClickSuppression = () => {
      suppressClick = false;
      clearTimeout(suppressClickTimer);
    };
    const suppressNextPointerClick = () => {
      suppressClick = true;
      clearTimeout(suppressClickTimer);
      suppressClickTimer = setTimeout(clearClickSuppression, 500);
    };
    const positionWithEdgeResistance = (x, step = cardStep()) => {
      const min = -maxIndex() * step;
      if (x > 0) return x * .18;
      if (x < min) return min + (x - min) * .18;
      return x;
    };
    const finishDrag = (event, cancelled = false) => {
      if (!dragState || (event.pointerId != null && event.pointerId !== dragState.pointerId)) return;
      const state = dragState;
      dragState = null;
      if (viewport.hasPointerCapture?.(state.pointerId)) viewport.releasePointerCapture(state.pointerId);
      viewport.classList.remove('is-dragging');
      if (!state.isDragging) return;

      if (!cancelled) {
        const endX = Number.isFinite(event.clientX) ? event.clientX : state.lastX;
        const deltaX = endX - state.startX;
        const currentX = positionWithEdgeResistance(state.baseX + deltaX, state.step);
        const elapsed = Math.max(event.timeStamp - state.startTime, 1);
        const velocityX = Math.abs(deltaX / elapsed);
        const moveThreshold = Math.min(72, state.step * .2);
        let targetIndex = Math.round(-currentX / state.step);
        if (targetIndex === state.startIndex && (Math.abs(deltaX) >= moveThreshold || (Math.abs(deltaX) >= 12 && velocityX >= .45))) {
          targetIndex += deltaX < 0 ? 1 : -1;
        }
        index = clamp(targetIndex, 0, maxIndex());
        suppressNextPointerClick();
      }
      cancelAnimationFrame(snapFrame);
      snapFrame = requestAnimationFrame(() => {
        snapFrame = null;
        update();
      });
    };

    prev.addEventListener('click', () => {
      if (prev.getAttribute('aria-disabled') === 'true') return;
      index = Math.max(0, index - 1);
      update();
    }, { signal });
    next.addEventListener('click', () => {
      if (next.getAttribute('aria-disabled') === 'true') return;
      index = Math.min(maxIndex(), index + 1);
      update();
    }, { signal });
    dotsWrap.addEventListener('click', (event) => {
      const dot = event.target.closest('[data-dot]');
      if (!dot) return;
      index = Number(dot.dataset.dot);
      update();
    }, { signal });
    carousel.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      if (!event.target.closest('.carousel-btn, .carousel-dot')) return;
      event.preventDefault();
      if (event.key === 'ArrowLeft') prev.click();
      if (event.key === 'ArrowRight') next.click();
    }, { signal });
    viewport.addEventListener('pointerdown', (event) => {
      if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0) || maxIndex() === 0) return;
      clearClickSuppression();
      const step = cardStep();
      const baseX = currentTrackPosition();
      dragState = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        startTime: event.timeStamp,
        lastX: event.clientX,
        baseX,
        step,
        startIndex: clamp(Math.round(-baseX / step), 0, maxIndex()),
        isDragging: false
      };
    }, { signal });
    viewport.addEventListener('pointermove', (event) => {
      if (!dragState || event.pointerId !== dragState.pointerId) return;
      const deltaX = event.clientX - dragState.startX;
      const deltaY = event.clientY - dragState.startY;
      if (!dragState.isDragging) {
        if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return;
        if (Math.abs(deltaY) >= Math.abs(deltaX)) {
          dragState = null;
          return;
        }
        dragState.isDragging = true;
        viewport.classList.add('is-dragging');
        setTrackPosition(dragState.baseX);
        viewport.setPointerCapture?.(event.pointerId);
      }
      if (event.cancelable) event.preventDefault();
      dragState.lastX = event.clientX;
      setTrackPosition(positionWithEdgeResistance(dragState.baseX + deltaX, dragState.step));
    }, { signal });
    viewport.addEventListener('pointerup', (event) => finishDrag(event), { signal });
    viewport.addEventListener('pointercancel', (event) => finishDrag(event, true), { signal });
    viewport.addEventListener('lostpointercapture', (event) => {
      if (event.target === viewport) finishDrag(event, true);
    }, { signal });
    viewport.addEventListener('dragstart', (event) => event.preventDefault(), { signal });
    viewport.addEventListener('click', (event) => {
      if (!suppressClick || event.detail === 0) return;
      event.preventDefault();
      event.stopPropagation();
      clearClickSuppression();
    }, { capture: true, signal });
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      if (dragState) finishDrag({ pointerId: dragState.pointerId }, true);
      resizeTimer = setTimeout(() => { renderDots(); update(); }, 100);
    }, { signal });
    window.addEventListener('blur', () => {
      if (dragState) finishDrag({ pointerId: dragState.pointerId }, true);
    }, { signal });

    renderDots();
    update();
    return () => {
      const activePointerId = dragState?.pointerId;
      dragState = null;
      if (activePointerId != null && viewport.hasPointerCapture?.(activePointerId)) viewport.releasePointerCapture(activePointerId);
      viewport.classList.remove('is-dragging');
      clearTimeout(resizeTimer);
      clearTimeout(suppressClickTimer);
      cancelAnimationFrame(snapFrame);
      controller.abort();
    };
  }

  function showVisibleRevealsImmediately(items = [...document.querySelectorAll('[data-reveal]')]) {
    items.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        element.classList.add('is-visible', 'is-reveal-immediate');
      }
    });
  }

  function initReveal() {
    const items = [...document.querySelectorAll('[data-reveal]')];
    if (!items.length) return () => {};
    document.documentElement.classList.add('reveal-ready');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((element) => element.classList.add('is-visible'));
      return () => {};
    }

    const observer = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.16 });
    items
      .filter((element) => !element.classList.contains('is-reveal-immediate'))
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }

  function initAccordions() {
    const detailsElements = [...document.querySelectorAll('.lesson-accordion__item')];
    if (!detailsElements.length) return () => {};
    const controller = new AbortController();
    detailsElements.forEach((details) => {
      const summary = details.querySelector('summary');
      const syncState = () => summary?.setAttribute('aria-expanded', String(details.open));
      syncState();
      details.addEventListener('toggle', syncState, { signal: controller.signal });
    });
    return () => controller.abort();
  }

  function initStickyStacks() {
    const stacks = [...document.querySelectorAll('[data-sticky-stack]')];
    if (!stacks.length) return () => {};

    const controller = new AbortController();
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = null;

    const update = () => {
      frame = null;
      const enhanced = window.innerWidth >= 768 && !motionQuery.matches;
      stacks.forEach((stack) => {
        const cards = [...stack.querySelectorAll('[data-stack-card]')];
        stack.classList.toggle('is-enhanced', enhanced);
        cards.forEach((card, index) => {
          if (!enhanced) {
            card.classList.remove('is-entered', 'is-covered');
            return;
          }

          const rect = card.getBoundingClientRect();
          const stickyTop = Number.parseFloat(getComputedStyle(card).top) || 0;
          const nextCard = cards[index + 1];
          const nextTop = nextCard?.getBoundingClientRect().top;
          card.classList.toggle('is-entered', rect.top < window.innerHeight * .86 && rect.bottom > 0);
          card.classList.toggle('is-covered', Boolean(nextCard && nextTop <= stickyTop + 30));
        });
      });
    };

    const scheduleUpdate = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true, signal: controller.signal });
    window.addEventListener('resize', scheduleUpdate, { signal: controller.signal });
    motionQuery.addEventListener?.('change', scheduleUpdate, { signal: controller.signal });
    scheduleUpdate();

    return () => {
      controller.abort();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }

  function setModuleBanner() {
    const hero = document.querySelector('[data-module-hero]');
    if (!hero) return;
    const banner = hero.dataset.banner;
    if (banner) hero.style.setProperty('--module-banner', `url("${banner.replaceAll('"', '\\"')}")`);
    hero.style.setProperty('--module-banner-position', hero.dataset.bannerPosition || 'center');
  }

  function setPageMeta(title, themeColor, routeName) {
    document.title = title;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
    document.documentElement.dataset.view = routeName;
  }

  if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';

  let hasRendered = false;
  let routePositionFrame = null;
  function render() {
    const route = parseRoute(window.location.hash);
    const app = document.getElementById('app');
    const announcer = document.getElementById('route-announcer');
    const isRouteChange = hasRendered;
    let template;
    let pageTitle;
    let announcement;
    let themeColor = '#FFFFFF';
    let modulePageIndex = null;

    destroyCarousel();
    destroyReveal();
    destroyAccordions();
    destroyStickyStacks();

    if (route.name === 'home') {
      template = homeTemplate();
      pageTitle = `Home | ${courseTitle}`;
      announcement = 'Home do curso carregada.';
    } else if (route.name === 'module') {
      const module = modules.find((item) => item.id === route.moduleId);
      if (!module) {
        template = auxiliaryTemplate('notFound');
        pageTitle = `Conteúdo não encontrado | ${courseTitle}`;
        announcement = 'Conteúdo não encontrado.';
      } else if (module.status !== 'published' || !module.pages.length) {
        template = moduleUnavailableTemplate(module);
        pageTitle = `Módulo ${module.id} em preparação | ${courseTitle}`;
        announcement = `Módulo ${module.id}. Conteúdo em preparação.`;
        themeColor = '#1F1F1F';
      } else {
        const pageIndex = module.pages.findIndex((page) => page.id === route.pageId);
        if (pageIndex < 0) {
          template = moduleMissingPageTemplate(module);
          pageTitle = `Página não encontrada | Módulo ${module.id}`;
          announcement = `Página não encontrada no Módulo ${module.id}.`;
        } else {
          const page = module.pages[pageIndex];
          modulePageIndex = pageIndex;
          template = modulePageTemplate(module, page, pageIndex);
          pageTitle = `${page.title} | Módulo ${module.id}`;
          announcement = `Módulo ${module.id}, página ${page.id} de ${padId(module.pages.length)} carregada.`;
          themeColor = '#173047';
        }
      }
    } else if (route.name === 'auxiliary') {
      template = auxiliaryTemplate(route.routeName);
      const routeTitles = { guia: 'Guia do Curso', avisos: 'Avisos', biblioteca: 'Biblioteca' };
      pageTitle = `${routeTitles[route.routeName]} | ${courseTitle}`;
      announcement = `${routeTitles[route.routeName]} carregado.`;
    } else {
      template = auxiliaryTemplate('notFound');
      pageTitle = `Conteúdo não encontrado | ${courseTitle}`;
      announcement = 'Conteúdo não encontrado.';
    }

    if (routePositionFrame !== null) cancelAnimationFrame(routePositionFrame);
    app.innerHTML = template;
    setPageMeta(pageTitle, themeColor, route.name);
    setModuleBanner();

    const isModulePage = modulePageIndex !== null;
    const shouldPositionRoute = isModulePage || isRouteChange;
    const landingTarget = isModulePage && modulePageIndex > 0
      ? document.getElementById('conteudo-principal')
      : null;
    const getLandingTop = () => landingTarget
      ? Math.max(0, landingTarget.getBoundingClientRect().top + window.scrollY)
      : 0;
    const positionRoute = () => {
      window.scrollTo({ top: getLandingTop(), left: 0, behavior: 'auto' });
      if (isModulePage) showVisibleRevealsImmediately();
    };
    if (shouldPositionRoute) {
      document.documentElement.classList.add('is-route-positioning');
      positionRoute();
    }

    destroyCarousel = initCarousel();
    destroyReveal = initReveal();
    destroyAccordions = initAccordions();
    destroyStickyStacks = initStickyStacks();

    routePositionFrame = requestAnimationFrame(() => {
      if (shouldPositionRoute) positionRoute();
      if (isRouteChange) {
        document.getElementById('conteudo-principal')?.focus({ preventScroll: true });
        if (announcer) announcer.textContent = announcement;
      }
      if (!shouldPositionRoute) {
        routePositionFrame = null;
        return;
      }
      routePositionFrame = requestAnimationFrame(() => {
        positionRoute();
        document.documentElement.classList.remove('is-route-positioning');
        routePositionFrame = null;
      });
    });
    hasRendered = true;
  }

  document.querySelector('.skip-link')?.addEventListener('click', (event) => {
    const main = document.getElementById('conteudo-principal');
    if (!main) return;
    event.preventDefault();
    main.focus({ preventScroll: true });
    const targetTop = main.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: targetTop, left: 0, behavior: 'auto' });
  });

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', render);
})();
