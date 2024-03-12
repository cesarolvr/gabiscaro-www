import React from "react";

import { BoavistaIllustration } from "@components/illustrations";
import Carousel from "@components/carousel";
import DividerWithIllustration from "../dividerWithIllustration";

import cleancityImage from "@images/cleancity/cleancity-lg.png";
import allprintsImage from "@images/cleancity/allprints.png";
import wireframesImage from "@images/cleancity/wireframes.png";
import userflowImage from "@images/cleancity/userflow.png";
import usermapImage from "@images/cleancity/usermap.png";
import print1 from "@images/cleancity/print-1.png";
import print2 from "@images/cleancity/print-2.png";
import print3 from "@images/cleancity/print-3.png";
import videoOnboarding from "@images/cleancity/print-onboarding.mp4";
import videoQuiz from "@images/cleancity/print-quiz.mp4";
import printWaste from "@images/cleancity/print-waste.png";
import printRedeem1 from "@images/cleancity/print-redeem-1.png";
import printRedeem2 from "@images/cleancity/print-redeem-2.png";

import prev1 from "@images/cleancity/prev-1.png";
import prev2 from "@images/cleancity/prev-2.png";
import prev3 from "@images/cleancity/prev-3.png";

// Hooks
import useScroll from "@hooks/useScroll";

import "@styles/case.scss";

