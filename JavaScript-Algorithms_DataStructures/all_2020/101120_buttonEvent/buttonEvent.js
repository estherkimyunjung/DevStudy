document.getElementById("testOne").addEventListener('click', displayDate);
document.getElementById("Reset").addEventListener('click', displayReset);

const reset = document.getElementById("Reset").innerHTML
function displayDate() {
  document.getElementById("text").innerHTML = Date()
  document.getElementById("Reset").innerText = 'Click to reset'
}

function displayReset() {
  document.getElementById("text").innerText = 'Thank You'
  document.getElementById("Reset").innerText = reset
}