import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { addMovieOnList, existsMovieOnList } from '../firebase/dataService';
import { useEffect, useState } from 'react';


export function MovieDetail(id){
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [ isAdded, setIsAdd ] = useState(false);
    useEffect(() =>{
        fetch("https://api.themoviedb.org/3/movie/"+movieId+'?language=es',{
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGNjY2VjOWNjNzFkMWRjNTUwOWNmMGFkOGJlOTAyOCIsInN1YiI6IjYyZGExNWZiMWM2YWE3MDA0YzllYmJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-v1oXJlu23eNQGpWsb15TW5eS9e5l8SsoYJIboY_NyA",
                "Content-Type": "application/json;charset=utf-8"
            }
        }).then(result => result.json())
        .then(data => {
            setMovie(data);
         });

         const existsMovie = async() => {
            var result = await existsMovieOnList(movieId);
            setIsAdd(result);
          };
          existsMovie();
    },[movieId]);

    if (!movie) {
        return null;
    }

    const urlImage = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (<Container className="paddingGrid">
        <Row>
            <Col sm="auto" className="mr-5">
                <Row>
                    <img className="imageGridDetail" src={urlImage} alt={movie.title}></img>
                </Row>
                <Row >
                    <Col className="ml-3 buttonStyle mplistColor py-1">
                        <Link to={"f"} className="text-dark my-0">
                            <div>
                                Comprar
                            </div>                                
                        </Link>                    
                    </Col>
                    {isAdded ?
                        <Col className="mr-3 buttonStyle mpelistColorDisabled py-1">
                            <div>
                                Agregado
                            </div>
                        </Col>
                        :
                        <Col className="mr-3 buttonStyle mplistColor py-1">
                            <Link to={"/Movie/"+movie.id} onClick={() => { movie.listStatus = 1; addMovieOnList(movie).then(() => setIsAdd(true))}} className="text-dark my-0">
                                <div>
                                    Agregar
                                </div>
                            </Link> 
                        </Col>
                }

                </Row>
            </Col>
            <Col className="text-start ml-5">
                <h1>{movie.title}</h1>
                {movie.adult ? 
                        <div className="roundedDiv bg-danger d-inline-flex px-3">
                            <p className="text-light my-0">para adultos</p>
                        </div>
                        :
                        <div className="roundedDiv bg-success d-inline-flex px-3">
                            <p className="text-light my-0">para todo publico</p>
                        </div>
                    }
                <p className="text-light">{movie.overview}</p>
                <p className="text-light">Fecha de Estreno: {movie.release_date}</p>
                <p className="text-light">{movie.vote_average}</p>
            </Col>
        </Row>
    </Container>)
}