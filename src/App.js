import * as React from "react";
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AboutMePage from "./pages/AboutMePage";
import HomePage from "./pages/HomePage";
import MLSPage from "./pages/MLSPage";
import theme from "./assets/theme";
import Layout from "./components/navigation/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutMe" element={<AboutMePage />} />
          <Route path="/homeCatelog" element={<MLSPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
