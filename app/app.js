import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import fs from 'fs';
import _ from 'lodash';

let appText = '';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      save: props.save
    }
  }

  saveFile() {
    fs.writeFile('./saveTest', this.state.text, (err) => {
      if (err) return console.log('ERROR => ', err);
      console.log('It\'s saved!');
    })
  }

  // componentDidMount() {
  //   // document.getElementById('mainInput').focus();
  //   if (this.state.save) {
  //     this.saveFile();
  //     // console.log('SAVE PROP: ', this.state.save)
  //     this.setState({'save': false})
  //     console.log('SAVE PROP: ', this.state.save)
  //   }
  // }

  componentWillUpdate() {
    console.log(this.state.text)
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div id='mainInput' className= "col-md-offset-2 col-md-8" style={textArea} 
          onKeyUp={event => {
              this.setState({'text': event.target.textContent})
            }} 
          value={this.state.text}
          contentEditable></div>
        </div>
      </div>
    )
  }
};

setInterval

// Style
const textArea = {
  color: '#202D3B',
  fontFamily: "'Merriweather', sans-serif",
  fontSize: '1.1em',
  textShadow: '0px 0px 0px #202D3B',
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
ReactDOM.render(<App save='false' />, document.getElementById('app'))

export default App;








