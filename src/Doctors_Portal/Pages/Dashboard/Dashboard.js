import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { Link, NavLink, useRouteMatch, Switch } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddModeratorSharpIcon from "@mui/icons-material/AddModeratorSharp";

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
import Patients from "../Patients/Patients";
import Setting from "../Setting/Setting";
import Prescriptions from "../Prescriptions/Prescriptions";
import BookIcon from "@mui/icons-material/Book";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../../AdminRoute/AdminRoute";
import AddDoctors from "../AddDoctors/AddDoctors";

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
  const { logOutAll, user,users } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 0,
          backgroundColor: "#19D3AE",
        }}
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
            <DashboardIcon sx={{ color: "#1565C0" }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", ml: "15px", color: "#fff" }}
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
                color: "#fff",
                fontSize: "18px",
                mr: "20px",
              }}
            >
              HOME
            </Button>
          </Link>
          <Tooltip title="Admin Profile" sx={{ justifyContent: "center" }}>
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
           { users.position === "admin" &&  <Typography
                sx={{
                  fontWeight: "bold",
                  mr: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AdminPanelSettingsIcon />{" "}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    ml: "5px",
                  }}
                >
                  ADMIN
                </Typography>
              </Typography>}
           { users.position === "merchant" &&  <Typography
                sx={{
                  fontWeight: "bold",
                  mr: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
               <AddModeratorSharpIcon />{" "}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    ml: "5px",
                  }}
                >
                  MERCHANT
                </Typography>
              </Typography>}
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
                to={`${url}/addDoctors`}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  marginTop: "20px",
                }}
              >
                <PregnantWomanIcon sx={{ display: "block" }} /> Add Doctors
              </NavLink>
            </ListItem>
            { users.position === "admin" && <ListItem button>
              <NavLink
                to={`${url}/makeAdmin`}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  marginTop: "20px",
                }}
              >
                <AddModeratorSharpIcon sx={{ display: "block" }} /> Make
                Merchant
              </NavLink>
            </ListItem>}
            <ListItem button>
              <NavLink
                to={`${url}/patients`}
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
                to={`${url}/prescription`}
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
                to={`${url}/setting`}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  marginTop: "20px",
                }}
              >
                <SettingsIcon sx={{ display: "block" }} /> Setting
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink
                to={`${url}/blogs`}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  marginTop: "20px",
                }}
              >
                <BookIcon sx={{ display: "block" }} /> Blogs
              </NavLink>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Container>
        <Switch>
          <AdminRoute exact path={path}>
            <ManageAppointments />
          </AdminRoute>
          <AdminRoute path={`${path}/appointments`}>
            <ManageAppointments />
          </AdminRoute>
          <AdminRoute path={`${path}/blog`}>
            <Blogs />
          </AdminRoute>
          <AdminRoute path={`${path}/patients`}>
            <Patients />
          </AdminRoute>
          <AdminRoute path={`${path}/prescription`}>
            <Prescriptions />
          </AdminRoute>
          <AdminRoute path={`${path}/addDoctors`}>
            <AddDoctors />
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/setting`}>
            <Setting />
          </AdminRoute>
          <AdminRoute path={`${path}/blogs`}>
            <Blogs />
          </AdminRoute>
        </Switch>
      </Container>
    </Box>
  );
};
export default Dashboard;
