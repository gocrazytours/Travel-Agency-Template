import { fetchConfig } from '../utils/api.js';

const ROUTES = {
  home:                  '/src/index.html',
  tours:                 '/src/pages/tours/index.html',
  'holiday-packages':    '/src/pages/categories/holiday-packages.html',
  'honeymoon-packages':  '/src/pages/categories/honeymoon-packages.html',
  'pilgrimage-tours':    '/src/pages/categories/pilgrimage-tours.html',
  'adventure-tours':     '/src/pages/categories/adventure-tours.html',
  'customised-packages': '/src/pages/categories/customised-packages.html',
  manali:    '/src/pages/destinations/manali.html',
  ladakh:    '/src/pages/destinations/ladakh.html',
  bali:      '/src/pages/destinations/bali.html',
  maldives:  '/src/pages/destinations/maldives.html',
  goa:       '/src/pages/destinations/goa.html',
  kerala:    '/src/pages/destinations/kerala.html',
};

export async function renderFooter() {
  const config = await fetchConfig();
  const { social, site } = config;

  document.getElementById('site-footer').innerHTML = `
    <section class="site-footer" id="about">
      <hr class="footer-divider" />
      <div class="footer-content">

        <div class="footer-column">
          <h4>About Go Crazy Tours</h4>
          <p class="about-text">We are a tour operator from Bengaluru. We operate treks, domestic tours, international tours, and holiday packages.</p>
        </div>

        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><span class="dash">–</span> <a href="${ROUTES.home}">Home</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES['holiday-packages']}">Holiday Packages</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES['honeymoon-packages']}">Honeymoon Packages</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES['pilgrimage-tours']}">Pilgrimage Tours</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES['adventure-tours']}">Adventure Tours</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES['customised-packages']}">Customised Packages</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES.tours}">Upcoming Tours</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Categories</h4>
          <ul>
            <li><span class="dash">–</span> <a href="${ROUTES['holiday-packages']}">Holiday Packages</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES['honeymoon-packages']}">Honeymoon Packages</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES['pilgrimage-tours']}">Pilgrimage Tours</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES['adventure-tours']}">Adventure Tours</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES['customised-packages']}">Customised Packages</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Top Destinations</h4>
          <ul>
            <li><span class="dash">–</span> <a href="${ROUTES.manali}">Manali</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES.ladakh}">Ladakh</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES.bali}">Bali</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES.maldives}">Maldives</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES.goa}">Goa</a></li>
            <li><span class="dash">–</span> <a href="${ROUTES.kerala}">Kerala</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Contact Us</h4>
          <ul class="contact-info">
            <li><a href="tel:${site.phone}"><i class="fas fa-phone"></i> ${site.phone}</a></li>
            <li><a href="mailto:${site.email}"><i class="fas fa-envelope"></i> ${site.email}</a></li>
            <li><i class="fas fa-map-marker-alt"></i> Bengaluru, Karnataka, India</li>
          </ul>
          <div class="footer-social">
            <a href="${social.facebook}" aria-label="Facebook" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="${social.instagram}" aria-label="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="${social.twitter}" aria-label="Twitter" target="_blank"><i class="fab fa-twitter"></i></a>
          </div>
        </div>

      </div>
    </section>
    <hr class="footer-bottom-divider" />
    <div class="footer-bottom">
      <p>— <span>All Rights Reserved © <a href="${site.url}">gocrazytours.com</a></span></p>
    </div>
    <a class="whatsapp-btn" href="${social.whatsapp}" target="_blank" aria-label="Chat on WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>
  `;
}
