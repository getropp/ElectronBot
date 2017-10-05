'use strict';

const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
var mainWindow = null;
var secondWindow = null;

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.setMenu(null);

  mainWindow.on('closed', function() {
    mainWindow = null;

  });
});

exports.openTheThingy = () => {
  secondWindow = new BrowserWindow({width: 400, height: 200, frame: false});
  secondWindow.loadURL('file://' + __dirname + '/settings.html');
  secondWindow.setMenu(null);

  secondWindow.on('closed', function() {
    secondWindow = null;
  });
};
