import React, { useContext, useEffect } from 'react';
import styles from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

function LoginPage() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && currentUser.isLogined) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <div className={styles.loginPage}>
      <LoginForm />      
    </div>
  );
}

export default LoginPage;
