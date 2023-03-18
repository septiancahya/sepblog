const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
  nav.hasAttribute("data-visible")
    ? nav.setAttribute("aria-expanded", false)
    : nav.setAttribute("aria-expanded", true);
  nav.toggleAttribute("data-visible");
});

const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});
