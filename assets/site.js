(function () {
  // Header scroll state
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Lightbox player
  const box = document.getElementById('lightbox');
  const iframe = document.getElementById('lightbox-iframe');
  const closeBtn = box ? box.querySelector('.lightbox-close') : null;

  const open = (vid, title) => {
    if (!box || !iframe || !vid) return;
    iframe.src = `https://www.youtube-nocookie.com/embed/${vid}?autoplay=1&rel=0`;
    iframe.title = title || '';
    box.hidden = false;
    box.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  };

  const close = () => {
    if (!box || !iframe) return;
    iframe.src = '';
    box.hidden = true;
    box.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  };

  document.querySelectorAll('.media-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const vid = btn.getAttribute('data-vid');
      const title = btn.getAttribute('data-title');
      open(vid, title);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (box) {
    box.addEventListener('click', (e) => {
      if (e.target === box) close();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && box && !box.hidden) close();
  });
})();
