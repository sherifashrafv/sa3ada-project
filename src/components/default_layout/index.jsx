import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../d_Navbar/index";
import Footer from "../Footer/index";
export default function DefaultLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
