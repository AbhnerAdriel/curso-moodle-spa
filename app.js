(() => {
  'use strict';

  const modules = [
    { id: 1, title: 'Nome do Módulo 1' },
    { id: 2, title: 'Nome do Módulo 2' },
    { id: 3, title: 'Nome do Módulo 3' },
    { id: 4, title: 'Nome do Módulo 4' }
  ];

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
      arrowRight: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7M5 12h11"/></svg>`
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
            <h1 class="course-title" id="course-title">Introdução ao AVA da UFPE para Tutores</h1>
            <a class="guide-link" href="#/guia" data-spa-link>
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
              <p class="metric-value">4</p>
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

        <section class="course-shortcuts" aria-label="Acessos rápidos">
          <div class="shortcuts-grid" data-reveal>
            <a class="shortcut" href="#/avisos" data-spa-link>
              <span class="shortcut-icon">${icon('notices')}</span>
              <span class="shortcut-label">Avisos</span>
            </a>
            <a class="shortcut" href="#/biblioteca" data-spa-link>
              <span class="shortcut-icon">${icon('library')}</span>
              <span class="shortcut-label">Biblioteca</span>
            </a>
          </div>
        </section>

        <section class="modules-section" aria-label="Módulos do curso">
          <div class="modules-divider" aria-hidden="true"></div>
          <div class="carousel" data-carousel data-reveal>
            <button class="carousel-btn" type="button" data-prev aria-label="Ver módulos anteriores">
              ${icon('arrowLeft')}
            </button>
            <div class="carousel-viewport">
              <div class="carousel-track" data-track>
                ${modules.map((module) => `
                  <a class="module-card" href="#/modulo/${module.id}" data-spa-link>
                    <p class="module-index">${String(module.id).padStart(2, '0')}</p>
                    <p class="module-kicker">Módulo</p>
                    <h2 class="module-title">${module.title}</h2>
                    <div class="module-line" aria-hidden="true"></div>
                  </a>
                `).join('')}
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

  function auxiliaryTemplate(route) {
    const normalized = route.replace(/^#\//, '').replace(/^\//, '');
    const labels = {
      guia: ['Guia do Curso', 'Espaço reservado para o guia do curso.'],
      avisos: ['Avisos', 'Espaço reservado para avisos e comunicados do curso.'],
      biblioteca: ['Biblioteca', 'Espaço reservado para materiais, ebooks e referências.']
    };
    let title = 'Conteúdo do curso';
    let description = 'Espaço preparado para receber o conteúdo desta rota sem recarregar a página.';
    if (normalized.startsWith('modulo/')) {
      const n = normalized.split('/')[1];
      title = `Módulo ${n}`;
      description = `Espaço reservado para o conteúdo do Módulo ${n}.`;
    } else if (labels[normalized]) {
      [title, description] = labels[normalized];
    }
    return `
      <main id="conteudo-principal" class="course-shell route-view" tabindex="-1">
        <p class="route-view__eyebrow">Curso</p>
        <h1>${title}</h1>
        <p>${description}</p>
        <a class="back-home" href="#/" data-spa-link>← Voltar para a Home</a>
      </main>
    `;
  }

  function visibleCards() {
    if (window.innerWidth <= 720) return 1;
    if (window.innerWidth <= 980) return 2;
    return 3;
  }

  function initCarousel() {
    const carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;

    const track = carousel.querySelector('[data-track]');
    const cards = [...track.children];
    const prev = carousel.querySelector('[data-prev]');
    const next = carousel.querySelector('[data-next]');
    const status = carousel.querySelector('[data-status]');
    const dotsWrap = document.querySelector('[data-dots]');
    let index = 0;

    const maxIndex = () => Math.max(0, cards.length - visibleCards());

    const renderDots = () => {
      const total = maxIndex() + 1;
      dotsWrap.innerHTML = Array.from({ length: total }, (_, i) =>
        `<button class="carousel-dot" type="button" aria-label="Ir para posição ${i + 1}" data-dot="${i}" aria-current="${i === index ? 'true' : 'false'}"></button>`
      ).join('');
      dotsWrap.querySelectorAll('[data-dot]').forEach(btn => {
        btn.addEventListener('click', () => {
          index = Number(btn.dataset.dot);
          update();
        });
      });
    };

    const update = () => {
      index = Math.min(index, maxIndex());
      const firstCard = cards[0];
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const step = firstCard.getBoundingClientRect().width + gap;
      track.style.transform = `translate3d(${-index * step}px,0,0)`;
      prev.disabled = index === 0;
      next.disabled = index >= maxIndex();
      status.textContent = `Exibindo módulos ${index + 1} a ${Math.min(cards.length, index + visibleCards())} de ${cards.length}.`;
      dotsWrap.querySelectorAll('[data-dot]').forEach((dot, i) => dot.setAttribute('aria-current', i === index ? 'true' : 'false'));
    };

    prev.addEventListener('click', () => { index = Math.max(0, index - 1); update(); });
    next.addEventListener('click', () => { index = Math.min(maxIndex(), index + 1); update(); });
    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') prev.click();
      if (event.key === 'ArrowRight') next.click();
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { renderDots(); update(); }, 100);
    });

    renderDots();
    update();
  }

  function initReveal() {
    const items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries, io) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.14 });
    items.forEach(el => observer.observe(el));
  }

  function render() {
    const route = window.location.hash || '#/';
    const app = document.getElementById('app');
    app.innerHTML = (route === '#/' || route === '' || route === '#/home') ? homeTemplate() : auxiliaryTemplate(route);
    initCarousel();
    initReveal();
    requestAnimationFrame(() => document.getElementById('conteudo-principal')?.focus({ preventScroll: true }));
  }

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', render);
})();
