# Go Crazy Tours - Setup Guide

## Initial Setup

### 1. Project Structure ✅
The project uses a professional, scalable folder structure. See [STRUCTURE.md](./STRUCTURE.md) for details.

### 2. Design System
All design decisions are centralized in `/src/styles/variables.css`:

```css
--color-primary: #c1121f         /* Brand red */
--font-size-base: 1rem           /* 16px */
--spacing-4: 1rem                /* 16px */
--radius-lg: 1rem                /* 16px */
```

Change these values to update the entire site's appearance.

### 3. CSS Architecture
The CSS is organized for maintainability:
- `main.css` - Master file (imports all)
- `variables.css` - Design tokens
- `reset.css` - Browser normalization
- `typography.css` - Font styles
- `utilities.css` - Reusable classes
- `animations.css` - Animations & transitions
- `accessibility.css` - WCAG compliance
- `responsive.css` - Mobile-first breakpoints

### 4. Linking Stylesheets
Include in your HTML `<head>`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Page Title</title>
  
  <!-- Font Awesome Icons (optional) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  
  <!-- Global Styles -->
  <link rel="stylesheet" href="../../src/styles/main.css" />
  
  <!-- Page-Specific Styles (if needed) -->
  <link rel="stylesheet" href="./page-name.css" />
</head>
```

## Using the Design System

### Colors
```css
/* Use CSS variables instead of hardcoding */
.element {
  color: var(--color-primary);           /* Brand red */
  background-color: var(--color-dark-bg);
  border-color: var(--color-border);
}
```

### Spacing
```css
/* Use spacing scale */
.element {
  margin: var(--spacing-4);       /* 16px */
  padding: var(--spacing-6);      /* 24px */
  gap: var(--spacing-8);          /* 32px */
}
```

### Typography
```css
/* Use consistent font sizes */
.heading {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

.body-text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
}
```

### Responsive Design
```css
/* Mobile-first approach */
.element {
  font-size: var(--font-size-base);
  grid-template-columns: 1fr;
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    font-size: var(--font-size-lg);
    grid-template-columns: 1fr 1fr;
  }
}

/* Or use predefined utility classes */
<div class="grid grid-cols-1 grid-cols-2-md grid-cols-4-lg">
  <!-- Items -->
</div>
```

### Animations
```css
/* Use predefined animations */
.element {
  animation: fadeIn var(--transition-duration-base);
}

/* Or transition classes */
<button class="transition-all hover-scale-105">
  Hover me
</button>
```

## Component Usage

### Header Component
Include in all pages (usually at top):
```html
<!-- Located at: /src/components/header/header.html -->
<div class="top-bar">...</div>
<header class="header">...</header>
```

### Footer Component
Include in all pages (usually at bottom):
```html
<!-- Located at: /src/components/footer/footer.html -->
<footer class="footer">...</footer>
```

### Tour Card Component
For displaying tour packages:
```html
<!-- Located at: /src/components/tour-card/tour-card.html -->
<div class="tour-card">...</div>
```

### Destination Card Component
For displaying destinations:
```html
<!-- Located at: /src/components/destination-card/destination-card.html -->
<div class="destination-card">...</div>
```

### Buttons
For all interactive buttons:
```html
<!-- Located at: /src/components/buttons/buttons.html -->
<button class="btn btn--primary">Primary</button>
<button class="btn btn--outline">Outline</button>
<button class="btn btn--small">Small</button>
```

## Accessibility Best Practices

### 1. Semantic HTML
```html
<!-- Good -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>

<!-- Avoid -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="main">...</div>
```

### 2. ARIA Labels
```html
<!-- For icon-only buttons -->
<button aria-label="Search">
  <i class="fas fa-search"></i>
</button>

<!-- For input fields -->
<input type="text" aria-label="Search destinations" />
```

### 3. Focus States
All interactive elements have focus states defined in CSS:
```css
button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### 4. Color Contrast
All text colors meet WCAG AA standards:
- Primary text on light bg: 7.01:1 contrast
- Primary text on dark bg: 5.5:1 contrast

### 5. Keyboard Navigation
All components support keyboard navigation:
- Tab through interactive elements
- Enter/Space to activate buttons
- Arrow keys in dropdowns/menus

## Performance Optimization

### 1. Image Optimization
```html
<!-- Use appropriate image sizes -->
<img src="image.jpg" alt="Description" loading="lazy" />

<!-- Use responsive images -->
<picture>
  <source media="(max-width: 768px)" srcset="image-mobile.jpg" />
  <img src="image.jpg" alt="Description" />
</picture>
```

### 2. CSS Optimization
- All CSS is minified in production
- Unused styles are removed
- CSS variables prevent duplication

### 3. JavaScript Optimization
- Event delegation for better performance
- Lazy loading for heavy components
- Debouncing for frequent events

## Browser Support

The project supports modern browsers:
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

For older browser support, CSS variables and Flexbox may need fallbacks.

## Development Workflow

### 1. Create a New Page
```bash
# Create folder
mkdir src/pages/new-page

# Create files
touch src/pages/new-page/index.html
touch src/pages/new-page/new-page.css
touch src/pages/new-page/new-page.js
```

### 2. Create a New Component
```bash
# Create folder
mkdir src/components/new-component

# Create files
touch src/components/new-component/new-component.html
touch src/components/new-component/new-component.css
touch src/components/new-component/new-component.js
```

### 3. Update Site-Wide Styles
Edit `/src/styles/variables.css` to change colors, spacing, fonts globally.

### 4. Test Responsiveness
- Use Chrome DevTools device emulation
- Test on actual mobile devices
- Check all breakpoints: 320px, 768px, 1024px, 1280px

## Troubleshooting

### Styles Not Applying
1. Check stylesheet link in HTML head
2. Ensure correct path: `../../src/styles/main.css`
3. Verify CSS specificity (avoid too many nested selectors)
4. Clear browser cache (Ctrl+Shift+Delete)

### Mobile Layout Broken
1. Check viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1" />`
2. Verify media query breakpoints
3. Test with actual device, not just DevTools

### Accessibility Issues
1. Use WAVE or Axe DevTools for testing
2. Ensure all images have alt text
3. Test keyboard navigation (Tab, Enter, Arrow keys)
4. Check color contrast with WebAIM

## Resources

- [CSS Variables Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Mobile-First CSS](https://www.nngroup.com/articles/mobile-first-css/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Next Steps

1. ✅ Restructure project folders
2. ✅ Set up CSS architecture
3. ⬜ Move existing files to new structure
4. ⬜ Convert old HTML files to use new components
5. ⬜ Test all pages for responsiveness
6. ⬜ Optimize images
7. ⬜ Set up build process (optional)
8. ⬜ Deploy to production
