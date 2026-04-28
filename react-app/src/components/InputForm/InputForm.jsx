import React from "react";
import Button from "../Button/Button";
import InputComponent from "../InputComponent/InputComponent";
import './InputForm.css';

function InputForm() {

    const searchIcon = () => {
        return (
            <img src="./searchIcon.svg" alt="Search" />
        )
    }
    
    return (
        <form action="onSubmit" className="formSearch">
            <InputComponent
                value={name}
                onChange={(e) => setName(e.target.value)}
                showIcon={true}
                icon={searchIcon()}
            />
            <Button type="submit" />
        </form>
    )
}

export default InputForm;