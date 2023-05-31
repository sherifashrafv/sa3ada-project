import React, { useState } from "react";
import "../Login/index.css";
import EmailIcon from "../../assets/login/email.svg";
import Password from "../../assets/login/password.svg";
import eyeicon from "../../assets/login/eye icon.svg";
import noEyeIcon from "../../assets/login/noEye.svg";
import { Link, useNavigate } from "react-router-dom";
import { changeValue } from "../../store/forms";
import { useDispatch, useSelector } from "react-redux";
import close from "../../assets/cart/close.svg";
import { LOGIN_MODAL } from "../../store/navbarSlice";
import { LoginSchema } from "../../Validations/index";
import { useFormik } from "formik";
import Loader from "../loader";
import { login } from "../../store/auth";
import { ToastContainer } from "react-toastify";
export default function Login() {
  const Forms = useSelector((state) => state.Forms);
  const Auth = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    const user = values;
    if (!values) {
      console.log("errors still handling !");
    } else {
      actions.resetForm();
      dispatch(login(user));
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit,
    });
  return (
    <div className="modal-box">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div>
        <h1 className="modal-title text-center">تسجيل دخول</h1>
        <form onSubmit={handleSubmit} dir="rtl" className="mt-[1rem]">
          <div className="flex relative flex-col items-start gap-3 mb-5">
            <span
              onClick={() => dispatch(LOGIN_MODAL())}
              className="close-icon"
            >
              <img src={close} alt="" />
            </span>
            <div className="flex flex-row items-center gap-3">
              <img src={EmailIcon} />
              <span className="icon-label text-[#949494]">
                البريد الالكتروني
              </span>
            </div>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              value={values.email}
              className={
                errors.email && touched
                  ? "custome-form-input error"
                  : "custome-form-input "
              }
            />
          </div>
          {errors.email && touched ? (
            <p className="text-red-600 ">{errors.email}</p>
          ) : (
            ""
          )}
          <div className="flex flex-col items-start gap-3 mb-3">
            <div className="flex flex-row items-center gap-3">
              <img src={Password} />
              <label
                htmlFor="password"
                className="label-custome text-[#949494]"
              >
                الباسورد
              </label>
            </div>
            <div className="passwrod-trigger relative w-[100%]">
              <span
                role={"button"}
                onClick={() => dispatch(changeValue())}
                className="passwrod-trigger-icon"
              >
                <img src={Forms.triggerPassword ? noEyeIcon : eyeicon} alt="" />
              </span>
              <input
                onChange={handleChange}
                type={Forms.triggerPassword ? "text" : "password"}
                name="password"
                className={
                  errors.password && touched
                    ? "custome-form-input password error"
                    : "custome-form-input"
                }
                value={values.password}
              />
            </div>
            {errors.password && touched ? (
              <p className="text-red-600 ">{errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <Link className="text-[14px] font-bold pt-[1rem]" to="">
            هل نسيت كلمة المرور ؟
          </Link>
          <button disabled={Auth.loader} className="btn-linear-color my-7">
            {Auth.loader ? (
              <Loader />
            ) : (
              <span className="m-auto">تسجيل الدخول</span>
            )}
          </button>
          <div className="text-center">
            <span className="text-[#949494] ">
              ليس لديك حساب ؟
              <span role={"button"} className="text-[#6821F4;] font-bold mr-2">
                أنشأ حساب جديد
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
