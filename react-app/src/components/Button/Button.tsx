import styles from './Button.module.css';
import React, { forwardRef, ReactNode } from "react";

interface ButtonProps {
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isLoading = false, onClick, children, text, type = 'button', className = '' }, ref) => {
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
  }
);

Button.displayName = 'Button';

export default Button;
