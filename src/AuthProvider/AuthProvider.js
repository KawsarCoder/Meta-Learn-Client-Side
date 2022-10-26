import React from "react";
import { createContext } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const userLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const userLogOut = () => {
    return signOut();
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (activeUser) => {
    //   console.log("user state change", activeUser);
      setUser(activeUser);
    });
    return () => {
      unsubscibe();
    };
  }, []);

  const authValue = { user, userLogin, userLogOut };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
