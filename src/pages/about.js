import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import Header from "@components/header";
import Contact from "@components/contact";
import Loader from "@components/loader";

import "@styles/about.scss";

import useScroll from "../hooks/useScroll";

const SKILLS_LEFT = [
  "Art Direction",
  "Iconography Design",
  "Illustration",
  "Interaction",
  "UI Design",
];

const SKILLS_RIGHT = [
  "UX Design",
  "Web Design",
  "Usability Test",
  "User Interview",
  "Design System",
];

const EXPERIENCES = [
  {
    company: "Mercado Livre",
    rows: [{ role: "Senior UX Designer", period: "Oct 22 - Present", color: "#F992D3" }],
  },
  {
    company: "Red Ventures",
    rows: [
      { role: "Product Designer Specialist", period: "Jul 21 - Oct 22", color: "#FD4D40" },
      { role: "Senior Product Designer", period: "Dec 19 - Jul 21", color: "#FD4D40" },
      { role: "Product Designer", period: "Oct 17 - Dec 19", color: "#FD4D40" },
    ],
  },
  {
    company: "Tuia",
    rows: [{ role: "Visual Designer", period: "Feb 14 - Sep 17", color: "#9CEAEF" }],
  },
  {
    company: "ID\\TBWA",
    rows: [{ role: "Art Director", period: "May 13 - Jan 14", color: "#3DDC97" }],
  },
  {
    company: "Agência Yo",
    rows: [{ role: "Art Assistant", period: "Sep 11 - May 13", color: "#D604C1" }],
  },
];

const About = () => {
  const [isOpened, setIsOpened] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 3000);
  }, []);

  useScroll();

  return (
    <div className="scroll-content">
      <Loader isOpened={isOpened} />
      <Header />
      <main className="about">
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-deco -top-left" />
            <div className="about-hero-deco -top-center" />
            <div className="about-hero-content">
              <div className="about-hero-reveal" data-scroll>
                <div className="target">
                  <div className="about-profile">
                    <StaticImage
                      className="profile-image"
                      src="../images/gabiscaro.png"
                      alt=""
                    />
                  </div>
                  <p className="about-intro">
                    Hello, I&apos;m <span>Gabriela Biscáro</span>, a Product Designer
                    and passionate Illustrator based in São Paulo, Brazil. Currently
                    I&apos;m working at Mercado Livre, one of the biggest companies
                    in Latin America, where I have an opportunity to explore a lot of
                    UX processes to improve the usability for our users. I&apos;m very
                    efficient in everything I do and I take care of the smallest
                    details in each delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-love">
          <div className="container" data-scroll>
            <div className="target">
              <h2>SOME THINGS I LOVE:</h2>
              <p>
                The color blue, but also red; Try and cook different types of vegan
                food; Watch cooking competition shows; K-POP music videos; Bus
                commute; Watch &amp; read My Brilliant Friend; <span>My dog</span>{" "}
                (Batatinha, or Little Potato); Hear the words I Love You; Find new
                things to love {"<3"}
              </p>
            </div>
          </div>
        </section>

        <section className="skills">
          <div className="container">
            <div className="title" data-scroll>
              <div className="target">SKILLS</div>
            </div>
            <div className="list-wrapper" data-scroll>
              <div className="target">
                <div className="list">
                  <div className="column">
                    {SKILLS_LEFT.map((skill) => (
                      <div className="item" key={skill}>
                        {skill}
                      </div>
                    ))}
                  </div>
                  <div className="column">
                    {SKILLS_RIGHT.map((skill) => (
                      <div className="item" key={skill}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="experience">
          <div className="container">
            <div className="title" data-scroll>
              <div className="target">EXPERIENCE</div>
            </div>
            <div className="experience-body" data-scroll>
              <div className="target">
                <ul className="list">
                  {EXPERIENCES.map((group) => (
                    <li className="experience-group" key={group.company}>
                      <p className="subtitle">{group.company}</p>
                      {group.rows.map((row) => (
                        <div className="item" key={`${group.company}-${row.role}`}>
                          <p className="company">{row.role}</p>
                          <div className="icon">
                            <IconArrow color={row.color} />
                          </div>
                          <p className="duration">{row.period}</p>
                        </div>
                      ))}
                      <hr className="line" />
                    </li>
                  ))}
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
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Contact />
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
