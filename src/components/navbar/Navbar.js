import LoginModal from '../login/LoginModal';
import { Nav, Navbar } from "react-bootstrap";
import './NavbarStyles.css';


const NavbarC = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/photos">PHOTOS</Nav.Link>
                    <Nav.Link href="/videos">VIDEOS</Nav.Link>
                    <Nav.Link href="/art">ART</Nav.Link>
                    <Nav><LoginModal /></Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarC;