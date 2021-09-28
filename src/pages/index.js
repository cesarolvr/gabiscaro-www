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
                <div className="content">
                  <StaticImage
                    className="image"
                    src="../images/ramengo.png"
                    alt=""
                  />
                  <p className="category">Visual Design</p>
                  <p className="name">RamenGo</p>
                </div>
              </div>
            </Link>
            <Link to="/projects/ramengo">
              <div className="case">
                <IqCartoes />
                <div className="content">
                  <StaticImage
                    className="image"
                    src="../images/iqcartoes.png"
                    alt=""
                  />
                  <p className="category">Product Design</p>
                  <p className="name">iq Cartões</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="holder">
            <Link to="/projects/ramengo">
              <div className="case">
                <CleanCity />
                <div className="content">
                  <StaticImage
                    className="image"
                    src="../images/cleancity.png"
                    alt=""
                  />
                  <p className="category">Product Design</p>
                  <p className="name">Clean City</p>
                </div>
              </div>
            </Link>
            <Link to="/projects/ramengo">
              <div className="case">
                <ValeAPena />
                <div className="content">
                  <StaticImage
                    className="image"
                    src="../images/valeuapena.png"
                    alt=""
                  />
                  <p className="category">Visual Design</p>
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
