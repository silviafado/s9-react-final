import { Link } from 'react-router-dom';
import LoginModal from '../login/LoginModal';
import { Nav, Navbar } from "react-bootstrap";
import './NavbarStyles.css';


const NavbarC = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav><Link to="/">HOME</Link></Nav>
                    <Nav><Link to="/photos">PHOTOS</Link></Nav>
                    <Nav><Link to="/videos">VIDEOS</Link></Nav>
                    <Nav><Link to="/art">ART</Link></Nav>
                    <Nav><LoginModal /></Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarC;