import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useScroll from "@hooks/useScroll";

import Header from "@components/header";
import Loader from "@components/loader";

import "@styles/illustrations.scss";

// import greenstar from "../images/greenstar.svg";
// import halfcircle from "../images/halfcircle.svg";
// import flatcloud from "../images/flatcloud.svg";

const Illustrations = () => {
  const [isOpened, setIsOpened] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 3000);
  }, []);
  useScroll();
  return (
    <div className="scroll-content illustration-page">
      <Loader isOpened={isOpened} />
      <Header />
      <div data-scroll>
        <div className="container">
          <div className="column">
            <h2 className="title">
              Along with Product Design, <span>Illustration</span> is one of my
              passions.
            </h2>
            <p className="paragraph">
              When it comes to this subject, I love to dedicate my free time to
              drawing strong women, flowers and stars with digital or
              traditional media. Everything in my universe is colorful. If you
              want to work with me, you can see my illustrations on:
            </p>
            <br />
            <div className="cta">
              <Link
                to="https://www.linkedin.com/in/gabriela-bisc%C3%A1ro-4b90a78a/"
                target="_blank"
              >
                Instagram
              </Link>{" "}
              and{" "}
              <Link to="https://www.behance.net/gabiscaro" target="_blank">
                Behance
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="image-wrapper">
              <StaticImage
                className="sticker"
                src="../images/illustration-page-purple.svg"
              />
              <StaticImage
                className="image"
                src="../images/illustration-page-image.png"
              />
              <StaticImage
                className="sticker"
                src="../images/illustration-page-green.svg"
              />
            </div>
          </div>
        </div>
        {/* <div className="grid opacity" style={{ transitionDelay: "0.5s" }}>
          <div className="case cell-1 -beforevector">
            <StaticImage className="image-wrapper" src="../images/1.png" />
          </div>
          <div className="case cell-2 -vector">
            <img className="image-wrapper  -greenstar" src={greenstar} />
            <img className="image-wrapper -halfcircle" src={halfcircle} />
          </div>
          <div className="case cell-3 -aftervector">
            <StaticImage className="image-wrapper" src="../images/2.PNG" />
          </div>
          <div className="case cell-4">
            <StaticImage className="image-wrapper" src="../images/3.PNG" />
          </div>
          <div className="case cell-5">
            <StaticImage className="image-wrapper" src="../images/4.PNG" />
          </div>
          <div className="case cell-6">
            <StaticImage className="image-wrapper" src="../images/5.PNG" />
          </div>
          <div className="case cell-7">
            <StaticImage className="image-wrapper" src="../images/6.PNG" />
          </div>
          <div className="case cell-8">
            <img className="image-wrapper -bluecloud" src={flatcloud} />
          </div>
          <div className="case cell-9">
            <StaticImage className="image-wrapper" src="../images/7.PNG" />
          </div>
          <div className="case cell-10 -beforevector">
            <StaticImage className="image-wrapper" src="../images/8.PNG" />
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
                className="-yellowsquare"
              />
              <path
                d="M383 351C429.944 351 468 312.944 468 266C468 219.056 429.944 181 383 181C336.056 181 298 219.056 298 266C298 312.944 336.056 351 383 351Z"
                fill="#FF499E"
                className="-circlepink"
              />
              <path
                d="M382.5 182C359.226 182 340 162.625 340 139.172V43.8282C340 20.3746 359.226 1 382.5 1C405.774 1 425 20.3746 425 43.8282V139.172C424.494 162.625 405.774 182 382.5 182Z"
                fill="#3DDC97"
                className="-greenpil"
              />
            </svg>
          </div>

          <div className="case cell-12">
            <StaticImage className="image-wrapper" src="../images/9.PNG" />
          </div>
          <div className="case cell-13">
            <StaticImage className="image-wrapper" src="../images/10.PNG" />
          </div>
          <div className="case cell-14">
            <StaticImage className="image-wrapper" src="../images/11.PNG" />
          </div>

          <div className="case cell-15">
            <StaticImage className="image-wrapper" src="../images/12.PNG" />
          </div>
          <div className="case cell-16">
            <StaticImage className="image-wrapper" src="../images/13.PNG" />
          </div>
          <div className="case cell-17">
            <StaticImage className="image-wrapper" src="../images/14.PNG" />
          </div>

          <div className="case cell-18">
            <StaticImage className="image-wrapper" src="../images/15.PNG" />
          </div>
          <div className="case cell-19">
            <StaticImage className="image-wrapper" src="../images/16.PNG" />
          </div>
          <div className="case cell-20 -vector">
            <svg
              width="100%"
              height="100%"
              className="-waves"
              viewBox="0 0 449 375"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M345.284 9.09006L448.035 109.251C432.026 125.66 411.886 130.903 392.436 131.212C365.797 131.643 349.703 148.14 349.929 174.782C350.1 194.233 345.356 214.496 329.346 230.905C313.337 247.315 293.198 252.558 273.748 252.867C247.108 253.298 231.014 269.794 231.241 296.436C231.412 315.888 226.667 336.151 210.658 352.56C178.3 385.727 130.142 373.49 103.65 366.674L103.693 366.63L0.489136 266.028C16.4983 249.619 36.6379 244.375 56.0878 244.066C82.7271 243.635 98.8212 227.139 98.5949 200.497C98.4238 181.045 103.168 160.782 119.178 144.373C135.187 127.964 155.326 122.721 174.776 122.412C201.416 121.98 217.51 105.484 217.283 78.8422C217.112 59.3906 221.857 39.1277 237.866 22.7185C270.309 -10.5353 318.75 2.31768 345.242 9.1336L345.284 9.09006Z"
                fill="#99018A"
              />
            </svg>
          </div>
          <div className="case cell-21">
            <StaticImage className="image-wrapper" src="../images/17.PNG" />
          </div>
          <div className="case cell-22">
            <StaticImage className="image-wrapper" src="../images/18.PNG" />
          </div>
        </div> */}
      </div>

      {/* <main>
        <Contact />
      </main> */}
    </div>
  );
};

export default Illustrations;
