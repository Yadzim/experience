import styled from "styled-components";

export const Wrapper = styled.div`
  user-select: none;
  cursor: pointer;
  .hide {
    opacity: 0;
    height: 0px;
    overflow: hidden;
  }
`;
export const TopPart = styled.div`
  display: flex;
  align-items: center;
  img {
    transform: rotate(180deg);
    height: 13px;
    width: 15px;
  }
  .rotate {
    transform: rotate(0deg);
  }
`;

export const HidenBox = styled.div`
  opacity: 1;
  height: max-content;
  transition: 0.4s linear;
  margin-top: 22px;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 22px;
  justify-content: flex-start;
  text-align: start;
  .first {
    color: #fff;
    background-color: #fb574c;
  }
  .info {
  }
`;
export const Index = styled.div`
  margin-right: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: SF Pro Display; */
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000;
  min-width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.08);
`;

export const Info = styled.div`
  font-size: 16px;
  line-height: 27px;
  color: #505050;
  * {
    color: #505050;
  }
`;

export const Title = styled.h1`
  text-align: start;
  width: 70px;
  color: #fb574c;
  line-height: 27px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  /* or 150% */
  margin: 0px;
  margin-right: 10px;
`;
export const Warning = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #505050;
`;
