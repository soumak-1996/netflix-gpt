// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy3kOuQ1tWSL3B7AjTT_q75bL3Er6BVFk",
  authDomain: "netflixgpt-8418b.firebaseapp.com",
  projectId: "netflixgpt-8418b",
  storageBucket: "netflixgpt-8418b.appspot.com",
  messagingSenderId: "1059801778375",
  appId: "1:1059801778375:web:bbc674e49d64c19d0f56e2",
  measurementId: "G-TR18M53HBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();