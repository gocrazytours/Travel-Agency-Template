import { fetchTours } from '../utils/api.js';

const WHATSAPP_NUMBER = '919066983939';

let modalReady = false;

export async function initEnquiryModal() {
  if (modalReady) return;
  modalReady = true;

  let tours = [];
  try { tours = await fetchTours(); } catch (_) { /* proceed with empty list */ }

  document.body.insertAdjacentHTML('beforeend', buildModalHTML(tours));

  const modal   = document.getElementById('enquiry-modal');
  const form    = document.getElementById('enquiry-form');
  const closeBtn = modal.querySelector('.modal__close');
  const overlay  = modal.querySelector('.modal__overlay');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  form.addEventListener('submit', handleSubmit);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Global delegated click — any element with data-enquire triggers the modal
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-enquire]');
    if (trigger) {
      e.preventDefault();
      openModal(trigger.dataset.enquire || '');
    }
  });
}

function buildModalHTML(tours) {
  const packageOptions = tours
    .map(t => `<option value="${t.title}">${t.title}</option>`)
    .join('');

  const adultOptions = [1,2,3,4,5,6,7,8,9,10]
    .map(n => `<option>${n} Adult${n > 1 ? 's' : ''}</option>`)
    .join('');

  return `
    <div id="enquiry-modal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
      <div class="modal__overlay"></div>
      <div class="modal__box" tabindex="-1">

        <div class="modal__header">
          <h2 id="modal-title"><i class="fas fa-clipboard-list"></i> Get Tour Details</h2>
          <button class="modal__close" aria-label="Close enquiry form">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <form id="enquiry-form" class="modal__form" novalidate>

          <div class="modal__row">
            <div class="modal__field">
              <label for="m-date" class="modal__label">Travel Date</label>
              <input type="date" name="travelDate" id="m-date" />
            </div>
            <div class="modal__field">
              <label for="m-package" class="modal__label">Package</label>
              <select name="package" id="m-package">
                <option value="" disabled selected>Select Package</option>
                ${packageOptions}
              </select>
            </div>
          </div>

          <div class="modal__row">
            <div class="modal__field">
              <label for="m-name" class="modal__label">Your Name *</label>
              <input type="text" name="name" id="m-name" placeholder="Full name" required />
            </div>
            <div class="modal__field">
              <label for="m-budget" class="modal__label">Budget</label>
              <select name="budget" id="m-budget">
                <option value="" disabled selected>Select Budget</option>
                <option>Deluxe</option>
                <option>Luxury</option>
              </select>
            </div>
          </div>

          <div class="modal__row">
            <div class="modal__field">
              <label for="m-email" class="modal__label">Email</label>
              <input type="email" name="email" id="m-email" placeholder="your@email.com" />
            </div>
            <div class="modal__field">
              <label for="m-city" class="modal__label">Departure City</label>
              <input type="text" name="city" id="m-city" placeholder="e.g. Bengaluru" />
            </div>
          </div>

          <div class="modal__row">
            <div class="modal__field">
              <label for="m-mobile" class="modal__label">Mobile * (10 digits)</label>
              <input type="tel" name="mobile" id="m-mobile" placeholder="9XXXXXXXXX" maxlength="10" pattern="[0-9]{10}" required />
            </div>
            <div class="modal__field">
              <label for="m-adults" class="modal__label">Number of Adults</label>
              <select name="adults" id="m-adults">
                <option value="" disabled selected>Select Adults</option>
                ${adultOptions}
                <option>10+ Adults</option>
              </select>
            </div>
          </div>

          <div class="modal__field modal__field--full">
            <label for="m-req" class="modal__label">Your Requirement</label>
            <textarea name="requirement" id="m-req" placeholder="Tell us about your trip preferences, special requests, etc." rows="3"></textarea>
          </div>

          <div class="modal__field modal__field--full">
            <button type="submit" class="modal__submit">
              <i class="fab fa-whatsapp"></i> Send Enquiry
            </button>
          </div>

        </form>

        <p class="modal__note">
          <i class="fas fa-comment-dots"></i>
          Your enquiry will be sent to our sales team who will reach out with a relevant tour package offer.
          Package prices are subject to change as per accommodation, tour date, and group size.
        </p>

      </div>
    </div>
  `;
}

export function openModal(tourName = '') {
  const modal = document.getElementById('enquiry-modal');
  if (!modal) return;

  if (tourName) {
    const select = document.getElementById('m-package');
    if (select) {
      const match = Array.from(select.options).find(
        o => o.value === tourName || o.text === tourName
      );
      if (match) select.value = match.value;
    }
  }

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal__box').focus();
}

function closeModal() {
  const modal = document.getElementById('enquiry-modal');
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = '';
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const name   = form.name.value.trim();
  const mobile = form.mobile.value.trim();

  const rawEmail = form.email.value.trim();

  if (!name)                    { showError('Please enter your name.');                      return; }
  if (!/^\d{10}$/.test(mobile)) { showError('Please enter a valid 10-digit mobile number.'); return; }
  if (rawEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(rawEmail)) {
    showError('Please enter a valid email address (e.g. name@gmail.com).');
    return;
  }

  const pkg         = form.package.value   || 'Not specified';
  const rawDate     = form.travelDate.value;
  const date        = rawDate
    ? new Date(rawDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
    : 'Not specified';
  const budget      = form.budget.value    || 'Not specified';
  const email       = rawEmail || 'Not provided';
  const city        = form.city.value.trim()   || 'Not provided';
  const adults      = form.adults.value    || 'Not specified';
  const requirement = form.requirement.value.trim() || 'None';

  const lines = [
    '🙏 *New Tour Enquiry — Go Crazy Tours*',
    '',
    `📦 *Package:* ${pkg}`,
    `📅 *Travel Date:* ${date}`,
    `👤 *Name:* ${name}`,
    `📱 *Mobile:* ${mobile}`,
    `📧 *Email:* ${email}`,
    `🏙️ *Departure City:* ${city}`,
    `👥 *Adults:* ${adults}`,
    `💰 *Budget:* ${budget}`,
    `📝 *Requirement:* ${requirement}`,
    '',
    '_Sent from Go Crazy Tours website_',
  ];

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  window.open(url, '_blank', 'noopener,noreferrer');

  closeModal();
  form.reset();
}

function showError(msg) {
  const existing = document.getElementById('modal-error');
  if (existing) existing.remove();
  const el = document.createElement('p');
  el.id        = 'modal-error';
  el.className = 'modal__error';
  el.textContent = msg;
  document.getElementById('enquiry-form').prepend(el);
  setTimeout(() => el.remove(), 4000);
}
