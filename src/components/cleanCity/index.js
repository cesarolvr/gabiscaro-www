import React, { useEffect } from "react";

import { CleanCityIllustration } from "@components/illustrations";
import Carousel from "@components/carousel";
import DividerWithIllustration from "../dividerWithIllustration";

import cleancityImage from "@images/cleancity-lg.png";

import smoothScroll from "@src/utils/smoothScroll";

import "@styles/case.scss";

const CleanCity = () => {
  useEffect(() => {
    smoothScroll();
  }, []);
  return (
    <div className="page -case -cleancity">
      <section className="casesection -hero">
        <div className="container">
          <div className="thumb">
            <CleanCityIllustration filled />
            <img className="image" src={cleancityImage} alt="" />
          </div>
          <div className="content projectinfo">
            <p className="categorylabel">Product Design</p>
            <p className="name">
              [Case Study] <br /> Clean City App
            </p>
          </div>
        </div>
      </section>
      <section className="casesection container -synopsis">
        <div className="item -whatidid">
          <p className="title">What I did</p>
          <ul className="list">
            <li>Research</li>
            <li>User Interface</li>
          </ul>
        </div>
        <div className="item -whenidid">
          <p className="title">When I did</p>
          <p className="text">2019</p>
        </div>
        <div className="item -thechallenge">
          <p className="title">The Challenge</p>
          <p className="sectionparagraph">
            The cooperative "Cidade Mais Limpa” has been trying to create an
            awareness project about the importance of recycling, helping people
            to understand how to recycle and the impact of it.{" "}
            <strong>
              The main objective was to develop, in a time frame of 7 days, a
              proposal for a product or service that helps the cooperative on
              this mission.
            </strong>
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
                <li className="item">Semi-Structured Interview</li>
                <li className="item">Journey Map</li>
              </ol>
            </div>
            <div className="item">
              <p className="title">Define & Develop</p>
              <ol className="list">
                <li className="item">Hypothesis</li>
                <li className="item">Creation of content and interfaces</li>
                <li className="item">User Flow</li>
                <li className="item">Wireframe</li>
              </ol>
            </div>
            <div className="item">
              <p className="title">Deliver</p>
              <ol className="list">
                <li className="item">UI Design</li>
              </ol>
            </div>
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
      <section className="casesection -uxproccess">
        <div className="container">
          <h3 className="sectiontitle">Target Audience</h3>
        </div>
      </section>
      <br />
      <section className="casesection container">
        <div className="holder">
          <p className="sectiontitle -bignumber">01.</p>
          <p className="sectionparagraph">
            Couples who frequently order <br /> takeout during the week and thus{" "}
            <br />
            accumulate a lot of recyclable <br /> materials.
          </p>
        </div>
        <div className="holder">
          <p className="sectiontitle -bignumber">02.</p>
          <p className="sectionparagraph">
            Young people who want to start a recycling routine.
          </p>
        </div>
        <div className="holder">
          <p className="sectiontitle -bignumber">03.</p>
          <p className="sectionparagraph">
            People who casually separate <br /> recyclable materials, but have{" "}
            <br />
            questions about how to separate <br /> the waste for collection
            correctly.
          </p>
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
      <section className="casesection">
        <div className="container">
          <h3 className="sectiontitle">User pains</h3>
        </div>
      </section>
      <section className="casesection container">
        <div className="holder -padding">
          <svg
            width="100%"
            height="100%"
            className="icon"
            viewBox="23 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_745_240" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.0379 4.98211C22.3951 -1.6607 11.625 -1.6607 4.98214 4.98211C-1.66067 11.6249 -1.66068 22.395 4.98213 29.0379L12.9446 37.0003L4.98211 44.9627C-1.6607 51.6055 -1.6607 62.3757 4.98211 69.0185C11.6249 75.6613 22.395 75.6613 29.0379 69.0185L37.0003 61.056L44.9621 69.0179C51.605 75.6607 62.3751 75.6607 69.0179 69.0179C75.6607 62.3751 75.6607 51.6049 69.0179 44.9621L61.0561 37.0003L69.0179 29.0385C75.6607 22.3957 75.6607 11.6255 69.0179 4.98272C62.3751 -1.66009 51.6049 -1.6601 44.9621 4.98271L37.0003 12.9445L29.0379 4.98211Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.0379 4.98211C22.3951 -1.6607 11.625 -1.6607 4.98214 4.98211C-1.66067 11.6249 -1.66068 22.395 4.98213 29.0379L12.9446 37.0003L4.98211 44.9627C-1.6607 51.6055 -1.6607 62.3757 4.98211 69.0185C11.6249 75.6613 22.395 75.6613 29.0379 69.0185L37.0003 61.056L44.9621 69.0179C51.605 75.6607 62.3751 75.6607 69.0179 69.0179C75.6607 62.3751 75.6607 51.6049 69.0179 44.9621L61.0561 37.0003L69.0179 29.0385C75.6607 22.3957 75.6607 11.6255 69.0179 4.98272C62.3751 -1.66009 51.6049 -1.6601 44.9621 4.98271L37.0003 12.9445L29.0379 4.98211Z"
              fill="#FF4522"
            />
            <path
              d="M4.98214 4.98211L2.86082 2.86079H2.86082L4.98214 4.98211ZM29.0379 4.98211L26.9166 7.10343L29.0379 4.98211ZM4.98213 29.0379L2.86081 31.1592L4.98213 29.0379ZM12.9446 37.0003L15.0659 39.1216L17.1872 37.0003L15.0659 34.879L12.9446 37.0003ZM4.98211 44.9627L2.86079 42.8414H2.86079L4.98211 44.9627ZM4.98211 69.0185L7.10343 66.8972H7.10343L4.98211 69.0185ZM29.0379 69.0185L31.1592 71.1398L29.0379 69.0185ZM37.0003 61.056L39.1216 58.9347L37.0003 56.8134L34.879 58.9347L37.0003 61.056ZM69.0179 69.0179L71.1392 71.1392L69.0179 69.0179ZM69.0179 44.9621L66.8966 47.0834V47.0835L69.0179 44.9621ZM61.0561 37.0003L58.9347 34.879L56.8134 37.0003L58.9347 39.1216L61.0561 37.0003ZM69.0179 4.98272L71.1392 2.8614V2.8614L69.0179 4.98272ZM44.9621 4.98271L42.8408 2.86139V2.86139L44.9621 4.98271ZM37.0003 12.9445L34.879 15.0658L37.0003 17.1872L39.1216 15.0658L37.0003 12.9445ZM7.10346 7.10343C12.5747 1.63219 21.4453 1.63219 26.9166 7.10343L31.1592 2.86079C23.3448 -4.9536 10.6752 -4.95359 2.86082 2.86079L7.10346 7.10343ZM7.10345 26.9165C1.63221 21.4453 1.63222 12.5747 7.10346 7.10343L2.86082 2.86079C-4.95356 10.6752 -4.95358 23.3448 2.86081 31.1592L7.10345 26.9165ZM15.0659 34.879L7.10345 26.9165L2.86081 31.1592L10.8232 39.1216L15.0659 34.879ZM7.10343 47.084L15.0659 39.1216L10.8232 34.879L2.86079 42.8414L7.10343 47.084ZM7.10343 66.8972C1.63219 61.4259 1.63219 52.5553 7.10343 47.084L2.86079 42.8414C-4.9536 50.6558 -4.95359 63.3254 2.86079 71.1398L7.10343 66.8972ZM26.9165 66.8972C21.4453 72.3684 12.5747 72.3684 7.10343 66.8972L2.86079 71.1398C10.6752 78.9542 23.3448 78.9542 31.1592 71.1398L26.9165 66.8972ZM34.879 58.9347L26.9165 66.8972L31.1592 71.1398L39.1216 63.1774L34.879 58.9347ZM47.0835 66.8966L39.1216 58.9347L34.879 63.1774L42.8408 71.1392L47.0835 66.8966ZM66.8966 66.8966C61.4253 72.3678 52.5547 72.3678 47.0835 66.8966L42.8408 71.1392C50.6552 78.9536 63.3248 78.9536 71.1392 71.1392L66.8966 66.8966ZM66.8966 47.0835C72.3678 52.5547 72.3678 61.4253 66.8966 66.8966L71.1392 71.1392C78.9536 63.3248 78.9536 50.6552 71.1392 42.8408L66.8966 47.0835ZM58.9347 39.1216L66.8966 47.0834L71.1392 42.8408L63.1774 34.879L58.9347 39.1216ZM66.8965 26.9172L58.9347 34.879L63.1774 39.1216L71.1392 31.1598L66.8965 26.9172ZM66.8965 7.10404C72.3678 12.5753 72.3678 21.4459 66.8965 26.9172L71.1392 31.1598C78.9536 23.3454 78.9536 10.6758 71.1392 2.8614L66.8965 7.10404ZM47.0834 7.10403C52.5547 1.6328 61.4253 1.6328 66.8965 7.10404L71.1392 2.8614C63.3248 -4.95298 50.6552 -4.953 42.8408 2.86139L47.0834 7.10403ZM39.1216 15.0658L47.0834 7.10403L42.8408 2.86139L34.879 10.8232L39.1216 15.0658ZM26.9166 7.10343L34.879 15.0658L39.1216 10.8232L31.1592 2.86079L26.9166 7.10343Z"
              fill="#FD4D40"
              mask="url(#path-1-inside-1_745_240)"
            />
            <path
              d="M27.5 34C28.8807 34 30 32.6569 30 31C30 29.3431 28.8807 28 27.5 28C26.1193 28 25 29.3431 25 31C25 32.6569 26.1193 34 27.5 34Z"
              fill="#400039"
            />
            <path
              d="M46.5 34C47.8807 34 49 32.6569 49 31C49 29.3431 47.8807 28 46.5 28C45.1193 28 44 29.3431 44 31C44 32.6569 45.1193 34 46.5 34Z"
              fill="#400039"
            />
            <path
              d="M46.4977 51C46.2649 50.9975 46.0356 50.9365 45.8274 50.8218C45.6191 50.707 45.4372 50.5415 45.2957 50.3377C44.4291 48.7079 43.2271 47.3253 41.7865 46.3014C40.3459 45.2776 38.707 44.6413 37.0022 44.4437C35.3489 44.7348 33.7655 45.389 32.346 46.3673C30.9265 47.3457 29.6999 48.6283 28.7388 50.1391C28.6273 50.3207 28.4841 50.4762 28.3176 50.5963C28.151 50.7165 27.9645 50.799 27.7688 50.8391C27.5731 50.8791 27.3721 50.8759 27.1775 50.8296C26.983 50.7834 26.7987 50.6949 26.6354 50.5695C26.3171 50.3163 26.0992 49.9381 26.0265 49.513C25.9538 49.0879 26.0319 48.6483 26.2448 48.2848C26.425 47.9868 30.6921 41.1656 36.9422 41C40.7885 41 44.3942 43.351 47.6995 48.2185C47.8179 48.3925 47.904 48.5904 47.953 48.801C48.002 49.0116 48.0128 49.2308 47.9849 49.4461C47.957 49.6613 47.891 49.8684 47.7905 50.0554C47.69 50.2425 47.557 50.406 47.3991 50.5364C47.1565 50.8015 46.8379 50.9654 46.4977 51Z"
              fill="#400039"
            />
          </svg>
          <p className="sectionparagraph">
            They don't know where they can start recycling. They think they need
            to do all the steps at once.
          </p>
        </div>
        <div className="holder -padding">
          <svg
            width="100%"
            height="100%"
            className="icon"
            viewBox="40 15 85 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.5197 35.666L78.7182 21.0231L74.6269 43.2326L74.3258 44.8668L75.9822 44.9996L98.5037 46.805L79.9005 59.6214L78.5319 60.5643L79.6097 61.8294L94.2599 79.0255L72.0426 74.9361L70.408 74.6352L70.2758 76.292L68.478 98.811L55.6538 80.2094L54.7106 78.8414L53.4459 79.9192L36.2575 94.5671L40.3394 72.3514L40.6396 70.7175L38.9836 70.5851L16.472 68.7853L35.0661 55.963L36.4335 55.02L35.3566 53.7555L20.7158 36.5648L42.9238 40.6487L44.5574 40.9491L44.6903 39.2934L46.4977 16.7793L59.3122 35.375L60.2548 36.7429L61.5197 35.666Z"
              fill="#3DDC97"
              stroke="#3DDC97"
              stroke-width="3"
            />
            <path
              d="M47.5 53C48.8807 53 50 51.6569 50 50C50 48.3431 48.8807 47 47.5 47C46.1193 47 45 48.3431 45 50C45 51.6569 46.1193 53 47.5 53Z"
              fill="#400039"
            />
            <path
              d="M66.5 53C67.8807 53 69 51.6569 69 50C69 48.3431 67.8807 47 66.5 47C65.1193 47 64 48.3431 64 50C64 51.6569 65.1193 53 66.5 53Z"
              fill="#400039"
            />
            <path
              d="M66.4977 70C66.2649 69.9975 66.0356 69.9365 65.8274 69.8218C65.6191 69.707 65.4372 69.5415 65.2957 69.3377C64.4291 67.7079 63.2271 66.3253 61.7865 65.3014C60.3459 64.2776 58.707 63.6413 57.0022 63.4437C55.3489 63.7348 53.7655 64.389 52.346 65.3673C50.9265 66.3457 49.6999 67.6283 48.7388 69.1391C48.6273 69.3207 48.4841 69.4762 48.3176 69.5963C48.151 69.7165 47.9645 69.799 47.7688 69.8391C47.5731 69.8791 47.3721 69.8759 47.1775 69.8296C46.983 69.7834 46.7987 69.6949 46.6354 69.5695C46.3171 69.3163 46.0992 68.9381 46.0265 68.513C45.9538 68.0879 46.0319 67.6483 46.2448 67.2848C46.425 66.9868 50.6921 60.1656 56.9422 60C60.7885 60 64.3942 62.351 67.6995 67.2185C67.8179 67.3925 67.904 67.5904 67.953 67.801C68.002 68.0116 68.0128 68.2308 67.9849 68.4461C67.957 68.6613 67.891 68.8684 67.7905 69.0554C67.69 69.2425 67.557 69.406 67.3991 69.5364C67.1565 69.8015 66.8379 69.9654 66.4977 70Z"
              fill="#400039"
            />
          </svg>

          <p className="sectionparagraph">
            They have a very busy routine between work and college.
          </p>
        </div>
        <div className="holder -padding">
          <svg
            width="100%"
            height="100%"
            className="icon"
            viewBox="23 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.9444 47.6818L69.5477 48.0894V48.6989V48.7204V48.768L69.5507 48.8155C70.0415 56.5389 65.0949 63.4773 57.8674 65.3684L57.708 65.4101L57.5615 65.4854L57.5405 65.4962L57.1671 65.6881L56.9476 66.0459C52.9409 72.5766 45.005 75.208 38.0699 72.3593L37.5 72.1252L36.9301 72.3593C29.995 75.208 22.0591 72.5766 18.0524 66.0459L17.8328 65.688L17.4593 65.4961L17.4384 65.4853L17.2919 65.4101L17.1326 65.3684C9.90505 63.4773 4.95853 56.5389 5.44931 48.8155L5.45233 48.768V48.7204V48.6989V48.0895L5.05565 47.6818C0.314325 41.7651 0.315399 33.2234 5.05518 27.3187L5.45233 26.9106V26.3012V26.2796V26.232L5.44931 26.1845C4.95853 18.4611 9.90505 11.5227 17.1326 9.6316L17.2919 9.58992L17.4384 9.51466L17.4593 9.50389L17.8328 9.312L18.0524 8.95409C22.0591 2.42342 29.995 -0.207985 36.9301 2.64072L37.5 2.87484L38.0699 2.64072C45.005 -0.207985 52.9409 2.42342 56.9476 8.95409L57.1671 9.31192L57.5405 9.50381L57.5615 9.51458L57.708 9.58989L57.8674 9.6316C65.0949 11.5227 70.0415 18.4611 69.5507 26.1845L69.5477 26.232V26.2796V26.3012V26.9107L69.9449 27.3188C74.6846 33.2234 74.6856 41.7651 69.9444 47.6818Z"
              fill="#9CEAEF"
              stroke="#9CEAEF"
              stroke-width="3"
            />
            <path
              d="M28.5 33C29.8807 33 31 31.6569 31 30C31 28.3431 29.8807 27 28.5 27C27.1193 27 26 28.3431 26 30C26 31.6569 27.1193 33 28.5 33Z"
              fill="#400039"
            />
            <path
              d="M47.5 33C48.8807 33 50 31.6569 50 30C50 28.3431 48.8807 27 47.5 27C46.1193 27 45 28.3431 45 30C45 31.6569 46.1193 33 47.5 33Z"
              fill="#400039"
            />
            <path
              d="M47.4977 50C47.2649 49.9975 47.0356 49.9365 46.8274 49.8218C46.6191 49.707 46.4372 49.5415 46.2957 49.3377C45.4291 47.7079 44.2271 46.3253 42.7865 45.3014C41.3459 44.2776 39.707 43.6413 38.0022 43.4437C36.3489 43.7348 34.7655 44.389 33.346 45.3673C31.9265 46.3457 30.6999 47.6283 29.7388 49.1391C29.6273 49.3207 29.4841 49.4762 29.3176 49.5963C29.151 49.7165 28.9645 49.799 28.7688 49.8391C28.5731 49.8791 28.3721 49.8759 28.1775 49.8296C27.983 49.7834 27.7987 49.6949 27.6354 49.5695C27.3171 49.3163 27.0992 48.9381 27.0265 48.513C26.9538 48.0879 27.0319 47.6483 27.2448 47.2848C27.425 46.9868 31.6921 40.1656 37.9422 40C41.7885 40 45.3942 42.351 48.6995 47.2185C48.8179 47.3925 48.904 47.5904 48.953 47.801C49.002 48.0116 49.0128 48.2308 48.9849 48.4461C48.957 48.6613 48.891 48.8684 48.7905 49.0554C48.69 49.2425 48.557 49.406 48.3991 49.5364C48.1565 49.8015 47.8379 49.9654 47.4977 50Z"
              fill="#400039"
            />
          </svg>

          <p className="sectionparagraph">
            They find it difficult to find practical information on recycling.
          </p>
        </div>
        <div className="holder -padding">
          <svg
            width="100%"
            height="100%"
            className="icon"
            viewBox="0 0 127 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M126.982 20.1285L127 63C120.145 63 114.818 59.787 110.691 55.692C105.036 50.085 98.1455 50.085 92.4909 55.692C88.3636 59.787 83.0364 63 76.1818 63C69.3273 63 64 59.787 59.8727 55.692C54.2182 50.085 47.3273 50.085 41.6727 55.692C37.5455 59.787 32.2182 63 25.3636 63C11.5091 63 4.07273 50.148 0 43.0605H0.0181818L0 0C6.85455 0 12.1818 3.213 16.3091 7.308C21.9636 12.915 28.8545 12.915 34.5091 7.308C38.6364 3.213 43.9636 0 50.8182 0C57.6727 0 63 3.213 67.1273 7.308C72.7818 12.915 79.6727 12.915 85.3273 7.308C89.4545 3.213 94.7818 0 101.636 0C115.527 0 122.891 13.041 126.964 20.1285H126.982Z"
              fill="#D604C1"
            />
            <path
              d="M54.5 27C55.8807 27 57 25.6569 57 24C57 22.3431 55.8807 21 54.5 21C53.1193 21 52 22.3431 52 24C52 25.6569 53.1193 27 54.5 27Z"
              fill="#400039"
            />
            <path
              d="M73.5 27C74.8807 27 76 25.6569 76 24C76 22.3431 74.8807 21 73.5 21C72.1193 21 71 22.3431 71 24C71 25.6569 72.1193 27 73.5 27Z"
              fill="#400039"
            />
            <path
              d="M73.4977 44C73.2649 43.9975 73.0356 43.9365 72.8274 43.8218C72.6191 43.707 72.4372 43.5415 72.2957 43.3377C71.4291 41.7079 70.2271 40.3253 68.7865 39.3014C67.3459 38.2776 65.707 37.6413 64.0022 37.4437C62.3489 37.7348 60.7655 38.389 59.346 39.3673C57.9265 40.3457 56.6999 41.6283 55.7388 43.1391C55.6273 43.3207 55.4841 43.4762 55.3176 43.5963C55.151 43.7165 54.9645 43.799 54.7688 43.8391C54.5731 43.8791 54.3721 43.8759 54.1775 43.8296C53.983 43.7834 53.7987 43.6949 53.6354 43.5695C53.3171 43.3163 53.0992 42.9381 53.0265 42.513C52.9538 42.0879 53.0319 41.6483 53.2448 41.2848C53.425 40.9868 57.6921 34.1656 63.9422 34C67.7885 34 71.3942 36.351 74.6995 41.2185C74.8179 41.3925 74.904 41.5904 74.953 41.801C75.002 42.0116 75.0128 42.2308 74.9849 42.4461C74.957 42.6613 74.891 42.8684 74.7905 43.0554C74.69 43.2425 74.557 43.406 74.3991 43.5364C74.1565 43.8015 73.8379 43.9654 73.4977 44Z"
              fill="#400039"
            />
          </svg>

          <p className="sectionparagraph">
            They do not see value in recycling (“… what is the use of recycling,
            if most do not do it?”).
          </p>
        </div>
      </section>
      <br />
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
      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle">
              Desk Research and Semi-Structured Interview
            </h3>
            <p className="sectionparagraph">
              In order to gather quantitative data, I carried out a Desk
              Research on the topic of recycling and found interesting data from
              a survey carried out in 2018 by Ibope, commissioned by Ambev, with
              1,1816 people in all the states of Brazil. This research
              reinforces some presented pains:
            </p>
          </div>
        </div>
      </section>
      <section className="casesection">
        <div className="container">
          <div className="holder -cellwrapper">
            <div className="cell">
              <p className="sectiontitle -bignumber">98%</p>
              <p className="sectionparagraph">
                think recycling is important to future's planet.
              </p>
            </div>
            <div className="cell">
              <p className="sectiontitle -bignumber">66%</p>
              <p className="sectionparagraph">
                claim to know little or nothing about selective collection.
              </p>
            </div>
            <div className="cell">
              <p className="sectiontitle -bignumber">81%</p>
              <p className="sectionparagraph">
                claim to know little or nothing about cooperatives of recycling.
              </p>
            </div>
            <div className="cell">
              <p className="sectiontitle -bignumber">71%</p>
              <p className="sectionparagraph">
                disagree that the garbage it is no longer your responsibility
                when thrown away.
              </p>
            </div>
          </div>
          <div className="holder">
            <p className="sectionparagraph">
              For qualitative data, an interview was carried out with 7 people,
              aged 22 to 30 years, male and female. Some people who already had
              the habit of recycling and others who had just incorporated it
              into their routine were interviewed. With the help of the CSD
              Matrix, I developed some questions focused on the difficulty of
              the recycling process:
            </p>
            <br />
            <br />
            <ul className="sectionlist -highlighted">
              <li>Tell me about what you think about recycling.</li>
              <li>
                Tell me what goes through (went through) your mind when you
                separate (separate) the garbage for recycling.
              </li>
              <li>
                Do you know how to identify the correct disposal for each type
                of waste?
              </li>
              <li>
                Is there something that would make the recycling process better,
                easier and more intuitive?
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section className="container -divider">
        <hr className="divider -light" />
      </section>
      <br />

      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle">Interview Results</h3>
            <p className="sectionparagraph">
              With the interview, I could see that the pain points presented
              previously were reinforced, such as the difficulty of finding
              practical information on recycling. But other points also emerged:
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />

      <section className="casesection container">
        <div className="holder -padding">
          <p className="sectiontitle -bignumber">71%</p>
          <p className="sectionparagraph">
            of the interviewees only sort the <br /> waste for collection, because
            there is this service convenience in ther building or street.
          </p>
        </div>
        <div className="holder -padding">
          <p className="sectiontitle -bignumber">85%</p>
          <p className="sectionparagraph">
            say they would not have the <br /> availability to take the waste to a
            collection point. And that they <br />wouldn't recylce if that were the
            case.
          </p>
        </div>
        <div className="holder -padding">
          <p className="sectiontitle -bignumber">85%</p>
          <p className="sectionparagraph">
            also state that they do not know what is the correct handling for
            the packaging that will be discarded.
          </p>
        </div>
      </section>
      <br />
      <br />
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
export default CleanCity;
