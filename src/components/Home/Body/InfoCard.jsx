import Modal from "react-bootstrap/Modal";
import React, { useContext, useEffect } from "react";
import { Image, NavLink } from "react-bootstrap";
import { ModalContext } from "../../../App";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function InfoCard({ member , styles }) {
  const modal = useContext(ModalContext);
  const { name, image, email, position, skills } = {
    ...member
  };
  const navigator = useNavigate();

  useEffect(()=>{
    modal.handleShow();
    return ()=> modal.handleClose();
  },[])
  return (
    <Modal dialogClassName={styles["md-dialog"]} contentClassName={styles["modal-card"]} show={modal.show} onHide={() => {
      modal.handleClose();
      navigator("../..");
    }} centered>
      <Modal.Header className={styles["card-header"]}>
        <Image className={styles["card-img"]} src={image} alt={name} />
        <Modal.Title>
          <h4 style={{color:"blue"}}>{name}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5 style={{color:"blue"}}>Email: </h5>
            <NavLink href={"mailto:"+ email}>{email}</NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5 style={{color:"blue"}}>position: </h5>
            <span>{position}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5 style={{color:"blue"}}>skills: </h5>
            <ListGroup as={"ul"}>
              {skills.map((e)=>(
                <ListGroup.Item key={e} className={styles["skill-item"]}>{e}</ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}

export default InfoCard;
