//JS file for EventCPBO exercise
const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  e.stopPropagation(); // stop bubbling!
  console.log(this);
}
