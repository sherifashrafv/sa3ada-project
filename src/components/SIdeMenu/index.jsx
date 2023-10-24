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
  CART_TRRIGGER_SIDE_MENU,
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
                  <li className="flex hover:bg-slate-200 justify-center items-center">
                    <Link
                      className="flex justify-center gap-5 items-center decoration-transparent block"
                      to={`/profile`}
                    >
                      <i class="fa-regular text-[blueviolet] fa-user m-auto"></i>
                      <span className="text-[#616161]">حسابك</span>
                    </Link>
                  </li>
                  <li className="flex justify-center gap-5 items-center cursor-pointer">
                    <Link
                      className="flex justify-center gap-5 items-center decoration-transparent block"
                      to="/cart"
                    >
                      <span>
                        <i class="fa-solid fa-cart-shopping text-[#f4b512]"></i>
                      </span>
                      <span>السلة</span>
                    </Link>
                  </li>
                  <SideCart />
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
