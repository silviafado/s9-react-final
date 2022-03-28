import { StylesSelectedFrame, StylesSelectedText, StylesSelectedHeader } from "./VideoStyles";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <StylesSelectedFrame>
        <iframe title="video player" src={videoSrc} />
      </StylesSelectedFrame>
      <StylesSelectedText>
        <StylesSelectedHeader>{video.snippet.title}</StylesSelectedHeader>
        <p>{video.snippet.description}</p>
      </StylesSelectedText>
    </div>
  );
};

export default VideoDetail;