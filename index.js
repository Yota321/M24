// Gentle fade-in. Nothing flashy.

const items = document.querySelectorAll(
  ".poster, .feature, .editorial, .product-grid div"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

items.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});
