# Go Crazy Tours - Component Documentation

## Overview
This guide documents all reusable components in the Go Crazy Tours website.

## Components List

## 1. Header Component
**Location:** `/src/components/header/`

### Files
- `header.html` - HTML structure
- `header.css` - Styling (included in main.css)
- `header.js` - Interactivity (if needed)

### Structure
- **Top Bar** - Contact info, social links, login
- **Header** - Logo, search box, navigation
- **Navigation** - Links to main pages

### Usage
```html
<!-- Include top bar and header in all pages -->
<div class="top-bar">...</div>
<header class="header">...</header>
```

### Customization
- Change logo: Update `header__logo-img` src
- Change brand name: Update `header__brand-name` text
- Add/remove nav links: Edit nav links in header
- Change colors: Use CSS variables (--color-primary, --color-dark-bg)

### Responsive Features
- Mobile hamburger menu appears at 768px breakpoint
- Navigation becomes full-width dropdown on mobile
- Search box resizes on smaller screens

---

## 2. Footer Component
**Location:** `/src/components/footer/`

### Files
- `footer.html` - HTML structure
- `footer.css` - Styling (included in main.css)
- `footer.js` - Interactivity (if needed)

### Structure
- **Footer Grid** - 4 columns for content
  - Company info
  - Quick links
  - Popular destinations
  - Contact information
- **Footer Bottom** - Copyright and legal links
- **WhatsApp Button** - Fixed floating button

### Usage
```html
<!-- Include footer in all pages -->
<footer class="footer">...</footer>
```

### Customization
- Update company description: Edit footer__text
- Change social links: Update href attributes
- Add/remove quick links: Edit footer__links
- Add/remove destinations: Edit destination links
- Update contact info: Change phone and email

### Responsive Features
- 4 columns on desktop
- 2 columns on tablets
- 1 column on mobile
- WhatsApp button repositions on mobile

---

## 3. Tour Card Component
**Location:** `/src/components/tour-card/`

### Files
- `tour-card.html` - HTML structure
- `tour-card.css` - Styling (included in main.css)
- `tour-card.js` - Interactivity (if needed)

### Structure
- **Tag Badge** - "With Flight", "Trek", "Popular"
- **Image** - Tour package image
- **Title** - Tour name
- **Info Section**
  - Location
  - Duration
  - Pricing (original, current, per-person)
  - Seats available
- **Action Buttons** - "View Details" & "Book Now"

### Usage
```html
<!-- Individual card -->
<div class="tour-card" data-tour-id="1">
  <span class="tour-card__tag tour-card__tag--flight">
    <i class="fas fa-plane"></i> With Flight
  </span>
  <!-- ... -->
</div>

<!-- In a grid -->
<div class="grid grid-cols-1 grid-cols-2-md grid-cols-3-lg gap-6">
  <!-- Multiple tour cards -->
</div>
```

### Data Attributes
- `data-tour-id` - Unique identifier for the tour

### Customization
- Change tag type: Update class `tour-card__tag--*`
  - Options: `--flight`, `--trek`, `--popular`
- Update image: Change `src` and `alt`
- Modify pricing: Update price values and currency
- Change button text: Edit button labels

### Features
- Hover effect lifts card
- Image zoom on hover
- Responsive grid layout
- Lazy image loading

---

## 4. Destination Card Component
**Location:** `/src/components/destination-card/`

### Files
- `destination-card.html` - HTML structure
- `destination-card.css` - Styling (included in main.css)
- `destination-card.js` - Interactivity (if needed)

### Structure
- **Image** - Destination photo
- **Title** - Destination name
- **Description** - Brief description (2 lines max)
- **Info** - Tour count
- **CTA** - "Explore" link with arrow

### Usage
```html
<!-- Individual card -->
<div class="destination-card">
  <!-- ... -->
</div>

<!-- In a grid -->
<div class="grid grid-cols-1 grid-cols-3-md gap-6">
  <!-- Multiple destination cards -->
</div>
```

### Customization
- Update image: Change `src` and `alt`
- Change destination name: Update title
- Modify description: Update description text
- Update tour count: Change number in tours-count
- Update link: Change `href` in CTA link

### Features
- Image overlay on hover
- Description truncated to 2 lines
- Smooth hover transitions
- Responsive grid

---

## 5. Button Components
**Location:** `/src/components/buttons/`

### Files
- `buttons.html` - All button variations
- Styles included in `main.css`

### Button Types

