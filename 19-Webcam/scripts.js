const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  console.log("Video");
}

function paintToCanvas() {
  console.log("Painted");
}

function takePhoto() {
  console.log("Photo");
}

function redEffect(pixels) {
  return pixels;
}

function rgbSplit(pixels) {
  return pixels;
}

function greenScreen(pixels) {
  return pixels;
}
