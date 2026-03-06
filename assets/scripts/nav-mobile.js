const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav");
const overlay = document.querySelector(".nav-overlay");

function toggleMenu() {
  navContainer.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
