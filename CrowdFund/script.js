// ///////////////////////////////////////
// Pledge starting values
// ///////////////////////////////////////

// Main pledge values
const totalBackedAmount = document.querySelector('.backed-total');
const totalBackersNumber = document.querySelector('.backers-total');
// Remaining pledge values
const bambooPledgesRemaining = document.querySelector('.bamboo-left');
const blackPledgesRemaining = document.querySelector('.black-left');
const bambooModalPledgesRemaining = document.querySelector('.bamboo-pledge-left');
const blackModalPledgesRemaining = document.querySelector('.black-pledge-left');

let backedTotal = Number(localStorage.getItem('backedTotal')) || 89914;
let backersTotal = Number(localStorage.getItem('backersTotal')) || 5007;
let bambooPledgesTotal = Number(localStorage.getItem('bambooPledges')) || 101;
let blackPledgesTotal = Number(localStorage.getItem('blackPledges')) || 64;

// remove pledge options when sold out

function soldOutPledges() {
    const bambooPledgeContainerRemaining = document.querySelector('.select-box.bamboo');
    const bambooPledgeContainerRemainingModal = document.querySelector('.pledge-container.bamboo');
    const bambooPledgeContainer = document.querySelector('.pledge-container.bamboo');

    if(bambooPledgesTotal < 1) {
        bambooPledgeContainerRemaining.classList.add('sold-out');
        bambooPledgeContainerRemainingModal.classList.add('sold-out');
        bambooPledgeContainer.classList.add('sold-out');
    }

    const blackPledgeContainerRemaining = document.querySelector('.select-box.black');
    const blackPledgeContainerRemainingModal = document.querySelector('.pledge-container.black');
    const blackPledgeContainer = document.querySelector('.pledge-container.black');

    if(blackPledgesTotal < 1) {
        blackPledgeContainerRemaining.classList.add('sold-out');
        blackPledgeContainerRemainingModal.classList.add('sold-out');
        blackPledgeContainer.classList.add('sold-out');
    }
}

soldOutPledges();


localStorage.setItem('backedTotal', backedTotal.toString());
localStorage.setItem('backersTotal', backersTotal.toString());
localStorage.setItem('bambooPledges', bambooPledgesTotal.toString());
localStorage.setItem('blackPledges', blackPledgesTotal.toString());

function populateTotalsOnPageLoad() {
    let backed = Number(localStorage.getItem('backedTotal'));
    totalBackedAmount.innerHTML = `$${backed.toLocaleString()}`;
    
    let backers = Number(localStorage.getItem('backersTotal'));
    totalBackersNumber.innerHTML = `${backers.toLocaleString()}`;

    let bambooPledge = Number(localStorage.getItem('bambooPledges'));
    bambooPledgesRemaining.innerHTML = bambooPledge;
    bambooModalPledgesRemaining.innerHTML = bambooPledge;
    
    let blackPledge = Number(localStorage.getItem('blackPledges'));
    blackPledgesRemaining.innerHTML = blackPledge;
    blackModalPledgesRemaining.innerHTML = blackPledge;
}

populateTotalsOnPageLoad();

// ////////////////////
// Pledge total slider
// ////////////////////

const pledgeSlider = document.querySelector('.slider-total');

function populateSlider() {
    let sliderWidth = (backedTotal / 100000) * 100;
    setTimeout(() => {
        pledgeSlider.style.width = `${sliderWidth}%`;
    }, 500);
}

populateSlider();


// ///////////////////
// toggle bookmark
// ///////////////////

const bookmark = document.querySelector('.bookmark');
const bookmarkText = document.querySelector('.bookmark-text');

function toggleBookmarked() {
    bookmark.classList.add('selected');
    bookmarkText.innerHTML = 'Bookmarked';
};

bookmark.addEventListener('click', toggleBookmarked);

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

overlay.addEventListener("click", closeModal)


// ////////////////////////////////////
// Open and close pledge options modal
// ////////////////////////////////////

