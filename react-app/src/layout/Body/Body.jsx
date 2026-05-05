import React from "react";
import "./Body.css";
import Form from '../../components/InputForm/InputForm';
import Heading from "../../components/Heading/Heading";
import Paragraph from "../../components/Paragraph/Paragraph";
import MovieList from "../../components/MovieList/MovieList";

function Body() { 
    return (
        <div className="bodyContent">
            <div className="topContent">
                <Heading title="Поиск фильмов" />
                <Paragraph />
                <Form /> 
            </div>
            <div className="moviesList">
                <MovieList />
            </div>
        </div>
        
    )
}

export default Body;