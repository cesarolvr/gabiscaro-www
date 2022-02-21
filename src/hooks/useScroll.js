import { useEffect } from "react";

const isClient = () => typeof window !== "undefined";

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

const useScroll = (carouselMounted = false) => {
  useEffect(() => {
    let scroll = null;
    if (isClient()) {
      importLocomotive().then((Locomotive) => {
        setTimeout(() => {
          scroll = new Locomotive({
            el: document.querySelector(".scroll-content"),
            smooth: true,
            repeat: true,
          });
        }, 1000);
      });
    }
    return () => {
      window.Locomotive = null;
      scroll && scroll.destroy();
    };
  }, [carouselMounted]);
};

export default useScroll;
