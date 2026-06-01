import React from "react";
import styles from './TopMenuItem.module.css';

function TopMenuItem({ title, icon, onClick }) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <li className={styles['top-menu-item']}>
      <a href="#" onClick={handleClick}>{title} {icon}</a>
    </li>
  );
}

export default TopMenuItem;