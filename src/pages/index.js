import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
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

import "@styles/home.scss";

// Images
import ramengoThumb from "../images/thumbs/ramengo.png";
import cleancityThumb from "../images/thumbs/cleancity.png";
import iqThumb from "../images/thumbs/iqcartoes.png";
import blueberryThumb from "../images/thumbs/blueberry.png";
import useScroll from "../hooks/useScroll";

const importSM = async () => {
  if (window.ScrollMagic) {
    return Promise.resolve(window.ScrollMagic);
  } else {
    const module = await import("scrollmagic").then((sm) => {
      window.ScrollMagic = sm.default;
      return sm.default;
    });
    return module;
  }
};

const importKute = async () => {
  if (window.KUTE) {
    return Promise.resolve(window.KUTE);
  } else {
    const module = await import("kute.js").then((kute) => {
      window.KUTE = kute.default;
      return kute.default;
    });
    return module;
  }
};

const isClient = () => typeof window !== "undefined";

const Home = () => {
  const [isOpened, setIsOpened] = useState(true);

  useEffect(() => {
    
    if (isClient()) {
      importSM().then((ScrollMagic) => {
        const width = window.innerWidth;
        if (width > 768) {
          var controller = new ScrollMagic.Controller();
          var scene = new ScrollMagic.Scene({
            duration: 650,
          })
            .setPin(".logo-master")
            .addTo(controller);
        }
      });
    }

    setTimeout(() => {
      setIsOpened(false);
    }, 3000);
  }, []);

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
                {/* <Link to="/projects/iq"> */}
                <div
                  className="case"
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
                    // window.KUTE.to('#green-star', { path: '#star' }, { easing: 'easeOutQuart' }).start();
                  }}
                >
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
                {/* </Link> */}

                <Link to="/projects/blueberry">
                  <div
                    className="case"
                    data-scroll
                    style={{ transitionDelay: "450ms" }}
                  >
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
              <div className="data-scroll" data-scroll>
                <div className="opacity">
                  <LogoMaster />
                </div>
              </div>
              <div className="holder">
                <Link to="/projects/cleancity">
                  <div
                    className="case"
                    data-scroll
                    style={{ transitionDelay: "500ms" }}
                  >
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
                  <div
                    className="case"
                    data-scroll
                    style={{ transitionDelay: "550ms" }}
                  >
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
      )}
    </LoaderContext.Consumer>
  );
};

export default Home;
