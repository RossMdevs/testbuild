 //handle setupevents as quickly as possible
 const setupEvents = require('./installers/setupEvents')
 if (setupEvents.handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
 }

const {app, BrowserWindow} = require('electron')
  
  let win
  
  function createWindow () {
    win = new BrowserWindow({width: 800, height: 600, frame: false})
  
   // Replace this with win.loadFile or win.loadURL
    win.loadFile('index.html')
  
  
    win.on('closed', () => {
      win = null
    })
  }
  
  app.on('ready', createWindow)
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })