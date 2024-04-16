import React, { useState } from "react";
import Register from "../assets/images/Register.png";
import axios from "axios";
import ApiUrl from "../components/ApiUrl";

const Form = () => {
  const formData = {
    fullName: "",
    fatherName: "",
    email: "",
    gender: "",
    phone: "",
    cnic: "",
    fatherCnic: "",
    address: "",
    experience: "",
    town: "",
    city: "",
    skill: "",
  };
  const [inputData, setInputData] = useState(formData);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
axios.post(`${ApiUrl}/builders/create`, inputData)
.then((Response) => {
  console.log(Response);

});

  };

  return (
  
 

    <div
      className="min-h-screen py-40"
      style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center   ">
            <div>
              <img
                src={Register}
                className="bg-no-repeat bg-cover bg-center rounded-lg"
              />
            </div>
            <h1 className="text-Black text-3xl mb-3 mt-6">
              Register Your Self for better future
            </h1>
            <div>
              <p className=" mt-7 text-purple-500 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas we ew werwe wef
                sd q3e e qwdfgretrf sdf efd fsefwesd fdfwer qwasdfht hd ftg f
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. Its free and only take a minute
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  name="fullName"
                  value={inputData.fullName}
                  onChange={handleData}
                  placeholder="Fullname"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="number"
                  name="cnic"
                  value={inputData.cnic}
                  onChange={handleData}
                  placeholder="Cnic-Number"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <input
                  type="text"
                  name="fatherName"
                  value={inputData.fatherName}
                  onChange={handleData}
                  placeholder="Fathername"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="number"
                  name="fatherCnic"
                  value={inputData.fatherCnic}
                  onChange={handleData}
                  placeholder="Father-Cnic"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  name="email"
                  value={inputData.email}
                  onChange={handleData}
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  name="address"
                  value={inputData.address}
                  onChange={handleData}
                  placeholder="Address"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <input
                  type="text"
                  name="city"
                  value={inputData.city}
                  onChange={handleData}
                  placeholder="City Name"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  name="town"
                  value={inputData.town}
                  onChange={handleData}
                  placeholder="Town"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <select
                  className="border border-gray-400 py-1 px-2 w-full"
                  name="gender"
                  value={inputData.gender}
                  onChange={handleData}
                >
                  <option hidden>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Custom</option>
                </select>
              </div>
              <div className="mt-5">
                <select
                  className="border border-gray-400 py-1 px-2 w-full"
                  name="experience"
                  value={inputData.experience}
                  onChange={handleData}
                >
                  <option hidden>Experience Level</option>
                  <option>Fresh (0 years)</option>
                  <option>Mid-Senior (1-2 years)</option>
                  <option>Experience (3-5 years)</option>
                  <option>Master (5+ years)</option>
                </select>
              </div>
              <div className="mt-5">
                <select
                  className="border border-gray-400 py-1 px-2 w-full"
                  name="skill"
                  value={inputData.skill}
                  onChange={handleData}
                >
            <option hidden>Skill Level</option>
                  <option>Fresh (0 years)</option>
                  <option>Mid-Senior (1-2 years)</option>
                  <option>Experience (3-5 years)</option>
                  <option>Master (5+ years)</option>
                </select>
              </div>

              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button
                  className="w-full bg-purple-500 py-3 text-center text-white"
                  onClick={handleSubmit}
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
