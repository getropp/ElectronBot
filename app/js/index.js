const remote = require('electron').remote
const main = remote.require('./electron.js')

var button = document.createElement("button");
button.textContent = "Open settings";
button.addEventListener('click', () => {
  main.openTheThingy();
  var audio = new Audio(__dirname + "/PikminShipPart.mp3");
  audio.play();
}, false);
document.body.appendChild(button);
