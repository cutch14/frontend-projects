// Menu

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

// Dropdown

const features = document.querySelector(".features");
const company = document.querySelector(".company");
const featureDropdown = document.querySelector(".features-options");
const companyDropdown = document.querySelector(".company-options");

function displayFeatureDropdown() {
    featureDropdown.classList.toggle("open");
}

function displayCompanyDropdown() {
    companyDropdown.classList.toggle("open");
}

function removeDrowpdown(e) {
    if(!e.target.classList.contains('features') && !e.target.classList.contains('company')) {
        featureDropdown.classList.remove('open');
        companyDropdown.classList.remove('open');
    }
}

features.addEventListener('click', displayFeatureDropdown);
company.addEventListener('click', displayCompanyDropdown);
document.addEventListener('click', removeDrowpdown);
