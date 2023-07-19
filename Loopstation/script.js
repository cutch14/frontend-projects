const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

function openMobileMenu() {
    menu.classList.add('active');
}

function closeMobileMenu() {
    menu.classList.remove('active');
}


openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);