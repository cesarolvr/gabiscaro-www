import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Header from "@components/header";
import Contact from "@components/contact";

import "@styles/illustrations.scss";

import greenstar from '../images/greenstar.svg';
import halfcircle from '../images/halfcircle.svg';
import yellowsquare from '../images/yellowsquare.svg';
import greenpil from '../images/greenpil.svg';
import pinkcircle from '../images/pinkcircle.svg';
import flatcloud from '../images/flatcloud.svg';

const Illustrations = () => {
  return (
    <>
      <Header />
      <div className="grid">
        <div className="case cell-1 -beforevector">
          <StaticImage className="image-wrapper" className="image-wrapper" src="../images/1.png" />
        </div>
        <div className="case cell-2 -vector">
          <img className="image-wrapper  -greenstar" src={greenstar} />
          <img className="image-wrapper -halfcircle" src={halfcircle} />
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
          <img className="image-wrapper" src={flatcloud}/>
        </div>
        <div className="case cell-9">
          <StaticImage className="image-wrapper" src="../images/7.png" />
        </div>
        <div className="case cell-10 -beforevector">
          <StaticImage className="image-wrapper" src="../images/8.png" />
        </div>
        <div className="case cell-11 -vector">
          <img className="image-wrapper -yellowsquare" src={yellowsquare}/>
          <img className="image-wrapper -greenpil" src={greenpil}/>
          <img className="image-wrapper -pinkcircle" src={pinkcircle}/>
        </div>
      </div>
      <main>
        <Contact />
      </main>
    </>
  );
};

export default Illustrations;
