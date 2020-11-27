import React from 'react';
import ReactDOM from 'react-dom';

// import { App } from './App';
import { CounterMemorizeApp } from './components/memo/CounterMemorizeApp';

ReactDOM.render(
  <React.StrictMode>
    <CounterMemorizeApp />
  </React.StrictMode>,
  document.getElementById('root')
);

