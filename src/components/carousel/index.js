import React from "react";
import Slider from "react-slick";

import ramengo from "@images/ramengo-lg.png";

import "./index.scss";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <Slider {...settings} className="carouseldefault">
      <div className="item">
        <div className="holder">
          <p className="categorylabel">Visual Design</p>
          <p className="title">RamengGo</p>
        </div>
        <div className="holder">
          <img className="image" src={ramengo} alt="" />
        </div>
      </div>
      <div className="item">
        <div className="holder">
          <p className="categorylabel">Visual Design</p>
          <p className="title">ConectCar</p>
        </div>
        <div className="holder">
          <img className="image" src={ramengo} alt="" />
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
