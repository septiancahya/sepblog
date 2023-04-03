// Import our custom CSS
import "../sass/main.scss";

// Import components
import "./components/index";

// Import  javascript file as needed
import LandingPage from "./pages/landingPage";

const routes = {
  "/": LandingPage,
};

const initPages = () => {
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

  const navigation = document.querySelector("nav > .container > .navigation");

  function setMarginRight() {
    const marginRight = styles.getPropertyValue("margin-right");
    navigation.style.right = marginRight;
  }

  window.addEventListener("load", () => setMarginRight());
  window.addEventListener("resize", () => setMarginRight());
};

const detectRoute = () => routes[window.location.pathname];
window.addEventListener("DOMContentLoaded", async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
