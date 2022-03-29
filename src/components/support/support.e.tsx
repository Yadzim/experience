import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f6f5f5;
  padding: 56px 0;
`;

export const Img = styled.img`
  width: 90%;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
`;

export const Tabs = styled.div`
  margin: 36px 0;
  .active {
    background: #fb574c;
    color: #fff;
  }
`;

export const TabElement = styled.div`
  width: 31%;
  padding: 28px 0;
  border-radius: 10px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 17px 33px rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s all ease;
`;

export const TabText = styled.div`
  margin-top: 36px;
`;
