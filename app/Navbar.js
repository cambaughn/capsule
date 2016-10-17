import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const Navbar = () => {
  return (
  <div id='navbar' style={nav}>
    <span id='title' style={title}>Hello World!</span>
  </div>
  )
}

console.log('Navbar')

const nav = {
  width: '100%',
  height: '50px',
  'backgroundColor': 'blue',
  'WebkitUserSelect': 'none',
  'WebkitAppRegion': 'drag'
}

const title = {
  'color': 'black',
  'marginLeft': 'auto',
  'marginRight': 'auto',
}

export default Navbar;