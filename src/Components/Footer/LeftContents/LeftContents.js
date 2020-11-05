import React from "react";
import styles from "./LeftContents.css";
import Tagline from "./Tagline/Tagline";
import Heading from "./Heading/Heading";
import Para from "./Paragraph/Para";
import Buttons from "./Buttons/Buttons";
import EndLine from "./EndLine/Endline";

function LeftContents() {
  return (
    <div className={styles.LeftContents}>
      <Tagline />
      <Heading />
      <Para />
      <Buttons />
      <EndLine />
    </div>
  );
}

export default LeftContents;
