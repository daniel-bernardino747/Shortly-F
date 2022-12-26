import React, { createContext, ReactNode, useState } from "react";

import { DefaultTheme, ThemeProvider } from "styled-components";

import lightTheme from "../styles/themes/light";

interface ToggleThemeContextData {
  toggleTheme(): Promise<void>;
}
interface ProviderProps {
  children: ReactNode;
}

export const ToggleThemeContext = createContext<ToggleThemeContextData>(
  {} as ToggleThemeContextData
);

const ToggleThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const toggleTheme = async () => {
    setTheme(theme);
  };

  return (
    <ToggleThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ToggleThemeContext.Provider>
  );
};
export default ToggleThemeProvider;
