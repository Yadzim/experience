import React, { FC } from "react";
import { LandingProps } from "./landing.t";
import { NavBar } from "../../components";
import Hero from "../../components/landing/hero/hero";
import Informations from "../../components/landing/informations/informations";
import Discount from "../../components/landing/discount/discount";
import Footer from "../../components/common/footer/footer";
import TopButton from "../../components/common/top-button/top-button";
import Video from "../../components/landing/video/video";

const Landing: FC<LandingProps> = () => {
  return (
    <React.Fragment>
      <NavBar isLanding={true} userExist={false} />
      <Hero />
      <Video
        title="Video title here"
        info=" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor Lorem ipsum dolor sit amet, consectetur
            adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            magna fringilla urna, porttitor rhoncus dolor"
      />
      <Informations />
      <Discount />
      <TopButton />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
