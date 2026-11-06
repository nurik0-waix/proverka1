const icons = {
  logo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4 4"/></svg>',
  bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-4-6 4V4.8Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 4 4L19 6"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m6.5-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8.5 0a4 4 0 0 0 0-8m3 18v-2a4 4 0 0 0-3-3.87"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>'
};


const wizardQuestions = [
  { key: 'criteria', question: 'Какого сотрудника вы хотите видеть в команде?', hint: 'Опишите профиль и важные качества. Рабочую задачу и список обязанностей указывать не нужно.', placeholder: 'Например: junior frontend, знает основы React, внимателен к деталям и готов учиться', freeform: true },
  { key: 'skills', question: 'Какие навыки важны в первую очередь?', hint: 'Можно выбрать несколько направлений или вписать конкретные инструменты.', options: ['JavaScript / TypeScript','Python / SQL','Figma / UX','Тестирование / QA','Коммуникация','Аналитика','Контент и маркетинг','Готовы обучить'] },
  { key: 'learning', question: 'Сколько времени готовы заложить на обучение?', hint: 'Ищем не стаж, а подходящего по темпу и ожиданиям человека.', options: ['Покажем основы за пару дней','Есть план на первые 2–3 недели','Готовы наставлять несколько месяцев','Нужен самостоятельный старт'] },
  { key: 'schedule', question: 'Какой график подойдёт вашей команде?', hint: 'Учтём формат и доступность кандидата.', options: ['Гибкий, можно совмещать с учёбой','Частичная занятость','Полный день','Стажировка с гибким графиком'] },
  { key: 'budget', question: 'Какой бюджет заложен на старт?', hint: 'Нужен для корректного совпадения с ожиданиями кандидата.', options: ['Оплачиваемая стажировка','До 200 000 ₸','200 000–350 000 ₸','Обсуждается с кандидатом'] },
  { key: 'priority', question: 'Что важнее на старте?', hint: 'У новичков потенциал и практика часто значат больше строчки в резюме.', options: ['Мотивация и желание учиться','Навыки и учебные проекты','Поровну: потенциал и база','Сильная коммуникация'] }
];

const pinnedCandidates = [
  { id: -1, pinned: true, name: 'Русланулы Нуржигит', age: 18, role: 'Backend-разработчик', direction: 'Backend', city: 'Любой город', format: 'Удалённо', level: 'Без опыта', skills: [], project: 'Портфолио не добавлено', about: 'Профиль кандидата. Навыки и учебные проекты пока не указаны.', course: 'Не указано', certificate: 'Не указан', github: '', match: 0, motivation: 0, learning: 0, projects: false, availability: 'Полный день', language: 'Русский', expectation: 'Обсуждается' },
  { id: -2, pinned: true, name: 'Карабаев Мейржан', age: 19, role: 'Специализация не указана', direction: '', city: 'Любой город', format: 'Удалённо', level: 'Без опыта', skills: [], project: 'Портфолио не добавлено', about: 'Профиль кандидата. Направление, навыки и учебные проекты пока не указаны.', course: 'Не указано', certificate: 'Не указан', github: '', match: 0, motivation: 0, learning: 0, projects: false, availability: 'Полный день', language: 'Русский', expectation: 'Обсуждается' }
];
let candidates = [...pinnedCandidates, ...JSON.parse(localStorage.getItem('juniorCandidates') || '[]')];
let pendingPhoto = '';

const state = {
  page: 'candidate-form', detailId: null, saved: new Set(JSON.parse(localStorage.getItem('juniorSaved') || '[]')),
  invites: new Set(JSON.parse(localStorage.getItem('juniorInvites') || '[]')),
  history: JSON.parse(localStorage.getItem('juniorSearches') || '[]'), wizard: null,
  filters: { query: '', direction: '', level: '', city: '', format: '', language: '', skills: [], learning: false, projects: false },
  sort: 'match', dashboardTab: 'saved', mobileFilters: false, newCandidate: null, aiCandidateIds: null, aiResults: []
};

const app = document.querySelector('#app');
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[char]));
const safeUrl = value => { try { const url = new URL(value); return ['http:','https:'].includes(url.protocol) ? escapeHtml(url.href) : ''; } catch { return ''; } };
const avatar = person => {
  if (person.photo) return `<img src="${escapeHtml(person.photo)}" alt="${escapeHtml(person.name)}" loading="lazy">`;
  const initials = person.name.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase();
  const image = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" rx="24" fill="#e9edff"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#5369d8" font-family="sans-serif" font-size="32" font-weight="700">${initials}</text></svg>`;
  return `<img src="data:image/svg+xml,${encodeURIComponent(image)}" alt="${escapeHtml(person.name)}" loading="lazy">`;
};
const icon = name => icons[name] || '';