#### Primary Button
```html
<button class="btn btn--primary">Primary Button</button>
```
- Brand red background
- Used for main CTAs (Book Now, Submit)

#### Secondary Button
```html
<button class="btn btn--secondary">Secondary Button</button>
```
- Dark background
- Used for alternative actions

#### Outline Button
```html
<button class="btn btn--outline">Outline Button</button>
```
- Transparent background with red border
- Used for secondary CTAs

#### Danger Button
```html
<button class="btn btn--danger">Cancel</button>
```
- Red background
- Used for destructive actions

#### Success Button
```html
<button class="btn btn--success">Confirm</button>
```
- Green background
- Used for confirmation actions

### Button Sizes

#### Small Button
```html
<button class="btn btn--primary btn--small">Small</button>
```

#### Normal Button (Default)
```html
<button class="btn btn--primary">Normal</button>
```

#### Large Button
```html
<button class="btn btn--primary btn--large">Large</button>
```

### Button Modifiers

#### Full Width
```html
<button class="btn btn--primary btn--full-width">Full Width</button>
```

#### Block (Flex Display)
```html
<button class="btn btn--primary btn--block">Block Button</button>
```

#### With Icon
```html
<button class="btn btn--primary">
  <i class="fas fa-arrow-right"></i>
  Continue
</button>
```

#### Disabled State
```html
<button class="btn btn--primary" disabled>Disabled</button>
```

#### Loading State
```html
<button class="btn btn--primary is-loading">Loading...</button>
```

### Button Group
```html
<div class="btn-group">
  <button class="btn btn--primary">Option 1</button>
  <button class="btn btn--primary">Option 2</button>
  <button class="btn btn--primary">Option 3</button>
</div>
```

---

## 6. Navigation Component
**Location:** `/src/components/navbar/`

### Mobile Hamburger Menu
Integrated in header component.

### Toggle JavaScript
```javascript
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
```

---

## 7. Search Bar Component
**Location:** `/src/components/search-bar/`

### Basic Structure
```html
<div class="header__search-box">
  <input 
    type="text" 
    class="header__search-input" 
    placeholder="Search destinations" 
    aria-label="Search"
  />
  <button class="header__search-btn" aria-label="Search">
    <i class="fas fa-search"></i>
  </button>
</div>
```

### Features
- Accessible with proper ARIA labels
- White background for contrast
- Rounded corners (pill-shaped)
- Responsive sizing

---

## 8. Forms Component
**Location:** `/src/components/forms/`

### Form Elements
```html
<!-- Text Input -->
<div class="form-group">
  <label for="name">Name</label>
  <input type="text" id="name" placeholder="Enter name" required />
</div>

<!-- Email Input -->
<div class="form-group">
  <label for="email">Email</label>
  <input type="email" id="email" placeholder="Enter email" required />
</div>

<!-- Password Input -->
<div class="form-group">
  <label for="password">Password</label>
  <input type="password" id="password" placeholder="Enter password" required />
</div>

<!-- Textarea -->
<div class="form-group">
  <label for="message">Message</label>
  <textarea id="message" placeholder="Your message here"></textarea>
</div>

<!-- Select -->
<div class="form-group">
  <label for="country">Country</label>
  <select id="country" required>
    <option value="">Select a country</option>
    <option value="india">India</option>
    <option value="usa">USA</option>
  </select>
</div>
```

### Form Validation
```html
<!-- Error state -->
<input type="email" value="invalid-email" />

<!-- Valid state -->
<input type="email" value="user@example.com" />
```

### Error Message
```html
<div class="form-group">
  <input type="email" id="email" />
  <p class="error-message">Please enter a valid email</p>
</div>
```

---

## 9. Modal Component
**Location:** `/src/components/modal/`

### Basic Structure
```html
<!-- Modal Overlay -->
<div class="modal-overlay" id="myModal">
  <!-- Modal Content -->
  <div class="modal">
    <!-- Close Button -->
    <button class="modal__close" aria-label="Close modal">
      <i class="fas fa-times"></i>
    </button>
    
    <!-- Modal Content -->
    <div class="modal__content">
      <h2>Modal Title</h2>
      <p>Modal content goes here</p>
    </div>
    
    <!-- Modal Actions -->
    <div class="modal__actions">
      <button class="btn btn--outline">Cancel</button>
      <button class="btn btn--primary">Confirm</button>
    </div>
  </div>
</div>
```

