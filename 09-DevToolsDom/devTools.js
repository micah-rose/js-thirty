const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 }
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

//Different console.log usage
//Regular
console.log("hello");

//Interpolated
console.log("Hello I am a %s string!", "silly");
//Using back ticks to bring in a variable
//console.log(`Hello I am a ${var} string!`);

//Styled
console.log(
  "%c I am some great text",
  "font-size:50px; background:red; text-shadow: 10px 10px 0 blue"
);

//Warning
console.warn("OH NOOOO");

//Error
console.error("OH NOOOO");
