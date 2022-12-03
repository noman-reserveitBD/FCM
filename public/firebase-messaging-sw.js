
if( 'undefined' === typeof window){
  importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyA_jGFZtlxQ8BzJ0jgpDndQEMK2sAl5P5E",
  authDomain: "reserveit-bd.firebaseapp.com",
  projectId: "reserveit-bd",
  storageBucket: "reserveit-bd.appspot.com",
  messagingSenderId: "572972665569",
  appId: "1:572972665569:web:c081aec83a7090319045a0",
  measurementId: "G-59EBL637PW",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});



}