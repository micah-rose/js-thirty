//Starter file for JavaScript 30 course challenges to get Github repo created.
const hw = "Hello World";
let newHW = document.getElementById("hw-main");
newHW.innerHTML = hw;

let date = new Date();
console.log(hw);
console.log(
  date.getMonth() + 1 + " " + date.getDate() + " " + date.getFullYear()
);

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let todaysDate =
  monthNames[date.getMonth()] +
  " " +
  date.getDate() +
  ", " +
  date.getFullYear();
console.log(todaysDate);

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[date.getDay()];

let newTD = document.getElementById("hw-date");
newTD.innerText = day + " - " + todaysDate;

let hours = date.getHours();
let amPm;
if (hours > 12) {
  hours -= 12;
  amPm = "PM";
} else if (hours === 0) {
  hours = 12;
  amPM = "AM";
}

let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = "0" + date.getMinutes();
}

let currentTime = hours + ":" + minutes + " " + amPm;
console.log(currentTime);

let newCT = document.getElementById("hw-time");
newCT.innerText = currentTime;

function saveDate() {
  let bDay = document.getElementById("hw-bDay").value;
  const parseBday = bDay.split("-");
  console.log(parseBday[0]);

  let month = parseBday[0];
  let day = parseBday[1];

  console.log("Month: " + month);
  console.log("Day: " + day);

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

  switch (month) {
    case "01":
      if (day < 20) alert("Your zodiac sign is: " + signs[0]);
      else alert("Your zodiac sign is: " + signs[1]);
      break;

    case "02":
      if (day < 19) alert("Your zodiac sign is: " + signs[1]);
      else alert("Your zodiac sign is: " + signs[2]);
      break;

    case "03":
      if (day < 21) alert("Your zodiac sign is: " + zod_signs[2]);
      else alert("Your zodiac sign is: " + zod_signs[3]);
      break;

    case "04":
      if (day < 20) alert("Your zodiac sign is: " + signs[3]);
      else alert("Your zodiac sign is: " + signs[4]);
      break;

    case "05":
      if (day < 21) alert("Your zodiac sign is: " + signs[4]);
      else alert("Your zodiac sign is: " + signs[5]);
      break;

    case "06":
      if (day < 21) alert("Your zodiac sign is: " + signs[5]);
      else alert("Your zodiac sign is: " + signs[6]);
      break;

    case "07":
      if (day < 23) alert("Your zodiac sign is: " + signs[6]);
      else alert("Your zodiac sign is: " + signs[7]);
      break;

    case "08":
      if (day < 23) alert("Your zodiac sign is: " + signs[7]);
      else alert("Your zodiac sign is: " + signs[8]);
      break;

    case "09":
      if (day < 23) alert("Your zodiac sign is: " + signs[8]);
      else alert("Your zodiac sign is: " + signs[9]);
      break;

    case "10":
      if (day < 23) alert("Your zodiac sign is: " + signs[9]);
      else alert("Your zodiac sign is: " + signs[10]);
      break;

    case "11":
      if (day < 22) alert("Your zodiac sign is: " + signs[10]);
      else alert("Your zodiac sign is: " + signs[11]);
      break;

    case "12":
      if (day < 22) alert("Your zodiac sign is: " + signs[11]);
      else alert("Your zodiac sign is: " + signs[0]);
      break;
  }
}

function randNum() {
  let userNum = document.getElementById("hw-num").value;
  let compNum = Math.ceil(Math.random() * 10);
  console.log(compNum);

  if (userNum === "") {
    alert("You didn't enter anything. Please pick a number between 1 and 10.");
  } else if (userNum == compNum) {
    alert("You guessed the right number!!");
} else if (userNum > compNum && userNum < 10) {
    alert("Too high. Please try again.");
} else if (userNum < compNum) {
    alert("Too low. Please try again.");
  } else if (userNum > 10) {
    alert("Please pick a new number less than 10.");
  } else {
    alert("Please pick a new number. What you entered is not valid.");
  }
}
