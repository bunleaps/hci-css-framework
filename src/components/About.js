import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

function About() {
  return (
    <>
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
    </>
  );
}

export default About;
