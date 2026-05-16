import React from "react";
import styles from './TopMenuItem.module.css';

function TopMenuItem({ title, icon }) {
  return (
    <li className={styles['top-menu-item']}>
      <a href="#">{title} {icon}</a>
    </li>
  );
}

export default TopMenuItem;