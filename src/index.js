import React from 'react';
import ReactDOM from 'react-dom';

// import { App } from './App';
import { CounterMemoHookApp } from './components/use-memo/CounterMemoHookApp';

ReactDOM.render(
  <React.StrictMode>
    <CounterMemoHookApp />
  </React.StrictMode>,
  document.getElementById('root')
);

