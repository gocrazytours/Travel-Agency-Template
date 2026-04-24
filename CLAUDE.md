# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Go Crazy Tours is a **static HTML/CSS/JS** travel agency website — no build tools, no framework, no package manager. Pages are plain `.html` files opened directly in a browser or served from a static host.

## Running the Site

```bash
python -m http.server 8080   # or: npx serve .
```

No build step, no `npm install`, no dev server required.

---

## File Structure

```
Travel-Agency-Template/
├── index.html              ← Home page
├── style.css               ← Home page CSS
├── styles/                 ← Shared design system (never edit except variables.css)
│   ├── variables.css       ← ALL colors, fonts, tokens — single source of truth
│   ├── components.css      ← Shared header, nav, buttons, WhatsApp button
│   └── layout.css          ← Grid helpers
├── pages/                  ← Every non-home page lives here
│   ├── destinations/
│   │   ├── index.html      ← Destinations listing
│   │   ├── destinations.css
│   │   └── rajasthan.html  ← Individual destination (template for others)
│   ├── tours/
│   │   ├── index.html      ← All upcoming tours
│   │   └── tours.css
│   └── auth/
│       ├── index.html      ← Login / signup
│       ├── login.css
│       └── login.js
└── public/assets/images/   ← All images (logo/, destinations/, icons/, ui/)
```

### Navigation links that exist in HTML but have no page yet

Individual destinations: `pages/destinations/manali.html`, `ladakh.html`, `bali.html`, `maldives.html`, `goa.html`, `kerala.html`, `thailand.html`

Category pages (future): `pages/categories/index.html`, `holiday-packages.html`, `honeymoon-packages.html`, `pilgrimage-tours.html`, `adventure-tours.html`, `customised-packages.html`

### Scaffolded but not migrated

`src/` contains an older scaffolded structure not wired to any HTML. Ignore it. The authoritative token file is `styles/variables.css`, **not** `src/styles/variables.css`.

---

## CSS Architecture

```
style.css
  └── @import styles/variables.css       ← tokens
  └── @import styles/components.css      ← shared components
  └── @import styles/layout.css

pages/destinations/destinations.css
  └── @import ../../styles/variables.css
  └── @import ../../styles/components.css

pages/tours/tours.css
  └── @import ../../styles/variables.css
  └── @import ../../styles/components.css

pages/auth/login.css
  └── @import ../../styles/variables.css
```

**Rule:** Every new page CSS file must start with `@import url('../../styles/variables.css')` and use only token variables — no hardcoded colors or fonts.

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

Full token list with descriptions is in `styles/variables.css`.

---

## Component Patterns

### Header + Mobile Nav

Every page duplicates the header HTML inline — there are no server-side includes or JS templates. The header structure on every page:

1. `.top-bar` — email, social icons, login link (blue background)
2. `<header>` — white bar with logo, search box, desktop nav dropdowns, hamburger
3. `#mobile-nav` — hidden `<div>` below the header, shown via `.open` class toggled by the hamburger button

Chevron toggles for mobile dropdown submenus are handled by inline `<script>` at the bottom of each page. When adding a new page, copy the full header + mobile nav block from an existing page and update the active link class (`nav__link--active`).

### Category Slider

Infinite circular slider on the home page — implemented by DOM prepend/append on `transitionend`. All logic is in the inline `<script>` block at the bottom of `index.html`.

### Tour Cards

`.tour-card` — image, info block (`.tour-info`), two action buttons (`.btn.call` for WhatsApp, `.btn.view` for detail). Hardcoded HTML, no JS templating.

---

## Adding New Pages

**Pattern for every new page:**
1. Create `pages/<section>/index.html` (or `page-name.html` for sub-pages)
2. Create `pages/<section>/<section>.css` that starts with:
   ```css
   @import url('../../styles/variables.css');
   @import url('../../styles/components.css');
   ```
3. Copy the header + mobile nav block from an existing page, update the active link (`nav__link--active`), and fix relative paths (`../../index.html` for home, `../auth/index.html` for login)
4. Add the new page to the nav dropdown in every existing HTML file

**New destination page:** Copy `pages/destinations/rajasthan.html` as a template, save as e.g. `pages/destinations/manali.html`.

**New category page:** Create `pages/categories/holiday-packages.html` following the same pattern.

---

## Static Data (not yet wired up)

`src/data/tours.json`, `src/data/destinations.json`, and `src/data/config.json` exist as placeholders for a future dynamic/backend implementation. Currently no JavaScript reads them.

---

## Images

- Logos: `public/assets/images/logo/`
- Destinations/categories: `public/assets/images/destinations/`
- Some images are hotlinked from `i.ibb.co` (ImgBB CDN) — replace with local assets when possible.

---

## Code Standards

- **No hardcoded colors or fonts** in any CSS file except `styles/variables.css`.
- Use BEM naming for components: `tour-card__image`, `nav__link--active`.
- CSS variable names follow the pattern: `--{category}-{variant}` (e.g. `--green-alpha-30`, `--bg-section-blue`).
- New CSS files must start with `@import url('.../styles/variables.css')` and use only token variables.
