// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQjy0MtECZPq2AvCQZbEd5Dm9Wb6JEQDk",
  authDomain: "ecommerce-ab822.firebaseapp.com",
  projectId: "ecommerce-ab822",
  storageBucket: "ecommerce-ab822.firebasestorage.app",
  messagingSenderId: "227090959106",
  appId: "1:227090959106:web:33f5f9741eb5966049d01b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);