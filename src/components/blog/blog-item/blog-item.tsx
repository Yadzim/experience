import { FC } from "react";
import { Flex } from "../../common/global-style/global-style";
import { BlogItemProps } from "./blog-item-t";
import {
  Author,
  Card,
  CardBody,
  CardImg,
  CardInfo,
  CardTitle,
} from "./blog-item.e";
import AuthorAvatar from "../../../assets/images/blog/avatar.png";

const BlogDatas = [
  {
    img: "https://source.unsplash.com/random/802x602",
    title: "5 Great Marketing Trends To Follow In 2021",
    description:
      "Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.",
    author: " Madina Mamasaidova",
    authorAvatar: AuthorAvatar,
  },
  {
    img: "https://source.unsplash.com/random/801x601",
    title: "5 Great Marketing Trends To Follow In 2021",
    description:
      "Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.",
    author: " Madina Mamasaidova",
    authorAvatar: AuthorAvatar,
  },
  {
    img: "https://source.unsplash.com/random/802x600",
    title: "5 Great Marketing Trends To Follow In 2021",
    description:
      "Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.",
    author: " Madina Mamasaidova",
    authorAvatar: AuthorAvatar,
  },
  {
    img: "https://source.unsplash.com/random/801x600",
    title: "5 Great Marketing Trends To Follow In 2021",
    description:
      "Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.",
    author: " Madina Mamasaidova",
    authorAvatar: AuthorAvatar,
  },
  {
    img: "https://source.unsplash.com/random/800x601",
    title: "5 Great Marketing Trends To Follow In 2021",
    description:
      "Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.",
    author: " Madina Mamasaidova",
    authorAvatar: AuthorAvatar,
  },
  {
    img: "https://source.unsplash.com/random/800x602",
    title: "5 Great Marketing Trends To Follow In 2021",
    description:
      "Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.",
    author: " Madina Mamasaidova",
    authorAvatar: AuthorAvatar,
  },
];

const BlogItems: FC<BlogItemProps> = () => {
  return (
    <>
      <Flex>
        {BlogDatas.map((data, index) => {
          return (
            <Card key={index}>
              <CardImg src={data.img} />
              <CardBody>
                <CardTitle>{data.title}</CardTitle>
                <CardInfo>{data.description}</CardInfo>
                <Author>
                  <Flex>
                    <img src={data.authorAvatar} alt="" />
                    <p>{data.author}</p>
                  </Flex>
                </Author>
              </CardBody>
            </Card>
          );
        })}
      </Flex>
    </>
  );
};

export default BlogItems;
