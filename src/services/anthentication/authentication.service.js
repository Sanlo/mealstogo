import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIi3mjsnnlTFupHNbOtJKW37Sct6LBL4c",
  authDomain: "nestorluther.firebaseapp.com",
  projectId: "nestorluther",
  storageBucket: "nestorluther.appspot.com",
  messagingSenderId: "30981076571",
  appId: "1:30981076571:web:392f33d0bca53c736ef17e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const loginRequest = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
