import VideoList from '../components/video-widget/VideoList';
import { GlobalStyle, StylesHeader, StylesLogo } from '../styled';
import SearchBar from '../components/photo-widget/SearchBar';
import ImageList from '../components/photo-widget/ImageList';

const Browser = ({ search, showvideo }) => {

    return (
        <div>
            <StylesHeader>
                <StylesLogo />
            </StylesHeader>
            <SearchBar search={search} />
            {showvideo ? <VideoList search={search} />
                :
                <ImageList search={search} />}
        </div>
    )
}

export default Browser;