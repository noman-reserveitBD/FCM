// import "./firebase-messaging-sw";
import React from "react";
import "./App.css";
// import { getMessaging,  } from "firebase/messaging/sw";
import { messaging } from "./firebase";
import { getMessaging, getToken } from "firebase/messaging";
import { async } from "@firebase/util";

const App = () => {
  // console.log(process.env.REACT_APP_MESSAGING_API_KEY);

  // (async function () {
 

  React.useEffect(() => {
    console.log(['hello'])
    fun();
  }, []);
  const fun = async () => {
    const permission = await Notification.requestPermission();
    console.log(permission);
    if (permission === "granted") {
      // generate token
      const token = await getToken(messaging, {
        vapidKey:
          "BFVaTV938N-1m-m75UCUhdpVNh04kMFKxU68ljPIptnQLHGJCM5BkeuIYkzW0tqELpRx7huxVai83NNiCkJHHLA",
      });
      console.log("Token Gen: ", token);

    } else if (permission === "denied") {
      alert("You denied for notification !");
    }
  }

  const getMessage= async () => {
    const res = await getMessaging();
    alert(res[0])
  }

 getMessage();
  return (
    <div className="App">
      <h1>Hello FCM!!</h1>
    </div>
  );
}

export default App;
