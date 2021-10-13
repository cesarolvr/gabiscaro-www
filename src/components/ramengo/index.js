import React from "react";
// import Lock from "@components/lock";

import { RamemGo } from "@components/illustrations";

import ramengo from "../../images/ramengo-lg.png";
import iqbefore from "../../images/iqcartoes-before.png";
import iqafter from "../../images/iqcartoes-after.png";
import resultssurvey1 from "../../images/iqresults-survey-1.svg";
import resultssurvey2 from "../../images/iqresults-survey-2.svg";
import iqTable from "../../images/iqtable.svg";
import iqHyphotesis from "../../images/iq-hyphotesis.svg";
import iqFinalversion from "../../images/iqfinalversion.svg";

import "@styles/case.scss";
import DividerWithIllustration from "../dividerWithIllustration";

const RamenGo = () => {
  return (
    <div className="page -case -ramengo">
      <section className="casesection -hero">
        <div className="container">
          <div className="thumb">
            <RamemGo filled />
            <img className="image" src={ramengo} alt="" />
          </div>
          <div className="content projectinfo">
            <p className="category">Visual Design</p>
            <p className="name">RamenGo</p>
          </div>
        </div>
      </section>
      <section className="casesection container -synopsis">
        <div className="item -whatidid">
          <p className="title">What I did</p>
          <ul className="list">
            <li>UI Design</li>
            <li>Content Strategy</li>
            <li>Iconography</li>
            <li>Illustration</li>
          </ul>
        </div>
        <div className="item -whenidid">
          <p className="title">When I did</p>
          <p className="text">2019</p>
        </div>
        <div className="item -thechallenge">
          <p className="title">The Challenge</p>
          <p className="sectionparagraph">
            Some months ago I was invited by the front end team of Red Ventures
            to create a new practical test for candidates who'd apply for a job
            opening. I gave wings to the imagination and I created a delivery
            platform in which the users could choose the ingredients for their
            ramen and receive it at the comfort of their homes. I developed all
            the visuals: styleguide, interaction and illustrations/iconography.
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="container -divider">
        <hr className="divider" />
      </section>
      <br />
      <br />
      <section className="casesection -beforeafter">
        <div className="container">
          <div className="caseimage">
            <p className="text">Before</p>
            <img src={iqbefore} alt="" />
          </div>
          <div className="caseimage">
            <p className="text">After</p>
            <img src={iqafter} alt="" />
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="container -divider">
        <hr className="divider -light" />
      </section>
      <br />
      <br />
      <section className="casesection -uxproccess">
        <div className="container">
          <h3 className="sectiontitle">UX Process</h3>
        </div>
        <div className="container">
          <div className="processes">
            <div className="item">
              <p className="title">Discovery</p>
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
        <div className="title">Discovery</div>
        <DividerWithIllustration />
        <hr className="divider -light" />
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="casesection container -survey">
        <div className="holder">
          <p className="sectiontitle">
            Quantitative <br />
            Research with users
          </p>
          <p className="sectionparagraph">
            We attempted to do an interview with users, but they just got
            frustrated for not having their credit card approved and they tought
            that was iq fault. So, we decided to launch a survey in order to
            understand the reasons why users abandoned the form application. In
            the first survey, many users answered "Others", so we launched a
            second one to know what this represents.
          </p>
        </div>
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
      <br />
      <section className="container -divider">
        <hr className="divider -light" />
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="casesection container -survey">
        <div className="holder">
          <p className="sectiontitle">Benchmark</p>
          <p className="sectionparagraph">
            In order to understand what features are in the competitors' and
            inspirations' websites, I created this spreadsheet to see a bigger
            picture of what points iq could attack to solve users' pain points.
          </p>
        </div>
        <div className="holder">
          <div className="box">
            <p className="text">
              We could explore more the frequently asked questions with the
              doubts that we found in the quantitative research.
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="casesection container -survey">
        <img src={iqTable} alt="" />
      </section>
      <br />
      <br />
      <br />
      <section className="container -divider">
        <hr className="divider -light" />
      </section>
      <br />
      <br />
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
              The majority of users don't read the information about the credit
              card, they jump straight to the form application.
            </li>
            <li>
              The minority of people doesn't seem to understand what the
              question ”Do you have bad credit?” menas.
            </li>
          </ul>
          <br />
          <br />
          <p className="sectionparagraph">
            So, we decided to launch another survey to learn more abou this last
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
        <div className="title">Define & Develop</div>
        <DividerWithIllustration />
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
              As iq is a marketplaces and intermediate the credit card
              application process, could be that a lot of people feel insecure
              about the iq's role. So, we could include some step by step of how
              this application process works;\
            </li>
            <li>
              How long the credit card application process will take. Here in
              Brazil, this process could happen whitin a month, so a lot of
              people get impatient waiting a bank's or iq's response;
            </li>
            <li>
              Update the whole page with our design system: some buttons and
              typography are different from each other, so this could cause a
              insecurity sense by the users.
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
            data and ideas into possible Hypothesis to attack. So, here is the
            hypothesis that we created and decided to attack.
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
          <p className="sectiontitle">Creation of content and interfaces</p>
          <p className="sectionparagraph">
            The past year I developed the Blueberry Design System with the
            Design and Development Team. A lot of components are ready to use,
            and, because of this, I decided to not create a wireframe. It was
            quick to make it and I had more time to think about the content and
            architecture of the page. I made 2 versions to be discussed in a
            Design Critique Session.
          </p>
        </div>
      </section>
      <br />
      <br />
      <section className="casesection">
        <div className="container">
          <div className="screenprint">
            <img src={iqbefore} alt="" />
            <p className="caption">
              <b>Version A:</b> The content was divided into accordion
            </p>
          </div>
          <div className="screenprint">
            <img src={iqafter} alt="" />
            <p className="caption">
              <strong>Version B:</strong> The content was divided into cards
            </p>
          </div>
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
            I divided the session it two parts:
          </p>
          <br />
          <ul className="sectionlist -number">
            <li>
              In the first part, I asked for them ”What are the most important
              features of the card that people need to know in the first 30
              seconds?” They were unanimous in deciding three common things
              about the credit card that should appear first in the page:
              Information about the annuity; Time until the approval and
              receivement; And the credit limit.
            </li>
            <br />
            <li>
              The second part, I presented the two concepts (gifs above) and
              they were free to gave their opinions about what I designed. The
              version A (with the accordion) was everybody’s favorite and they
              gave me a lot of insights about what I could do differently:
              <ul className="sectionlist">
                <li>
                  Promote the session about the bank account. (If the user have
                  a bank account in the credit card's bank, they could earn a
                  lower minimum income asked);
                </li>
                <li>Be more playful with the typography sizes and weights;</li>
                <li>
                  For experience in one of the partnerships, two buttons convert
                  more than one fixed on the bottom. So, they suggested two
                  buttons instead of one. And add one more button anchoring to
                  the FAQ session;
                </li>
                <li>
                  Create a layout with the bank's colors. So, the user would
                  feel that he is doing the same flow when redirected to the
                  bank's page, consequently trusting more in iq's page.
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
        <div className="title">Deliver</div>
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
            anchorage button to the FAQ session; Highlight the session about
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
      <section className="casesection -full">
        <img src={iqFinalversion} alt="" />
        
      </section>
    </div>
  );
};
export default RamenGo;
