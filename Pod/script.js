const emailRequest = document.querySelector(".email-btn");
const userEmail = document.querySelector("input");
const emailWarning = document.querySelector(".warning");

const regex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)


function validateEmail(e) {
    e.preventDefault();
    let email = e.target.value;
    const validEmail = email.match(regex);

    if(!validEmail) {
        emailWarning.innerHTML = "Oops! Please enter a valid email!";
        emailWarning.style.color = 'red';
    };

    if(validEmail) {
        emailWarning.innerHTML = "Accepted!";
        emailWarning.style.color = 'green';
    };
    console.log(email);

    function clearEmail() {
    if(validEmail) {
    userEmail.value = "";
    emailWarning.innerHTML = "Thank You!!!";
    }

    setTimeout(() => {
    emailWarning.innerHTML = "";
}, 2000);
}

emailRequest.addEventListener('click', clearEmail);
};



userEmail.addEventListener('keyup', validateEmail);


