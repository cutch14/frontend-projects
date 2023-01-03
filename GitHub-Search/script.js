// Select elements for dark mode switch

const colorSwitchElements = document.querySelectorAll(".color-switch");
const enableDarkMode = document.querySelector(".light-mode-container");
const enableLightMode = document.querySelector(".dark-mode-container");

// Toggle dark/light mode

function toggleColorMode() {
    colorSwitchElements.forEach(elem => elem.classList.toggle("color-switch"));
}

enableLightMode.addEventListener('click', toggleColorMode);
enableDarkMode.addEventListener('click', toggleColorMode);

// Get GitHub user data

const endpoint = "https://api.github.com/users/";
let userName = "octocat";
let userData = {};

async function findUser(username) {
    const response = await fetch(`${endpoint}${userName}`)
    const data = await response.json();
    userData = data;
}

findUser();

function populateUserCard() {
    console.log(userData);
}

