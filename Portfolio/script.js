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

// Handle project image hover

const viewProject = document.querySelectorAll(".view");
const viewCode = document.querySelectorAll(".code");
const projectImages = document.querySelectorAll(".project-img");

function handleProjectDisplay(e) {
    let parentImage = e.target.parentElement.parentElement.firstElementChild;
    
    if(e.target.classList.contains('view') || e.target.classList.contains('code')) {
        parentImage.style.opacity = "0.4";
        parentImage.style.WebkitTransition = 'opacity 0.2s';
    } 
}

function removeProjectDisplay(e) {
    let parentImage = e.target.parentElement.parentElement.firstElementChild;
    parentImage.style.opacity = "1";
    parentImage.style.WebkitTransition = 'opacity 0.2s';
}

function imageOpacityHover(e) {
    if(e.target.offsetWidth >= 445) {
        e.target.style.opacity = "0.4";
        e.target.style.WebkitTransition = 'opacity 0.2s';
    }
}

function imageOpacityOut(e) {
    e.target.style.opacity = "1";
    e.target.style.WebkitTransition = 'opacity 0.2s';
}

submitBtn.addEventListener('click', validateContactInfo);

projectImages.forEach(elem => elem.addEventListener('mouseover', imageOpacityHover));
projectImages.forEach(elem => elem.addEventListener('mouseout', imageOpacityOut));

viewProject.forEach(elem => elem.addEventListener('mouseover', handleProjectDisplay));
viewCode.forEach(elem => elem.addEventListener('mouseover', handleProjectDisplay));

viewProject.forEach(elem => elem.addEventListener('mouseout', removeProjectDisplay));
viewCode.forEach(elem => elem.addEventListener('mouseout', removeProjectDisplay));



