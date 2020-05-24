//Variables for Speech Synthesis
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector('[name="text"]').value;

function setVoice() {
  console.log("setVoice");
}

function toggle(startOver = true) {
  console.log("start over");
}

function setOption() {
  console.log("option");
}
