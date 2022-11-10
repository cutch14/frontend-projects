const slider = document.querySelector(".slider");
const basicAmount = document.querySelector(".basic-amount");
const professionalAmount = document.querySelector(".professional-amount");
const masterAmount = document.querySelector(".master-amount");

function toggleSlider() {
    // slider.classList.toggle('selected');
    if(!slider.classList.contains('selected')) {
        slider.classList.add('selected');
        basicAmount.innerHTML = '19.99';
        professionalAmount.innerHTML = '24.99';
        masterAmount.innerHTML = '34.99';
    } else {
        slider.classList.remove('selected');
        basicAmount.innerHTML = '199.99';
        professionalAmount.innerHTML = '249.99';
        masterAmount.innerHTML = '349.99';
    }
    
};


slider.addEventListener('click', toggleSlider);