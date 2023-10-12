function initializeScript() {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header .navbar a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header .navbar a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  ScrollReveal({ distance: "80px", duration: 2000, delay: 200 });
  ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  ScrollReveal().reveal(".home-img, .portfolio-box, .contact form", {
    origin: "bottom",
  });
  ScrollReveal().reveal(".about-img img, .home-content h1", { origin: "left" });

  const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
}
document.addEventListener("DOMContentLoaded", initializeScript);
