import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import Avatar from "@mui/material/Avatar";
import DevicesIcon from "@mui/icons-material/Devices";
import IconButton from "@mui/material/IconButton";

const projects = [
  {
    name: "Portfolio",
    links: "https://github.com/bunleaps/bunleaps",
    description: "✨ My personal website built with Next.js",
    stack: "Next.js",
  },
  {
    name: "klemQuiz",
    links: "https://github.com/bunleaps/klemQuiz",
    description: "Quiz interface for KlemCambodia",
    stack: "HTML, CSS, & JavaScript",
  },
  {
    name: "employee_card",
    links: "https://github.com/bunleaps/python-imageplaceholder",
    description:
      "Employee Card Image with Text Placeholder generated with Data using Python",
    stack: "Python",
  },
  {
    name: "Random Hero Generator v2",
    links: "https://github.com/bunleaps/random-hero-v2",
    description:
      "My second version of Random Hero Generator built using an API with a nicer interface and a more readable code.",
    stack: "HTML, CSS, JavaScript & JQuery",
  },
  {
    name: "Covid 19 Tracker: Cambodia",
    links: "https://github.com/bunleaps/covid-19-kh",
    description: "A PWA Covid 19 Tracker that built using an API and JQuery",
    stack: "HTML, CSS, JavaScript & JQuery",
  },
  {
    name: "Intern Application Assignment",
    links: "https://github.com/bunleaps/intern-assignment",
    description:
      "This is a website I have built using Next.js for an assignment from my internship company",
    stack: "Next.js & Styled Components",
  },
];

function Projects() {
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 600, my: 2 }}>
        Projects
      </Typography>
      <List>
        {projects.map((project) => (
          <ListItem key={project.name}>
            <ListItemAvatar>
              <Avatar>
                <DevicesIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={project.name} secondary={project.stack} />
            <IconButton href={project.links}>
              <DevicesIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Projects;
