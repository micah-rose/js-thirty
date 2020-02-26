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

let newTD = document.getElementById("hw-date");
newTD.innerText = todaysDate;


let hours = date.getHours();
if (hours > 12) {
    hours -= 12;
} else if (hours === 0) {
   hours = 12;
}

let currentTime = 
hours + ":" + date.getMinutes();
console.log(currentTime);

let newCT = document.getElementById("hw-time");
newCT.innerText = currentTime;

const weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let day = weekday[date.getDay()];
console.log(weekday[date.getDay()]);

let newDay = document.getElementById("hw-day");

if(day = "Sunday"){
    newDay.innerText = "Sunday";
} if(day = "Monday"){
    newDay.innerText = "Monday";
} if(day = "Tuesday"){
    newDay.innerText = "Tuesday";
} if(day = "Wednesday"){
    newDay.innerText = "Wednesday";
} if(day = "Thursday"){
    newDay.innerText = "Thursday";
} if(day = "Friday"){
    newDay.innerText = "Friday";
} if(day = "Saturday"){
    newDay.innerText = "Saturday";
}

