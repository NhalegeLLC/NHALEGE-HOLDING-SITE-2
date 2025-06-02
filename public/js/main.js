// Main JS for Nhalege LLC website
document.addEventListener("DOMContentLoaded", () => {
  console.log("Nhalege LLC site loaded and ready.");

  // Example: Smooth scroll on all anchor links
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Future enhancements can be plugged in here:
  // - Popups
  // - Exit-intent offers
  // - Lead capture integrations
});
