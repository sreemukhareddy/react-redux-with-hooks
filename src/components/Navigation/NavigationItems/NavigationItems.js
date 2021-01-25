import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
//import { connect } from "react-redux";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      {props.isAuthenticated ? (
        <NavigationItem link="/orders">Orders</NavigationItem>
      ) : null}
      {!props.isAuthenticated ? (
        <NavigationItem link="/auth" exact>
          SignIn/SignUp
        </NavigationItem>
      ) : (
        <NavigationItem link="/logout" exact>
          Logout
        </NavigationItem>
      )}
    </ul>
  );
};

export default navigationItems;
