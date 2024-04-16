import React from "react";
import ic_1 from "../assets/images/ic_1.png";
import ic_2 from "../assets/images/ic_2.png";
import ic_3 from "../assets/images/ic_3.png";
import ic_4 from "../assets/images/ic_4.png";

const Card = ({ icon, heading, description }) => {
  return (
    <div className="bg-white p-6  border border-solid rounded-lg shadow-md transition duration-300 transform hover:border-blue-800 hover:rounded-xl">
      <span className="block mb-4 mx-auto">{icon}</span>
      <h3 className="text-xl font-semibold mb-2 text-center">{heading}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const ServiceCard = () => {
  return (
    <div className="flex  itemjustify-between space-x-4 p-8">
      <Card
        icon={
          <img
            src={ic_1}
            alt="Icon 1"
            className="w-[74px] h-[84px] object-cover mb-4 rounded-md mx-auto "
          />
        }
        heading="Trusted services"
        description="All of technicians and companies have a good recommendation by clients."
      />
      <Card
        icon={
          <img
            src={ic_2}
            alt="Icon 2"
            className="w-[74px] h-[84px] object-cover mb-4 rounded-md mx-auto"
          />
        }
        heading="Save time and money"
        description="Chat with companies about your problem, needs and price before accepting their offers.D"
      />
      <Card
        icon={
          <img
            src={ic_3}
            alt="Icon 3"
            className="w-[74px] h-[84px] object-cover mb-4 rounded-md mx-auto"
          />
        }
        heading="Client and agent chat"
        description="Compare tens of offers and hire the best for you. Pay after getting the service as proposed"
      />
      <Card
        icon={
          <img
            src={ic_4}
            alt="Icon 4"
            className="w-[74px] h-[84px] object-cover mb-4 rounded-md mx-auto"
          />
        }
        heading="Rate your experience"
        description="We care about your ratings for service providers, it helps us serve you better."
      />
    </div>
  );
};

export default ServiceCard;
