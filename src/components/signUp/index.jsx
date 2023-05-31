import React, { useState } from "react";
import "../signUp/index.css";
// icons
import AccountIcon from "../../assets/register/account.svg";
import PhoneNumber from "../../assets/register/phonenumber.svg";
import EmailIcon from "../../assets/register/email.svg";
import Password from "../../assets/login/password.svg";
import eyeicon from "../../assets/login/eye icon.svg";
import noEyeIcon from "../../assets/login/noEye.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../../store/forms";
import close from "../../assets/cart/close.svg";
import { REGISTER_MODAL } from "../../store/navbarSlice";
import { RegisterSchema } from "../../Validations";
import { useFormik } from "formik";
import { signUp } from "../../store/auth";
import Loader from "../loader";
import { ToastContainer } from "react-toastify";

export default function Register() {
  // hooks
  const Forms = useSelector((state) => state.Forms);
  const Auth = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  // functions
  const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    const user = values;
    if (!values) {
      console.log("errors still handle");
    } else {
      actions.resetForm();
      dispatch(signUp(user));
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: RegisterSchema,
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
        <h1 className="modal-title text-center">انشاء حساب جديد</h1>
        <form onSubmit={handleSubmit} dir="rtl" className="mt-[1rem]">
          <div className="flex relative flex-col items-start gap-3 mb-5">
            <span
              onClick={() => dispatch(REGISTER_MODAL())}
              className="close-icon"
            >
              <img src={close} alt="" />
            </span>
            <div className="flex flex-row items-center gap-3">
              <img src={AccountIcon} />
              <label htmlFor="name" className="icon-label text-[#949494]">
                الاسم
              </label>
            </div>
            <input
              value={values.name}
              id="name"
              type="text"
              className={
                errors.name && touched
                  ? "custome-form-input error"
                  : "custome-form-input "
              }
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
          {errors.name && touched ? (
            <p className="text-red-600 ">{errors.name}</p>
          ) : (
            ""
          )}
          {/* <div className="flex flex-col items-start gap-3 mb-5">
            <div className="flex flex-row items-center gap-3">
              <img src={PhoneNumber} />
              <label
                htmlFor="PhoneNumber"
                className="label-custome text-[#949494]"
              >
                رقم الجوال
              </label>
            </div>
            <div className="passwrod-trigger relative w-[100%]">
              <input
                type="text"
                id="PhoneNumber"
                className={
                  errors.phone && touched
                    ? "custome-form-input error"
                    : "custome-form-input "
                }
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.phone && touched ? (
              <p className="text-red-600 ">{errors.phone}</p>
            ) : (
              ""
            )}
          </div> */}
          <div className="flex flex-col items-start gap-3 mb-5">
            <div className="flex flex-row items-center gap-3">
              <img src={EmailIcon} />
              <label htmlFor="email" className="icon-label text-[#949494]">
                البريد الإلكتروني
              </label>
            </div>
            <input
              value={values.email}
              id="email"
              type="email"
              className={
                errors.email && touched
                  ? "custome-form-input error"
                  : "custome-form-input "
              }
              onChange={handleChange}
              onBlur={handleBlur}
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
                <img src={Forms.triggerPassword ? eyeicon : noEyeIcon} alt="" />
              </span>
              <input
                type={Forms.triggerPassword ? "text" : "password"}
                name="password"
                className={
                  errors.password && touched
                    ? "custome-form-input error"
                    : "custome-form-input "
                }
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.password && touched ? (
              <p className="text-red-600 ">{errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <button disabled={Auth.loader} className="btn-linear-color my-7">
            {Auth.loader ? (
              <Loader />
            ) : (
              <span className="m-auto">تسجيل الدخول</span>
            )}
          </button>
          <div className="text-center">
            <span className="text-[#949494] ">
              هل لديك حساب بالفعل ؟
              <span role={"button"} className="text-[#6821F4;] font-bold mr-2">
                تسجيل الدخول
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
