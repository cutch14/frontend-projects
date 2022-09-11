const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const chevron = document.querySelectorAll(".chevron");


function displaySibling(e) {
const selectedAnswer = this.nextElementSibling;
const selectedQuestion = this;
const selectedChevron = this.lastElementChild;

if(e.target === this && e.target.classList.contains("active")) {
    selectedQuestion.classList.remove(('active'));
    selectedAnswer.classList.remove(('active'));
    selectedChevron.classList.remove(('active'));
} else {
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

selectedQuestion.classList.toggle(('active'));
selectedAnswer.classList.toggle(('active'));
selectedChevron.classList.toggle(('active'));
}


}


questions.forEach(elem => {elem.addEventListener('click', displaySibling)});