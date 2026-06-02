import { ThemeProvider } from "@emotion/react";
import PortfolioContext from "../context/PortfolioContext.jsx";
import { getTheme } from "./Theme.js";

const MainLayout = ({ children, contextData }) => {
  return (
    <PortfolioContext.Provider value={contextData}>
      <ThemeProvider theme={getTheme(contextData.mode)}>
        {children}
      </ThemeProvider>
    </PortfolioContext.Provider>
  );
};

export default MainLayout;
