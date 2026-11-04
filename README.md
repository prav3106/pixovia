# Pixovia

Website for Pixovia: software, branding, marketing and websites for growing businesses.

A static site with no build step. Open `index.html`, or serve the folder with any static host.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Front page: hero, capabilities, how it works |
| `products.html` | Products catalogue with prices and filters |
| `services.html` | Core services, websites, branding, marketing |
| `works.html` | Client results (Shopify, Google Ads) and client logos |

## Editing

- **Products and prices:** `shared.js`. `PRICES` holds the two price labels; each product's last value (`S` or `F`) picks its price.
- **Clients:** `CLIENTS` in `shared.js`; logos are in `assets/clients/`.
- **Results:** `RESULTS` in `results.js`; screenshots are in `assets/results/`. Each result names a `group` (websites, google-ads, digital-marketing, scratch-marketing, meta-ads, personal-branding). A group shows on the Works page once it has a result. Crop out account names, emails and IDs before adding a screenshot.
- **Branding and marketing lists:** `services.js`.
- **WhatsApp number:** every "Contact us" and "Ask about" link opens a WhatsApp chat. The number is `CONFIG.whatsapp` in `shared.js` (product dialog) and in the page HTML and `vercel.json` (old `/contact.html` link).
- **Phone and email:** +91 93454 71624 and pixoviapvt@gmail.com, in the footer of every page.
- **Styles:** `styles.css`, one stylesheet for every page.
