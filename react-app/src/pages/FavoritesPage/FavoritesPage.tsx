import React from 'react';
import styles from './FavoritesPage.module.css';

const FavoritesPage: React.FC = () => {
  return (
    <div className={styles.favoritesPage}>
      <h2>Избранное</h2>
      <p>Здесь будут ваши избранные фильмы.</p>
    </div>
  );
};

export default FavoritesPage;
