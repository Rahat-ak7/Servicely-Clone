import React from "react";

const servicesData = [
  {
    title: "Beauty Salon",
    description:
      "Servicely offers beauty salon solution at your doorstep by trained professionals around your home with affordable prices.",
    image: "/src/assets/images/makeup.png",
  },
  {
    title: "Home Repair Services",
    description:
      "A smarter way to keep up with home maintenance. We provide home repair and maintenance services at your doorstep in Pakistan.",
    image: "/src/assets/images/repair.png",
  },
  {
    title: "Home Shifting Services",
    description:
      "Servicely helps to take the entire relocation burden off from the customers shoulders and helps to provide the most trusted shifting service solution.",
    image: "/src/assets/images/HomeShift.png",
  },
  {
    title: "Pest Control Services",
    description:
      "We provide professional pest control services for your home and business. Book highly experienced in-house professionals & get it done, Instantly.",
    image: "/src/assets/images/pest_control.png",
  },
  {
    title: "Cleaning Service",
    description:
      "Are you having issues with your faucets and sinks? Common problems can include leaky faucets, low water pressure, clogged drains, hot water issues, loose faucet handles, and more",
    image: "/src/assets/images/cleaning.png",
  },
  {
    title: "A.C Maintenance Services",
    description:
      "Servicely offers flexible solutions for installation, removal and repair of your AC units at competitive prices in all Pakistani cities.",
    image: "/src/assets/images/maintenance.png",
  },
  {
    title: "Carpentry Services",
    description:
      "Our professional carpenters will redesign your home, making it appear exceptionally stylish at an affordable price. Book online furniture repair and carpentry services.",
    image: "/src/assets/images/carpenter.png",
  },
  {
    title: "Plumbing Services",
    description:
      "Are you having issues with your faucets and sinks? Common problems can include leaky faucets, low water pressure, clogged drains, hot water issues, loose faucet handles, and more.",
    image: "/src/assets/images/plumber.png",
  },
  {
    title: "Electricity Services",
    description:
      "Servicely offers complete prepared food solution for your events/parties with professionals and experienced partners.",
    image: "/src/assets/images/electrical.png",
  },
  {
    title: "Catering Solution",
    description:
      "Are you having issues with your faucets and sinks? Common problems can include leaky faucets, low water pressure, clogged drains, hot water issues, loose faucet handles, and more.",
    image: "/src/assets/images/degh.png",
  },
  {
    title: "Plumbing Services",
    description:
      "Servicely offers complete solution for car washing, car cleaning, auto detailing and dry cleaning services at doorstep; simultaneously it is environment friendly and suitable for saving the precious time.",
    image: "/src/assets/images/carwash.png",
  },
  {
    title: "First Aid",
    description:
      "Servicely provides facility of First Aid Treatment at your doorstep. In case of an emergency with the help of Servicely app you can directly connect with nearest clinic.",
    image: "/src/assets/images/medic.png",
  },
];

export const Services = () => {
  return (
    <div className="container  mx-auto my-10">
      <h2 className="text-3xl text-center pt-5 font-bold mb-20">
        Servicely - Home Service Solution
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 border border-solid rounded-lg shadow-md transition duration-300 transform hover:border-blue-800 hover:rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-20 object-cover mb-4 rounded-md mx-auto"
        />
        <h3 className="text-xl text-center text-blue-950 font-bold mb-2">
          {title}
        </h3>
        <p className="text-gray-900 text-center">{description}</p>
      </div>
    </div>
  );
};
