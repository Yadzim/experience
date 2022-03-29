import styled from "styled-components";

export const Relative = styled.div`
  margin-top: 110px;
  position: relative;
  width: 100%;
`;

const btn = `
  padding: 20px 42px;
  border-radius: 20px;
  font-size: 18px;
  border: 1px solid #cfcfcf;
  transition: 0.3s all ease-in-out;
  outline: none;
  @media (max-width: 900px) {
      padding: 16px 28px;
      font-size: 16px;
  }
`;

export const SearchBtn = styled.button`
  ${btn}
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  background-color: #fff;
  i {
    color: var(--crimson);
  }
  &:active {
    transform: scale(0.8);
  }
`;

export const SearchInput = styled.input`
  ${btn}
  margin-top: 20px;
  width: 100%;
  color: var(--gray);
  &:focus {
    border-color: var(--crimson);
  }
  &:focus + button {
    border-color: var(--crimson);
  }
`;
