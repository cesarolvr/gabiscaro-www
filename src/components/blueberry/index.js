import React, { useState } from "react";

import { BlueberryIllustration } from "@components/illustrations";
import Carousel from "@components/carousel";
import DividerWithIllustration from "../dividerWithIllustration";

import blueberryThumb from "@images/blueberry/blueberry-lg.png";
import buttonsImage from "@images/blueberry/buttons.png";
import iconsImage from "@images/blueberry/icons.png";
import colorsImage from "@images/blueberry/colors.png";
import consistentImage from "@images/blueberry/consistent.png";
import colorsfullImage from "@images/blueberry/colors-full.png";
import print1 from "@images/blueberry/print-1.png";
import print2 from "@images/blueberry/print-2.png";
import print3 from "@images/blueberry/print-3.png";

import useScroll from "@hooks/useScroll";

import "@styles/case.scss";

const Blueberry = () => {
  const [carouselMounted, setCarouselMounted] = useState(false);
  // useScroll(carouselMounted);
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
        <div className="item">
          <p className="title">What I did</p>
          <p className="sectionparagraph">Research, Interface components </p>
          <br />
          <br />
          <p className="title">Timeline</p>
          <p className="sectionparagraph">May 2020 - Ongoing product</p>
        </div>

        <div className="item -thechallenge">
          <p className="title">The Challenge</p>
          <p className="sectionparagraph">
            iq is a lot of things, an automatic credit card payment service for
            utility bills (energy, gas, telephone, internet, etc), but also a
            Credit Card Marketplace. iq is growing so fast and we needed ways to
            expand healthily.
            <strong>
              To add to this, the Front-End team felt that their code needed to
              be more organized. On the other hand, the Design Team faced a
              problem to create a new component everytime and some screens had
              different components from each other.
            </strong>{" "}
            So, I saw an opportunity to develop a Design System.
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
            brand iq.As a team we defined two leads for this: Ítalo Fontes
            (Front-End Developer) and I (Product Designer). The rest of the
            team, 5 Front End Developers and 2 Designers, would help to build
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
            Being the lead for kick starting our Design System I was responsible
            for some things:
          </p>
          <ul className="sectionlist">
            <li>
              Facilitate ideations to define our Design Principles and our
              Design Sytem name;
            </li>
            <li>
              Build an Interface Inventory, in order to scan for inconsistencies
              in our web app and websites;
            </li>
            <li>
              Build the Design Tokens: define and organize the colors,
              typography, grids and spacings;
            </li>
            <li>
              Start the main Components, predefinied by our team, to apply in
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
              To understand how a Design System is built and its best practices,
              what is the definion of it, what is the impact in a company.
            </li>
            <li>
              To use this information to present the concept to the team and
              sell it for the stakeholders.
            </li>
            <li>
              To understand if this product was a good fit for our needs...
            </li>
          </ul>
          <p className="sectionparagraph">
            After this research I made a presentation to the team. And Ítalo, my
            Front-End partner, gathered some information on his side, to
            understand what technologies we could use.
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
            I interviewed three groups of people, following the script that Brad
            Frost made available on his blog:
          </p>
          <ul className="sectionlist">
            <li>
              Users being the people who will use the design system, for
              example, Designers and Front-Ends from other squads.
            </li>
            <li>
              Builders being the people who are going to build the Design
              System, for example, Designers and Front-Ends responsible for the
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
              iq had several designers, so they created some patterns and
              legacies;
            </li>
            <li>
              The product was growing and the demand to create new things was
              coming, so a lot of things were duplicated and it was running out
              of pattern;
            </li>
            <li>
              A lot of new elements were built in the code because there was no
              design system. So, often the Developers looked up in the Sketch
              file to see if it had something similar.
            </li>
            <li>
              More time to code a component and less time to think about the
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
            I put three examples below to show some discrepancies in some of our
            components and tokens, like in Buttons, Icons and Colors. You can
            see different styles, different icons being applied in components
            and a lot of color variants with no standard.
          </p>
          <br />
          <p className="sectionparagraph">
            If you want to see the complete Interface Inventory,{" "}
            <a
              href="https://docs.google.com/presentation/d/1XMhP1pDP85Kve7WKsJnx9lxWtIcqcS4jCXdNsOwaqlQ/edit?usp=sharing"
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
            Principles. This will be the core of our Design System and how we
            build our products for our users.
            <br />
            <br />I brought some examples of Design Principles from renowed
            companies, like Airbnb, to inspire them. In addition to this, I also
            explained the meaning of this and how it is used in a daily basis.
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
            to guide our participants in the ideation. They thought about some
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
            quickly comprehensible. Good design works <br />
            for everyone, everyday.
          </p>
        </div>
        <div className="holder">
          <p className="sectiontitle -red -close">Reliable</p>
          <p className="sectionparagraph">
            iq makes roads safe and useful. We <br /> make sure that the
            interface is uncluttered and easy to read. Our products should be
            clear and
            <br />
            accessible.
          </p>
        </div>
        <div className="holder">
          <p className="sectiontitle -red -close">Customizable</p>
          <p className="sectionparagraph">
            Design with an eye towards the future of our products, but keep in
            mind that iq must be recognizable even if this product is originated
            from a partner.
          </p>
        </div>
      </section>
      <br />
      <br />
      <section className="container -divider -secondary">
        <hr className="divider -light" />
      </section>
      <br />
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle">Design Tokens</p>
          <p className="sectionparagraph">
            As Adobe says: <br />
            <i>
              "Design tokens are all the values needed to construct and maintain
              a design system — spacing, color, typography, object styles,
              animation, etc. — represented as data. These can represent
              anything defined by design: a color as a RGB value, an opacity as
              a number, an animation ease as Bezier coordinates."
            </i>
          </p>
          <br />
          <br />
          <p className="sectionparagraph">
            The first thing we did was to "fix” our issues with our current
            Design Tokens: a legacy of different shades of colors, non-standard
            typography, a ton of different and non-standard icons and a lack of
            grid and spacing determination. Here are some of our Design Tokens:
          </p>
        </div>
      </section>
      <section className="casesection">
        <img src={colorsfullImage} alt="" />
      </section>
      <section className="container -divider -secondary">
        <div className="title -pink">Deliver</div>
        <DividerWithIllustration />
        <hr className="divider -light" />
      </section>
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle">Design Components</p>
          <p className="sectionparagraph">
            After designing the Design Tokens, we finally started to create
            Components section: a series of standalone UI elements designed to
            be reusable, like a button. And we specified its functional
            behaviour by building instructions that would allow developers to
            use these components in a logical and consistent way.
          </p>
          <br />
          <br />
          <p className="sectionparagraph">
            The components helped us to create the new section of our iq app,
            called New Architecture:
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="casesection -grid">
        <div className="container">
          <img className="image" src={print1} alt="" />
          <img className="image" src={print2} alt="" />
          <img className="image" src={print3} alt="" />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle">Learnings and how it is going</p>
        </div>
      </section>
      <section className="casesection container -overflowed">
        <div className="holder">
          <svg
            width="712"
            height="289"
            viewBox="0 0 712 289"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 182C32.3704 182 62.7407 182 93.1111 182C118.335 182 148.842 186.123 173.333 180C210.481 170.713 230.571 132.124 225.778 93.7778C222.922 70.9343 200.021 46.3361 184.222 72.6667C158.269 115.923 164.966 151.732 197.111 190C225.572 223.882 271.692 245.061 292.222 190.445C307.469 149.881 301.36 73.9639 338.889 43.7778C380.019 10.6953 399.861 98.864 401.111 122C402.999 156.931 391.529 313.461 322.444 254.889C278.729 217.826 283.382 138.729 320.222 100C339.89 79.3232 390.744 13.308 420.222 56.0001C453.437 104.104 470.779 195.562 440 248C407.138 303.986 348.91 209.02 334.889 182.889C311.702 139.677 361.43 132.867 393.556 143.778C430.993 156.492 476.578 208.548 519.333 183.333C562.179 158.065 548.042 70.7581 525.111 38.0001C485.351 -18.7995 413.947 -1.02165 367.111 35.7778C322.482 70.8439 357.146 108.454 395.556 127.333C443.549 150.923 517.206 148.144 553.111 190.889C601.175 248.108 511.303 282.727 465.778 286.667C424.552 290.234 386.735 278.79 358.889 247.333C336.128 221.623 314.544 174.563 327.778 139.778C344.621 95.505 418.079 110.305 450.889 122C487.04 134.886 530.218 159.407 569.111 162C596.748 163.842 590.873 132.322 612.222 126.222C630.183 121.091 643.173 146.406 664 141.778C674.111 139.531 703.008 124.016 710 138"
              stroke="#D604C1"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="holder">
          <p className="sectionparagraph">
            Building a Design System is a non-linear process. Sometimes it was
            difficult to know if we were building the right thing, but it was
            satisfactory to see it being applied and things starting to connect
            and make sense. Both the Front-End team and the Design team noticed:
          </p>
          <br />
          <br />
          <ul className="sectionlist -highlighted">
            <li>Time saved with Components and Design Tokens ready to use;</li>
            <li>More time to focus on the experience in general;</li>
            <li>Less time fixing bugs and coding.</li>
            <li>Greater proximity between the Design and Front-end teams;</li>
            <li>Knowledge acquired during the process;</li>
          </ul>
        </div>
      </section>
      <section className="container -divider -secondary">
        <hr className="divider -light" />
      </section>
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle">Next steps</p>
          <ul className="sectionlist">
            <li>
              Keep building and improving our Design Tokens and Components;
            </li>
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
      </section>
      <section className="casesection -carousel">
        <Carousel onMount={() => setCarouselMounted(true)} />
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};
export default Blueberry;
