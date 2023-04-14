import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-sec min-h-screen flex items-center justify-center">
      AuthLayout
      <Outlet />
    </div>
  );
};

export default AuthLayout;
