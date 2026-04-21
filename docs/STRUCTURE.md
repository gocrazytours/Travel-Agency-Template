# Go Crazy Tours - Folder Structure Guide

## Overview
This document explains the new professional project structure for Go Crazy Tours website.

## Directory Structure

```
Travel-Agency-Template/
├── public/                    # Static assets served as-is
│   └── assets/
│       └── images/            # Organized image assets
├── src/                       # Source code (primary development area)
│   ├── index.html            # Home page
│   ├── pages/                # Page files (each page is a folder)
│   ├── auth/                 # Authentication pages
│   ├── components/           # Reusable UI components
│   ├── styles/               # Global CSS files
│   ├── js/                   # JavaScript utilities and modules
│   └── data/                 # Static data (JSON files)
├── dist/                     # Production build (generated)
├── docs/                     # Documentation
├── config/                   # Configuration files
└── README.md                 # Project overview
```

## Key Directories Explained

### `/public/assets/images/`
Organized image storage:
- **logo/** - Brand logos and icons
- **destinations/** - Destination photos grouped by location
- **tours/** - Tour package images
- **icons/** - UI icons and symbols
- **backgrounds/** - Background images
- **ui/** - UI elements (shapes, banners, buttons)
- **sponsor/** - App store badges, sponsorships

### `/src/pages/`
Each page has its own folder with three files:
- `index.html` - Page markup
- `[page-name].css` - Page-specific styles
- `[page-name].js` - Page-specific JavaScript

Example: `/src/pages/destinations/`
- `index.html` - Destinations listing page
- `destinations.css` - Styling for destinations
- `destinations.js` - Interactivity (filtering, sorting)

### `/src/components/`
Reusable UI components:
- **header/** - Top navigation bar
- **footer/** - Footer section
- **tour-card/** - Reusable tour card component
- **destination-card/** - Reusable destination card
- **buttons/** - Button styles and variations
- **forms/** - Form components
- **modal/** - Modal/dialog components
- **navbar/** - Navigation bar (mobile-responsive)

### `/src/styles/`
Global CSS architecture (mobile-first approach):
- `variables.css` - Design system (colors, spacing, typography)
- `reset.css` - Browser normalization
- `typography.css` - Font styles
- `utilities.css` - Reusable utility classes
- `animations.css` - Keyframe animations & transitions
- `accessibility.css` - WCAG compliance styles
- `responsive.css` - Media queries (mobile-first)
- `main.css` - Master file that imports all styles

### `/src/js/`
JavaScript organization:
- **utils/** - Utility functions (helpers, validators, API calls)
- **modules/** - Feature modules (search, filters, booking)
- `main.js` - App entry point

### `/src/data/`
Static data in JSON format:
- `tours.json` - Tour packages data
- `destinations.json` - Destination information
- `config.json` - Site configuration

## CSS Architecture Features

### Design System (variables.css)
- **Colors:** Primary, secondary, semantic colors as CSS variables
- **Typography:** Font sizes, weights, line heights
- **Spacing:** 8px-based scale (--spacing-1 to --spacing-32)
- **Breakpoints:** Mobile-first approach
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

### Utility Classes
Tailwind-like utilities for rapid development:
- Layout: `d-flex`, `d-grid`, `grid-cols-3`, etc.
- Spacing: `p-4`, `m-6`, `gap-8`, etc.
- Typography: `text-center`, `font-bold`, `text-primary`, etc.
- Sizing: `w-full`, `h-auto`, `max-w-container`, etc.
- Appearance: `rounded-lg`, `shadow-md`, `bg-primary`, etc.

### Responsive Design
Mobile-first approach with media queries:
```css
/* Mobile styles (base) */
.element { /* mobile styles */ }

/* Tablet and up */
@media (min-width: 768px) {
  .element { /* tablet styles */ }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element { /* desktop styles */ }
}
```

### Animations
Pre-built animations and transitions:
- Fade in/out
- Slide animations
- Zoom effects
- Bounce, pulse, spin
- Hover effects

## Component Usage

### Including a Component
In your HTML page, include the component template:

```html
<!-- Including header component -->
<div class="page-wrapper">
  <!-- Include header.html content here -->
  <header>...</header>
  
  <main>
    <!-- Page content -->
  </main>
  
  <!-- Include footer.html content here -->
  <footer>...</footer>
</div>
```

### Extending Components
Add custom styles specific to your page:

```html
<style>
  /* Global styles come from main.css */
  /* Page-specific overrides here */
  .my-custom-element {
    color: var(--color-primary);
  }
</style>
```

## Best Practices

### 1. **Mobile-First Development**
   - Write mobile styles in base CSS
   - Use media queries to add desktop features
   - Test on real devices

### 2. **Use CSS Variables**
   - Always use `var(--color-primary)` instead of hardcoding colors
   - Use `var(--spacing-4)` for consistent spacing
   - Makes theming and maintenance easier

### 3. **Component Reusability**
   - Create components once, reuse everywhere
   - Keep components self-contained
   - Document component usage

### 4. **Naming Conventions**
   - Use BEM (Block Element Modifier) for CSS classes
   - Example: `.tour-card__image`, `.tour-card__title--featured`
   - Use semantic HTML where possible

### 5. **Accessibility**
   - Use proper heading hierarchy (h1 > h2 > h3)
   - Include alt text for all images
   - Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
   - Ensure sufficient color contrast
   - Make interactive elements keyboard accessible

### 6. **Performance**
   - Use lazy loading for images (`loading="lazy"`)
   - Minimize CSS specificity
   - Avoid inline styles
   - Optimize images before uploading

### 7. **Version Control**
   - Make meaningful commits
   - Use branches for new features
   - Document major changes in commit messages

## Getting Started

1. **Add a New Page:**
   - Create folder: `/src/pages/my-page/`
   - Add: `index.html`, `my-page.css`, `my-page.js`
   - Reference styles in main.css

2. **Add a New Component:**
   - Create folder: `/src/components/my-component/`
   - Add: `my-component.html`, `my-component.css`, `my-component.js`
   - Include in pages as needed

3. **Add Images:**
   - Organize in `/public/assets/images/[category]/`
   - Reference: `/public/assets/images/category/image.jpg`

4. **Update Colors/Spacing:**
   - Edit `/src/styles/variables.css`
   - Changes apply site-wide automatically

## File Naming Conventions

- HTML files: `index.html` (for main page) or descriptive name
- CSS files: Match corresponding component/page name
- JavaScript files: Match corresponding component/page name
- Images: Lowercase with hyphens (e.g., `hero-image.jpg`)
- JSON data: Plural names (e.g., `tours.json`, not `tour.json`)

## Next Steps

After this structure is set up:
1. Move existing images to appropriate folders
2. Convert existing pages to new structure
3. Implement component system
4. Set up build process (optional)
5. Add testing setup (optional)
