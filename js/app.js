/**
 * app.js — interface do XLearn.
 *
 * Fluxo atual: carregar manifesto → selecionar prova → sessão com alternativas
 * embaralhadas → confirmação única → feedback → resumo.
 * A persistência em IndexedDB e as demais telas entram nos próximos requisitos.
 */

import { loadManifest, loadMaterial } from "./questions.js";
import { shuffle, seededRandom, hashString } from "./parser.js";
import { getSettings, applyVisualSettings } from "./settings.js";

const app = document.getElementById("app");

const state = {
  manifest: null,
  entries: [],
  loading: true,
  error: null,
  session: null,
  sessionMaterial: null,
  route: "inicio",
};

const ROUTES = new Set(["inicio", "estudar", "sessao", "resumo"]);

const ICONS = {
  logo: '<path d="M8 7h4l3 5 3-5h4l-5 8 5 8h-4l-3-5-3 5H8l5-8z" fill="currentColor" stroke="none"/>',
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h5v-6h4v6h5V9.5"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/>',
  play: '<path d="m8 5 11 7-11 7z"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  sparkles: '<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"/><path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  flame: '<path d="M12 3c1 3.5-1.5 5-1.5 7.5A2.5 2.5 0 0 0 13 13c2 0 3-1.5 3-3 2 2 3 4 3 6a7 7 0 0 1-14 0c0-4 3-6 7-13z"/>',
  chart: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1z"/>',
};

/* Helpers ----------------------------------------------------------------- */

function h(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(props || {})) {
    if (value === null || value === undefined || value === false) continue;
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key === "dataset") Object.assign(node.dataset, value);
    else if (key.startsWith("on") && typeof value === "function") {
      node.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (key === "html") {
      // Usado somente com strings constantes definidas neste arquivo.
      node.innerHTML = value;
    } else if (value === true) {
      node.setAttribute(key, "");
    } else {
      node.setAttribute(key, String(value));
    }
  }
  for (const child of children.flat(Infinity)) {
    if (child === null || child === undefined || child === false) continue;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return node;
}

function icon(name) {
  const span = h("span", { class: "icon-slot", "aria-hidden": "true" });
  span.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
  return span;
}

function makeId() {
  return globalThis.crypto?.randomUUID?.() ||
    `s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function plural(value, singular, pluralForm) {
  return `${value} ${value === 1 ? singular : pluralForm}`;
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.round(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return minutes > 0 ? `${minutes} min ${String(seconds).padStart(2, "0")} s` : `${seconds} s`;
}

function formatDateTime(iso) {
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

function difficultyLabel(value) {
  return { easy: "Fácil", medium: "Média", hard: "Difícil" }[value] || "Não informada";
}

function truncate(text, length = 130) {
  const normalized = String(text ?? "").replace(/\s+/g, " ").trim();
  return normalized.length > length ? `${normalized.slice(0, length - 1)}…` : normalized;
}

function currentRoute() {
  const raw = location.hash.replace(/^#\/?/, "").trim();
  return ROUTES.has(raw) ? raw : "inicio";
}

function navigate(route) {
  const target = `#/${route}`;
  if (location.hash === target) {
    state.route = route;
    render({ focus: true });
  } else {
    location.hash = target;
  }
}

function showLoadingOverlay(message = "Carregando…") {
  const overlay = h(
    "div",
    { class: "loading-overlay", role: "status", "aria-live": "polite" },
    h("span", { class: "spinner", "aria-hidden": "true" }),
    h("p", { text: message })
  );
  overlay.id = "loading-overlay";
  document.getElementById("loading-overlay")?.remove();
  document.body.append(overlay);
}

function hideLoadingOverlay() {
  document.getElementById("loading-overlay")?.remove();
}

function toast(message, variant = "info") {
  const existing = document.querySelector(".toast");
  existing?.remove();
  const node = h("div", {
    class: `toast toast--${variant}`,
    role: variant === "error" ? "alert" : "status",
    "aria-live": variant === "error" ? "assertive" : "polite",
    text: message,
  });
  document.body.append(node);
  window.setTimeout(() => node.remove(), 4200);
}

/* Boot / shell ------------------------------------------------------------ */

