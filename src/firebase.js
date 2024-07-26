import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBg0QRWXvVhKQMsM0Wti33NwhRdEgkzSEE",
  authDomain: "fastechdata-e92cd.firebaseapp.com",
  projectId: "fastechdata-e92cd",
  storageBucket: "fastechdata-e92cd.appspot.com",
  messagingSenderId: "667108329976",
  appId: "1:667108329976:web:5af7d04e498152d7e6ee0d"
};


const fire = initializeApp(firebaseConfig);
const analytics = getAnalytics(fire);
