import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import fs from 'fs';
import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      count: 0
    }
  }

  saveFile() {
    fs.writeFile('./saveTest', this.state.text, (err) => {
      if (err) return console.log('ERROR => ', err);
      console.log('It\'s saved!');
    })
  }

  componentDidMount() {
    document.getElementById('mainInput').focus();
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div id='mainInput' className= "col-md-offset-1 col-md-10" style={textArea} 
          onKeyUp={event => {
            this.setState({'text': event.target.textContent})
          }} 
          contentEditable></div>
        </div>
      </div>
    )
  }
};

setInterval

// Style
const textArea = {
  color: '#1c1c1c',
  height: window.innerHeight - 80,
  width: '100%',
  marginTop: '30px',
  WebkitAppearance: 'textArea',
  backgroundColor: 'transparent',
  fontSize: '1.2em',
  outline: '0 none',

}

// Render component to DOM
ReactDOM.render(<App />, document.getElementById('app'))

module.exports = App;
