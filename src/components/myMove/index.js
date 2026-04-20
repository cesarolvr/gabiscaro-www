import React from "react";

import Carousel from "@components/carousel";
import Contact from "@components/contact";
import useScroll from "@hooks/useScroll";

import "@styles/case-v2.scss";

import illus01 from "@images/1.png";
import illus02 from "@images/2.png";
import illus03 from "@images/3.png";
import illus04 from "@images/4.png";
import illus05 from "@images/5.png";
import illus06 from "@images/6.png";
import illus07 from "@images/7.png";
import illus08 from "@images/8.png";
import illus09 from "@images/9.png";
import illus10 from "@images/10.png";
import illus11 from "@images/11.png";
import illus12 from "@images/12.png";
import illus13 from "@images/13.png";
import illus14 from "@images/14.png";
import illus15 from "@images/15.png";
import illus16 from "@images/16.png";
import illus17 from "@images/17.png";
import illus18 from "@images/18.png";
import HERO_MOCKUP from "@images/v2/shared/mymove-mockup.png";
import mmProcess1 from "@images/v2/mymove/process-1.svg";
import mmProcess2 from "@images/v2/mymove/process-2.png";
import mmProcess3 from "@images/v2/mymove/process-3.png";
import APPLICATION_IMG from "@images/v2/mymove/application.svg";

const ILLUSTRATIONS = [
  illus01, illus02, illus03, illus04, illus05, illus06,
  illus07, illus08, illus09, illus10, illus11, illus12,
  illus13, illus14, illus15, illus16, illus17, illus18,
];

const PROCESS_SCREENS = [mmProcess1, mmProcess2, mmProcess3];

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
            During my time at Red Ventures, I was asked to help one of the
            B2B teams helping the future-home illustrators for My Move website
            and app.
          </p>

          <hr className="casev2-rule" />

          <div className="casev2-gap">
            <p className="casev2-section-label">My Role</p>
            <ul className="casev2-list">
              <li>
                Create concepts for medium-size illustrations;
              </li>
              <li>
                Work within a limited color palette from the moodboard;
              </li>
              <li>
                Keep all illustrations consistent across applications.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Moodboard ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">Moodboard</p>
        <p className="casev2-text" style={{ maxWidth: 924, marginTop: 8 }}>
          Before starting the illustrations, we defined the visual direction
          through a moodboard — exploring references for style, color palette,
          character expression, and overall feel.
        </p>
      </div>
      <section className="casev2-strip -white">
        <div className="casev2-strip-pad">
          <div className="casev2-full-img">
            <img src={APPLICATION_IMG} alt="Moodboard — My Move visual direction" />
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">Process</p>
        <p className="casev2-text" style={{ maxWidth: 924, marginTop: 8 }}>
          Initial concepts started on paper, then were vectorized and finalized
          with a shared palette and consistent geometry.
        </p>
      </div>
      <section className="casev2-strip -white">
        <div className="casev2-strip-pad">
          <div className="casev2-gallery -cols-3">
            {PROCESS_SCREENS.map((src, i) => (
              <img
                key={`process-${i}`}
                src={src}
                alt={`Process step ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Illustrations ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">Final Illustrations</p>
        <p className="casev2-text" style={{ maxWidth: 924, marginTop: 8 }}>
          Every illustration keeps the same dimensions, enabling flexible reuse
          across multiple UI contexts and background colors.
        </p>
      </div>
      <section className="casev2-strip -white">
        <div className="casev2-strip-pad">
          <div className="casev2-gallery -cols-4" style={{ marginBottom: 20 }}>
            {ILLUSTRATIONS.slice(0, 4).map((src, i) => (
              <img key={`illus-a-${i}`} src={src} alt={`Illustration ${i + 1}`} />
            ))}
          </div>
          <div className="casev2-gallery -cols-4" style={{ marginBottom: 20 }}>
            {ILLUSTRATIONS.slice(4, 8).map((src, i) => (
              <img key={`illus-b-${i}`} src={src} alt={`Illustration ${i + 5}`} />
            ))}
          </div>
          <div className="casev2-gallery -cols-4" style={{ marginBottom: 20 }}>
            {ILLUSTRATIONS.slice(8, 12).map((src, i) => (
              <img key={`illus-c-${i}`} src={src} alt={`Illustration ${i + 9}`} />
            ))}
          </div>
          <div className="casev2-gallery -cols-4" style={{ marginBottom: 20 }}>
            {ILLUSTRATIONS.slice(12, 16).map((src, i) => (
              <img key={`illus-d-${i}`} src={src} alt={`Illustration ${i + 13}`} />
            ))}
          </div>
          {ILLUSTRATIONS.length > 16 && (
            <div className="casev2-gallery -cols-4">
              {ILLUSTRATIONS.slice(16).map((src, i) => (
                <img key={`illus-e-${i}`} src={src} alt={`Illustration ${i + 17}`} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Application ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">Application</p>
        <p className="casev2-text" style={{ maxWidth: 924, marginTop: 8 }}>
          The illustrations were applied across the My Move web and app
          surfaces, each adapting to the context while maintaining consistency.
        </p>
      </div>
      <section className="casev2-strip" style={{ background: "#5c4c8a" }}>
        <div className="casev2-strip-pad">
          <div className="casev2-full-img">
            <img src={HERO_MOCKUP} alt="My Move — illustrations in context" />
          </div>
        </div>
      </section>

      {/* ── Cross-navigation ── */}
      <Carousel />

      <Contact />
    </div>
  );
};

export default MyMove;
