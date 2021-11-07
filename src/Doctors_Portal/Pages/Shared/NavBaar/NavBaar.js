import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { Avatar, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import useAuth from "../../../Hooks/useAuth";
import { GradientButton } from "../../Home/MUiStyled/GradientButton";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NavBaar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openn = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user, logOutAll } = useAuth();
  return (
    <Box position="absolute" sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        color="transparent"
        sx={{
          boxShadow: 0,
          display: "flex",
          justifyContent: "between",
        }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>
          {user?.email ? (
            <>
              <Tooltip title="Your Profile" sx={{ justifyContent: "center" }}>
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                  <Avatar alt="User" src={user.photoURL} />
                </IconButton>
              </Tooltip>

              <Menu
                anchorEl={anchorEl}
                open={openn}
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
                  <Avatar alt="User" src={user.photoURL} /> {user.displayName}
                </MenuItem>
                <MenuItem onClick={logOutAll}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              <Button variant="text">
                <DashboardIcon sx={{ color: "#10D0E6" }} />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontWeight: "bold",
                    marginLeft: "30px",
                  }}
                  to="/dashboard"
                >
                  DASHBOARD
                </Link>
              </Button>
            </>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <GradientButton sx={{ py: "10px" }}>Login</GradientButton>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <NavLink
            onClick={() => handleDrawerClose()}
            to="/home"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "#848B99",
            }}
          >
            <ListItem button>Home</ListItem>
          </NavLink>
          <NavLink
            onClick={() => handleDrawerClose()}
            to="/appointment"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "#848B99",
            }}
          >
            <ListItem button>Appointment</ListItem>
          </NavLink>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
