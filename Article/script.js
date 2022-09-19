const shareIcon = document.querySelector(".share-icon1-container");
const shareIconImage = document.querySelector(".share-icon");
const socials = document.querySelector(".socials");


function toggleDisplayShare(e) {
    if(e.target === shareIconImage || e.target === shareIcon) {
        socials.style.display = "flex";
        shareIcon.classList.add("active");
        shareIconImage.classList.add("active");
    } else {
        socials.style.display = "none";
        shareIcon.classList.remove("active");
        shareIconImage.classList.remove("active");
    }
}

document.addEventListener("click", toggleDisplayShare);