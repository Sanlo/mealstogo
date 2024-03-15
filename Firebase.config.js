import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

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
export const FIRBEBASE_APP = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const FIREBASE_AUTH = initializeAuth(FIRBEBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
