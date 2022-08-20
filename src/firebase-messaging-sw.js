import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { getToken } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyA_jGFZtlxQ8BzJ0jgpDndQEMK2sAl5P5E",
  authDomain: "reserveit-bd.firebaseapp.com",
  projectId: "reserveit-bd",
  storageBucket: "reserveit-bd.appspot.com",
  messagingSenderId: "572972665569",
  appId: "1:572972665569:web:c39e4e3a896c33419045a0",
  measurementId: "G-RBMWQ7XNK8",
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");

        // if ("serviceWorker" in navigator) {
        //   console.log("Time to register sw.js");
        //   const registration = navigator.serviceWorker.register(
        //     "firebase_messaging_sw.js"
        //   );
        // }

        // Initialize Firebase Cloud Messaging and get a reference to the service
        const app = initializeApp(firebaseConfig);

        const messaging = getMessaging(app);
        getToken(messaging, {
          vapidKey: process.env.REACT_APP_MESSAGING_API_KEY,
        }).then((CT) => {
          if (CT) {
            console.log("current token: ", CT);
          } else {
            console.log("can't get app token");
          }
        });
      } else {
        console.log("DOnt have permission");
      }
    })
    .catch((ex) => {
      console.log("An error is happen", ex);
    });
}
requestPermission();
