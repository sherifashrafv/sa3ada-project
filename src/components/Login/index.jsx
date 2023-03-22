import React, { useState } from "react";
import "../Login/index.css";
import EmailIcon from "../../assets/login/email.svg";
import Password from "../../assets/login/password.svg";
import eyeicon from "../../assets/login/eye icon.svg";
import noEyeIcon from "../../assets/login/noEye.svg";
import { Link, useNavigate } from "react-router-dom";
import { CHANGE_VALUE } from "../../store/forms";
import { SAVE_USER_DATA } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import Joi from "joi";
import axios from "axios";
import close from "../../assets/cart/close.svg";
import { LOGIN_MODAL } from "../../store/navbarSlice";

export default function Login() {
  const Forms = useSelector((state) => state.Forms);
  const [errorMessage, setError] = useState("");
  const [errorList, setErrorList] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const getInputValue = (e) => {
    e.preventDefault();
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  let validateFormData = () => {
    const schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string().required(),
    });
    return schema.validate(user, { abortEarly: false });
  };
  let submitFormData = async (e) => {
    e.preventDefault();
    let validationResponse = validateFormData();
    console.log(validationResponse);
    if (validationResponse.error) {
      setErrorList(validationResponse.error.details);
    } else {
      let { data } = await axios.post(
        "https://sticky-note-fe.vercel.app/signin",
        user
      );
      console.log(data);
      if (data.message == "success") {
        localStorage.setItem("token", data.token);
        navigate("/");
        SAVE_USER_DATA();
      } else {
        setError(data.message);
      }
    }
  };
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="modal-box">
      <div>
        <h1 className="modal-title text-center">تسجيل دخول</h1>
        <form dir="rtl" className="mt-[1rem]">
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
              onChange={getInputValue}
              type="email"
              className="custome-form-input"
            />
          </div>
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
                onClick={() => dispatch(CHANGE_VALUE())}
                className="passwrod-trigger-icon"
              >
                <img src={Forms.triggerPassword ? noEyeIcon : eyeicon} alt="" />
              </span>
              <input
                onChange={getInputValue}
                type={Forms.triggerPassword ? "text" : "password"}
                name="password"
                className="custome-form-input password"
              />
            </div>
          </div>
        </form>
        <Link className="text-[14px] font-bold pt-[1rem]" to="">
          هل نسيت كلمة المرور ؟
        </Link>
      </div>
      <button className="btn-linear-color my-7">تسجيل الدخول</button>
      <div className="text-center">
        <span className="text-[#949494] ">
          ليس لديك حساب ؟
          <span role={"button"} className="text-[#6821F4;] font-bold mr-2">
            أنشأ حساب جديد
          </span>
        </span>
      </div>
    </div>
  );
}