function buildShell() {
  const topbar = h(
    "header",
    { class: "topbar" },
    h(
      "div",
      { class: "topbar__inner" },
      h(
        "a",
        { class: "brand", href: "#/inicio", "aria-label": "XLearn — início" },
        h("span", { class: "brand__mark", html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS.logo}</svg>` }),
        h("span", {}, "XLearn", h("small", { text: "aprender praticando" }))
      ),
      h(
        "span",
        { class: "topbar__badge", "data-role": "topbar-badge" },
        h("span", { class: "dot", "aria-hidden": "true" }),
        h("span", { text: "Estudo local" })
      )
    )
  );

  const main = h("main", { class: "view", id: "main", tabindex: "-1" });
  const nav = h("nav", { class: "bottom-nav", "aria-label": "Navegação principal" });

  app.replaceChildren(h("div", { class: "app-shell" }, topbar, main, nav));
}

function updateNav() {
  const nav = document.querySelector(".bottom-nav");
  if (!nav) return;
  const items = [
    { route: "inicio", label: "Início", icon: "home" },
    { route: "estudar", label: "Provas", icon: "book" },
  ];
  if (state.session && !state.session.finishedAt) {
    items.push({ route: "sessao", label: "Sessão", icon: "play" });
  }
  nav.replaceChildren(
    ...items.map((item) =>
      h(
        "a",
        {
          class: "nav-item",
          href: `#/${item.route}`,
          "aria-current": state.route === item.route ? "page" : null,
        },
        icon(item.icon),
        h("span", { text: item.label })
      )
    )
  );
}

function updateBadge() {
  const badge = document.querySelector('[data-role="topbar-badge"] span:last-child');
  if (!badge) return;
  if (state.manifest?.summary) {
    badge.textContent = `${state.manifest.summary.questions} questões`;
  } else {
    badge.textContent = "Estudo local";
  }
}

async function loadCatalog({ force = false } = {}) {
  state.loading = true;
  state.error = null;
  render();
  try {
    const manifest = await loadManifest({ force });
    state.manifest = manifest;
    state.entries = manifest.files.filter((entry) => entry.valid && entry.questionCount > 0);
    if (state.entries.length === 0) {
      state.error = "Nenhum material válido foi encontrado no manifesto.";
    }
  } catch (error) {
    state.error = error.message;
  } finally {
    state.loading = false;
    render();
  }
}

function boot() {
  applyVisualSettings(getSettings());
  buildShell();
  state.route = currentRoute();
  window.addEventListener("hashchange", () => {
    state.route = currentRoute();
    render({ focus: true });
  });
  render();
  loadCatalog();
}

/* Router ------------------------------------------------------------------ */

function render({ focus = false } = {}) {
  const main = document.getElementById("main");
  if (!main) return;
  state.route = currentRoute();

  let content;
  switch (state.route) {
    case "estudar":
      content = renderStudy();
      break;
    case "sessao":
      content = renderQuiz();
      break;
    case "resumo":
      content = renderSummary();
      break;
    default:
      content = renderHome();
  }

  main.replaceChildren(...content);
  updateNav();
  updateBadge();
  if (focus) {
    window.scrollTo({ top: 0, behavior: "auto" });
    main.focus({ preventScroll: true });
  }
}

/* Home / study ------------------------------------------------------------ */

