import React from "react";
import styles from './RatingButton.module.css';
import { useState } from "react";

export function RatingButton() {

    const [count, setCount] = useState(0);

    return (
        <button className={styles['rating-button']} onClick={() => setCount(count + 1)}>
            <img src="./icons/star.svg" alt="Rating" />
            {count}
        </button>
    )
}