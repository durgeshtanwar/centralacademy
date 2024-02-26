const hamburger = document.getElementById("mobile-menu");
const showMenu = document.getElementById("show-menu");
showMenu.classList.add("hidden");
hamburger.addEventListener("click", () => {
  showMenu.classList.toggle("hidden");
});

const dropMenus = document.querySelectorAll(".dropdown-button");

dropMenus.forEach((menu) => {
  menu.addEventListener("click", function () {
    const dropDownContent = this.nextElementSibling;
    dropDownContent.classList.toggle("hidden");
    dropDownContent.classList.toggle("flex");
  });
});
