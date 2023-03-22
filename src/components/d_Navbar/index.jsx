import React from "react";
import LangIcon from "../../assets/NavBar/lang.svg";
import Snap_Chat from "../../assets/NavBar/snapchat_icon.svg";
import FacebookLogo from "../../assets/NavBar/facebook.svg";
import InstaLogo from "../../assets/NavBar/instgramicon.svg";
import ShoppingCart from "../../assets/NavBar/shoppingCart.svg";
import NotificationIcon from "../../assets/NavBar/notificationicon.svg";
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
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalContainer from "../ModalContainer/index";
export default function Default_LayOut() {
  const location = useLocation();
  const navBar = useSelector((state) => state.NavBar);
  const dispatch = useDispatch();

  return (
    <>
      <ModalContainer login={navBar.login} register={navBar.register} />
      <div className="df_bg">
        <div className="sticky-navbar container relative mx-auto py-3">
          <div className="flex flex-row justify-between items-center">
            <div>
              <div className="left-links flex gap-2 items-center ">
                <span>
                  <img src={LangIcon} alt="" />
                </span>
                <p className="text-white">English</p>
                <span className="line"></span>
                <p className="text-white">تواصل معنا</p>
              </div>
              <div className="flex items-center gap-4">
                <ul className="flex gap-4 items-center my-6">
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
                            إنشاء حساب جديد
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
                <ul className="flex gap-4 items-center">
                  <span>
                    <NavLink className="text-white" to="/مولود جديد">
                      مولود جديد
                    </NavLink>
                  </span>
                  <span>
                    <NavLink className="text-white" to="/مولود جديد">
                      هدايا زواج
                    </NavLink>
                  </span>
                  <span>
                    <NavLink className="text-white" to="/هدايا تخرج">
                      هدايا تخرج
                    </NavLink>
                  </span>
                </ul>
              </div>
            </div>
            {/*  */}
            <div>
              <div className="right-links flex gap-5 items-center justify-end">
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
              <div className="flex gap-2 items-center my-6">
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
                      exact
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
