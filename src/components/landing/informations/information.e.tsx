import styled from "styled-components";

export const InformationsSection = styled.section`
  margin: 110px 0;
  .reverse {
    flex-direction: row-reverse;
  }
  img {
    width: 100%;
  }
  .padding {
    padding-right: 10%;
    transform: translateX(40px);
  }
  p {
    font-size: 16px;
    line-height: 1.6;
  }
  @media (max-width: 900px) {
    margin: 50px 0;
    text-align: center;
    img {
      width: 60%;
      text-align: center;
    }
    .padding {
      transform: none;
      padding-right: 0;
    }
  }
`;
export const InformationTitle = styled.h2`
  font-size: 50px;
  font-weight: 700;
  color: var(--crimson);
  margin-bottom: 42px;
  text-transform: uppercase;
  @media (max-width: 900px) {
    font-size: 40px;
    margin-bottom: 25px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