function render() {
  app.innerHTML = `${header()}<main class="shell">${pageContent()}</main>${footer()}${mobileNav()}${state.wizard ? wizardMarkup() : ''}<div id="toast-root"></div>`;
  if (state.page === 'home') state.page = 'candidate-form';
  if (state.wizard?.done) {
    const resultTitle = app.querySelector('.wizard-question');
    const answerSummary = app.querySelector('.answer-summary');
    if (resultTitle) resultTitle.textContent = 'Кто лучше всего соответствует вашим критериям';
    if (answerSummary) answerSummary.innerHTML = `<strong>Профиль сотрудника:</strong> ${escapeHtml(state.wizard.answers.criteria || 'Подбор по выбранным критериям')}<br><strong>Важный приоритет:</strong> ${escapeHtml(state.wizard.answers.priority || 'Потенциал и база')}`;
    app.querySelectorAll('.wizard .simple-row').forEach((row, index) => {
      const person = state.wizard.results[index];
      const title = row.querySelector('.simple-row-main strong');
      if (person?.pinned && title) title.textContent = `${person.name} · Закреплённый профиль`;
    });
  }
  const languageFilter = app.querySelector('#language');
  if (languageFilter) languageFilter.value = state.filters.language || 'Любой';
  if (state.aiCandidateIds) {
    const heading = app.querySelector('.ai-banner h3');
    const description = app.querySelector('.ai-banner p');
    const catalogButton = app.querySelector('.ai-banner [data-action="open-wizard"]');
    if (heading) heading.textContent = 'Ваш топ-5 по AI-подбору';
    if (description) description.textContent = 'Кандидаты с лучшим совпадением по вашим критериям.';
    if (catalogButton) {
      catalogButton.dataset.action = 'clear-ai-results';
      catalogButton.classList.add('secondary');
      catalogButton.textContent = 'Весь каталог';
    }
  }
  const candidateForm = app.querySelector('#candidate-form');
  if (candidateForm) {
    candidateForm.querySelector('.form-grid').insertAdjacentHTML('afterbegin', '<div class="form-field"><label for="candidate-age">Возраст</label><input id="candidate-age" type="number" min="14" max="100" placeholder="Например, 18"></div><div class="form-field"><label for="candidate-photo">Фото профиля</label><input id="candidate-photo" type="file" accept="image/jpeg,image/png,image/webp"><span id="photo-hint" class="photo-hint">Можно загрузить JPG, PNG или WebP</span><img id="photo-preview" class="photo-preview" alt="Предпросмотр фото" hidden></div>');
    candidateForm.querySelector('.form-grid').insertAdjacentHTML('beforeend', '<div class="form-field"><label for="candidate-portfolio">Портфолио</label><input id="candidate-portfolio" placeholder="Ссылка на проекты"></div><div class="form-field"><label for="candidate-certificate">Сертификат</label><input id="candidate-certificate" placeholder="Курс или ссылка на сертификат"></div>');
  }
  if (state.page === 'candidate-form' && state.newCandidate) {
    const profile = app.querySelector('.profile-main');
    const github = safeUrl(state.newCandidate.github);
    const portfolio = safeUrl(state.newCandidate.portfolio);
    profile.insertAdjacentHTML('beforeend', `<section class="profile-section"><h2>Учебный проект</h2><p>${escapeHtml(state.newCandidate.project)}</p></section><section class="profile-section"><h2>Курсы и сертификаты</h2><p>${escapeHtml(state.newCandidate.course)} · ${escapeHtml(state.newCandidate.certificate || 'Сертификат не добавлен')}</p></section><section class="profile-section"><h2>Цель и мотивация</h2><p>${escapeHtml(state.newCandidate.about)}</p></section><section class="profile-section"><h2>Мини-тест навыков</h2><p>Базовые навыки: ${escapeHtml(state.newCandidate.skills.join(', '))}. Готов(а) развиваться на практических задачах.</p></section><section class="profile-section"><h2>Ссылки</h2><p>${github ? `<a href="${github}" target="_blank" rel="noreferrer">GitHub ↗</a>` : 'GitHub не добавлен'}${portfolio ? ` · <a href="${portfolio}" target="_blank" rel="noreferrer">Портфолио ↗</a>` : ' · Портфолио не добавлено'}</p></section>`);
  }
  if (state.page === 'profile') {
    const person = findCandidate(state.detailId);
    const profileMeta = app.querySelector('.profile-header p');
    if (person?.age && profileMeta) profileMeta.textContent = `${person.role} · ${person.age} лет · ${person.level} · ${person.city}`;
    const sections = app.querySelectorAll('.profile-side .side-section');
    const linksSection = sections[sections.length - 1];
    if (person && linksSection) linksSection.innerHTML = `<h3>Ссылки</h3><div class="side-data"><span>GitHub</span><strong><a href="${escapeHtml(person.github)}" target="_blank" rel="noreferrer">Открыть GitHub ↗</a></strong></div><div class="side-data"><span>Портфолио</span><strong>Учебные проекты</strong></div><div class="side-data"><span>Сертификат</span><strong>${escapeHtml(person.certificate)}</strong></div>`;
    const projectSection = [...app.querySelectorAll('.profile-main > .profile-section')].find(section => section.querySelector('h2')?.textContent === 'Учебные проекты');
    if (person && projectSection) projectSection.insertAdjacentHTML('afterend', `<section class="profile-section"><h2>Курсы и сертификаты</h2><p>${escapeHtml(person.course)} · ${escapeHtml(person.certificate)}</p></section>`);
  }
  bindEvents();
}

