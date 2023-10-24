import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../breadCrumb/index.css";
import arrow from "../../assets/specialOccasions/breadcrumb_arrow.svg";
import Right from "../../assets/specialOccasions/right.png";
import Left from "../../assets/specialOccasions/left.png";
export default function BreadCrumb() {
  const location = useLocation();
  return (
    <section className="bread_crumb py-[6rem]">
      <div className="container m-auto">
        <div className="row">
          <div className="bread-crumb-wrapper flex justify-center items-center flex-row">
            <div className="flex flex-col text-center">
              <div className="relative w-[100%] h-[100%] flex flex-row justify-between">
                <span className="right-fly">
                  <img src={Right} alt="" />
                </span>
                <span className="left-fly">
                  <img src={Left} alt="" />
                </span>
              </div>
              <div>
                {location.pathname === "/payment-process" ? (
                  <h1 className="page-title">إتمام الدفع</h1>
                ) : (
                  <h1 className="page-title">اعياد ميلاد</h1>
                )}
              </div>
              {location.pathname === "/specialOccasions" ? (
                <div className="dynamic-bread-crumb">
                  <div
                    dir="rtl"
                    className="flex items-center justify-center flex-row gap-2 mt-9"
                  >
                    <Link to="/" className="breadcrumb-subtitle">
                      الرئيسية
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <Link
                      to="/specialOccasions"
                      className="breadcrumb-subtitle"
                    >
                      اعياد ميلاد
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <p className="breadcrumb-subtitle">الباقات</p>
                  </div>
                </div>
              ) : (
                ""
              )}
              {location.pathname === "/basicPackage" ? (
                <div className="dynamic-bread-crumb">
                  <div
                    dir="rtl"
                    className="flex items-center justify-center flex-row gap-2 mt-9"
                  >
                    <Link to="/" className="breadcrumb-subtitle">
                      الرئيسية
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <Link
                      to="/specialOccasions"
                      className="breadcrumb-subtitle"
                    >
                      اعياد ميلاد
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <Link
                      to="/specialOccasions"
                      className="breadcrumb-subtitle"
                    >
                      - الباقات
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <p className="breadcrumb-subtitle">باقة أساسية</p>
                  </div>
                </div>
              ) : (
                ""
              )}
              {location.pathname === "/brithDay" ? (
                <div className="dynamic-bread-crumb">
                  <div
                    dir="rtl"
                    className="flex items-center justify-center flex-row gap-2 mt-9"
                  >
                    <Link to="/" className="breadcrumb-subtitle">
                      الرئيسية
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <Link
                      to="/specialOccasions"
                      className="breadcrumb-subtitle"
                    >
                      اعياد ميلاد
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
              {location.pathname === "/cart" ? (
                <div className="dynamic-bread-crumb">
                  <div
                    dir="rtl"
                    className="flex items-center justify-center flex-row gap-2 mt-9"
                  >
                    <Link to="/" className="breadcrumb-subtitle">
                      الرئيسية
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <span className="breadcrumb-subtitle">السلة</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              {location.pathname === "/payment-process" ? (
                <div className="dynamic-bread-crumb">
                  <div
                    dir="rtl"
                    className="flex items-center justify-center flex-row gap-2 mt-9"
                  >
                    <Link to="/" className="breadcrumb-subtitle">
                      الرئيسية
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <Link to="/cart" className="breadcrumb-subtitle">
                      السلة
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <span className="breadcrumb-subtitle"> إتمام الدفع</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              {location.pathname === "/profile" ? (
                <div className="dynamic-bread-crumb">
                  <div
                    dir="rtl"
                    className="flex items-center justify-center flex-row gap-2 mt-9"
                  >
                    <Link to="/" className="breadcrumb-subtitle">
                      الرئيسية
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <Link to="/cart" className="breadcrumb-subtitle">
                      الحساب
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <span className="breadcrumb-subtitle"> الحساب الشخصي</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              {location.pathname === "/profile/orders" ? (
                <div className="dynamic-bread-crumb">
                  <div
                    dir="rtl"
                    className="flex items-center justify-center flex-row gap-2 mt-9"
                  >
                    <Link to="/" className="breadcrumb-subtitle">
                      الرئيسية
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <Link to="/cart" className="breadcrumb-subtitle">
                      الحساب
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <span className="breadcrumb-subtitle"> الطلبات</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              {location.pathname === "/profile/EditPassword" ? (
                <div className="dynamic-bread-crumb">
                  <div
                    dir="rtl"
                    className="flex items-center justify-center flex-row gap-2 mt-9"
                  >
                    <Link to="/" className="breadcrumb-subtitle">
                      الرئيسية
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <Link to="/cart" className="breadcrumb-subtitle">
                      الحساب
                    </Link>
                    <span className="arrow mt-2">
                      <img src={arrow} alt="" />
                    </span>
                    <span className="breadcrumb-subtitle">
                      تغيير كلمة المرور
                    </span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
