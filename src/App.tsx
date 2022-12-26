import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./contexts/auth";
import ThemeProvider from "./contexts/theme";
import Routes from "./routes";
import GlobalStyle from "./styles/global.styles";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
export default App;
