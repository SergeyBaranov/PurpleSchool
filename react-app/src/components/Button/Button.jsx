import './Button.css';
import React, { useState } from "react";

function Button({ isLoading = false, onClick }) {

  return (
    <button
      className='button accent'
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? 'Идет поиск...' : 'Искать'}
    </button>
  );
}

export default Button;