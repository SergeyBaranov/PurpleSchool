import './Button.css';
import React, { useState } from "react";

function Button() {

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Симуляция загрузки
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <button
    className='button accent'
    onClick={handleClick}
    disabled={isLoading}
    >
      {isLoading ? 'Идет поиск...' : 'Искать'}
    </button>
  );
}

export default Button;