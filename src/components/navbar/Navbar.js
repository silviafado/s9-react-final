import { useState } from 'react/cjs/react.development';
import useWindowWidth from 'react-hook-use-window-width';
import LoginModal from '../login/LoginModal';
import { Nav, Navbar } from "react-bootstrap";
import '../../index.css';


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