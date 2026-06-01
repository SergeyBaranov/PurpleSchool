import React from "react";
import styles from './MoviePosterTitle.module.css';

function MoviePosterTitle({ title }) {
    return <h3 className={styles['movie-title']}>{title}</h3>;  // Или другой элемент
}

export default MoviePosterTitle;