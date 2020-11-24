import React from 'react';
import ReactDOM from 'react-dom';

// import { App } from './App';
import { CounterApp } from './components/use-state/CounterApp';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);

