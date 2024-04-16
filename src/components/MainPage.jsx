import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";



function MainPage() {
  return (
    <>
      <Nav />
      <div className="pt-">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}

export default MainPage;
