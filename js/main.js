// main.js — interacciones avanzadas SENATI PRO
// Incluye: menú responsive, animaciones, dark mode, video hero, microinteracciones

//--------------------------------------------------
// 1. NAV MOBILE
//--------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.menu');

  if (toggle) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  }

//--------------------------------------------------
// 2. DARK MODE con localStorage
//--------------------------------------------------
  const darkToggle = document.getElementById('dark-toggle');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    root.classList.add('dark');
    if (darkToggle) darkToggle.checked = true;
  }

  if (darkToggle) {
    darkToggle.addEventListener('change', () => {
      if (darkToggle.checked) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

//--------------------------------------------------
// 3. ANIMACIONES — Reveal on Scroll (IntersectionObserver)
//--------------------------------------------------
  const animEls = document.querySelectorAll('[data-anim]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  animEls.forEach(el => io.observe(el));

//--------------------------------------------------
// 4. VIDEO HERO — Play/Pause, auto-pause al cambiar pestaña
//--------------------------------------------------
  const heroVideo = document.getElementById('hero-video');
  const videoBtn = document.getElementById('video-btn');

  function toggleVideo() {
    if (!heroVideo) return;

    if (heroVideo.paused) {
      heroVideo.play();
      if (videoBtn) videoBtn.textContent = "Pausar Video";
    } else {
      heroVideo.pause();
      if (videoBtn) videoBtn.textContent = "Reproducir Video";
    }
  }

  if (videoBtn && heroVideo) videoBtn.addEventListener('click', toggleVideo);

  // Pausar automáticamente si el usuario cambia de pestaña
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && heroVideo && !heroVideo.paused) {
      heroVideo.pause();
    }
  });

//--------------------------------------------------
// 5. MICROINTERACCIONES — Hover suave en tarjetas
//--------------------------------------------------
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });

//--------------------------------------------------
// 6. SMOOTH SCROLL mejorado
//--------------------------------------------------
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
