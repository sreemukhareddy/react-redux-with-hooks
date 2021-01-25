import React, { Component, useEffect } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import LogOut from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as authActions from "./store/actions/auth";

const app = (props) => {
  useEffect(() => {
    props.onTryAutoSignIn();
  }, []);

  let routes;

  routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={LogOut} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchersToProps = (dispatch) => {
  return {
    onTryAutoSignIn: () => dispatch(authActions.checkAuthState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchersToProps)(app));
