//create onkeydown function for the keydown event
const mykeydown = (event) => {
  let message = document.getElementById("keyDownTest");
  // display the key name and code when key down
  message.innerText = `${event.key} Keycode is ${event.keyCode}`;
};

const div = document.getElementById("keyTestDiv");

div.addEventListener("keypress", function (event) {
  let message = document.getElementById("keyTestDiv");
  // present the content while key is pressing
  message.innerText = `${event.key} Pressing`;
});

div.addEventListener("keyup", function (event) {
  let message = document.getElementById("keyTestDiv");
  // return the default message when the key is up
  message.innerText = "Press me and test keyboard";
});
