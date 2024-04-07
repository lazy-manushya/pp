"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { KindeProvider, useKindeAuth } from "@kinde-oss/kinde-auth-react";

import OnboardingPage from "@/features/pages/app/OnboardingPage";
import { api, authService } from "@/config/services";
import SplashScreen from "@/features/pages/app/SplashScreen";

import { IAuthContext, IAuthProviderProps } from "./Authentication.types";
// import { AUTH_TOKEN } from "./Authentication.temp";

const AuthContext = createContext({} as IAuthContext);

export const useAuth = () => useContext(AuthContext);

const AuthProviderInner: React.FC<IAuthProviderProps> = ({ children }) => {
  const {
    isAuthenticated,
    login,
    register,
    logout,
    getToken,
    isLoading,
    user,
  } = useKindeAuth();
  const updatedTokenRef = useRef(false);

  //-------------------------

  const handleLogin = useCallback(() => {
    return login();
  }, [login]);

  const handleRegister = useCallback(() => {
    return register();
  }, [register]);

  const handleLogout = useCallback(() => {
    return logout();
  }, [logout]);

  //-------------------------

  useEffect(() => {
    if (isAuthenticated) {
      if (updatedTokenRef.current) return;

      updatedTokenRef.current = true;

      getToken().then((token) => {
        if (token && user) {
          const regsiterData = {
            ...user,
            email: user.email || "",
            given_name: user.given_name || "",
            family_name: user.family_name || "",
            owner_id: user.id || "",
          };

          api.setAuthToken(token);

          authService.registerUser(regsiterData).then(() => {
            authService.fetchUserInfo();
          });
        }
      });
    } else {
      updatedTokenRef.current = false;
    }
  }, [isAuthenticated, getToken, isLoading, user]);

  //-------------------------

  return (
    <AuthContext.Provider
      value={{
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
      }}
    >
      {isLoading ? (
        <SplashScreen />
      ) : isAuthenticated ? (
        children
      ) : (
        <OnboardingPage />
      )}
    </AuthContext.Provider>
  );
};

export const AuthProvider: React.FC<IAuthProviderProps> = (props) => {
  return (
    <KindeProvider
      clientId={process.env.NEXT_PUBLIC_KINDE_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_KINDE_ISSUER_URL!}
      logoutUri={process.env.NEXT_PUBLIC_KINDE_LOGOUT_REDIRECT_URL}
      redirectUri={process.env.NEXT_PUBLIC_KINDE_CALLBACK_URL!}
      scope="offline openid profile email"
    >
      <AuthProviderInner {...props} />
    </KindeProvider>
  );
};
