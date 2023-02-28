// Display menu

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

