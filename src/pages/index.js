import React, { useState, useEffect, useRef } from "react";
import { navigate } from "gatsby-link";

import Header from "@components/header";
import Contact from "@components/contact";
import Loader from "@components/loader";

import { LoaderContext } from "@components/Layout";

import getVariation from "@utils/getVariation";

import "@styles/home.scss";
import useScroll from "../hooks/useScroll";
import { getHomeProjects } from "../data/portfolioProjects";
import titleBackdrop from "../images/thumbs/ramengo-1.svg";
import setupPixCube from "../images/home/setup-pix-cube.svg";
import introUnion from "../images/v2/home/intro-union.svg";
import introGroup62 from "../images/v2/home/intro-group62.svg";
import introVector from "../images/v2/home/intro-vector.png";
import introGroup61 from "../images/v2/home/intro-group61.svg";
import introTopete from "../images/v2/home/intro-topete.svg";

const Home = () => {
  const [isOpened, setIsOpened] = useState(true);
  const homeProjects = getHomeProjects().slice(0, 5);
  const backdropRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!backdropRef.current) return;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(scrollY / vh, 1);
      const rotation = progress * 30;
      backdropRef.current.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const variation = getVariation(3000, 3600, 10);
    setTimeout(() => {
      setIsOpened(false);
    }, variation);
  }, []);

  useScroll();

  return (
    <LoaderContext.Consumer>
      {({ setIsLoading }) => (
        <div className="scroll-content">
          <Loader isOpened={isOpened} />
          <Header className="-opened" />
          <main className="home">
            <section className="home-intro container">
              <img
                className="home-intro-deco -group-62"
                src={introGroup62}
                alt=""
                aria-hidden="true"
              />
              <img
                className="home-intro-deco -vector"
                src={introVector}
                alt=""
                aria-hidden="true"
              />
              <img
                className="home-intro-deco -group-61"
                src={introGroup61}
                alt=""
                aria-hidden="true"
              />
              <img
                className="home-intro-deco -topete"
                src={introTopete}
                alt=""
                aria-hidden="true"
              />
              <img
                ref={backdropRef}
                className="home-intro-backdrop"
                src={titleBackdrop}
                alt=""
                aria-hidden="true"
              />
              <p className="home-intro-eyebrow">Oh, hello everyone!</p>
              <h1 className="home-intro-title">
                My name is Gabriela Bisc&aacute;ro and I&apos;m a Brazilian
                Product Designer and Illustrator
              </h1>
            </section>
            <section className="home-grid container">
              <div className="home-card -illustration">
                <img
                  className="home-grid-deco"
                  src={setupPixCube}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              {homeProjects.map((project) => {
                const isPlanned = project.implementationStatus === "planned";
                const cardClassName = `home-card -${project.homeLayout} -${project.cardStyle}`;
                const style = {
                  backgroundColor: project.cardTheme.bg,
                  color: project.cardTheme.fg,
                };

                return (
                  <article
                    key={project.id}
                    className={cardClassName}
                    style={style}
                    data-scroll
                    onClick={() => {
                      if (isPlanned) {
                        return;
                      }

                      navigate(project.legacyRoute || project.newRoute);
                    }}
                  >
                    <div className={`home-card-media -${project.cardStyle}`}>
                      <img src={project.source.imageUrl} alt="" />
                    </div>
                    <div className={`home-card-content -${project.cardStyle}`}>
                      <p
                        className="home-card-title"
                        style={{
                          backgroundColor: project.cardTheme.bg,
                          borderRadius: "10px",
                        }}
                      >
                        {project.title}
                      </p>
                      <p
                        className="home-card-subtitle"
                        style={{
                          backgroundColor: project.cardTheme.bg,
                          borderRadius: "10px",
                        }}
                      >
                        {project.subtitle}
                      </p>
                      <div className="home-card-tags">
                        {project.tags.map((tag) => (
                          <span
                            key={`${project.id}-${tag}`}
                            className="home-card-tag"
                            style={{ borderColor: project.cardTheme.border }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {isPlanned && (
                        <p className="home-card-coming-soon">Coming soon</p>
                      )}
                    </div>
                  </article>
                );
              })}
            </section>
            <div className="home-contact-wrapper">
              <div className="home-contact-divider container">
                <span />
              </div>
              <Contact />
            </div>
          </main>
        </div>
      )}
    </LoaderContext.Consumer>
  );
};

export default Home;
