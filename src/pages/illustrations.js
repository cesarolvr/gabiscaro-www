import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Header from "@components/header";
import Contact from "@components/contact";

import "@styles/illustrations.scss";

const Illustrations = () => {
  return (
    <>
      <Header />
      <div className="grid">
        <div className="case">
          <StaticImage src="../images/1.png" />
        </div>
        <div className="case">
          <StaticImage src="../images/greenstar.svg" />
          <StaticImage src="../images/halfcircle.svg" />
        </div>
        <div className="case">
          <StaticImage src="../images/2.png" />
        </div>
        <div className="case">
          <StaticImage src="../images/3.png" />
        </div>
        <div className="case">
          <StaticImage src="../images/4.png" />
        </div>
        <div className="case">
          <StaticImage src="../images/5.png" />
        </div>
        <div className="case">
          <StaticImage src="../images/flatcloud.svg" />
        </div>
        <div className="case">
          <StaticImage src="../images/6.png" />
        </div>
        <div className="case">
          <StaticImage src="../images/7.png" />
        </div>
        <div className="case">
          <StaticImage src="../images/8.png" />
        </div>
        <div className="case">
          <StaticImage src="../images/yellowsquare.svg" />
          <StaticImage src="../images/greenpil.svg" />
          <StaticImage src="../images/pinkcircle.svg" />
        </div>
      </div>
      <main>
        <Contact />
      </main>
    </>
  );
};

export default Illustrations;
