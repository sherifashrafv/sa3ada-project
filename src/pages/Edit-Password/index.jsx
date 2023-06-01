import React from "react";
import "./index.css";
import { motion } from "framer-motion";

export default function EditPassword() {
  return (
    <>
      <div className="change-password-box">
        <h1 className="font-bold mb-5 text-[24px]">تغيير كلمة المرور</h1>
        <form>
          <div className="flex flex-col mb-3">
            <label htmlFor="name" className="mb-2 font-[12px] text-[#949494]">
              كلمة المرور الحالية
            </label>
            <input
              type="password"
              className="custome-form-input w-[50%] h-[56px] "
            />
          </div>
          <div className="form-details flex flex-row items-center gap-5 justify-between mb-3">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-[12px] text-[#949494]">
                كلمة المرور الجديدة
              </label>
              <input
                type="text"
                className="custome-form-input h-[56px] w-[100%]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-[12px] text-[#949494]">
                تأكيد كلمة المرور الجديدة
              </label>
              <input type="text" className="custome-form-input" />
            </div>
          </div>
        </form>
      </div>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 0.9 }}
      >
        <span className="flex justify-center mt-13">
          <button className="btn-linear-color w-[228px]">حفظ التغيرات</button>
        </span>
      </motion.div>
    </>
  );
}
