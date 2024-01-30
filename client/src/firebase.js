// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-b4f58.firebaseapp.com",
  projectId: "blog-app-b4f58",
  storageBucket: "blog-app-b4f58.appspot.com",
  messagingSenderId: "1085658652181",
  appId: "1:1085658652181:web:a7c4fc1b78cf41779cf81c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);