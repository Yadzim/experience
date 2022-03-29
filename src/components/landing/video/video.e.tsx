import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 40px 0;
  img {
    width: 100%;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    transform: translateX(-5px);
  }
`;

export const VideoInfo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50px;
  width: 70%;
  color: #fff;
  h3 {
    font-weight: 600;
    font-size: 36px;
  }
  p {
    font-size: 17px;
  }
  @media (max-width: 1000px) {
    left: 30px;
    width: 85%;
    bottom: 0;
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 8px;
      line-height: 1.8;
    }
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fb574c;
  border-radius: 50%;
  cursor: pointer;
  animation: pulse-animation 2s infinite;
  img {
    transform: translateX(4px);
  }
  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px rgba(251, 87, 76, 0.6);
    }
    100% {
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }
  }
  @media (max-width: 1000px) {
    top: 25%;
    left: 85%;
    width: 50px;
    height: 50px;
  }
`;
