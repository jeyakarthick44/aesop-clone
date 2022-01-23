import "../styles/section6.css";
import React from "react";
import Slider from "react-slick";
var FontAwesome = require("react-fontawesome");

const Section6 = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="section6">
      <div className="left-display">
        <div className="left-display-values">
          <h1>Store locator</h1>
          <p>
            Our consultants are available to host you in-store and provide
            tailored guidance on gift purchases.
          </p>
          <button>
            Find a nearby store{" "}
            <FontAwesome className="arrow6" name="arrow-right" />
          </button>
        </div>
      </div>
      <div className="right-display">
        <div>
          <Slider {...settings}>
            <div className="slides">
              <img
                src="https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg"
                alt=""
              />
            </div>
            <div className="slides">
              <img
                src="https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg"
                alt=""
              />
            </div>
            <div className="slides">
              <img
                src="https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Section6;
