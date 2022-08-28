// import "./firebase-messaging-sw";
import React from "react";
import "./App.css";
// import { getMessaging,  } from "firebase/messaging/sw";
import { getToken, getMessaging, onMessage } from "firebase/messaging";

function App() {
  // console.log(process.env.REACT_APP_MESSAGING_API_KEY);

  React.useEffect(() => {
    Notification.requestPermission().then((res) => {
      console.log(res);
    });
    const message = getMessaging();
    console.log(message);
    getToken(message, {
      vapidKey: process.env.REACT_APP_MESSAGING_API_KEY,
    }).then((token) => {
      console.log(token);
    });
  }, []);
  return (
    <div className="App">
      <h1>Hello !!</h1>
    </div>
  );
}

export default App;