const backProject = document.querySelector('.back');
const selectionModal = document.querySelector('.selection-modal');
const closeSelectionModal = document.querySelector('.cross-img');
const selectPledgeBtns = document.querySelectorAll('.select');
const selectedPledgeAmounts = document.querySelectorAll('.selected-pledge-amount');
const selectedPledgeContinue = document.querySelectorAll('.selected-pledge-continue');
const pledgeTitle = document.querySelectorAll('.pledge-head-title');
const pledgeContainers = document.querySelectorAll('.pledge-container');

function openPledgesModalBackButton() {
    selectionModal.classList.add("active");
    overlay.classList.add('modal-selected');
    selectionModal.scrollIntoView({behavior: "smooth"});
}

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

backProject.addEventListener('click', openPledgesModalBackButton);
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

function handleNoRewardPledgeInput() {
    // grab total pledges
    let noRewardPledge = Number(localStorage.getItem('backersTotal'));
    // increase total pledges by 1
    noRewardPledge++;
    // update display on page
    totalBackersNumber.innerHTML = noRewardPledge.toLocaleString();
    // set new value in localstorage
    localStorage.setItem('backersTotal', noRewardPledge);
}

pledgeSubmitBtnNoReward.addEventListener('click', handleNoRewardPledgeInput);

function handleRewardPledgeInput(id, value, mainPledge, modalPledge) {
    if(value > 0) {
        // grab total amount pledged
    let backers = Number(localStorage.getItem('backersTotal'));
    // grab total pledges
    let totalBacked = Number(localStorage.getItem('backedTotal'));
    // grab relevant remaining pledges
    let pledge = Number(localStorage.getItem(`${id}Pledges`))
    // console.log(mainPledge, modalPledge, pledge);
    // add value to total amount pledged
    totalBacked += value;
    // update page
    totalBackedAmount.innerHTML = totalBacked.toLocaleString();
    // increase total pledges by 1
    backers++;
    // update page
    totalBackersNumber.innerHTML = backers;
    // decrease relevant remaining pledges by 1
    pledge--;
    // update page
    mainPledge.innerHTML = pledge;
    modalPledge.innerHTML = pledge;
    // set new values in local storage
    localStorage.setItem('backersTotal', backers);
    localStorage.setItem('backedTotal', totalBacked);
    localStorage.setItem(`${id}Pledges`, pledge);
    }
}

function handlePledgeInput(event) {
    // Grab relevant pledge remaining containers and pledge values
    let currentPledgeSelector = event.target.dataset.pledge;
    let currentPledgeValue = Number(event.target.previousElementSibling.value);
    let pledgeToChangeMain = document.querySelector(`.${currentPledgeSelector}-left`);
    let pledgeToChangeModal = document.querySelector(`.${currentPledgeSelector}-pledge-left`);

    pledgeToCheckValueIsGreaterThanZero = currentPledgeValue;
    handleRewardPledgeInput(currentPledgeSelector, currentPledgeValue, pledgeToChangeMain, pledgeToChangeModal);
}


pledgeSubmitBtns.forEach(elem => elem.addEventListener('click', handlePledgeInput))

// ////////////////
// Close pledge modal and display success modal
// ////////////////

const successModal = document.querySelector('.success-modal');
const pageTitleOverlay = document.querySelector('.page-title');

function handleSuccessModalDisplay() {
    setTimeout(() => {
       pledgeContainers.forEach(elem => elem.classList.remove('selected'));
        selectionModal.classList.remove("active"); 
        successModal.classList.add('active');
        pageTitleOverlay.classList.add('active');
    }, '200'); 
}

pledgeSubmitBtnNoReward.addEventListener('click', handleSuccessModalDisplay);
pledgeSubmitBtns.forEach(elem => elem.addEventListener('click', handleSuccessModalDisplay));

// ////////////////////////
// close success modal ////
// ////////////////////////

const closeSuccessModalBtn = document.querySelector('.success-btn');

function closeSuccessModalDisplay() {
    overlay.classList.remove('modal-selected');
    successModal.classList.remove('active');
    pageTitleOverlay.classList.remove('active');   
}

closeSuccessModalBtn.addEventListener('click', closeSuccessModalDisplay);
