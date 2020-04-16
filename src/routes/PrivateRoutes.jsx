import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { connect } from "react-redux";

// const isAuth = false

const PrivateRoutes = ({ component: Component, ...rest }) => {
  // console.log(isAuth);
  return true ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
      <Redirect to="/login" />
    );
};

// const mapStateToProps = state => ({
//   isAuth: state.isAuth,
//   state: state
// });

export default PrivateRoutes