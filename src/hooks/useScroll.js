import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useScroll = () => {
  useEffect(() => {
    let scroll = null;
    setTimeout(() => {
      scroll = new LocomotiveScroll({
        el: document.querySelector(".scroll-content"),
        smooth: true,
      });
    }, 1000);
    return () => {
      scroll.destroy();
    };
  }, []);
};

export default useScroll;
