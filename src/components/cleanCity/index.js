import React, { useEffect } from "react";

import { CleanCityIllustration } from "@components/illustrations";
import Carousel from "@components/carousel";

import cleancityImage from "@images/cleancity-lg.png";

import smoothScroll from "@src/utils/smoothScroll";

import "@styles/case.scss";

const CleanCity = () => {
  useEffect(() => {
    smoothScroll();
  }, []);
  return (
    <div className="page -case -cleancity">
      <section className="casesection -hero">
        <div className="container">
          <div className="thumb">
            <CleanCityIllustration filled />
            <img className="image" src={cleancityImage} alt="" />
          </div>
          <div className="content projectinfo">
            <p className="categorylabel">Product Design</p>
            <p className="name">
              [Case Study] <br /> Clean City App
            </p>
          </div>
        </div>
      </section>
      <section className="casesection container -synopsis">
        <div className="item -whatidid">
          <p className="title">What I did</p>
          <ul className="list">
            <li>Research</li>
            <li>User Interface</li>
          </ul>
        </div>
        <div className="item -whenidid">
          <p className="title">When I did</p>
          <p className="text">2019</p>
        </div>
        <div className="item -thechallenge">
          <p className="title">The Challenge</p>
          <p className="sectionparagraph">
            The cooperative "Cidade Mais Limpa” has been trying to create an
            awareness project about the importance of recycling, helping people
            to understand how to recycle and the impact of it.{" "}
            <strong>
              The main objective was to develop, in a time frame of 7 days, a
              proposal for a product or service that helps the cooperative on
              this mission.
            </strong>
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
export default CleanCity;
