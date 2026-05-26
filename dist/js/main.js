// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);
reveals.forEach((el) => observer.observe(el));

// Portfolio filter
function filterCards(cat, btn) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".portfolio-card").forEach((card) => {
    const show = cat === "all" || card.dataset.cat === cat;
    card.style.display = show ? "block" : "none";
  });
}
