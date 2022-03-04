import { navigate } from "gatsby-link";
import React, { useEffect } from "react";
import Slider from "react-slick";

import ramengo from "@images/carousel/ramengo.png";
import cleancity from "@images/carousel/cleancity.png";
import iqcartoes from "@images/carousel/iqcartoes.png";
import blueberry from "@images/carousel/blueberry.png";

import "./index.scss";

import isClient from "@utils/isClient";

const Carousel = ({ inverted = false, onMount = (f) => f }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const goTo = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (!isClient()) return;
    const interval = setInterval(() => {
      const target = document.querySelector(".-carousel");
      const height = target?.getBoundingClientRect()?.height;
      if (height > 400) {
        onMount();
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
          <p className="categorylabel">Design System</p>
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
