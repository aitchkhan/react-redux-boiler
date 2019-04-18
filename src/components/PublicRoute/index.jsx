import React from "react";
import { Route, Redirect } from "react-router-dom";

import { getAuthToken } from "../../services/storage";
import { routeUrl } from "../../constants";

const PublicRoute = props => {
  const { component: TargetComponent, ...restProps } = props;
  const authToken = getAuthToken();
  return (
    <Route
      {...restProps}
      render={targetComponentProps =>
        authToken ? (
          <Redirect to={routeUrl.home} />
        ) : (
          <TargetComponent {...targetComponentProps} />
        )
      }
    />
  );
};

export default PublicRoute;
