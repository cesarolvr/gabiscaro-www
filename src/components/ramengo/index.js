import React from "react";

import Carousel from "@components/carousel";
import Contact from "@components/contact";
import useScroll from "@hooks/useScroll";

import "@styles/case-v2.scss";

import ramengoHero from "@images/ramengo/hero.png";
import LINHA_DIVISORIA from "@images/v2/shared/linha-divisoria.svg";
import STYLEGUIDE from "@images/ramengo/styleguide.png";
import MOBILE_COMBINED from "@images/ramengo/mobile-combined.png";
import ramengoVideo from "@videos/ramengo-1.mp4";

const RamenGo = () => {
  useScroll();

  return (
    <div className="casev2">
      {/* ── Hero ── */}
      <section className="casev2-hero" style={{ background: "#ff4e42" }}>
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
            {["ui", "ux", "illustration"].map((t) => (
              <span className="casev2-tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          <p className="casev2-eyebrow">Ramen Go</p>
          <h1 className="casev2-heading">
            Creating a fun and creative delivery platform
          </h1>
          <p className="casev2-desc">
            I was invited by the front end team of Red Ventures to create a new
            practical test for candidates who&apos;d apply for a job opening. I
            gave wings to the imagination and I created a delivery platform in
            which the users could choose the ingredients for their ramen and
            receive it at the comfort of their homes.
          </p>

          <div className="casev2-gap">
            <p className="casev2-section-label">My Role</p>
            <ul className="casev2-list">
              <li>Think of one theme to create this test;</li>
              <li>Create a prototype for Desktop and Mobile;</li>
              <li>Develop the illustration, iconography and styleguide;</li>
            </ul>
          </div>

          <img
            src={LINHA_DIVISORIA}
            className="casev2-wavy-rule"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ── Styleguide & Colors ── */}
      <section className="casev2-strip" style={{ background: "#4ecdc4" }}>
        <img
          src={STYLEGUIDE}
          alt="RamenGo — styleguide and color palette"
          style={{ width: "100vw", display: "block" }}
        />
      </section>

      {/* ── Mobile Experience ── */}
      <div className="casev2-strip-header" style={{ padding: "80px 0px 40px 0px" }}>
        <p className="casev2-section-label">Mobile Experience</p>
        <p className="casev2-text">
          I had to create both mobile and desktop experiences. Below you can
          check it out the mobile experience:
        </p>
      </div>
      <section className="casev2-strip" style={{ background: "#400039" }}>
        <img
          src={MOBILE_COMBINED}
          alt="RamenGo — mobile experience screens"
          style={{ width: "100vw", display: "block" }}
        />
      </section>

      {/* ── Desktop prototype video ── */}
      <section className="casev2-strip" style={{ padding: "150px 0px" }}>
        <div className="casev2-strip-pad">
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              maxWidth: 924,
              margin: "0 auto",
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
      <Carousel currentProjectId="ramengo" />

      <Contact />
    </div>
  );
};

export default RamenGo;
