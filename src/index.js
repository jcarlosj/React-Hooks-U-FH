import React from 'react';
import ReactDOM from 'react-dom';

// import { App } from './App';
import { CallbackHookApp } from './components/use-callback/CallbackHookApp';

ReactDOM.render(
  <React.StrictMode>
    <CallbackHookApp />
  </React.StrictMode>,
  document.getElementById('root')
);

