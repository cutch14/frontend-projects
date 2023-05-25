// Change discount text on page resize

const discountText = document.querySelector('p.discount')

function discountTextSwitch() {
    let pageWidth = window.innerWidth;
    if(pageWidth > 700) {
        discountText.innerHTML = '25% discount'
    } else {
        discountText.innerHTML = '-25%';
    }
}

window.addEventListener('resize', discountTextSwitch);

// Switch yearly discount

const discountSwitch = document.querySelector('.switch-billing-box');
let discountValue = 1.25;

function switchDiscountElement() {
    discountSwitch.classList.toggle('selected');
    discountValue = discountValue === 1 ? 1.25 : 1;
};

discountSwitch.addEventListener('click', switchDiscountElement);

// Handle range value

const rangeInput = document.querySelector('input[type=range]');
const pageViews = document.querySelector('.page-views');
const monthlyPrice = document.querySelector('.price');

function calculateMonthlyPrice(views) {
    let pricePerMonth;

    if(views <= 1000000) {
        pricePerMonth = 36;
    };
    if(views <= 500000) {
        pricePerMonth = 24;
    };
    if(views <= 100000) {
        pricePerMonth = 16;
    };
    if(views <= 50000) {
        pricePerMonth = 12;
    };
    if(views <= 10000) {
        pricePerMonth = 8;
    };
    
    return pricePerMonth;
}

function updatePrice() {
    // get monthly views
    let rangeValue = rangeInput.value * 10000;

    // get monthly price
    let logPrice = calculateMonthlyPrice(rangeValue) * discountValue;

    // update page
    pageViews.innerHTML = `${rangeValue.toLocaleString()} pageviews`;
    monthlyPrice.innerHTML = `$${logPrice}`;

    console.log(logPrice);
};

rangeInput.addEventListener('input', updatePrice);
discountSwitch.addEventListener('click', updatePrice);