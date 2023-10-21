import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useFormik } from "formik";
import { ProfileSchema } from "../../Validations";
import { useDispatch, useSelector } from "react-redux";
import { editUserInformation } from "../../store/auth";
import Loader from "../../components/loader";

export default function ProfileDetails({ userData }) {
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.Auth);
  const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    const id = userData.id;
    const user = { ...values, id };
    if (!values) {
      console.log("errors still handling !");
    } else {
      dispatch(editUserInformation(user));
    }
  };
  const {
    values,
    errors,
    setFieldValue,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      fullName: userData ? userData.name : "",
      email: userData ? userData.email : "",
      phoneNumber: userData ? userData.phoneNumber : "",
    },
    validationSchema: ProfileSchema,
    onSubmit,
  });
  console.log(errors);
  return (
    <>
      <div className="information-box">
        <h1 className="font-bold mb-5 text-[24px]">الحساب الشخصي</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-details flex flex-row items-center gap-5 justify-between mb-3">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-[12px] text-[#949494]">
                الاسم بالكامل
              </label>
              <input
                value={values.fullName}
                onChange={(e) => {
                  const value = e.target.value || "";
                  setFieldValue("fullName", value);
                }}
                type="text"
                className={
                  errors.fullName && touched
                    ? "custome-form-input error h-[56px] w-[100%]"
                    : "custome-form-input h-[56px] w-[100%]"
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-[12px] text-[#949494]">
                البريد الإلكتروني
              </label>
              <input
                value={values.email}
                onChange={(e) => {
                  const value = e.target.value || "";
                  setFieldValue("email", value);
                }}
                type="text"
                className={
                  errors.email && touched
                    ? "custome-form-input error h-[56px] w-[100%]"
                    : "custome-form-input h-[56px] w-[100%]"
                }
              />
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="name" className="mb-2 font-[12px] text-[#949494]">
              رقم الجوال
            </label>
            <input
              value={values.phoneNumber}
              onChange={(e) => {
                const value = e.target.value || "";
                setFieldValue("phoneNumber", value);
              }}
              type="text"
              className={
                errors.phoneNumber && touched
                  ? "custome-form-input error h-[56px] w-[100%]"
                  : "custome-form-input h-[56px] w-[100%]"
              }
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.9 }}
          >
            <span className="flex justify-center mt-16">
              {Auth.editLoader ? (
                <Loader />
              ) : (
                <button className="btn-linear-color w-[228px]">
                  حفظ التغيرات
                </button>
              )}
            </span>
          </motion.div>
        </form>
      </div>
    </>
  );
}
