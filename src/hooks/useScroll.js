import { useEffect } from "react";

const useScroll = () => {
  useEffect(() => {
    var html = document.documentElement;
    var body = document.body;
    var scene = null;
    const ScrollMagic = window.ScrollMagic;
    const TweenLite = window.TweenLite;

    var scroller = {
      target: document.querySelector(".scroll-content"),
      ease: 0.09, // <= scroll speed
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0,
    };

    var requestId = null;

    TweenLite.set(scroller.target, {
      rotation: 0.01,
      force3D: true,
    });

    const onLoad = () => {
      scene = new ScrollMagic.Scene({
        triggerElement: document.querySelectorAll("body"),
        duration: 500,
      });
      var controller = new ScrollMagic.Controller({
        container: body,
      });

      scene.addTo(controller);

      updateScroller();
      window.focus();
      window.addEventListener("resize", onResize);
      document.addEventListener("scroll", onScroll);
    };

    const updateScroller = () => {
      var resized = scroller.resizeRequest > 0;

      if (resized) {
        var height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
      }

      var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      scroller.endY = scrollY;
      scroller.y += (scrollY - scroller.y) * scroller.ease;

      if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
      }

      TweenLite.set(scroller.target, {
        y: -scroller.y,
      });

      if (scene) {
        scene.refresh();
      }

      requestId =
        scroller.scrollRequest > 0
          ? requestAnimationFrame(updateScroller)
          : null;
    };

    const onScroll = () => {
      scroller.scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    };

    const onResize = () => {
      scroller.resizeRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    };

    onLoad();
    // setTimeout(() => {
    // }, 3000);
    return () => {
      scene.destroy();
    };
  }, []);
};

export default useScroll;
