import React from "react";
import styles from './Poster.module.css';
import { RatingButton } from "../RatingButton/RatingButton";

function Poster({ src }) {
    return (
        <div className={styles.poster}>
            <RatingButton />
            <img src={src} alt="Poster" />            
        </div>
    )
}

export default Poster;