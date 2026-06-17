import React, { useState } from "react";
import Button from "../Button/Button";
import InputComponent from "../InputComponent/InputComponent";
import styles from './InputForm.module.css';

const InputForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    // API запрос или логика поиска
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const searchIcon = (): JSX.Element => {
    return (
      <img src="./searchIcon.svg" alt="Search" />
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formSearch}>
      <InputComponent
        value={name}
        onChange={(e) => setName(e.target.value)}
        showIcon={true}
        icon={searchIcon()}
      />
      <Button type="submit" isLoading={isLoading} />
    </form>
  );
};

export default InputForm;
