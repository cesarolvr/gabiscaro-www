import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const isClient = () => typeof window !== "undefined";

const useScroll = (carouselMounted = false) => {
  useEffect(() => {
    let scroll = null;
    if (!isClient) return;
    setTimeout(() => {
      scroll = new LocomotiveScroll({
        el: document.querySelector(".scroll-content"),
        smooth: true,
        repeat: true,
      });
    }, 1000);
    return () => {
      scroll && scroll.destroy();
    };
  }, [carouselMounted]);
};

export default useScroll;
