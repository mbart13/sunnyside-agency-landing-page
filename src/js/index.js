const burgerBtn = document.querySelector(
  '[data-element="burger-menu-trigger"]'
);
const nav = document.querySelector(".navbar");

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("menu-active");
  if (nav.classList.contains("menu-active")) {
    burgerBtn.setAttribute("aria-label", "Close Menu");
    burgerBtn.setAttribute("aria-expanded", true);
  } else {
    burgerBtn.setAttribute("aria-label", "Open Menu");
    burgerBtn.setAttribute("aria-expanded", false);
  }
});
