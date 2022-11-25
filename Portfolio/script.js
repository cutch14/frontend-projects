// Select inputs

const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const message = document.querySelector(".message");
const submitBtn = document.querySelector(".send");

// Error messages and icons

const nameErrorMessage = document.querySelector(".name-error-message");
const nameErrorIcon = document.querySelector(".name-error-icon");
const emailErrorMessage = document.querySelector(".email-error-message");
const emailErrorIcon = document.querySelector(".email-error-icon");

function validateContactInfo() {
    const nameRegex = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g)
    const emailRegex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
    
    let nameToCheck = nameInput.value;
    let emailToCheck = emailInput.value;

    if(!nameToCheck.match(nameRegex)) {
        nameErrorMessage.classList.add('active');
        nameErrorIcon.classList.add('active');
    } else {
        nameErrorMessage.classList.remove('active');
        nameErrorIcon.classList.remove('active');
    }

    if(!emailToCheck.match(emailRegex)) {
        emailErrorMessage.classList.add('active');
        emailErrorIcon.classList.add('active');
    } else {
        emailErrorMessage.classList.remove('active');
        emailErrorIcon.classList.remove('active');
    }
}

submitBtn.addEventListener('click', validateContactInfo);