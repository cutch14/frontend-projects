const overlay = document.querySelector(".overlay");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");
const subMenu = document.querySelector(".mobile-menu-options");
const subMenuLinks = subMenu.querySelectorAll("a");

function displayMenu() {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
}

function hideDisplay(e) {
    if(e.target.classList.contains('overlay') && menu.classList.contains('open')) {
        burger.classList.toggle('open');
        menu.classList.toggle('open');
        overlay.classList.toggle('open');
    }
}


subMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.toggle('open');
        menu.classList.toggle('open');
        overlay.classList.toggle('open');
    });
});




burger.addEventListener('click', displayMenu);
document.addEventListener('click', hideDisplay);
