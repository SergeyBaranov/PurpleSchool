import React from "react";
import styles from "./MovieCard.module.css";
import AddToFavouritesButton from '../AddToFavouriteButton/AddToFavouriteButton';
import MoviePosterTitle from '../MoviePosterTitle/MoviePosterTitle';
import Poster from '../Poster/Poster';

function MovieCard({ movie }) {
    
    return (
        <div className={styles.movieCard}>
            <Poster src={movie.posterUrl} />
            <MoviePosterTitle title={movie.title} /> 
            <AddToFavouritesButton />
        </div>
    )
}

export default MovieCard;