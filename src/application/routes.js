import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from '../pages/Home'
import Navbar from '../components/navbar/Navbar';
import Photos from '../pages/Photos';
import Videos from '../pages/Videos';
import Art from '../pages/Art';
import Welcome from '../pages/Welcome';

// Routes
const Path = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route showexact path="/welcome/" element={<Welcome />} />
                <Route path="/photos/" element={<Photos />} />
                <Route path="/videos/" element={<Videos />} />
                <Route path="/art/" element={<Art />} />
                <Route path="*" element={() => <div>404</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Path;