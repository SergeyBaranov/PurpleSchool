import React from "react";
import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";

const movies = [
    {
        id: 1,
        title: 'Black Widow',
        posterUrl: '/posters/blackWidow.png',
    },
    {
        id: 2,
        title: 'Shang Chi',
        posterUrl: '/posters/ShangChi.png',
    },
    {
        id: 3,
        title: 'Loki',
        posterUrl: '/posters/loki.png',
    },
    {
        id: 4,
        title: 'How I Met Your Mother',
        posterUrl: '/posters/howImetYourMother.png',
    },
    {
        id: 5,
        title: 'Money Heist',
        posterUrl: '/posters/moneyHeist.png',
    },
    {
        id: 6,
        title: 'Friends',
        posterUrl: '/posters/friends.png',
    },
    {
        id: 7,
        title: 'The Big Bang Theory',
        posterUrl: '/posters/bigBangTheory.png',
    },
    {
        id: 8,
        title: 'Two And a Half Men',
        posterUrl: '/posters/twoAndHalfMen.png',
    },
];

function MovieList() {
    return (
        <div className="movieList">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie} />
            ))}
        </div>
    )
}

export default MovieList;