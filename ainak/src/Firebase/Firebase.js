// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1fYKJRad7NDN-T1yW5VE589rVe-LXdk8",
  authDomain: "ainak-a7ed1.firebaseapp.com",
  projectId: "ainak-a7ed1",
  storageBucket: "ainak-a7ed1.appspot.com",
  messagingSenderId: "562223349665",
  appId: "1:562223349665:web:385b7d34885cf27213d5e0",
  measurementId: "G-S8P7CSRMKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app