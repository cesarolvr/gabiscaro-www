import React from "react";
import { Router } from "@reach/router";

import CleanCity from "@components/cleanCity";
import Header from "@components/Header";

import useScroll from "@hooks/useScroll";

const Projects = () => {
  useScroll()
  return (
    <div className="scroll-content">
      <Header />
      <Router basepath="/projects">
        <CleanCity path="/cleancity" />
      </Router>
    </div>
  );
};
export default Projects;
