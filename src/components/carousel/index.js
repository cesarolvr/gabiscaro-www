import { navigate } from "gatsby-link";
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
    arrows: true,
  };
  const goTo = (path) => {
    navigate(path);
  }
  return (
    <Slider {...settings} className="carouseldefault">
      <div className="item -ramengo" onClick={() => goTo("/projects/ramengo")}>
        <div className="holder">
          <p className="categorylabel">Visual Design</p>
          <p className="title">RamengGo</p>
        </div>
        <div className="holder">
          <img className="image" src={ramengo} alt="" />
        </div>
      </div>
      <div className="item -cleancity" onClick={() => goTo("/projects/cleancity")}>
        <div className="holder">
          <p className="categorylabel">Product Design</p>
          <p className="title">
            [Case Study] <br /> Clean City App
          </p>
        </div>
        <div className="holder">
          <img className="image" src={ramengo} alt="" />
        </div>
      </div>
      <div className="item -iqcartoes" onClick={() => goTo("/projects/iq")}>
        <div className="holder">
          <p className="categorylabel">Product Design</p>
          <p className="title">iq Cartões</p>
        </div>
        <div className="holder">
          <img className="image" src={ramengo} alt="" />
        </div>
      </div>
      <div className="item -blueberry" onClick={() => goTo("/projects/blueberry")}>
        <div className="holder">
          <p className="categorylabel">Design Design</p>
          <p className="title">Bluebery Design System</p>
        </div>
        <div className="holder">
          <img className="image" src={ramengo} alt="" />
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
