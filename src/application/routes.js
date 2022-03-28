import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Photos from '../pages/Photos';
import Videos from '../pages/Videos';
import Art from '../pages/Art';
import PrivateRoute from '../components/private-routes/PrivateRoute';
import Vip from '../pages/Vip';

// Routes
const Path = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/vip/" element={<PrivateRoute component={Vip} />} />
                <Route path="/photos/" element={<Photos />} />
                <Route path="/videos/" element={<Videos />} />
                <Route path="/art/" element={<Art />} />
                <Route path="*" element={() => <div>404</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Path;