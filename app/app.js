import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

const App = () => {
  return (
  <div>
    <div className='container'>
      <h1>Hello World!</h1>
    </div>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

console.log('Working')