// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOz3spTzBuWwc-CP3S533Xtfbf7DGGY9A",
  authDomain: "healthapp-5cd21.firebaseapp.com",
  projectId: "healthapp-5cd21",
  storageBucket: "healthapp-5cd21.appspot.com",
  messagingSenderId: "947995840802",
  appId: "1:947995840802:web:16b577703d6a1a9cd3d57b",
  measurementId: "G-QB6RX9JP4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseDB = app.database()
export { app, firebaseDB}