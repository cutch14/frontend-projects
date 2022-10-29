
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
  ]

const dailyAmountColumns = document.querySelectorAll('.column');


function displayDailyAmountColumsHeights() {
    dailyAmountColumns.forEach((col, i) => {
    setTimeout(() => {
        col.style.height = `${(150 / 100) * financeInfo[i].amount}px`;
    console.log(col.clientHeight);
    }, i * 1000)
});
};


document.addEventListener('DOMContentLoaded', displayDailyAmountColumsHeights);
