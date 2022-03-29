import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  width: 31%;
  margin-bottom: 50px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
  @media (max-width: 1000px) {
    width: 47%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const CardImg = styled.img`
  border-radius: 10px;
  width: 100% !important;
  object-fit: fill;
`;

export const CardBody = styled.div`
  padding: 20px 22px;
  background-color: #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const CardTitle = styled.h4`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const CardInfo = styled.p`
  color: #909090;
  font-size: 15px;
`;

export const Author = styled.div`
  padding: 16px 0;
  border-top: 1px solid #ededed;
  p {
    width: 80%;
    transform: translateY(8px);
    color: #000000;
    font-weight: 600;
    font-size: 15px;
  }
`;
