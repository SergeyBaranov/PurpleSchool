import React from "react";
import styles from "./Header.module.css";
import TopMenu from '../../components/TopMenu/TopMenu';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="../logo.png" alt="" />
      <TopMenu />
    </header>
  );
};

export default Header;
