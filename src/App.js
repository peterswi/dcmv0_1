import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> This the beginning of GiveHelp, our digital Case Management App</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>GiveCard Presents: GiveHelp</h2>
        </p>
        <a
          className="App-link"
          href="https://www.givecard.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit GiveCard
        </a>
      </header>
        <body><!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

        </body>
    </div>
  );
}

export default App;
