/* ============================================================
   TRANSLATIONS_EN — английские версии длинных текстовых полей
   проектов (context, problem, solution, research, jtbd, cjm,
   userFlow, designSystem, prototype, results, references и т.д.)

   Ключ верхнего уровня — id проекта из массива PROJECTS.
   Если поля для проекта/языка нет — код в script.js автоматически
   покажет русский оригинал (fallback), сайт не сломается.

   SECTION_TITLES — переводы заголовков блоков ("Контекст",
   "Проблема" и т.д.), которые раньше были захардкожены на русском
   прямо в функции openProject().
============================================================ */

const SECTION_TITLES = {
  context:        { ru: 'Контекст',                          en: 'Context' },
  problem:        { ru: 'Проблема',                          en: 'Problem' },
  solution:       { ru: 'Решение',                           en: 'Solution' },
  competitors:    { ru: 'Анализ конкурентов',                en: 'Competitor Analysis' },
  research:       { ru: 'Исследование и инсайты',            en: 'Research & Insights' },
  userProblems:   { ru: 'Проблемы',                          en: 'Problems' },
  valueHyp:       { ru: 'Гипотезы ценности',                 en: 'Value Hypotheses' },
  behaviorHyp:    { ru: 'Поведенческие гипотезы',            en: 'Behavior Hypotheses' },
  insights:       { ru: 'Инсайты',                           en: 'Insights' },
  jtbd:           { ru: 'JTBD',                              en: 'JTBD' },
  userGroups:     { ru: 'Основные группы пользователей',     en: 'Key User Groups' },
  cjm:            { ru: 'Customer Journey Map',              en: 'Customer Journey Map' },
  keyScenarios:   { ru: 'Ключевые сценарии',                 en: 'Key Scenarios' },
  userFlow:       { ru: 'User Flow',                         en: 'User Flow' },
  purchaseDefault:{ ru: 'Сценарий: Пользователь планирует дорогую покупку', en: 'Scenario: User Plans an Expensive Purchase' },
  designSystem:   { ru: 'Design System',                     en: 'Design System' },
  prototype:      { ru: 'Прототип',                          en: 'Prototype' },
  process:        { ru: 'Процесс — ключевые экраны',         en: 'Process — Key Screens' },
  results:        { ru: 'Результаты',                        en: 'Results' },
  sources:        { ru: 'Источники',                         en: 'Sources' },
  figmaLink:      { ru: 'Смотреть в Figma →',                en: 'View in Figma →' },
};

const TRANSLATIONS_EN = {};
/* ============================================================
   SCRIPT.JS — логика портфолио

   ЧТО ЗДЕСЬ РЕДАКТИРОВАТЬ:
   Только массив PROJECTS ниже — тексты и фото для страниц проектов.

   Остальное (скролл, открытие/закрытие) трогать не нужно.
============================================================ */


