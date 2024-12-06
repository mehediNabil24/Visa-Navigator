// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuYu9EPsuBnVSLBfUd_uiSEQhIeEjZAzA",
  authDomain: "visa-navigator-36634.firebaseapp.com",
  projectId: "visa-navigator-36634",
  storageBucket: "visa-navigator-36634.firebasestorage.app",
  messagingSenderId: "493549718714",
  appId: "1:493549718714:web:00e7a4521845cbe0630683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);