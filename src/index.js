import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDi5gs5uJ-BQBnmOY3MxW56m_6GlnzKVDs",
    authDomain: "givecard-dcm.firebaseapp.com",
    databaseURL: "https://givecard-dcm.firebaseio.com",
    projectId: "givecard-dcm",
    storageBucket: "givecard-dcm.appspot.com",
    messagingSenderId: "252395130688",
    appId: "1:252395130688:web:e17255fe0353cefefbb4a5",
    measurementId: "G-ZRXDQVKKPB"
  };

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
