import styled from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fb574c;
  position: fixed;
  bottom: 80px;
  right: 80px;
  border: none;
  outline: none;
  border-radius: 50%;
  @media (max-width: 900px) {
    bottom: 50px;
    right: 30px;
    width: 40px;
    height: 40px;
  }
`;
