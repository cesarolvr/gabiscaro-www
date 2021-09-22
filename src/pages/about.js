import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Header from "@components/header";
import Contact from "@components/contact";

import "@styles/about.scss";

const About = () => {
  return (
    <>
      <Header />
      <main className="about">
        <section className="description">
          <div className="container">
            <StaticImage
              className="profile-image"
              src="../images/gabiscaro.png"
              alt=""
            />
            <p className="text">
              Hello, I'm <span> Gabriela Biscáro</span>, a Product Designer and
              passionate Illustrator based in Sao Paulo, Brazil. Currently I'm
              working at Red Ventures. I work closely to PO's, PM's and other
              designers to define the best strategy to improve the usability of
              our products. When it comes to how I do it, I take care of the
              smallest details in everything I do.
            </p>
            <br />
            <br />
            <br />
            <h2 className="title">SOME THINGS I LOVE:</h2>
            <br />
            <br />
            <br />
            <p className="text">
              The color blue, but also red; Cook different types of vegan food;
              Try new and different vegan foods; Watch cooking competition
              shows; K-POP music videos; Bus commute; Watch & read My Brilliant
              Friend; <span>My dog</span> (Batatinha, or Little Potato); Hear I Love You;
              Find news things to love {`<3`}
            </p>
          </div>
        </section>
        <section className="skills">
          <div className="container">
            <h2 className="title">skills</h2>
            <ul className="list">
              <li className="item">Art direction</li>
              <li className="item">UX Design</li>
              <li className="item">Logo Design</li>
              <li className="item">Web Design</li>
              <li className="item">Illustration</li>
              <li className="item">Usability Test</li>
              <li className="item">Interaction</li>
              <li className="item">Iconography Design</li>
              <li className="item">UI Design</li>
              <li className="item">Design System</li>
            </ul>
          </div>
        </section>
        <section className="experience">
          <div className="container">
            <h2 className="title">experience</h2>
            <ul className="list">
              <li className="item">
                <p className="company">Red Ventures</p>
                <div className="icon">
                  <IconArrow />
                </div>
                <p className="duration">Oct 2017 - Present</p>
              </li>
              <li className="item">
                <p className="company">TUIA</p>
                <div className="icon">
                  <IconArrow color="#9CEAEF" />
                </div>
                <p className="duration">Feb 2014 - Sep 2017</p>
              </li>
              <li className="item">
                <p className="company">ID/TBWA</p>
                <div className="icon">
                  <IconArrow color="#3DDC97" />
                </div>
                <p className="duration">May 2013 - Jan 2014</p>
              </li>
              <li className="item">
                <p className="company">Agência Yo</p>
                <div className="icon">
                  <IconArrow color="#99018A" />
                </div>
                <p className="duration">Sep 2011 - May 2013</p>
              </li>
            </ul>
          </div>
        </section>
        <Contact title="Let's work together!" />
      </main>
    </>
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
