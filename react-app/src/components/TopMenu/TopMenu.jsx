import React from "react";
import styles from './TopMenu.module.css';
import TopMenuItem from '../TopMenuItem/TopMenuItem';

const loginIcon = () => {
    return (
        <img src="./loginIcon.svg" alt="Login" />
    )
}

function TopMenu({ currentUser, onLogout }) {
  return (
    <ul className={styles['top-menu']}>
      <TopMenuItem title="Поиск фильмов" />
      <TopMenuItem title="Мои фильмы" />
      {currentUser && currentUser.isLogined ? (
        <TopMenuItem title={`${currentUser.name} (Выход)`} onClick={onLogout} />
      ) : (
        <TopMenuItem title="Войти" icon={loginIcon()} />
      )}
    </ul>
  );
}

export default TopMenu;