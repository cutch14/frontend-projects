// ///////////////////
// open and close menu
// ///////////////////

const outerModal = document.querySelector(".outer");
const overlay = document.querySelector(".overlay");
const burger = document.querySelector(".burger-menu");
const innerModal = document.querySelector(".dropdown-menu");

function openMenu() {
    burger.classList.toggle("active");
    overlay.classList.toggle("menu-active");
    innerModal.classList.toggle("active");
};

burger.addEventListener("click", openMenu);

function closeModal(event) {
    const isOpen = !event.target.closest(".inner");

    if(isOpen) {
        burger.classList.remove("active");
        overlay.classList.remove("menu-active");
        innerModal.classList.remove("active");
    }
};

overlay.addEventListener("click", closeModal);