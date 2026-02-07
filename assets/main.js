(() => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isHidden = menu.hasAttribute('hidden');
      if (isHidden) menu.removeAttribute('hidden');
      else menu.setAttribute('hidden', '');

      menuButton.setAttribute('aria-label', isHidden ? 'Cerrar menú' : 'Abrir menú');
    });

    menu.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => menu.setAttribute('hidden', ''));
    });
  }

  const packButtons = document.querySelectorAll('[data-pack]');
  const packSelect = document.querySelector('[data-pack-select]');

  if (packSelect) {
    packButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const pack = btn.getAttribute('data-pack');
        if (!pack) return;
        packSelect.value = pack;
      });
    });
  }
})();
