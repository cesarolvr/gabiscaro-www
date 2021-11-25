import React, { useEffect } from "react";
import { Link } from "gatsby";
import smoothScroll from "@src/utils/smoothScroll";

import Header from "@components/header";
import Contact from "@components/contact";
import {
  RamemGoIllustration,
  CleanCityIllustration,
  IqCartoesIllustration,
  BlueberryIllustration,
} from "@components/illustrations";

import "@styles/home.scss";

// Images
import ramengoThumb from "../images/thumbs/ramengo.png";
import cleancityThumb from "../images/thumbs/cleancity.png";
import iqThumb from "../images/thumbs/iqcartoes.png";
import blueberryThumb from "../images/thumbs/blueberry.png";

const Home = () => {
  useEffect(() => {
    smoothScroll();
  }, []);
  return (
    <div>
      <Header className="-opened" />
      <main className="home">
        <div className="container">
          <div className="holder">
            <Link to="/projects/ramengo">
              <div className="case">
                <RamemGoIllustration />
                <div className="content projectinfo">
                  <img className="image" src={ramengoThumb} alt="" />
                  <p className="categorylabel">Visual Design</p>
                  <p className="name">RamenGo</p>
                </div>
              </div>
            </Link>
            <Link to="/projects/iq">
              <div className="case">
                <IqCartoesIllustration />
                <div className="content projectinfo">
                  <img className="image" src={iqThumb} alt="" />
                  <p className="categorylabel">Product Design</p>
                  <p className="name">iq Cartões</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="holder">
            <Link to="/projects/cleancity">
              <div className="case">
                <CleanCityIllustration />
                <div className="content projectinfo">
                  <img className="image" src={cleancityThumb} alt="" />
                  <p className="categorylabel">Product Design</p>
                  <p className="name">Clean City</p>
                </div>
              </div>
            </Link>
            <Link to="/projects/blueberry">
              <div className="case">
                <BlueberryIllustration />
                <div className="content projectinfo">
                  <img className="image" src={blueberryThumb} alt="" />
                  <p className="categorylabel">Design System</p>
                  <p className="name">Blueberry Design System</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Contact />
      </main>
    </div>
  );
};

export default Home;
