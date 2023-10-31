import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const pages = ["About", "Skills", "Projects"];

function NavBar() {
  return (
    <>
      <AppBar position="fixed">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, marginRight: "1.5rem" }}
            >
              Hello!
            </Typography>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, mx: 2, color: "white", display: "block" }}
              >
                {page}
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
