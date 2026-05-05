import React from "react";
import './AddToFavouriteButton.css';

function AddToFavouriteButton() {
    return (
        <button className="addToFavouriteButton">
            <img src='./icons/like.svg' alt='like' />
            Добавить в избранное
        </button>
    )
}

export default AddToFavouriteButton;