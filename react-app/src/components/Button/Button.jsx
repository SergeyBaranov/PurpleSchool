import styles from './Button.module.css';
import React, { useState } from "react";

function Button({ isLoading = false, onClick }) {

  return (
    <button
      className={`${styles.button} ${styles.accent}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? 'Идет поиск...' : 'Искать'}
    </button>
  );
}

export default Button;