import React, { useEffect, useState, useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Logo from "./media/Logo.png";
import { ModalContext } from "../../../App";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { screenContext } from "../../../App";
import { logout } from "../../../store/status/statusReducer";
import { connect } from "react-redux";

function MainHeader({styles, isVisible , logout, isLogged}) {
  const modal = useContext(ModalContext);
  const { currentScreenWidth, screen } = useContext(screenContext);
  const isMediumScreenOrLarger = () =>
    !screen.isMediumScreen(currentScreenWidth);
  const navigate = useNavigate();
  return (
    <div
      className={
        `bg-dark d-flex justify-content-between ${styles["main-header"]} ` +
        (isVisible() && isMediumScreenOrLarger()
          ? ""
          : styles["h-0"])
      }
    >
      {isVisible() && isMediumScreenOrLarger() && (
        <>
          <Link className={`${styles.Logo} py-3 d-inline-block`} to="/home">
            <Image src={Logo} />
          </Link>
          <Nav className="align-items-end navbar-dark py-3">
            <NavLink
              className={`me-3 ${styles.page} navbar-dark`}
              to="settings"
              onClick={modal.handleShow}
            >
              Settings
            </NavLink>
            <NavLink
              className={`me-3 ${styles.page} navbar-dark`}
              to="/configuration/routers/main"
            >
              Congfiguration
            </NavLink>
            {!isLogged && (<NavLink
              className={`me-3 ${styles.page} navbar-dark`}
              to="/auth/login"
            >
              Login / Register
            </NavLink>)}
            <NavLink
              className={`me-3 ${styles.page} navbar-dark`}
              to="/auth"
              onClick={(e)=>{
                logout();
                
              }}
            >
              Logout
            </NavLink>
          </Nav>
        </>
      )}
    </div>
  );
}
const mapStateToProps = (state, ownProps) => ({
  isLogged: state.status.isLogged,
  ...ownProps,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