function renderHome() {
  if (state.loading) {
    return [
      h("div", { class: "skeleton skeleton--hero" }),
      h("div", { class: "skeleton skeleton--row" }),
      h("div", { class: "skeleton skeleton--row" }),
    ];
  }

  if (state.error) {
    return [
      h(
        "section",
        { class: "card" },
        h("h1", { text: "Não foi possível carregar as provas" }),
        h("p", { class: "prose", style: "margin-top:10px", text: state.error }),
        h(
          "div",
          { class: "hero__actions" },
          h(
            "button",
            { class: "btn btn--primary", type: "button", onclick: () => loadCatalog({ force: true }) },
            icon("sparkles"),
            "Tentar novamente"
          )
        )
      ),
      h(
        "div",
        { class: "notice notice--info" },
        h("strong", { text: "Dica: " }),
        "o manifesto é gerado a partir da pasta questoes/. Execute ",
        h("code", { text: "npm run build:manifest" }),
        " e recarregue a página."
      ),
    ];
  }

  const summary = state.manifest.summary;
  const settings = getSettings();
  const active = state.session && !state.session.finishedAt ? state.session : null;
  const answered = active ? Object.keys(active.answers).length : 0;

  return [
    h(
      "section",
      { class: "hero", "aria-labelledby": "hero-title" },
      h("span", { class: "eyebrow" }, icon("sparkles"), "Seu painel de estudos"),
      h("h1", { id: "hero-title", text: "Aprenda praticando, no seu ritmo." }),
      h("p", {
        class: "lead",
        text: "Questões reais dos seus materiais, alternativas embaralhadas e explicações completas. Tudo salvo no seu dispositivo.",
      }),
      h(
        "div",
        { class: "hero__actions" },
        h(
          "a",
          { class: "btn btn--primary", href: "#/estudar" },
          icon("play"),
          "Escolher prova"
        ),
        active
          ? h(
              "a",
              { class: "btn btn--ghost", href: "#/sessao" },
              icon("arrowRight"),
              "Continuar sessão"
            )
          : null
      ),
      h(
        "div",
        { class: "hero__stats", "aria-label": "Resumo do acervo" },
        h("div", { class: "stat-mini" }, h("strong", { text: String(summary.materials) }), h("span", { text: "provas" })),
        h("div", { class: "stat-mini" }, h("strong", { text: String(summary.questions) }), h("span", { text: "questões" })),
        h("div", { class: "stat-mini" }, h("strong", { text: String(settings.sessionSize) }), h("span", { text: "por sessão" }))
      )
    ),

    active
      ? h(
          "section",
          { class: "session-banner", "aria-label": "Sessão em andamento" },
          h(
            "div",
            { class: "session-banner__text" },
            h("strong", { text: "Sessão em andamento" }),
            h("span", {
              text: `${active.materialTitle} · ${answered} de ${active.questionIds.length} respondidas`,
            })
          ),
          h(
            "a",
            { class: "btn btn--primary btn--sm", href: "#/sessao" },
            "Continuar",
            icon("arrowRight")
          )
        )
      : null,

    h(
      "section",
      { id: "provas", "aria-labelledby": "provas-title" },
      h(
        "div",
        { class: "section-head" },
        h("div", {}, h("h2", { id: "provas-title", text: "Escolha uma prova" }), h("p", { text: "Conteúdo carregado do manifesto de questões." })),
        h("span", { class: "chip chip--neutral", text: `${summary.validMaterials} válidas` })
      ),
      renderMaterialGrid()
    ),

    state.manifest.summary.invalidMaterials > 0
      ? h(
          "div",
          { class: "notice notice--warning", role: "status" },
          h("strong", { text: "Atenção: " }),
          `${summary.invalidMaterials} material(is) do manifesto foram ignorados por erro de formato.`
        )
      : null,

    h(
      "div",
      { class: "notice notice--info" },
      h("strong", { text: "Como funciona: " }),
      "a ordem das alternativas é sorteada em cada sessão, mas as letras A–D permanecem as originais do gabarito. A correção usa o identificador da alternativa, nunca a posição na tela."
    ),
  ];
}

function renderStudy() {
  if (state.loading) return [h("div", { class: "skeleton skeleton--row" }), h("div", { class: "skeleton skeleton--row" })];
  if (state.error) return renderHome();
  return [
    h(
      "div",
      { class: "section-head" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("book"), "Acervo"),
        h("h1", { text: "Provas disponíveis" }),
        h("p", { text: `${plural(state.manifest.summary.materials, "material", "materiais")} · ${plural(state.manifest.summary.questions, "questão", "questões")}` })
      ),
      h(
        "button",
        { class: "icon-btn", type: "button", title: "Recarregar manifesto", "aria-label": "Recarregar manifesto", onclick: () => loadCatalog({ force: true }) },
        icon("sparkles")
      )
    ),
    ...renderMaterialGrid(),
  ];
}

