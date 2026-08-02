/* ====================================================================
   PORTFOLIO JAVASCRIPT
   Nothing in this file needs editing — all of your content lives in
   index.html. This just powers the mobile menu and the footer year.
   ==================================================================== */

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

/* ---- Auto-update the year in the footer ---- */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
