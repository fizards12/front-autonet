import React from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../configuration.module.css";
function MainPage() {
  return (
    <div className="row p-0">
      <h4 className="col-12 py-2">Select Router</h4>
      <Table responsive="md" className="" hover>
        <thead className="bg-dark text-white">
          <tr>
            <th></th>
            <th>Router Name</th>
            <th> Ip</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Main Router</td>
            <td>192.168.1.1</td>
            <td className="d-flex">
              <NavLink
                to={`../main-router`}
                className={`col-6 my-1 ${styles["chng-btns"]} btn btn-lg btn-dark`}
              >
                change
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Electrical Build</td>
            <td>192.168.1.1</td>
            <td className="d-flex">
              <NavLink
                to={`../electrical`}
                className={`col-6 my-1 ${styles["chng-btns"]} btn btn-lg btn-dark`}
              >
                change
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mechanical Build</td>
            <td>192.168.1.1</td>
            <td className="d-flex">
              <NavLink
                to={`../mechanical`}
                className={`col-6 my-1 ${styles["chng-btns"]} btn btn-lg btn-dark`}
              >
                change
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Administrator Build</td>
            <td>192.168.1.1</td>
            <td className="d-flex">
              <NavLink
                to={`../administrator`}
                className={`col-6 my-1 ${styles["chng-btns"]} btn btn-lg btn-dark`}
              >
                change
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Preparatory Build</td>
            <td>192.168.1.1</td>
            <td className="d-flex">
              <NavLink
                to={`../preparatory`}
                className={`col-6 my-1 ${styles["chng-btns"]} btn btn-lg btn-dark`}
              >
                change
              </NavLink>
            </td>
          </tr>
          
        </tbody>
      </Table>
    </div>
  );
}

export default MainPage;
