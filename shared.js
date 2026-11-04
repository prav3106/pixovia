// Shared by index.html and products.html.

// Replace with Pixovia's real WhatsApp number (country code + number, digits only).
const CONFIG = {
  whatsapp: "919345471624",
};

// ---------- Pricing ----------

// Simpler, single-counter systems sit on the starter price; multi-module systems
// (branches, finance, inventory + accounts) sit on the full range.
const PRICES = {
  starter: "₹50,000",
  full: "₹80,000 – ₹1,00,000",
};
const S = "starter";
const F = "full";

// ---------- Products ----------

// [name, extra search words, Lucide icon name, price tier]
// Extra search words let "fuel" find Petrol Bunk and "chemist" find Medical Shop.
const SECTORS = [
  {
    name: "Shops & retail",
    products: [
      ["Billing Software", "gst bill", "receipt", F],
      ["POS Software", "point of sale counter", "monitor-smartphone", F],
      ["Ecommerce Software", "online store shop", "shopping-cart", F],
      ["Inventory Management", "stock", "boxes", F],
      ["Super Market Management", "grocery kirana mart", "shopping-basket", F],
      ["Textile Shop Management", "clothing garments saree boutique", "shirt", S],
      ["Electronics Shop Management", "mobile appliances", "tv", F],
      ["Furniture Shop Management", "", "sofa", F],
      ["Hardware Shop Management", "tools paint", "hammer", S],
      ["Medical Shop Management", "chemist pharmacy drug", "briefcase-medical", F],
    ],
  },
  {
    name: "Healthcare",
    products: [
      ["Hospital Management", "doctor patient", "hospital", F],
      ["Clinic Management", "doctor patient dental", "stethoscope", F],
      ["Pharmacy Management", "chemist medical drug", "pill", F],
      ["Laboratory Management", "lab diagnostic test", "flask-conical", F],
    ],
  },
  {
    name: "Education",
    products: [
      ["School Management", "student fees", "school", F],
      ["Play School Management", "preschool kindergarten", "baby", F],
      ["Tuition Center Management", "student fees", "book-open", S],
      ["Coaching Institute Management", "academy student", "graduation-cap", F],
      ["Computer Institute Management", "training student", "laptop", F],
      ["Library Management", "books", "library", S],
    ],
  },
  {
    name: "Finance & lending",
    products: [
      ["Accounting Software", "accounts books ledger gst", "calculator", F],
      ["Invoice Management", "bill", "file-text", F],
      ["Quotation Management", "estimate quote", "file-spreadsheet", F],
      ["Loan Management", "finance emi", "hand-coins", F],
      ["Micro Finance Software", "loan group", "piggy-bank", F],
      ["Jewellery Loan Management", "gold loan pawn", "gem", F],
      ["Chit Fund Management", "chitty", "landmark", F],
    ],
  },
  {
    name: "Business operations",
    products: [
      ["ERP Software", "", "layers", F],
      ["CRM Software", "leads customers sales", "users", F],
      ["HR Management", "staff employee attendance", "user-cog", F],
      ["Payroll Management", "salary staff", "wallet", F],
      ["Project Management", "tasks", "kanban", F],
      ["Manufacturing Management", "factory production", "factory", F],
      ["Warehouse Management", "godown stock", "warehouse", F],
      ["Logistics Management", "transport delivery", "container", F],
      ["Courier Management", "parcel delivery", "package", F],
      ["Legal Document Management", "lawyer advocate", "scale", F],
    ],
  },
  {
    name: "Hospitality & travel",
    products: [
      ["Hotel Management", "lodge rooms resort", "hotel", F],
      ["Restaurant Management", "cafe food kot", "utensils", F],
      ["Travel & Tour Management", "travels agency", "plane", F],
      ["Event Booking Management", "hall wedding", "calendar-days", S],
      ["Ticket Booking Software", "bus", "ticket", F],
      ["Car Taxi Booking", "cab", "car-taxi-front", F],
      ["Car Rental Management", "self drive", "car", F],
    ],
  },
  {
    name: "Vehicles & field service",
    products: [
      ["Vehicle Service Management", "garage workshop mechanic", "wrench", F],
      ["Bike Service Management", "two wheeler garage", "bike", S],
      ["Motor Service Management", "pump rewinding", "cog", F],
      ["Petrol Bunk Management", "fuel pump station", "fuel", F],
      ["GPS Tracking Software", "fleet vehicle", "map-pin", F],
      ["CCTV Service Management", "camera security", "cctv", F],
      ["RO Water Service Management", "purifier", "droplets", F],
      ["Water Plant Management", "can supply", "glass-water", S],
    ],
  },
  {
    name: "Beauty & fitness",
    products: [
      ["Gym Management", "fitness membership", "dumbbell", F],
      ["Salon & Spa Management", "hair parlour boutique", "scissors", S],
      ["Beauty Parlour Management", "salon bridal boutique", "sparkles", F],
    ],
  },
  {
    name: "Community & membership",
    products: [
      ["Matrimony Software", "marriage bureau", "heart", F],
      ["Membership Management", "club", "badge-check", F],
      ["NGO Management", "trust charity donation", "hand-heart", F],
      ["Society Management", "apartment association", "building-2", F],
      ["MLM Software", "network marketing direct selling", "network", F],
    ],
  },
  {
    name: "Property & agriculture",
    products: [
      ["Real Estate Management", "property plots builder", "building", F],
      ["Cold Storage Management", "", "snowflake", F],
      ["Milk Dairy Management", "milk collection society", "milk", S],
    ],
  },
];

