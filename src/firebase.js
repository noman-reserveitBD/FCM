

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_jGFZtlxQ8BzJ0jgpDndQEMK2sAl5P5E",
  authDomain: "reserveit-bd.firebaseapp.com",
  projectId: "reserveit-bd",
  storageBucket: "reserveit-bd.appspot.com",
  messagingSenderId: "572972665569",
  appId: "1:572972665569:web:c081aec83a7090319045a0",
  measurementId: "G-59EBL637PW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
//const analytics = getAnalytics(app);
