const ratings = document.querySelectorAll(".inputs");
const submittedRating = document.querySelector(".rating");
const submitContainer = document.querySelector(".rating-submit-container");
const submitButton = document.querySelector(".submit-btn");
const ratingsContainer = document.querySelector(".submitted-state-container");
const rateAgain = document.querySelector(".rate-again");

let rating;

function handleRatingsSelection(event) {
    ratings.forEach(elem => elem.classList.remove("selected"));

    event.target.classList.add("selected");

    rating = event.target.value;
    submittedRating.innerHTML = `You selected ${rating} out of 5 Thank you!`;
}

function submitRating() {
    submitContainer.style.visibility = 'hidden';
    ratingsContainer.style.visibility = 'visible';
}

function refreshRating() {
    ratings.forEach(elem => elem.classList.remove("selected"));

    ratingsContainer.style.visibility = 'hidden';
    submitContainer.style.visibility = 'visible';
}



submitButton.addEventListener('click', submitRating);
ratings.forEach(elem => elem.addEventListener('click', handleRatingsSelection));
rateAgain.addEventListener('click', refreshRating);
