import { useEffect } from "react";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import importSM from "@utils/importSM";
import isClient from "@utils/isClient";

const initParallax = ({ ScrollMagic, TimelineMax }) => {
  ScrollMagicPluginGsap(ScrollMagic, TimelineMax);
  var controller = new ScrollMagic.Controller();

  var tl = new TimelineMax();
  tl.to(".header .logo > svg", 1, {
    y: -500,
    ease: window.Linear.easeNone,
  })
    .to(
      ".header > .-left",
      1,
      {
        y: -50,
        ease: window.Linear.easeNone,
      },
      0
    )
    .to(
      ".header > .-right",
      1,
      {
        y: -30,
        ease: window.Linear.easeNone,
      },
      0
    )
    .to(
      ".description .image-wrapper",
      1,
      {
        y: -150,
        ease: window.Linear.easeNone,
      },
      0
    )
    .fromTo(
      ".first-paragraph",
      {
        y: 0,
        ease: window.Linear.easeNone,
      },
      {
        y: -90,
        ease: window.Linear.easeNone,
      },
      0
    )
    .fromTo(
      ".second-paragraph",
      {
        y: 0,
        ease: window.Linear.easeNone,
      },
      {
        y: -60,
        ease: window.Linear.easeNone,
      },
      0
    );

  const scene = new ScrollMagic.Scene({
    duration: "100%",
  })
    .setTween(tl)
    .addTo(controller);
};

const useParallax = () => {
  useEffect(() => {
    if (isClient()) {
      importSM().then((ScrollMagic) => {
        if (window.gsap) {
          initParallax({ ScrollMagic, TimelineMax: window.TimelineMax });
        } else {
          import("gsap").then((gsap) => {
            initParallax({ ScrollMagic, TimelineMax: gsap.TimelineMax });
          });
        }
      });
    }
  }, []);
};

export default useParallax;
