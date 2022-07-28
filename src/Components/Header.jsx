import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Header(){
    return (
        <div className="mplistColor headerGrid">
            <Row>
                <Col>
                    <Link to="/" className=''>
                        <img className='title-mpelist' src={require("../Images/logo.png")} alt="logo" ></img>                        
                    </Link>
                </Col>
                <Col>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link active" to="/">Peliculas</Link>
                                <Link className="nav-item nav-link" to="/MyList">Mi Lista</Link>
                                <Link className="nav-item nav-link " to={"d"}>Mi Cuenta</Link>
                                <Link className="nav-item nav-link" to={"d"}>Contacto</Link>
                            </div>
                        </div>
                    </nav>
                </Col>
            </Row>
        </div>);
}