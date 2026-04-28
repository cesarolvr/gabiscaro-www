import React from "react";

import Carousel from "@components/carousel";
import Contact from "@components/contact";
import useScroll from "@hooks/useScroll";

import "@styles/case-v2.scss";

import HERO_MOCKUP from "@images/v2/shared/banner-restyling.png";
import LINHA_DIVISORIA from "@images/v2/shared/linha-divisoria.svg";
import BEFORE_COMBINED from "@images/v2/restyling/before-combined.png";
import BENCHMARK_IMG from "@images/v2/restyling/benchmark.png";
import AFTER_COMBINED from "@images/v2/restyling/after-combined.png";
import BONUS_APP_STORES from "@images/v2/restyling/bonus-app-stores.png";

const MercadoRestyling = () => {
  useScroll();

  return (
    <div className="casev2">
      {/* ── Hero ── */}
      <section className="casev2-hero" style={{ background: "#3ddc97" }}>
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
            {["ui", "ux"].map((t) => (
              <span className="casev2-tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          <p className="casev2-eyebrow">Mercado Pago restyling</p>
          <h1 className="casev2-heading">
            Standardizing the visual language from Mercado Pago app
          </h1>
          <p className="casev2-desc">
            In the end-to-end flow, each touchpoint has its own visual language
            and impacts how the user sees the full story. It was identified lack
            of visual rhythm, standards, and emotional connection.
          </p>

          <div className="casev2-gap">
            <p className="casev2-section-label">My Role</p>
            <ul className="casev2-list">
              <li>
                Help the team of Technical Leaders and Experts create a new
                unified, consistent visual system based on Mercado Pago&apos;s
                new brand book;
              </li>
              <li>Make an end-to-end benchmark;</li>
              <li>Align possible solutions with teams across Mercado Pago;</li>
              <li>Search and edit photographs in Photoshop.</li>
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
              We had a year ahead to get an alignment of how the experience
              would turn out cohesive. It was weeks and weeks of hard work,
              trying to find the best photo in Getty Images, and editing in
              Photoshop to make everything connected.
            </p>
          </div>

          <img
            src={LINHA_DIVISORIA}
            className="casev2-wavy-rule"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ── The experience before ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">The experience before</p>
      </div>
      <section className="casev2-strip -gray">
        <img
          src={BEFORE_COMBINED}
          alt="The experience before — Mercado Pago screens"
          style={{ width: "100vw", display: "block" }}
        />
      </section>

      <section className="casev2-strip">
        <div className="casev2-strip-pad">
          <div className="casev2-bullets">
            <div>
              <p className="casev2-bullet-title">Generic photography</p>
              <p className="casev2-bullet-text">
                Images feel more posed and product-centered, lacking authentic
                moments of interaction that help users connect with the product.
              </p>
            </div>
            <div>
              <p className="casev2-bullet-title">Weak storytelling</p>
              <p className="casev2-bullet-text">
                The visuals show products more as isolated objects rather than
                integrated into real usage situations, making them less
                relatable.
              </p>
            </div>
            <div>
              <p className="casev2-bullet-title">Lack of cohesiveness</p>
              <p className="casev2-bullet-text">
                Photography style, color temperature, and product presence feels
                weaker and less recognizable visual language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Journey benchmark ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">Journey benchmark</p>
        <p className="casev2-text">
          We benchmarked each competitor from Mercado Pago visually, mapping out
          each journey&apos;s touchpoints: Landing Pages, Stores, Intro Screens,
          and the whole flow from account opening, including Onboarding, and the
          Home screen. This was done to see the patterns between them and
          identify possible opportunities.
        </p>
      </div>
      <section className="casev2-strip -dark-gray">
        <img
          src={BENCHMARK_IMG}
          alt="Journey benchmark"
          style={{ width: "100vw", display: "block" }}
        />
      </section>

      {/* ── Conclusions ── */}
      <div className="casev2-section">
        <div className="casev2-inner">
          <p className="casev2-section-label">Conclusions</p>
          <ol className="casev2-ordered">
            <li>
              All competitors prioritize having a model interacting with a
              credit card or a mobile phone in the photo, without fear of
              repetition.
            </li>
            <li>
              Competitors prioritize the use of photos, avoiding text above
              them, giving even greater priority to the images.
            </li>
            <li>
              Although some competitors show photos faithful to the products,
              most choose to focus on the benefits the user gets from using that
              product, or follow an editorial tone.
            </li>
          </ol>
        </div>
      </div>

      {/* ── The experience now ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">The experience now</p>
      </div>
      <section className="casev2-strip -light-cyan">
        <img
          src={AFTER_COMBINED}
          alt="The experience now — redesigned Mercado Pago screens"
          style={{ width: "100vw", display: "block" }}
        />
      </section>

      <section className="casev2-strip">
        <div className="casev2-strip-pad">
          <div className="casev2-bullets">
            <div>
              <p className="casev2-bullet-title">Human-centered photography</p>
              <p className="casev2-bullet-text">
                Images capture more natural expressions and real-life
                interactions, creating an emotional connection and making the
                experience feel more relatable.
              </p>
            </div>
            <div>
              <p className="casev2-bullet-title">Stronger storytelling</p>
              <p className="casev2-bullet-text">
                Products are shown being used in everyday situations, helping
                users quickly understand the value and relevance of each feature
                in the Mercado Pago app.
              </p>
            </div>
            <div>
              <p className="casev2-bullet-title">
                Recognizable visual language
              </p>
              <p className="casev2-bullet-text">
                Warmer tones and stronger brand integration create a more
                consistent visual identity, reinforcing brand recognition across
                the screens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bonus: App Stores ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">Bonus: App Stores</p>
        <p className="casev2-text">
          Before rebranding, Mercado Pago&apos;s visual identity was blue, so
          changing everything to yellow was a big opportunity to bring more
          personality, and a cohesive and recognizable visual language to the
          stores.
        </p>
      </div>
      <section className="casev2-strip -gray">
        <img
          src={BONUS_APP_STORES}
          alt="Bonus: App Stores — before and after"
          style={{ width: "100vw", display: "block" }}
        />
      </section>

      {/* ── Key improvements ── */}
      <div className="casev2-section">
        <div className="casev2-inner">
          <p className="casev2-section-label">Key improvements</p>
          <ol className="casev2-ordered">
            <li>
              Some devices are presented with perspective and angled positioning
              instead of flat layouts, creating a stronger sense of depth and
              movement across the slides.
            </li>
            <li>
              Variation of color and type of background in each slide: some of
              them use photos, others a sleek and soft gradient.
            </li>
          </ol>
        </div>
      </div>

      {/* ── Cross-navigation ── */}
      <Carousel currentProjectId="mercado-pago-restyling" />

      <Contact />
    </div>
  );
};

export default MercadoRestyling;
