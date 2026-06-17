import React from "react";
import styles from "./MovieCard.module.css";
import AddToFavouriteButton from '../AddToFavouriteButton/AddToFavouriteButton';
import MoviePosterTitle from '../MoviePosterTitle/MoviePosterTitle';
import Poster from '../Poster/Poster';
import { Movie } from '../../types';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className={styles.movieCard}>
      <Poster src={movie.posterUrl} />
      <MoviePosterTitle title={movie.title} /> 
      <AddToFavouriteButton />
    </Link>
  );
};

export default MovieCard;
