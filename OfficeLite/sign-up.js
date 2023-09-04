// Countdown 

// grab time remaining elements
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let then = new Date();
let countdownEnd = then.setDate(then.getDate() + 30);

function displayTimeRemaining() {
    let now = new Date().getTime();
    let timeRemaining = countdownEnd - now;

    let daysToDisplay = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hoursToDisplay = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesToDisplay = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let secondsToDisplay = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    days.innerHTML = daysToDisplay;
    hours.innerHTML = hoursToDisplay;
    minutes.innerHTML = minutesToDisplay;
    seconds.innerHTML = secondsToDisplay;

    if(daysToDisplay < 0) {
        clearInterval(displayTimeRemaining);

        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
    }

    // console.log(daysToDisplay, hoursToDisplay, minutesToDisplay, secondsToDisplay);
} 

// setInterval(displayTimeRemaining, 1000);


// Menus

const selectPackage = document.querySelector('.subscription-box');
const packageType = document.querySelector('.pack-type');
const packagePrice = document.querySelector('.pack-price');
const chevron = document.querySelector('.chevron');
const dropdown = document.querySelector('.dropdown');
const packageOptions = document.querySelectorAll('.dropdown > div');
const submitBtn = document.querySelector('.list-btn');

function openDropdown() {
    selectPackage.classList.add('active');
    dropdown.classList.add('active');
}

function handleDropdownSelection(e) {
    packageOptions.forEach(elem => elem.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    let packText = e.currentTarget.children[0].innerHTML;
    let packPrice = e.currentTarget.children[1].innerHTML;
    packageType.innerHTML = packText;
    packagePrice.innerHTML = packPrice;

    dropdown.classList.remove('active');
    selectPackage.classList.remove('active');
}


selectPackage.addEventListener('click', openDropdown);
packageOptions.forEach(elem => {
    elem.addEventListener('click', handleDropdownSelection);
})

// Grab inputs

const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const phoneInput = document.querySelector(".number");
const companyInput = document.querySelector(".company > input");
const inputBtn = document.querySelector(".list-btn");

// Handle input errors

function handleNameInput() {
    nameInput.parentElement.classList.remove('active');

    const checkName = new RegExp(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm);

    console.log(nameInput.value);

    if(!nameInput.value.match(checkName)) {
        nameInput.parentElement.classList.add('active');
    }

    nameInput.value = "";
}

function handleEmailInput() {
    emailInput.parentElement.classList.remove('active');

    const checkEmail = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)

    console.log(emailInput.value);

    if(!emailInput.value.match(checkEmail)) {
        emailInput.parentElement.classList.add('active');
    }
}

function handlePhoneInput() {
    phoneInput.parentElement.classList.remove('active');

    const checkPhone = new RegExp(/(\(?\+44\)?\s?(1|2|3|7|8)\d{3}|\(?(01|02|03|07|08)\d{3}\)?)\s?\d{3}\s?\d{3}|(\(?\+44\)?\s?(1|2|3|5|7|8)\d{2}|\(?(01|02|03|05|07|08)\d{2}\)?)\s?\d{3}\s?\d{4}|(\(?\+44\)?\s?(5|9)\d{2}|\(?(05|09)\d{2}\)?)\s?\d{3}\s?\d{3}/)

    console.log(phoneInput.value);

    if(!phoneInput.value.match(checkPhone)) {
        phoneInput.parentElement.classList.add('active');
    }
}

function handleCompanyInput() {
    companyInput.parentElement.classList.remove('active');

    console.log(companyInput.value);

    if(!companyInput.value) {
        companyInput.parentElement.classList.add('active');
    }
}

inputBtn.addEventListener('click', handleNameInput);
inputBtn.addEventListener('click', handlePhoneInput);
inputBtn.addEventListener('click', handleEmailInput);
inputBtn.addEventListener('click', handleCompanyInput);