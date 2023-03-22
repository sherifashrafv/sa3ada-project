import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedPage from "../../components/AnimationPage";
import BreadCrumb from "../../components/breadCrumb";
import Image1 from "../../assets/specialOccasions/1.svg";
import Image2 from "../../assets/specialOccasions/2.svg";
import Image3 from "../../assets/specialOccasions/3.svg";
import ellipse from "../../assets/specialOccasions/ellipse.svg";
import ellipse2 from "../../assets/specialOccasions/ellipse_2.svg";
import ellipse3 from "../../assets/specialOccasions/ellipse_3.svg";
import { Link } from "react-router-dom";
export default function SpecialOccasions() {
  return (
    <>
      <AnimatedPage>
        <BreadCrumb />
        <section className="mt-[5rem] pb-3 ">
          <div className="container m-auto">
            <div className="row">
              <p className="text-right mb-[6rem] font-bold">
                اختر الباقة المناسبة
              </p>
              {/* start  */}
              <Link to="/basicPackage">
                <div className="bg-[#F8F7FC;] relative grid z-[1] grid-cols-2 py-[4rem] px-[6rem] mb-[10rem]">
                  <span className="first-ellipse-card">
                    <img src={ellipse} alt="" />
                  </span>
                  <div>
                    <img src={Image1} alt="" />
                  </div>
                  <div
                    dir="rtl"
                    className="flex flex-col items-start justify-end"
                  >
                    <p className="df_color font-[600] text-[30px]">
                      باقة اساسية
                    </p>
                    <h1 className="text-[40px] font-bold pr-5">200 ر.س</h1>
                  </div>
                </div>
              </Link>
              {/*  End  */}
            </div>
            <div className="row">
              <Link to="">
                <div className="bg-[#FFF9EB;] relative mb-[10rem] grid z-[1] grid-cols-2 py-[4rem] px-[6rem]">
                  <span className="first-ellipse-card">
                    <img src={ellipse2} alt="" />
                  </span>
                  <div>
                    <img src={Image2} alt="" />
                  </div>
                  <div
                    dir="rtl"
                    className="flex flex-col items-start justify-end"
                  >
                    <p className="df_color text font-[600] text-[#F4B512] text-[30px]">
                      باقة PRO
                    </p>
                    <h1 className=" text-[40px] font-bold pr-5">200 ر.س</h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="row">
              <Link>
                <div className="bg-[#FFF4F2] relative grid z-[1] grid-cols-2 py-[4rem] px-[6rem]">
                  <span className="first-ellipse-card">
                    <img src={ellipse3} alt="" />
                  </span>
                  <div>
                    <img src={Image3} alt="" />
                  </div>
                  <div
                    dir="rtl"
                    className="flex flex-col items-start justify-end"
                  >
                    <p className="df_color text font-[600] text-[#F4B512] text-[30px]">
                      باقة PRO
                    </p>
                    <h1 className=" text-[40px] font-bold pr-5">200 ر.س</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedPage>
    </>
  );
}
