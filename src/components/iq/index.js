import React, { useState } from "react";

import { IqCartoesIllustration } from "@components/illustrations";
import Carousel from "@components/carousel";
import DividerWithIllustration from "../dividerWithIllustration";

// Images
import ramengo from "@images/iqcartoes-lg.png";
import resultssurvey1 from "@images/iqresults-survey-1.svg";
import resultssurvey2 from "@images/iqresults-survey-2.svg";
import iqTable from "@images/iqtable.svg";
import iqHyphotesis from "@images/iq-hyphotesis.svg";

// Videos
import iqbefore from "@videos/iq-1-Before.mp4";
import iqafter from "@videos/iq-2-After.mp4";
import iqaccordion from "@videos/iq-3-Accordion.mp4";
import iqcards from "@videos/iq-4-Cards.mp4";
import iqfinal from "@videos/iq-5-Final.mp4";

import useScroll from "@hooks/useScroll";

import Header from "@components/Header";

import "@styles/case.scss";

const IQ = () => {
  useScroll();
  return (
    <div className="page -case -iq">
      <Header />
      <section className="casesection -hero">
        <div className="container">
          <div className="thumb" data-scroll>
            <div className="opacity" style={{ transitionDelay: "200ms" }}>
              <IqCartoesIllustration filled />
            </div>
            <img
              className="image opacity"
              style={{ transitionDelay: "400ms" }}
              src={ramengo}
              alt=""
            />
          </div>
          <div className="content projectinfo">
            <div data-scroll>
              <div className="tags opacity">
                {["ui", "ux", "product thinking"].map((item, index) => {
                  return (
                    <span className="tag categorylabel" key={index}>
                      {item}
                    </span>
                  );
                })}
              </div>
              <br />
            </div>
            <div data-scroll className="name">
              <div className="target">iq Cartões</div>
            </div>
          </div>
        </div>
      </section>
      <section className="casesection container -synopsis">
        {/* <div className="item">
          <div data-scroll className="title">
            <div className="target">Skill Set</div>
          </div>
          <div data-scroll className="sectionparagraph">
            <div className="target">
              Interaction & visual design, Research, Product thinking.
            </div>
          </div>
          <br />
          <br />
          <div data-scroll className="title">
            <div className="target">Timeline</div>
          </div>
          <div data-scroll className="sectionparagraph">
            <div className="target">December 2020 - June 2021</div>
          </div>
        </div> */}
        <div className="item">
          <div data-scroll className="title">
            <div className="target">The Challenge</div>
          </div>
          <div data-scroll className="sectionparagraph">
            <div className="opacity" style={{ transitionDelay: "400ms" }}>
              iq was a lot of things, it was an automatic credit card payment
              service for utility bills (energy, gas, telephone, internet, etc),
              but also a Credit Card Marketplace. After a bunch of tests, the
              Marketplace page stopped converting how the Directors and Product
              Managers expected.
              <strong>
                {" "}
                So, the challenge for me was to increase in 10% the referral
                rate of the credit card application form.
              </strong>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="casesection container -synopsis">
        <div className="item">
          <div data-scroll className="title">
            <div className="target">My Role</div>
          </div>
          <div data-scroll className="sectionparagraph">
            <ul className="sectionlist">
              <li>
                Analyze quantitative data; Facilitate workshops with Product
              </li>
              <li>Managers and Design team.</li>
              <li>Build an interface and make prototypes.</li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="casesection container -synopsis">
        <div className="item">
          <div data-scroll className="title">
            <div className="target">Timeline</div>
          </div>
          <div data-scroll className="sectionparagraph">
            <p>December 2020 - June 2021</p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="container -divider">
        <hr className="divider" />
      </section>
      <br />
      <br />
      {/* <section className="casesection -beforeafter">
        <div className="container">
          <div className="caseimage">
            <p className="text">Before</p>
            <video
              className="videoprint"
              autoPlay={true}
              muted
              loop={true}
              width="100%"
              height="100%"
            >
              <source src={iqbefore} type="video/mp4" />
            </video>
          </div>
          <div className="caseimage">
            <p className="text">After</p>
            <video
              className="videoprint"
              autoPlay={true}
              loop={true}
              muted
              width="100%"
              height="100%"
            >
              <source src={iqafter} type="video/mp4" />
            </video>
          </div>
        </div>
      </section> */}
      {/* <br />
      <br />
      <section className="container -divider">
        <hr className="divider -light" />
      </section>
      <br />
      <br /> */}
      <section className="casesection -uxproccess">
        <div className="container">
          <h3 className="sectiontitle">UX Process</h3>
        </div>
        <div className="container">
          <div className="processes">
            <div className="item">
              <p className="title">Discover</p>
              <ol className="list">
                <li className="item">Quantitative research with users</li>
                <li className="item">Benchmark</li>
                <li className="item">Fullstory Analysis</li>
              </ol>
            </div>
            <div className="item">
              <p className="title">Define & Develop</p>
              <ol className="list">
                <li className="item">Hypothesis</li>
                <li className="item">Creation of content and interfaces</li>
                <li className="item">Design Critique</li>
              </ol>
            </div>
            <div className="item">
              <p className="title">Deliver</p>
              <ol className="list">
                <li className="item">Implementation</li>
                <li className="item">Monitoring Results (impact)</li>
                <li className="item">More A/B tests</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="container -divider -secondary">
        <div className="title">Discover</div>
        <DividerWithIllustration />
        <hr className="divider -light" />
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="casesection container -survey">
        <div className="holder">
          <p className="sectiontitle">Quantitative Research with users</p>
          <p className="sectionparagraph">
            We attempted to do an interview with users, but they just got
            frustrated for not having their credit card approved and they tought
            that was iq's fault. So, we decided to launch a survey in order to
            understand the reasons why users abandoned the form application. In
            the first survey, many users answered "Others", so we launched a
            second one to know what this represents.
          </p>
        </div>
        <br />
        <br />
        <div className="holder">
          <div className="caseimage">
            <p className="text">Results survey 1</p>
            <img src={resultssurvey1} alt="" />
          </div>
          <div className="caseimage">
            <p className="text">Results survey 2</p>
            <img src={resultssurvey2} alt="" />
          </div>
        </div>
      </section>

      <br />
      <br />
      <section className="casesection container -benchmark">
        <div className="holder">
          <p className="sectiontitle">Benchmark</p>

          <p className="sectionparagraph">
            In order to understand what features are in the competitors' and
            inspirations' websites, I created this spreadsheet to see a bigger
            picture of what points iq could attack to solve users' pain points.
          </p>

          <p className="sectionparagraph -purple">
            We could further explore the frequently asked questions with the
            doubts that we found in the quantitative research.
          </p>
        </div>
      </section>
      <br />
      <br />
      <section className="casesection container -survey">
        <img src={iqTable} alt="" />
      </section>
      <br />
      <br />
      <section className="casesection container -fullstory">
        <div className="holder">
          <p className="sectiontitle">FullStory Analysis</p>
          <p className="sectionparagraph">
            Some points that I noted while I was watching the FullStory
            sessions:
          </p>
          <ul className="sectionlist">
            <li>
              The majority of users doesn't read the information about the
              credit card, they jump straight to the form application.
            </li>
            <li>
              The minority of users doesn't seem to understand what the question
              ”Do you have bad credit?” menas.
            </li>
          </ul>
          <br />
          <br />
          <p className="sectionparagraph">
            So, we decided to launch another survey to know more about this last
            point.
          </p>
          <p className="sectionparagraph -emphasis">
            And we learned that 23.1% didn't know what that means.
          </p>
          <br />
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="container -divider -secondary">
        <div className="title -black">Define & Develop</div>
        <DividerWithIllustration flagBg="black" />
        <hr className="divider -light" />
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="casesection container -hypothesis">
        <div className="holder">
          <p className="sectiontitle">Hypothesis</p>
          <p className="sectionparagraph">
            I brought these insights I discovered to the Business and Tech team
            in an ideation session I conducted. I presented all the data and the
            user flow and they gave some ideas of how we might solve these
            problems. 🔥 A lot of cool ideas came up, for example:
          </p>
          <ul className="sectionlist">
            <li>
              Since iq is a marketplace and intermediates the credit card
              application process, the concern is that a lot of people feel
              insecure about iq's role. So, we could include a step by step
              showing how this application process works;
            </li>
            <li>
              How long the credit card application process will take. Here in
              Brazil, this process could happen whitin a month, so a lot of
              people get impatient waiting for the bank's or iq's response;
            </li>
            <li>
              Update the whole page with our design system: some buttons and
              typography are different from each other, so this could evoke
              insecurity in users.
            </li>
          </ul>
          <br />
          <br />
          <br />
          <img src={iqHyphotesis} alt="" />
          <br />
          <br />
          <p className="sectionparagraph">
            After this ideation session, the Manager and I transformed all the
            data and ideas into possible a Hypothesis to attack:
          </p>
          <br />
          <br />
          <div className="box -big">
            <p className="icon">⚔️</p>
            <p className="text">
              If users have less concerns about the credit card, the iq's page
              and the term "You have bad credit", they would request more cards.
              Less doubts, more completion rate on our credit card form
              application.
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle">Creation of content and interfaces</p>
          <p className="sectionparagraph">
            The past year I developed the Blueberry Design System with the
            Design and Development Team. A lot of components are ready to use,
            and, because of this, I decided not to create a wireframe. It was
            quick to make it and I had more time to think about the content and
            architecture of the page. I developed 2 versions to be discussed in
            a Design Critique Session.
          </p>
        </div>
      </section>
      <br />
      <br />
      <section className="casesection">
        <div className="container">
          <div className="screenprint">
            <video
              className="videoprint"
              autoPlay={true}
              muted
              loop={true}
              width="100%"
              height="100%"
            >
              <source src={iqaccordion} type="video/mp4" />
            </video>
            <p className="caption">
              <b>Version A:</b> The content was divided into accordion
            </p>
          </div>
          <div className="screenprint">
            <video
              className="videoprint"
              autoPlay={true}
              muted
              loop={true}
              width="100%"
              height="100%"
            >
              <source src={iqcards} type="video/mp4" />
            </video>
            <p className="caption">
              <strong>Version B:</strong> The content was divided into cards
            </p>
          </div>
        </div>
      </section>
      <br />
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle">Design Critique</p>
          <p className="sectionparagraph">
            I invited some of my fellow designer colleagues at Red Ventures to
            join me in a Design Critique Session. Many of them had previous
            experience working with conversion in credit card pages and
            application forms in one of the Red Ventures partnerships, so they
            have A LOT of experience with the target users who are interested in
            credit cards.
          </p>
          <p className="sectionparagraph">
            I divided the session into two parts:
          </p>
          <br />
          <ul className="sectionlist -number">
            <li>
              In the first part, I asked them ”What are the most important
              features of the card that people need to know in the first 30
              seconds?” They were unanimous in deciding three common things
              about the credit card that should appear first in the page:
              <br />
              <p>a. Information about the annuity;</p>
              <p>b. Time period until the approval and delivery;</p>
              <p>c. And the credit limit.</p>
            </li>
            <br />
            <li>
              In the second part, I presented the two concepts (gifs above) and
              they were free to gave their opinions about what I designed.
              Version A (with the accordion) was everybody’s favorite and they
              gave me a lot of insights about what I could do differently:
              <ul className="sectionlist">
                <li>
                  Promote the session about the bank account. (If the user has a
                  bank account in the credit card's bank, they could be asked
                  for a lower minimum income;
                </li>
                <li>Be more playful with the typography sizes and weights;</li>
                <li>
                  From past experience in one of the partnerships, two buttons
                  convert more than one fixed on the bottom. So, they suggested
                  two buttons instead of one. And add one more button anchoring
                  to the FAQ section;
                </li>
                <li>
                  Create a layout with the bank's colors. So, the user would
                  feel that they are continuing in the same flow when redirected
                  to the bank's page, consequently gaining trust in iq's page.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="container -divider -secondary">
        <div className="title -pink">Deliver</div>
        <DividerWithIllustration />
        <hr className="divider -light" />
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle">Final Version</p>
          <p className="sectionparagraph">
            I implemented some insights that the others designers gave me, for
            example: two buttons in the same page convert more than one; Add an
            anchorage button to the FAQ section; Highlight the section about
            bank account, etc...
            <br />
            <br />
            <br />
            You can see the final result below. :)
          </p>
        </div>
      </section>
      <br />
      <br />
      <section className="casesection -result">
        <video
          className="videoprint"
          autoPlay={true}
          muted
          loop={true}
          width="100%"
          height="100%"
        >
          <source src={iqfinal} type="video/mp4" />
        </video>
        <svg
          width="396"
          height="396"
          viewBox="0 0 396 396"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="circles"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M396 198C396 88.6476 307.352 0 198 0C88.6476 0 0 88.6476 0 198H396Z"
            fill="#9CEAEF"
            className="circleup"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M396 396C396 286.648 307.352 198 198 198C88.6476 198 0 286.648 0 396H396Z"
            fill="#9CEAEF"
            className="circledown"
          />
        </svg>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle">Impact</p>
          <p className="sectionparagraph">
            We achieved our goal 🎉
            <br />
            <br />
            <br />
          </p>
        </div>
      </section>
      <section className="casesection container">
        <div className="holder">
          <p className="featuredtext">
            +22% <br />
            referral
          </p>

          <p className="sectionparagraph">coming from paid media</p>
          <br />
          <br />
          <br />
        </div>
        <div className="holder">
          <p className="featuredtext">
            +28% <br />
            referral
          </p>
          <p className="sectionparagraph">coming from emails</p>
          <br />
          <br />
          <br />
        </div>
      </section>
      <br />
      <section className="container -divider">
        <hr className="divider -light" />
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle">Next steps</p>
          <p className="sectionparagraph">Develop different A/B Tests to:</p>
          <ul className="sectionlist">
            <li>
              Cards instead of the accordion with information of the credit
              card;
            </li>
            <li>Break the form application into steps;</li>
            <li>
              Test some minor elements, like positioning of the credit card.
            </li>
            <br />
          </ul>
          <p className="sectionparagraph">
            Conduct usability tests with users to keep improving the experience
            of asking for a credit card.
          </p>
        </div>
      </section>
      <br />
      <section className="casesection -carousel">
        <Carousel />
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};
export default IQ;
