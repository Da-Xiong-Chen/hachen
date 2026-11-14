(() => {
  document.querySelectorAll('.site-header').forEach((header) => {
    const toggle = header.querySelector('.site-menu-toggle');
    const nav = header.querySelector('.site-nav');
    if (!toggle || !nav) return;

    const mobile = window.matchMedia('(max-width: 680px)');
    const setOpen = (open) => {
      header.dataset.menuOpen = String(open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '關閉導覽選單' : '開啟導覽選單');
    };

    toggle.hidden = false;
    header.dataset.menuReady = 'true';
    setOpen(false);

    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener('pointerdown', (event) => {
      if (!header.contains(event.target)) setOpen(false);
    });

    mobile.addEventListener('change', () => {
      if (mobile.matches && nav.contains(document.activeElement)) toggle.focus();
      setOpen(false);
    });
  });
})();
