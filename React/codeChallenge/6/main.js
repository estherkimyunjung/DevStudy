function mykeydown(event) {
  let message = document.getElementById("keyDownTest");
  message.innerText = `${event.key} Keycode is ${event.keyCode}`;
}

const div = document.getElementById("keyTestDiv");

div.addEventListener("keypress", function (event) {
  let message = document.getElementById("keyTestDiv");
  message.innerText = `${event.key} Pressing`;
});

div.addEventListener("keyup", function (event) {
  let message = document.getElementById("keyTestDiv");
  message.innerText = "Press me and test keyboard";
});
