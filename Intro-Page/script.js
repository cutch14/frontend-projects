const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
    menu.classList.toggle("open");
    burger.classList.toggle("open");
    overlay.classList.toggle("open");
};

function removeMenuOnScreenClick(e) {
    if(e.target.classList.contains('open')) {
        menu.classList.toggle("open");
        burger.classList.toggle("open");
        overlay.classList.toggle("open");
    }
}

burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', removeMenuOnScreenClick);