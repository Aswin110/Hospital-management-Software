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

//form

// const formDemo = document.getElementById("form");
// formDemo.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e);
//   alert("Thank you! will contact you in one or two working days.");
//   formDemo.reset();
// });

//modal

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("modal").classList.remove("hidden");
  }, 5000);

  // Form submission
  document
    .getElementById("modalForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      closeModal();
    });

  // form cancel
  document
    .getElementById("modalClose")
    .addEventListener("click", function (event) {
      event.preventDefault();
      closeModal();
    });

  document.getElementById("modal").addEventListener("click", function (event) {
    if (event.target === this) {
      closeModal();
    }
  });

  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
  }
});
