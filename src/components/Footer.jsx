import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Footer() {
  const leftSideLinks = [
    "Android app",
    "iOS app",
    "Huawei App",
    "Terms and Conditions - Customer",
    "Terms and Conditions - Provider",
    "Privacy Policy",
    "Contact Us",
  ];

  return (
    //   <footer className="bg-gray-900 text-white p-3 sm:px-5">
    //   <div className="container mx-auto flex flex-col sm:flex-row  items-center justify-between">
    //     <div className="flex items-center text-center mb-4 sm:mb-0">
    //       {/* Logo */}
    //       <img src={logo} alt="Logo" className="h-12 mr-4" />

    //       {/* Description */}
    //       <p className="text-sm">
    //         Captain Service copyRight @2023-2024 and related marks are registered Trademarks of Captain HoME Services..
    //       </p>
    //     </div>

    //     {/* Social Icons */}
    //     <div className="flex items-center space-x-4">
    //       <a href="#" target="_blank" rel="noopener noreferrer">
    //         <FaFacebook className="h-6 w-6" />
    //       </a>
    //       <a href="#" target="_blank" rel="noopener noreferrer">
    //         <FaTwitter className="h-6 w-6" />
    //       </a>
    //       <a href="#" target="_blank" rel="noopener noreferrer">
    //         <FaInstagramSquare className="h-6 w-6" />
    //       </a>
    //       <a href="#" target="_blank" rel="noopener noreferrer">
    //         <FaTiktok className="h-6 w-6" />
    //       </a>
    //       <a href="#" target="_blank" rel="noopener noreferrer">
    //         <FaYoutube className="h-6 w-6" />
    //       </a>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-gray-100  text-gray-800 p-4">
      <div className="flex justify-between ">
        {/* Left Side */}
        <div className="left-side mx-14">
          <p className="text-2xl font-bold mb-4"> Sitemap</p>
          {leftSideLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="block py-2 transition-all duration-300 hover:font-bold"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="   mx-14 mt-14 right-side text-right">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
            Become a Provider
          </button>
          <h1 className="text-xl font-bold mt-6 mx-4">Stay connected</h1>

          {/* Social Links */}
          <div className="flex mt-6 ml-3 gap-4">
            <a href="#" className="mr-2">
              <i className="fab fa-facebook-square text-black text-2xl">
                <FaFacebook />
              </i>
            </a>
            <a href="#" className="mr-2">
              <i className="fab fa-twitter-square text-black text-2xl">
                <FaTwitter />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-instagram-square text-black text-2xl">
                <FaInstagramSquare />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-instagram-square text-black text-2xl">
                <FaTiktok />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-instagram-square text-black text-2xl">
                <FaYoutube />
              </i>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center font-semibold">
        All rights reserved to Servicely 2020
      </p>
    </footer>
  );
}

export default Footer;
