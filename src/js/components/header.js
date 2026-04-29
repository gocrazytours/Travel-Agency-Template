const ROUTES = {
  home:                  '/src/index.html',
  destinations:          '/src/pages/destinations/index.html',
  tours:                 '/src/pages/tours/index.html',
  auth:                  '/src/auth/index.html',
  categories:            '/src/pages/categories/index.html',
  'holiday-packages':    '/src/pages/categories/holiday-packages.html',
  'honeymoon-packages':  '/src/pages/categories/honeymoon-packages.html',
  'pilgrimage-tours':    '/src/pages/categories/pilgrimage-tours.html',
  'adventure-tours':     '/src/pages/categories/adventure-tours.html',
  'customised-packages': '/src/pages/categories/customised-packages.html',
  manali:      '/src/pages/destinations/manali.html',
  ladakh:      '/src/pages/destinations/ladakh.html',
  bali:        '/src/pages/destinations/bali.html',
  maldives:    '/src/pages/destinations/maldives.html',
  goa:         '/src/pages/destinations/goa.html',
  kerala:      '/src/pages/destinations/kerala.html',
  rajasthan:   '/src/pages/destinations/rajasthan.html',
  thailand:    '/src/pages/destinations/thailand.html',
};

function active(page, current) {
  return page === current ? ' nav__link--active' : '';
}

export function renderHeader(activePage = 'home') {
  document.getElementById('site-header').innerHTML = `
    <div class="top-bar">
      <div class="left">
        <a href="mailto:info@gocrazytours.com"><i class="fas fa-envelope"></i> info@gocrazytours.com</a>
      </div>
      <div class="right">
        <span>Follow Us:</span>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <a href="${ROUTES.auth}" class="login-btn">Login</a>
      </div>
    </div>

    <header>
      <div class="logo">
        <img src="/public/assets/images/logo/go_crazy_tours_logo_horizontal.png" alt="Go Crazy Tours Logo" />
        <span class="logo__text">Go Crazy Tours</span>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search for 'Destination'" />
        <i class="fas fa-search"></i>
      </div>
      <nav class="header__nav nav" aria-label="Main navigation">
        <a href="${ROUTES.home}" class="nav__link${active('home', activePage)}">Home</a>

        <div class="nav__dropdown">
          <a href="${ROUTES.destinations}" class="nav__link nav__dropdown-toggle${active('destinations', activePage)}">
            Destinations <i class="fas fa-chevron-down"></i>
          </a>
          <div class="nav__dropdown-menu">
            <a href="${ROUTES.manali}"    class="nav__dropdown-item">Manali</a>
            <a href="${ROUTES.ladakh}"    class="nav__dropdown-item">Ladakh</a>
            <a href="${ROUTES.bali}"      class="nav__dropdown-item">Bali</a>
            <a href="${ROUTES.maldives}"  class="nav__dropdown-item">Maldives</a>
            <a href="${ROUTES.goa}"       class="nav__dropdown-item">Goa</a>
            <a href="${ROUTES.kerala}"    class="nav__dropdown-item">Kerala</a>
            <a href="${ROUTES.rajasthan}" class="nav__dropdown-item">Rajasthan</a>
            <a href="${ROUTES.thailand}"  class="nav__dropdown-item">Thailand</a>
          </div>
        </div>

        <div class="nav__dropdown">
          <a href="${ROUTES.categories}" class="nav__link nav__dropdown-toggle${active('categories', activePage)}">
            Categories <i class="fas fa-chevron-down"></i>
          </a>
          <div class="nav__dropdown-menu">
            <a href="${ROUTES['holiday-packages']}"    class="nav__dropdown-item">Holiday Packages</a>
            <a href="${ROUTES['honeymoon-packages']}"  class="nav__dropdown-item">Honeymoon Packages</a>
            <a href="${ROUTES['pilgrimage-tours']}"    class="nav__dropdown-item">Pilgrimage Tours</a>
            <a href="${ROUTES['adventure-tours']}"     class="nav__dropdown-item">Adventure Tours</a>
            <a href="${ROUTES['customised-packages']}" class="nav__dropdown-item">Customised Packages</a>
          </div>
        </div>

        <a href="#about" class="nav__link">About Us</a>
        <button type="button" class="header__hamburger hamburger-menu" aria-label="Toggle menu">
          <i class="fas fa-bars"></i>
        </button>
      </nav>
    </header>

    <div class="mobile-nav" id="mobile-nav">
      <a href="${ROUTES.home}" class="mobile-nav__link">
        <i class="fas fa-home"></i> Home
      </a>

      <div class="mobile-nav__dropdown">
        <div class="mobile-nav__dropdown-header">
          <a href="${ROUTES.destinations}" class="mobile-nav__link">
            <i class="fas fa-map-marker-alt"></i> Destinations
          </a>
          <button class="mobile-nav__chevron" aria-label="Toggle destinations">
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>
        <div class="mobile-nav__dropdown-menu">
          <a href="${ROUTES.manali}"    class="mobile-nav__dropdown-item">Manali</a>
          <a href="${ROUTES.ladakh}"    class="mobile-nav__dropdown-item">Ladakh</a>
          <a href="${ROUTES.bali}"      class="mobile-nav__dropdown-item">Bali</a>
          <a href="${ROUTES.maldives}"  class="mobile-nav__dropdown-item">Maldives</a>
          <a href="${ROUTES.goa}"       class="mobile-nav__dropdown-item">Goa</a>
          <a href="${ROUTES.kerala}"    class="mobile-nav__dropdown-item">Kerala</a>
          <a href="${ROUTES.rajasthan}" class="mobile-nav__dropdown-item">Rajasthan</a>
          <a href="${ROUTES.thailand}"  class="mobile-nav__dropdown-item">Thailand</a>
        </div>
      </div>

      <div class="mobile-nav__dropdown">
        <div class="mobile-nav__dropdown-header">
          <a href="${ROUTES.categories}" class="mobile-nav__link">
            <i class="fas fa-th-large"></i> Categories
          </a>
          <button class="mobile-nav__chevron" aria-label="Toggle categories">
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>
        <div class="mobile-nav__dropdown-menu">
          <a href="${ROUTES['holiday-packages']}"    class="mobile-nav__dropdown-item">Holiday Packages</a>
          <a href="${ROUTES['honeymoon-packages']}"  class="mobile-nav__dropdown-item">Honeymoon Packages</a>
          <a href="${ROUTES['pilgrimage-tours']}"    class="mobile-nav__dropdown-item">Pilgrimage Tours</a>
          <a href="${ROUTES['adventure-tours']}"     class="mobile-nav__dropdown-item">Adventure Tours</a>
          <a href="${ROUTES['customised-packages']}" class="mobile-nav__dropdown-item">Customised Packages</a>
        </div>
      </div>

      <a href="#about" class="mobile-nav__link">
        <i class="fas fa-info-circle"></i> About Us
      </a>
    </div>
  `;
}
