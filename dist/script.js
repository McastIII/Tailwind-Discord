// toggle menu
const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__actions");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    mobileNav.classList.toggle("open");
    header.classList.toggle("open");
});
