// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Optional: Smooth scroll for anchor links (if you add anchor navigation)
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', e => {
//     e.preventDefault();
//     document.querySelector(anchor.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });
