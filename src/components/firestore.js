import * as firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

require('firebase/firestore')
// initialize firebase
firebase.initializeApp(firebaseConfig)

export default firebase
