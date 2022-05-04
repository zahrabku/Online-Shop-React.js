import React from "react";
import styles from "../styles/Logos.module.css";
import Appple from "../image/Xiaomi_logo_(2021-).svg.png";

const Logos = () => {
  return (
    <div>
      <h2 className={styles.title}>Who supports us</h2>
      <div className={styles.logoConatainer}>
        <img src={Appple} alt="apple" className={styles.logo} />
        <img src={Appple} alt="apple" className={styles.logo} />
        <img src={Appple} alt="apple" className={styles.logo} />
      </div>
    </div>
  );
};

export default Logos;