const PROJECTS = [
  {
    id: 0,
    title: { ru: 'Проект 1', en: 'Project 1' },
    cardDesc: { ru: '', en: '' },
    bannerColor: '#CCCCCC',
    bannerImg: '',
    cardImg: '',
    lightBanner: false,
    images: [],

    context: '',
    problem: '',
    solution: '',
    tags: '',
  },

  {
    id: 1,
    title: { ru: 'Проект 2', en: 'Project 2' },
    cardDesc: { ru: '', en: '' },
    bannerColor: '#CCCCCC',
    bannerImg: '',
    cardImg: '',
    lightBanner: false,
    images: [],

    context: '',
    problem: '',
    solution: '',
    tags: '',
  },

  {
    id: 2,
    title: { ru: 'Проект 3', en: 'Project 3' },
    cardDesc: { ru: '', en: '' },
    bannerColor: '#CCCCCC',
    bannerImg: '',
    cardImg: '',
    lightBanner: false,
    images: [],

    context: '',
    problem: '',
    solution: '',
    tags: '',
  },

  {
    id: 3,
    title: { ru: 'Проект 4', en: 'Project 4' },
    cardDesc: { ru: '', en: '' },
    bannerColor: '#CCCCCC',
    bannerImg: '',
    cardImg: '',
    lightBanner: false,
    images: [],

    context: '',
    problem: '',
    solution: '',
    tags: '',
  },

  {
    id: 4,
    title: { ru: 'Проект 5', en: 'Project 5' },
    cardDesc: { ru: '', en: '' },
    bannerColor: '#CCCCCC',
    bannerImg: '',
    cardImg: '',
    lightBanner: false,
    images: [],

    context: '',
    problem: '',
    solution: '',
    tags: '',
  },

  {
    id: 5,
    title: { ru: 'Проект 6', en: 'Project 6' },
    cardDesc: { ru: '', en: '' },
    bannerColor: '#CCCCCC',
    bannerImg: '',
    cardImg: '',
    lightBanner: false,
    images: [],

    context: '',
    problem: '',
    solution: '',
    tags: '',
  },

  {
    id: 6,
    title: { ru: 'Проект 7', en: 'Project 7' },
    cardDesc: { ru: '', en: '' },
    bannerColor: '#CCCCCC',
    bannerImg: '',
    cardImg: '',
    lightBanner: false,
    images: [],

    context: '',
    problem: '',
    solution: '',
    tags: '',
  },

  {
    id: 7,
    title: { ru: 'Проект 8', en: 'Project 8' },
    cardDesc: { ru: '', en: '' },
    bannerColor: '#CCCCCC',
    bannerImg: '',
    cardImg: '',
    lightBanner: false,
    images: [],

    context: '',
    problem: '',
    solution: '',
    tags: '',
  },];


/* ============================================================
   ПЕРЕВОД КОНТЕНТА ПРОЕКТОВ (RU / EN)

   Длинные текстовые поля проектов (context, problem, solution,
   research, jtbdGroups, references и т.д.) переведены отдельно
   в translations.js (TRANSLATIONS_EN, SECTION_TITLES).

   Эти функции берут перевод для currentLang, а если для
   конкретного поля/языка перевода нет — показывают русский
   оригинал, чтобы страница никогда не оставалась пустой.
============================================================ */

// Простое текстовое поле проекта: p.context, p.problem, p.solution...
function tr(p, field) {
  if (currentLang === 'en') {
    const en = TRANSLATIONS_EN[p.id];
    if (en && en[field] !== undefined) return en[field];
  }
  return p[field];
}

// Массив внутри p.research: userProblems / valueHypotheses / behaviorHypotheses / insights
function trResearch(p, field) {
  if (currentLang === 'en') {
    const en = TRANSLATIONS_EN[p.id];
    if (en && en.research && en.research[field]) return en.research[field];
  }
  return (p.research && p.research[field]) || [];
}

// p.jtbdGroups — массив {title, description}
function trGroups(p) {
  if (currentLang === 'en') {
    const en = TRANSLATIONS_EN[p.id];
    if (en && en.jtbdGroups) return en.jtbdGroups;
  }
  return p.jtbdGroups || [];
}

// p.processScreens — массив {img, caption}
function trProcessScreens(p) {
  if (currentLang === 'en') {
    const en = TRANSLATIONS_EN[p.id];
    if (en && en.processScreens) return en.processScreens;
  }
  return p.processScreens || [];
}

// p.references — массив {title, url, group?, groupIntro?}; переводим только title/group/groupIntro, url общий
function trReferences(p) {
  if (currentLang === 'en' && p.references) {
    const en = TRANSLATIONS_EN[p.id];
    if (en && en.references) {
      return p.references.map((ref, i) => ({
        ...ref,
        title: (en.references[i] && en.references[i].title) || ref.title,
        group: (en.references[i] && en.references[i].group) || ref.group,
        groupIntro: (en.references[i] && en.references[i].groupIntro) || ref.groupIntro,
      }));
    }
  }
  return p.references;
}

