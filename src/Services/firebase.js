// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ1_0Q2g7YMD16NX4OummzIaNJT7xqRfA",
  authDomain: "events-platform-northcoders.firebaseapp.com",
  projectId: "events-platform-northcoders",
  storageBucket: "events-platform-northcoders.firebasestorage.app",
  messagingSenderId: "115617524106",
  appId: "1:115617524106:web:802b9425799683934c8073",
  measurementId: "G-VNPY1LV64H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);