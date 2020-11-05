import React from "react";
import styles from "./Heading.css";

function Heading() {
  return (
    <div className={styles.Heading}>
      <span className={styles.textType1}>Vyorius</span>
      <span>brings unmanned robots</span>
      <span className={styles.textType2}>together</span>
      <span>,wherever they are</span>
    </div>
  );
}

export default Heading;
