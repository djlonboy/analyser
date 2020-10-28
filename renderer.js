'use strict'

const { ipcRenderer } = require('electron')

document.getElementById("Trigger").addEventListener("click", () => {
  ipcRenderer.send("trigger_button_clicked");
})

ipcRenderer.on("message", (event, content) => {
  document.getElementById("Result").innerText = content;
})
