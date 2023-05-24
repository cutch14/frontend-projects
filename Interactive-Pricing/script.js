// Change discount text on page resize

const discountText = document.querySelector('p.discount')

function discountTextSwitch() {
    let pageWidth = window.innerWidth;
    if(pageWidth > 700) {
        discountText.innerHTML = '25% discount'
        console.log('desktop', pageWidth);
    } else {
        discountText.innerHTML = '-25%';
        console.log('mobile', pageWidth);
    }
}

window.addEventListener('resize', discountTextSwitch);
