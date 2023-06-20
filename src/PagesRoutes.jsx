import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Configuration from "./components/Configuration/Configuration";
import Authenticate from "./components/Home/LoginAndRegisterPage/Authenticate";
import Settings from "./components/Home/Header/Settings";
import Home from "./components/Home/Home";
import PrivateRoutes from "./components/Home/LoginAndRegisterPage/PrivateRoutes";
import { connect } from "react-redux";
const PagesRoutes = ({ isLogged }) => {
  return (
    <Routes>
      <Route element={<PrivateRoutes isLogged={isLogged} />}>
        <Route path="/configuration/*" element={<Configuration />} />
        <Route path="/home/*" element={<Home />}>
          <Route path="settings/*" element={<Settings />} />
        </Route>
      </Route>
      <Route path="/auth/*" element={isLogged ? <Navigate to="/home" /> :<Authenticate />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
const mapStateToProps = (state) => ({
  isLogged: state.status.isLogged,
});

export default connect(mapStateToProps)(PagesRoutes);
