import { FC } from "react";
import { FooterProps } from "./footer.t";

// Images
import logo from "../../../assets/images/nav-bar/logo.png";
import { FooterLink, FooterSection } from "./footer.e";
import {
  Flex,
  FlexItem50,
  Container,
  FlexItem25,
} from "../global-style/global-style";

const href = "#";
const menu = [
  [
    {
      text: "Xizmatlar",
      url: "#",
    },
    {
      text: "Bosh saxifa",
      url: "#",
    },
    {
      text: "Proomo kodlar",
      url: "#",
    },
    {
      text: "Kvartiralar va uylar",
      url: "#",
    },
    {
      text: "Ishlar",
      url: "#i",
    },
  ],
  [
    {
      text: "Biz haqimizda",
      url: "#",
    },
    {
      text: "Bizning tarix",
      url: "#",
    },
    {
      text: "Foydali",
      url: "#",
    },
    {
      text: "Jamoa",
      url: "#",
    },
    {
      text: "Hamkorlar",
      url: "#",
    },
  ],
];

const Footer: FC<FooterProps> = (props) => {
  return (
    <FooterSection>
      <Container>
        <Flex>
          <FlexItem50>
            <a href={href}>
              <img src={logo} alt="U-sale" />
            </a>
            <p>Copyright © 2020 Usale. Barcha huquqlar himoyalangan</p>
          </FlexItem50>
          <FlexItem50>
            <Flex>
              {menu.map((menu_property, indexFooterFlex) => (
                <FlexItem50 className="flex-item-50" key={indexFooterFlex}>
                  {menu_property.map((item, indexFooterLink) => (
                    <FooterLink href={item.url} key={indexFooterLink}>
                      {item.text}
                    </FooterLink>
                  ))}
                </FlexItem50>
              ))}
            </Flex>
          </FlexItem50>
        </Flex>
        <h3>Yangiliklarga a’zo bo’lish</h3>
        <Flex>
          <FlexItem25 className="flex-item-25 d-sm-flex">
            <input placeholder="Email manzilingiz" type="text" />
            <button>
              <i className="fas fa-arrow-right"></i>
            </button>
          </FlexItem25>
          <FlexItem25 className="social flex-item-25">
            <a href={href}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href={href}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href={href}>
              <i className="fab fa-instagram"></i>
            </a>
          </FlexItem25>
        </Flex>
      </Container>
    </FooterSection>
  );
};

export default Footer;
