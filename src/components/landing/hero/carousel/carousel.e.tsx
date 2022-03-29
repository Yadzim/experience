/** @format */

import styled from "styled-components";

const CaruselStyle = styled.div`
  position: relative;
  margin: 100px 2rem;
  .slides {
    opacity: 0;
    transition-duration: 1s ease;
    transform: scale(0.96);
    margin: 50px 0;
  }
  .slides.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1);
  }
  .slide {
    position: absolute;
    width: 62px;
    height: 107px;
    background: #d5d5d5;
    opacity: 0.5;
    border-radius: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    cursor: pointer;
    z-index: 10;
    &:nth-child(1) {
      left: -32px;
    }
    &:nth-child(2) {
      right: -32px;
    }
    &:hover {
      width: 65px;
      height: 110px;
    }
    &:active {
      width: 60px;
      height: 100px;
    }
  }
  @media screen and (max-width: 540px) {
    padding: 0;
    margin: 0;
    .slide {
      &:nth-child(1) {
        width: 40px;
        height: 80px;
        left: -15px;
      }
      &:nth-child(2) {
        right: -15px;
        width: 40px;
        height: 80px;
      }
    }
  }
`;

export default CaruselStyle;
