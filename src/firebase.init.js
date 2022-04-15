// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdjqZE5AGSntQBH5ZqstjjhWAo5Fq0GnA",
  authDomain: "red-onion-auth-f92e3.firebaseapp.com",
  projectId: "red-onion-auth-f92e3",
  storageBucket: "red-onion-auth-f92e3.appspot.com",
  messagingSenderId: "477815702582",
  appId: "1:477815702582:web:3906c8b4e0f768a9be0497"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;