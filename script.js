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

  // Hide side menu when in video header
  function toggleSideMenu() {
    const headerBottom = header.offsetTop + header.offsetHeight;
    if (window.scrollY < headerBottom) {
      sideMenu.classList.add("hidden");
    } else {
      sideMenu.classList.remove("hidden");
    }
  }

  window.addEventListener("scroll", toggleSideMenu);
  toggleSideMenu(); // Run on page load
});