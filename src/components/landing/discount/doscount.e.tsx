import styled from "styled-components";

export const DiscountSection = styled.section`
  margin: 100px 0;
  margin-top: 150px;
`;

export const DiscountTitle = styled.div`
  padding: 24px 45px;
  font-size: 18px;
  color: var(--crimson);
  background: rgba(251, 87, 76, 0.05);
  border: 1px dashed var(--crimson);
  border-radius: 20px;
  .flex {
    justify-content: left;
  }
  img {
    margin-right: 45px;
  }
`;

export const DiscountLink = styled.a`
  display: block;
  margin: 25px 0;
  color: var(--gray2);
  transition: 0.2s all ease-in-out;
  &:hover {
    color: var(--crimson);
  }
`;
