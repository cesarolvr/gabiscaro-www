import { useEffect } from "react";

const isClient = () => typeof window !== "undefined";

const useScroll = (carouselMounted = false) => {
  useEffect(() => {
    let scroll = null;
    if (isClient()) {
      import("locomotive-scroll").then((LocomotiveScroll) => {
        const Locomotive = LocomotiveScroll.default;
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
      scroll && scroll.destroy();
    };
  }, [carouselMounted]);
};

export default useScroll;
