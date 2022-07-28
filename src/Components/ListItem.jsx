import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { saveMovieOnList, deleteMovie } from '../firebase/dataService';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    return (
        <Container className=" ">
                <div key={item.Id} className="listItemStyle">
        <div className="card" >
        <Row>
        <Col sm="auto">
            <Link className='d-flex' to={"/Movie/"+item.id}>
                <img className="imageList imageGrid" src={urlImage} alt={item.tiele}></img>
            </Link>
        </Col>
        <Col>
            <div className="card-body">
                <h3 className="">{item.title}</h3>
                <p className="ml-6"><small className="text-muted">{item.overview}</small></p>
            </div>
        </Col>
        <Col sm="auto">
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
        </Col>
        </Row>
        </div>
        
        </div>
    </Container>

            
)
}