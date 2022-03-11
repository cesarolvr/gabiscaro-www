import { useEffect } from "react";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import importSM from "@utils/importSM";
import isClient from "@utils/isClient";

const initParallax = ({ ScrollMagic, TimelineMax }) => {
  ScrollMagicPluginGsap(ScrollMagic, TimelineMax);
  var controller = new ScrollMagic.Controller();

  var tl = new TimelineMax();
  tl.to(
    ".case.-first",
    {
      y: -300,
      ease: window.Linear.easeNone,
    },
    0
  ).to(
    ".case.-second",
    {
      y: -150,
      ease: window.Linear.easeNone,
    },
    0
  ).to(
    ".case.-third",
    {
      y: -250,
      ease: window.Linear.easeNone,
    },
    0
  ).to(
    ".case.-forth",
    {
      y: -200,
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

const useHomeParallax = () => {
  useEffect(() => {
    const width = window.innerWidth;
    if (isClient() && width > 1200) {
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

export default useHomeParallax;
