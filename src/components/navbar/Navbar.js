import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { StylesNav, StylesNavEl } from './NavbarStyles';
import LoginModal from '../login/LoginModal';
import icon from '../../assets/img/menu_icon_mobile.svg';
import close from '../../assets/img/close_menu_icon.svg';

const Navbar = () => {

    const [show, setShow] = useState(false);
    const showMenu = () => setShow(true);
    const close = () => setShow(false);
    const [showVideo, setShowVideo] = useState(true);
    const showPhoto = () => setShowVideo(false);

    return (
        <>
            {show ?
                <StylesNav show={show}>
                    <StylesNavEl><Link to="/">HOME</Link></StylesNavEl>
                    <StylesNavEl><Link to="/photos" onClick={showPhoto}>PHOTOS</Link></StylesNavEl>
                    <StylesNavEl><Link to="/videos" showvideo={showVideo.toString()}>VIDEOS</Link></StylesNavEl>
                    <StylesNavEl><Link to="/art">ART</Link></StylesNavEl>
                    <StylesNavEl>
                        <LoginModal />
                    </StylesNavEl>
                </StylesNav> : null}
            {!show ?
                <StylesNavEl>
                    <button onClick={showMenu}>
                        <img src={icon} alt="menu icon" />
                    </button>
                </StylesNavEl> : null}
            {show ?
                <>
                    <StylesNavEl>
                        <button onClick={close}>
                            <img src={close} alt="close menu icon" />
                        </button>
                    </StylesNavEl>
                    <StylesNav style={{ alignContent: 'rigth' }} >
                    </StylesNav>
                </> : null}
        </>
    )
}

export default Navbar;