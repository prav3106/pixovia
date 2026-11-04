// Clients page. Needs shared.js loaded first.

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

  // Arriving from a homepage logo: clients.html?client=<index>
  const fromUrl = Number(new URLSearchParams(location.search).get("client"));
  select(Number.isInteger(fromUrl) && CLIENTS[fromUrl] ? fromUrl : 0);
  spot.classList.remove("is-changing");
}

initClients();
initNav();
settleScroll();
