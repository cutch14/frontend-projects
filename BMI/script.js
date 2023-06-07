// switch metric and imperial displays

const metric = document.querySelector('.metric');
const imperial = document.querySelector('.imperial');
const metricInputs = document.querySelector('.metric-inputs');
const imperialInputs = document.querySelector('.imperial-inputs');

function isChecked() {
    if(metric.checked) {
    imperialInputs.classList.remove('active');
    metricInputs.classList.add('active');
} else {
    metricInputs.classList.remove('active');
    imperialInputs.classList.add('active');
}
}

metric.addEventListener('click', isChecked);
imperial.addEventListener('click', isChecked);

// get metric inputs

const heightCentimetres = document.querySelector('.height-cm');
const weightKilograms = document.querySelector('.weight-kg');

// get imperial inputs

const heightFeet = document.querySelector('.height-ft');
const heightInches = document.querySelector('.height-inch');
const weightStones = document.querySelector('.weight-st');
const weightPounds = document.querySelector('.weight-lbs');

// bmi calculation

function BMI(height, weight) {
    let bmiResult = (weight) / (Math.pow((height / 100), 2));

    return bmiResult.toFixed(1);
};


// get bmi boxes and inputs

const bmiIntroBox = document.querySelector('.get-bmi');
const bmiResultBox = document.querySelector('.bmi-box');
const bmiNumber = document.querySelector('.bmi-number');
const bmiResultText = document.querySelector('.weight-result-text');
const bmiIdealWeight = document.querySelector('.highlight');

// calculate ideal weight ranges

function idealWeightRangeKG(height) {
    // lower ideal weight = 18.5 * height squared
    let minimumWeight = 18.5 * (Math.pow(height, 2));
    // higher ideal weight = 24.9 * height squared
    let maximumWeight = 24.9 * (Math.pow(height, 2));

    if(minimumWeight < 20) {
        return false;
    } else {
        return `${minimumWeight.toFixed(2)}kgs - ${maximumWeight.toFixed(2)}kgs`;
    };
};

function idealWeightRangeStLbs(height) {
    // convert inches to metres
    let inchesToMetres = height * 0.0254;
    
    // lower ideal weight = 18.5 * height squared
    let minimumWeightKG = 18.5 * (Math.pow(inchesToMetres, 2));
    // higher ideal weight = 24.9 * height squared
    let maximumWeightKG = 24.9 * (Math.pow(inchesToMetres, 2));
    // convert min weight to lbs
    let minimumWeightLbs = minimumWeightKG * 2.2;
    // convert max weight to lbs
    let maximumWeightLbs = maximumWeightKG * 2.2;
    // convert min to st & lbs
    let minimumWeightSt = minimumWeightLbs / 14;
    let minimumLbsRemaining = minimumWeightLbs % 14;
    // convert max to st & lbs
    let maximumWeightSt = maximumWeightLbs / 14;
    let maximumLbsRemaining = maximumWeightLbs % 14;

    if(minimumWeightLbs < 20) {
        return false;
    } else {
        return `${minimumWeightSt.toFixed(0)}st ${minimumLbsRemaining.toFixed(0)}lbs 
        - ${maximumWeightSt.toFixed(0)}st 
        ${maximumLbsRemaining.toFixed(0)}${maximumLbsRemaining.toFixed(0) == 1 ? "lb" : "lbs"}`;
    };
};

// update bmi displays

function displayBMIBox(bmi) {
    if(bmi > 0) {
        bmiIntroBox.classList.remove('active');
        bmiResultBox.classList.add('active');
    }

    if(bmi < 5 || bmi > 50) {
        bmiNumber.innerHTML = "--";
    } else {
        bmiNumber.innerHTML = bmi;
    }

    if(bmi < 18.5) {
        bmiResultText.innerHTML = "underweight";
    };

    if(bmi > 18.5 && bmi <= 24.9) {
        bmiResultText.innerHTML = "a healthy weight";
    };

    if(bmi > 24.9 && bmi <= 29.9) {
        bmiResultText.innerHTML = "overweight";
    };

    if(bmi > 29.9) {
        bmiResultText.innerHTML = "obese";
    };
};


// handle input values and bmi calculation

function handleInputs() {

    let bmiNumber = "";

    // metric

    let heightCentimetresValue = heightCentimetres.value;
    let weightKilogramsValue = weightKilograms.value;

    // imperial

    let heightFeetValue = heightFeet.value;
    let heightInchesValue = heightInches.value;
    let weightStonesValue = weightStones.value;
    let weightPoundsValue = weightPounds.value;

    if(metricInputs.classList.contains('active')) {
        bmiNumber = BMI(heightCentimetresValue, weightKilogramsValue);
    };

    if(imperialInputs.classList.contains('active')) {
        let totalInches = ((heightFeetValue * 12) + Number(heightInchesValue));
        let totalLbs = ((weightStonesValue * 14) + Number(weightPoundsValue));

        let totalCentimetres = totalInches * 2.54;
        let totalKgs = totalLbs * 0.45359237;
        
        bmiNumber = BMI(totalCentimetres, totalKgs);
    };

    // total inches to feed into ideal weight range function
    let totalInches = ((heightFeetValue * 12) + Number(heightInchesValue));
    let totalMetres = heightCentimetresValue / 100;

    // update bmi display text

    displayBMIBox(bmiNumber);

    // run ideal range function depending on metric or imperial
    if(metric.checked) {
        if(idealWeightRangeKG(totalMetres)) {
            bmiIdealWeight.innerHTML = (idealWeightRangeKG(totalMetres));
        };
    };

    if(imperial.checked) {
        if(idealWeightRangeStLbs(totalInches)) {
            bmiIdealWeight.innerHTML = (idealWeightRangeStLbs(totalInches));
        }; 
    };
};

// array of inputs to add event listener

const inputs = document.querySelectorAll("input[type=number]");

inputs.forEach(elem => elem.addEventListener('input', handleInputs));
