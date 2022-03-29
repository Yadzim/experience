import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .error_number {
    font-family: var(--main-font);
    font-weight: 300;
    font-size: 200px;
    line-height: 242px;
    color: var(--main-color);
  }
  .info_title {
    text-align: center;
    font-weight: 800;
    font-size: 42px;
    line-height: 70px;
    color: #201f1f;
  }
  .info_text {
    text-align: center;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #201f1f;
  }
  button {
    margin-top: 20px;
    border: 1px solid transparent;
    padding: 0.75rem 2rem;
    color: #fff;
    font-size: 20px;
    border-radius: 8px;
    background: #201f1f;
    transition: 0.3s linear all;
    :hover {
      border: 1px solid #fff;
    }
    :active,
    :focus {
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 578px) {
    .error_number {
      font-size: 120px;
      line-height: initial;
    }
    .info_title {
      font-size: 36px;
      line-height: initial;
    }
    .info_text {
      font-size: 14px;
    }
    button {
      font-size: 15px;
    }
  }
`;
