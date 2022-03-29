import { FC, useState } from "react";
import { VideoProps } from "./video.t";
import { PlayButton, VideoInfo, Wrapper } from "./video.e";
import VideoPreview from "../../../assets/images/video/video.png";
import { Container } from "../..";
import PlayButtonIcon from "../../../assets/images/icon/play.svg";

const Video: FC<VideoProps> = ({ title, info }) => {
  const [video, setVideo] = useState(false);
  return (
    <Container>
      <Wrapper>
        <img src={VideoPreview} alt="Video" />
        <PlayButton onClick={() => setVideo(true)}>
          <img style={{ width: "15px" }} src={PlayButtonIcon} alt="" />
        </PlayButton>
        <VideoInfo>
          <h3>{title}</h3>
          <p>{info}</p>
        </VideoInfo>
        <iframe
          style={
            !video
              ? { display: "none", opacity: 0 }
              : { display: "block", opacity: 1 }
          }
          width="103%"
          height="520px"
          src="https://www.youtube.com/embed/T2IsBk3H3VI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Wrapper>
    </Container>
  );
};

export default Video;
