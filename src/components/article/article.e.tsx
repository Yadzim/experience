import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 70px;
  background: #e5e5e5;
  .hr {
    width: 100%;
    height: 1px;
    background-color: #cacaca;
    border-radius: 5px;
    margin-bottom: 25px;
  }
`;
export const Detail = styled.div`
  margin: 10px 0px;
  padding: 0px 150px;
  @media (max-width: 1300px) {
    padding: 0px 110px;
  }
  @media (max-width: 800px) {
    padding: 0px 40px;
  }
  @media (max-width: 500px) {
    padding: 0px 10px;
  }
`;
export const HeroImg = styled.img`
  border-radius: 10px;
  margin: 30px 0px;
  object-fit: cover;
  width: 100%;
`;
export const Main = styled.div``;
export const Text = styled.p`
  margin-top: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;

  color: #464646;
  * {
    font-style: normal;
    list-style: outside;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    color: #464646;
  }
`;
export const Subtitle = styled.h3<{ last?: boolean }>`
  font-style: normal;
  font-weight: ${({ last = false }) => (last ? 700 : 600)};
  font-size: ${({ last = false }) => (last ? "16px" : "20px")};
  line-height: 24px;
  color: ${({ last = false }) => (last ? "#464646" : "#000000")};
`;
export const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  margin: 24px 0px;
  img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: #c4c4c4;
    margin-right: 16px;
  }
  p {
    margin-top: 15px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;

  color: #292929;
  @media (max-width: 900px) {
    font-size: 33px;
  }
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;
