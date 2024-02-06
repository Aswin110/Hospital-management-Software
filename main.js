import { register } from "swiper/element/bundle";

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(
    '[data-collapse-toggle="navbar-default"]'
  );
  const navbarElement = document.getElementById("navbar-default");

  if (toggleButton && navbarElement) {
    toggleButton.addEventListener("click", function () {
      navbarElement.classList.toggle("hidden");
    });
  }
});

register();
