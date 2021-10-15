import React, {useEffect} from "react";
import { StaticImage } from "gatsby-plugin-image";
import smoothScroll from "@src/utils/smoothScroll";


import Header from "@components/header";
import Contact from "@components/contact";

import "@styles/illustrations.scss";

import greenstar from "../images/greenstar.svg";
import halfcircle from "../images/halfcircle.svg";
import flatcloud from "../images/flatcloud.svg";

const Illustrations = () => {
  useEffect(() => {
    smoothScroll();
  }, []);
  return (
    <>
      <Header />
      <div className="grid">
        <div className="case cell-1 -beforevector">
          <StaticImage
            className="image-wrapper"
            className="image-wrapper"
            src="../images/1.png"
          />
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
          <img className="image-wrapper" src={flatcloud} />
        </div>
        <div className="case cell-9">
          <StaticImage className="image-wrapper" src="../images/7.png" />
        </div>
        <div className="case cell-10 -beforevector">
          <StaticImage className="image-wrapper" src="../images/8.png" />
        </div>
        <div className="case cell-11 -vector">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 468 351"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M175.517 -0.058882L0.00561523 175.453L175.517 350.964L351.029 175.453L175.517 -0.058882Z"
              fill="#FFDE60"
            />
            <path
              d="M383 351C429.944 351 468 312.944 468 266C468 219.056 429.944 181 383 181C336.056 181 298 219.056 298 266C298 312.944 336.056 351 383 351Z"
              fill="#FF499E"
            />
            <path
              d="M382.5 182C359.226 182 340 162.625 340 139.172V43.8282C340 20.3746 359.226 1 382.5 1C405.774 1 425 20.3746 425 43.8282V139.172C424.494 162.625 405.774 182 382.5 182Z"
              fill="#3DDC97"
            />
          </svg>
        </div>
      </div>
      <main>
        <Contact />
      </main>
    </>
  );
};

export default Illustrations;
