
// let arr = [];

// const data = fetch('./data.json');

//     data.then((response) => response.json())
//         .then((data) => {
//              arr.push(data);
//         });

const financeInfo = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

  const getCurrentDay = [
    {
      0: 6
    },
    {
      1: 0
    },
    {
      2: 1
    },
    {
      3: 2
    },
    {
      4: 3
    },
    {
      5: 4
    },
    {
      6: 5
    }
  ];

// Get current day

const date = new Date();
const day = date.getDay();


const dailySpend = document.querySelectorAll('.daily-spend');
const dailyAmountColumns = document.querySelectorAll('.column');

// Populate each days spend

function populateDailySpend() {
  dailyAmountColumns.forEach((el, i) => {
    el.previousElementSibling.innerHTML = `$${financeInfo[i].amount}`;
  })
};

// Give daily spend columns height

function displayDailyAmountColumsHeights() {
    dailyAmountColumns.forEach((col, i) => {
    setTimeout(() => {
        col.style.height = `${2.87 * financeInfo[i].amount}px`;
    }, (i + 1) * 500)
});
};

// Highlight current days column

function highlightCurrentDay() {
  const today = getCurrentDay[day][day];
  currentDailyColumn = dailyAmountColumns[today];
  currentDailyColumn.style.backgroundColor = 'hsla(186, 35%, 60%, 1)';
}

// Toggle daily spend display

function toggleDailySpend(e) {
  const spendToDisplay = e.target.previousElementSibling;
  spendToDisplay.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', displayDailyAmountColumsHeights);
document.addEventListener('DOMContentLoaded', populateDailySpend);
document.addEventListener('DOMContentLoaded', highlightCurrentDay);

dailyAmountColumns.forEach(elem => {
  elem.addEventListener('click', toggleDailySpend);
})
