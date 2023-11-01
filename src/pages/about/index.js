import React from "react";
import Head from "next/head";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

function About() {
  return (
    <>
      <Head>
        <title>About - Bunleap Sorn</title>
      </Head>
      <Avatar
        variant="rounded"
        sx={{ width: 150, height: 150 }}
        src="/bunleap.jpeg"
      />
      <Typography variant="h4" sx={{ fontWeight: 600, my: 2 }}>
        Hi, I&apos;m Bunleap
      </Typography>
      <Chip label="Student" sx={{ mr: 0.6 }} />
      <Chip label="Front-End Developer" sx={{ mr: 0.6 }} />
      <Chip label="Content Creator" />
      <p>
        I&apos;m specializing in building exceptional web interfaces and
        experiences. Currently, I&apos;m focused on building accessible web
        applications for the web.
      </p>
      <p>
        I just graduated high school and now I&apos;m starting a new journey at
        BINUS University in Indonesia. I&apos;m passionate about all things
        computer-related, from coding to design to engineering.
      </p>
      <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
        Education
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Paper variant="elevation" sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Liger Leadership Academy
            </Typography>
            <p>
              Liger Leadership Academy (LLA) educates promising youth of today
              to develop socially conscious, entrepreneurial leaders of
              tomorrow. We provide a residential scholarship program for
              economically disadvantaged students that combines a comprehensive,
              internationally competitive education with an innovative STEM and
              entrepreneurship curriculum.
            </p>
          </Paper>
        </Grid>
        <Grid xs={12} md={6}>
          <Paper variant="elevation" sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              BINUS University
            </Typography>
            <p>
              Bina Nusantara University, also known as BINUS UNIVERSITY, is a
              World-class Indonesian University. The main campus of the
              university is located in Kebon Jeruk, West Jakarta. Most of its
              campuses are located within the area of Greater Jakarta Region. It
              also has campuses at Bandung, Malang, and Semarang.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
