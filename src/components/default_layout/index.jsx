import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../d_Navbar/index";
import Footer from "../Footer/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function DefaultLayout({ userInfo }) {
  return (
    <>
      <NavBar userInfo={userInfo} />
      <Outlet />
      <Footer />
    </>
  );
}
