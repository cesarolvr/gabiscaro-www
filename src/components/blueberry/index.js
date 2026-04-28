import React from "react";

import Carousel from "@components/carousel";
import Contact from "@components/contact";
import useScroll from "@hooks/useScroll";

import "@styles/case-v2.scss";

import HERO_MOCKUP from "@images/v2/blueberry/hero.png";
import LINHA_DIVISORIA from "@images/v2/shared/linha-divisoria.svg";
import BEFORE_IMG_1 from "@images/v2/blueberry/before-1.png";
import AFTER_IMG_1 from "@images/v2/blueberry/after-1.png";
import DESIGN_COMPONENTS from "@images/v2/blueberry/design-components.png";

const Blueberry = () => {
  useScroll();

  return (
    <div className="casev2">
      {/* ── Hero ── */}
      <section className="casev2-hero" style={{ background: "#f992d3" }}>
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
            {["ui", "ux", "design system", "user interview"].map((t) => (
              <span className="casev2-tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          <p className="casev2-eyebrow">Blueberry Design System</p>
          <h1 className="casev2-heading">
            Improving the designer&apos;s work and the front-end&apos;s
            development
          </h1>
          <p className="casev2-desc">
            iq is a lot of things — an automatic credit card payment service for
            utility bills (energy, gas, telephone, internet, etc), but also a
            Credit Card Marketplace. iq is growing so fast and we needed ways to
            expand healthily. The Front-End team felt that their code needed to
            be more organized. The Design Team faced a problem creating new
            components every time and some screens had different components from
            each other. So I saw an opportunity to develop a Design System.
          </p>

          <img
            src={LINHA_DIVISORIA}
            className="casev2-wavy-rule"
            alt=""
            aria-hidden="true"
          />

          <div className="casev2-gap">
            <p className="casev2-section-label">My Role</p>
            <p className="casev2-text">
              Being the lead for kick-starting our Design System I was
              responsible for:
            </p>
            <ul className="casev2-list">
              <li>
                Facilitate ideations to define our Design Principles and our
                Design System name;
              </li>
              <li>
                Build an Interface Inventory, in order to scan for
                inconsistencies in our web app and websites;
              </li>
              <li>
                Build the Design Tokens: define and organize the colors,
                typography, grids and spacings;
              </li>
              <li>
                Start the main Components, predefined by our team, to apply in
                our first project.
              </li>
            </ul>
          </div>

          <img
            src={LINHA_DIVISORIA}
            className="casev2-wavy-rule -flip"
            alt=""
            aria-hidden="true"
          />

          <div className="casev2-gap">
            <p className="casev2-section-label">Learnings</p>
            <p className="casev2-text">
              Building a Design System is a non-linear process. Sometimes it was
              difficult to know if we were building the right thing, but it was
              satisfactory to see it being applied and things starting to connect
              and make sense. Both the Front-End team and the Design team
              noticed:
            </p>
            <ul className="casev2-list -bold">
              <li>Time saved with Components and Design Tokens ready to use;</li>
              <li>More time to focus on the experience in general;</li>
              <li>Less time fixing bugs and coding;</li>
              <li>
                Greater proximity between the Design and Front-end teams;
              </li>
              <li>Knowledge acquired during the process.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── The experience before (interface inventory) ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">The experience before</p>
        <p className="casev2-text">
          Below you can see some discrepancies in our components and tokens,
          like in Buttons, Icons and Colors — different styles, different icons
          applied in components and a lot of color variants with no standard.
        </p>
      </div>
      <section className="casev2-strip -white">
        <img
          src={BEFORE_IMG_1}
          alt="Interface inventory — buttons, icons and colors"
          style={{ width: "100vw", display: "block" }}
        />
      </section>

      {/* ── After the new Design System (tokens) ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">After the new Design System</p>
        <p className="casev2-text">
          The first thing we did was to &ldquo;fix&rdquo; our issues with our
          current Design Tokens: a legacy of different shades of colors,
          non-standard typography, a ton of different and non-standard icons and
          a lack of grid and spacing determination.
        </p>
      </div>
      <section className="casev2-strip -white">
        <img
          src={AFTER_IMG_1}
          alt="New design system — colors, typography and spacing"
          style={{ width: "100vw", display: "block" }}
        />
      </section>

      {/* ── Design components in action ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">Design components</p>
        <p className="casev2-text">
          After designing the Design Tokens, we finally started to create the
          Components section: a series of standalone UI elements designed to be
          reusable, like a button. The components helped us to create the new
          section of our iq app, called New Architecture.
        </p>
      </div>
      <section className="casev2-strip -light-blue">
        <img
          src={DESIGN_COMPONENTS}
          alt="Design components in action"
          style={{ width: "100vw", display: "block" }}
        />
      </section>

      {/* ── Next steps ── */}
      <div className="casev2-section">
        <div className="casev2-inner">
          <p className="casev2-section-label">Next steps</p>
          <ul className="casev2-list">
            <li>Keep building and improving our Design Tokens and Components;</li>
            <li>
              Measure impact quantitatively to inform our stakeholders of the
              gains of the Design System;
            </li>
            <li>
              Build the library in the ZeroHeight platform, so the rules can be
              easily disseminated.
            </li>
          </ul>
        </div>
      </div>

      {/* ── Cross-navigation ── */}
      <Carousel currentProjectId="blueberry-design-system" />

      <Contact />
    </div>
  );
};

export default Blueberry;
