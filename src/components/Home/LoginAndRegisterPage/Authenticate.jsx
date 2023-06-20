import React from "react";
import { Container, Image } from "react-bootstrap";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import styles from "./auth.module.css";
import Logo from "./Logo.png";
import { connect } from "react-redux";
const Authenticate = () => {
  const navLinkClassName = `${styles["nav-link"]} p-2 `;
  const setActiveClassName = (isActive) =>
    navLinkClassName + (isActive ? styles.active : "");
  const setNavLinkClassName = ({ isActive }) =>
    navLinkClassName + setActiveClassName(isActive);
  return (
    <div className={styles["auth-container"]}>
      <NavLink className={styles["logo-container"]} to={"/"}>
        <Image className={`w-100`} src={Logo} alt={"Logo"} />
      </NavLink>
      <Container fluid className={`px-0 ${styles["auth-body"]}`}>
        <nav className="d-flex">
          <NavLink className={setNavLinkClassName} to={"login"}>
            Login
          </NavLink>
          <NavLink className={setNavLinkClassName} to={"register"}>
            Register
          </NavLink>
        </nav>
        <div className={"p-2"}>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to={"login"} replace />} />
          </Routes>
        </div>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLogged : state.status.isLogged
});
export default connect(mapStateToProps)(Authenticate);
