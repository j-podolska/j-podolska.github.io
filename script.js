const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');

let currentLang = 'pl';

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'pl' ? 'en' : 'pl';

  document.querySelectorAll('[data-pl]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  langToggle.textContent = currentLang.toUpperCase();
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
