import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderTourCards } from '../components/tour-card.js';
import { fetchFeaturedTours } from '../utils/api.js';
import { initMobileNav } from '../utils/nav.js';
import { initCategorySlider } from '../utils/slider.js';

async function init() {
  renderHeader('home');
  await renderFooter();
  initMobileNav();
  initCategorySlider();

  try {
    const tours = await fetchFeaturedTours();
    renderTourCards(tours, 'featured-tours');
  } catch (err) {
    console.error('Could not load tours:', err);
    const el = document.getElementById('featured-tours');
    if (el) el.innerHTML = '<p style="text-align:center;color:var(--text-muted)">Tours unavailable. Please try again later.</p>';
  }
}

init();