function renderMaterialGrid() {
  if (state.entries.length === 0) {
    return h(
      "div",
      { class: "empty card" },
      h("h2", { text: "Nenhuma prova disponível" }),
      h("p", { text: "Adicione arquivos .md em questoes/ e execute o gerador de manifesto." })
    );
  }
  return h(
    "div",
    { class: "material-grid" },
    ...state.entries.map((entry) =>
      h(
        "article",
        { class: "material-card" },
        h(
          "div",
          {},
          h(
            "div",
            { class: "chip-row" },
            h("span", { class: "chip", text: entry.subject || "Geral" }),
            entry.bank ? h("span", { class: "chip chip--neutral", text: entry.bank }) : null
          ),
          h("h3", { text: entry.title }),
          h("p", { class: "topic", text: entry.topic || "Material de estudo" })
        ),
        h(
          "div",
          { class: "material-card__footer" },
          h(
            "span",
            { class: "material-card__meta" },
            icon("layers"),
            plural(entry.questionCount, "questão", "questões")
          ),
          h(
            "button",
            {
              class: "btn btn--primary btn--sm",
              type: "button",
              onclick: () => startSession(entry),
            },
            icon("play"),
            "Estudar"
          )
        )
      )
    )
  );
}

/* Session ----------------------------------------------------------------- */

async function startSession(entry, options = {}) {
  showLoadingOverlay("Preparando sua sessão…");
  try {
    const material = await loadMaterial(entry, { force: options.force });
    if (!material.valid || material.questions.length === 0) {
      throw new Error("Este material não possui questões válidas para estudar.");
    }

    const settings = getSettings();
    let pool = material.questions;
    if (Array.isArray(options.questionIds) && options.questionIds.length > 0) {
      const wanted = new Set(options.questionIds);
      pool = pool.filter((question) => wanted.has(question.id));
    }
    if (pool.length === 0) throw new Error("Nenhuma questão disponível para esta sessão.");

    if (settings.questionOrder === "shuffle") {
      pool = shuffle(pool);
    }
    const requestedSize = Number.isFinite(options.size) ? options.size : settings.sessionSize;
    const size = Math.max(1, Math.min(requestedSize, pool.length));
    const questionIds = pool.slice(0, size).map((question) => question.id);

    state.session = {
      id: makeId(),
      materialId: entry.materialId || entry.path,
      materialPath: entry.path,
      materialTitle: entry.title,
      subject: entry.subject,
      mode: options.mode || "material",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      startedAt: Date.now(),
      questionIds,
      index: 0,
      answers: {},
      orders: {},
      pending: null,
      finishedAt: null,
    };
    state.sessionMaterial = material;
    navigate("sessao");
  } catch (error) {
    toast(error.message || "Não foi possível iniciar a sessão.", "error");
  } finally {
    hideLoadingOverlay();
  }
}

function currentQuestion() {
  const session = state.session;
  if (!session || !state.sessionMaterial) return null;
  const id = session.questionIds[session.index];
  return state.sessionMaterial.questions.find((question) => question.id === id) || null;
}

function alternativeOrder(session, question) {
  const saved = session.orders[question.id];
  if (Array.isArray(saved) && saved.length === question.alternatives.length) return saved;
  const random = seededRandom(hashString(`${session.id}::${question.id}`));
  const order = shuffle(
    question.alternatives.map((alternative) => alternative.id),
    random
  );
  session.orders[question.id] = order;
  return order;
}

function confirmAnswer(question) {
  const session = state.session;
  if (!session || session.finishedAt) return;
  if (session.answers[question.id]) return; // impede registro duplicado
  const selectedId =
    session.pending?.questionId === question.id ? session.pending.alternativeId : null;
  if (!selectedId) return;

  session.answers[question.id] = {
    selectedId,
    correctId: question.correctId,
    correct: selectedId === question.correctId,
    answeredAt: new Date().toISOString(),
    order: alternativeOrder(session, question),
  };
  session.pending = null;
  session.updatedAt = new Date().toISOString();
  render();
  requestAnimationFrame(() => {
    const feedback = document.querySelector(".feedback");
    feedback?.setAttribute("tabindex", "-1");
    feedback?.focus({ preventScroll: false });
  });
}

