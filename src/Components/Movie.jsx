
export default function Movie({movie}){
    const urlImage = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return(<li className="movieCard">
        <img width={80} height={138} className="movieImage" src={urlImage} alt={movie.title}></img>
        <div>{movie.title}</div>
    </li>);
}