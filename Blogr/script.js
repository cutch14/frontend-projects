// Display mobile menu

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu");

function toggleMenu(e) {
    mobileMenu.classList.toggle("active");
    burger.classList.toggle("active");
};

burger.addEventListener('click', toggleMenu);

// Menu dropdown

const menu = document.querySelectorAll(".menu > div");

function displayMenu() {
    menu.forEach(elem => elem.classList.remove('active'));
    this.classList.add('active');
}

menu.forEach(elem => elem.addEventListener('click', displayMenu));

// Display desktop menu

// capture dataset from menu options, match with menu dropwdown

const desktopMenuIcons = document.querySelectorAll(".menu-icons");
const desktopDropdowns = document.querySelectorAll(".desktop-menu");

function displayDesktopMenu(e) {
    let dropdownID = e.target.dataset.title;
    let selectedDropdown = document.querySelector(`div > .desktop-menu.${dropdownID}`);
    selectedDropdown.classList.toggle('active');
}

desktopMenuIcons.forEach(elem => 
    elem.addEventListener('click', displayDesktopMenu));

