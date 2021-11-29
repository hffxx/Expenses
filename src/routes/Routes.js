import { routeConfig } from "./config";
import { Route } from "react-router-dom";
import React from "react";

export const Routes = () => {
  return (
    <>
      {routeConfig.map(({ path, exact, component }, index) => (
        <Route key={index} exact={!!exact} path={path} component={component} />
      ))}
    </>
  );
};
