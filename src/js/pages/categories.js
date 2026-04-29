import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderCategoryCards } from '../components/category-card.js';
import { fetchCategories, fetchTours } from '../utils/api.js';
import { initMobileNav } from '../utils/nav.js';

async function init() {
  renderHeader('categories');
  await renderFooter();
  initMobileNav();

  try {
    const [categories, tours] = await Promise.all([fetchCategories(), fetchTours()]);
    const withCounts = categories.map(cat => ({
      ...cat,
      toursCount: tours.filter(t => Array.isArray(t.categories) && t.categories.includes(cat.id)).length
    }));
    renderCategoryCards(withCounts, 'categories-grid');
  } catch (err) {
    console.error('Could not load categories:', err);
    const el = document.getElementById('categories-grid');
    if (el) el.innerHTML = '<p style="text-align:center;color:var(--text-muted)">Categories unavailable. Please try again later.</p>';
  }
}

init();
