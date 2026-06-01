import React from "react";
import styles from "./Body.module.css";
import Form from '../../components/InputForm/InputForm';
import Heading from "../../components/Heading/Heading";
import Paragraph from "../../components/Paragraph/Paragraph";
import MovieList from "../../components/MovieList/MovieList";
import LoginForm from "../../components/LoginForm/LoginForm";

function Body({ currentUser, onLogin }) { 
    return (
        
        <div className={styles.bodyContent}>
            <LoginForm onLogin={onLogin}/>
            <div className={styles.topContent}>
                <Heading title="Поиск фильмов" />
                <Paragraph />
                <Form /> 
            </div>
            <div className={styles.moviesList}>
                <MovieList />
            </div>
        </div>
        
    )
}

export default Body;