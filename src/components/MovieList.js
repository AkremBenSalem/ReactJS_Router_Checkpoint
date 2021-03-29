import React from 'react'
import MovieCard from './MovieCard'
import "./MovieList.css"

function MovieList({movies, searchFilter, rateFilter, setMoviePage}) {
    return (
        <div className="movieList">
            {movies.filter((element) => element.rate >= rateFilter)
            .filter((element) => element.title.toUpperCase().includes(searchFilter.toUpperCase()))
            .map((e, i) => <MovieCard movie={e} key={i}  setMoviePage={setMoviePage}/> )}
        </div>
    )
}


export default MovieList

