import React from "react";

function About() {
  return (
 
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className=" text-xl font-semibold text-center mt-2 mb-5">
          Servicely is a platform providing facility of various kind of services
          on an app
        </p>

        <p className="text-lg w-1/2 text-gray-700 mb-8 text-center">
          The basic purpose of Servicely is to provide all kinds of services at
          customer's doorsteps with a one-stop solution to make their life easy
          and convenient anywhere at any time by nearest service provider
          companies. We realize the challenges that every home faces on a
          regular basis, such as getting skilled service providers at a
          convenient time. One of our motives is to ensure customer security,
          better work quality, and to hire service provider companies area-wise
          instead of hiring an individual. This allows customers to contact the
          company directly and not an individual, enabling the company to send
          its relevant employee to perform the required job. The company has its
          physical address so the customer can approach easily if required
          during any unforeseen circumstances.
        </p>
        <div className="flex justify-center mb-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className=" w-1/2 flex justify-center">
          {/* Dummy YouTube video link (replace with actual link) */}
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Watch Our Video
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
