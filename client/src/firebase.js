// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realstate-1cc61.firebaseapp.com",
  projectId: "mern-realstate-1cc61",
  storageBucket: "mern-realstate-1cc61.appspot.com",
  messagingSenderId: "270231983976",
  appId: "1:270231983976:web:8723decf7caaf7f7bae8dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);