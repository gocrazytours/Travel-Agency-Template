import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderTourCards } from '../components/tour-card.js';
import { fetchTours } from '../utils/api.js';
import { initMobileNav } from '../utils/nav.js';

async function init() {
  renderHeader('tours');
  await renderFooter();
  initMobileNav();

  try {
    const tours = await fetchTours();
    renderTourCards(tours, 'all-tours');
  } catch (err) {
    console.error('Could not load tours:', err);
    const el = document.getElementById('all-tours');
    if (el) el.innerHTML = '<p style="text-align:center;color:var(--text-muted)">Tours unavailable. Please try again later.</p>';
  }
}

init();
