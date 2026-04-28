import React from "react";
import './TopMenuItem.css';

function TopMenuItem({ title, icon }) {
  return (
    <li className="top-menu-item">
      <a href="#">{title} {icon}</a>
    </li>
  );
}

export default TopMenuItem;