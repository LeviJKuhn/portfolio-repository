/* ====================================================================
   PORTFOLIO JAVASCRIPT
   Only ONE thing in this file needs editing — see EDIT #10 right below.
   Everything else just makes the site work (menus, animations, etc.).
   ==================================================================== */

/* --------------------------------------------------------------------
   ✏️ EDIT #10 — THE "TYPING" ROLES IN THE HERO
   These phrases get typed out one-by-one under your name.
   Change them to describe YOU. Keep each one fairly short.
   -------------------------------------------------------------------- */
const TYPED_ROLES = [
  "Machine Learning Student",
  "AI4ALL Scholar",
  "Future ML Engineer",
  "Data Explorer",
];

/* ================== You can stop reading here! ==================== */

/* ---- Typing effect ---- */
const typedEl = document.getElementById("typedText");

if (typedEl) {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = TYPED_ROLES[roleIndex % TYPED_ROLES.length];

    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1800); // pause on the full word
        return;
      }
      setTimeout(typeLoop, 70);
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex++;
      }
      setTimeout(typeLoop, 35);
    }
  }

  typeLoop();
}

/* ---- Mobile hamburger menu ---- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // close the menu after tapping a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

/* ---- Fade sections in as you scroll ---- */
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

sections.forEach((section) => observer.observe(section));

/* ---- Auto-update the year in the footer ---- */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
