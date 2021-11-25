import { navigate } from "gatsby-link";
import React from "react";
import Slider from "react-slick";

import ramengo from "@images/carousel/ramengo.png";
import cleancity from "@images/carousel/cleancity.png";
import iqcartoes from "@images/carousel/iqcartoes.png";
import blueberry from "@images/carousel/blueberry.png";

import "./index.scss";

const Carousel = ({ inverted = false }) => {
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
  };

  const ramengoItem = (
    <div className="item -ramengo" onClick={() => goTo("/projects/ramengo")}>
      <div className="holder">
        <p className="categorylabel">Visual Design</p>
        <p className="title">RamenGo</p>
      </div>
      <div className="holder">
        <img className="image" src={ramengo} alt="" />
      </div>
    </div>
  );

  const cleanCityItem = (
    <div
      className="item -cleancity"
      onClick={() => goTo("/projects/cleancity")}
    >
      <div className="holder">
        <p className="categorylabel">Product Design</p>
        <p className="title">
          [Case Study] <br /> Clean City App
        </p>
      </div>
      <div className="holder">
        <img className="image" src={cleancity} alt="" />
      </div>
    </div>
  );

  return (
    <Slider {...settings} className="carouseldefault">
      {inverted ? cleanCityItem : ramengoItem}
      {!inverted ? cleanCityItem : ramengoItem}
      <div className="item -iqcartoes" onClick={() => goTo("/projects/iq")}>
        <div className="holder">
          <p className="categorylabel">Product Design</p>
          <p className="title">iq Cartões</p>
        </div>
        <div className="holder">
          <img className="image" src={iqcartoes} alt="" />
        </div>
      </div>
      <div
        className="item -blueberry"
        onClick={() => goTo("/projects/blueberry")}
      >
        <div className="holder">
          <p className="categorylabel">Design Design</p>
          <p className="title">Bluebery Design System</p>
        </div>
        <div className="holder">
          <img className="image" src={blueberry} alt="" />
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
