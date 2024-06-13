"use client";
import { auth } from "@/services/auth";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import { User } from "firebase/auth";

interface authContextType {
  currentUser: User | null;
  userLoggedIn: boolean;
  loading: boolean;
}

const AuthContext = createContext<authContextType | undefined>(undefined);

export function useAuth(): authContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be within an authProvider");
  }
  return context;
}

interface authProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: authProviderProps): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, InitializeUser);
    return unsubscribe;
  }, []);

  async function InitializeUser(user: User | null): Promise<void> {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }
  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
