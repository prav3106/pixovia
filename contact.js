// Contact page. Needs shared.js loaded first.

function initContact() {
  const form = $("#contact-form");
  const need = $("#f-need");
  const error = $("#form-error");

  const options = [
    "Custom software",
    "Website development",
    "Digital marketing",
    "Google Business Profile",
    "Personal branding",
    "Branding",
    ...PRODUCTS.map((p) => p.name),
  ];
  $("#need-options").append(...options.map((o) => el("option", { value: o })));

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
