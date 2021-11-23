import React, { useEffect } from "react";

import { BlueberryIllustration } from "@components/illustrations";
import Carousel from "@components/carousel";

import blueberryThumb from "@images/blueberry-lg.png";

import smoothScroll from "@src/utils/smoothScroll";

import "@styles/case.scss";

const Blueberry = () => {
  useEffect(() => {
    smoothScroll();
  }, []);
  return (
    <div className="page -case -ramengo">
      <section className="casesection -hero">
        <div className="container">
          <div className="thumb">
            <BlueberryIllustration filled />
            <img className="image" src={blueberryThumb} alt="" />
          </div>
          <div className="content projectinfo">
            <p className="categorylabel">Design System</p>
            <p className="name">
              Blueberry <br />
              Design System
            </p>
          </div>
        </div>
      </section>
      <section className="casesection container -synopsis">
        <div className="item -whatidid">
          <p className="title">What I did</p>
          <ul className="list">
            <li>Research</li>
            <li>Interface components</li>
          </ul>
        </div>
        <div className="item -whenidid">
          <p className="title">When I did</p>
          <p className="text">
            May 2020/ <br />
            Ongoing product
          </p>
        </div>
        <div className="item -thechallenge">
          <p className="title">The Challenge</p>
          <p className="sectionparagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus
            hendrerit velit at dignissim. Phasellus cursus dapibus ipsum, in
            maximus elit aliquam a. Sed mattis mattis massa quis vehicula. Duis
            sit amet sapien vel ipsum interdum rutrum ultrices eu eros. Aenean
            ultricies mattis leo, sed condimentum nunc congue ut. Vivamus
            dapibus placerat nisi,
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="container -divider">
        <hr className="divider" />
      </section>
      <br />
      <br />

      <br />
      <section className="casesection -carousel">
        <Carousel />
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};
export default Blueberry;
