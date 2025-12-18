// Simple reveal on scroll.
// Nothing fancy, nothing heavy.

const revealItems = document.querySelectorAll(
  ".poster, .feature, .product"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach(item => {
  item.classList.add("hidden");
  observer.observe(item);
});
