import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { StylesNav, StylesNavEl } from './NavbarStyles';
import useWindowWidth from 'react-hook-use-window-width';
import LoginModal from '../login/LoginModal';
import icon from '../../assets/img/menu_icon_mobile.svg';
import CloseButton from 'react-bootstrap/CloseButton';
import { useEffect } from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../../index.css';


const NavbarC = () => {

    const [show, setShow] = useState(true);
    const width = useWindowWidth();
    console.log(width);

    const showMenu = () => setShow(true);
    const close = () => setShow(false);


    /*useEffect(() => {
        if (width < 500) close();
    }, []);*/


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