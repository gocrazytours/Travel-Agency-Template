export function initCategorySlider() {
  const wrapper = document.querySelector('.slider-wrapper');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  if (!wrapper || !prevBtn || !nextBtn) return;

  const GAP = 16;

  function cardWidth() {
    const card = wrapper.querySelector('.trip-card');
    return card ? card.offsetWidth + GAP : 266;
  }

  function slideNext() {
    wrapper.style.transition = 'transform 0.5s ease';
    wrapper.style.transform = `translateX(-${cardWidth()}px)`;
    wrapper.addEventListener('transitionend', function handler() {
      wrapper.style.transition = 'none';
      wrapper.appendChild(wrapper.firstElementChild);
      wrapper.style.transform = 'translateX(0)';
      wrapper.removeEventListener('transitionend', handler);
    });
  }

  function slidePrev() {
    wrapper.insertBefore(wrapper.lastElementChild, wrapper.firstElementChild);
    wrapper.style.transition = 'none';
    wrapper.style.transform = `translateX(-${cardWidth()}px)`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      wrapper.style.transition = 'transform 0.5s ease';
      wrapper.style.transform = 'translateX(0)';
    }));
  }

  nextBtn.addEventListener('click', slideNext);
  prevBtn.addEventListener('click', slidePrev);
}
