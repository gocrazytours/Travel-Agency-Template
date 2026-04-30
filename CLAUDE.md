# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Go Crazy Tours is a **static HTML/CSS/JS** travel agency website — no build tools, no framework, no package manager. Pages are plain `.html` files opened directly in a browser or served from a static host.

## Running the Site

```bash
# Serve from src/ so index.html is the default page
cd src && python -m http.server 8080
# or from repo root:
npx serve src
```

No build step, no `npm install`, no dev server required.

---

## File Structure

```
Travel-Agency-Template/
├── src/                        ← ALL source files live here
│   ├── index.html              ← Home page
│   ├── style.css               ← Home page CSS
│   ├── styles/                 ← Shared design system (never edit except variables.css)
│   │   ├── variables.css       ← ALL colors, fonts, tokens — single source of truth
│   │   ├── components.css      ← Shared header, nav, footer, WhatsApp button
│   │   └── layout.css          ← Grid helpers
│   ├── pages/                  ← Every non-home page lives here
│   │   ├── destinations/
│   │   │   ├── index.html      ← Destinations listing
│   │   │   ├── destinations.css
│   │   │   └── rajasthan.html  ← Individual destination (template for others)
│   │   ├── tours/
│   │   │   ├── index.html      ← All upcoming tours
│   │   │   └── tours.css
│   │   └── categories/         ← (future) category pages
│   ├── auth/
│   │   ├── index.html          ← Login / signup
│   │   ├── login.css
│   │   └── login.js
│   ├── js/
│   │   ├── components/
│   │   │   ├── header.js       ← Injects shared header + nav into #site-header
│   │   │   ├── footer.js       ← Injects shared footer into #site-footer
│   │   │   ├── tour-card.js    ← tourCardHTML() factory (no price, Book Now button)
│   │   │   ├── category-card.js← categoryCardHTML() factory
│   │   │   └── enquiry-modal.js← WhatsApp enquiry modal (initEnquiryModal / openModal)
│   │   ├── pages/
│   │   │   ├── home.js         ← Renders featured tour cards on home page
│   │   │   ├── tours.js        ← Renders all tours on tours/index.html
│   │   │   ├── categories.js   ← Renders category cards on categories/index.html
│   │   │   ├── category-detail.js ← Renders filtered tours (reads body[data-category])
│   │   │   └── tour-detail.js  ← Header/footer/modal for tour detail pages
│   │   └── utils/
│   │       └── api.js          ← fetch wrappers: fetchTours, fetchCategories, etc.
│   ├── public/assets/images/   ← All images (logo/, destinations/, icons/, ui/)
│   └── data/
│       ├── tours.json          ← All tours — JS reads this via fetchTours()
│       ├── destinations.json   ← Destination data
│       ├── categories.json     ← Category definitions (id, title, url, image, icon)
│       └── config.json         ← Site config (name, phone, social links)
├── netlify.toml                ← publish = "src" (serves src/ as root)
└── docs/                       ← Project documentation
```

### Navigation links that exist in HTML but have no page yet

Individual destinations: `src/pages/destinations/manali.html`, `ladakh.html`, `bali.html`, `maldives.html`, `goa.html`, `kerala.html`, `thailand.html`

---

## CSS Architecture

```
src/style.css
  └── @import ./styles/variables.css       ← tokens
  └── @import ./styles/components.css      ← shared components
  └── @import ./styles/layout.css

src/pages/destinations/destinations.css
  └── @import ../../styles/variables.css
  └── @import ../../styles/components.css

src/pages/tours/tours.css
  └── @import ../../styles/variables.css
  └── @import ../../styles/components.css

src/auth/login.css
  └── @import ../styles/variables.css
```

**Depth rule for CSS @import paths (all relative to `src/styles/`):**
- `src/style.css` → `./styles/variables.css`
- `src/auth/login.css` → `../styles/variables.css`
- `src/pages/*/page.css` → `../../styles/variables.css`

**Rule:** Every new page CSS file must reference only token variables — no hardcoded colors or fonts.

**Rule:** No CSS file other than `variables.css` may contain a hardcoded color hex, rgba value, or font name. Always reference a token variable.

---

## Design Token System — `styles/variables.css`

This is the **only file** a developer needs to edit to change colors or fonts. Changes propagate everywhere automatically.

### Fonts

```css
--font-brand:  'Fredoka One', cursive;   /* Logo, hero title, section headings */
--font-body:   'Nunito', sans-serif;     /* All body text, nav, buttons, cards */
```

