import { StylesItem } from './VideoStyles';

const VideoItem = ({ video, onVideoSelect }) => {

  return (
    <StylesItem onClick={() => onVideoSelect(video)}>
      <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
      <div>
        <div>{video.snippet.title}</div>
      </div>
    </StylesItem>
  );
};

export default VideoItem;
