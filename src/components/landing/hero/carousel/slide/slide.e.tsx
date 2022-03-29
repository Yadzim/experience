/** @format */

import styled from "styled-components";
const SlideStyle = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #f7f5f5, #f7f5f5),
    linear-gradient(0deg, #fb574c, #fb574c), #fb574c;
  border-radius: 50px;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: space-between;
  height: fit-content;
  position: relative;
  img {
    object-fit: cover;
    min-height: 200px;
    flex: 1;
    min-width: 50%;
    z-index: 0;
    border-radius: 50px;
  }
  div {
    margin-right: 4rem;
    flex: 2;
    min-width: 400px;
    overflow: hidden;
    max-height: 600px;
    padding: 65px 100px;
    padding-right: 0;
    h1 {
      font-weight: 600;
      font-size: 45px;
      line-height: 48px;
      color: #fb574c;
    }
    p {
      font-size: 18px;
      line-height: 1.8;
      color: #818181;
      margin-top: 38px;
      margin-bottom: 48px;
    }
    button {
      width: 230px;
      height: 58px;
      background: #fb574c;
      border-radius: 10px;
      font-weight: 600;
      font-size: 18px;
      line-height: 42px;
      color: #ffffff;
      outline: none;
      border: none;
      &:hover {
        background-color: #ff4335;
      }
      &:focus {
        outline: 1px solid #fb574c;
        box-shadow: 0 0 0 3px rgba(251, 87, 76, 0.25);
      }
    }
  }
  @media screen and (max-width: 1250px) {
    img {
      min-width: auto;
      width: 100%;
    }
    div {
      padding: 2rem 1rem;
      max-width: 100%;
      order: 2;
      h1 {
        font-size: 30px;
        text-align: center;
        line-height: initial;
      }
      p {
        font-size: 20px;
        text-align: center;
        line-height: initial;
      }
      button {
        display: block;
        margin: auto;
        height: 50px;
        font-size: 14px;
        width: 150px;
      }
    }
  }
  @media screen and (max-width: 540px) {
    div {
      margin: auto;
      min-width: auto;
      /* padding: 1rem; */
      h1 {
        font-size: 28px;
      }
      p {
        text-align: center;
        font-size: 15px;
        margin: 30px 0;
        line-height: 1.5;
      }
    }
  }
`;

export default SlideStyle;
