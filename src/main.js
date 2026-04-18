/* FlowPM Landing — main.js */

// Mobile nav toggle
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(13,13,13,0.98)';
    navLinks.style.padding = '20px 24px';
    navLinks.style.borderBottom = '0.5px solid rgba(255,255,255,0.08)';
    navLinks.style.zIndex = '99';
    if (!open) navLinks.style.display = 'flex';
  });
}

// CTA email capture
const ctaSubmit = document.querySelector('.cta-submit');
const ctaInput = document.querySelector('.cta-input');

if (ctaSubmit && ctaInput) {
  ctaSubmit.addEventListener('click', () => {
    const email = ctaInput.value.trim();
    if (!email || !email.includes('@')) {
      ctaInput.style.borderColor = '#E24B4A';
      ctaInput.focus();
      return;
    }
    ctaSubmit.textContent = 'You\'re on the list!';
    ctaSubmit.style.opacity = '0.7';
    ctaSubmit.disabled = true;
    ctaInput.disabled = true;
    ctaInput.style.borderColor = '#5DCAA5';
  });

  ctaInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') ctaSubmit.click();
  });
  ctaInput.addEventListener('input', () => {
    ctaInput.style.borderColor = '';
  });
}

// Intersection Observer — fade-in on scroll
const fadeTargets = document.querySelectorAll(
  '.feat, .workflow-card, .plan, .testi, .stat'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  fadeTargets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 0.4s ease ${i * 0.04}s, transform 0.4s ease ${i * 0.04}s`;
    observer.observe(el);
  });
}
