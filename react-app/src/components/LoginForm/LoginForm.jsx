import React, { useRef } from "react";
import styles from './LoginForm.module.css';
import Button from "../Button/Button";
import InputComponent from "../InputComponent/InputComponent";
import Heading from "../Heading/Heading";

function LoginForm({ onLogin }) {
    const inputRef = useRef(null);
    const buttonRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userName = inputRef.current?.value;
        if (userName) {
            onLogin(userName);
            inputRef.current.value = '';
        }
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <Heading title="Вход" />
            <InputComponent ref={inputRef} type="text" placeholder="Username" className={styles.input} />
            <Button ref={buttonRef} type="submit" text="Войти в профиль" className={styles.loginButton} />
        </form>
    )
}

export default LoginForm;