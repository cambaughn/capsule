import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

const App = () => {
  return (
  <div>
    <div className='container'>
      <div id='textArea' style={textArea} contentEditable></div>
    </div>
  </div>
  )
}

const textArea = {
  color: '#1c1c1c',
  height: window.innerHeight - 80,
  width: '90%',
  marginTop: '30px',
  WebkitAppearance: 'textArea',
  backgroundColor: 'transparent',
  // outline: '0 none',
}

ReactDOM.render(<App />, document.getElementById('app'))

console.log('Working')


