//Starter file for JavaScript 30 course challenges to get Github repo created.
const hw = "Hello World";
let newHW = document.getElementById("hw-main");
newHW.innerHTML = hw;

let date = new Date();
console.log(hw);
console.log(
  date.getMonth() + 1 + " " + date.getDate() + " " + date.getFullYear()
);

let month;

//If or Switch statement for displaying the actual month name versus the month number. 
if (date.getMonth = 1) {
    month =  "January"
} if (date.getMonth = 2) {
    month = "February"
} if (date.getMonth = 3) {
    month = "March"
} if (date.getMonth = 4) {
    month = "April"
} if (date.getMonth = 5) {
    month = "May"
} if (date.getMonth = 6) {
    month = "June"
} if (date.getMonth = 7) {
    month = "July"
} if (date.getMonth = 8) {
    month = "August"
} if (date.getMonth = 9) {
    month = "September"
} if (date.getMonth = 10) {
    month = "October"
} if (date.getMonth = 11) {
    month = "November"
} if (date.getMonth = 12) {
    month = "December"
} 


let todaysDate =
  month + " " + date.getDate() + ", " + date.getFullYear();
console.log(todaysDate);

let newTD = document.getElementById("hw-date");
newTD.innerText = todaysDate;