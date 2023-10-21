import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogOutIcon from "../../assets/Icons/logout.svg";
import ActiveIcon from "../../assets/NavBar/Group 16063.svg";
import Logo from "../../assets/NavBar/SaadaLogo1.svg";
import LoginIcon from "../../assets/NavBar/login icon.svg";
import NewAccount from "../../assets/NavBar/new account.svg";
import NotificationIcon from "../../assets/NavBar/notificationicon.svg";
import ShoppingCart from "../../assets/NavBar/shoppingCart.svg";
import { getUserData, logOut } from "../../store/auth";
import {
  CART_TRRIGGER,
  LOGIN_MODAL,
  REGISTER_MODAL,
  RIGSTER_BOX_TRRIGER,
} from "../../store/navbarSlice";
import SideCart from "../SideCart/index";
import "./index.css";

export default function SideMenu({ activeSide, cancelActive }) {
  const id = document.getElementById("root");
  const location = useLocation();
  const userData = localStorage.getItem("user-info");
  const userInfo = JSON.parse(userData);
  const { user } = useSelector((state) => state.Auth);
  const navBar = useSelector((state) => state.NavBar);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userData) {
      dispatch(getUserData(userInfo.id));
    }
  }, []);
  return (
    <>
      {createPortal(
        <div
          onClickCapture={() => cancelActive()}
          className={
            activeSide ? "sideMenu-container active" : "sideMenu-container"
          }
        >
          <div
            className={
              activeSide ? "sideMenu-content active" : "sideMenu-content"
            }
          >
            <span className="flex pt-5 justify-center items-center logo-sideMenu m-auto">
              <img src={Logo} alt="" />
            </span>
            <ul className="list-links mt-10 position-relative gap-12 flex flex-col">
              <li className="flex flex-col items-center transition duration-300 ease-in-out hover:bg-slate-200">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `active text-lg ` : "text-black  text-lg"
                  }
                  to="/"
                >
                  الرئيسية
                  {location.pathname === "/" ? (
                    <span className="active-icon">
                      <img src={ActiveIcon} alt="" />
                    </span>
                  ) : (
                    ""
                  )}
                </NavLink>
              </li>
              <li className="flex flex-col items-center transition duration-300 ease-in-out hover:bg-slate-200">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `active text-lg ` : "text-black text-lg "
                  }
                  to="/brithDay"
                >
                  اعياد ميلاد
                  {location.pathname === "/brithDay" ? (
                    <span className="active-icon">
                      <img src={ActiveIcon} alt="" />
                    </span>
                  ) : (
                    ""
                  )}
                </NavLink>
              </li>
              <li className="flex flex-col items-center transition duration-300 ease-in-out hover:bg-slate-200">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `active text-lg `
                      : "nav-link  text-black text-lg"
                  }
                  to="/specialOccasions"
                >
                  مناسبات خاصة
                  {location.pathname === "/specialOccasions" ? (
                    <span className="active-icon">
                      <img src={ActiveIcon} alt="" />
                    </span>
                  ) : (
                    ""
                  )}
                </NavLink>
              </li>
              {userInfo !== null ? (
                <>
                  <li
                    className="user-box"
                    onClick={() => dispatch(RIGSTER_BOX_TRRIGER())}
                  >
                    {userInfo.name?.slice(0, 1)}
                    {navBar.registerBox ? (
                      <div className="user-links flex flex-col">
                        <div className="flex flex-col">
                          <Link
                            className="decoration-transparent block"
                            to={`/userInfo/${userInfo.id}`}
                          >
                            <div className="user-information flex flex-row justify-between items-center">
                              <div className="user-name ml-auto w-full pr-2">
                                <p className="font-bold text-[16px] text-black text-right">
                                  {userInfo.name}
                                </p>
                              </div>
                              <div className="user-image ml-auto df-bg-user ">
                                <span>{userInfo.name?.substr(0, 1)}</span>
                              </div>
                            </div>
                          </Link>
                          <div className="email-info cursor-auto">
                            <span className="text-black ">
                              {/* {userInfo.email} */}
                            </span>
                          </div>
                          <div className="flex flex-row justify-between items-center mt-3">
                            <div
                              onClick={() => dispatch(logOut())}
                              role="button"
                              className="user-name ml-auto w-full pr-2 "
                            >
                              <p className="font-bold text-[12px] text-black text-right">
                                تسجيل الخروج
                              </p>
                            </div>
                            <div className="logOut-icon ml-auto">
                              <img src={LogOutIcon} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li
                    onClick={() => dispatch(CART_TRRIGGER())}
                    className="cursor-pointer"
                  >
                    <img src={ShoppingCart} alt="" />
                  </li>
                  <SideCart />
                  <li className="cursor-pointer">
                    <img src={NotificationIcon} alt="" />
                  </li>
                </>
              ) : (
                <>
                  <li
                    className="flex justify-center w-[100%] cursor-pointer transition duration-300 ease-in-out hover:bg-slate-200 flex-row items-center gap-2"
                    onClick={() => dispatch(REGISTER_MODAL())}
                  >
                    <img
                      className="icon-registeration "
                      src={NewAccount}
                      alt=""
                    />
                    <span className="text-lg">إنشاء حساب</span>
                  </li>
                  <li className="flex justify-center w-[100%] cursor-pointer transition duration-300 ease-in-out hover:bg-slate-200 flex-row items-center gap-2">
                    <img
                      className="icon-registeration "
                      src={LoginIcon}
                      alt=""
                    />
                    <span
                      onClick={() => dispatch(LOGIN_MODAL())}
                      className="text-lg "
                    >
                      تسجيل دخول
                    </span>
                  </li>
                  <li
                    onClick={() => dispatch(CART_TRRIGGER())}
                    className="flex justify-center w-[100%] cursor-pointer transition duration-300 ease-in-out hover:bg-slate-200 flex-row items-center gap-2"
                  >
                    <img src={ShoppingCart} alt="" />
                    <p className="text-lg">السلة</p>
                  </li>
                  <SideCart />
                </>
              )}
            </ul>
          </div>
        </div>,
        id
      )}
    </>
  );
}
