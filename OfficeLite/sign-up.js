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

// Handle input errors

function handleNameInput() {

}

function handleEmailInput() {

}

function handlePhoneInput() {

}

function handleCompanyInput() {
    
}