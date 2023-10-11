const openMobileMenu = document.getElementById('open-mobile-menu');
const closeMobileMenu = document.getElementById('close-mobile-menu');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-menu');

openMobileMenu.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  mobileMenu.classList.remove('hidden');
});

closeMobileMenu.addEventListener('click', () => {
  overlay.classList.add('hidden');
  mobileMenu.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');
  mobileMenu.classList.add('hidden');
});
