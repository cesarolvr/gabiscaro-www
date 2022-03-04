import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import Header from "@components/header";
import Contact from "@components/contact";
import Loader from "@components/loader";

import "@styles/about.scss";

import useScroll from "../hooks/useScroll";
import useParallax from "../hooks/useParallax";

const About = () => {
  const [isOpened, setIsOpened] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 3000);
  }, []);

  useParallax();

  useScroll();

  return (
    <div className="scroll-content">
      <Loader isOpened={isOpened} />
      <Header />
      <main className="about">
        <section className="description">
          <div className="container">
            <div className="image-wrapper">
              <div className="image" data-scroll>
                <StaticImage
                  className="profile-image"
                  src="../images/gabiscaro.png"
                  alt=""
                />
              </div>
            </div>
            <br />
            <span className="data-scroll" data-scroll>
              <span className="text target" style={{ animationDelay: "200ms" }}>
                Hello, I'm <span> Gabriela Biscáro</span>, a Product Designer
                and passionate Illustrator based in Sao Paulo, Brazil.
              </span>
            </span>
            <span className="data-scroll" data-scroll>
              <span className="text target" style={{ animationDelay: "300ms" }}>
                {" "}
                Currently I'm working at Red Ventures. I work closely to PO's,
                PM's and other designers to define the
              </span>
            </span>
            <span className="data-scroll" data-scroll>
              <span className="text target" style={{ animationDelay: "400ms" }}>
                best strategy to improve the usability of our products. When it
                comes to how I do it, I take care of the
              </span>
            </span>

            <span className="data-scroll" data-scroll>
              <span className="text target" style={{ animationDelay: "500ms" }}>
                {" "}
                smallest details in everything I do.
              </span>
            </span>

            <br />
            <br />
            <br />
            <br />
            <div className="data-scroll" data-scroll>
              <h2 className="title target" style={{ animationDelay: "700ms" }}>
                SOME THINGS I LOVE:
              </h2>
            </div>
            <br />
            <br />
            <br />
            <div className="data-scroll" data-scroll>
              <span className="text target" style={{ animationDelay: "800ms" }}>
                The color blue, but also red; Cook different types of vegan
                food; Try new and different vegan foods;
              </span>
            </div>
            <div className="data-scroll" data-scroll>
              <span className="text target" style={{ animationDelay: "900ms" }}>
                Watch cooking competition shows; K-POP music videos; Bus
                commute; Watch & read My Brilliant
              </span>
            </div>
            <div className="data-scroll" data-scroll>
              <span
                className="text target"
                style={{ animationDelay: "1000ms" }}
              >
                Friend; <span>My dog</span> (Batatinha, or Little Potato); Hear
                the words I Love You; Find news things to love {`<3`}
              </span>
            </div>
          </div>
        </section>
        <section className="skills">
          <div className="container">
            <div className="title data-scroll" data-scroll>
              <div className="target">skills</div>
            </div>
            <div className="list">
              <div className="item data-scroll" data-scroll>
                <div className="target">Art direction</div>
              </div>
              <div className="item data-scroll" data-scroll>
                <div className="target">UX Design</div>
              </div>
              <div className="item data-scroll" data-scroll>
                <div className="target">Logo Design</div>
              </div>
              <div className="item data-scroll" data-scroll>
                <div className="target">Web Design</div>
              </div>
              <div className="item data-scroll" data-scroll>
                <div className="target">Illustration</div>
              </div>
              <div className="item data-scroll" data-scroll>
                <div className="target">Usability Test</div>
              </div>
              <div className="item data-scroll" data-scroll>
                <div className="target">Interaction</div>
              </div>
              <div className="item data-scroll" data-scroll>
                <div className="target">Iconography Design</div>
              </div>
              <div className="item data-scroll" data-scroll>
                <div className="target">UI Design</div>
              </div>
              <div className="item data-scroll" data-scroll>
                <div className="target">Design System</div>
              </div>
            </div>
          </div>
        </section>
        <section className="experience">
          <div className="container">
            <div className="title data-scroll" data-scroll>
              <div className="target">experience</div>
            </div>
            <ul className="list">
              <div className="subtitle data-scroll" data-scroll>
                <div className="target">Red Ventures</div>
              </div>
              <li className="item data-scroll" data-scroll>
                <p className="company target">Product Designer Specialist</p>
                <div className="icon target">
                  <IconArrow />
                </div>
                <p className="duration target">Jul 21 - Present</p>
              </li>
              <li className="item data-scroll" data-scroll>
                <p className="company target">Senior Product Designer</p>
                <div className="icon target">
                  <IconArrow />
                </div>
                <p className="duration target">Dec 19 - Jul 21</p>
              </li>
              <li className="item data-scroll" data-scroll>
                <p className="company target">Product Designer</p>
                <div className="icon target">
                  <IconArrow />
                </div>
                <p className="duration target">OCt 17 - Dec 19</p>
              </li>
              <hr className="line" data-scroll />
              <div className="subtitle data-scroll" data-scroll>
                <div className="target">TUIA</div>
              </div>
              <li className="item data-scroll" data-scroll>
                <p className="company target">Visual Designer</p>
                <div className="icon target">
                  <IconArrow color="#9CEAEF" />
                </div>
                <p className="duration target">Feb 14 - Sep 17</p>
              </li>
              <hr className="line" data-scroll />
              <div className="subtitle data-scroll" data-scroll>
                <div className="target">ID/TBWA</div>
              </div>
              <li className="item data-scroll" data-scroll>
                <p className="company target">Art Director</p>
                <div className="icon target">
                  <IconArrow color="#3DDC97" />
                </div>
                <p className="duration target">May 13 - Jan 14</p>
              </li>
              <hr className="line" data-scroll />
              <div className="subtitle data-scroll" data-scroll>
                <div className="target">Agência Yo</div>
              </div>
              <li className="item data-scroll" data-scroll>
                <p className="company target">Art Assistant</p>
                <div className="icon target">
                  <IconArrow color="#99018A" />
                </div>
                <p className="duration target">Sep 11 - May 13</p>
              </li>
              <hr className="line" />
              <a
                href="resume-gabriela-biscaro.pdf"
                className="myprofile"
                download={true}
              >
                <svg
                  width="52"
                  height="33"
                  viewBox="0 0 52 33"
                  className="iconlink"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3897 32.9999C16.6009 32.9999 8.30047 27.8307 0.488263 17.7384L0 16.9999L0.488263 16.2615C0.976526 15.7692 10.2535 1.73838 24.6573 0.999921C33.9343 0.507613 42.9671 5.67685 51.5117 16.0153L52 16.7538L51.5117 17.4922C51.0235 18.2307 40.77 32.7538 25.8779 32.9999C25.8779 32.9999 25.6338 32.9999 25.3897 32.9999ZM2.92958 16.7538C10.2535 25.8615 17.8216 30.5384 25.8779 30.2922C37.5962 30.0461 46.6291 19.7076 48.8263 16.7538C41.0141 7.39992 32.9577 2.96915 24.6573 3.21531C13.4272 3.95377 5.12676 14.0461 2.92958 16.7538Z"
                    fill="#D604C1"
                  />
                  <path
                    d="M25.8779 25.3693C30.4621 25.3693 34.1783 21.6223 34.1783 17.0001C34.1783 12.3779 30.4621 8.63086 25.8779 8.63086C21.2936 8.63086 17.5774 12.3779 17.5774 17.0001C17.5774 21.6223 21.2936 25.3693 25.8779 25.3693Z"
                    fill="#D604C1"
                  />
                </svg>
                View my resume
              </a>
              <br />
              <br />
              <br />
            </ul>
          </div>
        </section>
        <Contact title="Let's work together!" />
      </main>
    </div>
  );
};

const IconArrow = ({ color = "#FD4D40" }) => {
  return (
    <svg
      width="100%"
      height="16"
      viewBox="0 0 81 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80.7071 8.70711C81.0976 8.31658 81.0976 7.68342 80.7071 7.29289L74.3431 0.928932C73.9526 0.538408 73.3195 0.538408 72.9289 0.928932C72.5384 1.31946 72.5384 1.95262 72.9289 2.34315L78.5858 8L72.9289 13.6569C72.5384 14.0474 72.5384 14.6805 72.9289 15.0711C73.3195 15.4616 73.9526 15.4616 74.3431 15.0711L80.7071 8.70711ZM0 9H80V7H0V9Z"
        fill={color}
      />
    </svg>
  );
};

export default About;
