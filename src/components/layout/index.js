import React, { useEffect } from "react";
import SmoothScrollbar from "smooth-scrollbar";

const Layout = ({ children }) => {
  useEffect(() => {
    const ScrollMagic = window.ScrollMagic;
    var controller = new ScrollMagic.Controller({
      refreshInterval: 0,
    });

    var scene = new ScrollMagic.Scene().addTo(controller);

    var scrollbar = SmoothScrollbar.init(document.querySelector(".main"));
    scrollbar.track.xAxis.element.remove()

    scrollbar.addListener(() => {
      scene.refresh();
    });
  }, []);

  return <main className="main">{children}</main>;
};

export default Layout;
