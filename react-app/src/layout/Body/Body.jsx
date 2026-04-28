import React from "react";
import "./Body.css";
import Form from '../../components/InputForm/InputForm';
import Heading from "../../components/Heading/Heading";
import Paragraph from "../../components/Paragraph/Paragraph";

function Body() { 
    return (
        <div className="bodyContent">
            <Heading title="Поиск фильмов" />
            <Paragraph />
            <Form /> 
        </div>
    )
}

export default Body;