const emailInput = document.querySelector(".email-input");
const enterBtn = document.querySelector(".input-btn");
const errorMessage = document.querySelector(".input-error");



function validateEmail() {
    const regex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);

    let userEmail = emailInput.value;

    if(!userEmail.match(regex)) {
        errorMessage.classList.add('active');
    } 

    if(userEmail.match(regex)) {
        errorMessage.classList.add('active');
        errorMessage.style.color = "green";
        errorMessage.innerHTML = "Thank you!!!";

        setTimeout(() => {
            errorMessage.classList.remove('active');
            emailInput.value = "";
        }, 2000)
    }
        


    
    console.log(userEmail)
}

enterBtn.addEventListener('click', validateEmail);
