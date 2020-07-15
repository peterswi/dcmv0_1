import * as firebase from 'firebase'
// import firebaseConfig from './firebaseConfig'
import Rebase from 're-base'

require('firebase/firestore')
// initialize firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
}
const app = firebase.initializeApp(firebaseConfig)
firebase.analytics()
const base = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()
const db = app.firestore()

export { app, base, facebookProvider, db }
