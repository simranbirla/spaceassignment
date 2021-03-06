// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyATeUEzrql-2IU1Pqv1G2l7S54TM6nleGk",
  authDomain: "spacex-51f52.firebaseapp.com",
  projectId: "spacex-51f52",
  storageBucket: "spacex-51f52.appspot.com",
  messagingSenderId: "195689742230",
  appId: "1:195689742230:web:6ca415b2a327ebbf3fa7b7",
  measurementId: "G-F841SXL1VE",
});

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
