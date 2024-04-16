import React from "react";
import Huaweiplay from "../assets/images/Huaweiplay.png";
import apk from "../assets/images/apk1.webp";
import QR from "../assets/images/QR.png";
import Appstore from "../assets/images/Appstore.png";
import googleplay from "../assets/images/googleplay.png";

const Links = () => {
  return (
    <div className="text-center py-8 bg-slate-100">
      <h2 className="text-3xl font-bold mb-4">Download Servicely App</h2>
      <p className="text-gray-700 mb-8">
        From home repairs & cleaning to errands & delivering, Servicely App is a
        Pakistan based home maintenance & repair service provider that finds you
        trusted and skilled service providers to handle your requests - when you
        want it and at prices offers you can afford with free to choose the best
        offer for you. Let Servicely help you with your home needs!
      </p>
      <div className="flex justify-center items-center space-x-4">
        <a href="link-to-qr-code" target="_blank" rel="noopener noreferrer">
          <img src={QR} alt="LOGO" className="w-40  cursor-pointer" />
        </a>
        <a href="link-to-android" target="_blank" rel="noopener noreferrer">
          <img src={apk} alt="apk" className="w-40 cursor-pointer" />
        </a>
        <a href="link-to-gallery" target="_blank" rel="noopener noreferrer">
          <img
            src={Huaweiplay}
            alt="App Gallery"
            className="w-40  cursor-pointer"
          />
        </a>
        <a href="link-to-playstore" target="_blank" rel="noopener noreferrer">
          <img
            src={Appstore}
            alt="Apple store"
            className="w-40  cursor-pointer"
          />
        </a>
        <a href="link-to-applestore" target="_blank" rel="noopener noreferrer">
          <img
            src={googleplay}
            alt="play Store"
            className=" w-40 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Links;
