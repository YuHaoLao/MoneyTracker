import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOTud6s_M5mIF6J31JyDtIgXpgOtbCyfk",
    authDomain: "mymoney-b1bf0.firebaseapp.com",
    projectId: "mymoney-b1bf0",
    storageBucket: "mymoney-b1bf0.appspot.com",
    messagingSenderId: "354186786979",
    appId: "1:354186786979:web:b84944e2a64f96afb56716",
    measurementId: "G-GZTFF2YTMC"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore,projectAuth,timestamp}