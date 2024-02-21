import React, { useState, useEffect } from "react";
import { navigate } from "gatsby-link";

import Header from "@components/header";
import Contact from "@components/contact";
import Loader from "@components/loader";
import LogoMaster from "@components/logoMaster";

import {
  RamemGoIllustration,
  CleanCityIllustration,
  IqCartoesIllustration,
  BlueberryIllustration,
} from "@components/illustrations";

import { LoaderContext } from "@components/Layout";

import getVariation from "@utils/getVariation";

import "@styles/home.scss";

// Images
import ramengoThumb from "../images/thumbs/ramengo.png";
import boavistaThumb from "../images/thumbs/iqboavista.png";
import iqThumb from "../images/thumbs/iqcartoes.png";
import blueberryThumb from "../images/thumbs/blueberry.png";
import useScroll from "../hooks/useScroll";

import importSM from "@utils/importSM";
import isClient from "@utils/isClient";

import useHomeParallax from "../hooks/useHomeParallax";

const Home = () => {
  const [isOpened, setIsOpened] = useState(true);

  useEffect(() => {
    if (isClient()) {
      importSM().then((ScrollMagic) => {
        const width = window.innerWidth;
        if (width > 868) {
          var controller = new ScrollMagic.Controller();
          var scene = new ScrollMagic.Scene({
            duration: 650,
          })
            .setPin(".logo-master")
            .addTo(controller);
        }
      });
    }

    const variation = getVariation(3000, 3600, 10);
    setTimeout(() => {
      setIsOpened(false);
    }, variation);
  }, []);

  useHomeParallax();

  useScroll();

  return (
    <LoaderContext.Consumer>
      {({ setIsLoading }) => (
        <div className="scroll-content">
          <Loader isOpened={isOpened} />
          <Header className="-opened" />
          <main className="home">
            <div className="container">
              <div className="holder">
                <div
                  className="case -first"
                  data-scroll
                  style={{ transitionDelay: "400ms" }}
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
                  <div className="illustration projectinfo">
                    <IqCartoesIllustration />
                    <img className="image" src={iqThumb} alt="" />
                  </div>
                  <div className="content projectinfo">
                    <p className="categorylabel">iq Credit Cards</p>
                    <p className="name">
                      Redesigning a digital experience for a credit card
                      marketplace
                    </p>
                    <div className="tags">
                      {["ui", "ux", "product thinking"].map((item, index) => {
                        return (
                          <span className="tag" key={index}>
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div
                  className="case -second"
                  data-scroll
                  style={{ transitionDelay: "450ms" }}
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
                  <div className="illustration projectinfo">
                    <BlueberryIllustration />
                    <img className="image" src={blueberryThumb} alt="" />
                  </div>
                  <div className="content projectinfo">
                    <p className="categorylabel">Blueberry Design System</p>
                    <p className="name">
                      Improving the designer's work and the front-end's
                      development
                    </p>
                    <div className="tags">
                      {["ui", "ux", "design system"].map((item, index) => {
                        return (
                          <span className="tag" key={index}>
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="data-scroll"
                data-scroll
                style={{ overflow: "visible" }}
              >
                <div className="opacity">
                  <LogoMaster />
                </div>
              </div>
              <div className="holder">
                <div
                  className="case -third"
                  data-scroll
                  style={{ transitionDelay: "500ms" }}
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      navigate("/projects/cleancity");
                    }, 600);
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 1000);
                  }}
                >
                  <div className="illustration projectinfo">
                    <CleanCityIllustration />
                    <img className="image" src={boavistaThumb} alt="" />
                  </div>
                  <div className="content projectinfo">
                    <p className="categorylabel">Clean City App</p>
                    <p className="name">
                      Creating an awareness project about the importance of
                      recycling
                    </p>
                    <div className="tags">
                      {["ux", "research", "user interface"].map(
                        (item, index) => {
                          return (
                            <span className="tag" key={index}>
                              {item}
                            </span>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="case -forth"
                  data-scroll
                  style={{ transitionDelay: "550ms" }}
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
                  <div className="illustration projectinfo">
                    <RamemGoIllustration />
                    <img className="image" src={ramengoThumb} alt="" />
                  </div>
                  <div className="content projectinfo">
                    <p className="categorylabel">Ramengo</p>
                    <p className="name">
                      Creating a fun and creative delivery platform
                    </p>
                    <div className="tags">
                      {["ui", "illustration", "interaction design"].map(
                        (item, index) => {
                          return (
                            <span className="tag" key={index}>
                              {item}
                            </span>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Contact />
          </main>
        </div>
      )}
    </LoaderContext.Consumer>
  );
};

export default Home;
