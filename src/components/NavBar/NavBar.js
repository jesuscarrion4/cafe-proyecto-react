import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function ColorSchemesExample() {
  
  
  return (
      <Navbar bg="light" variant="light">
          <Navbar.Brand to={"/"}>Coffe is life</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to={"/"}>Home</Link></Nav.Link>
            <Nav.Link ><Link to={`/categoria/2`}>categoria 2</Link></Nav.Link>
            <Nav.Link ><Link to={`/categoria/1`}>categoria 1</Link></Nav.Link>
          </Nav>
          <CartWidget />
      </Navbar>
  );
}

export default ColorSchemesExample;
