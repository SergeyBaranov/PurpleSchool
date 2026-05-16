import React from "react";
import styles from "./Header.module.css";
import TopMenu from '../../components/TopMenu/TopMenu';

function Header() {
  return (
    <header className={styles.header}>
      <img src="../logo.png" alt="" />
      <TopMenu />
    </header>
  );
}

export default Header;