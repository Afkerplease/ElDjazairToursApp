import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "./navbar/NavBar";

function Layout() {
  return (
    <div className="">
      <NavBar />
      <Outlet />;
    </div>
  );
}

export default Layout;
