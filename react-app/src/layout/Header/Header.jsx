import React from "react";
import styles from "./Header.module.css";
import TopMenu from '../../components/TopMenu/TopMenu';

function Header({ currentUser, onLogout }) {
  return (
    <header className={styles.header}>
      <img src="../logo.png" alt="" />
      <TopMenu currentUser={currentUser} onLogout={onLogout} />
    </header>
  );
}

export default Header;