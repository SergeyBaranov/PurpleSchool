import React from "react";
import "./Header.css";
import TopMenu from '../../components/TopMenu/TopMenu';

function Header() {
  return (
    <header className="header">
      <img src="../logo.png" alt="" />
      <TopMenu />
    </header>
  );
}

export default Header;