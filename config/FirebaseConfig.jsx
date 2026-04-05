// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAawogavn94QRkuAeT1bQ1tEERNUd_jJk0",
  authDomain: "businessapp-73d04.firebaseapp.com",
  projectId: "businessapp-73d04",
  storageBucket: "businessapp-73d04.firebasestorage.app",
  messagingSenderId: "426917798451",
  appId: "1:426917798451:web:acc0445a50444ce96fb946"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);