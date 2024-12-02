// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6jbdWPjC5lfBrZFMfhrD0ABz5CqGLT3Y",
  authDomain: "coffee-store-95ceb.firebaseapp.com",
  projectId: "coffee-store-95ceb",
  storageBucket: "coffee-store-95ceb.firebasestorage.app",
  messagingSenderId: "367587168737",
  appId: "1:367587168737:web:33184f2caa05bb810802a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);