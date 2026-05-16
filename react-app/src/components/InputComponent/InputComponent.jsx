import React from "react";
import styles from './InputComponent.module.css';

function InputComponent({value, onChange, icon, showIcon = false}) {

    return (
        <div className={styles.inputComponent}>
            {showIcon && icon && <span className={styles.inputIcon}>{icon}</span>}
            <input
                type="text"
                placeholder="Введите название"
                name="text"
                value={value}
                onChange={onChange}
                className={styles.inputBase}
            />
        </div>
    )
}

export default InputComponent;