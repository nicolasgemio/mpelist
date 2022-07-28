import { Link } from 'react-router-dom';

export default function Movie({movie}){
    const urlImage = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(
    <li className="movieCard">
            <Link to={"/Movie/"+movie.id}>
                    <img className="movieImage" src={urlImage} alt={movie.title}></img>
                    <div>{movie.title}</div>
            </Link>
    </li>);
};