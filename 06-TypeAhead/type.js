//JavaScript file for Type Ahead exercise
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  console.log(cities);
}

function numberWithCommas(x) {
  console.log(x);
}

function displayMatches() {
  console.log("We have a match");
}
