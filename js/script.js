
const burgerButton = document.querySelector('.burger-btn');
const headerNav = document.querySelector('.header__nav');
const body = document.body;

burgerButton.addEventListener("click", function () {
    headerNav.classList.toggle("header-nav-active");
    burgerButton.classList.toggle("burger-btn-close");
    body.classList.toggle("no-scroll");
})
