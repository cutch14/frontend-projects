const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".surname");
const emailAddress = document.querySelector(".email");
const userPassword = document.querySelector(".password");
const submitButton = document.querySelector(".trial-btn");

const regex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)


function handleFirstNameInput() {
    const firstNameErrorIcon = firstName.nextElementSibling;
    const firstNameErrorMessage = firstNameErrorIcon.nextElementSibling;
    const firstNameParent = firstNameErrorIcon.parentElement;

    if(!firstName.value) {
        firstName.classList.add("error");
        firstNameErrorIcon.classList.add("active");
        firstNameErrorMessage.classList.add("active");
        firstNameParent.classList.add("error");
    } else {
        firstName.classList.remove("error");
        firstNameErrorIcon.classList.remove("active");
        firstNameErrorMessage.classList.remove("active");
        firstNameParent.classList.remove("error");
    }
}

function handleSurnameInput() {
    const lastNameErrorIcon = lastName.nextElementSibling;
    const lastNameErrorMessage = lastNameErrorIcon.nextElementSibling;
    const lastNameParent = lastNameErrorIcon.parentElement;

    if(!lastName.value) {
        lastName.classList.add("error");
        lastNameErrorIcon.classList.add("active");
        lastNameErrorMessage.classList.add("active");
        lastNameParent.classList.add("error");
    } else {
        lastName.classList.remove("error");
        lastNameErrorIcon.classList.remove("active");
        lastNameErrorMessage.classList.remove("active");
        lastNameParent.classList.remove("error");
    }
}

function handleEmailInput() {
    const emailErrorIcon = emailAddress.nextElementSibling;
    const emailErrorMessage = emailErrorIcon.nextElementSibling;
    const emailParent = emailErrorIcon.parentElement;
    
    if(!emailAddress.value.match(regex)) {
        emailAddress.classList.add("error");
        emailErrorIcon.classList.add("active");
        emailErrorMessage.classList.add("active");
        emailParent.classList.add("error");
    } else {
        emailAddress.classList.remove("error");
        emailErrorIcon.classList.remove("active");
        emailErrorMessage.classList.remove("active");
        emailParent.classList.remove("error");
    }
}

function handlePasswordInput() {
    const passwordErrorIcon = userPassword.nextElementSibling;
    const passwordErrorMessage = passwordErrorIcon.nextElementSibling;
    const passwordParent = passwordErrorIcon.parentElement;

    if(!userPassword.value) {
        userPassword.classList.add("error");
        passwordErrorIcon.classList.add("active");
        passwordErrorMessage.classList.add("active");
        passwordParent.classList.add("error");
    } else {
        userPassword.classList.remove("error");
        passwordErrorIcon.classList.remove("active");
        passwordErrorMessage.classList.remove("active");
        passwordParent.classList.remove("error");
    }
}

function resetForm() {
    if(firstName.value && lastName.value && emailAddress.value.match(regex) && userPassword.value) {
        firstName.value = "";
        lastName.value = "";
        emailAddress.value = "";
        userPassword.value = "";
    }
}

submitButton.addEventListener('click', handleFirstNameInput);
submitButton.addEventListener('click', handleSurnameInput);
submitButton.addEventListener('click', handleEmailInput);
submitButton.addEventListener('click', handlePasswordInput);
submitButton.addEventListener('click', resetForm);