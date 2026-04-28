import React from "react";
import Button from "../Button/Button";
import InputComponent from "../InputComponent/InputComponent";
import './InputForm.css';

function InputForm() {
    const [name, setName] = useState("");
     const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // API запрос или логика поиска
        setTimeout(() => {
        setIsLoading(false);
        }, 2000);
    }

    const searchIcon = () => {
        return (
            <img src="./searchIcon.svg" alt="Search" />
        )
    }

    return (
        <form onSubmit={handleSubmit} className="formSearch">
            <InputComponent
                value={name}
                onChange={(e) => setName(e.target.value)}
                showIcon={true}
                icon={searchIcon()}
            />
            <Button type="submit" isLoading={isLoading} />
        </form>
    )
}

export default InputForm;