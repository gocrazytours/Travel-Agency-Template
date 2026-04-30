import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { initMobileNav } from '../utils/nav.js';
import { initEnquiryModal } from '../components/enquiry-modal.js';

async function init() {
  const activePage = document.body.dataset.navActive || 'tours';
  renderHeader(activePage);
  await renderFooter();
  initMobileNav();
  await initEnquiryModal();
}

init();
