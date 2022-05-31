import movies from "../Data/movies.json";
import Movie from "./Movie";
import { PaginationMoviesGrid } from "./PaginationMoviesGrid";

export function MoviesGrid(){
    return (
        <div>
            <ul className="moviesGrid .bg-light">
                {
                    movies.map((movie) => {
                        return (<Movie key={movie.id} movie={movie}></Movie>);
                    })
                }       
            </ul>
            <PaginationMoviesGrid></PaginationMoviesGrid>
        </div>
    )
}