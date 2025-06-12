// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbTaBLWWb8Vug1yrrEGQG5PNjvAmas9FY",
  authDomain: "cineflixgpt-mohit.firebaseapp.com",
  projectId: "cineflixgpt-mohit",
  storageBucket: "cineflixgpt-mohit.firebasestorage.app",
  messagingSenderId: "141414286724",
  appId: "1:141414286724:web:bbf25620d31a87380749d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);