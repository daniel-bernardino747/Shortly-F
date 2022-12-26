import React, { createContext, ReactNode, useState } from "react";

import * as auth from "../services/auth";

interface AuthContextData {
  signed: boolean;
  token?: string;
  user?: object | null;
  signIn(): Promise<void>;
}
interface ProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
