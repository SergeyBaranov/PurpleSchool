import React, { useRef, useContext } from "react";
import styles from './LoginForm.module.css';
import Button from "../Button/Button";
import InputComponent from "../InputComponent/InputComponent";
import Heading from "../Heading/Heading";
import UserContext from '../../context/UserContext';

const LoginForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('LoginForm must be used within UserProvider');
  }

  const { login } = context;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const userName = inputRef.current?.value;
    if (userName) {
      login(userName);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <Heading title="Вход" />
      <InputComponent ref={inputRef} type="text" placeholder="Username" className={styles.input} />
      <Button ref={buttonRef} type="submit" text="Войти в профиль" className={styles.loginButton} />
    </form>
  );
};

export default LoginForm;
