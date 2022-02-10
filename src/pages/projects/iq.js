import React from "react";
import { Router } from "@reach/router";

import IQ from "@components/Iq";
import Header from "@components/Header";

import useScroll from "@hooks/useScroll";

const Projects = () => {
  useScroll();
  return (
    <div className="scroll-content">
      <Header />
      <Router basepath="/projects">
        <IQ path="/iq" />
      </Router>
    </div>
  );
};
export default Projects;
