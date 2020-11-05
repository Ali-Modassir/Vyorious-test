import React from "react";
import styles from "./Footer.css";
import LeftContents from "./LeftContents/LeftContents";
import RightContents from "./RightContents/RightContents";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.left}>
        <LeftContents />
      </div>
      <div className={styles.right}>
        <RightContents />
      </div>
    </div>
  );
}

export default Footer;
