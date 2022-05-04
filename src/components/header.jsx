import React from "react";
import styles from "../styles/header.module.css";
import banner from "../image/kaidi-guo-jGlqOzrhn9k-unsplash.jpg";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img src={banner} alt="mountain" className={styles.bannerImg} />
      <div className={styles.textContainer}>
        <h1 className={styles.bannerTitle}>Mobile Store</h1>
        <p className={styles.bannerSpan}>choose, compare, buy</p>
      </div>
    </div>
  );
};

export default Header;
