import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .active {
    border-color: #fb574c;
    color: #000;
  }
`;

export const PaginationItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #ebeef4;
  border-radius: 5px;
  cursor: pointer;
  color: #9eaec5;
  margin-right: 7px;
  font-size: 14px;
  transition: 0.1s all ease-in;
`;
