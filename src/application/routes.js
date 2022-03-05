import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from '../pages/Home'
import Navbar from '../components/navbar/Navbar';
import Browser from '../pages/Browser';
import Photos from '../pages/Photos';
import Videos from '../pages/Videos';
import Art from '../pages/Art';

// Exercise 5: Routes
const Path = () => {

    const [term, setTerm] = useState('');

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/start/" element={<Browser />} />
                <Route path="/photos/" element={<Photos />} />
                <Route path="/videos/" element={<Videos />} />
                <Route path="/art/" element={<Art />} />
                <Route path="*" element={() => <div>404</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Path;