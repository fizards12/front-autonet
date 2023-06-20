import React, { useContext, useEffect } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { ModalContext } from "../../App";

function ViewModal(props) {
  const modal = useContext(ModalContext);
  const device = { ...props.device };
  device.map = function (callbackFunction) {
    const newConfigurationSettingValues = Object.values(
      this.newConfigurationSettings
    );
    const newConfigurationSettingNames = Object.keys(
      this.newConfigurationSettings
    );
    if (newConfigurationSettingValues.length == 0) return <tr><td colSpan="2" className="bg-secondary text-center text-white">Please Fill at least One Input Field</td></tr>;
    return newConfigurationSettingValues.map((value, index) =>
      callbackFunction(value, index, newConfigurationSettingNames)
    );
  };

  return (
    <Modal show={modal.show} onHide={modal.handleClose} centered>
      <Modal.Header>
        <Modal.Title>
          <h3>{device.deviceName}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Table hover responsive="sm">
            <thead className="bg-dark text-white">
              <tr>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {device.map((newValue, index, newConfigurationSettingNames) => (
                <tr key={newConfigurationSettingNames[index]}>
                  <td>{newConfigurationSettingNames[index]}</td>
                  <td>{newValue}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark">Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewModal;
