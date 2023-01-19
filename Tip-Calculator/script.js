const billAmountInput = document.querySelector(".bill-amount");
const tipPercentageBtn = document.querySelectorAll(".tip-percentage > button");
const customTipBtn = document.querySelector(".custom-percentage");
const peopleNumberInput = document.querySelector(".number-people-input");
const tipAmountDisplay = document.querySelector(".tip-amount");
const totalCostDisplay = document.querySelector(".tip-total");
const errorMessage = document.querySelector(".error");
const resetBtn = document.querySelector(".reset");

let tipPercentage;
let billAmount;
let tipAmount;
let numberOfPeople;
let tipAmountPerPerson;
let billTotalPerPerson;

function populateBillAmount() {
    billAmount = Number(this.value).toFixed(2);
}

function populateTipPercentagePreset() {
    tipPercentage = Number(this.dataset.tip);
    customTipBtn.value = "";

    tipPercentageBtn.forEach(elem => elem.classList.remove('active'));
    this.classList.add('active');
}

function populateTipPercentageCustom() {
    tipPercentage = Number(this.value);
    tipPercentageBtn.forEach(elem => elem.classList.remove('active'));
}

function populateNumberOfPeople() {
    numberOfPeople = this.value;
    if(numberOfPeople < 1) {
        errorMessage.classList.add('active');
    } else {
        errorMessage.classList.remove('active');
    }
}

function calculate() {
    if(numberOfPeople > 0) {
    // Tip amount

    tipAmount = (billAmount / 100) * tipPercentage;
    tipAmountPerPerson = (tipAmount / numberOfPeople).toFixed(2);

    // Bill amount

    billTotalPerPerson = ((Number(billAmount) + Number(tipAmount)) / numberOfPeople).toFixed(2);
}

    if(tipAmountPerPerson > 0) {
        tipAmountDisplay.innerHTML = `£${tipAmountPerPerson}`; 
    };

    if(billTotalPerPerson > 0) {
        totalCostDisplay.innerHTML = `£${billTotalPerPerson}`;
    }
}
function resetPage() {
    window.location.reload();
}

billAmountInput.addEventListener('input', populateBillAmount);
billAmountInput.addEventListener('input', calculate);
tipPercentageBtn.forEach(elem => elem.addEventListener('click', populateTipPercentagePreset));
tipPercentageBtn.forEach(elem => elem.addEventListener('click', calculate));
customTipBtn.addEventListener('input', populateTipPercentageCustom);
customTipBtn.addEventListener('input', calculate);
peopleNumberInput.addEventListener('input', populateNumberOfPeople);
peopleNumberInput.addEventListener('input', calculate);
resetBtn.addEventListener('click', resetPage);