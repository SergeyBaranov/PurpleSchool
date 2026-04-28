import React from "react";
import './InputComponent.css';

function InputComponent({value, onChange, icon, showIcon = false}) {

    return (
        <div className="inputComponent">
            {showIcon && icon && <span className="inputIcon">{icon}</span>}
            <input
                type="text"
                placeholder="Введите название"
                name="text"
                value={value}
                onChange={onChange}
                className='inputBase'
            />
        </div>
    )
}

export default InputComponent;