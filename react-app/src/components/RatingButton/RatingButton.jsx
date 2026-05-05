import React from "react";
import './RatingButton.css';
import { useState } from "react";

export function RatingButton() {

    const [count, setCount] = useState(0);

    return (
        <button className="rating-button" onClick={() => setCount(count + 1)}>
            <img src="./icons/star.svg" alt="Rating" />
            {count}
        </button>
    )
}