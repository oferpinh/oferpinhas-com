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

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      siteNav.classList.toggle('is-open', !open);
    });
    siteNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        siteNav.classList.remove('is-open');
      });
    });
  }

  // Scroll-triggered reveals
  if ('IntersectionObserver' in window) {
    const targets = document.querySelectorAll(
      '.section-header, .feature-card, .album-tile, .songbook-card, .show-item, .contact-icons'
    );
    const swing = [0, 60, 140, 90, 200, 120, 260, 170];
    targets.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (swing[i % swing.length]) + 'ms';
    });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(el => obs.observe(el));
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
