import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { StylesNav, StylesNavEl } from './NavbarStyles';
import LoginModal from '../login/LoginModal';

const Navbar = () => {

    const [showVideo, setShowVideo] = useState(true);
    const showPhoto = () => setShowVideo(false);

    return (
        <StylesNav>
            <StylesNavEl><Link to="/">HOME</Link></StylesNavEl>
            <StylesNavEl ><Link to="/start">SEARCH</Link></StylesNavEl>
            <StylesNavEl><Link to="/photos" onClick={showPhoto}>PHOTOS</Link></StylesNavEl>
            <StylesNavEl><Link to="/videos" showvideo={showVideo.toString()}>VIDEOS</Link></StylesNavEl>
            <StylesNavEl><Link to="/art">ART</Link></StylesNavEl>
            <StylesNavEl>
                <LoginModal />
            </StylesNavEl>
        </StylesNav>
    )
}

export default Navbar;