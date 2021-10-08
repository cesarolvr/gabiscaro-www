import React from "react";
// import Lock from "@components/lock";

import { RamemGo } from "@components/illustrations";

import ramengo from "../../images/ramengo-lg.png";

import "@styles/case.scss";

const RamenGo = () => {
  return (
    <div className="page -ramengo">
      <div className="hero">
        <div className="container">
          <div className="thumb">
            <RamemGo filled />
            <img className="image" src={ramengo} alt="" />
          </div>
          <div className="content projectinfo">
            <p className="category">Visual Design</p>
            <p className="name">RamenGo</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="synopsis">
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
            <p className="text">
              Some months ago I was invited by the front end team of Red
              Ventures to create a new practical test for candidates who'd apply
              for a job opening. I gave wings to the imagination and I created a
              delivery platform in which the users could choose the ingredients
              for their ramen and receive it at the comfort of their homes. I
              developed all the visuals: styleguide, interaction and
              illustrations/iconography.
            </p>
          </div>
        </div>
      </div>
      <div className="container -divider">
        <hr className="divider" />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default RamenGo;
