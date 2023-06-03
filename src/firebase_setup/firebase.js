// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc5ZPKiDF20s5nPCpGN9udZEmLVtINvT8",
  authDomain: "letterboxd-wrapped.firebaseapp.com",
  projectId: "letterboxd-wrapped",
  storageBucket: "letterboxd-wrapped.appspot.com",
  messagingSenderId: "293961313161",
  appId: "1:293961313161:web:7cfbeebf535934fc2ecf58",
  measurementId: "G-MKJ2EPKDYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);