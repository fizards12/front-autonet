import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import styles from "./header.module.css"
import { ModalContext } from "../../../App";
import { RiUserSettingsLine as SettingIcon } from "react-icons/ri";
import { login } from "../../../store/status/statusReducer";
import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";


function Settings({user}) {
  const modal = useContext(ModalContext);
  const navigator = useNavigate();
  const SettingSectionsComponents = {
    profile: (
      <div className="p-3 profile col">
        <h2>Profile</h2>
        <div className="page-body">
          <p>
            <span>Name:</span> <span>{`${user.firstname} ${user.lastname}`}</span>
          </p>
          <p>
            <span>Email:</span>{" "}
            <a href={`mailto: ${user.email}`}>{`${user.firstname} ${user.lastname}`}</a>
          </p>
          <p>
            <span>Accessibility:</span> <span>{user.position}</span>
          </p>
        </div>
      </div>
    ),
    username: (
      <div className="p-3 chng-user col">
        <h2>Change Username</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="old-user">Old Username</Form.Label>
            <Form.Control
              id={"old-user"}
              type="textbox"
              placeholder="old username"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="new-user">New Username</Form.Label>
            <Form.Control
              id={"new-user"}
              type="textbox"
              placeholder="new username"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="confirm-user">Confirm Username</Form.Label>
            <Form.Control
              id={"confirm-user"}
              type="textbox"
              placeholder="new username"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="confirm-user">password</Form.Label>
            <Form.Control id={"pwd"} type="textbox" placeholder="password" />
          </Form.Group>
        </Form>
      </div>
    ),
    password: (
      <div className="p-3 chng-pw col">
        <h2>Change Password</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="old-pw">Old Password</Form.Label>
            <Form.Control
              id={"old-pw"}
              type="textbox"
              placeholder="old password"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="new-pw">New Password</Form.Label>
            <Form.Control
              id={"new-pw"}
              type="textbox"
              placeholder="new password"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="confirm-pw">Confirm Password</Form.Label>
            <Form.Control
              id={"confirm-pw"}
              type="textbox"
              placeholder="new password"
            />
          </Form.Group>
        </Form>
      </div>
    ),
    map: function (setFunctionality) {
      const values = Object.values(this);
      const keys = Object.keys(this);
      return values.map(
        (section, index) => index < 3 && setFunctionality(section, index, keys)
      );
    },
  };

  useEffect(() => {
    modal.handleShow();
    return () => modal.handleClose();
  }, []);
  return (
    <>
      <Modal
        dialogClassName={styles["mdl"]}
        show={modal.show}
        onHide={() => {
          modal.handleClose();
          navigator(-2);
        }}
        centered
      >
        <Modal.Header className={styles["bg-img"] + " text-white"}>
          <Modal.Title className="d-flex align-items-center">
            <SettingIcon className="text-white me-1" /> <span>Settings</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`d-flex container-fluid ${styles["mdl-body"]}`}>
          <Navbar className={`d-flex flex-column ${styles["side-bar"]} col-4`}>
            <NavLink className={({isActive})=> "text-dark " + styles["nav-link"] + (isActive ? " " + styles.active : "") } id="profile" to="profile">
              profile
            </NavLink>

            <NavLink className={({isActive})=> "text-dark " + styles["nav-link"] +  (isActive ? " " + styles.active : "") } id="user" to="username">
              change username
            </NavLink>

            <NavLink className={({isActive})=> "text-dark " + styles["nav-link"] + (isActive ? " " + styles.active : "") } id="pw" to="password">
              change password
            </NavLink>
          </Navbar>
          <Routes>
            {SettingSectionsComponents.map(
              (section, sectionIndex, keys) =>
                sectionIndex < 3 && (
                  <Route
                    key={keys[sectionIndex]}
                    path={keys[sectionIndex]}
                    element={section}
                  />
                )
            )}
            <Route path="*" element={<Navigate to="profile" />} />
          </Routes>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              modal.handleClose();
              navigator(-2);
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              modal.handleClose();
              navigator(-2);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.status.user,
  };
};
const mapDispatchToProps = dispatch =>({
  login: (user)=> dispatch(login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
