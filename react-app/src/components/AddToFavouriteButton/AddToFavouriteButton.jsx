import React from "react";
import styles from './AddToFavouriteButton.module.css';

function AddToFavouriteButton() {
    return (
        <button className={styles.addToFavouriteButton}>
            <img src='./icons/like.svg' alt='like' />
            Добавить в избранное
        </button>
    )
}

export default AddToFavouriteButton;