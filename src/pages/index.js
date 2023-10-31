import Head from "next/head";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Bunleap Sorn</title>
      </Head>
      <main>
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <Paper variant="elevation" sx={{ p: 2, mb: 2 }}>
              <About />
            </Paper>
            <Paper variant="elevation" sx={{ p: 2 }}>
              <Skills />
            </Paper>
          </Grid>
          <Grid xs={12} md={6}>
            <Paper variant="elevation" sx={{ p: 2 }}>
              <Projects />
            </Paper>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
