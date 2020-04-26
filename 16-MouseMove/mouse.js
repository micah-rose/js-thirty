//JS file for Mouse Move Shadow
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500; // 500px

function shadow(e) {
  console.log(e);
}

hero.addEventListener("mousemove", shadow);
