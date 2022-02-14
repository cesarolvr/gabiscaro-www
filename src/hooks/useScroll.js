import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useScroll = (carouselMounted = false) => {
  useEffect(() => {
    let scroll = null;
    scroll = new LocomotiveScroll({
      el: document.querySelector(".scroll-content"),
      smooth: true,
    });
    return () => {
      scroll && scroll.destroy();
    };
  }, [carouselMounted]);
};

export default useScroll;
