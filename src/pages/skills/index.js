import React from "react";
import Head from "next/head";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Vue.js",
  "MongoDB",
  "Wordpress",
  "Python",
  "Photoshop",
  "Illustrator",
  "Indesign",
  "Premiere Pro",
  "Figma",
];

function Skills() {
  return (
    <>
      <Head>
        <title>Skills - Bunleap Sorn</title>
      </Head>
      <Typography variant="h5" sx={{ fontWeight: 600, my: 2 }}>
        My Skills
      </Typography>
      {skills.map((skill) => (
        <Chip label={skill} key={skill} sx={{ m: 0.4 }} />
      ))}
    </>
  );
}

export default Skills;
