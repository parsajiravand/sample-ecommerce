import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { red } from "@mui/material/colors";
import "./menu.css";
// This styling will be applied to a <NavLink> when the
// route that it links to is currently selected.
let activeStyle = {
  textDecoration: "none",
  color: "red",
};
const Menu = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button
              variant="h6"
              color={"gold"}
              component={NavLink}
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              News
            </Button>
          </div>

          <Button
            variant="h6"
            component={NavLink}
            to="/signin"
            exact
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Menu;
