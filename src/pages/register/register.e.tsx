import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 4rem;
  height: fit-content;
  margin-top: -120px;
  background-color: #e5e5e5;
  font-family: var(--main-font);
  .about_page {
    padding-top: 120px;
    .title {
      text-align: center;
      font-weight: 600;
      color: #292929;
    }
    .info {
      font-style: normal;
      font-weight: normal;
      line-height: 36px;
      text-align: center;
      color: #818181;
    }
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .item {
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
    padding: 1.5rem 4rem;
    .name {
      flex: 1;
      flex-basis: 100px;
      font-weight: 600;
      font-size: 16px;
      line-height: 30px;
      color: #292929;
      .asterics {
        color: red;
      }
      .example {
        color: #818181;
      }
    }
    .inputs {
      flex: 2;
      display: flex;
      flex-wrap: wrap;
      input {
        /* min-width: 250px; */
        height: 42px;
        padding: 0.4rem 2rem;
        margin-right: 20px;
        margin: 12px;
        border: 1px solid transparent;
        background: #f6f5f5;
        border-radius: 6px;
        :active,
        :focus {
          outline: none;
          border: 1px solid red;
          box-shadow: 0px 0px 0px 2px rgba(251, 87, 76, 0.25);
        }
      }
    }
  }
  .profile_img {
    margin: 12px;
    width: 100px;
    border-radius: 50%;
  }
  .buttons {
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-self: flex-end;
    button {
      margin-bottom: 10px;
      margin-right: 10px;
      color: var(--main-color);
      padding: 1rem;
      box-shadow: none;
      border: none;
      border-radius: 10px;
      border: 1px solid var(--main-color);
      background-color: transparent;
      transition: 0.3s linear all;
      :hover {
        background-color: var(--main-color);
        transition: 0.3s linear all;
        color: white;
      }
      :active {
        transform: scale(1.1);
      }
      :focus {
        box-shadow: none;
      }
    }
  }
  @media only screen and (max-width: 560px) {
    padding: 0 1rem;
    .item {
      padding: 1.5rem 1rem;
      flex-direction: column;
      .inputs {
        input {
          max-width: 300px;
          padding: 0.4rem 1rem;
        }
      }
    }
    .buttons {
      padding-top: 0;
      button {
        padding: 0.75rem 1rem;
      }
    }
  }
  @media only screen and (max-width: 340px) {
    .item .inputs input {
      max-width: 200px;
    }
  }
`;
