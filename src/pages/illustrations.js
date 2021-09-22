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
        <div className="case cell-1 -beforevector">
          <StaticImage className="image-wrapper" className="image-wrapper" src="../images/1.png" />
        </div>
        <div className="case cell-2 -vector">
          <StaticImage className="image-wrapper" src="../images/greenstar.svg" />
          <StaticImage className="image-wrapper" src="../images/halfcircle.svg" />
        </div>
        <div className="case cell-3 -aftervector">
          <StaticImage className="image-wrapper" src="../images/2.png" />
        </div>
        <div className="case cell-4">
          <StaticImage className="image-wrapper" src="../images/3.png" />
        </div>
        <div className="case cell-5">
          <StaticImage className="image-wrapper" src="../images/4.png" />
        </div>
        <div className="case cell-6">
          <StaticImage className="image-wrapper" src="../images/5.png" />
        </div>
        <div className="case cell-7">
          <StaticImage className="image-wrapper" src="../images/6.png" />
        </div>
        <div className="case cell-8">
          <StaticImage className="image-wrapper" src="../images/flatcloud.svg" />
        </div>
        <div className="case cell-9">
          <StaticImage className="image-wrapper" src="../images/7.png" />
        </div>
        <div className="case cell-10 -beforevector">
          <StaticImage className="image-wrapper" src="../images/8.png" />
        </div>
        <div className="case cell-11 -vector">
          <StaticImage className="image-wrapper" src="../images/yellowsquare.svg" />
          <StaticImage className="image-wrapper" src="../images/greenpil.svg" />
          <StaticImage className="image-wrapper" src="../images/pinkcircle.svg" />
        </div>
      </div>
      <main>
        <Contact />
      </main>
    </>
  );
};

export default Illustrations;
