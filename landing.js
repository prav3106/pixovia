// Front page. Needs shared.js loaded first, and Lucide for icons.

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

if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.75 } });
// Capability numbers count up once, when they scroll into view.
function initCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (reducedMotion || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const end = Number(e.target.dataset.count);
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 1200);
      e.target.textContent = Math.round(end * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(tick);
    };
    e.target.textContent = "0";
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });
  nums.forEach((n) => io.observe(n));
}

initHeroDepth();
initCounters();
initNav();
settleScroll();
