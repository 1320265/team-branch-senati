// main.js — interacciones: menú, reveal on scroll, slider
document.addEventListener('DOMContentLoaded', ()=>{
  // nav toggle for mobile
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.menu');
  toggle?.addEventListener('click', ()=> menu?.classList.toggle('open'));

  // Intersection observer for elements with data-anim
  const animEls = document.querySelectorAll('[data-anim]');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
  },{threshold:0.12});
  animEls.forEach(el=>io.observe(el));

  // Swiper initializado en index.html vía inline script
});
