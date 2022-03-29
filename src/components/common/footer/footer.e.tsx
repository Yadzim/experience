import styled from "styled-components";

export const FooterSection = styled.footer`
  padding: 60px 0;
  background-color: #fafafa;
  p {
    font-size: 16px;
    font-weight: 400;
    margin-top: 30px;
  }
  h3 {
    margin-top: 50px;
    width: 200px;
    font-weight: 400;
    font-size: 20px;
  }
  input,
  button {
    border: none;
    outline: none;
  }
  input {
    padding: 12px 15px;
    border-bottom: 1px solid var(--gray);
    color: var(--gray2);
  }
  button {
    padding: 12px 15px;
    background-color: var(--crimson);
    color: #fff;
    font-size: 12px;
    border-radius: 6px;
    cursor: pointer;
  }
  .social a {
    margin-right: 50px;
    color: var(--gray);
    transition: 0.2s all ease-in-out;
    font-size: 20px;
    &:hover {
      color: var(--crimson);
    }
  }
  @media (max-width: 900px) {
    .flex-item-50 {
      width: 45% !important;
    }
    .flex-item-25 {
      width: 100% !important;
      margin-top: 40px;
      text-align: center;
    }
  }
`;

export const FooterLink = styled.a`
  margin-top: 20px;
  display: block;
  color: var(--gray);
  transition: 0.2s all ease-in-out;
  &:hover {
    color: var(--crimson);
  }
`;
