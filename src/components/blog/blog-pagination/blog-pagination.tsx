import { FC, useState } from "react";
import { BlogPaginationProps } from "./blog-pagination.t";
import { PaginationItem, Wrapper } from "./blog-pagination.e";

const BlogPagination: FC<BlogPaginationProps> = () => {
  const [active, setActive] = useState(1);
  return (
    <Wrapper>
      <PaginationItem
        onClick={() => setActive(1)}
        className={active === 1 ? "active" : ""}
      >
        1
      </PaginationItem>
      <PaginationItem
        onClick={() => setActive(2)}
        className={active === 2 ? "active" : ""}
      >
        2
      </PaginationItem>
      <PaginationItem
        onClick={() => setActive(3)}
        className={active === 3 ? "active" : ""}
      >
        3
      </PaginationItem>
      <PaginationItem
        onClick={() => setActive(4)}
        className={active === 4 ? "active" : ""}
      >
        4
      </PaginationItem>
    </Wrapper>
  );
};

export default BlogPagination;
