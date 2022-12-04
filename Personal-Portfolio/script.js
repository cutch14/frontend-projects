
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

projectImages.forEach(elem => elem.addEventListener('mouseover', imageOpacityHover));
projectImages.forEach(elem => elem.addEventListener('mouseout', imageOpacityOut));

viewProject.forEach(elem => elem.addEventListener('mouseover', handleProjectDisplay));
viewCode.forEach(elem => elem.addEventListener('mouseover', handleProjectDisplay));

viewProject.forEach(elem => elem.addEventListener('mouseout', removeProjectDisplay));
viewCode.forEach(elem => elem.addEventListener('mouseout', removeProjectDisplay));



