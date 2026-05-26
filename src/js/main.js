// Mobile nav
const siteNav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

function setNavOpen(open) {
  if (!siteNav || !navToggle) return;
  siteNav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.classList.toggle("nav-open", open);
}

if (siteNav && navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    setNavOpen(!siteNav.classList.contains("is-open"));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setNavOpen(false);
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 768) setNavOpen(false);
    },
    { passive: true },
  );
}

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
