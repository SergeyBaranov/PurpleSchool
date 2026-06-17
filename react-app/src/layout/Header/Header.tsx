import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="../logo.png" alt="" />
    </header>
  );
};

export default Header;
