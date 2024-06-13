// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  authDomain: "next-u-auth.firebaseapp.com",
  projectId: "next-u-auth",
  storageBucket: "next-u-auth.appspot.com",
  messagingSenderId: "503948890778",
  appId: "1:503948890778:web:2e41729dcc7f05d19f0523",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