// ---------- Clients ----------

// Logos live in assets/clients/<file>. Leave sector or work empty when unknown;
// add `work: "…"` to show what Pixovia did for them on the Works page.
const CLIENTS = [
  { file: "2.jpg", name: "Elegance", sector: "Beauty salon & bridal studio" },
  { file: "7.jpg", name: "Neithal Shipping", sector: "Shipping" },
  { file: "3.jpg", name: "Alankara Fashion", sector: "Fashion" },
  { file: "19.jpg", name: "DAP Fitness Studio", sector: "Fitness studio" },
  { file: "6.jpg", name: "Vaagai International Preschool", sector: "Preschool" },
  { file: "4.jpg", name: "Riyo Interior", sector: "Interior design" },
  { file: "13.jpg", name: "The Aesthetic Studio", sector: "" },
  { file: "8.jpg", name: "Bluebrick Projects", sector: "Construction" },
  { file: "12.jpg", name: "Vibe Crest", sector: "Apparel" },
  { file: "9.jpg", name: "Annaiappan Foundation", sector: "Foundation" },
  { file: "17.jpg", name: "Personal branding client", sector: "Healthcare" },
  { file: "11.jpg", name: "The Burpee Blaster", sector: "Mindful fitness" },
  { file: "15.jpg", name: "Makeup Physics", sector: "Makeup" },
  { file: "18.jpg", name: "Phonokart", sector: "" },
  { file: "10.jpg", name: "Cross Colors", sector: "" },
  { file: "14.jpg", name: "Ombak", sector: "" },
  { file: "16.jpg", name: "Puri-fi", sector: "" },
  { file: "5.jpg", name: "Rainbow Overseas", sector: "Paper manufacturer" },
];
const clientLabel = (c) => c.name || "Pixovia client";

// Flat list, convenient for the products page and the contact form.
const PRODUCTS = SECTORS.flatMap((s) =>
  s.products.map(([name, tags, icon, tier]) => ({ name, tags, icon, tier, sector: s.name }))
);

// ---------- Helpers ----------

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, props = {}, children = []) => {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
};

function highlight(text, term) {
  if (!term) return [text];
  const i = text.toLowerCase().indexOf(term);
  if (i === -1) return [text];
  return [text.slice(0, i), el("mark", { textContent: text.slice(i, i + term.length) }), text.slice(i + term.length)];
}

function matches(product, term) {
  return !term
    || product.name.toLowerCase().includes(term)
    || product.tags.includes(term)
    || product.sector.toLowerCase().includes(term);
}

const whatsappLink = (text) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

// ---------- Nav ----------

function initNav() {
  const toggle = $(".nav-toggle");
  const nav = $("#site-nav");
  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  };
  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  $("#year").textContent = new Date().getFullYear();
  initMotion();
}

// ---------- Motion ----------

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Lists build in item by item as they scroll into view. The hidden starting
// state only applies under html.motion, so nothing is hidden if JS fails.
const REVEAL = ".stats, .caps-list, .console-chart .bars, .sector-links, .service-list, .client-strip, .client-grid, .steps, .offer-groups, .site-types, .contact-details";

function initMotion() {
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (reducedMotion || !("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("motion");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  // Called after each page renders its lists, so their children exist.
  window.observeReveals = () => document.querySelectorAll(REVEAL).forEach((list) => {
    if (list.classList.contains("reveal")) return;
    list.classList.add("reveal");
    [...list.children].forEach((child, i) => child.style.setProperty("--i", Math.min(i, 10)));
    io.observe(list);
  });
  observeReveals();
}

// Arriving from another page with a #hash: jump straight to the section once the
// page has rendered, instead of showing the top and animating down. Smooth
// scrolling is switched on only afterwards, for links within the page.
function settleScroll() {
  const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  const jump = () => target && target.scrollIntoView({ behavior: "instant", block: "start" });
  jump();
  // Web fonts can shift the layout slightly; land again once they are in.
  if (target && document.fonts) document.fonts.ready.then(() => { if (scrollY > 0) jump(); });
  requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.add("smooth")));
}
