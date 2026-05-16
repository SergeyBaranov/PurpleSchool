import React from "react";
import styles from './TopMenu.module.css';
import TopMenuItem from '../TopMenuItem/TopMenuItem';

const loginIcon = () => {
    return (
        <img src="./loginIcon.svg" alt="Login" />
    )
}

function TopMenu() {
  return (
    <ul className={styles['top-menu']}>
      <TopMenuItem title="Поиск фильмов" />
      <TopMenuItem title="Мои фильмы" />
      <TopMenuItem title="Войти" icon={loginIcon()} />
    </ul>
  );
}

export default TopMenu;