const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
  
// for(property of data) {
//     if(property.title === "Exercise") {
//         console.log(property);
//     }
// }

// data.forEach((data) => {
//   if(data.title === "Self Care") {
//     console.log(data.timeframes)
//     console.log(`Daily - current ${data.timeframes.daily.current} : previous ${data.timeframes.daily.previous}`)
//   }
// })


const timescaleSwitch = document.querySelectorAll(".timescale > p");
const timeContainers = document.querySelectorAll(".time-container");

// Object for updating last day/week/month

const updatedTimePeriod = {
  "daily": "Yesterday -",
  "weekly": "Last Week -",
  "monthly": "Last Month -"
}

// Update time scale

let timescaleOption = 'daily';
let currentTimescale = updatedTimePeriod[timescaleOption];

timeContainers.forEach(elem => {
  // Grab element title for filtering data, current & prev elements to update

  let dataTitle = elem.dataset.title;
  let timeUseToUpdate = elem.firstElementChild;
  let previousTimeUseToUpdate = elem.lastElementChild;
  
  // Filter data for relevent section

  let filteredData = data.filter(d => {
    return d.title === dataTitle
  })

  // Update time elements

  let currentTime = filteredData[0]["timeframes"][timescaleOption].current;
  let previousTime = filteredData[0]["timeframes"][timescaleOption].previous;

  let currentHourSuffix = currentTime === 1 ? "hr" : "hrs";
  let previousHourSuffix = previousTime === 1 ? "hr" : "hrs";

  timeUseToUpdate.innerHTML = `${currentTime} <span>${currentHourSuffix}</span>`;
  previousTimeUseToUpdate.innerHTML = `${currentTimescale} ${previousTime}${previousHourSuffix}`;
})