const BoaVista = () => {
  useScroll();
  return (
    <div className="page -case -cleancity">
      <section className="casesection -hero">
        <div className="container">
          <div className="thumb" data-scroll>
            <div className="opacity" style={{ transitionDelay: "200ms" }}>
              <BoavistaIllustration filled />
            </div>
            <img
              className="image opacity"
              style={{ transitionDelay: "400ms" }}
              src={cleancityImage}
              alt=""
            />
          </div>
          <div className="content projectinfo">
            <div data-scroll>
              <div className="tags opacity">
                {["ux", "research", "product thinking"].map((item, index) => {
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
              <div className="target">iq + Boa Vista</div>
            </div>
          </div>
        </div>
      </section>
      <section className="casesection container -synopsis">
        <div className="item">
          <div data-scroll className="title">
            <div className="target">The Challenge</div>
          </div>
          <div data-scroll className="sectionparagraph">
            <div className="opacity" style={{ transitionDelay: "400ms" }}>
              The Stakeholders from iq with the ones from Boa Vista had an idea
              to create a new product for people who were targeted with bad
              Credit Score. The main hypothesis was that they didn't want to pay
              their debts to the financial companies and with that they chose to
              remain with a bad credit score. As a designer, we always have to
              question every hypothesis and start to dig into the problem, so my
              colleague Andrey and I had the responsibility to go deeper and
              learn if this was true.
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
              <li>Create a Research Plan for this challenge;</li>
              <li>Facilitate the interviews;</li>
              <li>Make a Thematic Analysis.</li>
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
            <p>3 months in 2022</p>
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
      <section className="casesection -uxproccess">
        <div className="container">
          <h3 className="sectiontitle">
            Research Process - Before, During and After the Interviews
          </h3>
        </div>
        <div className="container">
          <div className="processes">
            <div className="item">
              <p className="title">Before</p>
              <ol className="list">
                <li className="item">Doing the research plan</li>
                <li className="item -sub">Main goals</li>
                <li className="item -sub">Research questions</li>
                <li className="item -sub">How many participate?</li>
              </ol>
            </div>
            <div className="item">
              <p className="title">During</p>
              <ol className="list">
                <li className="item">Interview Questions</li>
                <li className="item">Study Interview</li>
              </ol>
            </div>
            <div className="item">
              <p className="title">After</p>
              <ol className="list">
                <li className="item">Analyzing qualitative data</li>
                <li className="item">Findings</li>
                <li className="item">How might we?</li>
                <li className="item">User Needs</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="container -divider -secondary">
        <div className="title">Before</div>
        <DividerWithIllustration />
        <hr className="divider -light" />
      </section>
      <br />
      <br />
      <div className="casesection -targetaudience">
        <div className="container">
          <div className="holder">
            <div className="icon -left">
              <svg
                width="100%"
                height="100%"
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
            </div>
            <div className="icon -right">
              <svg
                width="239"
                height="265"
                viewBox="0 0 239 265"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M92.0863 52.6327L119.589 29.217L113.046 64.733L112.745 66.3672L114.401 66.5L150.416 69.3869L120.667 89.8818L119.298 90.8247L120.376 92.0898L143.804 119.589L108.275 113.049L106.641 112.748L106.509 114.405L103.634 150.415L83.1264 120.67L82.1833 119.302L80.9186 120.379L53.4321 143.804L59.9595 108.278L60.2597 106.644L58.6037 106.512L22.6052 103.634L52.339 83.1295L53.7063 82.1866L52.6294 80.922L29.2171 53.432L64.7303 59.9626L66.3639 60.263L66.4968 58.6073L69.387 22.6051L89.8788 52.3417L90.8214 53.7096L92.0863 52.6327Z"
                  fill="#3DDC97"
                  stroke="#3DDC97"
                  strokeWidth="3"
                />
                <path
                  d="M71.5 81C73.433 81 75 79.433 75 77.5C75 75.567 73.433 74 71.5 74C69.567 74 68 75.567 68 77.5C68 79.433 69.567 81 71.5 81Z"
                  fill="#400039"
                />
                <path
                  d="M100 81C102.209 81 104 79.433 104 77.5C104 75.567 102.209 74 100 74C97.7909 74 96 75.567 96 77.5C96 79.433 97.7909 81 100 81Z"
                  fill="#400039"
                />
                <path
                  d="M99.7465 103C99.3973 102.997 99.0534 102.918 98.741 102.768C98.4286 102.619 98.1558 102.404 97.9435 102.139C96.6437 100.02 94.8406 98.2228 92.6797 96.8919C90.5188 95.5609 88.0605 94.7336 85.5033 94.4768C83.0234 94.8553 80.6482 95.7057 78.519 96.9775C76.3898 98.2494 74.5498 99.9168 73.1083 101.881C72.9409 102.117 72.7261 102.319 72.4764 102.475C72.2266 102.631 71.9468 102.739 71.6532 102.791C71.3597 102.843 71.0582 102.839 70.7663 102.779C70.4745 102.718 70.1981 102.603 69.9531 102.44C69.4757 102.111 69.1488 101.62 69.0398 101.067C68.9307 100.514 69.0479 99.9427 69.3671 99.4702C69.6376 99.0828 76.0382 90.2152 85.4134 90C91.1827 90 96.5913 93.0563 101.549 99.3841C101.727 99.6102 101.856 99.8675 101.929 100.141C102.003 100.415 102.019 100.7 101.977 100.98C101.935 101.26 101.837 101.529 101.686 101.772C101.535 102.015 101.335 102.228 101.099 102.397C100.735 102.742 100.257 102.955 99.7465 103Z"
                  fill="#400039"
                />
                <mask id="path-5-inside-1_401_67" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M111.155 190.249C102.728 186.098 92.5307 189.565 88.3798 197.992C84.2288 206.42 87.6956 216.617 96.1232 220.768L106.225 225.743L101.249 235.845C97.0983 244.272 100.565 254.469 108.993 258.62C117.42 262.771 127.617 259.304 131.768 250.877L136.744 240.775L146.845 245.75C155.272 249.901 165.469 246.434 169.62 238.007C173.771 229.579 170.304 219.382 161.877 215.231L151.776 210.256L156.751 200.155C160.902 191.728 157.435 181.531 149.007 177.38C140.58 173.229 130.383 176.696 126.232 185.123L121.257 195.224L111.155 190.249Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M111.155 190.249C102.728 186.098 92.5307 189.565 88.3798 197.992C84.2288 206.42 87.6956 216.617 96.1232 220.768L106.225 225.743L101.249 235.845C97.0983 244.272 100.565 254.469 108.993 258.62C117.42 262.771 127.617 259.304 131.768 250.877L136.744 240.775L146.845 245.75C155.272 249.901 165.469 246.434 169.62 238.007C173.771 229.579 170.304 219.382 161.877 215.231L151.776 210.256L156.751 200.155C160.902 191.728 157.435 181.531 149.007 177.38C140.58 173.229 130.383 176.696 126.232 185.123L121.257 195.224L111.155 190.249Z"
                  fill="#FF4522"
                />
                <path
                  d="M88.3798 197.992L85.6885 196.667L85.6885 196.667L88.3798 197.992ZM111.155 190.249L109.83 192.94L111.155 190.249ZM96.1232 220.768L94.7976 223.459L96.1232 220.768ZM106.225 225.743L108.916 227.069L110.242 224.377L107.55 223.052L106.225 225.743ZM101.249 235.845L98.558 234.519L98.558 234.519L101.249 235.845ZM108.993 258.62L110.318 255.929L110.318 255.929L108.993 258.62ZM131.768 250.877L134.459 252.202L131.768 250.877ZM136.744 240.775L138.069 238.084L135.378 236.758L134.052 239.45L136.744 240.775ZM169.62 238.007L172.311 239.332L169.62 238.007ZM161.877 215.231L160.551 217.923L160.551 217.923L161.877 215.231ZM151.776 210.256L149.084 208.931L147.759 211.622L150.45 212.948L151.776 210.256ZM149.007 177.38L150.333 174.689L150.333 174.689L149.007 177.38ZM126.232 185.123L123.541 183.798L123.541 183.798L126.232 185.123ZM121.257 195.224L119.931 197.916L122.623 199.241L123.948 196.55L121.257 195.224ZM91.071 199.318C94.4899 192.377 102.888 189.521 109.83 192.94L112.481 187.557C102.567 182.674 90.5716 186.753 85.6885 196.667L91.071 199.318ZM97.4487 218.076C90.5075 214.657 87.6521 206.259 91.071 199.318L85.6885 196.667C80.8054 206.58 84.8837 218.576 94.7976 223.459L97.4487 218.076ZM107.55 223.052L97.4487 218.076L94.7976 223.459L104.899 228.434L107.55 223.052ZM103.941 237.17L108.916 227.069L103.534 224.418L98.558 234.519L103.941 237.17ZM110.318 255.929C103.377 252.51 100.522 244.112 103.941 237.17L98.558 234.519C93.6749 244.433 97.7532 256.428 107.667 261.311L110.318 255.929ZM129.077 249.551C125.658 256.492 117.259 259.348 110.318 255.929L107.667 261.311C117.581 266.195 129.576 262.116 134.459 252.202L129.077 249.551ZM134.052 239.45L129.077 249.551L134.459 252.202L139.435 242.101L134.052 239.45ZM148.17 243.059L138.069 238.084L135.418 243.466L145.519 248.442L148.17 243.059ZM166.929 236.681C163.51 243.623 155.111 246.478 148.17 243.059L145.519 248.442C155.433 253.325 167.428 249.246 172.311 239.332L166.929 236.681ZM160.551 217.923C167.492 221.342 170.348 229.74 166.929 236.681L172.311 239.332C177.194 229.419 173.116 217.423 163.202 212.54L160.551 217.923ZM150.45 212.948L160.551 217.923L163.202 212.54L153.101 207.565L150.45 212.948ZM154.06 198.83L149.084 208.931L154.467 211.582L159.442 201.481L154.06 198.83ZM147.682 180.071C154.623 183.49 157.478 191.889 154.06 198.83L159.442 201.481C164.325 191.567 160.247 179.572 150.333 174.689L147.682 180.071ZM128.923 186.449C132.342 179.508 140.741 176.652 147.682 180.071L150.333 174.689C140.419 169.806 128.424 173.884 123.541 183.798L128.923 186.449ZM123.948 196.55L128.923 186.449L123.541 183.798L118.566 193.899L123.948 196.55ZM109.83 192.94L119.931 197.916L122.582 192.533L112.481 187.557L109.83 192.94Z"
                  fill="#FD4D40"
                  mask="url(#path-5-inside-1_401_67)"
                />
                <path
                  d="M118.298 216.083C119.605 215.622 120.233 213.927 119.699 212.298C119.166 210.67 117.674 209.724 116.367 210.185C115.06 210.646 114.432 212.341 114.966 213.97C115.499 215.598 116.991 216.544 118.298 216.083Z"
                  fill="#400039"
                />
                <path
                  d="M136.287 209.733C137.594 209.272 138.222 207.578 137.688 205.949C137.155 204.32 135.663 203.374 134.356 203.835C133.048 204.297 132.421 205.991 132.954 207.62C133.488 209.249 134.98 210.195 136.287 209.733Z"
                  fill="#400039"
                />
                <path
                  d="M141.757 226.445C141.536 226.521 141.299 226.537 141.065 226.494C140.831 226.451 140.605 226.349 140.406 226.196C139.061 224.883 137.478 223.926 135.784 223.401C134.091 222.876 132.334 222.798 130.656 223.174C129.185 224.013 127.896 225.185 126.867 226.621C125.838 228.057 125.09 229.728 124.666 231.534C124.619 231.75 124.534 231.951 124.415 232.125C124.296 232.298 124.146 232.442 123.973 232.547C123.801 232.651 123.609 232.715 123.41 232.735C123.211 232.754 123.008 232.729 122.813 232.66C122.43 232.518 122.102 232.219 121.897 231.825C121.691 231.432 121.623 230.974 121.708 230.545C121.783 230.192 123.627 222.06 129.491 219.809C133.133 218.523 137.303 219.629 142 223.309C142.168 223.441 142.313 223.607 142.427 223.797C142.541 223.988 142.622 224.2 142.665 224.421C142.708 224.642 142.712 224.867 142.677 225.085C142.642 225.302 142.569 225.507 142.461 225.688C142.317 226.03 142.068 226.298 141.757 226.445Z"
                  fill="#400039"
                />
                <path
                  d="M233.944 133.682L233.548 134.089V134.699V134.72V134.768L233.551 134.816C234.041 142.539 229.095 149.477 221.867 151.368L221.708 151.41L221.561 151.485L221.541 151.496L221.167 151.688L220.948 152.046C216.941 158.577 209.005 161.208 202.07 158.359L201.5 158.125L200.93 158.359C193.995 161.208 186.059 158.577 182.052 152.046L181.833 151.688L181.459 151.496L181.438 151.485L181.292 151.41L181.133 151.368C173.905 149.477 168.959 142.539 169.449 134.816L169.452 134.768V134.72V134.699V134.09L169.056 133.682C164.314 127.765 164.315 119.223 169.055 113.319L169.452 112.911V112.301V112.28V112.232L169.449 112.184C168.959 104.461 173.905 97.5227 181.133 95.6316L181.292 95.5899L181.438 95.5147L181.459 95.5039L181.833 95.312L182.052 94.9541C186.059 88.4234 193.995 85.792 200.93 88.6407L201.5 88.8748L202.07 88.6407C209.005 85.792 216.941 88.4234 220.948 94.9541L221.167 95.3119L221.541 95.5038L221.561 95.5146L221.708 95.5899L221.867 95.6316C229.095 97.5227 234.041 104.461 233.551 112.184L233.548 112.232V112.28V112.301V112.911L233.945 113.319C238.685 119.223 238.686 127.765 233.944 133.682Z"
                  fill="#9CEAEF"
                  stroke="#9CEAEF"
                  strokeWidth="3"
                />
                <path
                  d="M192.5 118.229C193.881 118.229 195 116.835 195 115.115C195 113.395 193.881 112 192.5 112C191.119 112 190 113.395 190 115.115C190 116.835 191.119 118.229 192.5 118.229Z"
                  fill="#400039"
                />
                <path
                  d="M211.5 118.229C212.881 118.229 214 116.835 214 115.115C214 113.395 212.881 112 211.5 112C210.119 112 209 113.395 209 115.115C209 116.835 210.119 118.229 211.5 118.229Z"
                  fill="#400039"
                />
                <path
                  d="M211.498 135.88C211.265 135.877 211.036 135.814 210.827 135.695C210.619 135.575 210.437 135.404 210.296 135.192C209.429 133.5 208.227 132.064 206.786 131.001C205.346 129.938 203.707 129.278 202.002 129.073C200.349 129.375 198.765 130.054 197.346 131.07C195.927 132.086 194.7 133.417 193.739 134.986C193.627 135.174 193.484 135.336 193.318 135.461C193.151 135.585 192.965 135.671 192.769 135.713C192.573 135.754 192.372 135.751 192.178 135.703C191.983 135.655 191.799 135.563 191.635 135.433C191.317 135.17 191.099 134.777 191.027 134.336C190.954 133.894 191.032 133.438 191.245 133.061C191.425 132.751 195.692 125.669 201.942 125.497C205.788 125.497 209.394 127.938 212.7 132.992C212.818 133.172 212.904 133.378 212.953 133.597C213.002 133.815 213.013 134.043 212.985 134.266C212.957 134.49 212.891 134.705 212.79 134.899C212.69 135.093 212.557 135.263 212.399 135.398C212.157 135.674 211.838 135.844 211.498 135.88Z"
                  fill="#400039"
                />
              </svg>
            </div>
            <h3 className="sectiontitle">Main Goal</h3>
            <ul className="sectionlist">
              <li>
                We want to learn how this group of people with bad Credit Score
                relate to financial products daily, in a more broad way, for
                example: what they want, what they can access, where they
                search, and what they understand of it.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle">Research question</h3>
            <ul className="sectionlist">
              <li>
                Before asking the right questions to the users, we developed the
                Research questions to be our base. And aligned with that, there
                is the Related product-development questions, which are
                questions that we need to consider when developing the product
                for the user's needs.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section className="casesection">taaaable</section>
      <br />
      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle">How many participants?</h3>
            <ul className="sectionlist">
              <li>We decided to interview between 5-8 participants.</li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="container -divider -secondary">
        <div className="title">During</div>
        <DividerWithIllustration />
        <hr className="divider -light" />
      </section>
      <br />
      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle">Interview Questions</h3>
            <ul className="sectionlist">
              <li>
                One important thing about the Interview Questions is that we
                need to let people think for themselves about how to answer the
                question, not lead them how.
              </li>
              <li>And the other one is to avoid biases.</li>
            </ul>
            <br />
            <p className="sectionparagraph">
              The first thing that I asked them was to tell me more about
              themselves, to understand their background. After that, I started
              to ask more about their financial lives and how they were
              familiarized with terms of the market, for example, "bad credit
              score". Next are some of the questions asked to the participants:
            </p>

            <br />

            <ul className="sectionlist interviewquestionlist">
              <li>
                2. Would you mind talking a little about your current financial
                situation?
              </li>
              <li className="-sub">a. Tell me how you feel about this.</li>
              <li className="-sub">
                b. Do you use any tools to educate yourself financially?
              </li>
              <li>
                3. Tell me a about a time you got a financial product (credit
                card, loan, financing).
              </li>
              <li className="-sub">
                a. What was your contracting experience like?
              </li>
              <li className="-sub">
                b. Where did you get this financial product?
              </li>
              <li className="-subsub">i. How did you get to this channel?</li>
              <li className="-sub">
                c. After the contract, were there any unexpected situations?
              </li>
              <li className="-subsub">i. Tell me a little more about this.</li>
              <li>
                4. Can you explain to me in your own words what it means to have
                a bad credit score?
              </li>
              <li className="-sub">a. Have you ever been in this situation?</li>
              <li className="-subsub">
                i. Tell me a little bit more about this.
              </li>
              <li className="-subsub">
                i. How did you find out you were in this situation?
              </li>
              <li className="-subsubsub">
                1. Which channel do you prefer to be charged for
              </li>
              <li className="-subsubsub">
                2. How often would you like to be charged for?
              </li>
              <li className="-sub">
                b. What were the things you did to get out of this situation?
              </li>
              <li className="-sub">
                c. Do you understand that 'bad credit score’ can cause
                complications when getting a financial product?
              </li>
              <li className="-subsub">i. Tell me more about this.</li>
              <li>
                5. Can you explain to me in your own words what credit score
                means
              </li>
              <li className="-sub">
                a. Have you ever used your credit score to gain credit? (credit
                card, loan, financing)
              </li>
              <li className="-sub">b. Do you currently monitor your score?</li>
              <li className="-subsub">
                i. Where do you do this monitoring? / Why don't you follow up?
              </li>
              <li className="-subsub">
                ii. How often do you check your credit score?
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle">Study Overview</h3>
            <p className="sectionparagraph">
              We did remote and semi-structured interviews, which lasted around
              30 minutes. Interviews were recorded and transcribed and a
              thematic analysis was carried out to uncover key themes.
            </p>
            <br />
            <p className="sectionparagraph">
              7 people of various ages and genders were interviewed; coming from
              different regions of Brazil; We looked for people based on their
              bad credit score. You can see a more detailed recruitment plan
              below:
            </p>
          </div>
        </div>
      </section>

      <section className="casesection">
        <div className="holder">
          <p className="sectionparagraph">other table</p>
        </div>
      </section>

      <br />
      <br />

      <section className="container -divider -secondary">
        <div className="title -black">After</div>
        <DividerWithIllustration flagBg="black" />
        <hr className="divider -light" />
      </section>

      <br />
      <br />

      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle">Analyzing qualitative data</h3>
            <p className="sectionparagraph">
              To transcribe and find the most recurrent topics in each and all
              of the interviews, Andrey and I used a tool for coding (thematic
              analysis) and transcribing the material, which is called Dovetail.
              Unfortunately, I don't have any print screen of coding, but I can
              say that Dovetail saved our lives.
            </p>
            <br />
            <p className="sectionparagraph">
              {" "}
              We divided the findings between Codes and Themes. Codes are labels
              to represent a piece of what the person said in the interview; and
              Themes is when a group of labels (or codes) repeats during the
              interviews. And the point of this thematic analysis is to expose
              themes.
            </p>
            <br />
            <p className="sectionparagraph">
              Below are some of the key themes:
            </p>
          </div>
        </div>
      </section>

      <section className="casesection">
        <div className="container">
          <div className="holder">image</div>
        </div>
        <div className="container">
          <div className="holder">
            <p className="sectionparagraph">And here are some codes:</p>
          </div>
        </div>
        <div className="container">
          <div className="holder">image 2</div>
        </div>
      </section>

      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle">Findings and how might we</h3>
            <p className="sectionparagraph">
              In total, we had three main key findings and for each one we tried
              to think how we could solve their needs. Ideally, these findings
              should help the stakeholders and designers find an agreement about
              what solution would be. An app? An Youtube channel? What?
            </p>
            <br />
            <p className="sectionparagraph">
              Below you can see our findings and the correspondent ’How Might
              We’.
            </p>
          </div>
        </div>
      </section>

      <section className="casesection">
        <div className="container">
          <div className="holder">
            <p className="sectiontitle -bignumber">Key finding 1</p>
            <br />
            <p className="sectionparagraph -emphasis -purple">
              <b>
                People want to renegotiate their debts but with better interest
                rates and installment conditions.
              </b>
            </p>
            <br />
            <p className="sectionparagraph">
              The main reasons that participants are unable to pay their debts
              is because of high interest rates and also because they do not
              have money for even the basic needs. When they tried to make
              agreements, they were unable to comply due to external factors,
              such as a difficult situation in the country, illnesses, etc…
            </p>
            <br />
            <br />
            <p className="sectionparagraph">
              The experience that most participants had with renegotiation
              companies was negative, as they lack empathy and understanding of
              the situation they are currently experiencing. These participants
              end up feeling uncomfortable by the situation that is out of
              control and by excessive contact from companies, but in a way they
              know that this is not their choice, but rather a conscious debt.
            </p>
            <br />
            <br />
            <p className="sectionparagraph -pink">
              A quote from an interviewer: "I even tried to reach a negotiation
              in the last two years but everything started to escalate to the
              point that I couldn't do it but also because we try to negotiate
              and then something always happens…." "....Nowadays it's just the
              basics, there are no luxuries and the basics are already quite
              difficult…." Tamires
            </p>
            <br />
            <br />
            <p className="sectionparagraph -emphasis -orange">
              <b>
                How might we help users pay their debts while maintaining good
                interest and installment conditions?
              </b>
            </p>
            <br />
            <br />
            <p className="sectionparagraph -emphasis -orange">
              <b>
                How might we develop more empathetic solutions for our users?
              </b>
            </p>
          </div>
        </div>
      </section>
      <br />
      <section className="casesection">
        <div className="container">
          <div className="holder">
            <p className="sectiontitle -bignumber">Key finding 2</p>
            <br />
            <p className="sectionparagraph -emphasis -purple">
              <b>
                When people are overcharged, they become uncomfortable and tend
                to ignore possible agreements.
              </b>
            </p>
            <br />
            <p className="sectionparagraph">
              When people are overwhelmed, they become uncomfortable and tend to
              ignore possible agreements.
            </p>
            <br />
            <br />
            <p className="sectionparagraph">
              When people have negative experiences, they are unlikely to gain
              trust again. Many of our participants described countless times
              that they missed a billing call or a possible settlement, due to
              the number of times these companies called during the day. This
              generates a lot of frustration, as it ends up creating
              expectations in people.
            </p>
            <br />
            <br />
            <p className="sectionparagraph -pink">
              "The call is usually on silent so you don't even receive a call
              (shakes head in denial)…" Juliana
            </p>
            <br />
            <br />
            <p className="sectionparagraph -emphasis -orange">
              <b>
                How might we make the conditions for repaying the debt more
                understandable?
              </b>
            </p>
            <br />
            <br />
            <p className="sectionparagraph -emphasis -orange">
              <b>
                How might we reduce the hassle of collection calls frequency?
              </b>
            </p>
          </div>
        </div>
      </section>
      <br />
      <section className="casesection">
        <div className="container">
          <div className="holder">
            <p className="sectiontitle -bignumber">Key finding 3</p>
            <br />
            <p className="sectionparagraph -emphasis -purple">
              <b>
                Having a bad credit is emotionally negative and a barrier to
                acquiring new financial products
              </b>
            </p>
            <br />
            <p className="sectionparagraph">
              For most of the interviewees, having bad credit is a barrier. They
              don't have many opportunities and access to purchase financial
              products or services.
            </p>
            <br />
            <br />
            <p className="sectionparagraph">
              Respondents also feel uncomfortable, frustrated, desperate,
              distressed and embarrassed due to their current financial
              situation. Unanimously, the feelings and emotions related to
              having a bad credit are negative. All participants reported having
              some life difficulties due to their financial situation. Even
              though the desire to improve the credit is not a reality for these
              people, they feel hope that one day they will be able to settle
              this situation, even with internal or external factors that make
              the solution difficult.
            </p>
            <br />
            <br />
            <p className="sectionparagraph -pink">
              "...No...I think that for me, the fact of having bad credit is
              something that bothers me a lot,...as if you have something that
              is bothering you every day...you have to find a way to solve it,
              but you have nowhere to resolve, you wait for something to happen
              and then you get very frustrated…" Cláudio
            </p>
            <br />
            <br />
            <p className="sectionparagraph -emphasis -orange">
              <b>
                How can we help people feel more comfortable settling their bad
                credit situation?
              </b>
            </p>
            <br />
            <br />
            <p className="sectionparagraph -emphasis -orange">
              <b>
                How can we communicate so that the person who has bad credit
                feels more understood?
              </b>
            </p>
          </div>
        </div>
      </section>
      <br />

      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle">User needs</h3>
            <p className="sectionparagraph">
              The main goal of this study was to discover the User Needs of our
              participants who have bad credit, so we could think of solutions
              to solve their problems. Below you can see what are the
              statements:
            </p>
            <br />
            <ul className="sectionlist -number">
              <li>
                As a bad credit user, I need more empathetic communication about
                my financial situation so that I feel comfortable and hopeful
                about resolving my problems;
              </li>
              <br />
              <li>
                As a bad credit user, I want to pay my debts so that I can
                achieve my personal goals and have a better quality of life;
              </li>
              <br />
              <li>
                As a bad credit user, I need more details about my debt so that
                I can plan financially to pay off the debt;
              </li>
              <br />
              <li>
                As a bad credit user, I need more direct and digitalized service
                so that I receive more objective information and feel less
                bothered by the frequency of contact related to debt.
              </li>
            </ul>
          </div>
        </div>
      </section>
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
export default BoaVista;
