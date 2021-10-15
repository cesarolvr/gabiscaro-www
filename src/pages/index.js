import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Header from "@components/header";
import Contact from "@components/contact";
import {
  RamemGo,
  CleanCity,
  IqCartoes,
  ValeAPena,
} from "@components/illustrations";

import "@styles/home.scss";

// Images
import ramengoThumb from '../images/ramengo.png'
import cleancityThumb from '../images/cleancity.png'
import iqThumb from '../images/iqcartoes.png'
import valeuapenaThumb from '../images/valeuapena.png'

const Home = () => {
  return (
    <>
      <Header className="-opened" />
      <main className="home">
        <div className="container">
          <div className="holder">
            <Link to="/projects/ramengo">
              <div className="case">
                <RamemGo />
                <div className="content projectinfo">
                  <img
                    className="image"
                    src={ramengoThumb}
                    alt=""
                  />
                  <p className="categorylabel">Visual Design</p>
                  <p className="name">RamenGo</p>
                </div>
              </div>
            </Link>
            <Link to="/projects/ramengo">
              <div className="case">
                <IqCartoes />
                <div className="content projectinfo">
                  <img
                    className="image"
                    src={iqThumb}
                    alt=""
                  />
                  <p className="categorylabel">Product Design</p>
                  <p className="name">iq Cartões</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="holder">
            <Link to="/projects/ramengo">
              <div className="case">
                <CleanCity />
                <div className="content projectinfo">
                  <img
                    className="image"
                    src={cleancityThumb}
                    alt=""
                  />
                  <p className="categorylabel">Product Design</p>
                  <p className="name">Clean City</p>
                </div>
              </div>
            </Link>
            <Link to="/projects/ramengo">
              <div className="case">
                <ValeAPena />
                <div className="content projectinfo">
                  <img
                    className="image"
                    src={valeuapenaThumb}
                    alt=""
                  />
                  <p className="categorylabel">Visual Design</p>
                  <p className="name">Vale a Pena</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Contact />
      </main>
    </>
  );
};

export default Home;
