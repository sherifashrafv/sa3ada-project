import React from "react";
import "./index.css";
import { NavLink, useLocation } from "react-router-dom";
import accountIcon from "../../assets/Icons/account icon.svg";
import orderIcon from "../../assets/Icons/orders icon.svg";
import passwordIcon from "../../assets/Icons/passwordIcon.svg";
import logoutIcon from "../../assets/Icons/logout.svg";

export default function ProfileSideBar() {
  const location = useLocation();
  return (
    <aside className="sidebar-profile-settings">
      <ul className="sidebar-links">
        <li className="pb-3">
          <NavLink
            className={({ isActive }) =>
              location.pathname === "/profile" && isActive
                ? `sidebar-link-active `
                : "sidebar-link"
            }
            to={"/profile"}
          >
            <div
              dir="rtl"
              className="flex flex-row w-[100%] h-[100%] px-[32px]  justify-between items-center gap-3"
            >
              <span className="sidebar-settings-icon  ml-auto ">
                <img src={accountIcon} alt="" />
              </span>
              <span className="text-[16px] ml-auto">الحساب الشخصي</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `sidebar-link-active mb-2` : "sidebar-link"
            }
            to={"orders"}
          >
            <div
              dir="rtl"
              className="flex flex-row w-[100%] h-[100%] px-[32px]  justify-between items-center gap-3"
            >
              <span className="sidebar-settings-icon  ml-auto ">
                <img src={orderIcon} alt="" />
              </span>
              <span className="text-[16px] ml-auto">الطلبات</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `sidebar-link-active mb-2` : "sidebar-link"
            }
            to={"EditPassword"}
          >
            <div
              dir="rtl"
              className="flex flex-row w-[100%] h-[100%] px-[32px]  justify-between items-center gap-3"
            >
              <span className="sidebar-settings-icon  ml-auto ">
                <img src={passwordIcon} alt="" />
              </span>
              <span className="text-[16px] ml-auto">تغير كلمة المرور</span>
            </div>
          </NavLink>
        </li>
        <li>
          <a href="#" className="sidebar-link">
            <div
              dir="rtl"
              className="flex flex-row w-[100%] h-[100%] px-[32px]  justify-between items-center gap-3"
            >
              <span className="sidebar-settings-icon  ml-auto ">
                <img src={logoutIcon} alt="" />
              </span>
              <span className="text-[16px] ml-auto">تسجيل الخروج </span>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  );
}
