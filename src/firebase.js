import 'firebase/firestore'
import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyDn7efC-m69rn1jevcOIRw6-cIJITcacak",
  authDomain: "vegmart-c4605.firebaseapp.com",
  databaseURL: "https://vegmart-c4605-default-rtdb.firebaseio.com",
  projectId: "vegmart-c4605",
  storageBucket: "vegmart-c4605.appspot.com",
  messagingSenderId: "402249625272",
  appId: "1:402249625272:web:1dd85811f72e821e484e4d"
})

const db = firebase.firestore()

export {
    db
  }