import React, { useState } from "react";

import { RamemGoIllustration } from "@components/illustrations";
import Carousel from "@components/carousel";

import ramengo from "@images/ramengo/ramengo-hero.png";
import image1 from "@images/ramengo/01.png";
import image2 from "@images/ramengo/02.png";
import image3 from "@images/ramengo/03.png";
import image4 from "@images/ramengo/04.png";
import image5 from "@images/ramengo/05.png";
import image6 from "@images/ramengo/06.png";
import image7 from "@images/ramengo/07.png";
import image8 from "@images/ramengo/08.png";
import image9 from "@images/ramengo/09.png";
import image10 from "@images/ramengo/10.png";
import image11 from "@images/ramengo/11.png";
import video1 from "@videos/ramengo-1.mp4";

import useScroll from "@hooks/useScroll";

import "@styles/case.scss";

const RamenGo = () => {
  useScroll();
  return (
    <div className="page -case -ramengo">
      <section className="casesection -hero">
        <div className="container">
          <div className="thumb" data-scroll>
            <div className="opacity" style={{ transitionDelay: "200ms" }}>
              <RamemGoIllustration filled />
            </div>
            <img
              className="image opacity"
              style={{ transitionDelay: "400ms" }}
              src={ramengo}
              alt=""
            />
          </div>
          <div className="content projectinfo">
            <div data-scroll>
              <div className="tags opacity">
                {["ui", "illustration", "interaction design"].map(
                  (item, index) => {
                    return (
                      <span className="tag categorylabel" key={index}>
                        {item}
                      </span>
                    );
                  }
                )}
              </div>
            </div>
            <div data-scroll className="name">
              <div className="target">RamenGo</div>
            </div>
          </div>
        </div>
      </section>
      <section className="casesection container -synopsis">
        <div className="item">
          <div data-scroll className="title">
            <div className="target">The Challenge</div>
          </div>
          <div data-scroll className="sectionparagraph">
            <div className="opacity" style={{ transitionDelay: "400ms" }}>
              Some months ago I was invited by the front end team of Red
              Ventures to create a new practical test for candidates who'd apply
              for a job opening. I gave wings to the imagination and I created a
              delivery platform in which the users could choose the ingredients
              for their ramen and receive it at the comfort of their homes.
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="casesection container -synopsis">
        <div className="item">
          <div data-scroll className="title">
            <div className="target">My Role</div>
          </div>
          <div data-scroll className="sectionparagraph">
            <ul className="sectionlist">
              <li>Think of one theme to create this test;</li>
              <li>Create a prototype for Desktop and Mobile; </li>
              <li>Develop the illustration, iconography and styleguide;</li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="casesection container -synopsis">
        <div className="item">
          <div data-scroll className="title">
            <div className="target">Timeline</div>
          </div>
          <div data-scroll className="sectionparagraph">
            <p>September 2019 - December 2019</p>
          </div>
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

      <section className="casesection">
        <div className="container">
          <p className="caption">Home</p>
        </div>
        <div className="container">
          <img className="image" src={image1} alt="" />
        </div>
      </section>

      <section className="casesection">
        <div className="container">
          <p className="caption">Styleguide</p>
        </div>
        <div className="container">
          <img className="image" src={image2} alt="" />
        </div>
      </section>

      <section className="casesection">
        <div className="container">
          <p className="caption">Colors</p>
        </div>
        <div className="container">
          <img className="image" src={image3} alt="" />
        </div>
      </section>

      <br />
      <br />
      <br />

      <section className="casesection -grid">
        <div className="container">
          <img className="image" src={image4} alt="" />
          <img className="image" src={image5} alt="" />
          <img className="image" src={image6} alt="" />
        </div>
      </section>

      <section className="casesection -grid">
        <div className="container">
          <img className="image" src={image7} alt="" />
          <img className="image" src={image8} alt="" />
          <img className="image" src={image9} alt="" />
        </div>
      </section>

      <br />
      <br />

      <section className="casesection">
        <div className="container">
          <img className="image" src={image10} alt="" />
        </div>
      </section>

      <section className="casesection">
        <div className="container">
          <img className="image" src={image11} alt="" />
        </div>
      </section>

      <section className="casesection">
        <div className="container">
          <video
            className="video"
            autoPlay={true}
            muted
            loop={true}
            width="100%"
            height="100%"
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="casesection -carousel">
        <Carousel inverted />
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};
export default RamenGo;
