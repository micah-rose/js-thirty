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
