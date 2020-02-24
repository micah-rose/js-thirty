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

let currentTime = 
date.getHours() + ":" + date.getMinutes();
console.log(currentTime);

let newCT = document.getElementById("hw-time");
newCT.innerText = currentTime;