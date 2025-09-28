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
  window.addEventListener("scroll", function () {
    const videoHeader = document.querySelector(".video-header");
    const kartMenu = document.getElementById("kart-menu");

    if (videoHeader && kartMenu) {
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
    kartMenu.style.position = "fixed";
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

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");
const dotsContainer = document.querySelector(".carousel-dots");

let currentIndex = 0;
let autoPlayInterval;

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    currentIndex = i;
    updateCarousel();
    resetAutoPlay();
  });
});

const dots = Array.from(dotsContainer.children);

function updateCarousel() {
  const width = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * width}px)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function goToNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function goToPrev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

function startAutoPlay() {
  autoPlayInterval = setInterval(goToNext, 5000);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// Event listeners
nextBtn.addEventListener("click", () => {
  goToNext();
  resetAutoPlay();
});

prevBtn.addEventListener("click", () => {
  goToPrev();
  resetAutoPlay();
});

window.addEventListener("resize", updateCarousel);

// Initialize
updateCarousel();
startAutoPlay();