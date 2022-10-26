import React from "react";
import { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const user = { displayName: "fucker boy" };
  const userLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const authValue = { user, userLogin };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
