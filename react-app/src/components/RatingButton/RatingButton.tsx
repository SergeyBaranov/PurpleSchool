import React, { useState } from "react";
import styles from './RatingButton.module.css';

export const RatingButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <button className={styles['rating-button']} onClick={() => setCount(count + 1)}>
      <img src="./icons/star.svg" alt="Rating" />
      {count}
    </button>
  );
};
