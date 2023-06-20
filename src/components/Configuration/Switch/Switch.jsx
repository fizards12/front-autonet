import React from 'react'
import { Form } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import styles from '../configuration.module.css'
function Switch() {
    const params = useParams();
    
  return (
    <>
      <h1 className="text-secondary row px-2">Switch {params.id}</h1>
      <Form className={`row px-3`}>
        <Form.Group className={`col-6 p-2`}>
          <Form.Label className={`text-secondary p-1`} htmlFor="i1">Input Name</Form.Label>
          <Form.Control type="text" placeholder="Type here" />
        </Form.Group>
        <Form.Group className={`col-6 p-2`}>
          <Form.Label className={`text-secondary p-1`} htmlFor="i1">Input Name</Form.Label>
          <Form.Control type="text" placeholder="Type here" />
        </Form.Group>
        <Form.Group className={`col-6 p-2`}>
          <Form.Label className={`text-secondary p-1`} htmlFor="i1">Input Name</Form.Label>
          <Form.Control type="text" placeholder="Type here" />
        </Form.Group>
        <Form.Group className={`col-6 p-2`}>
          <Form.Label className={`text-secondary p-1`} htmlFor="i1">Input Name</Form.Label>
          <Form.Control type="text" placeholder="Type here" />
        </Form.Group>
        <Form.Group className={`col-6 p-2`}>
          <Form.Label className={`text-secondary p-1`} htmlFor="i1">Input Name</Form.Label>
          <Form.Control type="text" placeholder="Type here" />
        </Form.Group>
        <Form.Group className={`col-6 p-2`}>
          <Form.Label className={`text-secondary p-1`} htmlFor="i1">Input Name</Form.Label>
          <Form.Control type="text" placeholder="Type here" />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Form.Control
            className={`${styles["btn-sub"]} my-3 btn btn-lg btn-dark`}
            type="submit"
            value={`View`}
          />
        </div>
      </Form>
    </>
  )
}

export default Switch