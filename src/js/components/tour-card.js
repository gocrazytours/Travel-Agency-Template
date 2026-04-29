function formatINR(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function tourCardHTML(tour) {
  return `
    <div class="tour-card">
      <img src="${tour.image}" alt="${tour.title}" loading="lazy" />
      <div class="tour-info">
        <h4>${tour.title}</h4>
        <p><i class="fas fa-map-marker-alt"></i> ${tour.location}</p>
        <p><i class="fas fa-clock"></i> ${tour.duration}</p>
        <p class="price">
          <s>${formatINR(tour.originalPrice)}</s> ${formatINR(tour.currentPrice)}<span>/pp</span>
        </p>
        <span class="seats">${tour.seatsLeft} Seats Left / ${tour.seatsTotal}</span>
      </div>
      <div class="card-actions">
        <a href="https://wa.me/${tour.whatsapp}" class="btn call" target="_blank" rel="noopener">
          <i class="fas fa-phone-alt"></i> Call
        </a>
        <a href="${tour.detailUrl}" class="btn view">View More</a>
      </div>
    </div>
  `;
}

export function renderTourCards(tours, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = tours.map(tourCardHTML).join('');
}
