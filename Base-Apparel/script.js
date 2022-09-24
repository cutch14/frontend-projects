const emailInput = document.querySelector(".email-input");
const submitButton = document.querySelector(".enter-btn");
const warningIcon = document.querySelector(".warning");
const errorText = document.querySelector(".error-text");

const regex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)

function handleEmailSubmit() {
    let userEmail = emailInput.value;
    
    if(!userEmail.match(regex)) {
        warningIcon.classList.add('active');
        errorText.classList.add('active');
    } else {
        warningIcon.classList.remove('active');
        errorText.classList.remove('active');
    }
}

submitButton.addEventListener('click', handleEmailSubmit);

document.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        handleEmailSubmit();
    }
})