// Заголовок блока ("Контекст"/"Context" и т.д.) — см. SECTION_TITLES в translations.js
function st(key) {
  const entry = SECTION_TITLES[key];
  return (entry && entry[currentLang]) || (entry && entry.ru) || key;
}


/* ============================================================
   ГОРИЗОНТАЛЬНЫЙ СКРОЛЛ В ЗОНЕ ПРОЕКТОВ
   (не редактировать)
============================================================ */
const wrapper = document.getElementById('projects-wrapper');
const track   = document.getElementById('projects-track');
let hPos = 0;

function maxScroll() {
  const wrapperEl = document.querySelector('.projects-track-wrapper');
  return track.scrollWidth - wrapperEl.clientWidth + 48;
}

function isMobileCarousel() {
  return window.matchMedia('(max-width: 768px)').matches;
}

// ВРЕМЕННО ОТКЛЮЧЕНО: скролл колесом мыши в блоке проектов на десктопе.
// Все карточки теперь помещаются в один ряд без прокрутки.
// Чтобы вернуть скролл — поставь DESKTOP_SCROLL_ENABLED = true.
const DESKTOP_SCROLL_ENABLED = false;

wrapper.addEventListener('wheel', (e) => {
  if (!DESKTOP_SCROLL_ENABLED) return;
  if (isMobileCarousel()) return; // mobile uses native horizontal touch scroll instead

  const atStart = hPos <= 0;
  const atEnd   = hPos >= maxScroll();

  if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
    e.preventDefault();
    hPos = Math.max(0, Math.min(maxScroll(), hPos + e.deltaY * 1.2));
    track.style.transform = `translateX(-${hPos}px)`;
  }
}, { passive: false });

// На мобильных горизонтальный скролл карточек — нативный (overflow-x: auto в CSS),
// поэтому здесь никакого JS для тача не требуется.

window.addEventListener('resize', () => {
  if (isMobileCarousel()) {
    hPos = 0;
    track.style.transform = '';
  }
});


/* ============================================================
   НАВИГАЦИЯ — смена цвета при скролле
   (не редактировать)

   Два отдельных слушателя:
   1. Скролл главной страницы (window)
   2. Скролл ВНУТРИ страницы проекта (#project-overlay имеет
      собственный скролл и не считается частью window-скролла)
============================================================ */
const mainNav = document.getElementById('main-nav');
const projectOverlayEl = document.getElementById('project-overlay');

window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 10);
});

projectOverlayEl.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', projectOverlayEl.scrollTop > 10);
});


let currentOpenProjectId = null;

