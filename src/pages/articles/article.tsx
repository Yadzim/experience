import React, { FC } from "react";
import { NavBar } from "../../components";
import Article from "../../components/article/article";
import Footer from "../../components/common/footer/footer";
import { ArticlePageProps } from "./article.t";

const ArticlePage: FC<ArticlePageProps> = () => {
  return (
    <>
      <NavBar userExist={false} bg="#FAFAFA" isLanding={true} />
      <Article />
      <Footer />;
    </>
  );
};

export default ArticlePage;
