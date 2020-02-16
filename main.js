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
// if date.getMonth = 1 {
//     return "January"
// }

let todaysDate =
  date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
console.log(todaysDate);

let newTD = document.getElementById("hw-date");
newTD.innerText = todaysDate;