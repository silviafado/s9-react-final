import NavbarC from '../components/navbar/Navbar';
import SearchBar from '../components/photo-widget/SearchBar';
import ImageList from '../components/photo-widget/ImageList';
import useImages from '../hooks/useImages';
import { StylesContainer } from '../components/video-widget/VideoStyles';

const Art = () => {
    const [images, search] = useImages('art');

    return (
        <>
            <NavbarC />
            <StylesContainer>
                <SearchBar onSubmit={search} />
                <ImageList images={images} />
            </StylesContainer>
        </>
    );
}

export default Art;