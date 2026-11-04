# Pixovia

Website for Pixovia: software, branding, marketing and websites for growing businesses.

A static site with no build step. Open `index.html`, or serve the folder with any static host.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `products.html` | Software catalogue with prices and filters |
| `services.html` | Core services, websites, branding, marketing |
| `clients.html` | Client logos |
| `contact.html` | Contact form (sends via WhatsApp) |

## Editing

- **Products and prices:** `shared.js`. `PRICES` holds the two price labels; each product's last value (`S` or `F`) picks its price.
- **Clients:** `CLIENTS` in `shared.js`; logos are in `assets/clients/`.
- **Branding and marketing lists:** `services.js`.
- **WhatsApp number:** `CONFIG.whatsapp` at the top of `shared.js`.
- **Phone and email:** in the footer of every HTML page and on `contact.html`. They are placeholders.
- **Styles:** `styles.css`, one stylesheet for every page.
