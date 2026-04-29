import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderDestinationCards } from '../components/destination-card.js';
import { fetchDestinations } from '../utils/api.js';
import { initMobileNav } from '../utils/nav.js';

async function init() {
  renderHeader('destinations');
  await renderFooter();
  initMobileNav();

  try {
    const destinations = await fetchDestinations();
    renderDestinationCards(destinations, 'destinations-grid');
  } catch (err) {
    console.error('Could not load destinations:', err);
    const el = document.getElementById('destinations-grid');
    if (el) el.innerHTML = '<p style="text-align:center;color:var(--text-muted)">Destinations unavailable. Please try again later.</p>';
  }
}

init();