### JavaScript
```javascript
// Open modal
const modal = document.getElementById('myModal');
modal.style.display = 'flex';

// Close modal
const closeBtn = document.querySelector('.modal__close');
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
```

---

## 10. Breadcrumb Component
**Location:** `/src/components/breadcrumb/`

### Basic Structure
```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol class="breadcrumb__list">
    <li class="breadcrumb__item">
      <a href="/">Home</a>
    </li>
    <li class="breadcrumb__item">
      <a href="/destinations/">Destinations</a>
    </li>
    <li class="breadcrumb__item" aria-current="page">
      Kerala
    </li>
  </ol>
</nav>
```

### Features
- Semantic navigation element
- Accessibility support (aria-current="page")
- Responsive design

---

## Utility Classes

Use these classes for quick styling without writing CSS:

### Display
- `.d-none` - display: none
- `.d-block` - display: block
- `.d-flex` - display: flex
- `.d-grid` - display: grid

### Flexbox
- `.flex-row` - flex-direction: row
- `.flex-col` - flex-direction: column
- `.justify-center` - justify-content: center
- `.items-center` - align-items: center
- `.gap-4` - gap: 1rem

### Grid
- `.grid` - display: grid
- `.grid-cols-1` - 1 column
- `.grid-cols-2-md` - 2 columns on tablets
- `.grid-cols-3-lg` - 3 columns on desktops

### Spacing
- `.p-4` - padding: 1rem
- `.m-6` - margin: 1.5rem
- `.mt-4` - margin-top: 1rem
- `.px-4` - padding: 0 1rem

### Text
- `.text-center` - text-align: center
- `.text-primary` - color: brand red
- `.font-bold` - font-weight: bold
- `.text-sm` - font-size: 0.875rem

### Colors
- `.bg-primary` - background: brand red
- `.bg-dark` - background: dark
- `.text-muted` - color: muted gray

### Appearance
- `.rounded-lg` - border-radius: 1rem
- `.shadow-md` - box-shadow: medium
- `.opacity-50` - opacity: 0.5

### Responsive
- `.hidden-md` - hidden on tablets and up
- `.visible-lg` - visible on desktops and up
- `.container` - max-width container with padding

---

## Best Practices

### 1. Reuse Components
Don't duplicate HTML. Use the component system for:
- Tour cards in different sections
- Destination cards in grids
- Buttons throughout the site

### 2. Maintain Consistency
- Always use CSS variables for colors
- Use utility classes for common patterns
- Follow BEM naming conventions

### 3. Accessibility
- Include `alt` text for all images
- Use proper heading hierarchy (h1 > h2 > h3)
- Include ARIA labels for interactive elements
- Ensure focus visible states on all inputs

### 4. Mobile-First
- Start with mobile layout
- Add desktop features with media queries
- Test on real devices

### 5. Performance
- Use `loading="lazy"` for images
- Minimize CSS specificity
- Avoid inline styles
- Optimize image file sizes

---

## Component Checklist

When creating a new component:

- [ ] Create folder: `/src/components/component-name/`
- [ ] Create HTML file with semantic markup
- [ ] Create CSS file with component styles
- [ ] Use BEM naming convention (e.g., `.component-name__element`)
- [ ] Use CSS variables for colors and spacing
- [ ] Make responsive (mobile-first)
- [ ] Include accessibility attributes (aria-*, alt, labels)
- [ ] Document usage with examples
- [ ] Test on mobile, tablet, desktop
- [ ] Test keyboard navigation
- [ ] Test with screen readers
- [ ] Update this documentation

---

## Examples

### Displaying Tours
```html
<section class="upcoming-tours">
  <h2>Upcoming Tours</h2>
  <div class="grid grid-cols-1 grid-cols-2-md grid-cols-3-lg gap-6">
    <!-- Tour cards will go here -->
  </div>
</section>
```

### Creating a Destination Gallery
```html
<section class="destinations">
  <div class="container">
    <h2>Popular Destinations</h2>
    <div class="grid grid-cols-1 grid-cols-2-md grid-cols-4-lg gap-6">
      <!-- Destination cards will go here -->
    </div>
  </div>
</section>
```

### Building a Contact Form
```html
<form class="contact-form">
  <div class="form-group">
    <label for="name">Full Name</label>
    <input type="text" id="name" required />
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" required />
  </div>
  <button class="btn btn--primary btn--full-width">Submit</button>
</form>
```

---

For more information, see [SETUP.md](./SETUP.md) and [STRUCTURE.md](./STRUCTURE.md).
