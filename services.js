// Services page. Needs shared.js loaded first.

const BRANDING = [
  { name: "Strategy", items: ["Brand Strategy", "Brand Positioning", "Brand Personality Development", "Brand Voice & Tone", "Brand Story Development", "Brand Consultation"] },
  { name: "Name & identity", items: ["Brand Naming", "Brand Slogan & Tagline", "Logo Design", "Logo Redesign", "Brand Identity Design", "Corporate Identity Design", "Rebranding"] },
  { name: "Brand system", items: ["Brand Guidelines", "Brand Colour Palette", "Typography Selection", "Social Media Brand Identity", "Personal Branding"] },
  { name: "Print & stationery", items: ["Business Card Design", "Letterhead Design", "Envelope Design", "Stationery Design", "Brochure Design", "Catalogue Design"] },
  { name: "Company documents", items: ["Business Profile Design", "Company Profile Design", "Company Presentation Design"] },
  { name: "Packaging", items: ["Packaging Design", "Product Label Design"] },
  { name: "Spaces & vehicles", items: ["Signage & Outdoor Branding", "Office & Interior Branding", "Uniform Design", "Vehicle Branding"] },
  { name: "Launch & reputation", items: ["Brand Photography", "Brand Launch Campaign", "Brand Reputation Management"] },
];

const MARKETING = [
  { name: "Paid ads", items: ["Meta Ads Management", "Google Ads Management", "Social Media Advertising", "Lead Generation"] },
  { name: "Search & local", items: ["Search Engine Optimization (SEO)", "Google Business Profile Management", "Website Development"] },
  { name: "Social media", items: ["Social Media Management", "Reels Creation", "YouTube Marketing", "LinkedIn Marketing", "Influencer Marketing"] },
  { name: "Direct & sales", items: ["WhatsApp Marketing", "Email Marketing", "E-commerce Marketing"] },
  { name: "Creative", items: ["Graphic Designing", "Video Editing", "Content Marketing", "Logo Designing"] },
  { name: "Photo & video", items: ["Product Photography", "Corporate Photography", "Videography"] },
  { name: "Strategy", items: ["Digital Marketing", "Brand Strategy", "Personal Branding", "Marketing Consultation"] },
];

function renderGroups(target, groups) {
  $(target).append(...groups.map((g) =>
    el("div", { className: "offer-group" }, [
      el("h3", { textContent: g.name }),
      el("ul", {}, g.items.map((item) => el("li", { textContent: item }))),
    ])
  ));
}

renderGroups("#branding-groups", BRANDING);
renderGroups("#marketing-groups", MARKETING);
initNav();
settleScroll();
