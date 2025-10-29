import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router";
import MobileNavbar from "../../Components/MobileNavbar";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <MobileNavbar></MobileNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
