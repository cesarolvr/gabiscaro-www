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
            <Link to="/projects/iq">
              <div className="case">
                <IqCartoesIllustration />
                <div className="content projectinfo">
                  <img className="image" src={iqThumb} alt="" />
                  <p className="categorylabel">iq Credit Cards</p>
                  <p className="name">
                    Redesigning a digital experience for a credit card
                    marketplace
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/projects/blueberry">
              <div className="case">
                <BlueberryIllustration />
                <div className="content projectinfo">
                  <img className="image" src={blueberryThumb} alt="" />
                  <p className="categorylabel">Blueberry Design System</p>
                  <p className="name">
                    Improving the designer's work and the front-end's
                    development
                  </p>
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
                  <p className="categorylabel">Clean City App</p>
                  <p className="name">
                    Creating an awareness project about the importance of
                    recycling
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/projects/ramengo">
              <div className="case">
                <RamemGoIllustration />
                <div className="content projectinfo">
                  <img className="image" src={ramengoThumb} alt="" />
                  <p className="categorylabel">Ramengo</p>
                  <p className="name">
                    Creating a fun and creative delivery platform
                  </p>
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
