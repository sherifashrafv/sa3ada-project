import React from "react";
import BreadCrumb from "../../components/breadCrumb";
import ProfileSideBar from "../../components/Sidebar-Profile";
import "./index.css";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <>
      <BreadCrumb />
      <div className="mt-[5rem]">
        <div className="container">
          <div className="row">
            <div className="grid lg:grid-cols-3 md:grid-cols-3">
              <div dir="rtl" className=" md:col-span-2 lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: "50%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 0.5 }}
                >
                  <Outlet />
                </motion.div>
              </div>
              <ProfileSideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