function openProject(id) {
  id = Number(id);
  const p = PROJECTS.find(x => x.id === id);

  if (!p) {
    console.error('Project not found:', id);
    return;
  }

  const cardTitle = (p.title && p.title[currentLang]) || (p.title && p.title.ru) || 'Project';
  const titleEl = document.getElementById("proj-title");
  if (titleEl) titleEl.textContent = cardTitle;

  const banner = document.getElementById("proj-banner");
  banner.style.background = "#ffffff";

  const bg = document.getElementById("proj-banner-bg");
  bg.style.backgroundImage = p.bannerImg ? `url('${p.bannerImg}')` : "none";

  const tagsValue = tr(p, 'tags');
  const tagsHtml = tagsValue
    ? (Array.isArray(tagsValue) ? tagsValue : tagsValue.split(","))
        .map(tag => `<span class="tag">${tag.trim()}</span>`)
        .join("")
    : "";

  function image(src) {
    if (!src) return "";
    return `
      <div class="proj-media">
        <img src="${src}" alt="">
      </div>
    `;
  }

  function section(title, text, link, id, headerImg) {
    if (!text) return "";
    const linkHtml = link
      ? `<a class="figma-link" href="${link}" target="_blank" rel="noopener">${st('figmaLink')}</a>`
      : "";
    const idAttr = id ? ` id="${id}"` : "";
    const headerImgHtml = headerImg
      ? `<div class="proj-media"><img src="${headerImg}" alt=""></div>`
      : "";
    // Если текст уже содержит готовую разметку (таблица, цитата и т.д.),
    // выводим его как есть — иначе оборачиваем в <p>, как раньше.
    const isRichHtml = /<(table|blockquote|div|ul)[\s>]/.test(text);
    const bodyHtml = isRichHtml ? text : `<p>${text}</p>`;

    return `
      <div class="proj-section"${idAttr}>
        <div class="proj-section-head">
          <h3>${title}</h3>
          ${linkHtml}
        </div>
        <div class="proj-section-body">
          ${headerImgHtml}
          ${bodyHtml}
        </div>
      </div>
    `;
  }

  let html = "";

  if (p.id === 0) {
    html += `<h1 class="proj-big-title">Эмоциональный дизайн в B2c продукте</h1>`;
  }
  if (p.id === 1) {
    html += `<h1 class="proj-big-title">Прогнозирование рисков в B2B сервисе</h1>`;
  }
  if (p.id === 2) {
    html += `<h1 class="proj-big-title">Интеграция AI в процесс разработки</h1>`;
  }
  if (p.id === 8) {
    html += `<h1 class="proj-big-title">Оптимизация функции перевода средств</br>в приложении</h1>`;
  }
  if (p.id === 6) {
    html += `<h1 class="proj-big-title">Оптимизация корзины и оформления заказа</h1>`;
  }
  if (p.id === 9) {
    html += `<h1 class="proj-big-title">Мониторинг беспилотного флота Т-Такси</h1>`;
  }
  html += section(st('context'), tr(p, 'context'));
  if (p.id === 0) {
    html += image('assets/FinCorp_about.jpg');
  }
  html += section(st('problem'), tr(p, 'problem'), null, "proj-problem");
  html += image(p.problemImage);
  if (p.id !== 8) {
    html += image(p.solutionImage);
  }
  html += section(st('solution'), tr(p, 'solution'), null, "proj-solution");
  if (p.id === 8) {
    html += image(p.solutionImage);
  }
  if (p.id === 0) {
    html += image('assets/FinCorp_mentor.jpg');
  }
  html += section(st('competitors'), tr(p, 'competitorAnalysis'), p.competitorLink);
  html += image(p.competitorImage);
  if (p.competitorImages && p.competitorImages.length) {
    html += `
      <div class="proj-benchmark-grid">
        ${p.competitorImages.map(src => `<img src="${src}" alt="">`).join("")}
      </div>
    `;
  }

  if (p.research) {
  html += `
    <div class="proj-section">
      <div class="proj-section-head">
        <h3>${st('research')}</h3>
        ${p.researchLink ? `<a class="figma-link" href="${p.researchLink}" target="_blank" rel="noopener">${st('figmaLink')}</a>` : ""}
      </div>

      <div class="proj-section-body">
        <div class="research-block">
          <h4>${st('userProblems')}</h4>
          <ul>
            ${trResearch(p, 'userProblems').map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <div class="research-block">
          <h4>${st('valueHyp')}</h4>
          <ul>
            ${trResearch(p, 'valueHypotheses').map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <div class="research-block">
          <h4>${st('behaviorHyp')}</h4>
          <ul>
            ${trResearch(p, 'behaviorHypotheses').map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <div class="research-block">
          <h4>${st('insights')}</h4>
          <ul>
            ${trResearch(p, 'insights').map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
}

  html += image(p.researchImage);

  html += section(st('jtbd'), tr(p, 'jtbd'));
  html += image(p.jtbdImage);

  if (p.jtbdGroups) {
    html += `
      <div class="proj-section">
        <div class="proj-section-head">
          <h3>${st('userGroups')}</h3>
          ${p.frameworksLink ? `<a class="figma-link" href="${p.frameworksLink}" target="_blank" rel="noopener">${st('figmaLink')}</a>` : ""}
        </div>

        <div class="proj-section-body">
          ${p.id === 2 ? `<div class="proj-media"><img src="assets/Users_Ai_PM.jpg" alt=""></div>` : ""}

          ${trGroups(p).map(group => `
            <div style="margin-bottom:30px">
              <h4>${group.title}</h4>
              <p>${group.description}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
  html += image(p.jtbdGroupsImage);

  html += section(st('cjm'), tr(p, 'cjm'));
  html += image(p.cjmImage);

  html += section(st('keyScenarios'), tr(p, 'keyScenarios'));
  html += image(p.keyScenariosImage);

  html += section(st('userFlow'), tr(p, 'userFlow'), p.userFlowLink);
  html += image(p.userflowImage);

  html += section(
    p.purchaseScenarioTitle ? tr(p, 'purchaseScenarioTitle') : st('purchaseDefault'),
    tr(p, 'purchaseScenario')
  );
  html += image(p.purchaseScenarioImage);

  html += section(st('designSystem'), tr(p, 'designSystem'), p.designSystemLink, null, p.id === 0 ? 'assets/FinCorp_design_system.jpg' : null);
  html += image(p.uikitImage);

  html += section(st('prototype'), tr(p, 'prototype'), p.prototypeLink);
  html += image(p.prototypeImage);

  const processScreens = trProcessScreens(p);
  if (processScreens.length) {
    html += `
      <div class="proj-section">
        <div class="proj-section-head"><h3>${st('process')}</h3></div>
        <div class="proj-section-body">
          <div class="proj-process-list">
            ${processScreens.map((s, i) => `
              <figure class="proj-process-item">
                <div class="proj-process-num">${String(i + 1).padStart(2, '0')}</div>
                <img src="${s.img}" alt="">
                <figcaption>${s.caption}</figcaption>
              </figure>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  } else if (p.images) {
    p.images.forEach(src => {
      html += image(src);
    });
  }

  if (p.id === 0) {
    const resultsText = tr(p, 'results');
    const marker = '— AI Recommendation Acceptance Rate — доля рекомендаций, которые пользователь принимает или использует в своих финансовых решениях';
    const markerIndex = resultsText.indexOf(marker);

    if (markerIndex !== -1) {
      const splitAt = markerIndex + marker.length;
      const beforeText = resultsText.slice(0, splitAt);
      const afterText = resultsText.slice(splitAt);
      html += `
        <div class="proj-section" id="proj-results">
          <div class="proj-section-head">
            <h3>${st('results')}</h3>
          </div>
          <div class="proj-section-body">
            <p>${beforeText}</p>
            <div class="proj-media"><img src="assets/FINCORP_results.jpg" alt=""></div>
            <p>${afterText}</p>
          </div>
        </div>
      `;
    } else {
      html += section(st('results'), resultsText, null, "proj-results");
      html += image('assets/FINCORP_results.jpg');
    }
  } else {
    html += section(st('results'), tr(p, 'results'), null, "proj-results");
    html += image(p.resultsImage);
  }

  if (p.references) {
    const refs = trReferences(p);

    // Разбиваем плоский список источников на блоки по полю group.
    // Элементы без group попадают в блок без подзаголовка (buckets[0]).
    const buckets = [];
    let current = { group: null, groupIntro: null, items: [] };
    refs.forEach(link => {
      if (link.group !== current.group) {
        if (current.items.length) buckets.push(current);
        current = { group: link.group || null, groupIntro: link.groupIntro || null, items: [] };
      }
      current.items.push(link);
    });
    if (current.items.length) buckets.push(current);

    const refsHtml = buckets.map(bucket => `
      ${bucket.group ? `<h4 class="proj-refs-group-title">${bucket.group}</h4>` : ""}
      ${bucket.groupIntro ? `<p class="proj-refs-group-intro">${bucket.groupIntro}</p>` : ""}
      <ul>
        ${bucket.items.map(link => `
          <li>
            <a href="${link.url}" target="_blank">
              ${link.title}
            </a>
          </li>
        `).join("")}
      </ul>
    `).join("");

    html += `
      <div class="proj-section">
        <div class="proj-section-head">
          <h3>${st('sources')}</h3>
        </div>
        <div class="proj-section-body">
          ${refsHtml}
        </div>
      </div>
    `;
  }

  if (tagsHtml) {
    html += `
      <div class="proj-tags">
        ${tagsHtml}
      </div>
    `;
  }

  if (p.id === 0) {
    html += image('assets/FinCorp_End.jpg');
  }

  if (p.id === 1) {
    html += image('assets/Core_End.jpg');
  }

  document.getElementById("proj-body").innerHTML = html;

  document.getElementById("project-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
  currentOpenProjectId = id;

  // Открыта страница проекта: показываем "Назад" в навигации, сбрасываем прозрачность
  const navEl = document.getElementById("main-nav");
  navEl.classList.add("project-open");
  navEl.classList.remove("scrolled");
  navEl.classList.remove("home-page");
  navEl.classList.toggle("light-banner", !!p.lightBanner);
}

function handleNavBack() {
  // На странице проекта "Назад" закрывает оверлей проекта,
  // а не уводит на страницу "Обо мне"
  if (document.getElementById('main-nav').classList.contains('project-open')) {
    closeProject();
  } else {
    navigateTo('about');
  }
}

function closeProject() {
  document.getElementById("project-overlay").classList.remove("open");
  document.body.style.overflow = "";
  currentOpenProjectId = null;

  // Вернулись на главную: убираем "Назад", восстанавливаем нав по прокрутке страницы
  const navEl = document.getElementById("main-nav");
  navEl.classList.remove("project-open");
  navEl.classList.remove("light-banner");
  navEl.classList.add("home-page");
  navEl.classList.toggle("scrolled", window.scrollY > 10);
}


/* ============================================================
   СТРАНИЦЫ САЙТА (SPA-навигация одним файлом)
   Доступные страницы: about, experience, projects, contact
============================================================ */
let currentPage = 'about';

function navigateTo(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(page + '-page');
  if (target) target.classList.add('active');

  // Главная страница (Обо мне) должна помещаться в экран без скролла —
  // на остальных страницах скролл работает как обычно.
  document.body.classList.toggle('page-about', page === 'about');
  document.documentElement.classList.toggle('page-about', page === 'about');

  // Текущая страница — используется в CSS, чтобы скрывать футер
  // (контакты/навигацию снизу) на страницах "Опыт" и "Проекты"
  document.body.setAttribute('data-page', page);

  // Кнопка "Назад" в навигации видна на любой странице, кроме главной
  mainNav.classList.toggle('sub-page-open', page !== 'about');

  // Закрываем оверлей проекта, если он был открыт
  closeProject();

  // Карточки могли устареть по языку, пока мы были на другой странице —
  // досчитываем их именно сейчас, а не при каждом переключении языка.
  if (page === 'projects' && cardsNeedRerender) {
    renderProjectCards();
    cardsNeedRerender = false;
  }

  // Мгновенный сброс скролла (без плавной анимации): на длинных
  // страницах плавный scroll-behavior из CSS заставлял скролл долго
  // "доезжать" наверх, из-за чего казалось, что верхняя навигация
  // пропадает при переходе на другую страницу.
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}


/* ============================================================
   RU / EN — переключение языка сайта
   Статический текст переключается через пары
   <span class="lang-ru">…</span> / <span class="lang-en">…</span>
   (см. CSS: body.lang-en .lang-ru { display:none } и наоборот)

   Карточки проектов (генерируются из PROJECTS) перерисовываются
   на нужном языке отдельно.
============================================================ */
let currentLang = 'ru';
let cardsNeedRerender = true; // выставляется в true, когда язык поменялся,
                               // а страница "Проекты" сейчас не активна —
                               // тогда карточки перерисуются лениво, при
                               // переходе на эту страницу (см. navigateTo)

function switchLanguage(lang) {
  currentLang = lang;
  document.body.classList.toggle('lang-mode-en', lang === 'en');
  document.documentElement.setAttribute('lang', lang);

  document.getElementById('lang-ru-btn')?.classList.toggle('active', lang === 'ru');
  document.getElementById('lang-en-btn')?.classList.toggle('active', lang === 'en');

  // Карточки на странице "Проекты" перерисовываем сразу, только если
  // она сейчас видна — на остальных страницах это лишняя работа,
  // перерисуем при переходе туда (навигация ниже).
  if (currentPage === 'projects') {
    renderProjectCards();
    cardsNeedRerender = false;
  } else {
    cardsNeedRerender = true;
  }

  // Если открыта карточка конкретного проекта — переоткрываем её на новом
  // языке. Раньше переключатель языка её не трогал, поэтому текст внутри
  // открытого проекта не менялся.
  if (currentOpenProjectId !== null) {
    openProject(currentOpenProjectId);
  }
}


/* ============================================================
   КАРТОЧКИ ПРОЕКТОВ — рендер из массива PROJECTS (GRID версия)
============================================================ */

function renderProjectCards() {
  const track = document.getElementById('projects-track');
  if (!track) return;

  track.innerHTML = PROJECTS.filter(p => !p.hidden).map(p => {
    const title = (p.title && p.title[currentLang]) || (p.title && p.title.ru) || '';
    const desc = (p.cardDesc && p.cardDesc[currentLang]) || (p.cardDesc && p.cardDesc.ru) || '';
    const bg = (p.cardImg || p.bannerImg) ? `background-image: url('${p.cardImg || p.bannerImg}');` : 'background: #f0f0f0;';

    return `
      <div class="project-card" data-id="${p.id}" onclick="ym(110418530,'reachGoal','click_project');openProject(${p.id})">
        <div class="card-bg" style="${bg}">
          <div class="card-overlay"></div>
        </div>
        <div class="card-info">
          <div class="card-title">${title}</div>
          <div class="card-desc">${desc}</div>
        </div>
      </div>
    `;
  }).join('');
}


/* ============================================================
   СКАЧИВАНИЕ CV
   Файл один и тот же, но имя сохранённого файла зависит от языка
============================================================ */
function downloadCV() {
  const fileName = currentLang === 'en'
    ? 'CV Azalia Zamaletdinova.pdf'
    : 'CV Азалия Замалетдинова.pdf';

  const link = document.createElement('a');
  link.href = 'assets/CV_Azaliya_Zamaletdinova.pdf';
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


/* ============================================================
   АВАТАР — hover-зона переключает avatar_image_1 → avatar_image_2
============================================================ */
function initAvatarHover() {
  const zone = document.querySelector('.avatar-hover-zone');
  const bg = document.querySelector('.banner-bg');
  if (!zone || !bg) return;

  zone.addEventListener('mouseenter', () => bg.classList.add('avatar-hover'));
  zone.addEventListener('mouseleave', () => bg.classList.remove('avatar-hover'));
}


/* ============================================================
   МОБИЛЬНОЕ ФОТО НАД БЛОКОМ "О СЕБЕ" — плавный переход
   с avatar_image_1_Mobile на avatar_image_2_Mobile при загрузке
============================================================ */
function initMobileAvatarFade() {
  const wrap = document.querySelector('.mobile-avatar-wrap');
  if (!wrap) return;

  // небольшая пауза перед стартом перехода, чтобы сначала
  // было видно первое фото
  setTimeout(() => wrap.classList.add('avatar-loaded'), 900);
}


/* ============================================================
   ИНИЦИАЛИЗАЦИЯ
============================================================ */
window.addEventListener('DOMContentLoaded', () => {
  renderProjectCards();
  navigateTo('about');
  initAvatarHover();
  initMobileAvatarFade();
}); 
