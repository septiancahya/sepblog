// Import our custom CSS
import "../sass/main.scss";

// Import components
import "./components/index";

// Import  javascript file as needed
import LandingPage from "./pages/landingPage";
import SingleArticle from "./pages/singleArticle";

const routes = {
  "/": LandingPage,
  "/single-article.html": SingleArticle,
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

  const navContainer = document.querySelector("nav > .container");
  const styles = window.getComputedStyle(navContainer);

  const navigation = document.querySelector("nav > .container > .navigation");

  const main = document.querySelector("main > .container");
  const aside = document.querySelector("aside > .container");

  function setMargin() {
    const marginLeft = styles.getPropertyValue("margin-left");
    main.style.marginInlineStart = marginLeft;
    aside.style.marginInlineEnd = marginLeft;
    navigation.style.right = marginLeft;
  }

  window.addEventListener("load", () => setMargin());
  window.addEventListener("resize", () => setMargin());
};

const detectRoute = () => routes[window.location.pathname];
window.addEventListener("DOMContentLoaded", async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
