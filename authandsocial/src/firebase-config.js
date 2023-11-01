// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSZ9u9NOR0aVpnd6838FBb-nSlQ_jCRcA",
  authDomain: "react-auth-53899.firebaseapp.com",
  projectId: "react-auth-53899",
  storageBucket: "react-auth-53899.appspot.com",
  messagingSenderId: "791479443617",
  appId: "1:791479443617:web:493cba73a696cd4c8310e0",
  measurementId: "G-N3WF4G35PZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
