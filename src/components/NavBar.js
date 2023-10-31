import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const pages = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
];

function NavBar() {
  return (
    <>
      <AppBar position="fixed">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                marginRight: "1.5rem",
                display: { xs: "none", sm: "none" },
              }}
            >
              Hello!
            </Typography>
            {pages.map((page) => (
              <Button
                href={page.link}
                key={page.name}
                sx={{ my: 2, mx: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default NavBar;
