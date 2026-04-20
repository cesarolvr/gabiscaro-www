import { navigate } from "gatsby-link";
import React, { useEffect } from "react";
import Slider from "react-slick";

import { LoaderContext } from "@components/Layout";
import { getHomeProjects } from "../../data/portfolioProjects";

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

  const slides = getHomeProjects();

  const orderedSlides = inverted
    ? [...slides].reverse()
    : slides;

  return (
    <LoaderContext.Consumer>
      {({ setIsLoading }) => (
        <Slider {...settings} className="carouseldefault">
          {orderedSlides.map((slide) => (
            <div
              key={slide.id}
              className="item"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  navigate(slide.newRoute);
                }, 600);
                setTimeout(() => {
                  setIsLoading(false);
                }, 1000);
              }}
            >
              <div className="item-bg" style={{ background: slide.cardTheme.bg }} />
              <div className="holder">
                <div className="tags">
                  {slide.tags.map((tag) => (
                    <span
                      className="tag"
                      key={`${slide.id}-${tag}`}
                      style={{
                        color: slide.cardTheme.fg,
                        borderColor: slide.cardTheme.border,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="title" style={{ color: slide.cardTheme.fg }}>
                  {slide.title}
                </p>
              </div>
              <div className="holder">
                <img
                  className="image"
                  src={slide.source.imageUrl}
                  alt={slide.title}
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </LoaderContext.Consumer>
  );
};

export default Carousel;
