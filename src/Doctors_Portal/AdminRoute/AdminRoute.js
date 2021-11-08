import { LinearProgress, Stack } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { users, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Stack sx={{ width: "100%", color: "grey.500", mt: "150px" }} spacing={2}>
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
      </Stack>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        users?.position === "merchant" || users?.position === "admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/adminLogin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
