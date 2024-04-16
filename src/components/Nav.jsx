import React, { useState } from "react";
// import { BookOpenIcon, Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  // ACTIVE NAVBAR ITEMS

  const [activeItem, setActiveItem] = useState("Home");
  const HandleItemActive = (itemName) => {
    setActiveItem(itemName);
  };

  let [open, setOpen] = useState(false);

  // NAVIGATE LINKS

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <div className="shadow-md w-full  top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className=" font-bold  cursor-pointer flex items-center gap-1">
          <img
            className="nav-logo w-[85px] mx-10  "
            src={logo}
            alt="logo"
            onClick={navigateHandler}
          />
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-8 top-6 cursor-pointer w-7 h-7"
        >
          {/* Add your menu icon here */}
        </div>
        {/* linke items */}
        <div className="md:flex gap-x-8 items-end px-3 py-2 list-none">
          {/* <li
        className={`cursor-pointer text-blue-500 mb-2 md:mb-0 ${
          activeItem === "Dashboard" ? "font-bold" : "text-black"
        }`}
        onClick={() => HandleItemActive("Dashboard")}
      >
        <Link to="/dashboard">Dashboard</Link>
      </li> */}
          <li
            className={`cursor-pointer text-blue-500 mb-2 md:mb-0 ${
              activeItem === "Home" ? "font-bold" : "text-black"
            }`}
            onClick={() => HandleItemActive("Home")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`cursor-pointer text-blue-500 mb-2 md:mb-0 ${
              activeItem === "About" ? "font-bold" : "text-black "
            }`}
            onClick={() => HandleItemActive("About")}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`cursor-pointer text-blue-500 mb-2 md:mb-0 ${
              activeItem === "Services" ? "font-bold" : "text-black "
            }`}
            onClick={() => HandleItemActive("Services")}
          >
            <Link to="/services"> Services</Link>
          </li>
          {/* <li
            className={`cursor-pointer text-blue-500 mb-2 md:mb-0 ${
              activeItem === "Form" ? "font-bold" : "text-black"
            }`}
            onClick={() => HandleItemActive("Form")}
          >
            <Link to="/form">Working</Link>
          </li> */}
          <li
            className={`cursor-pointer text-blue-500 mb-2 md:mb-0 ${
              activeItem === "Review" ? "font-bold" : "text-black"
            }`}
            onClick={() => HandleItemActive("Review")}
          >
            <Link to="/review">Review</Link>
          </li>
          {/* <li
            className={`cursor-pointer text-blue-500 mb-2 md:mb-0 ${
              activeItem === "Review" ? "font-bold" : "text-black"
            }`}
            onClick={() => HandleItemActive("Review")}
          >
            <Link to="/">Our Partners</Link>
          </li> */}
          {/* <li
            className={`cursor-pointer text-blue-500 mb-2 md:mb-0 ${
              activeItem === "Review" ? "font-bold" : "text-black"
            }`}
            onClick={() => HandleItemActive("Review")}
          >
            <Link to="/review">Become Provider</Link>
          </li> */}
          {/* <li
            className={`cursor-pointer text-blue-500 mb-2 md:mb-0 ${
              activeItem === "Review" ? "font-bold" : "text-black"
            }`}
            onClick={() => HandleItemActive("Review")}
          >
            <Link to="/">Get App </Link>
          </li> */}
          <li
            className={`cursor-pointer text-blue-500 mb-2 md:mb-0 ${
              activeItem === "Review" ? "font-bold" : "text-black"
            }`}
            onClick={() => HandleItemActive("Review")}
          >
            <Link to="/form">Contact us</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Nav;
