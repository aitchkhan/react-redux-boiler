/* eslint no-nested-ternary: 0 */
import React from "react";
import { Route, Redirect } from "react-router-dom";

import { getAuthToken } from "../../services/storage";
import { routeUrl } from "../../constants";

const PrivateRoute = props => {
  const { component: TargetComponent, ...restProps } = props;
  const authToken = getAuthToken();
  return (
    <Route
      {...restProps}
      render={targetComponentProps =>
        // Redirect user to login if token not available
        authToken ? (
          <TargetComponent {...targetComponentProps} />
        ) : (
          <Redirect to={routeUrl.login} />
        )
      }
    />
  );
};

export default PrivateRoute;