function goToNextQuestion() {
  const session = state.session;
  if (!session) return;
  if (session.index + 1 >= session.questionIds.length) {
    session.finishedAt = new Date().toISOString();
    session.updatedAt = session.finishedAt;
    navigate("resumo");
    return;
  }
  session.index += 1;
  session.pending = null;
  session.updatedAt = new Date().toISOString();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuiz() {
  const session = state.session;
  if (!session) {
    return [
      h(
        "div",
        { class: "empty card" },
        h("h1", { text: "Nenhuma sessão ativa" }),
        h("p", { text: "Escolha uma prova para começar a responder." }),
        h("div", { class: "hero__actions", style: "justify-content:center" }, h("a", { class: "btn btn--primary", href: "#/estudar" }, "Ver provas"))
      ),
    ];
  }

  const question = currentQuestion();
  if (!question) {
    return [
      h(
        "div",
        { class: "empty card" },
        h("h1", { text: "Sessão sem questões" }),
        h("p", { text: "Não foi possível localizar a questão atual." }),
        h("div", { class: "hero__actions", style: "justify-content:center" }, h("a", { class: "btn btn--primary", href: "#/estudar" }, "Escolher prova"))
      ),
    ];
  }

  const total = session.questionIds.length;
  const answered = session.answers[question.id] || null;
  const progress = Math.round(((session.index + (answered ? 1 : 0)) / total) * 100);
  const order = alternativeOrder(session, question);
  const alternativesById = new Map(
    question.alternatives.map((alternative) => [alternative.id, alternative])
  );
  const selectedId = answered?.selectedId || session.pending?.alternativeId || null;

  const altButtons = order.map((alternativeId) => {
    const alternative = alternativesById.get(alternativeId);
    if (!alternative) return null;
    let className = "alt";
    if (answered) {
      if (alternative.id === question.correctId) className += " is-correct";
      else if (alternative.id === answered.selectedId) className += " is-wrong";
    }
    return h(
      "button",
      {
        class: className,
        type: "button",
        "aria-pressed": String(selectedId === alternative.id),
        disabled: Boolean(answered),
        onclick: (event) => selectAlternative(event.currentTarget, question, alternative.id),
      },
      h("span", { class: "alt__letter", "aria-hidden": "true", text: alternative.id }),
      h("span", { class: "alt__text", text: alternative.text })
    );
  });

  const confirmButton = h(
    "button",
    {
      class: "btn btn--primary",
      type: "button",
      disabled: Boolean(answered) || !selectedId,
      onclick: () => confirmAnswer(question),
    },
    icon("check"),
    answered ? "Resposta registrada" : "Confirmar resposta"
  );

  const content = [
    h(
      "div",
      { class: "quiz-head" },
      h(
        "div",
        { class: "inline" },
        h(
          "a",
          { class: "icon-btn", href: "#/inicio", "aria-label": "Voltar ao início", title: "Voltar ao início" },
          icon("arrowLeft")
        ),
        h(
          "div",
          { class: "quiz-head__title" },
          h("strong", { text: session.materialTitle }),
          h("span", {
            text: `${question.subject || "Geral"}${question.topic ? ` · ${question.topic}` : ""}`,
          })
        )
      ),
      h("span", { class: "quiz-head__count", text: `${session.index + 1} / ${total}` })
    ),
    h(
      "div",
      { "aria-label": `Progresso da sessão: ${progress}%` },
      h("div", { class: "progress" }, h("div", { class: "progress__bar", style: `--value:${progress}%` }))
    ),
    h(
      "section",
      { class: "question-card", "aria-labelledby": "question-text" },
      h(
        "div",
        { class: "question-meta" },
        h("span", { class: "chip", text: question.subject || "Geral" }),
        question.difficulty
          ? h("span", { class: "chip chip--neutral", text: difficultyLabel(question.difficulty) })
          : null,
        question.subtopic ? h("span", { class: "chip chip--neutral", text: question.subtopic }) : null
      ),
      h("h1", { id: "question-text", class: "question-text", style: "font-size:1.06rem", text: question.text }),
      h("p", {
        class: "hint",
        text: "A ordem foi embaralhada. As letras A–D correspondem às alternativas originais do gabarito.",
      }),
      h("div", { class: "alternatives", role: "group", "aria-label": "Alternativas" }, ...altButtons),
      h(
        "div",
        { class: "answer-bar" },
        confirmButton,
        answered
          ? h(
              "button",
              {
                class: "btn btn--ghost",
                type: "button",
                onclick: goToNextQuestion,
              },
              session.index + 1 >= total ? "Ver resumo" : "Próxima questão",
              icon("arrowRight")
            )
          : null
      )
    ),
  ];

  if (answered) {
    content.push(renderFeedback(question, answered));
  }

  return content;
}

function selectAlternative(button, question, alternativeId) {
  const session = state.session;
  if (!session || session.answers[question.id]) return;
  session.pending = { questionId: question.id, alternativeId };
  const group = button.closest(".alternatives");
  group?.querySelectorAll(".alt").forEach((item) => {
    item.setAttribute("aria-pressed", String(item === button));
  });
  const confirm = document.querySelector(".answer-bar .btn--primary");
  if (confirm) confirm.disabled = false;
}

function renderFeedback(question, answer) {
  const alternative = question.alternatives.find((item) => item.id === answer.selectedId);
  const correctAlternative = question.alternatives.find((item) => item.id === question.correctId);
  const explanation = question.explanation || {};
  const correct = answer.correct;

  const altExplanations = question.alternatives.map((item) =>
    h(
      "div",
      { class: `alt-explain${item.id === question.correctId ? " is-correct" : ""}` },
      h("span", { class: "alt-explain__letter", text: item.id }),
      h(
        "div",
        {},
        h(
          "strong",
          { style: "font-size:.82rem", text: `${item.id === question.correctId ? "Correta" : "Incorreta"} — ${truncate(item.text, 90)}` }
        ),
        h("p", { class: "prose", style: "margin-top:4px", text: item.explanation || "Sem comentário individual para esta alternativa." })
      )
    )
  );

  return h(
    "section",
    {
      class: `feedback ${correct ? "feedback--correct" : "feedback--wrong"}`,
      "aria-labelledby": "feedback-title",
    },
    h(
      "div",
      { class: "feedback__head" },
      h("span", { class: "feedback__icon" }, icon(correct ? "check" : "x")),
      h(
        "div",
        {},
        h("strong", { id: "feedback-title", text: correct ? "Resposta correta!" : "Resposta incorreta" }),
        h("span", {
          text: correct
            ? `Você marcou ${answer.selectedId}. Gabarito confirmado.`
            : `Você marcou ${alternative?.id || answer.selectedId}. A resposta correta é ${question.correctId}.`,
        })
      )
    ),
    h(
      "div",
      { class: "feedback__body" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("target"), "Resolução"),
        h("p", { class: "prose", style: "margin-top:6px", text: explanation.resolution || correctAlternative?.explanation || "Consulte o comentário das alternativas." })
      ),
      explanation.theoreticalContent
        ? h(
            "details",
            { class: "details" },
            h("summary", {}, icon("book"), "Aula completa"),
            h("div", { class: "details__content" }, h("p", { class: "prose", text: explanation.theoreticalContent }))
          )
        : null,
      explanation.bankApproach
        ? h(
            "details",
            { class: "details" },
            h("summary", {}, icon("target"), "Como a banca cobra"),
            h("div", { class: "details__content" }, h("p", { class: "prose", text: explanation.bankApproach }))
          )
        : null,
      explanation.studyTip
        ? h(
            "details",
            { class: "details" },
            h("summary", {}, icon("sparkles"), "Dica de estudo"),
            h("div", { class: "details__content" }, h("p", { class: "prose", text: explanation.studyTip }))
          )
        : null,
      explanation.reviewSummary
        ? h(
            "details",
            { class: "details" },
            h("summary", {}, icon("layers"), "Resumo para revisão"),
            h("div", { class: "details__content" }, h("p", { class: "prose", text: explanation.reviewSummary }))
          )
        : null,
      h(
        "details",
        { class: "details" },
        h("summary", {}, icon("layers"), "Comentário de cada alternativa"),
        h("div", { class: "details__content" }, ...altExplanations)
      ),
      h(
        "p",
        { class: "hint" },
        "A repetição espaçada e a pontuação serão registradas a partir das próximas entregas. Por enquanto, esta sessão fica apenas em memória."
      )
    )
  );
}

