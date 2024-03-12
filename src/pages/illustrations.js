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
              <Link to="https://www.instagram.com/gabiscaroo_/" target="_blank">
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
      </div>
    </div>
  );
};

export default Illustrations;
