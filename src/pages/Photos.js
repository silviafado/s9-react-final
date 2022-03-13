import SearchBar from '../components/photo-widget/SearchBar';
import ImageList from '../components/photo-widget/ImageList';
import useImages from '../hooks/useImages';

const Photos = () => {
    const [images, search] = useImages('color');

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={search} />
            <ImageList images={images} />
        </div>
    );
}

export default Photos;