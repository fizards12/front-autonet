import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
const useAuth = (isLogged) => isLogged;
const PrivateRoutes = ({ isLogged }) => {
  let isAuth = useAuth(isLogged);

  return isAuth ? <Outlet /> : <Navigate to={"/auth"} />;
};
const mapStateToProps = (state) => ({
  users: state.users,
  islogged: state.status.islogged,
});
export default connect(mapStateToProps)(PrivateRoutes);
