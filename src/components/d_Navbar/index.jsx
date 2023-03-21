import React, { useState } from "react";
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
import CartModal from "../CartModal/index";
import "./index.css";
import { NavLink, useLocation } from "react-router-dom";
export default function Default_LayOut() {
  const location = useLocation();
  const [RegisterBox, SetRegisterBox] = useState(false);
  const [Cart, SetCart] = useState(false);
  const triggerCartSlide = () => {
    SetCart(!Cart);
  };
  return (
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
                    onClick={() => SetRegisterBox(!RegisterBox)}
                    className="cursor-pointer"
                    src={UserLogo}
                  />
                  {/* trigger-user-box */}
                  {RegisterBox ? (
                    <div className="register-box transition duration-500 ease-in-out flex flex-col justify-center gap-2 py-2 bg-white px-3 rounded-lg">
                      <span className="flex flex-row cursor-pointer transition duration-300 ease-in-out hover:bg-slate-200 items-center gap-2">
                        <span className="logIn-title ml-auto">تسجيل دخول</span>
                        <img
                          className="icon-registeration ml-auto"
                          src={LoginIcon}
                          alt=""
                        />
                      </span>
                      <span className="flex cursor-pointer transition duration-300 ease-in-out hover:bg-slate-200 flex-row items-center gap-2">
                        <span className="logIn-title ml-auto">
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
                <span onClick={() => SetCart(!Cart)} className="cursor-pointer">
                  <img src={ShoppingCart} alt="" />
                </span>
                <CartModal active={Cart} cartTrigger={triggerCartSlide} />
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
                  <NavLink className="text-white" to="/مولود جديد">
                    اعياد ميلاد
                  </NavLink>
                </span>
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
  );
}
