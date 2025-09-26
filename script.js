document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const modal = document.getElementById("confirmation-modal");
  const closeBtn = document.querySelector(".close-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent real submission

    // Show modal
    modal.style.display = "flex";

    // Clear form
    form.reset();
  });

  // Close modal when clicking the X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  const sideMenu = document.getElementById("side-menu");
  const header = document.getElementById("video-header");

  // Smooth scrolling
  document.querySelectorAll('#side-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const mobileWheel = document.querySelector(".mobile-wheel");
  const nav = document.querySelector(".header-nav");

  if (mobileWheel) {
    mobileWheel.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
});

let lastScrollTop = 0;
const sideMenu = document.querySelector('.side-menu');

if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
  // Only on index.html
  window.addEventListener("scroll", function () {
    const videoHeader = document.querySelector(".video-header");
    const kartMenu = document.getElementById("kart-menu");

    if (videoHeader) { // safety check
      if (window.scrollY > videoHeader.offsetHeight - 50) {
        kartMenu.style.top = "0"; // show menu
      } else {
        kartMenu.style.top = "-100px"; // hide menu
      }
    }
  });
} else {
  // On all other pages → always show menu
  const kartMenu = document.getElementById("kart-menu");
  if (kartMenu) {
    kartMenu.style.top = "0";
    kartMenu.style.position = "fixed"; // make sure it stays visible
  }
}

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  });
}