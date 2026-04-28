import React from "react";
import './TopMenu.css';
import TopMenuItem from '../TopMenuItem/TopMenuItem';

const loginIcon = () => {
    return (
        <img src="./loginIcon.svg" alt="Login" />
    )
}

function TopMenu() {
  return (
    <ul className="top-menu">
      <TopMenuItem title="Поиск фильмов" />
      <TopMenuItem title="Мои фильмы" />
      <TopMenuItem title="Войти" icon={loginIcon()} />
    </ul>
  );
}

export default TopMenu;