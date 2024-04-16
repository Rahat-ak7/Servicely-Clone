import React, { useEffect } from "react";
import header2 from "../assets/images/header2.png";
import hero from "../assets/images/hero.png";
import ServiceCard from "./Services-Card";
import About from "./About";
import Links from "./Links";
import { Services } from "./Services";

import Contact from "./Contact";

import SliderSection from "./SliderSection";
import HowItWorks from "./HowitWork";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      {/* //HERO */}
      <div
        className=" bg-contain bg-no-repeat bg-bottom  "
        style={{ backgroundImage: `url('${header2}')` }}
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row gap-0">
          <div className="md:w-1/2">
            <div className="flex mt-10 text-center">
              <p
                className="text-4xl mt-8  font-bold text-blue-600 pl-20 max-w-lg"
                data-aos="fade-up"
              >
                The convenient and Fast WAY
              </p>
            </div>
            <div>
              <p
                className="max-w-lg pl-20  mt-8 text-gray-800 font-semibold text-lg text-center "
                data-aos="fade-up"
              >
                Services is a leading multiple service provider company catering
                to your 360 needs with quality guaranteed. The aim and priority
                of Services are to add value to our consumers' lives by
                providing smart solutions to all their problems.
              </p>
              {/* <button
                type="button"
                className="bg-blue-500 text-white px-8 mx-10 py-3 rounded-3xl "
              >
                Chat us Whatsapp
              </button> */}
            </div>
            <button
              type="button"
              className="bg-blue-500 text-white px-8 mx-36  mt-4 font-extrabold py-3 rounded-3xl "
            >
              Chat us Whatsapp
            </button>
          </div>
          <div className="md:w-1/2 sm:flex-col">
            <div className="">
              <img src={hero} />
            </div>
          </div>
        </div>
      </div>
      {/* //SECTION */}
      <section data-aos="fade-up">
        <ServiceCard />
      </section>
      <section data-aos="fade-up">
        <About />
      </section>
      <section data-aos="fade-up">
        <HowItWorks />
      </section>
      <section data-aos="fade-up">
        <Services />
      </section>
      <section data-aos="fade-up">
        <Links />
      </section>
      <section data-aos="fade-up">
        <SliderSection />
      </section>
      <section data-aos="fade-up">
        <Contact />
      </section>
    </>
  );
}

export default Home;
