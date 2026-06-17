import React, { forwardRef, ReactNode } from "react";
import styles from './InputComponent.module.css';

interface InputComponentProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  showIcon?: boolean;
  className?: string;
}

const InputComponent = forwardRef<HTMLInputElement, InputComponentProps>(
  ({
    type = 'text',
    placeholder = 'Введите название',
    name = 'text',
    value,
    defaultValue,
    onChange,
    icon,
    showIcon = false,
    className = ''
  }, ref) => {
    return (
      <div className={styles.inputComponent}>
        {showIcon && icon && <span className={styles.inputIcon}>{icon}</span>}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          className={`${styles.inputBase} ${className}`.trim()}
        />
      </div>
    );
  }
);

InputComponent.displayName = 'InputComponent';

export default InputComponent;
