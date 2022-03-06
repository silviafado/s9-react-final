import { useState } from 'react';
import unsplash from '../apis/unsplash';
import SearchBar from '../components/photo-widget/SearchBar';
import ImageList from '../components/photo-widget/ImageList';

const Art = () => {

    const [artworks, setArtworks] = useState([]);

    const onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: 'art ' + term }
        });
        setArtworks(response.data.results);
    };

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={onSearchSubmit} />
            <ImageList images={artworks} />
        </div>
    );
}

export default Art;