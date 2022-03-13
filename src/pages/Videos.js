import { useState, useEffect } from 'react';
import SearchBar from '../components/video-widget/SearchBar';
import VideoList from '../components/video-widget/VideoList';
import VideoDetail from '../components/video-widget/VideoDetail';
import useVideos from '../hooks/useVideos';

const Videos = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('art');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container">
            <SearchBar searchresult={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videos;