import React, { ReactNode } from "react";
import styles from './TopMenuItem.module.css';

interface TopMenuItemProps {
  title: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const TopMenuItem: React.FC<TopMenuItemProps> = ({ title, icon, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
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
};

export default TopMenuItem;
