import React from "react";
import { Router } from "@reach/router";

import RamenGo from "@components/ramengo";
import Header from "@components/Header";

import useScroll from "@hooks/useScroll";

const Projects = () => {
  useScroll();
  return (
    <div className="scroll-content">
      <Header />
      <Router basepath="/projects">
        <RamenGo path="/ramengo" />
      </Router>
    </div>
  );
};
export default Projects;
