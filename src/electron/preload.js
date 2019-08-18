const remote = require('electron').remote;
const { ipcRenderer } = require('electron');
window.ipcRenderer = ipcRenderer;
window.remote = remote;
