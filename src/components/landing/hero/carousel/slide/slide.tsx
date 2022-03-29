/** @format */

import { FC } from "react";
import SlideStyle from "./slide.e";
import SlideProps from "./slide.t";

const Slide: FC<SlideProps> = ({ img, title, text }) => {
  return (
    <SlideStyle>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <button>Batafsil</button>
      </div>
      <img src={img} alt="" />
    </SlideStyle>
  );
};

export default Slide;
