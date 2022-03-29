import { FC } from "react";
import { NavBar } from "../../components";
import Blog from "../../components/blog/blog";
import Footer from "../../components/common/footer/footer";
import TopButton from "../../components/common/top-button/top-button";
import { BlogPageProps } from "./blog-page.t";

const BlogPage: FC<BlogPageProps> = () => {
  return (
    <>
      <NavBar userExist={false} bg="#fafafa" isLanding={true} />
      <Blog />
      <TopButton />
      <Footer />
    </>
  );
};

export default BlogPage;
