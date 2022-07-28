import Movie from "../Components/Movie";
import { PaginationMoviesGrid } from "../Components/PaginationMoviesGrid";
import { useEffect, useState } from 'react';

export function MoviesGrid(){
    const [movies, setMovies] = useState([]);
    useEffect(() =>{
        fetch("https://api.themoviedb.org/3/discover/movie?language=es",{ 
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGNjY2VjOWNjNzFkMWRjNTUwOWNmMGFkOGJlOTAyOCIsInN1YiI6IjYyZGExNWZiMWM2YWE3MDA0YzllYmJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-v1oXJlu23eNQGpWsb15TW5eS9e5l8SsoYJIboY_NyA",
                "Content-Type": "application/json;charset=utf-8"
            }
        }).then(result => result.json()).then(data => {
            setMovies(data.results);
        });
    },[]);

    return (
        <div className="divTest">
            <br/><br/>
            <ul className="moviesGrid .bg-light">
                {
                    movies.map((movie) => {
                        return (<Movie key={movie.id} movie={movie}></Movie>);
                    })
                }       
            </ul>
            <PaginationMoviesGrid setMovies={setMovies}></PaginationMoviesGrid>
        </div>
    )
}