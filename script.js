
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.add("hidden");
  menuBtn?.setAttribute("aria-expanded", "false");
}

menuBtn?.addEventListener("click", () => {
  if (!mobileMenu) return;
  const isHidden = mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", String(isHidden));
});

mobileMenu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => closeMobileMenu());
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileMenu();
});


const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();


const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