function header() {
  const nav = [['home','Главная'],['search','Найти кандидата'],['dashboard','Кабинет']];
  return `<header class="topbar shell"><button class="brand" data-page="home" aria-label="Старт, главная"><span class="brand-mark">${icon('logo')}</span>старт</button><nav class="nav">${nav.map(([page,label]) => `<button class="nav-link ${state.page === page || (state.page === 'profile' && page === 'dashboard') ? 'active' : ''}" data-page="${page}">${label}</button>`).join('')}</nav><div class="top-actions"><button class="icon-button" data-page="dashboard" aria-label="Сохранённые кандидаты">${icon('bookmark')}${state.saved.size ? '<i class="count-dot"></i>' : ''}</button><button class="button small" data-action="open-wizard">${icon('sparkle')} AI-подбор</button><button class="icon-button mobile-menu" data-action="mobile-menu" aria-label="Открыть меню">${icon('menu')}</button></div></header>`;
}

function footer() { return `<footer class="footer shell"><a class="brand" href="#" data-page="home"><span class="brand-mark">${icon('logo')}</span>старт</a><span>Первая работа начинается с правильного совпадения.</span><div class="footer-links"><a href="#" data-page="search">Кандидатам</a><a href="#" data-page="dashboard">Работодателям</a><span>© 2026</span></div></footer>`; }

function mobileNav() {
  return `<nav class="mobile-nav"><button class="${state.page === 'home' ? 'active' : ''}" data-page="home">${icon('logo')}Главная</button><button class="${state.page === 'search' ? 'active' : ''}" data-page="search">${icon('search')}Поиск</button><button data-action="open-wizard">${icon('sparkle')}AI-подбор</button><button class="${state.page === 'dashboard' ? 'active' : ''}" data-page="dashboard">${icon('bookmark')}Кабинет</button></nav>`;
}

function pageContent() {
  if (state.page === 'search') return searchPage();
  if (state.page === 'profile') return profilePage();
  if (state.page === 'dashboard') return dashboardPage();
  if (state.page === 'candidate-form') return candidateFormPage();
  return homePage();
}

function homePage() {
  return candidateFormPage();
}

function candidateCard(person, index = 0) {
  return `<article class="candidate-card ${person.pinned?'pinned-card':''}" style="animation-delay:${Math.min(index,8)*35}ms"><div class="candidate-top" data-profile="${person.id}">${avatar(person)}<div class="candidate-name"><h3>${escapeHtml(person.name)}</h3><p>${escapeHtml(person.role)} · ${person.age ? `${person.age} лет · ` : ''}${escapeHtml(person.level)}</p>${person.pinned?'<span class="pinned-label">Закреплённый профиль</span>':''}</div><button class="save-button ${state.saved.has(person.id) ? 'saved' : ''}" data-save="${person.id}" aria-label="${state.saved.has(person.id) ? 'Убрать из сохранённых' : 'Сохранить кандидата'}">${icon('bookmark')}</button></div><div class="candidate-tags">${person.skills.length ? person.skills.slice(0,3).map((skill,i) => `<span class="tag ${i === 0 ? 'blue' : ''}">${escapeHtml(skill)}</span>`).join('') : '<span class="tag">Навыки не указаны</span>'}</div><div class="candidate-meta"><span>${icon('folder')}${escapeHtml(person.project)}</span><span>${escapeHtml(person.format)}</span></div><div class="candidate-bottom"><span class="match-pill"><i></i>${person.pinned?'Профиль кандидата':`${person.match}% совпадение`}</span><button class="profile-link" data-profile="${person.id}">Профиль ${icon('arrow')}</button></div></article>`;
}

function searchPage() {
  if (!candidates.length) return `<div class="page-head"><div><h1>Кандидаты</h1><p>Каталог пока пуст.</p></div></div><div class="empty-state"><h3>Пока нет профилей кандидатов</h3><p>Когда соискатели создадут анкеты, они появятся здесь.</p><button class="button small" data-page="candidate-form" style="margin-top:16px">Создать профиль ${icon('arrow')}</button></div>`;
  const filtered = getFilteredCandidates();
  return `<div class="page-head"><div><h1>Найдите своего новичка</h1><p>Навыки, потенциал и проекты вместо требований к стажу.</p></div><button class="button" data-action="open-wizard">${icon('sparkle')} Подобрать с AI</button></div><div class="ai-banner"><div class="ai-banner-copy"><i class="ai-icon">${icon('sparkle')}</i><div><h3>AI-мастер подбора</h3><p>Ответьте на 6 коротких вопросов и получите топ-5 кандидатов с объяснением совпадения.</p></div></div><button class="button small" data-action="open-wizard">Начать подбор ${icon('arrow')}</button></div><div class="search-layout"><aside class="filters"><div class="filter-title">Фильтры <button data-action="clear-filters">Сбросить</button></div><div class="filter-group"><label class="title" for="query">Поиск по профилям</label><input id="query" class="field" placeholder="Навык, имя, проект..." value="${escapeHtml(state.filters.query)}"></div><div class="filter-group"><label class="title" for="direction">Направление</label><select class="select-field" id="direction"><option value="">Все направления</option>${['Frontend','Backend','UX/UI','QA','Аналитик','Маркетолог','Специалист поддержки'].map(v => `<option ${state.filters.direction===v?'selected':''}>${v}</option>`).join('')}</select></div><div class="filter-group"><label class="title" for="level">Уровень</label><select class="select-field" id="level"><option value="">Любой уровень</option>${['Студент','Без опыта','Стажёр','Junior'].map(v => `<option ${state.filters.level===v?'selected':''}>${v}</option>`).join('')}</select></div><div class="filter-group"><label class="title" for="city">Город или удалённо</label><input id="city" class="field" placeholder="Например, Москва" value="${escapeHtml(state.filters.city)}"></div><div class="filter-group"><label class="title" for="format">Формат работы</label><select class="select-field" id="format"><option value="">Любой формат</option>${['Стажировка','Удалённо','Гибрид','Офис','Частичная занятость','Полный день'].map(v => `<option ${state.filters.format===v?'selected':''}>${v}</option>`).join('')}</select></div><div class="filter-group"><label class="title">Навыки</label><div class="filter-chips">${['React','Python','Figma','SQL','Тестирование','Контент'].map(skill => `<button class="filter-chip ${state.filters.skills.includes(skill)?'selected':''}" data-skill="${skill}">${skill}</button>`).join('')}</div></div><div class="filter-group"><label class="check-row"><input type="checkbox" id="learning" ${state.filters.learning?'checked':''}> Готов учиться</label><label class="check-row"><input type="checkbox" id="projects" ${state.filters.projects?'checked':''}> Есть проекты в портфолио</label></div><div class="filter-compact ${state.mobileFilters?'open':''}"><div class="filter-group"><label class="title" for="language">Язык</label><select class="select-field" id="language"><option>Любой</option><option>Русский</option><option>Английский</option></select></div></div></aside><section><div class="results-toolbar"><span class="result-count"><strong>${filtered.length}</strong> кандидата по вашему запросу</span><select class="sort-select" id="sort"><option value="match" ${state.sort==='match'?'selected':''}>Сначала совпадения</option><option value="projects" ${state.sort==='projects'?'selected':''}>Больше проектов</option><option value="name" ${state.sort==='name'?'selected':''}>По имени</option></select></div>${filtered.length ? `<div class="results-grid">${filtered.map((person,i)=>candidateCard(person,i)).join('')}</div>` : `<div class="empty-state"><h3>Пока никого не нашли</h3><p>Измените фильтры или попробуйте AI-подбор под вашу задачу.</p></div>`}</section></div>`;
}

