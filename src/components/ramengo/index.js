import React from "react";

import Carousel from "@components/carousel";
import Contact from "@components/contact";
import useScroll from "@hooks/useScroll";

import "@styles/case-v2.scss";

import ramengoHero from "@images/ramengo/ramengo-hero.png";
import image01 from "@images/ramengo/01.png";
import image02 from "@images/ramengo/02.png";
import image03 from "@images/ramengo/03.png";
import image04 from "@images/ramengo/04.png";
import image05 from "@images/ramengo/05.png";
import image06 from "@images/ramengo/06.png";
import image07 from "@images/ramengo/07.png";
import image08 from "@images/ramengo/08.png";
import image09 from "@images/ramengo/09.png";
import image10 from "@images/ramengo/10.png";
import image11 from "@images/ramengo/11.png";
import ramengoVideo from "@videos/ramengo-1.mp4";


const RamenGo = () => {
  useScroll();

  return (
    <div className="casev2">
      {/* ── Hero ── */}
      <section className="casev2-hero" style={{ background: "#ff4522" }}>
        <img
          className="casev2-hero-mockup"
          src={ramengoHero}
          alt=""
          aria-hidden="true"
        />
      </section>

      {/* ── Main text block ── */}
      <div className="casev2-main-block">
        <div className="casev2-inner">
          <div className="casev2-tags">
            {["ui", "illustration", "interaction design"].map((t) => (
              <span className="casev2-tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          <p className="casev2-eyebrow">RamenGo</p>
          <h1 className="casev2-heading">
            Creating a fun and creative delivery platform
          </h1>
          <p className="casev2-desc">
            I was invited by the front-end team of Red Ventures to create a new
            practical test for candidates applying for a job opening. I gave
            wings to the imagination and created a delivery platform where users
            could choose the ingredients for their ramen and receive it at the
            comfort of their homes.
          </p>

          <hr className="casev2-rule" />

          <div className="casev2-gap">
            <p className="casev2-section-label">My Role</p>
            <ul className="casev2-list">
              <li>Think of one theme to create this test;</li>
              <li>Create a prototype for Desktop and Mobile;</li>
              <li>Develop the illustration, iconography and styleguide.</li>
            </ul>
          </div>

          <hr className="casev2-rule" />

          <div className="casev2-gap">
            <p className="casev2-section-label">Timeline</p>
            <p className="casev2-text">September 2019 – December 2019</p>
          </div>
        </div>
      </div>

      {/* ── Home & Styleguide ── */}
      <section className="casev2-strip -white">
        <div className="casev2-strip-pad">
          <img
            src={image01}
            alt="RamenGo — home screen"
            style={{ width: "100%", display: "block", borderRadius: 12, marginBottom: 24 }}
          />
          <div className="casev2-gallery -cols-2">
            <img src={image02} alt="Styleguide" />
            <img src={image03} alt="Colors" />
          </div>
        </div>
      </section>

      {/* ── Mobile Experience ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">Mobile Experience</p>
      </div>
      <section className="casev2-strip" style={{ background: "#400039" }}>
        <div className="casev2-strip-pad">
          <div className="casev2-gallery -cols-3" style={{ marginBottom: 24 }}>
            <img src={image04} alt="Mobile screen 1" />
            <img src={image05} alt="Mobile screen 2" />
            <img src={image06} alt="Mobile screen 3" />
          </div>
          <div className="casev2-gallery -cols-3">
            <img src={image07} alt="Mobile screen 4" />
            <img src={image08} alt="Mobile screen 5" />
            <img src={image09} alt="Mobile screen 6" />
          </div>
        </div>
      </section>

      {/* ── Video prototype ── */}
      <section
        className="casev2-strip"
        style={{ background: "#7a3b2e" }}
      >
        <div className="casev2-strip-pad">
          <div className="casev2-gallery -cols-2">
            <img src={image10} alt="Desktop screen" />
            <img src={image11} alt="Desktop screen detail" />
          </div>
          <div
            style={{
              marginTop: 24,
              borderRadius: 16,
              overflow: "hidden",
              maxWidth: 720,
              margin: "24px auto 0",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", display: "block" }}
            >
              <source src={ramengoVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ── Cross-navigation ── */}
      <Carousel />

      <Contact />
    </div>
  );
};

export default RamenGo;
