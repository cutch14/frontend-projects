// inputs

const dayInput = document.querySelector('.day');
const monthInput = document.querySelector('.month');
const yearInput = document.querySelector('.year');

// grouped error messages

const errorMessageGroup = document.querySelectorAll('.error');

// individual error messages
// validity errors

const invalidDayError = document.querySelector('.day-error');
const invalidMonthError = document.querySelector('.month-error');
const invalidYearError = document.querySelector('.year-error');

// empty field errors

const emptyDayError = document.querySelector('.field-day');
const emptyMonthError = document.querySelector('.field-month');
const emptyYearError = document.querySelector('.field-year');

// invalid date error

const invalidDateError = document.querySelector('.valid-date-error');

// age displays

const ageYears = document.querySelector('.years-figure');
const ageMonths = document.querySelector('.months-figure');
const ageDays = document.querySelector('.days-figure');

// grab get results button

const getResults = document.querySelector('.start-button');

// check valid date

function getInputtedDate() {
    let userDate = "";

    // grab inputted dates

    let day = dayInput.value;
    let month = monthInput.value;
    let year = yearInput.value;

    userDate = `'${month}-${day}-${year}'`;

    return userDate;
}

function calculateAge() {

    // remove error messages

    invalidDateError.classList.remove('active');

    let date = getInputtedDate();
    
    if(new Date(date) == 'Invalid Date') {
        console.log('wrong date');
        invalidDateError.classList.add('active');
    } else {
        console.log(date);
        // get inputted date and current date

        const start = new Date(date);
        const now = new Date();

        // calculate difference between dates in months and years

        const yearsDiff = now.getFullYear() - start.getFullYear();
        const monthsDiff = now.getMonth() - start.getMonth();

        // calculate the number of remaining months

        const monthsPassed = yearsDiff * 12 - monthsDiff;
        const monthsRemaining = 12 - (monthsPassed % 12);

        // calculate the number of years passed

        const yearsPassed = Math.floor((monthsPassed / 12) - 1);

        // calculate the days passed and remaining

        const timeDiff = now - start;
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const daysPassed = timeDiff / millisecondsPerDay;
        const daysRemaining = Math.floor(daysPassed % 30.436875);

        // console.log(yearsPassed, monthsRemaining, daysRemaining);

        // populate displays

        ageYears.innerHTML = yearsPassed;
        ageMonths.innerHTML = monthsRemaining;
        ageDays.innerHTML = daysRemaining;
    }

 
}



getResults.addEventListener('click', calculateAge);
