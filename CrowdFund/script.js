// ///////////////////////////////////////
// Pledge starting values
// ///////////////////////////////////////

let backedTotal = 89914;
let backersTotal = 5007;
let bambooPledgesTotal = 101;
let blackPledgesTotal = 64;

localStorage.setItem('backedTotal', backedTotal.toString());
localStorage.setItem('backersTotal', backersTotal.toString());
localStorage.setItem('bambooPledges', bambooPledgesTotal.toString());
localStorage.setItem('blackPledges', blackPledgesTotal.toString());

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


// ////////////////////////////////////
// Open and close pledge options modal
// ////////////////////////////////////

const selectionModal = document.querySelector('.selection-modal');
const closeSelectionModal = document.querySelector('.cross-img');
const selectPledgeBtns = document.querySelectorAll('.select');
const selectedPledgeAmounts = document.querySelectorAll('.selected-pledge-amount');
const selectedPledgeContinue = document.querySelectorAll('.selected-pledge-continue');
const pledgeTitle = document.querySelectorAll('.pledge-head-title');
const pledgeContainers = document.querySelectorAll('.pledge-container');

function openPledgesModal(e) {
    selectionModal.classList.add("active");
    overlay.classList.add('modal-selected');

    let pledgeDataOption = e.target.dataset.option;
    const selectedPledgeDropdown = document.querySelectorAll(`.pledge-container.${pledgeDataOption}`);
    selectedPledgeDropdown[0].classList.add('selected');
    selectionModal.scrollIntoView({behavior: "smooth"});
}

function closeSelectionModalBox() {
    selectionModal.classList.remove("active");
    overlay.classList.remove('modal-selected');
  
}

function closeSelectionBoxModalOnClickOutside(event) {
    const isOpen = !event.target.closest('.inner');

    if(isOpen) {
        selectionModal.classList.remove("active");
        overlay.classList.remove('modal-selected');
    }
}

function selectPledgeByTitle(e) {
    pledgeContainers.forEach(elem => elem.classList.remove('selected'));
    let pledgeDataPledge = e.target.dataset.pledge;
    const selectedPledgeDropdown = document.querySelectorAll(`.pledge-container.${pledgeDataPledge}`);
    selectedPledgeDropdown[0].classList.add('selected');
}

selectPledgeBtns.forEach(elem => elem.addEventListener('click', openPledgesModal));
closeSelectionModal.addEventListener('click', closeSelectionModalBox);
overlay.addEventListener('click', closeSelectionBoxModalOnClickOutside);
pledgeTitle.forEach(elem => elem.addEventListener('click', selectPledgeByTitle));


// ////////////////////////////////////////////
// Update pledges totals //////////////////////
// ////////////////////////////////////////////

// Pledge input btns
const pledgeSubmitBtnNoReward = document.querySelector('.selected-pledge-continue-no-reward');
const pledgeSubmitBtns = document.querySelectorAll('.selected-pledge-continue');
// Main pledge values
const totalBackedAmount = document.querySelector('.backed-total');
const totalBackersNumber = document.querySelector('.backers-total');
// Remaining pledge values
const bambooPledgesRemaining = document.querySelector('.bamboo-left');
const blackPledgesRemaining = document.querySelector('.black-left');
const bambooModalPledgesRemaining = document.querySelector('.bamboo-pledge-left');
const blackModalPledgesRemaining = document.querySelector('.black-pledge-left');

function handleNoRewardPledgeInput() {
    
}

function handlePledgeInput(event) {
    // Grab relevant pledge remaining containers and pledge values
    let currentPledgeSelector = event.target.dataset.pledge;
    let currentPledgeValue = event.target.previousElementSibling.value;
    let pledgeToChangeMain = document.querySelector(`.${currentPledgeSelector}-left`);
    let pledgeToChangeModal = document.querySelector(`.${currentPledgeSelector}-pledge-left`);
    console.log(currentPledgeSelector, currentPledgeValue, pledgeToChangeMain, pledgeToChangeModal);
}

pledgeSubmitBtnNoReward.addEventListener('click', handleNoRewardPledgeInput);
pledgeSubmitBtns.forEach(elem => elem.addEventListener('click', handlePledgeInput))

// ////////////////
// Close pledge modal and display success modal
// ////////////////

const successModal = document.querySelector('.success-modal');