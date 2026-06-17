import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../../data/movies';
import styles from './MoviePage.module.css';

const MoviePage: React.FC = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return (
      <div className={styles.moviePage}>
        <p>Фильм не найден</p>
        <Link to="/">Назад</Link>
      </div>
    );
  }

  return (
    <div className={styles.moviePage}>
      <h2>{movie.title}</h2>
      <img src={movie.posterUrl} alt={movie.title} />
      <p>Описание пока отсутствует.</p>
      <Link to="/">Назад</Link>
    </div>
  );
};

export default MoviePage;
