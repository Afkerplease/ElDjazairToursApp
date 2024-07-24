import React from "react";
import { useSelector } from "react-redux";

function Admin() {
  const { currentUser } = useSelector((state) => state.user);
  if (currentUser.role !== "admin") {
    return "404 page not found";
  }
  return <div>Admin</div>;
}

export default Admin;
