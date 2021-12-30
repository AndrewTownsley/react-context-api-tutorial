import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Context from './Context/Context';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);
