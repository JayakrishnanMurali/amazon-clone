// import * as check from "firebase/firestore"
import firebase from "firebase/compat"


const firebaseConfig = {
  apiKey: "AIzaSyDmWr8MUKPvcZL5vIsWarZGahpPjgrcMm0",
  authDomain: "clone-daf77.firebaseapp.com",
  projectId: "clone-daf77",
  storageBucket: "clone-daf77.appspot.com",
  messagingSenderId: "559999578570",
  appId: "1:559999578570:web:a9f4a35e49da6efa831f33",
  measurementId: "G-4CS7WMTQWH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth };