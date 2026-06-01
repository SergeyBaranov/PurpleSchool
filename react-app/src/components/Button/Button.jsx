import styles from './Button.module.css';
import React from "react";

const Button = React.forwardRef(({ isLoading = false, onClick, children, text, type = 'button', className = '' }, ref) => {
  const label = isLoading ? 'Идет поиск...' : (children || text || 'Искать');

  return (
    <button
      ref={ref}
      type={type}
      className={`${styles.button} ${styles.accent} ${className}`.trim()}
      onClick={onClick}
      disabled={isLoading}
    >
      {label}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;