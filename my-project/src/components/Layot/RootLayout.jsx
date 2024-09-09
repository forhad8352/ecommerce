import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import { Outlet } from "react-router-dom";
import Fotter from "../Fotter";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Outlet />
      <Fotter />
    </div>
  );
};

export default RootLayout;
