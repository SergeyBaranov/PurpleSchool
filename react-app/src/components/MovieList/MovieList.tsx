import React from "react";
import styles from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { movies } from '../../data/movies';

const MovieList: React.FC = () => {
  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
