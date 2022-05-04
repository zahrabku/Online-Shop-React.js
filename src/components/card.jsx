import { React, useState } from "react";
import styles from "../styles/card.module.css";

const Card = (props) => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(() => count + 1);
  };

  const reduce = () => {
    setCount(() => count - 1);
  };

  return (
    <div className={styles.cardBody}>
      <img src={props.image} alt="phone" className={styles.cardImg} />
      <div className={styles.HorizontalLine}></div>
      <div className={styles.description}>{props.description}</div>
      <p className={styles.cost}>{props.cost}</p>
      <div className={styles.counter}>
        <span onClick={add} className={styles.countButoon}>
          +
        </span>
        <span className={styles.count}>{count}</span>
        <span onClick={reduce} className={styles.countButoon}>
          -
        </span>
      </div>
    </div>
  );
};

export default Card;
