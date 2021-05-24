'use strict'

const { ipcRenderer } = require('electron')

// Send a message to Main.js when the Trigger button is clicked
document.getElementById("Trigger").addEventListener("click", () => {
  ipcRenderer.send("trigger_button_clicked");
})

// Recieve message back from Main.js
ipcRenderer.on("message", (event, content) => {
  document.getElementById("Result").innerText = content;
})
