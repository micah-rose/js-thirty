//Starter file for JavaScript 30 course challenges to get Github repo created.
const hw = "Hello World";
let newHW = document.getElementById("hw-main");
newHW.innerHTML = hw;

let date = new Date();
console.log(hw);
console.log(
  date.getMonth() + 1 + " " + date.getDate() + " " + date.getFullYear()
);

//If or Switch statement for displaying the actual month name versus the month number. 
if (date.getMonth = 1) {
    return "January"
} if (date.getMonth = 2) {
    return "February"
} if (date.getMonth = 3) {
    return "March"
} if (date.getMonth = 4) {
    return "April"
} if (date.getMonth = 5) {
    return "May"
} if (date.getMonth = 6) {
    return "June"
} if (date.getMonth = 7) {
    return "July"
} if (date.getMonth = 8) {
    return "August"
} if (date.getMonth = 9) {
    return "September"
} if (date.getMonth = 10) {
    return "October"
} if (date.getMonth = 11) {
    return "November"
} if (date.getMonth = 12) {
    return "December"
} 


let todaysDate =
  date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
console.log(todaysDate);

let newTD = document.getElementById("hw-date");
newTD.innerText = todaysDate;