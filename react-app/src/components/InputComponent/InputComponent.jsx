import React from "react";
import styles from './InputComponent.module.css';

const InputComponent = React.forwardRef(({
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
    )
});

InputComponent.displayName = 'InputComponent';

export default InputComponent;