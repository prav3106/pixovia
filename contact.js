// Contact page. Needs shared.js loaded first.

// "What do you need?" picker: a styled list of services and every product,
// grouped by sector. Typing filters it; anything typed that isn't listed is
// still accepted.
const NEED_GROUPS = [
  { name: "Services", items: ["Custom software", "Website development", "E-commerce website", "Digital marketing",
    "Google Ads", "Meta ads", "Google Business Profile", "Personal branding", "Branding"] },
  ...SECTORS.map((s) => ({ name: s.name, items: s.products.map((p) => p[0]) })),
];

function initNeedPicker(input) {
  const combo = input.closest(".combo");
  const list = $("#need-list");
  let options = [];
  let active = -1;

  const setActive = (i) => {
    options.forEach((o, j) => o.setAttribute("aria-selected", String(j === i)));
    active = i;
    if (i < 0) { input.removeAttribute("aria-activedescendant"); return; }
    input.setAttribute("aria-activedescendant", options[i].id);
    options[i].scrollIntoView({ block: "nearest" });
  };

  const render = (term) => {
    const t = term.trim().toLowerCase();
    list.replaceChildren();
    options = [];
    NEED_GROUPS.forEach((g) => {
      const items = g.items.filter((name) => !t || name.toLowerCase().includes(t) || g.name.toLowerCase().includes(t));
      if (!items.length) return;
      list.append(el("li", { className: "combo-group", role: "presentation", textContent: g.name }));
      items.forEach((name) => {
        const o = el("li", { className: "combo-option", role: "option", id: `need-${options.length}` }, highlight(name, t));
        o.dataset.value = name;
        // mousedown, not click, so the input keeps focus.
        o.addEventListener("mousedown", (e) => { e.preventDefault(); choose(name); });
        options.push(o);
        list.append(o);
      });
    });
    if (!options.length) {
      list.append(el("li", { className: "combo-empty", role: "presentation", textContent: `Not listed. We’ll ask about “${term.trim()}”.` }));
    }
    setActive(-1);
  };

  const open = () => {
    if (!list.hidden) return;
    render(input.value === lastChosen ? "" : input.value);
    list.hidden = false;
    combo.classList.add("is-open");
    input.setAttribute("aria-expanded", "true");
  };
  const close = () => {
    list.hidden = true;
    combo.classList.remove("is-open");
    input.setAttribute("aria-expanded", "false");
    setActive(-1);
  };
  let lastChosen = "";
  const choose = (name) => {
    input.value = lastChosen = name;
    input.removeAttribute("aria-invalid");
    close();
  };

  input.addEventListener("focus", open);
  input.addEventListener("click", open);
  input.addEventListener("input", () => { list.hidden ? open() : render(input.value); });
  input.addEventListener("blur", close);
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (list.hidden) { open(); return; }
      if (!options.length) return;
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActive((active + step + options.length) % options.length);
    } else if (e.key === "Enter" && !list.hidden && active >= 0) {
      e.preventDefault();
      choose(options[active].dataset.value);
    } else if (e.key === "Escape" && !list.hidden) {
      e.preventDefault();
      close();
    }
  });
  combo.querySelector(".combo-toggle").addEventListener("mousedown", (e) => {
    e.preventDefault();
    if (list.hidden) { input.focus(); open(); } else close();
  });
}

function initContact() {
  const form = $("#contact-form");
  const need = $("#f-need");
  const error = $("#form-error");

  initNeedPicker(need);

  // Buttons elsewhere on the site link here as contact.html?need=…
  const fromUrl = new URLSearchParams(location.search).get("need");
  if (fromUrl) need.value = fromUrl;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = [...form.querySelectorAll("[required]")];
    const missing = fields.filter((f) => !f.value.trim());
    fields.forEach((f) => f.setAttribute("aria-invalid", String(missing.includes(f))));

    if (missing.length) {
      const labels = missing.map((f) => form.querySelector(`label[for="${f.id}"]`).textContent.toLowerCase());
      error.textContent = `Add your ${labels.join(" and ")} so we know who we're replying to.`;
      error.hidden = false;
      missing[0].focus();
      return;
    }
    error.hidden = true;

    const d = new FormData(form);
    const text = [
      `Hi Pixovia, I'm ${d.get("name")} from ${d.get("business")}.`,
      `I'm interested in: ${d.get("need")}.`,
      d.get("message") ? d.get("message") : "",
    ].filter(Boolean).join("\n");

    window.open(whatsappLink(text), "_blank", "noopener");
  });
}

initContact();
initNav();
settleScroll();
