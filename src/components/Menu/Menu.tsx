import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
const navItems = ["Home", "Pricing", "Contact"];
export const Menu = () => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          MUI
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button
            variant="text"
            color={"inherit"}
            component={RouterLink}
            to={"/"}
          >
            Home
          </Button>
          <Button
            variant="text"
            color={"inherit"}
            component={RouterLink}
            to={"/pricing"}
          >
            Pricing
          </Button>
          <Button
            variant="text"
            color={"inherit"}
            component={RouterLink}
            to={"/about"}
          >
            About
          </Button>
          <Button
            variant="text"
            color={"inherit"}
            component={RouterLink}
            to={"/login"}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
