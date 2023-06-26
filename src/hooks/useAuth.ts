import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../services/firebase";

export function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  function login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  function createNewUserAndLogin(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  function logout() {
    signOut(auth);
    setUser(null);
  }
  return {
    user,
    login,
    createNewUserAndLogin,
    logout
  };
}
