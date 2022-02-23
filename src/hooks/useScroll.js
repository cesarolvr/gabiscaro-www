import { useEffect } from "react";

import isClient from '@utils/isClient'

const importLocomotive = async () => {
  if (window.Locomotive) {
    return Promise.resolve(window.Locomotive);
  } else {
    const module = await import("locomotive-scroll").then(
      (LocomotiveScroll) => {
        window.Locomotive = LocomotiveScroll.default;
        return LocomotiveScroll.default;
      }
    );
    return module;
  }
};

const useScroll = () => {
  useEffect(() => {
    let scroll = null;
    if (isClient()) {
      setTimeout(() => {
        importLocomotive().then((Locomotive) => {
          scroll = new Locomotive({
            el: document.querySelector(".scroll-content"),
            repeat: true
          });
        });
      }, 3700);
    }
    return () => {
      window.Locomotive = null;
      scroll && scroll.destroy();
    };
  }, []);
};

export default useScroll;
