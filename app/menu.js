const { Menu, dialog } = require('electron');
const fs = require('fs');
// import App from './App.js'


const saveFile = function() {
  // console.log(document.getElementById('mainInput').textContent)
  dialog.showSaveDialog({title: 'Save File'}, (filePath) => {
    if (filePath) {
      fs.writeFile(filePath, 'Hello Solar System', (err) => {
        if (err) return console.log('ERROR => ', err);
        console.log('It\'s saved from main process!');
      })
    }
  });
}

const generateMenu = function() {
  const newTemplate = [
      {
        label: "Application",
        submenu: [
            { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
            { type: "separator" },
            { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
        ]
      },
      {
        label: 'File',
        submenu: [
          { label: 'Save', accelerator: "Command+S", click: saveFile },
          { label: 'Save As', accelerator: "Command+Shift+S" }
        ]
      }, 
      {
        label: 'Edit',
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          { role: 'pasteandmatchstyle' },
          { role: 'delete' },
          { role: 'selectall' }
        ]
      },
      {
        label: 'View',
        submenu: [
          {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click (item, focusedWindow) {
              if (focusedWindow) focusedWindow.reload()
            }
          },
          {
            label: 'Toggle Developer Tools',
            accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
            click (item, focusedWindow) {
              if (focusedWindow) focusedWindow.webContents.toggleDevTools()
            }
          },
          { type: 'separator' },
          { role: 'resetzoom' },
          { role: 'zoomin' },
          { role: 'zoomout' },
          { type: 'separator' },
          { role: 'togglefullscreen' }
        ]
      },
      {
        role: 'window',
        submenu: [
          { role: 'minimize' },
          { role: 'close' }
        ]
      },
    ];


  const menu = Menu.buildFromTemplate(newTemplate)
  Menu.setApplicationMenu(menu)  
}



module.exports = generateMenu;


