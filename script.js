const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});