The Google Fonts `@import` is at the top of `variables.css`. To swap fonts: update the `@import` URL and both `--font-*` variables.

### Core brand colors (from the Go Crazy Tours logo)

```css
--blue:   #1A9FD4;   /* Top bar, info links, prices, "Call" buttons  */
--green:  #8DC63F;   /* ALL CTA buttons, highlights, hover states     */
--navy:   #1A3F70;   /* Headings, footer background, authority text   */
```

Changing any of these three cascades through every usage via the derived tokens below.

### Key derived tokens (all reference the core 3 above)

| Token | Value | Used for |
|---|---|---|
| `--bg-page` | `#FFFFFF` | Page background |
| `--bg-section-green` | `#F0F9F0` | "Why Choose Us" section |
| `--bg-section-blue` | `#EBF7FD` | "Get in Touch" section |
| `--bg-footer` | `var(--navy)` | Footer |
| `--bg-topbar` | `var(--blue)` | Top announcement bar |
| `--text-heading` | `var(--navy)` | All h1–h4 |
| `--text-body` | `#2C3E50` | Paragraph text |
| `--text-muted` | `#6B7280` | Secondary text |
| `--green-alpha-*` | rgba variants | Shadows, glows, focus rings |
| `--navy-alpha-*` | rgba variants | Card shadows, overlays |

Full token list with descriptions is in `src/styles/variables.css`.

---

## Component Patterns

### Header + Mobile Nav

Every page duplicates the header HTML inline — there are no server-side includes or JS templates. The header structure on every page:

1. `.top-bar` — email, social icons, login link (blue background)
2. `<header>` — white bar with logo, search box, desktop nav dropdowns, hamburger
3. `#mobile-nav` — hidden `<div>` below the header, shown via `.open` class toggled by the hamburger button

Chevron toggles for mobile dropdown submenus are handled by inline `<script>` at the bottom of each page. When adding a new page, copy the full header + mobile nav block from an existing page and update the active link class (`nav__link--active`).

### Category Slider

Infinite circular slider on the home page — implemented by DOM prepend/append on `transitionend`. All logic is in the inline `<script>` block at the bottom of `src/index.html`.

### Tour Cards

`.tour-card` — rendered by `tourCardHTML()` in `tour-card.js`. Cards show image, location, duration, seats, and two action buttons: "View Details" (links to `tour.detailUrl`) or "WhatsApp" if no detail page, plus "Book Now" which sets `data-enquire` to the tour title and triggers the global enquiry modal.

### Enquiry Modal

`initEnquiryModal()` injects one modal into `<body>` (idempotent). Any element with `[data-enquire]` opens it via delegated click. The modal sends the filled-in form as a formatted WhatsApp message to `919066983939`. Fields: Travel Date, Package (dropdown from tours.json), Name*, Mobile*, Budget, Email, Departure City, Adults, Requirement.

---

## Adding New Pages

**Pattern for every new page under `src/pages/<section>/`:**
1. Create `src/pages/<section>/index.html` with `<div id="site-header"></div>` and `<div id="site-footer"></div>` placeholders.
2. Create `src/pages/<section>/<section>.css` starting with:
   ```css
   @import url('../../styles/variables.css');
   @import url('../../styles/components.css');
   ```
3. Add a `<script type="module">` that imports the appropriate page JS (e.g. `../../js/pages/home.js`). The page JS is responsible for calling `renderHeader()`, `renderFooter()`, `initEnquiryModal()`.
4. Use **absolute paths** for all internal links (`/pages/...`, `/auth/...`, `/index.html`) — never relative paths for navigation.
5. All absolute paths are root-relative from `src/` (the Netlify publish directory). Do NOT prefix them with `/src/`.

**New destination page:** Copy `src/pages/destinations/rajasthan.html`, save as e.g. `src/pages/destinations/manali.html`.

**New category page:** Create `src/pages/categories/holiday-packages.html` following the same pattern.

---

## Images

- All local images: `src/public/assets/images/` (logo/, destinations/, icons/, ui/)
- Reference in HTML/JS with absolute paths: `/public/assets/images/...`
- Some images are hotlinked from `i.ibb.co` (ImgBB CDN) — replace with local assets when possible.

---

## Code Standards

- **No hardcoded colors or fonts** in any CSS file except `src/styles/variables.css`.
- Use BEM naming for components: `tour-card__image`, `nav__link--active`.
- CSS variable names follow the pattern: `--{category}-{variant}` (e.g. `--green-alpha-30`, `--bg-section-blue`).
- New CSS files must `@import` from `src/styles/variables.css` using the correct relative depth and use only token variables.
