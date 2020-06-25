import * as firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

require('firebase/firestore')
// initialize firebase
const base = firebase.initializeApp(firebaseConfig)
const facebookProvider = new firebase.auth.FacebookAuthProvider()
// const base = Rebase.createClass(app.database())

export { base, facebookProvider }
