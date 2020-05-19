import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

/* navigator.serviceWorker.getRegistration().then((reg) => { */
  ReactDOM.render(
    <React.Fragment>
      <CssBaseline/>    
      <App />
    </React.Fragment>,
    document.getElementById('root')
  );
/* }) */




