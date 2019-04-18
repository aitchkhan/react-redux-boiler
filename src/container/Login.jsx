import React, { Component } from "react";
import { connect } from "react-redux";

import * as authActions from "../actions/auth";
import { setAuthToken } from "../services/storage";
import Login from "../components/Login";
import { routeUrl } from "../constants";

class LoginContainer extends Component {
  componentDidUpdate(prevProps) {
    const { loginData, history } = this.props;
    console.log(this.props, prevProps);
    if (loginData) {
      console.log("High");
      setAuthToken(loginData);
      history.push(routeUrl.home);
    }
  }

  handleLogin(credentials) {
    const { asyncLogin } = this.props;
    asyncLogin(credentials);
  }

  render() {
    return <Login handleLogin={credentials => this.handleLogin(credentials)} />;
  }
}

function mapStateToProps({ auth }) {
  return {
    loginData: auth.loginData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    asyncLogin: credentials => dispatch(authActions.asyncLogin(credentials))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
