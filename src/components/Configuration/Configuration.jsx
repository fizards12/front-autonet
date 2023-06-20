import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { MdRouter as RouterIcon } from "react-icons/md";
import Logo from "./media/Logo.png";
import styles from "./configuration.module.css";
import { Image, Navbar } from "react-bootstrap";
import Routers from "./Router/Routers";
import Switches from "./Switch/Switches";
import { ModalContext } from "../../App";
import useCreateModal from "../../Hooks/useCreateModal";

function Configuration() {
  const deviceNewConfigurationModal = useCreateModal();
  return (
    <>
      <header className={styles.header + " bg-dark"}>
        <NavLink to={"/"}>
          <FaArrowAltCircleLeft className={styles["back-icon"]} />
        </NavLink>
        <div className={styles.Logo}>
          <Image className="w-100" src={Logo} alt="Logo" />
        </div>
        <Navbar className={styles["sections-nav"]}>
          <NavLink
            className={styles["nav-item"] + " col text-center"}
            to={"routers/main"}
          >
            <RouterIcon /> Routers
          </NavLink>
          <NavLink
            className={styles["nav-item"] + " col text-center"}
            to={"switches/main"}
          >
            <svg
              className={styles["switch-icon"]}
              xmlns="http://www.w3.org/2000/svg"
              width="45.38"
              height="16.589"
              viewBox="0 0 45.38 16.589"
            >
              <g transform="translate(-10 -336.763)">
                <g transform="translate(10 336.763)">
                  <path
                    d="M53.58-174.143c-.141.052-1.559.96-3.165,2.036l-2.895,1.945,10.385.039c5.72.013,15.062.013,20.771,0l10.385-.039L86.1-172.068c-1.629-1.05-3.118-1.958-3.294-2.036C82.438-174.26,54.025-174.286,53.58-174.143Z"
                    transform="translate(-45.613 174.237)"
                    fill="#fff"
                  />
                  <path
                    d="M10-66.644v5.706H55.38V-72.35H10ZM46.871-68.2v1.038H44.035v-2.075h2.836Zm5.673,0v1.038H49.708v-2.075h2.837V-68.2ZM15.672-66.125v1.038H13.782v-2.075h1.891Zm3.782,0v1.038H17.563v-2.075h1.891Zm3.781,0v1.038H21.345v-2.075h1.891v1.038Zm3.782,0v1.038H25.126v-2.075h1.891Zm3.782,0v1.038H28.908v-2.075H30.8Zm3.781,0v1.038H32.69v-2.075h1.891v1.038Zm3.782,0v1.038H36.471v-2.075h1.891Zm3.782,0v1.038H40.253v-2.075h1.891Zm4.727,1.038v1.038H44.035v-2.075h2.836Zm5.673,0v1.038H49.708v-2.075h2.837v1.038Z"
                    transform="translate(-10 77.527)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
            Switches
          </NavLink>
        </Navbar>
      </header>
      <div>
        <ModalContext.Provider value={deviceNewConfigurationModal}>
          <div className={styles.body + ` m-4 p-3`}>
            <Routes>
              <Route path="routers/*" element={<Routers />} />
              <Route path="switches/*" element={<Switches />} />
              <Route path="*" element={<Navigate to={"routers/main"} replace={true} />} />
            </Routes>
          </div>
        </ModalContext.Provider>
      </div>
    </>
  );
}

export default Configuration;
