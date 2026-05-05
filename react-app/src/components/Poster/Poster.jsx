import React from "react";
import './Poster.css';
import { RatingButton } from "../RatingButton/RatingButton";

function Poster({ src }) {
    return (
        <div className="poster">
            <RatingButton />
            <img src={src} alt="Poster" />            
        </div>
    )
}

export default Poster;