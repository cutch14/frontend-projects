const adviceNumber = document.querySelector(".advice-number");
const advice = document.querySelector(".advice");
const generateAdvice = document.querySelector(".advice-button-container");



function adviceGenerator() {
    const endpoint = "https://api.adviceslip.com/advice";

let response = fetch(endpoint);

response.then(response => response.json())
        .then(blob => {
            adviceNumber.innerHTML = `ADVICE ${blob.slip.id}`;
            advice.innerHTML = `${blob.slip.advice}`;
        });
};

generateAdvice.addEventListener('click', adviceGenerator);