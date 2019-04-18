import React from "react";
import { Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { routeUrl } from "./constants";

import Home from "./components/Home";
import Login from "./container/Login";
import Loader from "./container/Loader";

const Routes = () => [
  <Loader key="loader" />, // can be put in separate container for e.g App (will contain Loader, Toaster Header etc.)
  <Switch key="appRoutes">
    <PublicRoute path={routeUrl.login} component={Login} />
    <PrivateRoute exact path={routeUrl.home} component={Home} />
  </Switch>
];
export default Routes;