/* Summary ----------------------------------------------------------------- */

function renderSummary() {
  const session = state.session;
  if (!session) {
    return [
      h(
        "div",
        { class: "empty card" },
        h("h1", { text: "Nenhum resumo disponível" }),
        h("p", { text: "Conclua uma sessão para ver o resultado." }),
        h("div", { class: "hero__actions", style: "justify-content:center" }, h("a", { class: "btn btn--primary", href: "#/estudar" }, "Escolher prova"))
      ),
    ];
  }

  const questions = state.sessionMaterial?.questions || [];
  const byId = new Map(questions.map((question) => [question.id, question]));
  const results = session.questionIds.map((id) => {
    const question = byId.get(id);
    const answer = session.answers[id] || null;
    return { question, answer };
  });
  const answeredResults = results.filter((item) => item.answer);
  const correctCount = answeredResults.filter((item) => item.answer.correct).length;
  const wrongResults = results.filter((item) => item.answer && !item.answer.correct);
  const total = session.questionIds.length;
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const duration = formatDuration(Date.now() - session.startedAt);
  const entry = state.entries.find((item) => item.path === session.materialPath) || null;

  return [
    h(
      "section",
      { class: "summary-hero" },
      h(
        "div",
        { class: "score-ring", style: `--pct:${pct}`, role: "img", "aria-label": `Aproveitamento: ${pct}%` },
        h(
          "div",
          { class: "score-ring__value" },
          h("strong", { text: `${pct}%` }),
          h("span", { text: "acertos" })
        )
      ),
      h(
        "div",
        { class: "summary-hero__text" },
        h("span", { class: "eyebrow" }, icon("sparkles"), "Sessão concluída"),
        h("h1", { text: correctCount === total ? "Excelente trabalho!" : "Sessão finalizada" }),
        h("p", { text: session.materialTitle }),
        h("p", {
          class: "small muted",
          text: `${plural(correctCount, "acerto", "acertos")} em ${plural(total, "questão", "questões")} · ${duration}`,
        })
      )
    ),

    h(
      "div",
      { class: "summary-stats" },
      h("div", { class: "summary-stat" }, h("strong", { text: String(correctCount) }), h("span", { text: "acertos" })),
      h("div", { class: "summary-stat" }, h("strong", { text: String(wrongResults.length) }), h("span", { text: "erros" })),
      h("div", { class: "summary-stat" }, h("strong", { text: String(total) }), h("span", { text: "questões" }))
    ),

    h(
      "div",
      { class: "hero__actions" },
      wrongResults.length > 0 && entry
        ? h(
            "button",
            {
              class: "btn btn--primary",
              type: "button",
              onclick: () =>
                startSession(entry, {
                  questionIds: wrongResults.map((item) => item.question.id),
                  size: wrongResults.length,
                  mode: "correcao",
                }),
            },
            icon("x"),
            `Revisar ${plural(wrongResults.length, "erro", "erros")}`
          )
        : null,
      entry
        ? h(
            "button",
            { class: "btn btn--ghost", type: "button", onclick: () => startSession(entry) },
            icon("play"),
            "Nova sessão"
          )
        : null,
      h("a", { class: "btn btn--ghost", href: "#/estudar" }, icon("book"), "Outra prova")
    ),

    h(
      "section",
      { class: "card" },
      h("h2", { text: "Resultado por questão" }),
      h(
        "div",
        { class: "result-list" },
        ...results.map(({ question, answer }) => {
          if (!question) return null;
          const isCorrect = Boolean(answer?.correct);
          return h(
            "div",
            { class: `result-item ${isCorrect ? "is-correct" : "is-wrong"}` },
            h("span", { class: "result-item__icon" }, icon(isCorrect ? "check" : "x")),
            h(
              "div",
              {},
              h("strong", { text: truncate(question.text, 120) }),
              h("span", {
                text: answer
                  ? `Marcada: ${answer.selectedId} · Gabarito: ${question.correctId}`
                  : "Não respondida",
              })
            )
          );
        })
      )
    ),

    h(
      "p",
      { class: "hint" },
      `Sessão iniciada em ${formatDateTime(session.createdAt)}. O progresso será preservado automaticamente após a entrega da persistência local.`
    ),
  ];
}

/* Start ------------------------------------------------------------------- */

boot();
