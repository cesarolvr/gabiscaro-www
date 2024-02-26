import { useEffect } from "react";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

import importSM from "@utils/importSM";
import isClient from "@utils/isClient";

const initParallax = ({ ScrollMagic, TimelineMax }) => {
  ScrollMagicPluginGsap(ScrollMagic, TimelineMax);
  var controller = new ScrollMagic.Controller();

  var tl = new TimelineMax();
  tl.fromTo(".-onboarding svg", {
    x: -150,
    ease: window.Power2.easeOut,
  }, {
    x: 90,
    ease: window.Power2.easeOut,
  });

  const scene = new ScrollMagic.Scene({
    triggerElement: ".-onboarding",
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
