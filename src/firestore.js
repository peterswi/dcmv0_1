import * as firebase from 'firebase';

require("firebase/firestore");

//initialize firebase
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

//initialize cloud firestore through firebase?
var db=firebase.firestore();
//did this in the user.js file instead

export default firebase;