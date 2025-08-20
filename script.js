document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-bar ul");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});



