"use client";

import React from "react";
import { Provider as StoreProvider } from "react-redux";

import { AuthProvider } from "@/services/Authentication";
import { store } from "@/services/Store";

const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <AuthProvider>
      <StoreProvider store={store}>{children}</StoreProvider>
    </AuthProvider>
  );
};

export default Providers;
