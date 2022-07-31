import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYMLywk5j84uQpo_mm0yPkaMnUSdVITxI",
  authDomain: "react-native-food-dd7d8.firebaseapp.com",
  projectId: "react-native-food-dd7d8",
  storageBucket: "react-native-food-dd7d8.appspot.com",
  messagingSenderId: "238286898836",
  appId: "1:238286898836:web:fa1b32cbd6ef47a9c71681",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
