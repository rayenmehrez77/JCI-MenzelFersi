import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teamImg from "../images/bannerImg.jpg";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={teamImg} alt="" />
      </div>
      <div>
        <img src={teamImg} alt="" />
      </div>
      <div>
        <img src={teamImg} alt="" />
      </div>
    </Slider>
  );
};

export default Banner;
