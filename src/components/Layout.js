import React from "react";
import NavBar from "./NavBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Layout({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      <Toolbar />
      <Container>{children}</Container>
    </ThemeProvider>
  );
}

export default Layout;
