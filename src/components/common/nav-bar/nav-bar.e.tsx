import styled from "styled-components";
interface Props {
  bg?: string;
}
export const Wrapper = styled.div<Props>`
  margin-bottom: 84px;
  .hide-nav {
    transition: 0.5s linear all;
    opacity: 0;
    transform: translateY(-3rem);
  }
  .show-nav {
    transition: 0.5s linear all;
    opacity: 1;
  }

  nav {
    background-color: ${(props) => (props.bg ? props.bg : "#fff")};
  }
  * {
    color: #505050;
  }
  .logo {
    cursor: pointer;
  }
  .navbar-toggler-design,
  .btn-close-design {
    border: none;
    box-shadow: none;
    :active,
    :hover {
      box-shadow: 1px 1px 3px #999;
    }
    :focus {
      box-shadow: none;
    }
  }
  .btn-close-design {
    border-radius: 15px;
    width: 30px;
    height: 30px;
    box-shadow: 1px 1px 3px #999;
    font-size: 1.2rem;
  }
  .offcanvas-end {
    width: 100%;
    transition-duration: 0.7s;
  }
  li {
    margin: 0 25px;
  }
  @media only screen and (max-width: 1115px) {
    li {
      font-size: 15px;

      margin: 0 12px;
    }
    .user {
      img {
        width: 50px;
        height: 50px;
        border-radius: 10px;
      }
    }
  }
  @media only screen and (max-width: 992px) {
    li {
      display: flex;
      align-items: center;
      height: 60px;
      margin: 5px 13px;
      :hover {
      }
    }
  }
  .nav-link::after {
    display: block;
    content: "";
    border-radius: 20px;
    height: 1px;
    width: 0%;
    background-color: var(--main-color);
    transition: 0.3s linear;
  }
  .navbar-light .navbar-nav .nav-link {
    cursor: pointer;
    color: #505050;
    transition: 0.3s ease color;
    :hover {
      * {
        color: var(--main-color);
      }
      ::after {
        width: 100%;
      }
    }
  }
  .btn-design {
    color: var(--main-color);
    box-shadow: none;
    padding: 10px 28px;
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
  .user {
    display: flex;
    align-items: center;
    .img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: #999;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
    }
  }
`;
