import styled from "styled-components";

export const SlidersSection = styled.section`
  margin: 80px 0;
  @media (max-width: 700px) {
    margin: 50px 0;
  }
`;

export const Card = styled.div`
  padding: 0 32px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  border-radius: 20px;
  width: 23%;
  margin-right: 32px;
  img {
    width: 80%;
  }
  @media (max-width: 1000px) {
    width: 48%;
    img {
      width: 100%;
    }
  }
`;
