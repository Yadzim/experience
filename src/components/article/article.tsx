import React, { FC } from "react";
import { Container } from "..";
import {
  Detail,
  HeroImg,
  Main,
  Subtitle,
  Text,
  Title,
  UserInfo,
  Wrapper,
} from "./article.e";
import { ArticleProps } from "./article.t";
import AuthorAvatar from "../../assets/images/blog/avatar.png";
import Imag1 from "../../assets/images/article/article1.png";
import Imag2 from "../../assets/images/article/article2.png";

const Article: FC<ArticleProps> = () => {
  return (
    <Wrapper>
      <Container>
        <HeroImg src={Imag1} />
        <Detail>
          <Title>5 Great Marketing Trends To Follow In 2021</Title>
          <UserInfo>
            <img src={AuthorAvatar} alt="" />
            <p>Madina Mamasaidova - 12.11.2021</p>
          </UserInfo>
          <div className="hr"></div>
          <Main>
            <Subtitle>The Biggest Marketing Trend in 2020</Subtitle>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              amet habitasse orci convallis sodales augue.{" "}
            </Text>
            <Text>
              Ac, pellentesque proin tincidunt lobortis sit velit velit dui
              eget. Massa, lectus orci auctor morbi. A nisl vitae, sagittis
              elementum placerat nullam id integer leo. Diam venenatis amet diam
              odio ultrices auctor.
            </Text>
            <HeroImg src={Imag2} />
            <Subtitle>Video Marketing is Here to Stay</Subtitle>
            <Text>
              <ul>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>{" "}
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>{" "}
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </Text>
            <Text>
              Porta massa, eget natoque tincidunt quis. Suspendisse vitae
              vestibulum scelerisque egestas. Volutpat, adipiscing a elit platea
              amet et. At at metus egestas nunc eget. Tempus sapien, augue
              laoreet morbi habitasse leo mauris arcu amet. Sapien lectus auctor
              quis in ut morbi risus. Ornare aliquam phasellus consequat amet
              velit risus. Amet, diam cras morbi hendrerit vitae pretium in
              enim.
            </Text>
            <Subtitle last>
              Is It Still a Good Moment to Join the Video Marketing Wave?
            </Subtitle>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est
              arcu turpis vitae dignissim mi sit. Ornare morbi varius malesuada
              id mollis sit pellentesque blandit vulputate. Sed cursus volutpat
              magnis augue massa. Nisl consectetur mauris quisque nunc dictumst
              a. Pellentesque eget ultricies sed at mi diam pulvinar nec.
              Molestie commodo consequat nibh et porttitor quis.
            </Text>
            <Subtitle last>
              Start Marketing your Products Through Video
            </Subtitle>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est
              arcu turpis vitae dignissim mi sit. Ornare morbi varius malesuada
              id mollis sit pellentesque blandit vulputate.
            </Text>
          </Main>
        </Detail>
      </Container>
    </Wrapper>
  );
};

export default Article;
