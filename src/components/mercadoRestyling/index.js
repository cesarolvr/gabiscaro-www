import React from "react";

import Carousel from "@components/carousel";
import Contact from "@components/contact";
import useScroll from "@hooks/useScroll";

import "@styles/case-v2.scss";

import HERO_MOCKUP from "@images/v2/shared/card-restyling.png";
import LINHA_DIVISORIA from "@images/v2/shared/linha-divisoria.svg";
import resBefore1 from "@images/v2/restyling/before-1.png";
import resBefore2 from "@images/v2/restyling/before-2.png";
import resBefore3 from "@images/v2/restyling/before-3.png";
import resBefore4 from "@images/v2/restyling/before-4.png";
import resBefore5 from "@images/v2/restyling/before-5.png";
import BENCHMARK_IMG from "@images/v2/restyling/benchmark.png";
import resAfter1 from "@images/v2/restyling/after-1.png";
import resAfter2 from "@images/v2/restyling/after-2.png";
import resAfter3 from "@images/v2/restyling/after-3.png";
import resAfter4 from "@images/v2/restyling/after-4.png";
import resAfter5 from "@images/v2/restyling/after-5.png";
import storeBefore1 from "@images/v2/restyling/store-before-1.png";
import storeBefore2 from "@images/v2/restyling/store-before-2.png";
import storeBefore3 from "@images/v2/restyling/store-before-3.png";
import storeBefore4 from "@images/v2/restyling/store-before-4.png";
import storeBefore5 from "@images/v2/restyling/store-before-5.png";
import storeBefore6 from "@images/v2/restyling/store-before-6.png";
import storeBefore7 from "@images/v2/restyling/store-before-7.png";
import storeBefore8 from "@images/v2/restyling/store-before-8.png";
import storeAfter1 from "@images/v2/restyling/store-after-1.png";
import storeAfter2 from "@images/v2/restyling/store-after-2.png";
import storeAfter3 from "@images/v2/restyling/store-after-3.png";
import storeAfter4 from "@images/v2/restyling/store-after-4.png";
import storeAfter5 from "@images/v2/restyling/store-after-5.png";
import storeAfter6 from "@images/v2/restyling/store-after-6.png";
import storeAfter7 from "@images/v2/restyling/store-after-7.png";
import storeAfter8 from "@images/v2/restyling/store-after-8.png";

const BEFORE_SCREENS = [
  { src: resBefore1, label: "Welcome" },
  { src: resBefore2, label: "Credits" },
  { src: resBefore3, label: "Assets" },
  { src: resBefore4, label: "Pix" },
  { src: resBefore5, label: "Sellers" },
];

const AFTER_SCREENS = [
  { src: resAfter1, label: "Welcome (Android)" },
  { src: resAfter2, label: "Credits (Android)" },
  { src: resAfter3, label: "Intro Pix" },
  { src: resAfter4, label: "Conta Remunerada" },
  { src: resAfter5, label: "Onboarding" },
];

const STORE_BEFORE = [
  storeBefore1,
  storeBefore2,
  storeBefore3,
  storeBefore4,
  storeBefore5,
  storeBefore6,
  storeBefore7,
  storeBefore8,
];

const STORE_AFTER = [
  storeAfter1,
  storeAfter2,
  storeAfter3,
  storeAfter4,
  storeAfter5,
  storeAfter6,
  storeAfter7,
  storeAfter8,
];

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
        <div className="casev2-strip-pad">
          <div className="casev2-screens">
            {BEFORE_SCREENS.map((s) => (
              <div className="casev2-screen-col" key={s.label}>
                <div className="casev2-screen">
                  <img src={s.src} alt={s.label} />
                </div>
              </div>
            ))}
          </div>
        </div>
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
      <section
        className="casev2-strip -dark-gray"
        style={{ height: "670px;", overflow: "hidden", padding: "70px 0 0 0" }}
      >
        <div
          className="casev2-strip-pad"
          style={{ height: "100%", padding: 0 }}
        >
          <div className="casev2-full-img" style={{ position: "relative" }}>
            <img
              src={BENCHMARK_IMG}
              alt="Journey benchmark"
              style={{ height: "100%", width: "auto" }}
            />
          </div>
        </div>
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
        <div className="casev2-strip-pad">
          <div className="casev2-screens">
            {AFTER_SCREENS.map((s) => (
              <div className="casev2-screen-col" key={s.label}>
                <div className="casev2-screen">
                  <img src={s.src} alt={s.label} />
                </div>
              </div>
            ))}
          </div>
        </div>
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
        <div className="casev2-strip-pad">
          <p
            className="casev2-text"
            style={{ fontWeight: 600, marginBottom: 16 }}
          >
            Before
          </p>
          <div className="casev2-gallery -cols-8" style={{ marginBottom: 32 }}>
            {STORE_BEFORE.map((src, i) => (
              <img
                key={`store-before-${i}`}
                src={src}
                alt={`App store before — slide ${i + 1}`}
              />
            ))}
          </div>
          <p
            className="casev2-text"
            style={{ fontWeight: 600, marginBottom: 16 }}
          >
            After
          </p>
          <div className="casev2-gallery -cols-8">
            {STORE_AFTER.map((src, i) => (
              <img
                key={`store-after-${i}`}
                src={src}
                alt={`App store after — slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
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
      <Carousel />

      <Contact />
    </div>
  );
};

export default MercadoRestyling;
