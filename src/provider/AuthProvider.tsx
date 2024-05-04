import React, { createContext, useContext, useState } from "react";

export type AuthContextType = {
  auth: null | string;
  setAuth: React.Dispatch<React.SetStateAction<null | string>>;
};
const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => {},
});

export const useAuthProvider = () => useContext(AuthContext);

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      try {
        return JSON.parse(authToken);
      } catch (error) {
        return null;
      }
    }
    return null;
  });

  const contextData = { auth, setAuth };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
