const carouselContainer = document.querySelector('.image-carousel');
const images = document.querySelectorAll('.slide');
const backArrow = document.querySelector('.back-arrow-container');
const forwardArrow = document.querySelector('.forward-arrow-container');

// Position images in carousel

images.forEach((slide, index) => {
    slide.style.left = `${slide.width * index}px`;
});

let counter = 0;

// Set counter value

function counterUp() {
    counter++;
};

function counterDown() {
    counter--;
};

backArrow.addEventListener('click', counterDown);
forwardArrow.addEventListener('click', counterUp);

// Slide images on arrow click

function carousel() {
    images.forEach(function(image) {
    image.style.transform = `translateX(-${image.width * counter}px)`;
})

if(counter === 4) {
    forwardArrow.style.visibility = 'hidden';
} else {
    forwardArrow.style.visibility = 'visible';
}

if(counter === 0) {
    backArrow.style.visibility = 'hidden';
} else {
    backArrow.style.visibility = 'visible';
}
};


backArrow.addEventListener('click', carousel);
forwardArrow.addEventListener('click', carousel);