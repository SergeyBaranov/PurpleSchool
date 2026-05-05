import React from "react";
import "./MoviePosterTitle.css";

function MoviePosterTitle({ title }) {
    return <h3 className="movie-title">{title}</h3>;  // Или другой элемент
}

export default MoviePosterTitle;