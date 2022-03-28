import { useState, useEffect } from 'react';
import NavbarC from '../components/navbar/Navbar';
import SearchBar from '../components/video-widget/SearchBar';
import VideoList from '../components/video-widget/VideoList';
import VideoDetail from '../components/video-widget/VideoDetail';
import useVideos from '../hooks/useVideos';
import { StylesContainer, StylesRow, StylesSelectedDiv, StylesList } from '../components/video-widget/VideoStyles';

const Videos = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('art');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <>
            <NavbarC />
            <StylesContainer>
                <SearchBar searchresult={search} />
                <div>
                    <StylesRow>
                        <StylesSelectedDiv>
                            <VideoDetail video={selectedVideo} />
                        </StylesSelectedDiv>
                        <StylesList>
                            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                        </StylesList>
                    </StylesRow>
                </div>
            </StylesContainer>
        </>
    );
};

export default Videos;