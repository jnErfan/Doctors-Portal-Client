import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { users } = useAuth();
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
