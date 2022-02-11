import React from "react";
import { Router } from "@reach/router";

import IQ from "@components/Iq";

import useScroll from "@hooks/useScroll";

const Projects = () => {
  useScroll();
  return (
    <div className="scroll-content">
      <Router basepath="/projects">
        <IQ path="/iq" />
      </Router>
    </div>
  );
};
export default Projects;
