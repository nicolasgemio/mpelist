import { Link } from 'react-router-dom';
import { useState } from 'react';

export function PaginationMoviesGrid(props){
  const [ currentPage, setCurrentPage ] = useState(1);
  const getMovies = function (page) {
    
		fetch(
			'https://api.themoviedb.org/3/discover/movie?language=es&page=' +
				(page != null ? page : 1),
			{
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGNjY2VjOWNjNzFkMWRjNTUwOWNmMGFkOGJlOTAyOCIsInN1YiI6IjYyZGExNWZiMWM2YWE3MDA0YzllYmJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-v1oXJlu23eNQGpWsb15TW5eS9e5l8SsoYJIboY_NyA',
					'Content-Type': 'application/json;charset=utf-8',
				},
			}
		)
			.then((result) => result.json())
			.then((data) => {
				props.setMovies(data.results);
				setCurrentPage(page);
			});
	};

    return (<div className="center"><nav aria-label="Page navigation example">
    <ul className="pagination paginationGrid">
      <li className="page-item">
        <div className="page-link mplistColor" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </div>
      </li>
      <li className={"page-item "+(parseInt(currentPage) !== 1 ? '' : 'active' )}><Link to="/" onClick={() => getMovies(1)} className="page-link mplistColor">1</Link></li>
      <li className={"page-item "+(parseInt(currentPage) !== 2 ? '' : 'active' )}><Link to="/" onClick={() => getMovies(2)} className="page-link mplistColor">2</Link></li>
      <li className={"page-item "+(parseInt(currentPage) !== 3 ? '' : 'active' )}><Link to="/" onClick={() => getMovies(3)} className="page-link mplistColor">3</Link></li>
      <li className={"page-item "+(parseInt(currentPage) !== 4 ? '' : 'active' )}><Link to="/" onClick={() => getMovies(4)} className="page-link mplistColor">4</Link></li>
      <li className={"page-item "+(parseInt(currentPage) !== 5 ? '' : 'active' )}><Link to="/" onClick={() => getMovies(5)} className="page-link mplistColor">5</Link></li>

      <li className="page-item ">
        <div className="page-link mplistColor" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </div>
      </li>
    </ul>
  </nav>
  </div>)
}