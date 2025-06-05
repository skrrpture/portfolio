document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".follow-container");
  const toggle = document.querySelector(".follow-toggle");

  toggle.addEventListener("click", function () {
    container.classList.toggle("active");
  });
});
