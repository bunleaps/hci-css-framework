import React from "react";
import Head from "next/head";
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
      <Head>
        <meta charset="UTF-8" />
        <meta name="author" content="Bunleap Sorn" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBar />
      <Toolbar />
      <Container>{children}</Container>
    </ThemeProvider>
  );
}

export default Layout;
