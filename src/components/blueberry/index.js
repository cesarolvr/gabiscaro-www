import React, { useEffect } from "react";

import { BlueberryIllustration } from "@components/illustrations";
import Carousel from "@components/carousel";
import DividerWithIllustration from "../dividerWithIllustration";

import blueberryThumb from "@images/blueberry/blueberry-lg.png";
import buttonsImage from "@images/blueberry/buttons.png";
import iconsImage from "@images/blueberry/icons.png";
import colorsImage from "@images/blueberry/colors.png";
import consistentImage from "@images/blueberry/consistent.png";

import smoothScroll from "@src/utils/smoothScroll";

import "@styles/case.scss";

const Blueberry = () => {
  useEffect(() => {
    smoothScroll();
  }, []);
  return (
    <div className="page -case -blueberry">
      <section className="casesection -hero">
        <div className="container">
          <div className="thumb">
            <BlueberryIllustration filled />
            <img className="image" src={blueberryThumb} alt="" />
          </div>
          <div className="content projectinfo">
            <p className="categorylabel">Design System</p>
            <p className="name">
              Blueberry <br />
              Design System
            </p>
          </div>
        </div>
      </section>
      <section className="casesection container -synopsis">
        <div className="item -whatidid">
          <p className="title">What I did</p>
          <ul className="list">
            <li>Research</li>
            <li>Interface components</li>
          </ul>
        </div>
        <div className="item -whenidid">
          <p className="title">When I did</p>
          <p className="text">
            May 2020/ <br />
            Ongoing product
          </p>
        </div>
        <div className="item -thechallenge">
          <p className="title">The Challenge</p>
          <p className="sectionparagraph">
            iq is a lot of things, an automatic credit card payment service for
            utility bills (energy, gas, telephone, internet, etc), but also a
            Credit Card Marketplace. iq is growing so fast and we needed ways to
            expand healthily.{" "}
            <strong>
              To add to this, the Front-End team felt that their code needed to
              be more organized. On the other hand, the Design Team faced a
              problem to create a new component everytime and some screens had
              different components from each other.
            </strong>{" "}
            So, I saw an opportunity to develop a Design System together.
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
      <br />
      <section className="casesection container -fullstory">
        <div className="holder">
          <p className="sectiontitle">Goals</p>
          <ul className="sectionlist">
            <li>
              Reveal the disparity between product platforms, website, mobile
              website, and mobile app
            </li>
            <li>
              Empower the team with resources that help drive a unified
              experience between the website and app
            </li>
            <li>
              Improve the experience across all devices by creating a consistent
              visual language;
            </li>
          </ul>
          <br />
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
      <section className="casesection container -fullstory">
        <div className="holder">
          <p className="sectiontitle">Team Structure</p>
          <p className="sectionparagraph">
            A Design System is never done by a single person from a single team.
            Although our team is pretty small compared to other organizations,
            we did a good job joining forces to build a cohesive product for our
            brand iq.As a team we defined two responsibles for this: Ïtalo
            Fontes (Front-End Developer) and me (Product Designer). The rest of
            the team, 5 Front End Developers and 2 Designers would help to build
            the Components in the future, after we built the Design Tokens.
          </p>
          <br />
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
      <section className="casesection container -fullstory">
        <div className="holder">
          <p className="sectiontitle">My Role</p>
          <p className="sectionparagraph">
            Being the responsible for kick starting our Design System I was
            responsible for some things
          </p>
          <ul className="sectionlist">
            <li>
              Facilitate ideations to define our Design Principles and our
              Design Sytem name
            </li>
            <li>
              Build an Interface Inventory, in order to scan for inconsistencies
              in our web app and websites
            </li>
            <li>
              Build the Design Tokens: define and organize the colors,
              typography, grids and spacings;
            </li>
            <li>
              Start the main Components, pre-definied by our team, to apply in
              our first project.
            </li>
          </ul>
          <br />
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
      <section className="casesection -uxproccess">
        <div className="container">
          <h3 className="sectiontitle">UX Process</h3>
        </div>
        <div className="container">
          <div className="processes">
            <div className="item">
              <p className="title">Discover</p>
              <ol className="list">
                <li className="item">Desk Research</li>
                <li className="item">
                  Interview with Users, Builders and Stakeholders
                </li>
              </ol>
            </div>
            <div className="item">
              <p className="title">Define & Develop</p>
              <ol className="list">
                <li className="item">Interface Inventory</li>
                <li className="item">Design Principles</li>
                <li className="item">Design Tokens definition</li>
              </ol>
            </div>
            <div className="item">
              <p className="title">Deliver</p>
              <ol className="list">
                <li className="item">Design Components;</li>
                <li className="item">Implementation of our MVP</li>
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
      <section className="casesection container -fullstory">
        <div className="holder">
          <p className="sectiontitle">Desk Research</p>
          <p className="sectionparagraph">
            The three main goals with the Desk Research were:
          </p>
          <ul className="sectionlist -number">
            <li>
              Understand how a Design System is built and its best practices,
              what is the definion of it, what is the impact in a company.
            </li>
            <li>
              Use this information to present the concept to the team and sell
              if for the stakeholders.
            </li>
            <li>
              Understand if this product was a good fit for our necessites...
            </li>
          </ul>
          <p className="sectionparagraph">
            After this research I made a presentation to the team and Ítalo, my
            Front-End partner, did a research from his side. To understando what
            technologies we could use.
          </p>
          <br />
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
      <section className="casesection container -fullstory">
        <div className="holder">
          <p className="sectiontitle">
            Interviews with Users, Builders and Stakeholders
          </p>
          <p className="sectionparagraph">
            I interviewd three groups of people, following the script that Brad
            Frost mada available in his blog:
          </p>
          <ul className="sectionlist">
            <li>
              Users being the people who will use the design system, for
              example, Designers and Front-Ends from other squads.
            </li>
            <li>
              Builders being the people who is going to build the Design System,
              for example, Designers and Front-Ends responsibles for the
              project.
            </li>
            <li>
              Stakeholders, being the people who will buy the idea and give time
              to build this product, for example, PO's, PM's, Directors,
              Vice-President...
            </li>
          </ul>
          <p className="sectionparagraph">
            Finally, I discovered that the Design System was something viable
            and necessary for our team, which was growing fast and wildly. Here
            are some pain points:
          </p>
          <br />
          <ul className="sectionlist -big">
            <li>
              iq had several designers so they created some patterns and
              legacies;
            </li>
            <li>
              The product was growing and the demand to create new things was
              coming, so a lot of things were duplicated and it was running out
              of pattern;
            </li>
            <li>
              A lot of new elements were built in the code because there is no
              design system. So, often the Developers looked in the Sketch file
              to see if it has something similar.
            </li>
            <li>
              More time to code a component and less time do think in the
              experience.
            </li>
            <li>iq doesn't has a defined process.</li>
          </ul>
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
      <section className="casesection container -fullstory">
        <div className="holder">
          <p className="sectiontitle">Interface Inventory</p>
          <p className="sectionparagraph">
            I put three examples bellow to show some discrepancies in some of
            our components and tokens, like in Buttons, Icons and Colors.
            Different styles, different icons being applied in components and a
            lot of color variants with no standard.
          </p>
          <br />
          <p className="sectionparagraph">
            If you want to see the Interface Inventory complete,{" "}
            <a
              href="https://www.linkedin.com/in/gabriela-bisc%C3%A1ro-4b90a78a/"
              target="_blank"
              className="link"
            >
              clique here
            </a>
          </p>
        </div>
      </section>
      <br />
      <br />
      <section className="casesection container">
        <img src={buttonsImage} alt="" />
      </section>
      <section className="casesection container">
        <img src={iconsImage} alt="" />
      </section>
      <section className="casesection container">
        <img src={colorsImage} alt="" />
      </section>
      <br />
      <br />
      <br />
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle">Design Principles</p>
          <p className="sectionparagraph">
            I facilitated an ideation session with all members of the Design and
            Development teams in order to think and build ours Design
            Principles. This will be the core of our Desing System and how we
            build our products for our users.
            <br />
            <br />I brought some examples of Design Principles from renowed
            companies, like Airbnb to inspire them. In addition to this, I also
            explained the meaning of this and how it is used in daily basis.
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle">The ideation session</p>
          <p className="sectionparagraph">
            Like I said before, I brought some examples of Design Principles and
            I extracted some words from the interviews and created a word cloud
            to guide our participants in the ideation. They thought in some
            words that would best represent iq and our Design System. The words
            were:
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle -red">
            Consistent, Reliable and Customizable.
          </p>
          <p className="sectionparagraph">
            After our Top 3 keywords were defined, we explored the meaning of
            each of them to iq. For this, I suggested an exercise of
            Mindmapping, in which each keyword became the core and the phrases
            became the stems. One side of the stem should start with ”As user, I
            must...” and the other was ”Our projects must...” Therefore we
            formed intern and extern perspectives. See the example below:
          </p>
        </div>
      </section>
      <br />
      <section className="casesection container">
        <img src={consistentImage} alt="" />
      </section>
      <section className="casesection container">
        <div className="holder">
          <p className="sectionparagraph">
            With this we created our Design Principles together:
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle -red -close">Consistent</p>
          <p className="sectionparagraph">
            Each piece from the system and its actions should be easily and
            quickly comprehensible. Good design works <br />for everyone, everyday.
          </p>
        </div>
        <div className="holder">
          <p className="sectiontitle -red -close">Reliable</p>
          <p className="sectionparagraph">
            iq makes roads safe and useful. We <br /> make sure that the interface is
            uncluttered and easy to read. Our products should be clear and
            <br />accessible.
          </p>
        </div>
        <div className="holder">
          <p className="sectiontitle -red -close">Customizable</p>
          <p className="sectionparagraph">
            Design with an eye toward the future of our products, but keep in
            mind that the iq must be recognizable even if this product is
            originated from a partner.
          </p>
        </div>
      </section>
      <section className="casesection -carousel">
        <Carousel />
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};
export default Blueberry;
