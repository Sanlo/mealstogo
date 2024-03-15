import React, { useState, createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../../../Firebase.config";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        console.log(u);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
        console.log(e.toString());
      });
  };

  const onLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated: !!user, user, isLoading, error, onLogin, onRegister, onLogout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
