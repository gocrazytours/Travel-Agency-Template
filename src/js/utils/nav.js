export function initMobileNav() {
  const hamburger = document.querySelector('.header__hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileNav.classList.toggle('open');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars', !isOpen);
    icon.classList.toggle('fa-times', isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('header') && !e.target.closest('#mobile-nav')) {
      mobileNav.classList.remove('open');
      const icon = hamburger.querySelector('i');
      if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-times'); }
    }
  });

  document.querySelectorAll('.mobile-nav__link').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });

  document.querySelectorAll('.mobile-nav__chevron').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = btn.closest('.mobile-nav__dropdown');
      const isOpen = dropdown.classList.toggle('open');
      btn.querySelector('i').style.transform = isOpen ? 'rotate(180deg)' : '';
      document.querySelectorAll('.mobile-nav__dropdown').forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('open');
          d.querySelector('.mobile-nav__chevron i').style.transform = '';
        }
      });
    });
  });
}
