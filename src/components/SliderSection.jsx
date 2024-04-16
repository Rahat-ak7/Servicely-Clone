import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 5000, // Change every 2 seconds
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  };

  const videos = [
    { id: "1EBLmi0kyRs", title: "Event Catering & Dagh on Order" },
    { id: "eqLaVPH_RCI", title: "Event Organization & Marriage Hall Booking" },
    { id: "ADdiNPSGes0", title: "Event Decoration & Car Decoration Services" },
    { id: "MeShmQ-_8Ik", title: "Home & Office Cleaning Services" },
    { id: "MF0GzMyTD7c", title: "Beautician at yours Home door " },
    { id: "l2syp6ZneSc", title: "Professional Photography & Movie Making" },
  ];

  return (
    <div className="container  justify-between gap-4 mx-auto py-10 ">
      <h2 className="text-3xl text-center pt-5 font-bold mb-20">
        Discover Our Services
      </h2>
      <Slider {...settings}>
        {videos.map((video) => (
          <div
            key={video.id}
            className="item grow p-11 text-center transition bg-white  border border-solid rounded-lg shadow-md duration-300 transform hover:border-blue-800 hover:rounded-xl mx-2 "
          >
            <a
              href={`https://www.youtube.com/embed/${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                width="240"
                height="135"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder=""
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              ></iframe>
              <h5 className="text-center font-weight-bold pt-4">
                {video.title}
              </h5>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSection;
