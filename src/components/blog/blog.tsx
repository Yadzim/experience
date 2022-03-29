import { FC } from "react";
import { BlogProps } from "./blog.t";
import { Wrapper } from "./blog.e";
import { Container } from "..";
import { Title } from "../common/global-style/global-style";
import BlogItems from "./blog-item/blog-item";
import BlogPagination from "./blog-pagination/blog-pagination";

const Blog: FC<BlogProps> = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>Bloglar</Title>
          <BlogItems />
          <BlogPagination />
        </Container>
      </Wrapper>
    </>
  );
};

export default Blog;
