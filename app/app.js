import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import fs from 'fs';
import _ from 'lodash';
const { remote } = require('electron')
const { Menu, MenuItem, dialog } = remote


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      save: props.save
    }

    generateMenu.call(this);
  }

  saveFile() {
    dialog.showSaveDialog({title: 'Save File'}, (filePath) => {
      if (filePath) {
        fs.writeFile(filePath + '.txt', this.state.text, (err) => {
          if (err) return console.log('ERROR => ', err);
          console.log('It\'s saved!');
        })
      }
    });
  }

  openFile() {
    dialog.showOpenDialog({properties: ['openFile']}, (filePath) => {
      console.log('File path =>', filePath)
      fs.readFile(filePath[0], 'utf8', (err, data) => {
        console.log('I GOT THE DATAS => ', data)
        if (err) throw err;
        this.setState({'text': data})
        console.log('State! =>', this.state.text)
      });
    })
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div id='mainInput' className= "col-md-offset-3 col-md-6" style={textArea} 
          onKeyUp={event => {
              this.setState({'text': event.target.textContent})
            }}
          contentEditable>{this.state.text}</div>
        </div>
      </div>
    )
  }
};


// Style
const darkBlue = '#202D3B'
const midnightBlue = '#2c3e50'
const notBlack = '#1c1c1c'
const textArea = {
  color: notBlack,
  fontFamily: "'Merriweather', sans-serif",
  fontSize: '1.1em',
  textShadow: `0px 0px 0px ${notBlack}`,
  WebkitTextFillColor: 'transparent',

  height: window.innerHeight - 80,
  width: '100%',
  marginTop: '40px',
  lineHeight: '1.7',

  WebkitAppearance: 'textArea',
  backgroundColor: 'transparent',
  outline: '0 none',
}

// Render component to DOM
ReactDOM.render(<App />, document.getElementById('app'))





// Menu generation
function generateMenu() {
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
          { label: 'Open', accelerator: "Command+O", click: this.openFile.bind(this)},
          { label: 'Save', accelerator: "Command+S", click: this.saveFile.bind(this)},
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
