// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsReUovElQx-rBBVZc9M19k2oWxxTNeFU",
  authDomain: "findcode-17ca6.firebaseapp.com",
  projectId: "findcode-17ca6",
  storageBucket: "findcode-17ca6.appspot.com",
  messagingSenderId: "1015801673307",
  appId: "1:1015801673307:web:b0a987e02ca4822afe317e",
  measurementId: "G-SWNZX96QE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);