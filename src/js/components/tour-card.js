export function tourCardHTML(tour) {
  const hasDetailPage = tour.detailUrl && tour.detailUrl !== '#';

  const leftBtn = hasDetailPage
    ? `<a href="${tour.detailUrl}" class="btn call"><i class="fas fa-file-alt"></i> View Details</a>`
    : `<a href="https://wa.me/${tour.whatsapp}" class="btn call" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> WhatsApp</a>`;

  return `
    <div class="tour-card">
      <img src="${tour.image}" alt="${tour.title}" loading="lazy" />
      <div class="tour-info">
        <h4>${tour.title}</h4>
        <p><i class="fas fa-map-marker-alt"></i> ${tour.location}</p>
        <p><i class="fas fa-clock"></i> ${tour.duration}</p>
        <span class="seats">${tour.seatsLeft} Seats Left / ${tour.seatsTotal}</span>
      </div>
      <div class="card-actions">
        ${leftBtn}
        <button class="btn view" data-enquire="${tour.title}">Book Now</button>
      </div>
    </div>
  `;
}

export function renderTourCards(tours, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = tours.map(tourCardHTML).join('');
}
