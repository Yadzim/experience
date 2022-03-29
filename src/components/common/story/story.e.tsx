import styled from "styled-components";

export const StoryWrapper = styled.div`
  background-color: #f6f5f5;
  padding: 56px 0;
`;

export const Texts = styled.div`
  p {
    margin-bottom: 20px;
    line-height: 24px;
    font-size: 14px;
  }
  ul {
    margin-top: 20px;
  }
  li {
    font-size: 16px;
    list-style: disc;
    margin-bottom: 4px;
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
  @media (max-width: 600px) {
    * {
      font-size: 14px;
    }
  }
`;

export const Warning = styled.div`
  padding: 18px 35px;
  background-color: #fb574c;
  color: #fff;
  box-shadow: 0px 17px 33px rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  font-size: 16px;
  margin: 40px 0;
`;
