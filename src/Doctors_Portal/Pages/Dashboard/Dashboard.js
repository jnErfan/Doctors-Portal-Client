import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { Link, NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Logout } from "@mui/icons-material";
import useAuth from "../../Hooks/useAuth";
import ManageAppointments from "../ManageAppointments/ManageAppointments";
import Blogs from "../Blogs/Blogs";

const drawerWidth = 150;

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const openn = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { logOutAll, user } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="transparent"
        position="absolute"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: 0 }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              ml: "10%",
            }}
          >
            <DashboardIcon sx={{ color: "#10D0E6" }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", ml: "15px", color: "#10D0E6" }}
            >
              ADMIN DASHBOARD
            </Typography>
          </Box>

          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              sx={{
                fontWeight: "bold",
                color: "#000",
                fontSize: "18px",
                mr: "20px",
              }}
            >
              HOME
            </Button>
          </Link>
          <Tooltip title="Admin Profile" sx={{ justifyContent: "center" }}>
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Typography sx={{ fontWeight: "bold", mr: "10px" }}>
                ADMIN
              </Typography>
              <Avatar sx={{ mr: "20px" }} alt="User" src={user.photoURL} />
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
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#19D3AE",
            border: "0px",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button>
              <NavLink
                to={`${url}/appointments`}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  marginTop: "20px",
                }}
              >
                <CalendarTodayIcon sx={{ display: "block" }} /> APPOINTMENTS
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink
                to={`${url}/blog`}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  marginTop: "20px",
                }}
              >
                <PregnantWomanIcon sx={{ display: "block" }} /> PATIENTS
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink
                to={`${url}/manageAppointments`}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  marginTop: "20px",
                }}
              >
                <ListAltIcon sx={{ display: "block" }} /> PRESCRIPTIONS
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink
                to={`${url}/manageAppointments`}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  marginTop: "20px",
                }}
              >
                <SettingsIcon sx={{ display: "block" }} /> SETTING
              </NavLink>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Container>
        <Switch>
          <Route exact path={path}>
            <ManageAppointments />
          </Route>
          <Route path={`${path}/appointments`}>
            <ManageAppointments />
          </Route>
          <Route path={`${path}/blog`}>
            <Blogs />
          </Route>
        </Switch>
      </Container>
    </Box>
  );
};
export default Dashboard;
