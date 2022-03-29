import React, { FC } from "react";
import { Container } from "../..";
import { Flex, FlexItem25 } from "../../common/global-style/global-style";
import { DiscountProps } from "./discount.t";
import { DiscountLink, DiscountSection, DiscountTitle } from "./doscount.e";
import discountSvg from "../../../assets/images/discount/discount.png";

const sections = [
  [
    {
      text: "FARFETCH",
      url: "#",
    },
    {
      text: "Дочки-Сыночки",
      url: "#",
    },
    {
      text: "Фарфор",
      url: "#",
    },
    {
      text: "М.Видео",
      url: "#",
    },
  ],
  [
    {
      text: "FARFETCH",
      url: "#",
    },
    {
      text: "Дочки-Сыночки",
      url: "#",
    },
    {
      text: "Фарфор",
      url: "#",
    },
    {
      text: "М.Видео",
      url: "#",
    },
  ],
  [
    {
      text: "FARFETCH",
      url: "#",
    },
    {
      text: "Дочки-Сыночки",
      url: "#",
    },
    {
      text: "Фарфор",
      url: "#",
    },
    {
      text: "М.Видео",
      url: "#",
    },
  ],
  [
    {
      text: "FARFETCH",
      url: "#",
    },
    {
      text: "Дочки-Сыночки",
      url: "#",
    },
    {
      text: "Фарфор",
      url: "#",
    },
    {
      text: "М.Видео",
      url: "#",
    },
  ],
];

const Discount: FC<DiscountProps> = () => {
  return (
    <React.Fragment>
      <DiscountSection>
        <Container>
          <DiscountTitle>
            <Flex className="flex">
              <img src={discountSvg} alt="" /> Chegirmali do'konlar
            </Flex>
          </DiscountTitle>
          <Flex>
            {sections.map((item_property, discountFlexIndex) => (
              <FlexItem25 key={discountFlexIndex}>
                {item_property.map((item, discountInfoIndex) => (
                  <DiscountLink href={item.url} key={discountInfoIndex}>
                    {item.text}
                  </DiscountLink>
                ))}
              </FlexItem25>
            ))}
          </Flex>
        </Container>
      </DiscountSection>
    </React.Fragment>
  );
};

export default Discount;
