// Products page. Needs shared.js loaded first, and Lucide for icons.

const params = new URLSearchParams(location.search);
const state = {
  term: params.get("q") || "",
  sector: SECTORS.some((s) => s.name === params.get("sector")) ? params.get("sector") : "All",
  tier: "all",
};

function iconEl(name) {
  const i = document.createElement("i");
  i.setAttribute("data-lucide", name);
  i.setAttribute("aria-hidden", "true");
  return i;
}

function drawIcons(root) {
  if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.75 }, nameAttr: "data-lucide", root });
}

// Keep the address bar in step, so a filtered view can be shared.
function syncUrl() {
  const p = new URLSearchParams();
  if (state.term.trim()) p.set("q", state.term.trim());
  if (state.sector !== "All") p.set("sector", state.sector);
  if (state.tier !== "all") p.set("price", state.tier);
  history.replaceState(null, "", p.toString() ? `?${p}` : location.pathname);
}

// ---------- Filters ----------

function renderChips(target, options, current, onPick) {
  const wrap = $(target);
  options.forEach(([value, label]) => {
    const chip = el("button", { type: "button", className: "chip", textContent: label });
    chip.setAttribute("aria-pressed", String(value === current()));
    chip.addEventListener("click", () => {
      onPick(value);
      wrap.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      render();
    });
    wrap.append(chip);
  });
}

function initFilters() {
  const p = params.get("price");
  if (p === "starter" || p === "full") state.tier = p;

  renderChips("#sector-filter",
    [["All", "All sectors"], ...SECTORS.map((s) => [s.name, s.name])],
    () => state.sector, (v) => { state.sector = v; });

  renderChips("#price-filter",
    [["all", "Any price"], ["starter", PRICES.starter], ["full", PRICES.full]],
    () => state.tier, (v) => { state.tier = v; });

  const input = $("#catalogue-search");
  input.value = state.term;
  input.addEventListener("input", () => { state.term = input.value; render(); });
  $("#catalogue-form").addEventListener("submit", (e) => e.preventDefault());
}

// ---------- Grid ----------

function card(p, term) {
  const btn = el("button", { type: "button", className: "btn btn-line btn-small", textContent: "View details" });
  btn.addEventListener("click", () => openDetails(p, btn));

  return el("li", { className: "product-card" }, [
    el("span", { className: "product-icon" }, [iconEl(p.icon)]),
    el("h3", {}, highlight(p.name, term)),
    el("p", { className: "product-sector", textContent: p.sector }),
    el("p", { className: `product-price tier-${p.tier}`, textContent: PRICES[p.tier] }),
    btn,
  ]);
}

function render() {
  const term = state.term.trim().toLowerCase();
  const shown = PRODUCTS.filter((p) =>
    (state.sector === "All" || p.sector === state.sector)
    && (state.tier === "all" || p.tier === state.tier)
    && matches(p, term)
  );

  const grid = $("#product-grid");
  grid.replaceChildren(...shown.map((p, i) => {
    const c = card(p, term);
    // Settle-in animation, staggered across the first dozen cards only.
    c.classList.add("is-new");
    c.style.setProperty("--i", Math.min(i, 12));
    return c;
  }));
  drawIcons(grid);

  $("#result-count").textContent = shown.length;
  $("#result-label").textContent =
    shown.length === PRODUCTS.length ? "systems, ready to set up for you"
    : shown.length === 1 ? `of ${PRODUCTS.length} systems matches`
    : `of ${PRODUCTS.length} systems match`;

  $("#empty").hidden = shown.length > 0;
  $("#empty-term").textContent = term ? `“${state.term.trim()}”` : "these filters";
  syncUrl();
}

// ---------- Details dialog ----------

let returnFocus = null;

function openDetails(p, from) {
  returnFocus = from;
  const dlg = $("#product-dialog");
  const iconBox = $("#dlg-icon");
  iconBox.replaceChildren(iconEl(p.icon));
  drawIcons(iconBox);
  $("#dlg-name").textContent = p.name;
  $("#dlg-sector").textContent = p.sector;
  $("#dlg-price").textContent = PRICES[p.tier];
  $("#dlg-price-note").textContent = p.tier === "starter"
    ? "Starter price for a single shop or branch."
    : "Final price within this range depends on branches, users and modules.";
  $("#dlg-demo").href = whatsappLink(`Hi Pixovia, I'd like a demo of ${p.name}.`);
  dlg.showModal();
}

function initDialog() {
  const dlg = $("#product-dialog");
  $("#dlg-close").addEventListener("click", () => dlg.close());
  // Clicking the backdrop closes it.
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", () => returnFocus?.focus());
}

// ---------- Init ----------

initFilters();
initDialog();
render();
initNav();
settleScroll();
