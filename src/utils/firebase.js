// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1FS0kqIHRDmuli6hrztlEXqtMRWbE3Os",
  authDomain: "gpt-on-flix.firebaseapp.com",
  projectId: "gpt-on-flix",
  storageBucket: "gpt-on-flix.appspot.com",
  messagingSenderId: "738571551123",
  appId: "1:738571551123:web:3a1992a69ebf520ff4e866",
  measurementId: "G-9870MT9H45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();