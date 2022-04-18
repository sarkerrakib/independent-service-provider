// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYSG3L7t0k1tXbbkqA9z8ueaoU6Elf10o",
  authDomain: "jsr-photography.firebaseapp.com",
  projectId: "jsr-photography",
  storageBucket: "jsr-photography.appspot.com",
  messagingSenderId: "378947709235",
  appId: "1:378947709235:web:68eafee49348dea804f646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;