function getFilteredCandidates() {
  const f = state.filters;
  let list = state.aiCandidateIds ? state.aiResults : [...candidates];
  if (f.query) list = list.filter(p => `${p.name} ${p.role} ${p.project} ${p.skills.join(' ')}`.toLowerCase().includes(f.query.toLowerCase()));
  if (f.direction) list = list.filter(p => p.role.toLowerCase().includes(f.direction.toLowerCase()) || p.direction.toLowerCase().includes(f.direction.toLowerCase()));
  if (f.level) list = list.filter(p => p.level === f.level);
  if (f.city) list = list.filter(p => p.city === 'Любой город' || p.city.toLowerCase().includes(f.city.toLowerCase()));
  if (f.format) list = list.filter(p => p.format === f.format || p.availability === f.format);
  if (f.language) list = list.filter(p => p.language.toLowerCase().includes(f.language.toLowerCase()));
  if (f.skills.length) list = list.filter(p => f.skills.some(s => p.skills.some(skill => skill.toLowerCase().includes(s.toLowerCase()))));
  if (f.learning) list = list.filter(p => p.learning >= 4);
  if (f.projects) list = list.filter(p => p.projects);
  if (state.sort === 'match') list.sort((a,b) => b.match-a.match);
  if (state.sort === 'name') list.sort((a,b) => a.name.localeCompare(b.name,'ru'));
  if (state.sort === 'projects') list.sort((a,b) => Number(b.projects)-Number(a.projects));
  list.sort((a,b) => Number(Boolean(b.pinned))-Number(Boolean(a.pinned)));
  list.sort((a,b) => Number(Boolean(b.pinned))-Number(Boolean(a.pinned)));
  return list;
}

