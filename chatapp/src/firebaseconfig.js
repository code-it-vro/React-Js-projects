import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbSp4p8YpVicL887jxHa2npHiJWT5mbtc",
  authDomain: "mychatapp-6edf0.firebaseapp.com",
  projectId: "mychatapp-6edf0",
  storageBucket: "mychatapp-6edf0.appspot.com",
  messagingSenderId: "967355746640",
  appId: "1:967355746640:web:dbae8b1aed92b450e54455",
  measurementId: "G-1H0J2ZBTZ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
