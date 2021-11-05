import { AccountCircle, Logout } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const NavBaar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar color="transparent" sx={{ boxShadow: 0 }} position="absolute">
        <Toolbar sx={{ flexGrow: 1, justifyContent: "between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            eDoctors
          </Typography>
          <Box>
            <NavLink
              to="/home"
              style={{
                marginRight: "30px",
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/appointment"
              style={{
                marginRight: "30px",
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Appointment
            </NavLink>
            <NavLink
              to="/about"
              style={{
                marginRight: "30px",
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contract"
              style={{
                marginRight: "390px",
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Contract Us
            </NavLink>
          </Box>
          <Box>
            <Tooltip title="Your Profile" sx={{ justifyContent: "center" }}>
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                <AccountCircle sx={{ fontSize: 40, color: "#fff" }} />
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Avatar /> J.N.Erfan
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBaar;
