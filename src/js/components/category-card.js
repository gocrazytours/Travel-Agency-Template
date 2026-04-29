export function categoryCardHTML(cat) {
  const countBadge = cat.toursCount != null
    ? `<span class="cat-card__count">${cat.toursCount} Tour${cat.toursCount !== 1 ? 's' : ''}</span>`
    : '';
  return `
    <a href="${cat.url}" class="cat-card">
      <div class="cat-card__img-wrap">
        <img src="${cat.image}" alt="${cat.title}" loading="lazy" />
        <div class="cat-card__overlay"></div>
      </div>
      <div class="cat-card__body">
        <span class="cat-card__icon"><i class="${cat.icon}"></i></span>
        <h3 class="cat-card__title">${cat.title}</h3>
        <p class="cat-card__subtitle">${cat.subtitle}</p>
        ${countBadge}
        <span class="cat-card__cta">Explore <i class="fas fa-arrow-right"></i></span>
      </div>
    </a>
  `;
}

export function renderCategoryCards(categories, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = categories.map(categoryCardHTML).join('');
}
