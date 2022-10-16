// Card image detail elements 

const updatedCardNumber = document.querySelector(".sample-card-number");
const updatedCardName = document.querySelector(".sample-card-name");
const updatedExpiryDate = document.querySelector(".sample-card-expiry");

// Pre and post submission elements

const cardInputPage = document.querySelector(".card-details");
const successfullInput = document.querySelector(".successfull-input");

// User inputs

let userCardName = document.querySelector(".card-name-input");
let userCardNumber = document.querySelector(".card-number-input");
let userExpiryMonth = document.querySelector(".expiry-month-input");
let userExpiryYear = document.querySelector(".expiry-year-input");
let userCVCNumber = document.querySelector(".cvc-input");

// Submit and continue buttons

const submitButton = document.querySelector(".confirm-details");
const continueButton = document.querySelector(".continue-btn");


function handleCardInput() {

    // Valid input flags

    let validatedCardName = false;
    let validatedCardNumber = false;
    let validatedCardExpiry = false;
    let validatedCVCNumber = false;

    // Handle card name validation

    const cardNameRegex = new RegExp(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm);
    let userNameInput = userCardName.value;
    const nameError = userCardName.nextElementSibling;

    if(!userNameInput.match(cardNameRegex)) {
        nameError.classList.add('active');
    } else {
        nameError.classList.remove('active');
        updatedCardName.innerHTML = userNameInput;
        validatedCardName = true;
    }

    // Handle card number validation

    const cardNumberRegex = new RegExp(/^(\d{4}[- ]){3}\d{4}|\d{16}$/);
    let userCardNumberInput = userCardNumber.value;
    const numberError = userCardNumber.nextElementSibling;

    if(!userCardNumberInput.match(cardNumberRegex)) {
        numberError.classList.add('active');
    }

    if(userCardNumberInput.match(cardNumberRegex) && userCardNumberInput.length === 16) {
        let result = [...userCardNumberInput].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim();
        updatedCardNumber.innerHTML = result;
        numberError.classList.remove('active');
        validatedCardNumber = true;
    }

    if(userCardNumberInput.match(cardNumberRegex) && userCardNumberInput.includes('-')) {
        let result = userCardNumberInput.replaceAll("-", " ");
        updatedCardNumber.innerHTML = result;
        numberError.classList.remove('active');
        validatedCardNumber = true;
    }

    // Handle card expiry date validation

    let expiryMonthInput = userExpiryMonth.value;
    let expiryYearInput = userExpiryYear.value;
    let validatedExpiryDate;

    const expiryDateError = userExpiryMonth.nextElementSibling;

    const expiryRegex = new RegExp(/[0-9]{2}$/);

    if(!expiryMonthInput.match(expiryRegex) || !expiryYearInput.match(expiryRegex)) {
        expiryDateError.classList.add('active');
    }

    if(expiryMonthInput.match(expiryRegex) && expiryYearInput.match(expiryRegex)) {
        expiryDateError.classList.remove('active');
        validatedExpiryDate = `${expiryMonthInput}-${expiryYearInput}`;
        updatedExpiryDate.innerHTML = validatedExpiryDate;
        validatedCardExpiry = true;
    }

    // Handle card cvc number validation

    let cvcInput = userCVCNumber.value;
    const cvcError = userCVCNumber.nextElementSibling;
    const cvcRegex = new RegExp(/[0-9]{3}$/);

    if(!cvcInput.match(cvcRegex)) {
        cvcError.classList.add('active');
    } else {
        cvcError.classList.remove('active');
        validatedCVCNumber = true;
    }

    // Display thank you page on successful input

    if(validatedCardName && validatedCardNumber && validatedCardExpiry && validatedCVCNumber) {
        console.log("All inputs are correct");
        cardInputPage.classList.remove('active');
        successfullInput.classList.add('active');
    }
}

// Refresh page after successful input

function refreshPage() {
    location.reload();
}


submitButton.addEventListener('click', handleCardInput);
continueButton.addEventListener('click', refreshPage);
