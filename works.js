// Works page. Needs shared.js and results.js loaded first.

// ---------- Results ----------

const fmtNum = (n, d = 0) => n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
const short = (n) => n >= 1e6 ? `${fmtNum(n / 1e6, 2)}M` : n >= 1e4 ? `${fmtNum(n / 1e3)}k` : fmtNum(n);
const figureText = (f, v = f.value) => `${f.prefix || ""}${fmtNum(v, f.decimals || 0)}${f.suffix || ""}`;

function barChart(chart) {
  const max = Math.max(...chart.rows.map((r) => r[1]));
  const cur = chart.currency || "$";
  return el("ul", { className: "result-bars" }, chart.rows.map(([name, v], i) => {
    const li = el("li", {}, [
      el("span", { className: "bar-name", textContent: name }),
      el("span", { className: "bar-track" }, [el("span", { className: "bar-fill" })]),
      el("span", { className: "bar-val", textContent: chart.format === "money" ? `${cur}${short(v)}` : short(v) }),
    ]);
    li.style.setProperty("--w", `${Math.max(2, (v / max) * 100).toFixed(1)}%`);
    li.style.setProperty("--i", i);
    if (i === 0) li.classList.add("is-top");
    return li;
  }));
}

// Funnel steps narrow by the real ratio between them, with a floor so the
// last step stays readable.
function funnelChart(chart) {
  const first = chart.rows[0][1];
  return el("ol", { className: "result-funnel" }, chart.rows.map(([name, v], i) => {
    const prev = i ? chart.rows[i - 1][1] : null;
    const li = el("li", {}, [
      el("span", { className: "funnel-bar" }, [
        el("strong", { textContent: fmtNum(v) }), el("span", { textContent: name }),
      ]),
      prev ? el("span", { className: "funnel-rate", textContent: `${fmtNum((v / prev) * 100, 1)}% of ${chart.rows[i - 1][0].toLowerCase()}` }) : null,
    ].filter(Boolean));
    li.style.setProperty("--w", `${Math.max(38, Math.sqrt(v / first) * 100).toFixed(1)}%`);
    li.style.setProperty("--i", i);
    return li;
  }));
}

function resultCard(r, index) {
  const proof = el("button", { type: "button", className: "result-proof" }, [
    el("span", { className: "proof-thumb" }, [
      el("img", { src: `assets/results/${r.shots[0].src}`, alt: "", loading: "lazy", width: r.shots[0].w, height: r.shots[0].h }),
    ]),
    el("span", { className: "proof-label" }, [
      el("strong", { textContent: "See the dashboard" }),
      el("small", { textContent: r.shots.length > 1 ? `${r.shots.length} screenshots from ${r.platform}` : `Screenshot from ${r.platform}` }),
    ]),
  ]);
  proof.addEventListener("click", () => openProof(index, 0, proof));

  const fig = el("p", { className: "result-figure" }, [el("span", { textContent: figureText(r.figure) })]);
  fig.firstChild.dataset.result = index;

  return el("article", { className: "result-card" }, [
    el("header", { className: "result-top" }, [
      el("h3", { textContent: r.client }),
      el("p", { className: "result-meta" }, [
        el("span", { className: "platform-chip", textContent: r.platform }), el("span", { textContent: r.period }),
      ]),
    ]),
    fig,
    el("p", { className: "result-label", textContent: r.label }),
    el("dl", { className: "result-stats" }, r.stats.map(([k, v]) => el("div", {}, [el("dt", { textContent: k }), el("dd", { textContent: v })]))),
    el("figure", { className: "result-chart" }, [
      el("figcaption", { textContent: r.chart.title }),
      r.chart.type === "funnel" ? funnelChart(r.chart) : barChart(r.chart),
    ]),
    proof,
  ]);
}

function initResults() {
  const root = $("#results");
  const jump = $("#works-jump");
  const groups = RESULT_GROUPS.filter((g) => RESULTS.some((r) => r.group === g.id));

  groups.forEach((g) => {
    const cards = RESULTS.map((r, i) => [r, i]).filter(([r]) => r.group === g.id).map(([r, i]) => resultCard(r, i));
    root.append(el("section", { className: "section results-group", id: g.id }, [
      el("div", { className: "wrap" }, [
        el("div", { className: "section-head" }, [
          el("p", { className: "eyebrow", textContent: `${cards.length} ${cards.length === 1 ? "result" : "results"}` }),
          el("h2", { textContent: g.title }),
          g.intro ? el("p", { className: "section-intro", textContent: g.intro }) : null,
        ].filter(Boolean)),
        el("div", { className: "result-grid" }, cards),
      ]),
    ]));
    jump.insertBefore(el("a", { href: `#${g.id}`, textContent: g.title }), jump.lastElementChild);
  });

  // Headline figures count up, and charts fill, as each card scrolls in.
  const cards = root.querySelectorAll(".result-card");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    cards.forEach((c) => c.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    e.target.classList.add("is-in");
    const span = e.target.querySelector("[data-result]");
    const f = RESULTS[span.dataset.result].figure;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 1400);
      span.textContent = figureText(f, f.value * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.35 });
  cards.forEach((c) => { c.classList.add("will-reveal"); io.observe(c); });
}

