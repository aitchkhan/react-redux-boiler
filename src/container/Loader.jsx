import React from "react";
import { connect } from "react-redux";
import Loader from "../components/Loader";

class LoaderContainer extends React.Component {
  render() {
    const { isLoading } = this.props;
    return <Loader showSpinner={isLoading} />;
  }
}

function mapStateToProps({ isLoading }) {
  return {
    isLoading
  };
}

export default connect(mapStateToProps)(LoaderContainer);
