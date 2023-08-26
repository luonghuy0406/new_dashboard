import React, { Fragment } from "react";
import "./App.css";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import "animate.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import DashboadLayout from "./components/Layout/DashboadLayout";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <div className="App" style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <ThemeProvider theme={theme}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === 'dashboard' ? DashboadLayout : (route.layout === null ? Fragment : DefaultLayout);
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
