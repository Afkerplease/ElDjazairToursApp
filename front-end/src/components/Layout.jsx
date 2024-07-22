import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
