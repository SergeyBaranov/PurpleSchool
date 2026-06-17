import React, { useContext } from "react";
import styles from './TopMenu.module.css';
import TopMenuItem from '../TopMenuItem/TopMenuItem';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const loginIcon = (): JSX.Element => {
  return (
    <img src="./loginIcon.svg" alt="Login" />
  );
};

const TopMenu: React.FC = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error('TopMenu must be used within UserProvider');
  }

  const { currentUser, logout } = context;

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
};

export default TopMenu;
