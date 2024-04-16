// src/components/Contact.js
import React from "react";
import b2 from "../assets/images/b2.png";

const Contact = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">Leave your message here, and we will contact you.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" mb-4 pb-4">
          <h2 className="text-lg font-semibold mb-2">Address</h2>
          <p>
            Office No 8 1st Floor Orakzai Plaza, Lehtrar Road, Khanna Pull,
            Islamabad Islamabad Capital Territory (I.C.T.) Pakistan
          </p>
        </div>

        <div className="border-l px-3 mb-4 pb-4">
          <h2 className="text-lg font-semibold mb-2">Phone Number</h2>
          <p>
            +92 301 0523287 <br />{" "}
            <a href="tel:+923010523287" className="text-blue-500">
              Click to Send Whatsapp
            </a>
          </p>
          <hr className="my-2" />
          <p>
            +92 334 0061777 <br />{" "}
            <a href="tel:+923340061777" className="text-blue-500">
              Click to Send Whatsapp
            </a>
          </p>
        </div>

        <div className="border-l px-3 mb-4 pb-4">
          <h2 className="text-lg font-semibold mb-2">Email</h2>
          <p>
            <a href="mailto:info@servicelyapp.com" className="text-blue-500">
              info@servicelyapp.com
            </a>
          </p>
        </div>
      </div>

      <div className="flex mt-8">
        <form className="flex-1 mr-4">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>

          <div className=" pl-4">
            <form className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full mb-2 p-2 border rounded"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full mb-2 p-2 border rounded"
              ></textarea>
            </form>
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white px-8 mx-5 py-2 rounded "
          >
            Send Message
          </button>
        </form>

        <div className="flex-1">
          <a
            href="https://www.youtube.com/watch?v=oI3jHRD8gqg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={b2} alt="YouTube Banner" className="w-full" />
          </a>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Registration / Booking
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
