/** @format */

import { FC, useState } from "react";
import Slide from "./slide/slide";
import CaruselStyle from "./carousel.e";
import CaruselProps from "./carousel.t";
import { slides } from "./data";
import left from "../../../../assets/images/carusel/left.svg";
import right from "../../../../assets/images/carusel/right.svg";

const Carusel: FC<CaruselProps> = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if(Array.isArray(slides) || slides.length <= 0){
  //   return null;
  // }

  return (
    <CaruselStyle>
      <div className="slide" onClick={prevSlide}>
        <img src={left} alt="" />
      </div>
      <div className="slide" onClick={nextSlide}>
        <img src={right} alt="" />
      </div>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slides active" : "slides"}
            key={index}
          >
            {index === current && <Slide {...slide} />}
          </div>
        );
      })}
    </CaruselStyle>
  );
};

export default Carusel;
