import React, { useContext } from "react";
import styles from './TopMenu.module.css';
import TopMenuItem from '../TopMenuItem/TopMenuItem';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const loginIcon = () => {
    return (
        <img src="./loginIcon.svg" alt="Login" />
    )
}

function TopMenu() {
  const { currentUser, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <ul className={styles['top-menu']}>
      <TopMenuItem title="Поиск фильмов" onClick={() => navigate('/')} />
      <TopMenuItem title="Мои фильмы" />
      {currentUser && currentUser.isLogined ? (
        <>
          <TopMenuItem title={currentUser.name} />
          <TopMenuItem title="Выйти" onClick={logout} />
        </>
      ) : (
        <TopMenuItem title="Войти" icon={loginIcon()} onClick={() => navigate('/login')} />
      )}
    </ul>
  );
}

export default TopMenu;