function profilePage() {
  const person = findCandidate(state.detailId);
  if (!person) return homePage();
  return `<div class="page-head"><button class="text-link" data-action="back">${icon('arrow')} Назад к поиску</button><span></span></div><div class="profile-layout"><article class="profile-main"><div class="profile-cover"></div><div class="profile-header">${avatar(person)}<div><h1>${escapeHtml(person.name)}</h1><p>${escapeHtml(person.role)} · ${escapeHtml(person.level)} · ${escapeHtml(person.city)}</p></div><div class="profile-actions"><button class="button secondary small" data-save="${person.id}">${icon('bookmark')} ${state.saved.has(person.id)?'Сохранено':'Сохранить'}</button><button class="button small" data-invite="${person.id}">${icon('arrow')} ${state.invites.has(person.id)?'Приглашение отправлено':'Пригласить'}</button></div></div><section class="profile-section"><h2>О себе</h2><p>${escapeHtml(person.about)}</p></section><section class="profile-section"><h2>Навыки</h2><div class="skill-list">${person.skills.map(s=>`<span class="tag blue">${escapeHtml(s)}</span>`).join('')}<span class="tag">Быстро учусь</span><span class="tag">Командная работа</span></div></section><section class="profile-section"><h2>Учебные проекты</h2><article class="project-item"><i class="project-icon">${icon('folder')}</i><div><strong>${escapeHtml(person.project)}</strong><p>Самостоятельный проект · ${escapeHtml(person.skills.slice(0,2).join(', '))}. Решал(а) практическую задачу и самостоятельно разобрал(а)ся с новыми инструментами.</p></div></article><article class="project-item"><i class="project-icon">${icon('sparkle')}</i><div><strong>Практика в рамках курса</strong><p>Обучение: ${escapeHtml(person.course)}. Командная работа и защита результата.</p></div></article></section><section class="profile-section"><h2>Цель</h2><p>Получить первый практический опыт, работать с наставником и постепенно брать на себя больше ответственности.</p></section><section class="profile-section"><h2>Мини-тест навыков</h2><p>Результат: ${person.match > 85 ? 'сильная база по основным инструментам' : 'хорошее понимание основ, готов(а) развиваться'} · ${person.skills[0]} · проектная практика.</p></section></article><aside class="profile-side"><div class="side-score"><span>СОВПАДЕНИЕ С ЗАДАЧЕЙ</span><strong>${person.match}%</strong><p>Навыки и учебные проекты хорошо соответствуют выбранному направлению.</p></div><div class="side-section"><h3>Профиль</h3><div class="side-data"><span>Формат</span><strong>${escapeHtml(person.format)}</strong></div><div class="side-data"><span>Город</span><strong>${escapeHtml(person.city)}</strong></div><div class="side-data"><span>Готовность учиться</span><strong>${person.learning}/5</strong></div><div class="side-data"><span>Проектная практика</span><strong>${person.projects?'Есть':'В процессе'}</strong></div></div><div class="side-section"><h3>Ссылки</h3><div class="side-data"><span>GitHub</span><strong>github.com/${person.name.split(' ')[0].toLowerCase()}</strong></div><div class="side-data"><span>Портфолио</span><strong>Открыть проекты ↗</strong></div></div></aside></div>`;
}

function dashboardPage() {
  const tab = state.dashboardTab;
  let content = '';
  if (tab === 'saved') {
    const list = candidates.filter(p=>state.saved.has(p.id));
    content = list.length ? `<div class="candidate-grid">${list.map((p,i)=>candidateCard(p,i)).join('')}</div>` : `<div class="empty-state"><h3>Здесь появятся сохранённые кандидаты</h3><p>В поиске нажмите значок закладки на понравившемся профиле.</p><button class="button small" data-page="search" style="margin-top:15px">Перейти к поиску ${icon('arrow')}</button></div>`;
  } else if (tab === 'history') {
    content = state.history.length ? `<div class="simple-list">${state.history.map(item=>`<div class="simple-row"><i class="ai-icon">${icon('search')}</i><div class="simple-row-main"><strong>${escapeHtml(item.task || 'Подбор кандидатов')}</strong><span>${new Date(item.date).toLocaleDateString('ru-RU')} · ${item.count} подходящих кандидатов</span></div><button class="button secondary small" data-action="repeat-search">Открыть</button></div>`).join('')}</div>` : `<div class="empty-state"><h3>История пока пуста</h3><p>Ваши AI-подборы будут сохраняться здесь.</p></div>`;
  } else {
    const list = candidates.filter(p=>state.invites.has(p.id));
    content = list.length ? `<div class="simple-list">${list.map(p=>`<div class="simple-row">${avatar(p)}<div class="simple-row-main"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.role)} · Приглашение отправлено</span></div><span class="match-pill"><i></i>${p.match}%</span></div>`).join('')}</div>` : `<div class="empty-state"><h3>Приглашений пока нет</h3><p>Когда вы пригласите кандидата, статус появится здесь.</p></div>`;
  }
  return `<div class="page-head"><div><h1>Кабинет работодателя</h1><p>Кандидаты, подборы и приглашения в одном месте.</p></div><button class="button" data-action="open-wizard">${icon('sparkle')} Новый подбор</button></div><div class="dashboard-tabs"><button class="tab ${tab==='saved'?'active':''}" data-tab="saved">Сохранённые (${state.saved.size})</button><button class="tab ${tab==='history'?'active':''}" data-tab="history">История подборов (${state.history.length})</button><button class="tab ${tab==='invites'?'active':''}" data-tab="invites">Приглашения (${state.invites.size})</button></div>${content}`;
}

