import { useState } from 'react';
import unsplash from '../apis/unsplash';
import SearchBar from '../components/photo-widget/SearchBar';
import ImageList from '../components/photo-widget/ImageList';

const Photos = () => {

    const [images, setImages] = useState([]);

    const onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        setImages(response.data.results);
        console.log(images);
    };

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={onSearchSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default Photos;