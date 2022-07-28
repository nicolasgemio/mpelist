import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { saveMovieOnList, deleteMovie } from '../firebase/dataService';

export function ListItem(props){
    const item = props.Item;
    const Status = {
        1: "Pendiente",
        2: "Viendo",
        3: "Visto"
    }
    const StatusStyle = {
        1: "danger",
        2: "warning",
        3: "succes",
    }
    
    const urlImage = "https://image.tmdb.org/t/p/w500" + item.poster_path;
    return (<div key={item.Id} className="listItemStyle">
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-1">
                    <Link className='d-flex' to={"/Movie/"+item.id}>
                        <img className="imageList imageGrid" src={urlImage} alt={item.tiele}></img>
                    </Link>
                </div>
                <div className="col-md-10 pl-2">
                    <div className="card-body">
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-text"><small className="text-muted">{item.overview}</small></p>
                    </div>
                </div>
                <div className="col-md-1">
                    <Dropdown>
                        <Dropdown.Toggle variant={StatusStyle[item.listStatus]} id="dropdown-basic">
                            {Status[item.listStatus]}
                        </Dropdown.Toggle>
                    
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => {item.listStatus = 1; saveMovieOnList(item,props.updateList);}}>Pendiente</Dropdown.Item>
                            <Dropdown.Item onClick={() => {item.listStatus = 2; saveMovieOnList(item,props.updateList); }}>Viendo</Dropdown.Item>
                            <Dropdown.Item onClick={() => {item.listStatus = 3; saveMovieOnList(item,props.updateList);}}>Visto</Dropdown.Item>
                            <Dropdown.Item onClick={() => {deleteMovie(item.id,props.updateList);}}>Eliminar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
        
        </div>)
}