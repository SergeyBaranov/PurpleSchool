import React from "react";
import styles from './MoviePosterTitle.module.css';

interface MoviePosterTitleProps {
  title: string;
}

const MoviePosterTitle: React.FC<MoviePosterTitleProps> = ({ title }) => {
  return <h3 className={styles['movie-title']}>{title}</h3>;
};

export default MoviePosterTitle;
