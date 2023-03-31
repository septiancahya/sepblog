const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
  nav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
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

const hero = document.querySelector("#hero > .container");
const styles = window.getComputedStyle(hero);

const main = document.querySelector("main > .container");
const aside = document.querySelector("aside");

function setMarginInline() {
  const marginLeft = styles.getPropertyValue("margin-left");
  main.style.marginInlineStart = marginLeft;
  aside.style.marginInlineEnd = marginLeft;
}

window.addEventListener("load", () => setMarginInline());
window.addEventListener("resize", () => setMarginInline());
