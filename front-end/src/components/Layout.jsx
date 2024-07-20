import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

function Layout() {
  return (
    <div className="">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
