// Homepage. Needs shared.js loaded first.

// One link per sector, into the Software page already filtered.
function renderSectorLinks() {
  $("#sector-links").append(...SECTORS.map((s) => {
    const examples = s.products.slice(0, 3).map(([n]) => n.replace(/ (Management|Software)$/, "")).join(", ");
    const link = el("a", { className: "sector-link", href: `products.html?sector=${encodeURIComponent(s.name)}` }, [
      el("span", { className: "sector-link-name", textContent: s.name }),
      el("span", { className: "sector-link-count", textContent: s.products.length }),
      el("span", { className: "sector-link-examples", textContent: examples }),
    ]);
    return el("li", {}, [link]);
  }));
}

// The first twelve named clients; each opens the Clients page on that logo.
function renderClientStrip() {
  const shown = CLIENTS.map((c, i) => [c, i]).filter(([c]) => c.name).slice(0, 12);
  $("#client-strip").append(...shown.map(([c, i]) =>
    el("li", {}, [
      el("a", { href: `clients.html?client=${i}` }, [
        el("img", { src: `assets/clients/${c.file}`, alt: clientLabel(c), loading: "lazy", width: 160, height: 160 }),
      ]),
    ])
  ));
}

// The hero mark leans toward the pointer; CSS turns --mx/--my into depth.
function initHeroDepth() {
  const hero = $(".hero");
  const mark = $(".hero-mark");
  if (!mark || reducedMotion || !matchMedia("(pointer: fine)").matches) return;
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    mark.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    mark.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  });
  hero.addEventListener("pointerleave", () => {
    mark.style.setProperty("--mx", 0);
    mark.style.setProperty("--my", 0);
  });
}

renderSectorLinks();
renderClientStrip();
initHeroDepth();
initNav();
settleScroll();
