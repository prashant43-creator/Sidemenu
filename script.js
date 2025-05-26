const hamburger = document.getElementById("hamburger");
const sideNav = document.getElementById("sideNav");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".side-nav a");

// Open/Close Side Nav
hamburger.addEventListener("click", () => {
  sideNav.classList.toggle("open");
  hamburger.classList.toggle("open");
  overlay.classList.toggle("show");
});

// Outside Click (overlay)
overlay.addEventListener("click", () => {
  sideNav.classList.remove("open");
  hamburger.classList.remove("open");
  overlay.classList.remove("show");
});

// Active Nav Highlight
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Optionally close nav on mobile
    sideNav.classList.remove("open");
    hamburger.classList.remove("open");
    overlay.classList.remove("show");
  });
});