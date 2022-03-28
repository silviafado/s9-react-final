import SearchBar from '../components/photo-widget/SearchBar';
import ImageList from '../components/photo-widget/ImageList';
import useImages from '../hooks/useImages';
import NavbarC from '../components/navbar/Navbar';
import { StylesContainer } from '../components/video-widget/VideoStyles';

const Photos = () => {
    const [images, search] = useImages('color');

    return (
        <>
            <NavbarC />
            <StylesContainer>
                <SearchBar onSubmit={search} />
                <ImageList images={images} search={search} />
            </StylesContainer>
        </>
    );
}

export default Photos;