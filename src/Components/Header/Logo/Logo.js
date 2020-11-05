import React from "react";
import styles from "./Logo.css";
import Pic1 from "../../../assets/Picture1.png";
import Pic2 from "../../../assets/Picture2.png";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={Pic1} alt="Pic1" className={styles.pic1}></img>
      <img src={Pic2} alt="Pic2" className={styles.pic2}></img>
    </div>
  );
}

export default Logo;
