import React from 'react';
import ReactDOM from 'react-dom';

// import { App } from './App';
import { CounterHookApp } from './components/use-state/CounterHookApp';

ReactDOM.render(
  <React.StrictMode>
    <CounterHookApp />
  </React.StrictMode>,
  document.getElementById('root')
);

