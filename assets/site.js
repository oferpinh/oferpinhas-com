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

  // Stagger-reveal for work rows. Syncopated swing, not uniform.
  const cards = document.querySelectorAll('.work-row');
  if (cards.length && 'IntersectionObserver' in window) {
    const swing = [0, 80, 220, 140, 320, 200, 420, 300, 540, 380];
    cards.forEach((card, i) => {
      card.classList.add('reveal');
      card.style.setProperty('--reveal-delay', (swing[i % swing.length]) + 'ms');
    });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    cards.forEach(c => obs.observe(c));
  }

  // Video carousel: thumb click → swap player src with autoplay
  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const player = carousel.querySelector('.video-player');
    const thumbs = carousel.querySelectorAll('.video-thumb');
    if (!player || !thumbs.length) return;
    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const vid = thumb.getAttribute('data-vid');
        if (!vid) return;
        thumbs.forEach(t => {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        thumb.classList.add('is-active');
        thumb.setAttribute('aria-selected', 'true');
        player.src = `https://www.youtube-nocookie.com/embed/${vid}?autoplay=1`;
      });
    });
  });
})();
