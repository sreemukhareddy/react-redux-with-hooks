import React, { Component, useEffect } from "react";

import Order from "../../components/Order/Order";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as orderActions from "../../store/actions/order";
import Spinner from "../../components/UI/Spinner/Spinner";

const orders = (props) => {
  // componentDidMount() {
  //   this.props.onFetchOrders(this.props.token);
  // }

  useEffect(() => {
    props.onFetchOrders(props.token);
  }, []);

  let orders = <Spinner />;
  if (!props.loading) {
    orders = props.orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
      />
    ));
  }
  return <div>{orders}</div>;
};

const mapStoreToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
  };
};

const mapDispatchersToProps = (dispatch) => {
  return {
    onFetchOrders: (token) => dispatch(orderActions.fetchOrders(token)),
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchersToProps
)(withErrorHandler(orders, axios));
