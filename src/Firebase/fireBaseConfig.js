// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAEGHd6PCYQho16sLE1-EktQlE7hrYRqM",
  authDomain: "august-beaker-427516-i0.firebaseapp.com",
  projectId: "august-beaker-427516-i0",
  storageBucket: "august-beaker-427516-i0.appspot.com",
  messagingSenderId: "829243022431",
  appId: "1:829243022431:web:d501231147d1b2e2670fea",
  measurementId: "G-10JV7GRWJK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
