const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const chevron = document.querySelectorAll(".chevron");


function displaySibling() {
const selectedAnswer = this.nextElementSibling;
const selectedQuestion = this;
const selectedChevron = this.lastElementChild;

console.log(selectedChevron)

answers.forEach(elem => {
    if(elem.classList.contains("active")) {
        elem.classList.remove("active");
    }
})

questions.forEach(elem => {
    if(elem.classList.contains("active")) {
        elem.classList.remove("active");
    }
})

chevron.forEach(elem => {
    if(elem.classList.contains("active")) {
        elem.classList.remove("active");
    }
})

selectedQuestion.classList.add(('active'));
selectedAnswer.classList.add(('active'));
selectedChevron.classList.add(('active'));
}


questions.forEach(elem => {elem.addEventListener('click', displaySibling)});