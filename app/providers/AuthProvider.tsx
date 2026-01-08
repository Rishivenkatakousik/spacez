"use client";
import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
  signedIn: boolean;
  setSignedIn: (v: boolean) => void;
  toggle: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);
  const toggle = () => setSignedIn((s) => !s);

  return (
    <AuthContext.Provider value={{ signedIn, setSignedIn, toggle }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}