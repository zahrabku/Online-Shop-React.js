import React from "react";
import styles from "../styles/cardContainer.module.css";
import Card from "./card";
import Iphone11 from "../image/iphone11-black-select-2019.png";
import Huawei from "../image/huawei-p20-samsung-galaxy-s9-huawei-mate-10-iphone-x-png-favpng-WGtdsAstyKqeGhHMh9D2wGA2i.jpg";
import Redmi from "../image/Redmi-note-10.png";
import Iphone13 from "../image/iphone-13-pink-select-2021.png";
import samsung from "../image/ultra_20.jpg";

const CardContainer = () => {
  return (
    <div className={styles.CardContainer}>
      <Card image={Iphone11} description="Iphone11" cost={"40 $"} />
      <Card image={Iphone13} description="samsung note 10" cost={"45 $"} />
      <Card image={Redmi} description="Redmi note 10" cost={"55 $"} />
      <Card image={Iphone13} description="Iphone13" cost={"65 $"} />
    </div>
  );
};

export default CardContainer;
