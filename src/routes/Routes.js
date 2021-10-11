import { routeConfig } from "./config";
import { Route } from "react-router-dom";

export const Routes = () => {
  return (
    <>
      {routeConfig.map(({ path, exact, component }) => (
        <Route exact={!!exact} path={path} component={component} />
      ))}
    </>
  );
};
