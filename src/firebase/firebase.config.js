// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlE4q9XxfqQVMzAfy7Mhy5-hWv_baJRGc",
  authDomain: "cheif-hunt-auth-firebase.firebaseapp.com",
  projectId: "cheif-hunt-auth-firebase",
  storageBucket: "cheif-hunt-auth-firebase.appspot.com",
  messagingSenderId: "211665503274",
  appId: "1:211665503274:web:1b18e57a9da139e4deef53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;