// ---------- Screenshot viewer ----------

const proof = { result: 0, shot: 0, from: null };

function showShot() {
  const r = RESULTS[proof.result];
  const s = r.shots[proof.shot];
  const img = $("#proof-img");
  img.src = `assets/results/${s.src}`;
  img.width = s.w; img.height = s.h;
  img.alt = `${r.platform} dashboard for ${r.client}`;
  const [x, y, w, h] = s.mark;
  Object.assign($("#proof-mark").style, { left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` });
  $("#proof-caption").textContent = s.caption;
  $("#proof-count").textContent = `${proof.shot + 1} of ${r.shots.length}`;
  $("#proof-nav").hidden = r.shots.length < 2;
  const shot = $("#proof-shot");
  shot.classList.remove("is-changing");
  void shot.offsetWidth; // restart the highlight animation
  shot.classList.add("is-changing");
}

function openProof(result, shot, from) {
  const r = RESULTS[result];
  Object.assign(proof, { result, shot, from });
  $("#proof-kicker").textContent = `${r.platform} · ${r.period}`;
  $("#proof-title").textContent = r.client;
  showShot();
  $("#proof-dialog").showModal();
}

function stepProof(d) {
  const n = RESULTS[proof.result].shots.length;
  proof.shot = (proof.shot + d + n) % n;
  showShot();
}

function initProof() {
  const dlg = $("#proof-dialog");
  $("#proof-close").addEventListener("click", () => dlg.close());
  $("#proof-prev").addEventListener("click", () => stepProof(-1));
  $("#proof-next").addEventListener("click", () => stepProof(1));
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("keydown", (e) => {
    if (RESULTS[proof.result].shots.length < 2) return;
    if (e.key === "ArrowRight") stepProof(1);
    if (e.key === "ArrowLeft") stepProof(-1);
  });
  dlg.addEventListener("close", () => proof.from?.focus());
}

// ---------- Clients ----------

function initClients() {
  const grid = $("#client-grid");
  const spot = $(".spotlight");
  const img = $("#spotlight-img");
  const buttons = [];
  let current = -1;

  const select = (i) => {
    if (i === current) return;
    current = i;
    const c = CLIENTS[i];
    img.src = `assets/clients/${c.file}`;
    img.alt = `${clientLabel(c)} logo`;
    $("#spotlight-name").textContent = clientLabel(c);
    $("#spotlight-sector").textContent = c.sector || "";
    $("#spotlight-work").textContent = c.work || "";
    buttons.forEach((b, j) => b.setAttribute("aria-pressed", String(j === i)));
    spot.classList.remove("is-changing");
    void spot.offsetWidth; // restart the swap animation
    spot.classList.add("is-changing");
  };

  CLIENTS.forEach((c, i) => {
    const btn = el("button", { type: "button", className: "client-btn" }, [
      el("img", { src: `assets/clients/${c.file}`, alt: "", loading: "lazy", width: 120, height: 120 }),
    ]);
    btn.setAttribute("aria-label", clientLabel(c));
    // Pointer users preview on hover; keyboard and touch users select on focus or tap.
    btn.addEventListener("mouseenter", () => select(i));
    btn.addEventListener("focus", () => select(i));
    btn.addEventListener("click", () => select(i));
    buttons.push(btn);
    grid.append(el("li", {}, [btn]));
  });

  // Arrow keys move through the grid.
  grid.addEventListener("keydown", (e) => {
    const cols = getComputedStyle(grid).gridTemplateColumns.split(" ").length;
    const step = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: cols, ArrowUp: -cols }[e.key];
    if (!step) return;
    const next = current + step;
    if (next < 0 || next >= buttons.length) return;
    e.preventDefault();
    buttons[next].focus();
  });

  // Arriving from a home page logo: works.html?client=<index>
  const fromUrl = Number(new URLSearchParams(location.search).get("client"));
  select(Number.isInteger(fromUrl) && CLIENTS[fromUrl] ? fromUrl : 0);
  spot.classList.remove("is-changing");
}

initResults();
initProof();
initClients();
initNav();
settleScroll();