function candidateFormPage() {
  const person = state.newCandidate;
  return `<div class="page-head"><div><h1>${person?'Профиль готов':'Создайте профиль кандидата'}</h1><p>${person?'Теперь работодатели смогут найти вас по навыкам и проектам.':'Расскажите о навыках, учебных проектах и целях. Стаж не нужен.'}</p></div></div>${person ? `<article class="profile-main" style="max-width:760px;margin:0 auto"><div class="profile-header" style="margin:0">${avatar(person)}<div><h1>${escapeHtml(person.name)}</h1><p>${escapeHtml(person.role)} · ${escapeHtml(person.city)}</p></div></div><section class="profile-section"><h2>Ваши навыки</h2><div class="skill-list">${person.skills.map(s=>`<span class="tag blue">${escapeHtml(s)}</span>`).join('')}</div></section><section class="profile-section"><h2>Следующий шаг</h2><p>Профиль сохранён в демо. Вы можете посмотреть, как он выглядит для работодателя, или продолжить поиск возможностей.</p></section><button class="button" data-page="search" style="margin-top:20px">Смотреть вакансии и стажировки ${icon('arrow')}</button></article>` : `<form id="candidate-form" class="profile-main" style="max-width:760px;margin:0 auto"><div class="form-grid"><div class="form-field"><label for="candidate-name">Имя</label><input id="candidate-name" required placeholder="Например, Аня Смирнова"></div><div class="form-field"><label for="candidate-direction">Направление</label><select id="candidate-direction"><option>Frontend-разработчик</option><option>Backend-разработчик</option><option>UX/UI-дизайнер</option><option>QA-инженер</option><option>Аналитик данных</option><option>Маркетолог</option><option>Специалист поддержки</option></select></div><div class="form-field"><label for="candidate-city">Город</label><input id="candidate-city" placeholder="Или укажите «Удалённо»"></div><div class="form-field"><label for="candidate-skills">Навыки через запятую</label><input id="candidate-skills" required placeholder="Например, Figma, UX, прототипирование"></div><div class="form-field full"><label for="candidate-project">Учебный проект</label><input id="candidate-project" required placeholder="Что вы создали или исследовали?"></div><div class="form-field full"><label for="candidate-about">О себе и цели</label><textarea id="candidate-about" placeholder="Что вас мотивирует? Чему хотите научиться?"></textarea></div><div class="form-field"><label for="candidate-github">GitHub или портфолио</label><input id="candidate-github" placeholder="https://"></div><div class="form-field"><label for="candidate-course">Курс или обучение</label><input id="candidate-course" placeholder="Курс, университет или самообучение"></div></div><button class="button" type="submit" style="margin-top:19px">Создать профиль ${icon('arrow')}</button></form>`}`;
}

