import React from "react";
import styles from "./MovieCard.module.css";
import AddToFavouriteButton from '../AddToFavouriteButton/AddToFavouriteButton';
import MoviePosterTitle from '../MoviePosterTitle/MoviePosterTitle';
import Poster from '../Poster/Poster';
import { Movie } from '../../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      <Poster src={movie.posterUrl} />
      <MoviePosterTitle title={movie.title} /> 
      <AddToFavouriteButton />
    </div>
  );
};

export default MovieCard;
