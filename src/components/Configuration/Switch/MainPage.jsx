import React from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../configuration.module.css";
function MainPage() {
  return (
    <div className={styles["swtchs-container"] + " row p-0"}>
      <h3 className="col-12 text-secondary">Select Switch</h3>
      <div className="col-6 p-3">
        <Table responsive="sm" hover>
          <thead className="text-center">
            <tr>
              <th colSpan={4}>Electrical Build</th>
            </tr>
            <tr className="bg-dark text-white">
              <th></th>
              <th>Floor Name</th>
              <th> Vlan IP</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Floor 1</td>
              <td>10.10.10.10</td>
              <td className="d-flex">
                <NavLink
                  to={`../1`}
                  className={`${styles["chng-btns"]} btn btn-lg btn-dark`}
                >
                  change
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Floor 2</td>
              <td>10.10.10.10</td>
              <td className="d-flex">
                <NavLink
                  to={`../2`}
                  className={`${styles["chng-btns"]} btn btn-lg btn-dark`}
                >
                  change
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Floor 3</td>
              <td>10.10.10.10</td>
              <td className="d-flex">
                <NavLink
                  to={`../3`}
                  className={`${styles["chng-btns"]} btn btn-lg btn-dark`}
                >
                  change
                </NavLink>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="col-6 p-3">
        <Table responsive="sm" hover>
          <thead className="text-center">
            <tr>
              <th colSpan={4}>Mechanical Build</th>
            </tr>
            <tr className="bg-dark text-white">
              <th></th>
              <th>Floor Name</th>
              <th> Vlan IP</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Floor 1</td>
              <td>10.10.10.10</td>
              <td className="d-flex">
                <NavLink
                  to={`../4`}
                  className={`${styles["chng-btns"]} btn btn-lg btn-dark`}
                >
                  change
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Floor 2</td>
              <td>10.10.10.10</td>
              <td className="d-flex">
                <NavLink
                  to={`../5`}
                  className={`${styles["chng-btns"]} btn btn-lg btn-dark`}
                >
                  change
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Floor 3</td>
              <td>10.10.10.10</td>
              <td className="d-flex">
                <NavLink
                  to={`../6`}
                  className={`${styles["chng-btns"]} btn btn-lg btn-dark`}
                >
                  change
                </NavLink>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="col-6 p-3">
        <Table responsive="sm" hover>
          <thead className="text-center">
            <tr>
              <th colSpan={4}>Preparatory Build</th>
            </tr>
            <tr className="bg-dark text-white">
              <th></th>
              <th>Floor Name</th>
              <th> Vlan IP</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Floor 1</td>
              <td>10.10.10.10</td>
              <td className="d-flex">
                <NavLink
                  to={`../7`}
                  className={`${styles["chng-btns"]} btn btn-lg btn-dark`}
                >
                  change
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Floor 2</td>
              <td>10.10.10.10</td>
              <td className="d-flex">
                <NavLink
                  to={`../8`}
                  className={`${styles["chng-btns"]} btn btn-lg btn-dark`}
                >
                  change
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Floor 3</td>
              <td>10.10.10.10</td>
              <td className="d-flex">
                <NavLink
                  to={`../9`}
                  className={`${styles["chng-btns"]} btn btn-lg btn-dark`}
                >
                  change
                </NavLink>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="col-6 p-3">
        <Table responsive="sm" hover>
          <thead className="text-center">
            <tr>
              <th colSpan={4}>Administrator Build</th>
            </tr>
            <tr className="bg-dark text-white">
              <th></th>
              <th>Floor Name</th>
              <th> Vlan IP</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Floor 1</td>
              <td>10.10.10.10</td>
              <td className="d-flex">
                <NavLink
                  to={`../10`}
                  className={`${styles["chng-btns"]} btn btn-lg btn-dark`}
                >
                  change
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Floor 2</td>
              <td>10.10.10.10</td>
              <td className="d-flex">
                <NavLink
                  to={`../11`}
                  className={`${styles["chng-btns"]} btn btn-lg btn-dark`}
                >
                  change
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Floor 3</td>
              <td>10.10.10.10</td>
              <td className="d-flex">
                <NavLink
                  to={`../12`}
                  className={`${styles["chng-btns"]} btn btn-lg btn-dark`}
                >
                  change
                </NavLink>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MainPage;
