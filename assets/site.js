(function () {
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Stagger-reveal for work cards. One rhythmic touch — syncopated, not uniform.
  const cards = document.querySelectorAll('.work-card');
  if (!cards.length || !('IntersectionObserver' in window)) return;

  // Syncopated stagger pattern (ms): not linear — gives a swing feel
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
})();
