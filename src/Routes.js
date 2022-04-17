import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoutes({
  auth,
  component: Components,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        auth ? (
          <Components {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/start",
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
}
