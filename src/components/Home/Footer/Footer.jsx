import React from "react";
import Logo from "./Logo.png";
import styles from "./footer.module.css"
export default function Footer() {
  return (
    <footer className={`${styles.footer} container d-flex`}>
      <div className="col-md-4 text-center">
        <h5 className={styles.h5}>Supervised By</h5>
        <p>Dr. Onsy Ahmed Abd-Aleem</p>
      </div>
      <div className="col-md-2">
        <img src={Logo} alt="Logo" style={{ width: "100%" }} />
      </div>
      <div className="col-md-4 text-center">
        <h5 className={styles.h5}>Created By</h5>
        <p>Mahmoud Sameh</p>
      </div>
    </footer>
  );
}