function wizardMarkup() {
  const w = state.wizard;
  const index = w.index;
  const question = wizardQuestions[index];
  if (w.done) return `<div class="wizard-backdrop"><section class="wizard"><div class="wizard-header"><div class="wizard-brand"><i class="ai-icon">${icon('sparkle')}</i> AI-подбор завершён</div><button class="icon-button" data-action="close-wizard" aria-label="Закрыть">×</button></div><div class="wizard-content"><span class="wizard-step-label">Результат подбора</span><h2 class="wizard-question">Вот кто лучше всего подходит вашей задаче</h2><p class="wizard-hint">Мы учли навыки, учебную практику и ваши ожидания к обучению. Опыт работы не влияет на оценку новичка.</p><div class="answer-summary"><strong>Задача:</strong> ${escapeHtml(w.answers.task || 'Подбор по выбранным навыкам')}<br><strong>Важный приоритет:</strong> ${escapeHtml(w.answers.priority || 'Потенциал и база')}</div><div style="margin-top:16px;display:grid;gap:8px">${w.results.slice(0,5).map((p,i)=>`<div class="simple-row" style="padding:9px 0;cursor:pointer" data-profile="${p.id}">${avatar(p)}<div class="simple-row-main"><strong>${escapeHtml(p.name)} · ${p.match}%</strong><span>${escapeHtml(p.role)} · ${escapeHtml(p.explanation)}</span></div><button class="profile-link" data-profile="${p.id}">Профиль ${icon('arrow')}</button></div>`).join('')}</div></div><div class="wizard-footer"><small>${w.usedApi?'Результат подготовлен AI-сервисом':'Демо-подбор по вашим критериям'}</small><div class="wizard-footer-actions"><button class="button secondary small" data-action="close-wizard">Закрыть</button><button class="button small" data-action="show-results">Все результаты ${icon('arrow')}</button></div></div></section></div>`;
  const selected = w.answers[question.key];
  return `<div class="wizard-backdrop"><section class="wizard"><div class="wizard-header"><div class="wizard-brand"><i class="ai-icon">${icon('sparkle')}</i> AI-мастер подбора</div><button class="icon-button" data-action="close-wizard" aria-label="Закрыть">×</button></div><div class="wizard-progress"><span style="width:${(index/wizardQuestions.length)*100}%"></span></div><div class="wizard-content"><span class="wizard-step-label">Вопрос ${index+1} из ${wizardQuestions.length}</span><h2 class="wizard-question">${question.question}</h2><p class="wizard-hint">${question.hint}</p>${question.freeform ? `<textarea class="wizard-freeform" id="wizard-freeform" placeholder="${question.placeholder}">${escapeHtml(selected || '')}</textarea>` : `<div class="wizard-options">${question.options.map(option=>`<button class="wizard-option ${(Array.isArray(selected)?selected.includes(option):selected===option)?'selected':''}" data-option="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join('')}</div>`}</div><div class="wizard-footer"><small>Можно вернуться и изменить ответ</small><div class="wizard-footer-actions">${index ? '<button class="button secondary small" data-action="wizard-back">Назад</button>' : ''}<button class="button small" data-action="wizard-next">${index===wizardQuestions.length-1?'Подобрать кандидатов':'Далее'} ${icon('arrow')}</button></div></div></section></div>`;
}

function bindEvents() {
  app.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click', event=>{ event.preventDefault(); navigate(button.dataset.page); }));
  app.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',()=>handleAction(button.dataset.action)));
  app.querySelectorAll('[data-profile]').forEach(item=>item.addEventListener('click',event=>{ if (event.target.closest('[data-save]')) return; openProfile(Number(item.dataset.profile)); }));
  app.querySelectorAll('[data-save]').forEach(button=>button.addEventListener('click',event=>{ event.stopPropagation(); toggleSaved(Number(button.dataset.save)); }));
  app.querySelectorAll('[data-invite]').forEach(button=>button.addEventListener('click',()=>invite(Number(button.dataset.invite))));
  app.querySelectorAll('[data-tab]').forEach(button=>button.addEventListener('click',()=>{state.dashboardTab=button.dataset.tab;render();}));
  app.querySelectorAll('[data-skill]').forEach(button=>button.addEventListener('click',()=>{const skill=button.dataset.skill;state.filters.skills=state.filters.skills.includes(skill)?state.filters.skills.filter(x=>x!==skill):[...state.filters.skills,skill];render();}));
  bindFilter('query','query',true); bindFilter('direction','direction'); bindFilter('level','level'); bindFilter('city','city',true); bindFilter('format','format'); bindFilter('language','language');
  const sort=app.querySelector('#sort'); if(sort) sort.addEventListener('change',()=>{state.sort=sort.value;render();});
  ['learning','projects'].forEach(id=>{const el=app.querySelector(`#${id}`);if(el)el.addEventListener('change',()=>{state.filters[id]=el.checked;render();});});
  app.querySelectorAll('[data-option]').forEach(option=>option.addEventListener('click',()=>selectWizardOption(option.dataset.option)));
  const form=app.querySelector('#candidate-form'); if(form) form.addEventListener('submit',submitCandidateForm);
  const photoInput=app.querySelector('#candidate-photo');
  if(photoInput) photoInput.addEventListener('change', event => selectCandidatePhoto(event.target.files[0]));
  const back=app.querySelector('#wizard-freeform');if(back)back.addEventListener('input',()=>{state.wizard.answers.criteria=back.value;});
  const backdrop=app.querySelector('.wizard-backdrop');if(backdrop)backdrop.addEventListener('click',event=>{if(event.target===backdrop)state.wizard=null,render();});
}

function bindFilter(id,key,debounce=false){const el=app.querySelector(`#${id}`);if(!el)return;el.addEventListener(debounce?'input':'change',()=>{state.filters[key]=el.value==='Любой'?'':el.value;if(debounce){clearTimeout(bindFilter.timer);bindFilter.timer=setTimeout(render,180);}else render();});}
function navigate(page){state.page=page;if(page==='search')state.detailId=null;window.scrollTo({top:0,behavior:'smooth'});render();}
function openProfile(id){state.detailId=id;state.page='profile';window.scrollTo({top:0,behavior:'smooth'});render();}
function findCandidate(id){return state.aiResults.find(p=>p.id===Number(id))||candidates.find(p=>p.id===Number(id))||null;}
function handleAction(action){
  if(action==='open-wizard'){state.wizard={index:0,answers:{},done:false,results:[],usedApi:false};render();}
  if(action==='close-wizard'){state.wizard=null;render();}
  if(action==='wizard-back'){state.wizard.index=Math.max(0,state.wizard.index-1);render();}
  if(action==='wizard-next')nextWizardStep();
  if(action==='clear-filters'){state.filters={query:'',direction:'',level:'',city:'',format:'',language:'',skills:[],learning:false,projects:false};state.aiCandidateIds=null;render();}
  if(action==='back'){state.page='search';render();}
  if(action==='show-results'){state.aiResults=state.wizard.results;state.aiCandidateIds=state.aiResults.map(person=>person.id);state.filters={query:'',direction:'',level:'',city:'',format:'',language:'',skills:[],learning:false,projects:false};state.wizard=null;state.page='search';render();}
  if(action==='clear-ai-results'){state.aiCandidateIds=null;state.aiResults=[];render();}
  if(action==='mobile-menu'){state.page=state.page==='search'?'home':'search';render();}
  if(action==='repeat-search'){state.page='search';render();}
}
function selectWizardOption(option){const question=wizardQuestions[state.wizard.index];if(question.key==='skills'){const selected=state.wizard.answers.skills||[];state.wizard.answers.skills=selected.includes(option)?selected.filter(v=>v!==option):[...selected,option];}else state.wizard.answers[question.key]=option;render();}
async function nextWizardStep(){
  const w=state.wizard, question=wizardQuestions[w.index];
  if(question.freeform){const value=app.querySelector('#wizard-freeform').value.trim();w.answers[question.key]=value;}
  if(!w.answers[question.key] || (Array.isArray(w.answers[question.key]) && !w.answers[question.key].length)){showToast('Выберите вариант или добавьте ответ, чтобы продолжить.');return;}
  if(w.index<wizardQuestions.length-1){w.index++;render();return;}
  w.results=rankCandidates(w.answers);
  saveSearch(w.answers.criteria,w.results.length);
  try {
    const endpoint=localStorage.getItem('juniorAiEndpoint')||'/api/ai/match';
    const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({answers:w.answers,candidates:w.results.slice(0,5).map(({id,name,role,skills,project,match})=>({id,name,role,skills,project,match}))})});
    if(response.ok){const data=await response.json();if(Array.isArray(data.candidates)){w.results=data.candidates.map(item=>({...findCandidate(item.id),...item})).filter(p=>p.id);w.usedApi=true;}}
  } catch (error) { /* API is optional in the standalone demo. */ }
  w.done=true;render();
}
function rankCandidates(answers){
  const requested=(answers.skills||[]).filter(s=>!s.toLowerCase().includes('готовы обучить'));
  const keywords=(answers.criteria||'').toLowerCase().split(/[^a-zа-яё0-9+#.]+/i).filter(w=>w.length>2);
  return candidates.map(person=>{
    if(person.pinned)return {...person,match:0,explanation:'Закреплённый профиль; навыки пока не указаны.'};
    let score=48;let reasons=[];
    const matching=person.skills.filter(skill=>requested.some(w=>skill.toLowerCase().includes(w.toLowerCase().split(' ')[0])||w.toLowerCase().includes(skill.toLowerCase())));
    if(requested.length){score+=Math.round(22*matching.length/requested.length);if(matching.length)reasons.push(`есть навыки ${matching.slice(0,2).join(' и ')}`);}
    const criteriaHits=person.skills.filter(s=>keywords.some(k=>s.toLowerCase().includes(k))).length;
    if(criteriaHits){score+=Math.min(criteriaHits*5,12);reasons.push('по профилю подходят заявленные навыки');}
    if(person.projects){score+=8;reasons.push('есть учебные проекты вместо формального стажа');}
    if(person.learning>=4){score+=answers.learning?.includes('настав')||answers.learning?.includes('месяц')?8:4;reasons.push('быстро учится и готов(а) к наставничеству');}
    if(answers.schedule?.includes('частич') && person.availability==='Частичная занятость')score+=6;
    if(answers.schedule?.includes('Полный') && person.availability==='Полный день')score+=6;
    if(answers.schedule?.includes('стажиров') && person.availability==='Стажировка')score+=6;
    if(answers.budget?.toLowerCase().includes(person.expectation.toLowerCase()) || person.expectation.toLowerCase().includes(answers.budget?.toLowerCase()||'!')){score+=7;reasons.push('ожидания по оплате совпадают');}
    if(answers.schedule?.includes('совмещ') && person.level==='Студент')score+=7;
    if(answers.priority?.toLowerCase().includes('мотивац')||answers.priority?.toLowerCase().includes('потенциал')){score+=person.motivation*2;reasons.push('высокая мотивация к развитию');}
    if(answers.priority?.toLowerCase().includes('навык')||answers.priority?.toLowerCase().includes('поровну'))score+=matching.length?8:0;
    return {...person,match:Math.min(98,Math.max(58,score)),explanation:reasons.slice(0,2).join(', ')||'хорошая база и желание развиваться'};
  }).sort((a,b)=>Number(Boolean(b.pinned))-Number(Boolean(a.pinned))||b.match-a.match).slice(0,5);
}
function saveSearch(criteria,count){state.history.unshift({task:criteria,date:new Date().toISOString(),count});state.history=state.history.slice(0,10);localStorage.setItem('juniorSearches',JSON.stringify(state.history));}
function toggleSaved(id){if(state.saved.has(id))state.saved.delete(id);else state.saved.add(id);localStorage.setItem('juniorSaved',JSON.stringify([...state.saved]));const message=state.saved.has(id)?'Кандидат добавлен в сохранённые':'Кандидат удалён из сохранённых';render();showToast(message);}
function invite(id){state.invites.add(id);localStorage.setItem('juniorInvites',JSON.stringify([...state.invites]));render();showToast('Приглашение отправлено кандидату');}
function showToast(message){const root=document.querySelector('#toast-root');if(!root)return;root.innerHTML=`<div class="toast">${escapeHtml(message)}</div>`;setTimeout(()=>{if(root.isConnected)root.innerHTML='';},2800);}
async function selectCandidatePhoto(file){if(!file)return;if(!['image/jpeg','image/png','image/webp'].includes(file.type)){showToast('Поддерживаются JPG, PNG и WebP.');return;}try{const image=await createImageBitmap(file);const scale=Math.min(1,640/Math.max(image.width,image.height));const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(image.width*scale));canvas.height=Math.max(1,Math.round(image.height*scale));canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);image.close();pendingPhoto=canvas.toDataURL('image/jpeg',0.82);const preview=app.querySelector('#photo-preview');preview.src=pendingPhoto;preview.hidden=false;app.querySelector('#photo-hint').textContent='Фото добавлено';}catch{showToast('Не удалось открыть это изображение.');}}
function submitCandidateForm(event){event.preventDefault();const name=app.querySelector('#candidate-name').value.trim(),role=app.querySelector('#candidate-direction').value,city=app.querySelector('#candidate-city').value.trim()||'Удалённо',skills=app.querySelector('#candidate-skills').value.split(',').map(x=>x.trim()).filter(Boolean),project=app.querySelector('#candidate-project').value.trim();state.newCandidate={id:Date.now(),name,age:Number(app.querySelector('#candidate-age').value)||null,role,city,skills,project,photo:pendingPhoto,match:0,level:'Без опыта',format:'Удалённо',learning:5,projects:true,about:app.querySelector('#candidate-about').value.trim()||'Мотивирован(а) начать карьеру и расти на практических задачах.',course:app.querySelector('#candidate-course').value.trim()||'Самостоятельное обучение',certificate:app.querySelector('#candidate-certificate').value.trim(),github:app.querySelector('#candidate-github').value.trim(),portfolio:app.querySelector('#candidate-portfolio').value.trim(),motivation:4,availability:'Частичная занятость',language:'Русский',expectation:'Обсуждается'};candidates.push(state.newCandidate);localStorage.setItem('juniorCandidates',JSON.stringify(candidates));pendingPhoto='';render();showToast('Профиль сохранён в этом браузере');}

render();