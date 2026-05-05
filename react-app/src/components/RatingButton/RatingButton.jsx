import React from "react";
import './RatingButton.css';

export function RatingButton() {

    const count = 0;

    return (
        <button className="rating-button" >
            <img src="./icons/star.svg" alt="Rating" />
            {count}
        </button>
    )
}