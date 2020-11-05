import React from "react";
import styles from "./Buttons.css";

function Buttons() {
  return (
    <div className={styles.Buttons}>
      <button className={styles.button1}>Try Vyorius</button>
      <button className={styles.button2}>Learn More</button>
    </div>
  );
}

export default Buttons;
