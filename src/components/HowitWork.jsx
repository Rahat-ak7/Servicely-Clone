import React from "react";
import Screen from "../assets/images/Screen.gif";

const HowItWorks = () => {
  return (
    <section className="">
      <p className="text-3xl text-center pt-5 font-bold ">How its work</p>
      {/* Left Div */}
      <div className="flex p-8 ">
        <div className="w-2/3 p-4 flex-row ">
          <div>
            <span className="bg-blue-600 text-white rounded-xl px-3">
              step 1
            </span>
            <h2 className="text-xl font-bold mb-2">Select Category</h2>
            <p className="">
              After Registration select Desired category or Subcategory.
            </p>
          </div>
          <div>
            <span className="bg-blue-600 text-white rounded-xl px-3">
              step 2
            </span>
            <h2 className="text-xl font-bold my-2">Select Service Provider</h2>
            <p className="">
              Select nearest service provider company and review profile.
            </p>
          </div>
          <div>
            <span className="bg-blue-600 text-white rounded-xl px-3">
              step 3
            </span>
            <h2 className="text-xl font-bold my-2">Book Service</h2>
            <p className="">
              Book Service with the best Service Provider after checking the
              profile.
            </p>
          </div>
          <div>
            <span className="bg-blue-600 text-white rounded-xl px-3">
              step 4
            </span>
            <h2 className="text-xl font-bold my-2">
              Call / Chat to Service Provider
            </h2>
            <p className="">
              Call to the service provider to make him understand about the job
              nature, also share pictures if required & decide the price.
            </p>
          </div>
          <div>
            <span className="bg-blue-600 text-white rounded-xl px-3">
              step 5
            </span>
            <h2 className="text-xl font-bold my-2">
              Security Code Verification
            </h2>
            <p className="">
              Verify the security code using the app upon the arrival of the
              service provider.
            </p>
          </div>
          <div>
            <span className="bg-blue-600 text-white rounded-xl px-3">
              step 6
            </span>
            <h2 className="text-xl font-bold my-2">
              Finish Job & Payment to Provider
            </h2>
            <p className="">
              Upon completion of work, enter the paid amount to the provider and
              get confirmation.
            </p>
          </div>
          <div>
            <span className="bg-blue-600 text-white rounded-xl px-3">
              step 7
            </span>
            <h2 className="text-xl font-bold my-2">Review & Rating</h2>
            <p className="f ">
              Rate the job and enter your comments about the job and provider.
            </p>
          </div>
        </div>

        {/* Right Div (Image) */}
        <div className="w-1/3 p-4">
          <img src={Screen} alt="Image Description" className="h-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
