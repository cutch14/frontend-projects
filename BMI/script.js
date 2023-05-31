const metric = document.querySelector('.metric');
const imperial = document.querySelector('.imperial');

function isChecked() {
    if(metric.checked) {
    console.log('metric')
} else {
    console.log('imperial')
}
}

metric.addEventListener('click', isChecked);
imperial.addEventListener('click', isChecked);

