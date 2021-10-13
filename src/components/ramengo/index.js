import React from "react";
// import Lock from "@components/lock";

import { RamemGo } from "@components/illustrations";

import ramengo from "../../images/ramengo-lg.png";
import iqbefore from "../../images/iqcartoes-before.png";
import iqafter from "../../images/iqcartoes-after.png";

import "@styles/case.scss";
import DividerWithIllustration from "../dividerWithIllustration";

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
      <section className="casesection -primary">
        <div className="container">
          <div className="caseimage">
            <p className="text">Before</p>
            <img src={iqbefore} alt="" />
          </div>
          <div className="caseimage">
            <p className="text">After</p>
            <img src={iqafter} alt="" />
          </div>
        </div>
      </section>
      <br />
      <br />
      <div className="container -divider">
        <hr className="divider -light" />
      </div>
      <br />
      <br />
      <section className="casesection -secondary">
        <div className="container">
          <h3 className="sectiontitle">UX Process</h3>
        </div>
        <div className="container">
          <div className="processes">
            <div className="item">
              <p className="title">Discovery</p>
              <ol className="list">
                <li className="item">Quantitative research with users</li>
                <li className="item">Benchmark</li>
                <li className="item">Fullstory Analysis</li>
              </ol>
            </div>
            <div className="item">
              <p className="title">Define & Develop</p>
              <ol className="list">
                <li className="item">Hypothesis</li>
                <li className="item">Creation of content and interfaces</li>
                <li className="item">Design Critique</li>
              </ol>
            </div>
            <div className="item">
              <p className="title">Deliver</p>
              <ol className="list">
                <li className="item">Implementation</li>
                <li className="item">Monitoring Results (impact)</li>
                <li className="item">More A/B tests</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <div className="container -divider -secondary">
        <DividerWithIllustration title="Discovery" />
        <hr className="divider -light" />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
export default RamenGo;
