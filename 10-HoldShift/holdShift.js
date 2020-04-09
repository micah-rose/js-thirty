const checkboxes = document.querySelectorAll('.inbox input[ type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  if (e.shiftKey && this.checked) {
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
