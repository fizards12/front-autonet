import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import styles from "../configuration.module.css";
import ViewModal from "../ViewModal";
import useForm from "../../../Hooks/useForm";
import { ModalContext } from "../../../App";

function Router({name}) {
  const modal = useContext(ModalContext)
  const [newConfigurationSettings, onChange] = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    modal.handleShow();
  };

  return (
    <>
      <h1 className="row px-2 text-secondary">{name}</h1>
      <Form onSubmit={onSubmit} className={`row px-3`}>
        <Form.Group className={`col-6 p-2`}>
          <Form.Label className={`text-secondary p-1`} htmlFor="i1">
            Hostname
          </Form.Label>
          <Form.Control
            id="hostname"
            name="Hostname"
            value={newConfigurationSettings["Hostname"] || ""}
            onChange={onChange}
            type="text"
            placeholder="Type here"
          />
        </Form.Group>
        <Form.Group className={`col-6 p-2`}>
          <Form.Label className={`text-secondary p-1`} htmlFor="i1">
            Enable
          </Form.Label>
          <Form.Control
            id="enable"
            name="Enable"
            value={newConfigurationSettings["Enable"] || ""}
            onChange={onChange}
            type="text"
            placeholder="Type here"
          />
        </Form.Group>
        <Form.Group className={`col-6 p-2`}>
          <Form.Label className={`text-secondary p-1`} htmlFor="i1">
            Welcoming Massage
          </Form.Label>
          <Form.Control
            id="massage"
            name="Welcoming Massage"
            value={newConfigurationSettings["Welcoming Massage"] || ""}
            onChange={onChange}
            type="text"
            placeholder="Type here"
          />
        </Form.Group>
        <Form.Group className={`col-6 p-2`}>
          <Form.Label className={`text-secondary p-1`} htmlFor="i1">
            Console Password
          </Form.Label>
          <Form.Control
            id="console-password"
            name="Console Password"
            value={newConfigurationSettings["Console Password"] || ""}
            onChange={onChange}
            type="text"
            placeholder="Type here"
          />
        </Form.Group>
        <Form.Group className={`col-6 p-2`}>
          <Form.Label className={`text-secondary p-1`} htmlFor="i1">
            Telnet Password
          </Form.Label>
          <Form.Control
            id="telnet-password"
            name="Telnet Password"
            value={newConfigurationSettings["Telnet Password"] || ""}
            onChange={onChange}
            type="text"
            placeholder="Type here"
          />
        </Form.Group>
        <Form.Group className={`col-6 p-2`}>
          <Form.Label className={`text-secondary p-1`} htmlFor="i1">
            Ip
          </Form.Label>
          <Form.Control
            id="ip"
            name="Ip"
            value={newConfigurationSettings["Ip"] || ""}
            onChange={onChange}
            type="text"
            placeholder="Type here"
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Form.Control
            className={`${styles["btn-sub"]} my-3 btn btn-lg btn-dark`}
            type="submit"
            value={`View`}
          />
        </div>
      </Form>
      <ViewModal
        device={{
          deviceName: name,
          newConfigurationSettings: { ...newConfigurationSettings } || {},
        }}
      />
    </>
  );
}

export default Router;
