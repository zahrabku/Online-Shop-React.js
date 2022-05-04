import React from "react";
import styles from "../styles/navbar.module.css";
import logo from "../image/logo192.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarItems}>
        <ul className={styles.list}>
          <li>
            <Link to="/" className={styles.link}>
              Home Page
            </Link>
          </li>
          <li>
            <Link to="/product" className={styles.link}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className={styles.link}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={logo} alt="logo" class={styles.logo} />
      </div>
    </div>
  );
};

export default Navbar;
