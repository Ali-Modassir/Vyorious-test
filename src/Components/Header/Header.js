import React from "react";
import styles from "./Header.css";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import NavBtn from "./NavBtn/NavBtn";

function Header() {
  return (
    <div className={styles.Header}>
      <Logo />
      <Navbar />
      <NavBtn />
    </div>
  );
}

export default Header;
