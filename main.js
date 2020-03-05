//Starter file for JavaScript 30 course challenges to get Github repo created.
const hw = "Hello World";
let newHW = document.getElementById("hw-main");
newHW.innerHTML = hw;

let date = new Date();
console.log(hw);
console.log(
  date.getMonth() + 1 + " " + date.getDate() + " " + date.getFullYear()
);

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let todaysDate =
  monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
console.log(todaysDate);

const weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[date.getDay()];

let newTD = document.getElementById("hw-date");
newTD.innerText = day + ' - ' + todaysDate;

let hours = date.getHours();
let amPm;
if (hours > 12) {
    hours -= 12;
    amPm = "PM"
} else if (hours === 0) {
   hours = 12;
   amPM = "AM"
}

let minutes = date.getMinutes();
if (minutes < 10){
    minutes = "0" + date.getMinutes();
} 

let currentTime = 
hours + ":" + minutes + ' ' + amPm;
console.log(currentTime);

let newCT = document.getElementById("hw-time");
newCT.innerText = currentTime;

const signs = new Array(12);
signs[0] = "Capricorn";
signs[1] = "Aquarius";
signs[2] = "Pisces";
signs[3] = "Aries";
signs[4] = "Taurus";
signs[5] = "Gemini";
signs[6] = "Cancer";
signs[7] = "Leo";
signs[8] = "Virgo";
signs[9] = "Libra";
signs[10] = "Scorpio";
signs[11] = "Sagittarius";

function saveDate(){
    let bDay = document.getElementById("hw-bDay").value;
    const parseBday = bDay.split("-");
    console.log(parseBday[0]);

    //Now will need to store new array elements into their own
    //variables in order to pull them through the switch statement
}

//Here will be a switch statement taking in the value
//from the input tag and telling the user what their zodiac sign is.

//May need to take in the value and then parse between the month and
//day of the month to best utilize the switch statement.