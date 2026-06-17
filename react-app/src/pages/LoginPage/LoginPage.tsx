import React, { useContext, useEffect } from 'react';
import styles from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const LoginPage: React.FC = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error('LoginPage must be used within UserProvider');
  }

  const { currentUser } = context;

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
};

export default LoginPage;
