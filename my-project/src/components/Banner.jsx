import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Ban from "../assets/banner.png";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="">
        <Slider {...settings}>
          <div>
            <img src={Ban} alt="" />
          </div>
          <div>
            <img src={Ban} alt="" />
          </div>
          <div>
            <img src={Ban} alt="" />
          </div>
          <div>
            <img src={Ban} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
