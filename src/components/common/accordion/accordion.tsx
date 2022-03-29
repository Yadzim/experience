import React, { FC, useState } from "react";
import {
  HidenBox,
  Index,
  Info,
  Row,
  Title,
  TopPart,
  Warning,
  Wrapper,
} from "./accordion.e";
import { AccordionProps } from "./accordion.t";
import MoreExpand from "../../../assets/images/accordion/Arrow - Down 2.svg";

const Accordion: FC<AccordionProps> = ({ items, warning }) => {
  const [showMore, setShowMore] = useState(false);
  const toggler = () => setShowMore(!showMore);
  return (
    <Wrapper>
      <TopPart onClick={toggler}>
        <Title className="title">{showMore ? "Yopish" : "Batafsil"}</Title>
        <img src={MoreExpand} alt="more" className={showMore ? "rotate" : ""} />
      </TopPart>
      <HidenBox className={showMore ? "" : "hide"}>
        <Warning>{warning}</Warning>
        {items.map((item, index) => (
          <Row>
            <Index className={index === 0 ? "first" : ""}>{index + 1}</Index>
            <Info className="info">{item}</Info>
          </Row>
        ))}
      </HidenBox>
    </Wrapper>
  );
};

export default Accordion;
