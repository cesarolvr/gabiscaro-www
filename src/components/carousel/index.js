import { navigate } from "gatsby-link";
import React, { useEffect } from "react";
import Slider from "react-slick";

import ramengo from "@images/carousel/ramengo.png";
import cleancity from "@images/carousel/cleancity.png";
import iqcartoes from "@images/carousel/iqcartoes.png";
import blueberry from "@images/carousel/blueberry.png";

import { LoaderContext } from "@components/Layout";

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

  const ramengoItem = ({ setIsLoading }) => (
    <div
      className="item -ramengo"
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => {
          navigate("/projects/ramengo");
        }, 600);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }}
    >
      <div className="holder">
        <p className="categorylabel">Visual Design</p>
        <p className="title">RamenGo</p>
      </div>
      <div className="holder">
        <img className="image" src={ramengo} alt="" />
      </div>
    </div>
  );

  const cleanCityItem = ({ setIsLoading }) => (
    <div
      className="item -cleancity"
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => {
          navigate("/projects/boavista");
        }, 600);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }}
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
    <LoaderContext.Consumer>
      {({ setIsLoading }) => (
        <Slider {...settings} className="carouseldefault">
          {inverted ? cleanCityItem({ setIsLoading }) : ramengoItem({ setIsLoading })}
          {!inverted ? cleanCityItem({ setIsLoading }) : ramengoItem({ setIsLoading })}
          <div
            className="item -iqcartoes"
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                navigate("/projects/iq");
              }, 600);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            }}
          >
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
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                navigate("/projects/blueberry");
              }, 600);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            }}
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
      )}
    </LoaderContext.Consumer>
  );
};

export default Carousel;
