import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderTourCards } from '../components/tour-card.js';
import { fetchCategories, fetchToursByCategory } from '../utils/api.js';
import { initMobileNav } from '../utils/nav.js';
import { initEnquiryModal } from '../components/enquiry-modal.js';

async function init() {
  const categoryId = document.body.dataset.category;
  if (!categoryId) return;

  renderHeader(categoryId);
  await renderFooter();
  initMobileNav();
  await initEnquiryModal();

  try {
    const [categories, tours] = await Promise.all([
      fetchCategories(),
      fetchToursByCategory(categoryId)
    ]);

    const category = categories.find(c => c.id === categoryId);
    if (category) {
      const titleEl = document.getElementById('cat-title');
      const descEl = document.getElementById('cat-desc');
      if (titleEl) titleEl.textContent = category.title;
      if (descEl) descEl.textContent = category.description;
    }

    const container = document.getElementById('category-tours');
    if (!container) return;

    if (tours.length === 0) {
      container.innerHTML = '<p class="no-tours">No tours available in this category right now. Check back soon!</p>';
      return;
    }

    renderTourCards(tours, 'category-tours');
  } catch (err) {
    console.error('Could not load category tours:', err);
    const el = document.getElementById('category-tours');
    if (el) el.innerHTML = '<p class="no-tours">Tours unavailable. Please try again later.</p>';
  }
}

init();
