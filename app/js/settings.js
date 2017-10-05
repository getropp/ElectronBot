const remote = require('electron').remote
const main = remote.require('./notelectron.js')

var button = document.createElement("button");
button.textContent = "Close me";
button.addEventListener('click', () => {
  main.closeTheThingy();
}, false);
document.body.appendChild(button);
var button2 = null;

document.getElementById("LinkProtection").onclick = function() {
  if ( button2 === null) {
    button2 = document.createElement("button");
    button2.textContent = "Save Settings";
    button2.addEventListener('click', () => {
      main.closeTheThingy();
    }, false);
    document.body.appendChild(button2);
  }
};
