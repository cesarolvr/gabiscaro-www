import React from "react";

import Carousel from "@components/carousel";
import Contact from "@components/contact";
import useScroll from "@hooks/useScroll";

import "@styles/case-v2.scss";

// Shared assets
import HERO_MOCKUP from "@images/v2/shared/banner-setup-pix.png";
import LINHA_DIVISORIA from "@images/v2/shared/linha-divisoria.svg";

import BEFORE_COMBINED from "@images/v2/setup-pix/before-combined.png";
import AFTER_COMBINED from "@images/v2/setup-pix/after-combined.png";
import KEY_STATUS_PHONE from "@images/v2/setup-pix/status.png";

const PIX_KEY_STATUSES = [
  {
    value: "222.234.567-98",
    status: "Cadastrada com sucesso",
    state: "success",
  },
  {
    value: "(11) 99540-9315",
    status: "Pendente de reivindicação",
    state: "warning",
    action: "Iniciar",
  },
  {
    value: "222.234.567-98",
    status: "Pendente de portabilidade",
    state: "warning",
    action: "Iniciar",
  },
  {
    value: "test@mail.com.br",
    status: "Erro de cadastro",
    state: "error",
  },
  {
    value: "X9sjchdks-gbskd.comsh",
    status: "Indisponível",
    state: "error",
  },
];

const SetupPix = () => {
  useScroll();

  return (
    <div className="casev2">
      {/* ── Hero ── */}
      <section className="casev2-hero" style={{ background: "#9ceaef" }}>
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

          <p className="casev2-eyebrow">Setup Pix Redesign</p>
          <h1 className="casev2-heading">
            Improving the visual hierarchy for Pix Setup
          </h1>
          <p className="casev2-desc">
            In the current Pix experience there are too many steps, and
            sometimes the users get confused about feedback messages and their
            key status. On top of that, the Mercado Pago design system changed,
            and we needed to adapt the experience.
          </p>

          <div className="casev2-gap">
            <p className="casev2-section-label">My Role</p>
            <ul className="casev2-list">
              <li>Be consistent with Andes X constraints;</li>
              <li>
                Create an experience consistent with Hub Pix and align it with
                Pix team;
              </li>
              <li>
                Improve the rating completion of a Pix registration in
                Onboarding.
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
            <p className="casev2-section-label">Impact</p>
            <p className="casev2-text">
              A clearer value proposition and improved visual hierarchy at a key
              decision point significantly increased Pix adoption.
            </p>
            <div className="casev2-impact-cards">
              <div className="casev2-impact-card">
                <p className="casev2-impact-metric">+9,94 p.p.</p>
                <p className="casev2-impact-desc">in Pix registration</p>
              </div>
              <div className="casev2-impact-card">
                <p className="casev2-impact-metric">+17%</p>
                <p className="casev2-impact-desc">
                  relative lift in Pix registration. Statistically significant
                  (p &lt; 0.001)
                </p>
              </div>
            </div>
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
      <section className="casev2-strip -white">
        <img
          src={BEFORE_COMBINED}
          alt="The experience before — Pix setup screens"
          style={{ width: "100vw", display: "block" }}
        />
      </section>

      <section className="casev2-strip">
        <div className="casev2-strip-pad">
          <div className="casev2-bullets">
            <div>
              <p className="casev2-bullet-title">
                Screens with high cognitive load
              </p>
              <p className="casev2-bullet-text">
                The screen lacks a clear visual hierarchy, making content harder
                to scan and increasing cognitive effort to understand the
                options.
              </p>
            </div>
            <div>
              <p className="casev2-bullet-title">Unclear system states</p>
              <p className="casev2-bullet-text">
                Loading and status screens do not clearly communicate progress
                or next steps, creating uncertainty during the process.
              </p>
            </div>
            <div>
              <p className="casev2-bullet-title">Limited user guidance</p>
              <p className="casev2-bullet-text">
                The experience provides minimal directional cues, requiring
                users to interpret actions on their own, which may increase
                friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The experience now ── */}
      <div className="casev2-strip-header">
        <p className="casev2-section-label">The experience now</p>
      </div>
      <section className="casev2-strip -light-cyan">
        <img
          src={AFTER_COMBINED}
          alt="The experience now — redesigned Pix setup screens"
          style={{ width: "100vw", display: "block" }}
        />
      </section>
      <section className="casev2-strip">
        <div className="casev2-strip-pad">
          <div className="casev2-bullets">
            <div>
              <p className="casev2-bullet-title">Clear visual hierarchy</p>
              <p className="casev2-bullet-text">
                Improved structure, spacing, and visual prioritization make key
                actions and information easier to scan and understand at a
                glance.
              </p>
            </div>
            <div>
              <p className="casev2-bullet-title">Transparent system feedback</p>
              <p className="casev2-bullet-text">
                Each stage of the process clearly communicates what is
                happening, reducing uncertainty and reinforcing user confidence.
              </p>
            </div>
            <div>
              <p className="casev2-bullet-title">Strong user guidance</p>
              <p className="casev2-bullet-text">
                The redesigned flow provides clearer cues and contextual
                messaging, guiding users through decisions and next steps with
                less friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Some key status ── */}
      <section className="casev2-key-status-strip">
        <div className="casev2-key-status-inner">
          <div className="casev2-key-status-phone">
            <img
              src={KEY_STATUS_PHONE}
              alt="Pix key registration status screen"
            />
          </div>
          <div className="casev2-key-status-content">
            <p className="casev2-section-label">Some key status</p>
            <div className="casev2-key-list">
              {PIX_KEY_STATUSES.map((item, i) => (
                <div className="casev2-key-card" key={i}>
                  <span className={`casev2-key-icon -${item.state}`}>
                    {item.state === "success"
                      ? "✓"
                      : item.state === "warning"
                      ? "!"
                      : "−"}
                  </span>
                  <div className="casev2-key-info">
                    <p className="casev2-key-value">{item.value}</p>
                    <p className="casev2-key-desc">{item.status}</p>
                  </div>
                  {item.action && (
                    <span className="casev2-key-action">{item.action}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cross-navigation ── */}
      <Carousel />

      <Contact />
    </div>
  );
};

export default SetupPix;
