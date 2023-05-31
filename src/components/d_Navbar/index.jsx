import React from "react";
import LangIcon from "../../assets/NavBar/lang.svg";
import Snap_Chat from "../../assets/NavBar/snapchat_icon.svg";
import FacebookLogo from "../../assets/NavBar/facebook.svg";
import InstaLogo from "../../assets/NavBar/instgramicon.svg";
import ShoppingCart from "../../assets/NavBar/shoppingCart.svg";
import NotificationIcon from "../../assets/NavBar/notificationicon.svg";
import LogOutIcon from "../../assets/Icons/logout.svg";
import Logo from "../../assets/NavBar/SaadaLogo1.svg";
import UserLogo from "../../assets/NavBar/account icon.svg";
import LoginIcon from "../../assets/NavBar/login icon.svg";
import ActiveIcon from "../../assets/NavBar/Group 16063.svg";
import NewAccount from "../../assets/NavBar/new account.svg";
import SideCart from "../SideCart/index";
import {
  RIGSTER_BOX_TRRIGER,
  CART_TRRIGGER,
  LOGIN_MODAL,
  REGISTER_MODAL,
} from "../../store/navbarSlice";
import "./index.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalContainer from "../ModalContainer/index";
import { getUserData, logOut } from "../../store/auth";
export default function Default_LayOut({ userInfo }) {
  const location = useLocation();
  const navBar = useSelector((state) => state.NavBar);
  const dispatch = useDispatch();

  return (
    <>
      <ModalContainer login={navBar.login} register={navBar.register} />
      <div className="df_bg">
        <div className="sticky-navbar container relative mx-auto py-3">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3">
              <div className="left-links flex gap-2 items-center h-[30px]">
                <span>
                  <img src={LangIcon} alt="" />
                </span>
                <p className="text-white">English</p>
                <span className="line"></span>
                <p className="text-white">تواصل معنا</p>
              </div>
              <div className="flex items-center gap-4">
                {userInfo !== null ? (
                  <ul className="flex gap-4 items-center ">
                    <span
                      className="user-box"
                      onClick={() => dispatch(RIGSTER_BOX_TRRIGER())}
                    >
                      {userInfo.name.slice(0, 1)}
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
                                  <span>{userInfo.name.substr(0, 1)}</span>
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
                    </span>
                    <span
                      onClick={() => dispatch(CART_TRRIGGER())}
                      className="cursor-pointer"
                    >
                      <img src={ShoppingCart} alt="" />
                    </span>
                    <SideCart />
                    <span className="cursor-pointer">
                      <img src={NotificationIcon} alt="" />
                    </span>
                  </ul>
                ) : (
                  <ul className="flex gap-4 items-center ">
                    <span className="user-info relative">
                      <img
                        onClick={() => dispatch(RIGSTER_BOX_TRRIGER())}
                        className="cursor-pointer"
                        src={UserLogo}
                      />
                      {/* trigger-user-box */}
                      {navBar.registerBox ? (
                        <div className="register-box transition duration-500 ease-in-out flex flex-col justify-center gap-2 py-2 bg-white px-3 rounded-lg">
                          <span className="flex flex-row cursor-pointer transition duration-300 ease-in-out hover:bg-slate-200 items-center gap-2">
                            <span
                              onClick={() => dispatch(LOGIN_MODAL())}
                              className="logIn-title ml-auto"
                            >
                              تسجيل دخول
                            </span>

                            <img
                              className="icon-registeration ml-auto"
                              src={LoginIcon}
                              alt=""
                            />
                          </span>
                          <span className="flex cursor-pointer transition duration-300 ease-in-out hover:bg-slate-200 flex-row items-center gap-2">
                            <span
                              onClick={() => dispatch(REGISTER_MODAL())}
                              className="logIn-title ml-auto"
                            >
                              إنشاء حساب
                            </span>
                            <img
                              className="icon-registeration ml-auto"
                              src={NewAccount}
                              alt=""
                            />
                          </span>
                        </div>
                      ) : (
                        ""
                      )}

                      {/* END=> trigger-user-box */}
                    </span>
                    <span
                      onClick={() => dispatch(CART_TRRIGGER())}
                      className="cursor-pointer"
                    >
                      <img src={ShoppingCart} alt="" />
                    </span>
                    <SideCart />
                    <span className="cursor-pointer">
                      <img src={NotificationIcon} alt="" />
                    </span>
                  </ul>
                )}
                <ul className="flex gap-4 items-center">
                  <span>
                    <NavLink className="text-white font-bold" to="/مولود جديد">
                      مولود جديد
                    </NavLink>
                  </span>
                  <span>
                    <NavLink className="text-white font-bold" to="/مولود جديد">
                      هدايا زواج
                    </NavLink>
                  </span>
                  <span>
                    <NavLink className="text-white font-bold" to="/هدايا تخرج">
                      هدايا تخرج
                    </NavLink>
                  </span>
                </ul>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-3">
              <div className="right-links flex gap-5 items-center justify-end h-[30px]">
                <span>
                  <img src={Snap_Chat} alt="" />
                </span>
                <span>
                  <img src={FacebookLogo} alt="" />
                </span>
                <span>
                  <img src={InstaLogo} alt="" />
                </span>
              </div>
              <div className="flex gap-2 items-center ">
                <ul className="flex gap-11 font-bold items-center">
                  <span>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? `active` : "nav-link text-white"
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
                  </span>
                  <span>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? `active` : "text-white"
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
                  </span>

                  <span>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? `active` : "text-white"
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
                  </span>
                </ul>
              </div>
            </div>
            <span className="logo">
              <img src={Logo} alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
