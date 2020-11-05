import React from "react";
import styles from "./Image.css";
import pic3 from "../../../../assets/Picture3.jpg";

function Image() {
  return (
    <div className={styles.Image}>
      <img src={pic3} alt="pic3" />
    </div>
  );
}

export default Image;
