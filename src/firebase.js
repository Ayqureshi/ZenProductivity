// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase/compat/app';
// import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  production: false,
  apiKey: "AIzaSyBg6sFvZaQTaAiYQfTxVdoPGnC-AUS8AMc",
  authDomain: "zenproductivity-f4295.firebaseapp.com",
  databaseURL: "https://zenproductivity-f4295-default-rtdb.firebaseio.com",
  projectId: "zenproductivity-f4295",
  storageBucket: "zenproductivity-f4295.appspot.com",
  messagingSenderId: "746881895708",
  appId: "1:746881895708:web:960d41ad62c9c5ba83bed9",
  measurementId: "G-FXPC7N9WZF"
};



// firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);
export { firestore, auth };
export default app;




