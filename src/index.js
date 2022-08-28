import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerServiceWorker } from "./serviceWorker";
import { initializeApp } from "firebase/app";
initializeApp({
  apiKey: "AIzaSyA_jGFZtlxQ8BzJ0jgpDndQEMK2sAl5P5E",
  authDomain: "reserveit-bd.firebaseapp.com",
  projectId: "reserveit-bd",
  storageBucket: "reserveit-bd.appspot.com",
  messagingSenderId: "572972665569",
  appId: "1:572972665569:web:c39e4e3a896c33419045a0",
  measurementId: "G-RBMWQ7XNK8",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// registerServiceWorker();
reportWebVitals();
