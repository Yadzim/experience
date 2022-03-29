import { FC, useEffect, useState } from "react";
import { NavBarProps } from "./nav-bar.t";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Wrapper } from "./nav-bar.e";
import logo from "../../../assets/images/nav-bar/logo.svg";
import { IoIosLogOut } from "react-icons/io";
import {
  IoPersonOutline,
  IoBagOutline,
  IoBriefcaseOutline,
  IoBusinessOutline,
} from "react-icons/io5";
import { AiOutlineKey } from "react-icons/ai";
import { Link } from "react-scroll";
import { Link as Link1 } from "react-router-dom";

const data = [
  {
    name: "Мой профиль",
    direction: "my_profile",
    showInmobile: true,
    icon: IoPersonOutline,
  },
  { name: "Promo kod", direction: "Лучшие промокоды", icon: AiOutlineKey },
  {
    name: "Kvartiralar va uylar",
    direction: "Квартиры и дом",
    icon: IoBusinessOutline,
  },
  { name: "Ishlar", direction: "Вакансии и Работа", icon: IoBriefcaseOutline },
  { name: "Do’konlar", direction: "Интернет-магазин", icon: IoBagOutline },
  {
    name: "Выход",
    direction: "log_out",
    showInmobile: true,
    icon: IoIosLogOut,
  },
];

const NavBar: FC<NavBarProps> = ({ isLanding, userExist, bg }) => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [hideNav, setHideNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(currentScroll);

  useEffect(() => {
    window.addEventListener("scroll", () => setCurrentScroll(window.scrollY));
    if (lastScroll <= currentScroll) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
    setLastScroll(currentScroll);
  }, [currentScroll]);

  return (
    <Wrapper bg={bg}>
      <div className="container">
        <div>
          <nav
            className={
              "navbar navbar-light fixed-top navbar-expand-lg  py-3  " +
              (currentScroll <= 100 ? "" : hideNav ? "hide-nav " : "show-nav ")
            }
          >
            <div className="container-fluid mx-md-5 p-0">
              <div className="logo">
                <Link1
                  className="nav-link"
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <img src={logo} alt="" />
                </Link1>
              </div>
              {isLanding ? (
                <>
                  <button
                    className="navbar-toggler navbar-toggler-design"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                  >
                    <div className="offcanvas-header">
                      <h3
                        className="offcanvas-title fw-bolder fs-3"
                        id="offcanvasNavbarLabel"
                      >
                        Мой профиль
                      </h3>
                      <button
                        type="button"
                        className="btn-close text-reset btn-close-design m-md-3"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-body  d-flex align-content-center flex-column flex-lg-row">
                      <ul className="navbar-nav d-flex justify-content-center flex-lg-grow-1 pt-2 mb-lg-0 mb-4 order-lg-0 order-1 overflow-hidden">
                        {data.map((item) => (
                          <li
                            key={item.name}
                            data-bs-dismiss="offcanvas"
                            className={
                              "nav-item " +
                              (item.showInmobile
                                ? userExist
                                  ? "d-lg-none"
                                  : "d-none"
                                : "")
                            }
                          >
                            <Link
                              spy={true}
                              className="nav-link"
                              to={item.direction}
                              duration={500}
                            >
                              <item.icon className="fs-3 me-3 d-lg-none" />
                              <span> {item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className={"user " + (userExist ? " " : "d-none")}>
                        <div className="img">sada</div>
                        <div className="info">
                          <div className="name">
                            <h4 className="fw-bold m-0 ">Hellp</h4>
                          </div>
                          <div className="number fs-6 d-lg-none">
                            *9998901223435
                          </div>
                        </div>
                      </div>
                      <hr className={userExist ? "" : "d-none"} />
                      <div
                        className={
                          "order-lg-0  order-2 " + (userExist ? "d-none" : "")
                        }
                      >
                        <Link1 to="/register">
                          <button
                            className="btn  btn-design ms-3 me-3"
                            type="submit"
                          >
                            Ro’yxatdan o’tish
                          </button>
                        </Link1>
                        <Link1 to="/registratsiya">
                          <button
                            className="btn btn-design btn-red"
                            type="submit"
                          >
                            Kirish
                          </button>
                        </Link1>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};
export default NavBar;
