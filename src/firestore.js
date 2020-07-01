import * as firebase from 'firebase'
import firebaseConfig from './components/firebaseConfig'
import Rebase from 're-base'

require('firebase/firestore')
// initialize firebase
const app = firebase.initializeApp(firebaseConfig)
const base = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()
const db = firebase.firestore()

export { app, base, facebookProvider, db }
