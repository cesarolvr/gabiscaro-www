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
            <li>UI Design</li>
            <li>Content Strategy</li>
            <li>Iconography</li>
            <li>Illustration</li>
          </ul>
        </div>
        <div className="item -whenidid">
          <p className="title">When I did</p>
          <p className="text">2019</p>
        </div>
        <div className="item -thechallenge">
          <p className="title">The Challenge</p>
          <p className="sectionparagraph">
            Some months ago I was invited by the front end team of Red Ventures
            to create a new practical test for candidates who'd apply for a job
            opening. I gave wings to the imagination and I created a delivery
            platform in which the users could choose the ingredients for their
            ramen and receive it at the comfort of their homes. I developed all
            the visuals: styleguide, interaction and illustrations/iconography.
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
