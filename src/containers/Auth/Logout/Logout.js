import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as authActions from "../../../store/actions/auth";

class Logout extends Component {
  constructor(props) {
    super(props);
    console.log("[Logout] constructor");
  }

  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(authActions.logOut()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
