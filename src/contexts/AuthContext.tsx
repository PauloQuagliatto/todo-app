import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../services/firebase";

type User = any;

type AuthContextProps = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

export const AuthContext = createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
