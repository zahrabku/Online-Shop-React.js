import React from "react";
import styles from "../styles/search.module.css";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <p className={styles.searchTitle}>Search Among More Than 2000 Mobile Phones:</p>
      <input placeholder="search..." className={styles.searchInput}/>
    </div>
  );
};

export default Search;
