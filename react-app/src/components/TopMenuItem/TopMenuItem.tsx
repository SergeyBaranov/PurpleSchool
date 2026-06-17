import React, { ReactNode } from "react";
import styles from './TopMenuItem.module.css';
import { NavLink } from 'react-router-dom';

interface TopMenuItemProps {
  title: string;
  icon?: ReactNode;
  onClick?: () => void;
  to?: string;
}

const TopMenuItem: React.FC<TopMenuItemProps> = ({ title, icon, onClick, to }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <li className={styles['top-menu-item']}>
      {to ? (
        <NavLink to={to} className={({ isActive }) => (isActive ? styles.active : '')}>
          {title} {icon}
        </NavLink>
      ) : (
        <a href="#" onClick={handleClick}>{title} {icon}</a>
      )}
    </li>
  );
};

export default TopMenuItem;
