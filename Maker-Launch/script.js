const email = document.querySelector(".email");
const errorMessage = document.querySelector(".error");
const inputBtn = document.querySelector(".email-btn");

function checkValidEmail() {
    let inputtedEmail = email.value;
    const emailRegexp = new RegExp(/^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/);

    let validEmail = inputtedEmail.match(emailRegexp);
    if(!validEmail) {
        errorMessage.classList.add('active');
        email.classList.add('active');
    } else {
        errorMessage.classList.remove('active');
        email.classList.remove('active');
        email.value = "";
    }
}
inputBtn.addEventListener('click', checkValidEmail);