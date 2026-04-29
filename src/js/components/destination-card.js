export function destinationCardHTML(dest) {
  return `
    <a href="${dest.url}" class="destination-card">
      <img src="${dest.image}" alt="${dest.name}" loading="lazy" />
      <h3>${dest.name}</h3>
      <p>${dest.description}</p>
    </a>
  `;
}

export function renderDestinationCards(destinations, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = destinations.map(destinationCardHTML).join('');
}
