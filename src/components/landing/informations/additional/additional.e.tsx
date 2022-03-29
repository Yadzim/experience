import styled from "styled-components";

export const AdditionalSection = styled.section`
  margin: 100px 0;
  margin-top: 50px;
  p {
    margin: 40px 0;
    color: var(--gray2);
    font-size: 14px;
    line-height: 1.6;
  }
  a {
    font-size: 14px;
    display: inline-block;
    padding-bottom: 10px;
    color: var(--crimson);
    border-bottom: 1px solid var(--crimson);
    padding-bottom: 1px;
  }
  @media (max-width: 600px) {
    text-align: center;
    p {
      margin: 20px 0;
    }
    a {
      padding: 0 15%;
      border-bottom: 0;
    }
  }
`;

export const AdditionTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  padding-right: 30%;
  color: var(--crimson);
  @media (max-width: 600px) {
    font-size: 25px;
    text-align: center;
    padding-right: 0;
    margin-top: 30px;
  }
`;
