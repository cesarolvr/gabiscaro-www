import React from "react";

import Carousel from "@components/carousel";
import Contact from "@components/contact";
import useScroll from "@hooks/useScroll";

import "@styles/case-v2.scss";

import HERO_MOCKUP from "@images/v2/mymove/hero.png";
import LINHA_DIVISORIA from "@images/v2/shared/linha-divisoria.svg";
import mmProcessCombined from "@images/v2/mymove/process-combined.png";
import ILLUSTRATIONS_FINAL from "@images/v2/mymove/illustrations-final.png";
import APPLICATION_IN_USE from "@images/v2/mymove/application-in-use.png";
import APPLICATION_IMG from "@images/v2/mymove/application.png";

const MyMove = () => {
  useScroll();

  return (
    <div className="casev2">
      {/* ── Hero ── */}
      <section className="casev2-hero" style={{ background: "#400039" }}>
        <img
          className="casev2-hero-mockup"
          src={HERO_MOCKUP}
          alt=""
          aria-hidden="true"
        />
      </section>

      {/* ── Main text block ── */}
      <div className="casev2-main-block">
        <div className="casev2-inner">
          <div className="casev2-tags">
            {["ui", "illustration"].map((t) => (
              <span className="casev2-tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          <p className="casev2-eyebrow">My Move</p>
          <h1 className="casev2-heading">
            Helping a team to communicate ideas through illustrations
          </h1>
          <p className="casev2-desc">
            During my time at Red Ventures, I was approached by some people from
            the US team asking me to do some illustrations to My Move website
            and app.
          </p>

          <div className="casev2-gap">
            <p className="casev2-section-label">My Role</p>
            <ul className="casev2-list">
              <li>Create the concepts for medium size illustrations;</li>
              <li>
                Work with a limited color palette, based on the shared
                moodboard;
              </li>
              <li>Make each and every illustration work together;</li>
              <li>Align with their marketing team the solutions I made.</li>
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

      {/* ── Moodboard ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">Moodboard</p>
        <p className="casev2-text">
          Below there is the moodboard shared by My Move&apos;s marketing team.
        </p>
      </div>
      <section className="casev2-strip -white">
        <div
          style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 0 64px" }}
        >
          <img
            src={APPLICATION_IMG}
            alt="Moodboard — My Move visual direction"
            style={{ width: "100%", display: "block", borderRadius: 16 }}
          />
        </div>
      </section>

      {/* ── Process ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">Process</p>
        <p className="casev2-text">
          I started to work on paper, then I vectorized it and finally I added
          the color palette.
        </p>
      </div>
      <section className="casev2-strip" style={{ background: "white" }}>
        <div
          style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 0 64px" }}
        >
          <img
            src={mmProcessCombined}
            alt="Process — sketch, vector and final illustration"
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </section>

      {/* ── Final Illustrations ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">Final Illustrations</p>
        <p className="casev2-text">
          I guaranteed that each and every illustration had the same width and
          height, so they could be used in any place. Also, they should work in
          different color backgrounds.
        </p>
      </div>
      <section className="casev2-strip" style={{ background: "#E9F1FF" }}>
        <div
          style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 0 64px" }}
        >
          <img
            src={ILLUSTRATIONS_FINAL}
            alt="Final illustrations — full icon set"
            style={{ width: "100%", display: "block", borderRadius: 16 }}
          />
        </div>
      </section>

      {/* ── Application ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">Application</p>
        <p className="casev2-text">
          The illustrations were applied across the My Move web and app
          surfaces, each adapting to the context while maintaining consistency.
        </p>
      </div>
      <section className="casev2-strip" style={{ background: "#F992D3" }}>
        <div
          style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 0 64px" }}
        >
          <img
            src={APPLICATION_IN_USE}
            alt="Application — illustrations in use across My Move"
            style={{ width: "100%", display: "block", borderRadius: 16 }}
          />
        </div>
      </section>

      {/* ── Cross-navigation ── */}
      <Carousel currentProjectId="my-move-illustrations" />

      <Contact />
    </div>
  );
};

export default MyMove;
