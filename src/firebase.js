// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/firestore'; // import any other Firebase services you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg6sFvZaQTaAiYQfTxVdoPGnC-AUS8AMc",
  authDomain: "zenproductivity-f4295.firebaseapp.com",
  projectId: "zenproductivity-f4295",
  storageBucket: "zenproductivity-f4295.appspot.com",
  messagingSenderId: "746881895708",
  appId: "1:746881895708:web:960d41ad62c9c5ba83bed9",
  measurementId: "G-FXPC7N9WZF"
};



firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = firebase.firestore();