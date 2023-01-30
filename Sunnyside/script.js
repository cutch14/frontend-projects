const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const container = document.querySelector(".main-container");


function toggleMenu() {
    menu.classList.toggle('active');
}

burger.addEventListener('click', toggleMenu);
