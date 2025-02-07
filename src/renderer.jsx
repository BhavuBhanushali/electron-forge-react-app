// src/renderer.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import imag from './assets/passport-bhb.jpg'

function App() {
  return (
    <div>
      <h1>Hello from React in Electron!</h1>
      <img srcSet={imag} style={{ height: 100, width: 100}} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
