import { FC } from "react";
import { Wrapper } from "./not-found.e";
import { NotFoundProps } from "./not-found.t";

const NotFound: FC<NotFoundProps> = ({ replace }) => {
  return (
    <Wrapper>
      <div className="error_number">404</div>
      <h1 className="info_title">Page Not Found</h1>
      <p className="info_text">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <button onClick={() => replace("/")}>
        Go to home <span>&#8599;</span>
      </button>
    </Wrapper>
  );
};

export default NotFound;
