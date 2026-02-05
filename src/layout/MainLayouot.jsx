import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Navbar/Footer";

const MainLayouot = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="max-w-300 mx-auto flex-1 p-4 my-10">
        <Outlet className="w-full"></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainLayouot;
