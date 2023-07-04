import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import miniLogo from "./media/logo.svg";
import Image from "react-bootstrap/Image";
import { BsInfoCircleFill as AboutIcon } from "react-icons/bs";
import { BsBook as GuideIcon } from "react-icons/bs";
import { AiOutlineTeam as MembersIcon } from "react-icons/ai";
import { ModalContext } from "../../../App";
import { Link, NavLink } from "react-router-dom";
import { screenContext } from "../Home";

export default function NavBar({ styles, isVisible, menu, openMenu }) {
  const modal = useContext(ModalContext);
  const {currentScreenWidth , screen} = useContext(screenContext);
  
  const pagesPathsAndNames = [
    { href: "settings", pageName: "Settings" },
    { href: "/configuration/routers/main", pageName: "Configuration" },
    { href: "/auth/login", pageName: "Login/Register" },
  ];
  
  const menuIcon = (
    <>
      <div className={`${styles["menu-line"]} mb-1`}></div>
      <div className={`${styles["menu-line"]} mb-1`}></div>
      <div className={styles["menu-line"]}></div>
    </>
  );

  return (
    <Navbar className={styles["min-nav"]} bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/home"}>
            <Image
              className={`${styles.miniLogo}  ${
                isVisible() || screen.isMediumScreen(currentScreenWidth) ? "" : "in"
              }visible`}
              src={miniLogo}
            />
          </Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#about">
            <AboutIcon
              className={`${styles["nav-icon"]} ${styles["about-icon"]}`}
            />
          </Nav.Link>
          <Nav.Link href="#guide">
            <GuideIcon
              className={`${styles["nav-icon"]} ${styles["guide-icon"]}`}
            />
          </Nav.Link>
          <Nav.Link href="#members">
            <MembersIcon
              className={`${styles["nav-icon"]} ${styles["member-icon"]}`}
            />
          </Nav.Link>
          {(isVisible() || screen.isMediumScreen(currentScreenWidth)) && (
            <Nav.Link
              onClick={openMenu}
              className="align-self-center p-3"
              href="#"
            >
              {menuIcon}
            </Nav.Link>
          )}
        </Nav>
        {(isVisible() || screen.isMediumScreen(currentScreenWidth)) && (
          <ul
            className={`${styles["pages-list"]} bg-dark w-100 ${
              menu ? "" : styles.hide
            }`}
          >
            {pagesPathsAndNames.map((p) => {
              return p.pageName === "Settings" ? (
                <li key={p.pageName} className="p-3">
                  <NavLink
                    className={`dropdown-item ${styles.page}`}
                    to={p.href}
                    onClick={modal.handleShow}
                  >
                    {p.pageName}
                  </NavLink>
                </li>
              ) : (
                <li key={p.pageName} className="p-3">
                  <NavLink className={`dropdown-item ${styles.page}`} to={p.href}>
                    {p.pageName}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </Navbar>
  );
}
